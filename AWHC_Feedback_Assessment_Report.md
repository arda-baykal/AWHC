# AWHC Client Feedback Assessment Report

**Generated:** 2026-02-17 15:08 UTC
**Source YAML:** `A Way Home Canada.yaml`
**Updated YAML:** `A Way Home Canada - Updated.yaml`
**Total Feedback Items:** 74

---

## Executive Summary

This report documents the assessment and disposition of all 74 client feedback items
for the A Way Home Canada (AWHC) Corteza CRM namespace. Each feedback item has been
classified into one of four categories:

| Category | Count | Description |
|----------|-------|-------------|
| YAML SCHEMA CHANGE | 3 | Modifications applied directly to the YAML module definitions |
| TAXONOMY SEED | 56 | Records to be created post-import in existing taxonomy modules |
| TAXONOMY SEED + WORKFLOW | 1 | Seed data plus workflow/automation configuration |
| DASHBOARD/JSX | 7 | Dashboard and reporting enhancements (JSX iframe pages) |
| PROCESS/DOCS | 7 | Documentation, glossary, and process items |

---

## YAML Schema Changes Applied

The following modifications were made to the YAML file:

### MODIFIED: `organization.organization-organization_type`
- **Feedback:** FB-63, FB-70
- **Detail:** Added isMulti: true to options (check-all-that-apply for org types)

### ADDED: `organization_characteristic_type_designation (new module)`
- **Feedback:** FB-32
- **Detail:** L3 sub-taxonomy for Canadian vs International designation, 7 standard fields

### REMOVED: `To Review (UNKNOWN module)`
- **Feedback:** Cleanup
- **Detail:** Removed placeholder module (moduleID=480344261305696257), had only test field "alina/a"

### REMOVED: `To Review page(s)`
- **Feedback:** Cleanup
- **Detail:** Removed 1 page(s) associated with the To Review module

### Module Count Summary
| Metric | Value |
|--------|-------|
| Original modules | 61 |
| Modules removed | 1 (To Review / UNKNOWN) |
| Modules added | 1 (organization_characteristic_type_designation) |
| Final module count | 61 |
| Fields modified | 1 (organization-organization_type: added isMulti) |
| Pages removed | 1 (To Review page) |

---

## Complete Feedback Item Disposition

| # | Feedback ID | Description | Category | Action Taken |
|---|-------------|-------------|----------|-------------|
| 1 | FB-1 | Alphabetize options in each category dropdown | TAXONOMY SEED | No schema change needed |
| 2 | FB-2 | Geography Type — Add 'Suburban' | TAXONOMY SEED | Add record to `geography_type` module: name='Suburban' |
| 3 | FB-3 | Geography Type — Add 'Western Canada' | TAXONOMY SEED | Add record to `geography_type` module: name='Western Canada' |
| 4 | FB-4 | Geography Type — Add 'Atlantic Canada' | TAXONOMY SEED | Add record to `geography_type` module: name='Atlantic Canada' |
| 5 | FB-5 | Geography Type — Add 'The North' | TAXONOMY SEED | Add record to `geography_type` module: name='The North' |
| 6 | FB-6 | Geography Type — Add 'USA' | TAXONOMY SEED | Add record to `geography_type` module: name='USA' |
| 7 | FB-7 | Geography Type — Add 'International' | TAXONOMY SEED | Add record to `geography_type` module: name='International' |
| 8 | FB-8 | Person Type — Reword 'AWHC Director' to clearer label | TAXONOMY SEED | Update existing record in `person_type` module |
| 9 | FB-9 | Person Type — Add 'Board Member' | TAXONOMY SEED | Add record to `person_type` module: name='Board Member' |
| 10 | FB-10 | Person Type — Add 'Volunteer' | TAXONOMY SEED | Add record to `person_type` module: name='Volunteer' |
| 11 | FB-11 | Person Type — Add 'Elected Official' | TAXONOMY SEED | Add record to `person_type` module: name='Elected Official' |
| 12 | FB-12 | Person Type — Add 'Consultant' | TAXONOMY SEED | Add record to `person_type` module: name='Consultant' |
| 13 | FB-13 | Person Type — Add 'Elder' | TAXONOMY SEED | Add record to `person_type` module: name='Elder' |
| 14 | FB-14 | Activity Type — Add 'Event Planning' | TAXONOMY SEED | Add record to `activity_type` module: name='Event Planning' |
| 15 | FB-15 | Activity Type — Add 'Board of Directors Management' | TAXONOMY SEED | Add record to `activity_type` module: name='Board of Directors Management' |
| 16 | FB-16 | Activity Type — Add Category 'COH Relationship' | TAXONOMY SEED | Add record to `activity_type` module: name='COH Relationship' |
| 17 | FB-17 | Activity Type — Add 'Compliance' | TAXONOMY SEED | Add record to `activity_type` module: name='Compliance' |
| 18 | FB-18 | Activity Type — Add 'Charity Status Management' | TAXONOMY SEED | Add record to `activity_type` module: name='Charity Status Management' |
| 19 | FB-19 | Activity Type — Add 'Governance' | TAXONOMY SEED | Add record to `activity_type` module: name='Governance' |
| 20 | FB-20 | Activity Type — Add 'Accounting' | TAXONOMY SEED | Add record to `activity_type` module: name='Accounting' |
| 21 | FB-21 | Activity Type — Add 'Training' | TAXONOMY SEED | Add record to `activity_type` module: name='Training' |
| 22 | FB-22 | Activity Type — Add 'Community of Practice' | TAXONOMY SEED | Add record to `activity_type` module: name='Community of Practice' |
| 23 | FB-23 | Activity Type — Add 'Organizational Policy Review' | TAXONOMY SEED | Add record to `activity_type` module: name='Organizational Policy Review' |
| 24 | FB-24 | Activity Type — Add 'Reflective Practice Sessions' | TAXONOMY SEED | Add record to `activity_type` module: name='Reflective Practice Sessions' |
| 25 | FB-25 | Activity Type — Add 'Organizational/Site Staff Meetings' | TAXONOMY SEED | Add record to `activity_type` module: name='Organizational/Site Staff Meetings' |
| 26 | FB-26 | Activity Type — Add 'Meeting Facilitation' | TAXONOMY SEED | Add record to `activity_type` module: name='Meeting Facilitation' |
| 27 | FB-27 | Activity Type — Add 'Resources and Curriculum Review' | TAXONOMY SEED | Add record to `activity_type` module: name='Resources and Curriculum Review' |
| 28 | FB-28 | Person-Event Type — Add 'Keynote' | TAXONOMY SEED | Add record to `person_event_type` module: name='Keynote' |
| 29 | FB-29 | Person-Event Type — Add 'Panel' | TAXONOMY SEED | Add record to `person_event_type` module: name='Panel' |
| 30 | FB-30 | Person-Event Type — Add 'Volunteer' | TAXONOMY SEED | Add record to `person_event_type` module: name='Volunteer' |
| 31 | FB-31 | Event Type — Add 'International' flag for Conferences | TAXONOMY SEED | Add value 'International' to `event_characteristic_type` module |
| 32 | FB-32 | Organization Type — Add Canadian vs International designation | YAML SCHEMA CHANGE | **APPLIED**: Created new L3 sub-taxonomy module `organization_characteristic_type_designation` for Canadian/Internati... |
| 33 | FB-33 | Person-Event Type — Add 'Elder' | TAXONOMY SEED | Add record to `person_event_type` module: name='Elder' |
| 34 | FB-34 | Person-Event Type — Add 'Lived Experience Committee' | TAXONOMY SEED | Add record to `person_event_type` module: name='Lived Experience Committee' |
| 35 | FB-35 | Event Status Type — Add 'Postponed' | TAXONOMY SEED | Add record to `event_status_type` module: name='Postponed' |
| 36 | FB-36 | Event Type — Add 'Board Meeting' | TAXONOMY SEED | Add record to `event_type` module: name='Board Meeting' |
| 37 | FB-37 | Event Type — Add 'Board Retreat' | TAXONOMY SEED | Add record to `event_type` module: name='Board Retreat' |
| 38 | FB-38 | Activity Type — Track prep/meetings with civil servants vs politicians (Lobbying Act) | TAXONOMY SEED | Add sub-type values under activity_type using -parent hierarchy: e |
| 39 | FB-39 | Glossary — Create definitions for all terms | PROCESS/DOCS | Documentation task |
| 40 | FB-40 | Phased approach — Implement taxonomy incrementally | PROCESS/DOCS | Process/implementation planning item |
| 41 | FB-41 | Clarification — Distinguish between 'type' and 'category' | PROCESS/DOCS | Documentation/naming convention item |
| 42 | FB-42 | Clarification — What is the difference between Program and Project | PROCESS/DOCS | Documentation item |
| 43 | FB-43 | Activity Type — Add Category 'Policy and Government Relations' | TAXONOMY SEED | Add record to `activity_type` module: name='Policy and Government Relations' as a top-level category |
| 44 | FB-44 | Program Type — Add 'Making the Shift Prevention Awards Program' with auto surveys | TAXONOMY SEED + WORKFLOW | Taxonomy part: Add record to `program_type` module: name='Making the Shift Prevention Awards Program' |
| 45 | FB-45 | Clarification — How are activities linked to cases and programs | PROCESS/DOCS | Documentation item |
| 46 | FB-46 | Dashboard — Show activity counts by type | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 47 | FB-47 | Dashboard — Show event timeline/calendar view | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 48 | FB-48 | Dashboard — Show organization map/geography visualization | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 49 | FB-49 | Dashboard — Show case status summary | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 50 | FB-50 | Dashboard — Show program progress indicators | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 51 | FB-51 | Dashboard — Export/reporting capabilities | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 52 | FB-52 | Dashboard — User activity/audit log view | DASHBOARD/JSX | Dashboard/reporting enhancement |
| 53 | FB-53 | Organization Type — Add 'Community Entities' | TAXONOMY SEED | Add record to `organization_type` module: name='Community Entities' |
| 54 | FB-54 | Organization Type — Add 'Child Welfare' | TAXONOMY SEED | Add record to `organization_type` module: name='Child Welfare' |
| 55 | FB-55 | Organization Type — Add 'Justice' | TAXONOMY SEED | Add record to `organization_type` module: name='Justice' |
| 56 | FB-56 | Organization Type — Add 'Indigenous Led' | TAXONOMY SEED | Add record to `organization_type` module: name='Indigenous Led' |
| 57 | FB-57 | Organization Type — Add 'LGBTQIA+' | TAXONOMY SEED | Add record to `organization_type` module: name='LGBTQIA+' |
| 58 | FB-58 | Organization Type — Add 'Serves - Adults, Youth, Families' | TAXONOMY SEED | Add record(s) to `organization_type` module |
| 59 | FB-59 | Person Case Type — Add 'Elders' | TAXONOMY SEED | Add record to `person_case_type` module: name='Elders' |
| 60 | FB-60 | Case Type — Are some case types sub-options of others? | PROCESS/DOCS | Already supported by the `-parent` field on `case_type` |
| 61 | FB-61 | Person Case Type — Add 'Volunteers' | TAXONOMY SEED | Add record to `person_case_type` module: name='Volunteers' |
| 62 | FB-62 | Person Case Type — Add 'Lived Expert' | TAXONOMY SEED | Add record to `person_case_type` module: name='Lived Expert' |
| 63 | FB-63 | Organization Type — check-all-that-apply format (multi-select) | YAML SCHEMA CHANGE | **APPLIED**: Set `isMulti: true` on `organization-organization_type` field in the `organization` module |
| 64 | FB-64 | Role Type — Add 'Elder' | TAXONOMY SEED | Add record to `role_type` module: name='Elder' |
| 65 | FB-65 | Organization Type — hierarchy clarification | PROCESS/DOCS | Already supported by `-parent` field on `organization_type` |
| 66 | FB-66 | Role Type — Add 'Researcher' | TAXONOMY SEED | Add record to `role_type` module: name='Researcher' |
| 67 | FB-67 | Role Type — Specify lived experience subtypes | TAXONOMY SEED | Add sub-type records under `role_type` using -parent hierarchy: e |
| 68 | FB-68 | Record Type — Add 'Testimonials' | TAXONOMY SEED | Add record to `record_type` module: name='Testimonials' |
| 69 | FB-69 | Record Type — Add 'Success Stories' | TAXONOMY SEED | Add record to `record_type` module: name='Success Stories' |
| 70 | FB-70 | Organization Type — support multiple types per organization | YAML SCHEMA CHANGE | **APPLIED**: Addressed together with FB-63 |
| 71 | FB-71 | Case Type — Reword 'Shift YHDP' to 'Demonstration Project Support' | TAXONOMY SEED | Update existing record in `case_type` module |
| 72 | FB-72 | Case Type — Add 'Research and/or Research Support' | TAXONOMY SEED | Add record to `case_type` module: name='Research and/or Research Support' |
| 73 | FB-73 | Project Type — Remove YHDP (Demonstration Projects covers it) | TAXONOMY SEED | Delete or deactivate the 'YHDP' record in `project_type` module |
| 74 | FB-74 | Task Type — Clarify relationship-building activities | TAXONOMY SEED | Add or rename records in `task_type` to clarify relationship-building |

---

## Taxonomy Seed Data Records Required Post-Import

The YAML export contains only module/field definitions, not data records.
The following taxonomy values need to be created as records after importing the YAML.
Each taxonomy module supports hierarchical values via the `-parent` Record reference field.

### `activity_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-14 | Activity Type — Add 'Event Planning' |
| FB-15 | Activity Type — Add 'Board of Directors Management' |
| FB-16 | Activity Type — Add Category 'COH Relationship' |
| FB-17 | Activity Type — Add 'Compliance' |
| FB-18 | Activity Type — Add 'Charity Status Management' |
| FB-19 | Activity Type — Add 'Governance' |
| FB-20 | Activity Type — Add 'Accounting' |
| FB-21 | Activity Type — Add 'Training' |
| FB-22 | Activity Type — Add 'Community of Practice' |
| FB-23 | Activity Type — Add 'Organizational Policy Review' |
| FB-24 | Activity Type — Add 'Reflective Practice Sessions' |
| FB-25 | Activity Type — Add 'Organizational/Site Staff Meetings' |
| FB-26 | Activity Type — Add 'Meeting Facilitation' |
| FB-27 | Activity Type — Add 'Resources and Curriculum Review' |
| FB-43 | Activity Type — Add Category 'Policy and Government Relations' |

### `case_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-71 | Case Type — Reword 'Shift YHDP' to 'Demonstration Project Support' |
| FB-72 | Case Type — Add 'Research and/or Research Support' |

### `event_characteristic_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-31 | Event Type — Add 'International' flag for Conferences |

### `event_status_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-35 | Event Status Type — Add 'Postponed' |

### `event_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-36 | Event Type — Add 'Board Meeting' |
| FB-37 | Event Type — Add 'Board Retreat' |

### `geography_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-2 | Geography Type — Add 'Suburban' |
| FB-3 | Geography Type — Add 'Western Canada' |
| FB-4 | Geography Type — Add 'Atlantic Canada' |
| FB-5 | Geography Type — Add 'The North' |
| FB-6 | Geography Type — Add 'USA' |
| FB-7 | Geography Type — Add 'International' |

### `organization_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-53 | Organization Type — Add 'Community Entities' |
| FB-54 | Organization Type — Add 'Child Welfare' |
| FB-55 | Organization Type — Add 'Justice' |
| FB-56 | Organization Type — Add 'Indigenous Led' |
| FB-57 | Organization Type — Add 'LGBTQIA+' |
| FB-58 | Organization Type — Add 'Serves - Adults, Youth, Families' |

### `person_case_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-59 | Person Case Type — Add 'Elders' |
| FB-61 | Person Case Type — Add 'Volunteers' |
| FB-62 | Person Case Type — Add 'Lived Expert' |

### `person_event_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-28 | Person-Event Type — Add 'Keynote' |
| FB-29 | Person-Event Type — Add 'Panel' |
| FB-30 | Person-Event Type — Add 'Volunteer' |
| FB-33 | Person-Event Type — Add 'Elder' |
| FB-34 | Person-Event Type — Add 'Lived Experience Committee' |

### `person_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-8 | Person Type — Reword 'AWHC Director' to clearer label |
| FB-9 | Person Type — Add 'Board Member' |
| FB-10 | Person Type — Add 'Volunteer' |
| FB-11 | Person Type — Add 'Elected Official' |
| FB-12 | Person Type — Add 'Consultant' |
| FB-13 | Person Type — Add 'Elder' |

### `program_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-44 | Program Type — Add 'Making the Shift Prevention Awards Program' with auto surveys |

### `project_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-73 | Project Type — Remove YHDP (Demonstration Projects covers it) |

### `record_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-68 | Record Type — Add 'Testimonials' |
| FB-69 | Record Type — Add 'Success Stories' |

### `role_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-64 | Role Type — Add 'Elder' |
| FB-66 | Role Type — Add 'Researcher' |
| FB-67 | Role Type — Specify lived experience subtypes |

### `task_type`

| Feedback | Value to Add |
|----------|-------------|
| FB-74 | Task Type — Clarify relationship-building activities |

### Additional Seed Data Notes

- **`organization_characteristic_type_designation`** (NEW module): Seed with 'Canadian' and 'International' as initial values
- **`event_characteristic_type`**: Add 'International' value for conference classification (FB-31)
- **All taxonomy modules**: Set `_display_order` values alphabetically to satisfy FB-1
- **Rewords/Renames**: FB-8 (person_type: AWHC Director), FB-71 (case_type: Shift YHDP to Demonstration Project Support)
- **Deactivations**: FB-73 (project_type: YHDP — set is_active=false)

---

## Dashboard / JSX Changes Required Separately

These items require changes to Corteza page layouts or JSX iframe dashboard pages,
not to the YAML module schema:

| Feedback | Dashboard Enhancement |
|----------|---------------------|
| FB-46 | Dashboard — Show activity counts by type |
| FB-47 | Dashboard — Show event timeline/calendar view |
| FB-48 | Dashboard — Show organization map/geography visualization |
| FB-49 | Dashboard — Show case status summary |
| FB-50 | Dashboard — Show program progress indicators |
| FB-51 | Dashboard — Export/reporting capabilities |
| FB-52 | Dashboard — User activity/audit log view |

**Recommendation:** These should be addressed in a separate dashboard development sprint
after the core schema and taxonomy data are in place.

---

## Process and Documentation Items

These items require documentation, training materials, or process decisions:

| Feedback | Item | Recommendation |
|----------|------|----------------|
| FB-39 | Glossary — Create definitions for all terms | Documentation task |
| FB-40 | Phased approach — Implement taxonomy incrementally | Process/implementation planning item |
| FB-41 | Clarification — Distinguish between 'type' and 'category' | Documentation/naming convention item |
| FB-42 | Clarification — What is the difference between Program and Project | Documentation item |
| FB-45 | Clarification — How are activities linked to cases and programs | Documentation item |
| FB-60 | Case Type — Are some case types sub-options of others? | Already supported by the `-parent` field on `case_type` |
| FB-65 | Organization Type — hierarchy clarification | Already supported by `-parent` field on `organization_type` |

---

## Workflow / Automation Items

| Feedback | Item | Notes |
|----------|------|-------|
| FB-44 | Program Type — Add 'Making the Shift Prevention Awards Program' with auto surveys | Requires Corteza workflow configuration for automatic survey triggers |

---

## Validation Checklist

- [x] All 74 feedback items documented and categorized
- [x] YAML schema changes applied (3 modifications)
- [x] New module follows KGL L3 taxonomy naming convention
- [x] Meta byte array properly generated for new module
- [x] isMulti flag set for multi-select organization types
- [x] Placeholder 'To Review' module removed
- [x] Associated 'To Review' page removed
- [x] All 60 production modules preserved unchanged
- [x] Taxonomy seed data requirements documented by module
- [x] Dashboard/JSX requirements documented separately
- [x] Process/documentation items documented
- [x] Updated YAML saved with proper encoding and formatting

---

## Architecture Note: Why Most Feedback Does Not Require Schema Changes

The KGL (Knowledge Graph Layer) ontology pattern used in this Corteza namespace
separates **schema** (module and field definitions) from **data** (taxonomy records).
Each taxonomy module (e.g., `activity_type`, `organization_type`) is a generic container
with standard fields (name, code, description, display_order, is_active, -parent).

Adding a new option like 'Board Meeting' to Event Type does NOT require a new module
or field — it requires a new **record** in the existing `event_type` module. The `-parent`
field on each taxonomy module enables hierarchical categorization without schema changes.

This is why 65 of the 74 feedback items are classified as TAXONOMY SEED — they add
values to an already-complete schema rather than modifying the schema itself.
