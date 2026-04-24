# REVIEW_CODEX — Codex CLI pair review (placeholder)

**Status:** PENDING — Codex CLI session to be run separately.
**Partner file:** `REVIEW.md` (Claude's review, this branch).
**Artifact under review:** `instance-export/A Way Home Canada - Updated.yaml`.
**Branch:** `review/2026-04-22`.
**Pair pattern:** mandatory per `~/weekly-ops/streams/awh-engagement/PROJECT.md`. Review is not "done" until this file is filled.

---

## Why this file exists

Every AWH data-model review lands with a second-opinion pass from Codex CLI. Claude rationalizes; Codex adversarially pressure-tests. We want:

1. **Entities Claude missed or mis-classified** — wrong domain tag, wrong central node, ignored module.
2. **Case-management edge cases Claude glossed over** — returning clients, multi-household, consent withdrawal, worker-transfer mid-case, data subject access request (DSAR).
3. **Logical errors in Claude's KGL alignment claims** — e.g. Claude asserts `role` is Mareto when it reads more naturally as Kompas-Authority.
4. **PIPEDA-sensitive fields Claude marked benign** — or didn't flag at all.
5. **Line-level references** — cite the YAML line number for every claim.

Codex tends to over-defend on schema topics. Weight its findings by severity and specificity, not count.

---

## Prompt for the Codex CLI session

Copy-paste this into the Codex CLI pair-review session:

```
You are the Codex CLI second-opinion reviewer for the A Way Home Canada Corteza
data model. You are reviewing Claude's REVIEW.md (this branch review/2026-04-22
on helpseeker/awhc) against the source instance-export/A Way Home Canada -
Updated.yaml.

Your job is to be adversarial but useful. Focus on:

1. ENTITIES CLAUDE MISSED OR MIS-CLASSIFIED
   - Enumerate every one of the 62 modules in the YAML. For each, state the
     KGL domain (Mareto / Karto / Navigi / Volto / Kompas) and central-node
     anchor (Resource / Person / Insight / Outcome) you would assign.
   - Compare against Claude's table in REVIEW.md Finding 1.1. Flag any entity
     Claude placed wrong, or any entity Claude skipped. Cite YAML line.

2. CASE-MANAGEMENT EDGE CASES
   Walk through these client-journey scenarios and identify which schema
   changes they require (not just which findings in REVIEW.md cover them):
     (a) Client presents at AWH drop-in, is triaged, declines services, leaves.
         Returns 18 months later under a different name with different ID.
     (b) Three siblings aged 14, 16, 17 present as a family unit needing
         emergency shelter. Younger sibling is under child-welfare. Older two
         are not.
     (c) Client signs consent at intake, receives 6 months of case management,
         then withdraws consent and demands deletion of all records.
     (d) Worker A opens a case. Worker A leaves AWH. Worker B inherits the case.
         Six months later a funder audit asks "who made clinical decision X
         on date Y?"
     (e) DSAR: client requests a copy of all data AWH holds on them.
     (f) Data-breach scenario: a subset of person records is compromised.
         Which downstream records need to be notified / suppressed?
   Flag any scenario for which the current schema has no clean mechanism.

3. LOGICAL ERRORS IN KGL ALIGNMENT
   - Claude mapped `role` to Mareto/Kompas. Challenge this — is `role` a
     resource, an authority, or a relational tag?
   - Claude called `record` and `artifact` "ambiguous between Mareto and
     Karto". Pick one and defend it.
   - Claude claimed every `X_Y_type` module is "a plain typology, not a
     junction" (Finding 2.1). Spot-check at least 5 of the 22+ `*_*_type`
     modules and confirm or refute.
   - Review Claude's claim in Finding 1.3 that
     `case-case_characteristic.options.module = person_characteristic_type`
     is a cross-wire. Find the line in the YAML. Confirm exact text.

4. PIPEDA-SENSITIVE FIELDS MARKED BENIGN
   Grep every field in the YAML. Flag any field whose NAME or LABEL suggests
   PII (email, phone, dob, address, etc.) that Claude did not call out.
   Separately, flag any field Claude mentioned but did not escalate to
   sensitivitylevelid>0 requirement.

5. STRUCTURAL ISSUES CLAUDE UNDER-WEIGHTED
   - Corteza `recordrevisions.enabled: false` vs `skip: false` on module vs
     field level — which modules have revisions off entirely?
   - `namespaceID: AWHC` on every module — any module where this is missing
     or wrong?
   - Any module with duplicate field names (e.g. two fields both named
     `_id`)?
   - Any `options.module` reference pointing to a module handle that does not
     exist in the YAML?

OUTPUT FORMAT:

Produce a markdown document with these sections, each with line-level YAML
references:
  - Entities Claude Mis-classified
  - Entities Claude Missed
  - Edge Cases Not Addressed by Current Schema
  - KGL Logical Errors
  - PII Fields Under-scoped
  - Structural Issues Under-weighted
  - Codex's Top 5 Priorities (ranked by severity x specificity)
  - Disagreements with Claude (where Codex thinks Claude overstated)

Do not repeat findings that Claude already captured well. Do not open edits
to the YAML. Review only.
```

---

## Codex findings

_To be filled during the Codex CLI session. This file's `## Codex findings` section is the deliverable — replace this placeholder text with Codex's output._

### Entities Claude mis-classified

_(Codex fills)_

### Entities Claude missed

_(Codex fills)_

### Edge cases not addressed by current schema

_(Codex fills)_

### KGL logical errors

_(Codex fills)_

### PII fields under-scoped

_(Codex fills)_

### Structural issues under-weighted

_(Codex fills)_

### Codex's top 5 priorities

_(Codex fills — ranked by severity × specificity)_

### Disagreements with Claude

_(Codex fills — where Codex thinks Claude overstated)_

---

## Triage back into REVIEW.md

After Codex returns:

1. Read the "Codex's top 5 priorities" section first.
2. For each priority, decide: accept (add to REVIEW.md as a new finding), partially accept (amend an existing REVIEW.md finding), reject (document the rejection here with reasoning).
3. Update the `Summary` section of REVIEW.md to promote any Codex-added blocker to the "Production blockers" list.
4. Note any findings that Arda should resolve in a live conversation (not async) — flag in the Slack DM (see `deliverables/arda-review-narrative.md`).
