# AGENTS.md

> Agent-level instructions — read by Codex and Claude's Agent tool.

## Project
A Way Home Canada public feedback + impact dashboard. Instance export of a Corteza namespace, plus React/JSX dashboards and static HTML.

## Stack
React + JSX dashboards, static HTML (impact.html, index.html), Corteza YAML namespace export, CSV feedback tracking.

## Hard rules
- No writes outside `main` branch's default CLAUDE.md-owned-paths
- No secrets committed — use Key Vault or GitHub Secrets
- Follow HelpSeeker brand: Lato, navy/teal palette, analytical tone
- KGL v1.4 grammar applies to any schema/data-model change

## Don't touch
`client-feedback/**` (possible PII). `instance-export/**` (A Way Home Canada - Updated.yaml — schema under review by awh-engagement stream, never edit in this repo).

## Template version
v0.1.0 (initial, 2026-04-20).
