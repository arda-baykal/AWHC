# AWHC Mareto — Changelog

All notable changes to the AWHC Corteza namespace, seed data, and dashboards.

---

## [2026-02-25] KGL 1.4 Compliance & Parent Field Wiring

### Live Corteza Instance Changes
- **Fixed 45 broken `-parent` Record fields** — all taxonomy module parent fields had `moduleID: "0"` (unconfigured Record selector). Each now correctly points to its own module with `labelField` set to `{handle}_name` and `selectType: "default"`
- **Created `OT-SERPRO` "Service Provider"** record in `organization_type` (recordID: `484413153703100417`)
- **Set parent references** on 4 organization types: Child Welfare, Justice, Indigenous Led, LGBTQIA+ now nested under Service Provider
- **Enabled `isMulti: true`** on `organization-organization_type` field in the live `organization` module (was `false` despite YAML specifying `true`)

### Seed Data Changes (16 CSVs)
- **Added `parent_name` column** to all 14 seed CSVs that were missing it (KGL T04 compliance). All 16 CSVs now have consistent 8-column structure: `_id, _name, _code, _description, _display_order, _is_active, parent_name, source`
- **Added `OT-SERPRO` "Service Provider"** to `organization_type.csv` as parent record
- **Set `parent_name = "Service Provider"`** on OT-CHIWEL (Child Welfare), OT-JUST (Justice), OT-INDLED (Indigenous Led), OT-LGBT (LGBTQIA+)

### Feedback Tracker Updates
- **Row 60** (Case Type hierarchy): Marked Done — parent field exists, hierarchy available when needed
- **Row 63** (Org Type multi-select): Marked Done — isMulti:true applied to live instance
- **Row 65** (Org Type Service Provider hierarchy): Marked Done — Service Provider parent created with 4 children

### Documentation
- Added `RECOMMENDATIONS.md` — KGL-informed recommendations for remaining 5 open items
- Added `CHANGELOG.md` — this file
- Updated `AWHC Feedback Tracking Sheet.csv` and client-feedback CSV

---

## [2026-02-25] Seed Data & Live Instance Sync

### Live Corteza Instance Changes
- **Created `GEO-ALBE` "Alberta"** in `geography_type` — was missing from live instance
- **Updated `PET-PRES` "Presenter"** in `person_event_type` — assigned proper ID (was missing)
- **Updated `PJT-DEPROJ` "Demonstration Projects"** in `project_type` — assigned proper ID (was missing)

### Seed Data Changes
- **`person_type.csv`**: Renamed `PT-AWHDIR` from "AWHC Director" to "AWHC Staff Member" to match live instance (FB-9)
- **`person_event_type.csv`**: Added `PET-PRES` "Presenter" record (was in live but missing from seed data)
- **`project_type.csv`**: Added `PJT-DEPROJ` "Demonstration Projects" (FB-71)

### Feedback Tracker Updates
- **Row 31** (International flag): Flipped from Open to Done — `ECT-INTE` exists in live instance
- **Row 32** (Canadian/International designation): Flipped from Open to Done — `OCTD-CANA`/`OCTD-INTE` exist
- **Row 37** (Relationship-building tasks): Flipped from Open to Done — 3 task_types exist

---

## [2026-02-17] Initial YAML Update & Seed Data Creation

### YAML Schema Changes
- **`organization.organization-organization_type`**: Added `isMulti: true` (FB-63, FB-70)
- **Added `organization_characteristic_type_designation` module**: New L3 sub-taxonomy for Canadian/International designation (FB-32), 7 standard KGL fields
- **Removed `To Review` placeholder module**: Cleanup of test module (moduleID: 480344261305696257)

### Seed Data Created (16 CSVs)
- `activity_type.csv` — 19 records (13 new, including 4 Lobbying Act subtypes under Policy and Government Relations)
- `case_type.csv` — 6 records (1 renamed, 1 new)
- `event_characteristic_type.csv` — 7 records (1 new: International flag)
- `event_status_type.csv` — 5 records (1 new: Postponed)
- `event_type.csv` — 5 records (2 new: Board Meeting, Board Retreat)
- `geography_type.csv` — 8 records (6 new)
- `organization_characteristic_type_designation.csv` — 2 records (new module)
- `organization_type.csv` — 11 records (8 new, 3 split from "Serves" categories)
- `person_case_type.csv` — 3 records (all new)
- `person_event_type.csv` — 9 records (5 new)
- `person_type.csv` — 10 records (1 renamed, 5 new)
- `program_type.csv` — 4 records (1 new)
- `project_type.csv` — 5 records (1 new, 1 deactivated)
- `record_type.csv` — 2 records (both new)
- `role_type.csv` — 17 records (2 new + 5 lived experience subtypes)
- `task_type.csv` — 3 records (all new)

### Dashboard Enhancements
- `awhc-dashboard.jsx` — Added 7 metric cards: Fee-for-Service Contracts, Trainings, Fidelity Reviews, Community of Practice, Satisfaction Rates, Org Retention Rate, ESDC Grant Deliverables
- `impact-dashboard.jsx` — Theory of Change view

### Feedback Items Resolved
- 67 of 75 items marked Done
- 3 items marked "Needs Discussion" / "Skipped (Already Supported)"
- 5 items remain Open (conceptual/strategic)

---

## Feedback Tracker Summary

| Status | Count | Items |
|--------|-------|-------|
| **Done** | 70 | All seed data, dashboard, schema, and hierarchy items |
| **Open** | 5 | Rows 39, 40, 41, 42, 45 — conceptual/strategic (see RECOMMENDATIONS.md) |
| **Total** | 75 | |
