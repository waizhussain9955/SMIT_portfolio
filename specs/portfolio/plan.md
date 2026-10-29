# Developer Portfolio — Implementation Plan

**Repository:** `C:\Users\Waiz-Hussain\Desktop\specs-portfolio`  
**Methodology:** Spec-Driven Development (SDD)  
**Status:** Pending Approval  
**Version:** 1.0  
**Architecture:** Next.js App Router + TypeScript (Strict) + Tailwind CSS + shadcn/ui  
**Reference Portfolio:** https://waizhussain-portfolio.vercel.app/

---

## 1. Project Overview

Build a new, responsive personal developer portfolio using verified information from the owner's existing live portfolio.

The new website must present professional information, technical skills, projects, education, experience, services, and contact details in an accessible and maintainable format.

The existing live portfolio is a read-only reference. Never modify its source code, deployment, files, or configuration.

Follow Spec-Driven Development: review requirements, approve the plan, implement small tasks, and verify each change.

### Project Goals

- Present verified professional information clearly.
- Showcase real projects with available demonstrations and source-code links.
- Provide responsive navigation and a consistent visual design.
- Support dark and light themes.
- Keep portfolio content in a centralized, typed data file.
- Maintain accessibility, performance, and basic SEO.
- Deploy the new portfolio independently when approved.

### Version 1 Boundaries

Include the approved portfolio sections, theme switching, project filtering, project details, responsive navigation, and a frontend-only contact flow.

Exclude custom backend services, databases, authentication, fabricated content, and unapproved integrations.

---

## 2. Source of Truth and Project Protection

Use the following hierarchy:

1. `AGENTS.md` — coding rules and agent boundaries.
2. `specs/portfolio/spec.md` — approved product requirements.
3. `specs/portfolio/research.md` — research findings and source references.
4. `specs/portfolio/plan.md` — approved implementation strategy.
5. `specs/portfolio/tasks.md` — task checklist and acceptance criteria.
6. Source code — implementation of approved requirements.

If documents conflict, stop the affected task, explain the conflict, and obtain approval before changing requirements or architecture.

### Content Verification

Collect portfolio information from the existing live website and record the source of each important detail in `research.md`.

Verify the following where available:

- Name and professional title
- Biography and professional focus
- Technical skills and technologies
- Projects, descriptions, and technology stacks
- GitHub repositories and live demonstrations
- Education and certifications
- Employment and internship history
- Services and achievements
- Email, social links, and other contact information
- Resume availability

Do not infer proficiency, employment history, project architecture, dates, achievements, or client testimonials.

When information cannot be verified, use `TODO: Confirm with owner` in documentation. Do not present unresolved placeholders as genuine public-facing content.

---

## 3. Approved Technology Stack

Use the following architecture, subject to verification against the approved specification and the new repository.

| Technology | Purpose |
|---|---|
| Next.js App Router | Application structure and routing |
| React | Component-based UI |
| TypeScript | Typed application code |
| TypeScript strict mode | Catch type errors early |
| Tailwind CSS | Utility-based styling |
| shadcn/ui | Reusable, accessible UI components |
| Lucide React | Icons |
| clsx | Conditional class names |
| tailwind-merge | Resolve conflicting Tailwind classes |
| Vercel | Intended hosting platform |

### Version Policy

- Select a supported, stable Next.js release compatible with the installed React, TypeScript, Tailwind CSS, and shadcn/ui setup.
- Pin exact resolved versions in the package manifest and lockfile.
- Do not write `latest stable 14/15` as an installation specification.
- Check existing configuration before selecting or upgrading versions.
- Preserve compatible existing dependencies unless a change is justified and approved.

### Dependency Approval

Potential additional dependencies:

- `next-themes` — optional theme persistence and system preference support.
- Radix Dialog primitives — use the dependency selected by the official shadcn/ui Dialog setup.
- Any additional animation, form, validation, or icon library — propose first.

Before adding a dependency, document its purpose, alternatives, compatibility, and maintenance implications. Wait for explicit approval.

Do not install a separate dialog implementation if the selected shadcn/ui component already supplies the required functionality.

---

## 4. Repository Structure

Use this as the intended structure. Confirm it against the new repository before creating files. Preserve existing approved files and adapt paths where necessary.

```text
specs-portfolio/
├── AGENTS.md
├── SPEC.md
├── specs/
│   └── portfolio/
│       ├── research.md
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
├── public/
│   ├── images/
│   ├── resume/
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   └── ui/
│   ├── data/
│   │   └── portfolio.ts
│   ├── types/
│   │   └── portfolio.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

**Folder responsibilities**

- `specs/portfolio/`: Research, approved requirements, plan, and tasks.
- `src/app/`: Routes, root layout, global styles, and metadata.
- `src/components/layout/`: Navbar, mobile navigation, footer, and theme controls.
- `src/components/sections/`: Hero, About, Skills, Projects, Services, and Contact.
- `src/components/projects/`: Project cards, filters, and project-detail dialogs.
- `src/components/ui/`: Components generated or configured through shadcn/ui.
- `src/data/`: Centralized portfolio content.
- `src/types/`: TypeScript interfaces and type definitions.
- `src/lib/`: Small shared utilities.
- `public/images/`: Verified portfolio images and project assets.
- `public/resume/`: Resume files only after the correct file has been supplied and approved.

The Next.js configuration filename and CSS tooling must match the selected versions and official setup. Do not create unnecessary configuration files.

`SPEC.md` at the repository root should point agents to the canonical specification rather than duplicate it.

---

## 5. Data Model and Content Architecture

Keep portfolio content centralized in `src/data/portfolio.ts`. Define corresponding types in `src/types/portfolio.ts`.

The data model should support:

- `Profile`
- `ContactInfo`
- `SocialLink`
- `SkillCategory`
- `SkillItem`
- `ProjectItem`
- `ExperienceItem`
- `EducationItem`
- `CertificationItem`
- `ServiceItem`

Only implement fields required by the approved specification and verified content.

### Content Rules

- Use stable, unique identifiers for projects and other filterable records.
- Store real URLs only when verified.
- Distinguish missing information from empty optional fields.
- Do not hard-code portfolio content inside section JSX.
- Do not invent ratings, proficiency percentages, project metrics, client feedback, or employment dates.
- Use optional fields when information is genuinely unavailable.
- Add TODOs to documentation for details requiring owner confirmation.

### Adding a Project

Each project should contain only verified, applicable fields:

- Project name
- Short description
- Technologies actually used
- Category
- Image or preview, when available
- Live URL, when available
- Source-code URL, when available
- Detailed case study, when supported by reliable information

Do not invent architectural details, challenges, results, or measurable impact.

---

## 6. Design and Component Architecture

### Design Direction

Follow the approved design specification. The current proposal is a dark obsidian interface with restrained indigo, cyan, or emerald accents, an optional light theme, clear typography, and subtle glass effects.

Treat the palette and effects as proposals until confirmed by the approved specification.

Avoid excessive gradients, unnecessary animations, decorative clutter, and effects that reduce readability.

### Layout Components

- `Navbar.tsx`: Desktop navigation, sticky behavior, and active-section indication.
- `MobileMenu.tsx`: Accessible mobile navigation with clear open and close controls.
- `Footer.tsx`: Verified links and copyright information.
- `ThemeToggle.tsx`: Dark/light theme control.

### Portfolio Sections

- `Hero.tsx`: Verified title, summary, primary actions, and social links.
- `About.tsx`: Verified biography and relevant professional background.
- `Skills.tsx`: Verified skills organized by meaningful categories.
- `Projects.tsx`: Project grid and category filtering.
- `Services.tsx`: Services the owner genuinely offers.
- `Contact.tsx`: Verified contact channels and an honest frontend-only contact flow.

Only include a section when its content is available or its presence is approved. Do not manufacture content to fill a visual layout.

### Project Components

- `ProjectCard.tsx`: Reusable project preview.
- `ProjectModal.tsx`: Optional accessible case-study dialog when supported by the approved design.
- `src/components/ui/`: Reuse configured shadcn/ui components where appropriate.

Avoid building a custom component when an existing approved component meets the requirement.

---

## 7. Application Behavior

### Navigation

- Navigate to the correct page sections.
- Show the active section only when the behavior is implemented and tested.
- Support keyboard navigation.
- Make mobile navigation usable with touch and keyboard.
- Close the mobile drawer appropriately after navigation.

### Theme Switching

- Support dark and light themes if confirmed in the specification.
- Avoid visible theme flashing where practical.
- Respect system preferences when enabled by the approved design.
- Persist the user's preference only through the selected, approved implementation.

### Skills

- Display verified skills and meaningful categories.
- Allow category filtering if required.
- Do not display fake proficiency meters or unsupported skill ratings.

### Projects

- Render project cards from centralized data.
- Filter projects using verified category values.
- Show only available live and source-code links.
- If project details are displayed in a dialog, support focus management, keyboard interaction, Escape to close, and appropriate accessible labels.

### Contact Flow

The initial implementation is frontend-only.

- Validate required fields on the client.
- Validate email format and required message content.
- Escape or safely encode user-provided values when generating a `mailto:` URI.
- Clearly explain that submitting the form opens the visitor's default email application.
- Do not claim an email has been sent.
- Do not show a fake server-success notification.
- Handle missing email configuration with a clear message and alternative verified contact links.
- Keep the form usable on mobile and with assistive technology.

A `mailto:` link depends on the visitor's email-client configuration. It does not provide reliable server-side delivery or confirmation.

---

## 8. Phased Implementation Strategy

Each phase requires its acceptance criteria to pass before the next phase begins.

### Phase 0 — Repository and Requirements Audit

**Tasks**

- Confirm the new repository root.
- Inspect existing files, configuration, and scripts.
- Read the approved specification and all relevant SDD documents.
- Verify reference-website research.
- Resolve stack or requirement conflicts.

**Acceptance criteria**

- The existing live portfolio remains untouched.
- The new repository and its current status are documented.
- The specification, plan, and task list do not contradict each other.
- Unverified content is identified.

### Phase 1 — Environment and Project Setup

**Tasks**

- Initialize or complete the approved Next.js project setup.
- Configure TypeScript strict mode.
- Configure Tailwind CSS and shadcn/ui according to the selected compatible versions.
- Verify scripts and package dependencies.
- Establish a successful baseline build.

**Acceptance criteria**

- The application starts successfully.
- TypeScript strict mode is enabled.
- Dependencies and lockfile are consistent.
- The production build passes.

Do not recreate an existing project scaffold unnecessarily.

### Phase 2 — Types and Centralized Data

**Tasks**

- Define the approved portfolio types.
- Create or update `src/data/portfolio.ts`.
- Add verified profile, skills, projects, education, experience, and contact data.
- Add appropriate optional fields for missing information.

**Acceptance criteria**

- TypeScript validates the data model.
- Content is not duplicated unnecessarily across JSX files.
- All populated public-facing details are supported by verified information.
- No invented portfolio claims are present.

### Phase 3 — Design Tokens and Layout

**Tasks**

- Implement approved global design tokens.
- Build the root layout and section container.
- Add navigation, footer, and theme controls as approved.
- Establish responsive typography, spacing, and focus states.

**Acceptance criteria**

- Shared design tokens are consistently applied.
- Layout works at mobile, tablet, and desktop widths.
- Navigation controls are keyboard-accessible.
- Theme behavior works without breaking content visibility.

### Phase 4 — Content Sections

**Tasks**

- Implement Hero and About.
- Implement categorized Skills.
- Implement Services only with verified offerings.
- Connect all sections to the centralized data source.

**Acceptance criteria**

- Content matches the approved specification.
- Missing details are not represented as facts.
- Components are reusable where appropriate.
- Responsive layouts and text readability are verified.

### Phase 5 — Projects and Case Studies

**Tasks**

- Implement project cards.
- Add filtering when required.
- Add an accessible detail dialog only if approved.
- Connect live and source-code links when available.

**Acceptance criteria**

- All displayed projects come from verified data.
- Filters work correctly for all categories.
- Unavailable links are not fabricated.
- Dialog behavior, focus handling, and keyboard interaction are verified if implemented.

### Phase 6 — Contact and External Links

**Tasks**

- Add verified contact information.
- Implement client-side validation.
- Implement the approved `mailto:` flow.
- Add clear instructions about email-client behavior.

**Acceptance criteria**

- Invalid required fields are identified clearly.
- Valid submission opens a correctly constructed email draft.
- The interface never claims that an email was sent.
- Contact links work and have meaningful accessible labels.

### Phase 7 — SEO, Accessibility, and Quality Assurance

**Tasks**

- Configure Next.js metadata.
- Add Open Graph information and a social preview image when available.
- Configure canonical metadata only after the production URL is confirmed.
- Add structured data only for verified information.
- Check keyboard navigation, contrast, semantics, and responsive behavior.
- Run lint, TypeScript, and production-build checks.
- Review console errors and broken links.

**Acceptance criteria**

- Build and lint checks pass.
- TypeScript has no unresolved errors.
- Core navigation and contact interactions work.
- Metadata contains no fabricated information.
- No critical accessibility or responsive issues remain.
- Remaining limitations are documented honestly.

### Phase 8 — Deployment Readiness

**Tasks**

- Verify production environment configuration.
- Confirm the intended Vercel project and deployment target.
- Review public assets and personal information.
- Deploy only after explicit approval.
- Test the deployed site and verify important links.

**Acceptance criteria**

- The new portfolio deploys independently.
- The existing live portfolio is not modified.
- Production routes and assets work.
- Deployment status and any remaining limitations are documented.

---

## 9. Accessibility, Performance, and SEO

### Accessibility

- Use semantic HTML landmarks and a logical heading hierarchy.
- Provide meaningful alt text for informative images.
- Use empty alt text for purely decorative images.
- Maintain visible keyboard focus.
- Ensure controls have accessible names.
- Support keyboard operation of navigation, theme controls, filters, and dialogs.
- Check contrast in both themes.
- Respect reduced-motion preferences where animation is used.

### Performance

- Use optimized image assets and Next.js image handling where appropriate.
- Avoid unnecessary client-side JavaScript.
- Prefer Server Components unless browser interaction requires a Client Component.
- Avoid adding heavy animation or UI libraries without approval.
- Inspect loading behavior and layout shifts.

### SEO

- Use accurate page titles and descriptions.
- Set the canonical URL only after confirming the production domain.
- Configure Open Graph and social metadata with available assets.
- Add structured data only when its claims are verified.
- Ensure links and page content are crawlable.
- Do not publish placeholder metadata as final information.

### Lighthouse Targets

Use the following as proposed targets for the production homepage:

- Performance: 90 or higher
- Accessibility: 95 or higher
- Best Practices: 95 or higher
- SEO: 95 or higher

These are targets, not guaranteed results. Measure the deployed page using a consistent test setup, document any shortfalls, and prioritize fixes based on their impact.

---

## 10. Coding and Dependency Rules

- Use descriptive names and focused components.
- Keep files reasonably sized; split a component when its responsibilities become difficult to follow.
- Enable TypeScript strict mode.
- Do not use `any` to bypass type errors.
- Keep business and portfolio content out of presentation components.
- Use Server Components by default in Next.js.
- Add `'use client'` only when client-side state, event handlers, or browser APIs require it.
- Keep client components as small as practical.
- Reuse existing shadcn/ui components and utilities.
- Do not add dependencies without explicit approval.
- Do not modify configuration merely to silence an unexplained error.
- Do not claim tests passed unless the relevant commands were actually run.

---

## 11. SDD Task and Review Protocol

Before starting each implementation task:

1. Read `AGENTS.md` and the relevant specification section.
2. Confirm that the task exists in `tasks.md`.
3. Check dependencies and acceptance criteria.
4. Make only the changes required by the approved task.
5. Run relevant checks.
6. Review the diff for unrelated changes.
7. Update the task status and document any deviation.

If the implementation reveals a missing requirement, stop and propose a specification change before proceeding.

Use the existing repository's conventions for branches and commits. If no convention exists, use:

`type(scope): short description`

Examples:

- `feat(projects): add project filtering`
- `fix(navbar): correct mobile navigation`
- `docs(specs): clarify contact behavior`

---

## 12. Boundaries

### Always Do

- Read the project constitution and relevant specifications before coding.
- Keep changes focused and reversible.
- Preserve approved architecture and existing functionality.
- Use verified content only.
- Run relevant checks and report results.
- Keep the existing live portfolio untouched.

### Ask First

- Adding or upgrading dependencies.
- Changing the framework or architecture.
- Restructuring major directories.
- Deleting or replacing existing files.
- Changing approved requirements or design.
- Deploying the new site publicly.
- Publishing a supplied resume or personal contact details.

### Never Do

- Modify the existing live portfolio or its source repository.
- Restart or regenerate the new project without approval.
- Invent projects, skills, testimonials, achievements, or URLs.
- Add a backend, database, or authentication in version one.
- Silently modify the specification.
- Report fake form success.
- Claim a build, lint check, or accessibility test passed without verification.
- Delete user work to make the repository match a proposed structure.

---

## 13. Definition of Done

A task is complete only when:

- Its implementation matches the approved specification.
- Its acceptance criteria pass.
- TypeScript checks pass where configured.
- Relevant lint and build commands pass.
- Responsive and accessibility behavior has been checked where relevant.
- No unrelated files or the existing portfolio have been modified.
- TODOs are tracked and not presented as completed facts.
- Documentation and task status reflect the actual result.

The complete project is ready for release when all approved required tasks are complete, the production build passes, required quality checks have been performed, and deployment has been approved.

---

## 14. Commands Cheat Sheet

First verify `package.json` and use the package manager associated with the existing lockfile.

Typical npm commands, provided the corresponding scripts exist:

```bash
npm install
npm run dev
npm run lint
npm run build
```

For TypeScript validation, use the configured script if available, or run:

```bash
npx tsc --noEmit
```

Do not assume a lint script exists. If it is missing, document the gap and propose the appropriate configuration before treating lint as a passing check.

Do not replace the package manager or regenerate the lockfile without a clear reason.

---

## 15. Open Questions and Approval Gates

Resolve these before implementing the affected features:

1. Is the intended Next.js version and Tailwind CSS setup confirmed by the new repository's specification?
2. Which sections are required for version one?
3. Are the proposed focus pillars, service cards, skill categories, and theme behavior supported by verified content and approved design?
4. Is the correct resume PDF available and approved for publication?
5. What is the confirmed production URL for canonical metadata?
6. Which optional dependencies, if any, are approved?
7. Are project-detail dialogs required, or are project cards with external links sufficient?
8. Have all personal details and external links been verified against the reference portfolio?

Do not block unrelated work on questions that do not affect it. Do not make irreversible or architecture-changing decisions without approval.

---

## 16. Final Implementation Rule

**This document is an implementation plan, not authorization to start coding.**

First inspect the new repository, reconcile this plan with the approved specification, and prepare the task checklist. Present unresolved conflicts for review.

Begin implementation only after the owner approves the specification, architecture, plan, and initial task list.