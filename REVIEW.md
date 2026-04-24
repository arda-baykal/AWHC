# REVIEW — A Way Home Canada data model

**Reviewer:** awh-lead (Claude)
**Branch:** `review/2026-04-22`
**Artifact:** `instance-export/A Way Home Canada - Updated.yaml` (62 modules, 35,600 lines, exported 2026-01-27)
**Pair-reviewer:** Codex CLI (see `REVIEW_CODEX.md`)
**Machine pass:** `REVIEW_KGL.md` via `kgl-validate v0.1.0`
**KGL alignment (per repo CLAUDE.md):** ✶Navigi / Heart — community-facing case-management

This review is scoped to the data model only. No schema edits; findings are actionable critiques for Arda to disposition.

---

## 1 — KGL alignment

### Finding 1.1 — Every concrete entity maps cleanly to a central node, but only two of the four central nodes are represented

The model's concrete entities resolve as:

| Concrete module | KGL central node | Domain (inferred) |
|---|---|---|
| `person` | ◎Person | ✶Navigi |
| `case` | ◎Person (via person_case_type lookup) | ✶Navigi |
| `event` | ◎Person / ◯Outcome | ✶Navigi |
| `activity` | ◎Person | ✶Navigi |
| `task` | ◎Person (actor) | ✶Navigi |
| `organization` | ◉Resource (institutional) | ✷Mareto |
| `resource` | ◉Resource | ✷Mareto |
| `service` | ◉Resource | ✷Mareto |
| `role` | ◉Resource (authority) | ✷Mareto / ✵Kompas |
| `program` | ◯Outcome | ✹Volto |
| `project` | ◯Outcome | ✹Volto |
| `outcome` | ◯Outcome | ✹Volto |
| `measurement` | ⊙Insight | ✸Karto |
| `record` | ⊙Insight / ◉Resource | ✸Karto |
| `artifact` | ⊙Insight (evidence) | ✸Karto |
| `geography` | context (not a central node — correctly scoped as CONTEXT modifier) | ✶Navigi |

All four central nodes **are** represented across the model. That's good. But the representation is lopsided:

- **◯Outcome** is over-split across `outcome`, `program`, `project`, `event_outcome_type`, `case_outcome_type`, and `outcome_type` — six modules for what is conceptually one central node. No clear rule for when an outcome lives on `outcome` vs rolled up under `program` vs captured as `case_outcome_type`. This is an identity problem, not a taxonomy problem.
- **⊙Insight** is thinly represented — `measurement` is the only true Insight entity. `record` and `artifact` are ambiguous (could be Mareto-Resource or Karto-Insight).

### Finding 1.2 — `artifact` is KGL-rootless

`artifact` (line 10436) has only two fields: `artifact_name` (String) and `artifact_attachment` (File, multi). It has **no record-kind reference to any other entity**. An artifact cannot be linked to a case, a person, an event, an outcome, or anything else. In KGL terms, it is floating — no central-node anchor, no CONTEXT edges. In practice this means a piece of evidence cannot be attached to the case it evidences. **This is a blocker** for any case-management workflow.

### Finding 1.3 — Domain boundary violation: `case-case_characteristic` cross-wires to `person_characteristic_type`

In the `case` module (line 8989-8997):

```yaml
kind: Record
label: Characteristics
name: case-case_characteristic
options:
  labelField: person_characteristic_type_name
  module: person_characteristic_type       # <-- wrong classifier
```

Case characteristics point to the **person_characteristic_type** lookup table. Either (a) case characteristics are supposed to be person characteristics and this field is mis-labelled, or (b) a `case_characteristic_type` module is missing entirely. Either way, a Case is being classified with Person-typed tags — a domain violation by any reading of KGL grammar.

### Finding 1.4 — KGL grammar order on `case` is inverted

Expected order on a concrete module: CENTRAL (id, name, case_type anchor) -> MODIFIER (characteristics, status) -> CONTENT (description, notes, start/end) -> CONTEXT (record-kind to other entities).

Actual `case` module field sequence (by `place`):

```
place 0: case_id          (CENTRAL)
place 1: case-case_type   (CENTRAL)
place 2: case_name        (CENTRAL)
place 3: case_description (CONTENT)
place 4: case_notes       (CONTENT)
place 5: case_start_date  (CONTENT)
place 6: case_end_date    (CONTENT)
place 7: case-case_characteristic (MODIFIER)  <-- out of order
```

Characteristics (a MODIFIER) land after CONTENT. Not a blocker for functionality, but it is a grammar drift — and every `*` concrete entity (`person`, `case`, `event`, `organization`, `program`, `service`, `activity`) has the same inversion. Systemic.

---

## 2 — Grammar: CENTRAL -> MODIFIER -> CONTENT -> CONTEXT

### Finding 2.1 — The "triple store" pattern is half-built

The naming convention (`person_case_type`, `organization_case_type`, `case_event_type`, `person_event_type`, `person_program_type`, `organization_role_type`, `case_geography_type`, etc. — 22+ modules of this shape) **strongly implies** a triple-store relational layer: a junction between two concrete entities, typed by a third.

Actual shape: every one of these `X_Y_type` modules is **a plain typology** — fields `id`, `code`, `name`, `description`, `display_order`, `is_active`, `parent`. They have no record-kind references to `X` or `Y`. They are classifier lookups, not junctions.

That means **there is no junction module anywhere in the namespace**. `person` cannot connect to `case`, `organization` cannot connect to `case`, `case` cannot connect to `event`, `person` cannot connect to `program`. The relationship tables implied by the names **do not exist**.

This is the single biggest structural problem in the model. Either:

- **Option A:** the `*_*_type` modules were meant to be the junctions themselves (each record = one relationship with a type-code attribute). If so, they are missing the record-kind fields to the two concrete entities. Add `person-person_id` and `case-case_id` fields to `person_case_type`.
- **Option B:** the junctions are supposed to be separate from the typologies. If so, add 22+ junction modules named without the `_type` suffix (`person_case`, `organization_case`, etc.) each with record-kind refs plus start/end/consent.

Pick one. Today the model has neither.

### Finding 2.2 — `case_status_type` exists but is not wired

`case_status_type` module (line 18878) defines case statuses. The `case` module has no `case-case_status` record-kind field. Status is definable but not assignable. Same shape as Finding 2.1 but worth calling out — you cannot mark a case as "open", "closed", "transferred", or "consent-withdrawn" in this schema.

### Finding 2.3 — `person` has no PII payload

The `person` module carries: `person_id`, `person_name` (String, required), `person_description`, `person_notes`, `person_start_date`, `person_end_date`, `person-person_type`, `person-person_characteristic`.

No email. No phone. No date of birth. No address. No gender. No pronouns. No preferred language. No indigenous identity. No housing status. No contact consent flag.

Either (a) PII is intentionally excluded from Corteza and kept elsewhere — fine, but it needs to be documented in the schema notes, or (b) the schema is incomplete. There is no way to contact a client, verify an identity, or run demographic reporting with what is present.

### Finding 2.4 — `characteristics` is used as a catch-all

Every concrete entity has a `*-*_characteristic` field (multi Record) pointing to its characteristic typology. This is the single escape hatch for adding any attribute. It is flexible but opaque — a reporting query cannot easily filter by "clients identifying as Indigenous" without joining through the characteristic table and knowing the code.

Not a blocker. But if `characteristics` is where demographic fields end up (gender, ethnicity, housing history), they **inherit the same sensitivity level as characteristic itself** — which is `0`. See Finding 4.2.

---

## 3 — Case-management fit

### Finding 3.1 — Returning clients cannot be modelled

With no `person_case` junction (Finding 2.1) and no person-to-person relationship of any kind, a person who re-presents to AWH after a gap has no way to be connected to their prior case history. Options:

- Create a new `case` record — prior case is orphaned, no continuity.
- Reopen the prior `case` via `case_end_date` = null — no audit trail of the re-engagement event.

There is no "episode of service" concept (open-case → closed-case → open-case again against the same person, with a preserved history).

### Finding 3.2 — Multi-household / family units cannot be modelled

There is no household entity. There is no person-to-person relationship (parent, sibling, guardian, partner). A family presenting together would need to be represented as (a) one `person` record with other members in `person_notes` — unqueryable, or (b) separate unlinked `person` records — no way to report "X families served" vs "X individuals served". This is a data-quality problem for any AWH funder report that requires family-unit counts.

### Finding 3.3 — Consent withdrawal has no mechanism

There is no `consent` entity, no `consent_status` field, no `consent_withdrawn_at` timestamp. `case_status_type` can encode "consent-withdrawn" as a status code, but (a) the status is not wired to `case` (Finding 2.2), and (b) status at the case level does not cascade to `measurement`, `record`, `artifact`, `event` — all of which would need to be suppressed or deleted on withdrawal. PIPEDA requires a demonstrable mechanism. This schema cannot demonstrate one.

### Finding 3.4 — Case lifecycle timestamps are floor-level only

Every concrete entity has `start_date` / `end_date` DateTime fields. That is enough to bracket existence. It is **not** enough to capture:

- Referral received timestamp (who referred, when).
- First contact attempt timestamp.
- Case assignment to a worker.
- Transfer between workers.
- Case review / supervision sign-off events.

These would normally live on `event` records linked to the `case`. But — again — there is no `case_event` junction. `case_event_type` is a typology that classifies case events that cannot be linked to any case.

### Finding 3.5 — Worker / user attribution is missing

No `user` module, no `case-assigned_worker` field, no `event-attributed_user` field. Who did what, when? The Corteza system fields (`createdBy`, `updatedBy`) capture the last-writer, but that is not domain-level attribution — a supervisor editing a record overwrites the worker of record. Case-management reviews rely on worker-level productivity and caseload stats. Not available here.

### Finding 3.6 — Re-identification risk from thin person plus rich characteristics

If `characteristics` is how demographics are captured (Finding 2.4), then in a small-program context (youth at a specific drop-in) the combination of `person_start_date` + two or three characteristics (age, gender, indigenous-identity) re-identifies a client. This is a classic small-cell privacy failure. The schema does not enforce k-anonymity at the reporting layer, and has no `suppression_threshold` or similar field at the program level.

---

## 4 — SOC 2 / PIPEDA posture

### Finding 4.1 — `sensitivitylevelid: 0` across the entire namespace

Every single field — including `person_name`, `person_notes`, `person_description`, `artifact_attachment`, every `*_notes` field — has `config.privacy.sensitivitylevelid: 0`. Zero is the default "public / unclassified" level in Corteza. Zero use of the DAL privacy feature across 62 modules and ~400 fields.

Under PIPEDA:

- `person_name` is personal information (PI). Must be scoped.
- `person_notes`, `case_notes`, `event_notes`, `measurement_notes` are likely to contain sensitive PI (case-worker observations, health context, substance use). Must be scoped.
- `artifact_attachment` (File, multi) could contain anything — ID documents, medical records, court orders. Must be scoped, retention-policied, and access-gated.

Concrete action: raise `sensitivitylevelid` to 2 or higher on: `person_name`, every `*_notes` field (there are 15+), `artifact_attachment`, `person_description`, `case_description`. Set `usagedisclosure` text per PIPEDA Principle 2 (Identifying Purposes) on the same fields.

### Finding 4.2 — No PII vs de-identified-analytics separation

The schema has no audit of which fields are PII, quasi-identifiers, or de-identified analytics. There is no separate `person_analytics` projection (or `person_deidentified` view). Reporting queries would run on the same store as clinical data. SOC 2 CC6.1 (logical access) and PIPEDA Principle 7 (safeguards) both require this separation.

### Finding 4.3 — File attachments (`artifact_attachment`) have no governance

`artifact_attachment` is a `File` field with `maxSize: 0`, `allowImages: true`, `allowDocuments: true`, `clickToView: true`, `enableDownload: true`, `inline: true`, and — see Finding 1.2 — no link to any case or person. Anyone who can read the `artifact` module can see every attachment, and the attachment carries no retention metadata, no sensitivity tag, no consent-of-collection reference.

Concrete action: at minimum, add `artifact-case` and `artifact-person` record-kind links, add a `sensitivitylevelid` on `artifact_attachment`, add a retention policy field, and gate `enableDownload` behind a role check.

### Finding 4.4 — No record-level audit of access (read events)

Corteza's `recordrevisions.skip: false` captures write events on most modules (good). But PIPEDA and SOC 2 both require **read-access** logs on sensitive PI. Corteza does not provide this natively at the module level. Either (a) add a `person_access_log` companion module that workers have to create a row in to access a `person` (manual but auditable), or (b) handle at the application / workflow layer. Either way, the schema as shipped has no mechanism.

### Finding 4.5 — `usagedisclosure` is empty everywhere

Every field I sampled has `config.privacy.usagedisclosure: ''`. This is the field Corteza exposes to end-users explaining why a data point is collected. PIPEDA Principle 3 (Consent) and Principle 8 (Openness) require this text. Needs to be populated on every PI-bearing field, minimally.

---

## 5 — Open questions for Arda

These are not critiques — they are questions whose answers will reshape several of the findings above.

1. **Is this namespace the System of Record, or a reporting projection?** If PII lives in a separate system and this Corteza namespace receives pseudonymized records, several PIPEDA findings (4.1, 4.2) are moot. If this IS the SOR, they are blockers.
2. **Triple-store intent on `*_*_type` modules:** Option A (junctions-with-types) or Option B (separate junction modules)? Picking one drives 22+ module changes.
3. **Are returning clients currently modelled as same-person-new-case, or new-person-new-case?** Your answer tells me whether `person` needs a deduplication mechanism and whether `case` needs a `prior_case` self-reference.
4. **Households — is AWH's unit of service individual, family, or both?** If family, we need a `household` module. If individual, we should document that families are not first-class.
5. **Who uses Corteza — case workers, supervisors, data analysts, execs?** The access-log answer (Finding 4.4) depends on this. Workers need row-level access control; analysts need aggregate-only views.
6. **Is `artifact` meant to be generic (any evidence type) or specific (ID documents)?** The two demand very different governance. Today it is generic in shape and un-linked in structure — the worst of both.
7. **Program vs Project vs Case — what is the distinction in AWH operations?** The model has all three concrete entities; Outcomes can be rolled up to any of the three via distinct `*_outcome_type` modules. Without an operational definition, reporting will produce double-counts.
8. **What is the retention policy per entity class?** PIPEDA requires destruction or de-identification when no longer needed for the identified purpose. Schema has no `retention_until` field on any entity.
9. **Intended front-end pattern** — the namespace includes a `home` page and module-level pages, suggesting Corteza Compose is used directly. Is that the worker UI, or is Corteza API-only with a separate front-end? Finding 4.4's remediation depends on this.
10. **KGL annotations — is there an intent to add `kgl-domain` and `kgl-central-node` as first-class module metadata?** If yes, this can be done via `meta` JSON on each module handle. Doing it now locks in the mapping and makes `kgl-validate` deterministic.

---

## Summary

**Production blockers (fix before data goes in):**

- F1.2 — `artifact` has no links; evidence floats unattached.
- F1.3 — `case-case_characteristic` points to `person_characteristic_type`; cross-wire.
- F2.1 — no junction modules exist; persons cannot connect to cases, organizations to cases, cases to events, etc.
- F2.2 — `case_status_type` exists but is not wired to `case`.
- F3.3 — no consent-withdrawal mechanism.
- F4.1 — every field is `sensitivitylevelid: 0`; no PIPEDA scoping anywhere.
- F4.3 — `artifact_attachment` is ungoverned.

**Structural concerns (need design decisions):**

- F2.3 — `person` carries no PII payload; is this intentional?
- F3.1, F3.2 — returning clients and multi-household cases cannot be modelled.
- F3.5 — no worker-level attribution beyond Corteza system fields.
- F1.1 — `◯Outcome` is over-split across six modules.

**Mechanical drift (fix during cleanup):**

- F1.4 — grammar order inversion on every concrete entity (characteristics after content).
- F4.5 — `usagedisclosure` empty everywhere.

**Machine pass:** see `REVIEW_KGL.md` for the per-entity coverage table + score.
**Second opinion:** see `REVIEW_CODEX.md` for Codex's pair-review (edge cases Claude missed).
