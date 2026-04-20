# CLAUDE.md

> Project-level instructions for Claude Code / Claude agents working in this repository. Read this first.

## Project
A Way Home Canada public feedback + impact dashboard. Instance export of a Corteza namespace, plus React/JSX dashboards and static HTML.

## Brand and voice
HelpSeeker house style: Lato (Bold/Regular/Light), navy/teal/aqua/slate palette, analytical and decision-ready, no marketing language, APA 7 for substantive claims.

## KGL alignment
This repo serves: ✶Navigi / Heart (community-facing feedback). Respect KGL v1.4 grammar: CENTRAL → MODIFIER → CONTENT → CONTEXT. Central nodes are ◉Resource, ◎Person, ⊙Insight, ◯Outcome.

## Stack
React + JSX dashboards, static HTML (impact.html, index.html), Corteza YAML namespace export, CSV feedback tracking.

## Don't touch
`client-feedback/**` (possible PII). `instance-export/**` (A Way Home Canada - Updated.yaml — schema under review by awh-engagement stream, never edit in this repo).

## Owners
- Primary: Alina Turner (alina@helpseeker.org)
- Backup: Arda (data-model author)

## Cross-stream pointer
This repo is managed by the `awh-engagement (review-only)` stream in `~/weekly-ops/`. Sprint briefs at `~/weekly-ops/streams/awh-engagement (review-only)/sprints/YYYY-MM-DD/brief.md`. File ownership rules at `~/weekly-ops/docs/file-ownership.md` — never write outside your stream's owned-paths.

## CI / PR discipline
- Default branch `main` is protected (ruleset `HelpSeeker default`)
- 1 approving review required before merge
- Secret scanning + push protection enabled
- Dependabot alerts enabled — routed to label `security`

## Template version
v0.1.0 (initial, 2026-04-20). Template lives at `HelpSeekerTechnologies/github-admin/templates/CLAUDE.md.tmpl`.
