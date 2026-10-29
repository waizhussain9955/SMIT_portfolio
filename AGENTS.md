AGENTS.md — Constitution for AI Coding Agents
Project: Waiz Hussain — Personal Developer Portfolio (v1)
Repository: C:\Users\Waiz-Hussain\Desktop\specs-portfolio
Authority: All AI coding agents working in this repository must follow these rules.
Status: Draft — owner approval required before implementation.
1. Project Overview
Build a modern, responsive, accessible personal portfolio that presents Waiz Hussain's approved profile, verified projects, skills, services, and contact options to recruiters, employers, and potential freelance clients.

This is a new repository and a new website. The existing live portfolio at https://waizhussain-portfolio.vercel.app/ is a read-only reference for checking public content and links. Do not access, modify, deploy, overwrite, or delete files in the existing portfolio's source repository.
Core goals
- Present accurate, owner-approved information.
- Make projects and contact options easy to find.
- Keep content typed and centralized.
- Meet responsive design, accessibility, SEO, and maintainability requirements.
- Use Spec-Driven Development (SDD): approved requirements first, small tasks second, implementation and verification afterward.
2. Source of Truth and Conflict Resolution
Use this priority order when documents conflict:
1. Explicit, current owner approval.
2. This AGENTS.md for agent behavior and safety boundaries.
3. Approved specs/portfolio/spec.md for product requirements.
4. specs/portfolio/research.md for evidence, source links, and unresolved facts.
5. Approved specs/portfolio/plan.md for technical decisions.
6. specs/portfolio/tasks.md for task scope and acceptance criteria.
7. Application source code.
Do not silently resolve contradictions by guessing. Report the conflict, recommend a resolution, and ask for owner approval when the decision changes scope, public claims, architecture, deployment, or data handling.

If a required document is missing, report that fact and proceed only with work that is clearly authorized and does not depend on the missing information.
3. Approved Technical Direction
The intended stack is:
- Framework: Next.js App Router.
- Language: TypeScript with strict mode.
- Styling: Tailwind CSS and CSS variables/design tokens.
- UI primitives: shadcn/ui where useful and appropriate.
- Icons: lucide-react.
- Deployment target: Vercel.
- Content: typed local data files.
- Version 1 architecture: frontend-only; no custom backend, database, or authentication.
Version and deployment decisions
- Select compatible stable package versions during repository setup and record them in package.json and the lockfile. Do not use ambiguous version wording such as “latest stable 14/15.”
- Before implementing deployment-specific behavior, reconcile spec.md and plan.md and record whether the app uses normal Next.js deployment on Vercel or static export.
- Do not assume static export is selected unless the approved plan says so.
- If deployment mode is undecided, avoid features that depend on that choice and ask for approval before making a binding architectural decision.
Dependency rules
- Prefer existing framework capabilities and installed dependencies.
- Propose new npm packages before installing them and explain why they are needed.
- Do not add duplicate dialog, popover, or accessibility libraries if the chosen shadcn/ui components already cover the requirement.
- Do not add analytics, tracking, a CMS, form provider, animation library, backend, or other external service without approval.
- Follow setup guidance compatible with the versions actually installed.
4. Content Architecture and Truthfulness
Centralized data
Keep portfolio content in:
- src/data/portfolio.ts
- src/types/portfolio.ts
Components should render this data rather than duplicating profile text, links, project details, and skill labels throughout the codebase. Additional data files may be proposed if the content grows, but ask before changing the approved architecture.
Content integrity rules
- Use only information confirmed by the owner or supported by the documented reference sources.
- Treat extracted project lists and links as candidates until they have been verified for release.
- Never invent skills, proficiency scores, employers, education, certifications, client testimonials, project outcomes, user counts, revenue, performance metrics, or architecture details.
- Never connect a project to an unrelated or uncertain repository.
- Do not publish an unverified demo URL, APK link, social destination, or resume path.
- Skill percentages and strong claims such as “expert” require owner approval and a defensible basis.
- Record unresolved facts in research.md or task notes as TODO: Confirm with owner.
- Never render internal TODOs, placeholder text, or unresolved assumptions in the public website. Omit the unverified content until it is confirmed.
- Publish personal contact details only as approved by the owner.
Reference website boundary
The reference website may be reviewed as a public read-only source to verify visible content and destinations. Do not inspect, open, alter, or deploy the source repository of the existing portfolio. Do not change the existing live website or its hosting/domain configuration.
5. Directory Responsibilities
Use the following as the intended organization, adapting only when required by the approved plan and actual Next.js setup.
- specs/portfolio/research.md: sources, evidence, verification status, and open questions.
- specs/portfolio/spec.md: approved user-facing requirements and acceptance criteria.
- specs/portfolio/plan.md: architecture, dependencies, implementation phases, and deployment decisions.
- specs/portfolio/tasks.md: ordered, small tasks with acceptance criteria and verification notes.
- src/app/: App Router pages, root layout, global styles, and metadata.
- src/components/layout/: navigation, mobile menu, footer, theme toggle.
- src/components/sections/: hero, about, skills, projects, services, contact.
- src/components/projects/: project cards and project detail dialog/view.
- src/components/ui/: reusable UI primitives, preferably using approved shadcn/ui components.
- src/data/portfolio.ts: central approved portfolio content.
- src/types/portfolio.ts: explicit types for content structures.
- public/: approved static assets only; a resume file may be placed in public/resume/ only if it exists and the owner approves public distribution.
Do not create every suggested directory or file automatically. Keep the structure minimal and aligned with the approved plan.
6. Coding Conventions
Server and Client Components
- Prefer Server Components for static content and layout.
- Add 'use client' only where client-side state, browser APIs, or event handlers are required.
- Browser-only APIs such as localStorage, navigator.clipboard, and IntersectionObserver must not be accessed unsafely during server rendering.
- Avoid turning the entire application into a Client Component when only a small component needs interactivity.
TypeScript
- Keep "strict": true enabled.
- Do not use any.
- Use explicit types and safe narrowing; use unknown when a value is genuinely unknown.
- Do not suppress errors with broad casts or disable compiler checks just to pass a build.
- Do not disable ESLint rules merely to hide a defect. If a rule genuinely needs an exception, explain the reason and propose the smallest scoped exception for approval.
Naming
- React components: PascalCase, e.g. ProjectCard.tsx.
- Utilities and data modules: camelCase or the repository's established convention.
- Assets: descriptive kebab-case filenames.
- Keep naming consistent with the existing project structure.
Code quality
- Prefer simple, maintainable implementations over unnecessary abstractions.
- Avoid duplicated content and repeated logic.
- Keep interactive components focused and small.
- Remove unused imports, dead code, and temporary debug output.
- Do not introduce placeholder buttons or links that appear functional but do nothing.
7. Design, Accessibility, Responsive Behavior, and SEO
Visual design
- Intended direction: dark obsidian theme with a readable light theme.
- Proposed dark base: #090A0F; treat the exact palette as a design token proposal that must be reconciled with the approved specification.
- Use glassmorphism and gradients sparingly; legibility and performance take priority.
- Use fluid typography such as clamp() where it improves layout.
- Respect prefers-reduced-motion.
Responsive behavior
Design mobile-first and verify at minimum:
- 320px mobile.
- 375–390px mobile.
- 768px tablet.
- 1024px laptop.
- 1440px and wider desktop.
Prevent unintended horizontal overflow, clipped text, unusable controls, and overlapping sticky navigation.
Accessibility
- Target WCAG 2.1 AA principles; do not claim full conformance without an appropriate audit.
- Use semantic HTML and a logical heading hierarchy.
- Provide visible keyboard focus indicators and a skip-to-content link.
- Use descriptive labels for controls, including icon-only buttons.
- Check text and control contrast; do not rely on color alone.
- Label form inputs and associate validation messages with their fields.
- Ensure menus and dialogs have correct keyboard behavior and focus management.
- Dialogs must have an accessible name, close on Escape, and return focus to the trigger. Use a well-tested accessible primitive rather than rebuilding focus trapping unnecessarily.
- Use ARIA only when needed; prefer native semantic HTML.
SEO
- Use the Next.js Metadata API supported by the installed version.
- Configure page title, description, and suitable Open Graph/social sharing metadata.
- Use a canonical URL only after the owner confirms that https://waiz.dev is owned, configured, and intended for the new site.
- Do not assume the canonical domain is confirmed just because it appears in an earlier draft.
- Structured data must be accurate, publicly approved, and consistent with visible content.
- Do not include unverified employer, education, certification, or social links in JSON-LD.
- Ensure sitemap and robots behavior matches the actual routes and deployment mode.
8. Honest Contact and Browser Behavior
Version 1 has no server-side message delivery.
Contact form
- Use client-side validation for required fields and basic email format.
- Encode the recipient, subject, and body correctly when constructing a mailto: URL.
- Do not claim a regex proves an address exists or guarantees full RFC compliance.
- Explain that submission opens the visitor's default email application and that the visitor must send the email there.
- Do not display “Message sent” or other server-success language.
- Do not simulate network requests, fake progress, or delayed success banners.
- Keep a visible email fallback in case the visitor has no default email application configured.
Copy-email action
- Use the Clipboard API when available and permitted.
- Report success only after the copy operation succeeds.
- If copying fails, show the email address and a manual-copy fallback.
9. Spec-Driven Development Workflow
Before implementation
1. Inspect only the new repository.
2. Read AGENTS.md, spec.md, research.md, plan.md, and tasks.md when present.
3. Identify contradictions, missing evidence, and unapproved decisions.
4. Confirm the task is present in tasks.md and has clear acceptance criteria.
5. If requirements or architecture are unclear, explain the issue and ask before proceeding.
Do not write or edit application code without an approved specification and a corresponding task checklist entry.
During implementation
- Work on the smallest approved task that can be independently verified.
- Keep changes within the new repository.
- Do not expand scope silently.
- If a new requirement or architectural issue appears, stop the affected work, explain the impact, and request approval where needed.
- Do not overwrite user work or unrelated files.
- Avoid destructive commands unless explicitly approved and necessary.
After each task
Update specs/portfolio/tasks.md with:
- Task status.
- Files or areas changed.
- Acceptance criteria checked.
- Commands actually run and their results.
- Remaining issues or unverified items.
Do not mark a task complete if required checks failed or were not run. Mark it blocked or partially complete and explain why.
Commit conventions
If the owner asks the agent to create commits, use Conventional Commit prefixes such as:
- feat:
- fix:
- docs:
- style:
- refactor:
- test:
- chore:
Do not create commits, push changes, or deploy unless the task or owner explicitly authorizes that action.
10. Verification and Completion Rules
Before claiming a feature is complete:
- Check the relevant acceptance criteria.
- Run the appropriate commands available in the repository.
- Verify affected interactions and responsive behavior.
- Report the actual results and any remaining limitations.
Common commands may include:
- npm run dev
- npm run build
- npm run start
- npm run lint
- npx tsc --noEmit
However, first inspect package.json and the installed tooling. Do not assume every script exists. Do not install new tools merely to make a command available without proposing the dependency when approval is required.
Build and lint expectations
- A production build and TypeScript check must pass before release, where configured.
- Run lint if a lint script/configuration exists.
- Zero errors are required for completion.
- Warnings must be reviewed and fixed when practical; any remaining warnings must be documented and justified rather than silently ignored.
- Never claim a command passed unless it was actually run and passed.
Visual and interaction checks
Verify relevant behavior across dark/light themes and target viewport widths. Check the controls affected by the task, including navigation, project filters, project details, form validation, and clipboard feedback when implemented.
11. Agent Operational Boundaries
ALWAYS DO
- Work strictly inside C:\Users\Waiz-Hussain\Desktop\specs-portfolio.
- Treat the existing live portfolio as read-only reference content.
- Follow the approved specification and task checklist.
- Use verified and owner-approved data.
- Keep internal TODOs out of the public UI.
- Prefer accessible existing primitives over custom reimplementation.
- Keep content centralized and typed.
- Verify relevant behavior and report real test results.
- Update task status after completing or blocking a task.
ASK FIRST
- Before installing new npm packages.
- Before adding a backend, database, authentication, analytics, CMS, external form service, or paid API.
- Before changing the framework, deployment mode, architecture, or state-management approach.
- Before changing approved public content, personal claims, skills, services, or contact details.
- Before configuring a domain, publishing/deploying publicly, pushing to a remote, or creating commits when not explicitly requested.
- Before replacing or deleting existing files if the intended change is unclear.
- Before making unresolved projects, resume files, or unverified links public.
NEVER DO
- Never edit, delete, overwrite, deploy, or alter the existing live portfolio or its source repository.
- Never invent skills, experience, credentials, project details, links, metrics, testimonials, or results.
- Never render internal TODOs or unresolved placeholders on the public website.
- Never link a project to an unrelated or unverified repository.
- Never simulate a backend or claim an email was sent when only a mailto: URL was opened.
- Never place secrets or private API keys in client-side code.
- Never use TypeScript any or disable checks just to bypass errors.
- Never report tests, builds, audits, or link checks as passed unless they were actually performed.
12. Definition of Done
A task is done only when:
1. It matches the approved specification and task acceptance criteria.
2. Relevant verification commands have been run and their actual results recorded.
3. No unresolved errors introduced by the task remain.
4. Affected UI has been checked visually and interactively where applicable.
5. Relevant keyboard, responsive, and theme behavior has been checked.
6. specs/portfolio/tasks.md is updated with status and verification evidence.
7. Any remaining warnings, limitations, or blocked criteria are documented honestly.
The full project is ready for release only when the approved project-level definition of done in specs/portfolio/spec.md has been satisfied and the owner has approved deployment.
13. Known Open Questions
The following questions must be tracked in specs/portfolio/research.md and resolved before the relevant information is published:
- Is https://waiz.dev the confirmed canonical domain for the new portfolio?
- Is the current resume file available and approved for public download?
- Are any skill proficiency percentages verified and approved?
- Which candidate projects should be published in v1?
- What are the correct dedicated repositories for Unplug_AI and Smart OCR Scanner?
- Are valid demo or APK links available for projects currently lacking verified URLs?
- What education and experience information is approved for public display?
- Which proposed services does the owner actually offer?
- Is current freelance/full-time availability confirmed?
- What is the exact X/Twitter profile URL, if it should be displayed?
- Is the approved Vercel deployment a normal Next.js deployment or static export?
An unanswered question does not authorize guessing. Omit the affected public content and continue only with independent, approved work.
14. Final Rule
This constitution governs agent behavior; it does not replace product requirements. Reconcile AGENTS.md, spec.md, research.md, plan.md, and tasks.md before implementation. If they conflict, surface the conflict instead of silently choosing. Implement only approved tasks, verify them honestly, and preserve the existing live portfolio unchanged.