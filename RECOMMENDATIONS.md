# AWHC Open Items — Recommendations

**Date:** 2026-02-25
**Context:** 5 of 75 feedback items remain open. All are conceptual/strategic — no code or configuration changes needed. These recommendations are informed by the KGL v1.3 ontology specification and the current AWHC data model.

---

## Row 39 & 45: Define Case vs Program vs Project

**Feedback:** "Define what qualifies as a Case versus a Program" and "Clarify distinction between Cases, Projects, and Programs"

**Recommendation:**

These three concepts map to distinct KGL canonical nodes with clear semantic boundaries:

| Concept | KGL Node | Glyph | Definition | AWHC Example |
|---------|----------|-------|------------|--------------|
| **Case** | `case` | ■ | Container for a service journey — tracks a specific person or organization through a sequence of activities, events, and outcomes | An AWHC engagement with a specific Community Entity to implement Housing First: includes site visits, training sessions, fidelity reviews, and outcomes over 12-18 months |
| **Program** | `program` | ▣ | Structured service offering — the initiative container that defines what is delivered, funded, and measured | "Housing First" as a model; "Making the Shift Prevention Awards Program"; "Core Program" |
| **Project** | `project` | ᚳ | A funded work package — time-bound, grant-specific, with defined deliverables and budget | "ESDC Reaching Home 2025-26" grant; "INFC Community Engagement Project" |

**Key distinctions:**
- A **Program** defines *what* AWHC delivers (the model, methodology)
- A **Project** defines *how it's funded* (the grant, budget, deliverables, timeline)
- A **Case** tracks *who receives it* (the organization or person being supported)

**Relationship:** One Program can have many Projects (funding cycles). One Project can produce many Cases (organizations served under that grant). One Case can span multiple Projects (if a CE is served across funding cycles).

**Action:** Adopt these definitions. No schema changes needed — the data model already has separate `case`, `program`, and `project` modules with their own type taxonomies.

---

## Row 40: Create a Glossary of Terms for Mareto

**Feedback:** "Create a glossary of terms for Mareto (Case, Program, etc.) — ensure team tracks information in the right places consistently"

**Recommendation:**

The glossary below uses the KGL canonical definitions adapted to AWHC's operational language. This should be reviewed and approved by the AWHC team, then shared with all Mareto users.

### Proposed Glossary

| Term | Definition | Where to Track in Mareto |
|------|------------|--------------------------|
| **Person** | An individual AWHC interacts with — staff, board members, consultants, elders, elected officials, volunteers, clients | Person module |
| **Organization** | An agency, institution, or entity AWHC works with — community entities, government, service providers, funders | Organization module |
| **Case** | A tracked engagement — the full journey of working with a person or organization, from intake through activities to outcomes | Case module. Use Case Type to classify (Initiative, Program, Project, Strategy, etc.) |
| **Program** | A structured service offering that AWHC delivers — defines the model and methodology | Program module. Use Program Type to classify (Core Program, Pilot, Support, MtS Prevention Awards) |
| **Project** | A funded work package — tied to a specific grant, budget, and set of deliverables with a defined timeline | Project module. Use Project Type to classify (Core Program, Pilot, Demonstration Projects) |
| **Activity** | A discrete tracked action — a specific thing someone did as part of a case (training, meeting, policy review, community of practice session) | Activity module. Use Activity Type to classify, including parent categories (Policy and Government Relations, COH Relationship) |
| **Event** | A significant occurrence — conferences, board meetings, training events, workshops | Event module. Tag with Event Characteristics (International, Multi-Day, etc.) |
| **Task** | A small work item — quick calls, coffee meetings, relationship check-ins | Task module |
| **Record** | A document or artifact attached to a case — testimonials, success stories | Record module |
| **Role** | The capacity in which a person engages — facilitator, researcher, lived experience expert (with subtypes) | Role module |
| **Service** | A delivered intervention or support offering | Service module |
| **Measurement** | An assessment, score, or evaluation result | Measurement module |
| **Outcome** | A result achieved — the impact or change measured | Outcome module |

### Type vs Status vs Characteristic

| Modifier | Purpose | Example |
|----------|---------|---------|
| **Type** | Classifies *what* something is — permanent category | Organization Type: Government, Service Provider, Non-Profit |
| **Status** | Tracks *where* something is in a workflow — changes over time | Event Status: Planning, Confirmed, Completed, Postponed, Cancelled |
| **Characteristic** | Tags *attributes* — can have multiple per entity | Event Characteristic: International, Multi-Day, CEU Credits Available |

**Action:** Review this glossary with the AWHC team. Once approved, it could be added to the Mareto home page as a reference panel or distributed as a one-page guide.

---

## Row 41: Theory of Change Alignment

**Feedback:** "Clarify to what extent the Theory of Change underpins the Mareto installation — is it based on AWH's actual full Theory of Change?"

**Recommendation:**

The impact dashboard (`impact-dashboard.jsx`) already includes a Theory of Change view. The question is whether the metrics and indicators tracked in Mareto map to AWHC's formal Theory of Change document.

**Suggested approach:**
1. Obtain AWHC's formal Theory of Change document (inputs → activities → outputs → outcomes → impact)
2. Map each ToC element to the corresponding Mareto module:
   - **Inputs** → Resource, Organization (funders, partners)
   - **Activities** → Activity module (with activity_type taxonomy)
   - **Outputs** → Measurement, Record (counts, deliverables)
   - **Outcomes** → Outcome module (with outcome_type taxonomy)
   - **Impact** → Dashboard metrics, Outcome aggregations
3. Identify any gaps — ToC elements not currently trackable in Mareto
4. Update the impact dashboard to explicitly label metrics by their ToC stage

**Action:** Schedule a working session with the AWHC team to walk through their ToC document alongside the Mareto data model. This is a 1-2 hour exercise, not a technical change.

---

## Row 42: Phased Approach to What is Tracked

**Feedback:** "Discuss phased approach to what is tracked and why" (raised by Katie)

**Recommendation:**

KGL's Selection Rules (S01-S05) provide a framework for phased rollout:

### Phase 1: Operational Spine (Current)
Track the core entities that power day-to-day operations:
- **Person** — who AWHC works with
- **Organization** — agencies and entities
- **Case** — engagements and service journeys
- **Event** — conferences, meetings, trainings
- **Activity** — discrete actions within cases
- **Task** — quick relationship-building activities

*This is what's already configured. Focus here until the team is comfortable with data entry.*

### Phase 2: Program & Project Tracking
Add structured program and project management:
- **Program** — formalize program types, link cases to programs
- **Project** — track grant-specific deliverables, timelines, budgets
- **Service** — catalog specific interventions offered

*Trigger: When AWHC needs to report on program-level outcomes or manage multiple concurrent grants.*

### Phase 3: Measurement & Outcomes
Add quantitative tracking:
- **Measurement** — satisfaction surveys, fidelity reviews, assessments
- **Outcome** — results achieved, impact metrics
- **Dashboard metrics** — the 7 dashboard cards already built (fee-for-service, trainings, fidelity, CoP, satisfaction, retention, grant deliverables)

*Trigger: When AWHC has enough case data to generate meaningful metrics, or when a funder requires outcome reporting.*

### Phase 4: Analysis & Insight
Enable pattern recognition:
- **Record** — testimonials, success stories
- **Geography** — regional analysis
- **Role** — lived experience tracking
- **Normalization** — cross-jurisdictional comparisons (if expanding internationally)

*Trigger: When AWHC wants to tell data stories or compare across regions.*

**Action:** Present this phasing to Katie and the team. Agree on which phase AWHC is currently in and what would trigger moving to the next phase. The technical infrastructure for all phases is already in place — phasing is about what the team actively enters and reports on.

---

## Summary

| Row | Item | Recommendation | Effort |
|-----|------|---------------|--------|
| 39 & 45 | Case vs Program vs Project | Adopt KGL definitions above | Team discussion (30 min) |
| 40 | Glossary | Review and approve proposed glossary | Team review (1 hour) |
| 41 | Theory of Change | Map ToC document to Mareto modules | Working session (1-2 hours) |
| 42 | Phased approach | Adopt 4-phase framework, agree on current phase | Team discussion (30 min) |

All items can be resolved in a single half-day workshop with the AWHC team.
