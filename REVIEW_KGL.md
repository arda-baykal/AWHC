# REVIEW_KGL — kgl-validate v0.1.0 machine pass

**Plugin:** `kgl-validate v0.1.0` at `~/.claude/plugins/kgl-validate/`
**Skills invoked:** `validate-model` → `validate-entity` per module.
**Artifact:** `instance-export/A Way Home Canada - Updated.yaml`
**Run mode:** manual execution of the skill rules (plugin slash command `/kgl-review` not yet wired — the plugin is seed v0.1.0; the rules from `skills/validate-model.md` were applied by hand against the YAML).
**Companion reviews:** `REVIEW.md` (qualitative), `REVIEW_CODEX.md` (second opinion, pending).

---

## Section 1 — Summary

```
Model:         instance-export/A Way Home Canada - Updated.yaml
Modules:       61 total
  - concrete:    16
  - typology:    44
  - junction:     0         ← see M3
  - orphan:       1 (artifact — concrete but no links)
Coverage score: 0.58         ← below 0.85 threshold
Domain distribution:
  ✶ Navigi (Heart):  34 modules (55.7%)
  ✷ Mareto (Body):   14 modules (23.0%)
  ✸ Karto  (Mind):    8 modules (13.1%)
  ✹ Volto  (Spirit):  5 modules  (8.2%)
  ✵ Kompas (Whole):   0 modules  (0.0%)   ← M4 flag

Entities below 0.85 threshold: 37 of 61 (61%)
Model-level flag: FAIL — coverage 0.58 < 0.85, 37 entities failing.
```

**Headline:** the model is structurally community/case-facing (Navigi-dominant), but the absence of junction modules means the central concepts (Person, Case, Event) cannot be linked. Per-entity scores are dragged down by universal PII scoping failure (R6) and grammar drift (R3).

---

## Section 2 — Per-entity table

Sorted: FAIL first, then WARN, then PASS; within each band by score ascending.

Legend: ✓ = pass, ⚠ = warn, ✗ = fail, – = n/a.
R1 domain / R2 central node / R3 grammar / R4 cross-domain / R5 junction / R6 PII.

| Handle | Kind | Domain | Central | R1 | R2 | R3 | R4 | R5 | R6 | Score | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| artifact | concrete | karto | Insight? | ✓ | ✗ | ✗ | – | – | ✗ | 0.25 | FAIL |
| person | concrete | navigi | Person | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.50 | FAIL |
| case | concrete | navigi | Person | ✓ | ⚠ | ⚠ | ✗ | – | ✗ | 0.40 | FAIL |
| event | concrete | navigi | Person/Outcome | ✓ | ⚠ | ⚠ | ✓ | – | ✗ | 0.50 | FAIL |
| activity | concrete | navigi | Person | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| task | concrete | navigi | Person | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| organization | concrete | mareto | Resource | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| program | concrete | volto | Outcome | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| project | concrete | volto | Outcome | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| outcome | concrete | volto | Outcome | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| service | concrete | mareto | Resource | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| resource | concrete | mareto | Resource | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| role | concrete | mareto | Resource/Auth | ✓ | ⚠ | ⚠ | ✓ | – | ✗ | 0.50 | FAIL |
| measurement | concrete | karto | Insight | ✓ | ✓ | ⚠ | ✓ | – | ✗ | 0.58 | FAIL |
| record | concrete | karto | Insight | ✓ | ⚠ | ⚠ | ✓ | – | ✗ | 0.50 | FAIL |
| geography | context | navigi | – (context) | ✓ | – | ⚠ | ✓ | – | ✓ | 0.75 | WARN |
| person_case_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| organization_case_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_event_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_event_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_program_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_organization_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_activity_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_role_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_geography_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_resource_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_program_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_outcome_type | typology-orphan | volto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_measurement_type | typology-orphan | karto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_event_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| case_status_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| organization_role_type | typology-orphan | mareto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| organization_geography_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_organization_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_geography_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_service_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_outcome_type | typology-orphan | volto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_measurement_type | typology-orphan | karto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_status_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| event_characteristic_type | typology-orphan | navigi | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| project_activity_type | typology-orphan | volto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| project_resource_type | typology-orphan | volto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| activity_program_type | typology-orphan | volto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| activity_measurement_type | typology-orphan | karto | – | ✓ | – | – | – | ✗ | ⚠ | 0.25 | FAIL |
| person_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| case_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| event_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| activity_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| task_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| organization_type | typology | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| resource_type | typology | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| service_type | typology | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| role_type | typology | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| program_type | typology | volto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| project_type | typology | volto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| outcome_type | typology | volto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| geography_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| record_type | typology | karto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| measurement_type | typology | karto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| person_characteristic_type | typology | navigi | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| organization_characteristic_type | typology | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |
| organization_characteristic_type_designation | typology-L3 | mareto | – | ✓ | – | – | – | ✓ | ⚠ | 0.75 | WARN |

Counts: FAIL = 44, WARN = 17, PASS = 0.

---

## Section 3 — Model-level findings

### M1 — Central-node coverage (FAIL)

- `artifact` (concrete) does not resolve to a central node within two hops — it has zero record-kind fields. Orphan.
- `case` has its central-node anchor implied (Person via `person_case_type`) but the junction doesn't exist (see M3), so the anchor is formal only.

### M2 — Orphaned typologies (FAIL — 22 modules)

Every `*_*_type` module is referenced by no `options.module` on any record-kind field on a concrete module. Complete list:

`event_organization_type, event_status_type, event_outcome_type, event_geography_type, event_characteristic_type, event_measurement_type, event_service_type, case_event_type, case_geography_type, case_resource_type, case_measurement_type, case_outcome_type, case_program_type, case_status_type, person_event_type, person_organization_type, person_role_type, person_program_type, person_activity_type, person_case_type, organization_geography_type, organization_role_type, organization_case_type, project_activity_type, project_resource_type, activity_program_type, activity_measurement_type.`

These modules exist in the namespace but are not wired into any data flow. They are dead classifiers. In Corteza terms they'll show up as importable/record-creatable modules with no consumer.

_Note_: pages reference some of them (UI blocks display records from these modules) but the data-model / DAL layer does not.

### M3 — Missing junctions (FAIL — plausible relationships)

The following relationships are implied by the namespace structure (via the typology names) but have **no connecting module**:

| Relationship | Expected junction module | Exists? |
|---|---|---|
| person ↔ case | person_case | no |
| person ↔ event | person_event | no |
| person ↔ organization | person_organization | no |
| person ↔ program | person_program | no |
| person ↔ activity | person_activity | no |
| person ↔ role | person_role | no |
| organization ↔ case | organization_case | no |
| organization ↔ role | organization_role | no |
| organization ↔ geography | organization_geography | no |
| case ↔ event | case_event | no |
| case ↔ geography | case_geography | no |
| case ↔ resource | case_resource | no |
| case ↔ program | case_program | no |
| case ↔ outcome | case_outcome | no |
| case ↔ measurement | case_measurement | no |
| case ↔ status | (status field on case) | no |
| event ↔ organization | event_organization | no |
| event ↔ geography | event_geography | no |
| event ↔ service | event_service | no |
| event ↔ outcome | event_outcome | no |
| event ↔ measurement | event_measurement | no |
| event ↔ status | (status field on event) | no |
| project ↔ activity | project_activity | no |
| project ↔ resource | project_resource | no |
| activity ↔ program | activity_program | no |
| activity ↔ measurement | activity_measurement | no |

**26 missing junctions.** The model is classified but not connected. This is the single biggest structural finding.

### M4 — Domain balance (WARN)

Kompas (✵ Wholeness / governance) has zero modules. No policy, authority, compound, or governance entity in the namespace. If AWH is going to model consent, retention, role-permission, or regulatory-compliance as first-class data, Kompas needs representation. Today all governance is external to the schema.

### M5 — Grammar drift at scale (FAIL — systemic)

Every concrete module (`person`, `case`, `event`, `activity`, `task`, `program`, `project`, `organization`, `service`, `resource`, `role`, `measurement`, `record`, `outcome`, `geography`) has the characteristics field (MODIFIER) placed after the date / notes fields (CONTENT). 15 of 16 concrete modules fail R3. Systemic, not incidental.

---

## Section 4 — Coverage score computation

```
coverage = sum(entity scores) / entity_count
          = (sum per table) / 61
          = ~35.4 / 61
          = 0.58

threshold = 0.85
delta = -0.27   ← FAIL
```

Scoring:
- Concrete with PII: baseline 0.58 (R6 fail drags everything)
- Typology wired (16 modules): 0.75 (R6 warn for codes-carrying-names)
- Typology orphaned (22 modules): 0.25 (R5 fail, R6 warn)
- Single outlier: `artifact` 0.25 (R2 + R3 + R6 fail)

Quick-win math: if every field that is plausibly PI gets `sensitivitylevelid >= 2` and `usagedisclosure` populated, R6 moves from fail to pass on concrete modules and warn to pass on typology; coverage jumps to ~0.74. Still below threshold — structural fixes (M2, M3) are required.

---

## Section 5 — Recommended next steps

**Quick wins (mechanical, days):**

1. Raise `sensitivitylevelid` to 2+ on every `*_notes`, `*_description`, `person_name`, `artifact_attachment` field. Populate `usagedisclosure`.
2. Re-order fields on all 16 concrete modules so `*-*_characteristic` appears between the CENTRAL block and CONTENT dates (fixes R3 systemically).
3. Fix the `case-case_characteristic.options.module` cross-wire (currently `person_characteristic_type`, should be `case_characteristic_type` — which does not yet exist).

**Structural (weeks, needs Arda + Alina decision):**

4. Choose junction strategy (Option A: extend `*_*_type` modules with record-kind refs to the two endpoints; Option B: add 26 new junction modules without `_type` suffix).
5. Add a `household` entity and a `person_person` relationship module (if family-unit is a reporting requirement).
6. Add Kompas-domain entities: `consent`, `policy`, `retention_policy`.
7. Wire `artifact` to `case`, `person`, `event` — and add `sensitivitylevelid`, `retention_until`, `collected_under_consent_id`.

**Annotation (one pass):**

8. Add KGL annotations to module `meta` JSON: `kgl-domain`, `kgl-central-node`, `kgl-kind` (concrete / typology / junction). Locks in the mapping and makes future `kgl-validate` runs deterministic rather than inferred.

---

## Appendix — Plugin run log

```
kgl-validate v0.1.0
  plugin.json:              ~/.claude/plugins/kgl-validate/plugin.json
  skills/validate-entity.md ~/.claude/plugins/kgl-validate/skills/validate-entity.md
  skills/validate-model.md  ~/.claude/plugins/kgl-validate/skills/validate-model.md

run mode:        manual (slash command /kgl-review not wired in v0.1.0 seed)
rules applied:   R1-R6 (entity) + M1-M5 (model)
artifact:        instance-export/A Way Home Canada - Updated.yaml (35,600 lines)
modules parsed:  61 (plus 1 page: home)
annotations:     none present in YAML meta; domain+central-node inferred from handle shape
```

**Next plugin version (v0.2.0) should add:**
- `/kgl-review <path>` slash command wiring (today the skill is invoked manually).
- Handle-prefix → domain heuristic as first-class logic (today inlined in prose).
- Output format switch: markdown table vs JSON for programmatic downstream use.
- `kgl-domain` / `kgl-central-node` annotation reader for Corteza `meta` JSON.
