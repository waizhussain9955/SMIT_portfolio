Developer Portfolio — Product & Requirements Specification
Project: Waiz Hussain — Developer Portfolio
Repository: C:\Users\Waiz-Hussain\Desktop\specs-portfolio
Methodology: Spec-Driven Development (SDD)
Document status: Draft for owner approval — do not implement until reviewed
Reference portfolio: https://waizhussain-portfolio.vercel.app/
Intended deployment: Vercel
Version: 2.0
1. Purpose and Vision
Build a new, polished, responsive personal portfolio for Waiz Hussain. The portfolio should communicate his software development work, showcase verified projects, explain relevant skills and services, and provide clear ways for recruiters or potential clients to contact him.

This is a new project. The existing live portfolio is a reference for reviewing profile details and project links only. Do not modify, redeploy, or overwrite the existing site as part of this work.
1.1 Product goals
1. Present a professional, coherent identity across desktop, tablet, and mobile.
2. Make selected projects easy to browse, filter, and open.
3. Make contact options obvious and truthful.
4. Keep portfolio content centralized so it can be updated without editing multiple components.
5. Keep version 1 frontend-only, with no custom server, database, authentication, or paid API requirement.
6. Meet practical accessibility, responsive design, SEO, and build-quality standards.
7. Use Spec-Driven Development: requirements and tasks are reviewed before implementation, and each task has acceptance criteria.
1.2 Success indicators
The project is considered successful when:
- The approved sections render correctly and contain only approved content.
- All visible links have been checked or are explicitly excluded/disabled until verified.
- The website works at the agreed viewport sizes without horizontal overflow.
- Keyboard users can navigate the site and use its interactive features.
- Theme preference persists after reload without a distracting flash where technically feasible.
- Project filters and project details work as specified.
- Contact actions clearly explain what will happen.
- Production build, lint, and type checks pass using the scripts actually configured in the repository.
- The deployed version is the new project and does not affect the reference site.
2. Scope
2.1 Included in version 1
- Personal portfolio website built with Next.js App Router and TypeScript.
- Responsive navigation and mobile menu.
- Hero, About, Skills, Projects, Services, Contact, and Footer sections.
- Dark and light themes.
- Project category filtering.
- Accessible project details dialog or detail view, populated only with verified information.
- Social/contact links.
- Resume download only if the actual resume file is present and approved.
- Client-side contact form that opens the visitor's email application using mailto:.
- Copy-email action with honest success/error feedback.
- SEO metadata, Open Graph metadata, canonical URL only after domain confirmation, and suitable structured data.
- Basic accessibility and responsive checks.
- Vercel deployment readiness.
- Centralized typed portfolio content.
2.2 Explicitly excluded from version 1
Do not add these unless the owner approves a separate requirement:
- Custom backend, API server, database, or authentication.
- Server-side contact form submission.
- Email delivery service, SMTP, or contact form provider.
- Paid APIs or mandatory API keys.
- Admin dashboard or CMS.
- Blog or article management system.
- Analytics, advertising trackers, or third-party tracking scripts.
- Fake project metrics, client testimonials, company logos, employment history, certificates, or achievements.
- Fake loading indicators, simulated network requests, or fake “message sent” states.
- Automatic changes to the existing live portfolio.
- Unrequested redesign or deletion of unrelated files in the new repository.
3. Source of Truth and Content Integrity
3.1 Source hierarchy
When requirements conflict, use this order and record the conflict rather than silently guessing:
1. Explicit, current owner approval.
2. AGENTS.md project instructions.
3. specs/portfolio/spec.md — this approved requirements document.
4. specs/portfolio/research.md — source notes and verification evidence.
5. specs/portfolio/plan.md — technical implementation plan.
6. specs/portfolio/tasks.md — approved implementation tasks.
7. Application source code.
If these files are not all present, do not invent their contents. Report which files are missing and propose the smallest next step.
3.2 Content rules
- Use only information confirmed by the owner or clearly supported by the reference portfolio.
- Treat the profile and project list in this document as reported extracted information, not as proof that every link, file, skill rating, or claim remains valid today.
- Recheck links and assets before publication.
- Never show internal TODO: Confirm with owner text on the public website.
- An unconfirmed item must be omitted from the public UI, or rendered only after the owner explicitly approves a neutral alternative.
- Do not invent project descriptions, architectural details, results, user counts, revenue, performance improvements, customer names, employment dates, academic credentials, certifications, or testimonials.
- If a project has no verified live demo, omit its demo button or show an owner-approved “Demo unavailable” label. Never link it to an unrelated project.
- If a repository mapping is uncertain, omit the repository link until confirmed.
- If the resume file is missing, do not show a broken download link.
- Do not display skill percentages unless the owner verifies that they represent meaningful, defensible proficiency ratings. Prefer categorized skill lists if ratings are not verified.
- Avoid describing the owner as an “expert” or claiming specific proficiency without approval.
3.3 Reference content recorded in the supplied draft
The following items were recorded in the original specification. They must be verified against the live source and/or owner approval before release.
Identity and positioning
- Name: Waiz Hussain
- Monogram: WH
- Professional title: Full Stack Developer & AI Builder
- Location: Pakistan
- Reported availability: Available for freelance work and full-time roles
- Proposed tagline: “Autonomous Systems Developer based in Pakistan. Expert in Next.js, Flutter, Node.js, and AI-powered SaaS products.”
- Proposed hero summary: “I build real-world applications across web, mobile, and AI domains using Next.js, Flutter & Node.js. Specialized in Autonomous Systems, SaaS products, and AI-powered workflows.”
- Proposed canonical domain: https://waiz.dev — must be confirmed before use.
The word “Expert” and other strong claims should be retained only if the owner approves them. Otherwise, use a factual, less absolute title and summary.
Contact and social links recorded in the draft
- Email: waizhussain9955@gmail.com
- GitHub: https://github.com/waizhussain9955
- LinkedIn: https://www.linkedin.com/in/waiz-hussain-6750392ba
- WhatsApp: https://wa.me/923272051549
- X/Twitter handle: @waizhussain
- Resume path: /resume/Waiz_Resume_Full_Stack_Dev.pdf — confirm file exists and is current.
- X/Twitter destination URL is not supplied in the source draft; do not invent one. Confirm it or omit the X link.
Personal contact information must be published only as approved by the owner.
Skills/technologies recorded in the draft
- Agentic AI
- Tailwind CSS
- AI-driven development
- React.js
- Dart / Flutter
- Node.js
- TypeScript
- Next.js
- HTML5
- CSS3
- Python
- Express.js
- Java/Kotlin
- Gemini API
- OCR systems
- Local storage / JSON
- Vercel
The original draft also records percentage values for some skills (for example, Agentic AI 99% and Tailwind CSS 90%). These percentages are not automatically approved for publication. Confirm them or remove the numbers.
Projects recorded in the draft
The following list is a candidate inventory, not a guarantee that all descriptions, links, or repository mappings are correct. Verify each row before making it public.
#	Project	Category recorded in draft	Demo / asset status	Repository status
1	TikTok Downloader	SaaS / Full Stack	https://tik-tokdownloader.xyz — verify availability and ownership	https://github.com/waizhussain9955/tiktok-downloader — verify
2	Modern Watch Store	E-commerce frontend	https://modern-watch-store.vercel.app/ — verify	https://github.com/waizhussain9955/modern-watch-store — verify
3	T Downloader Android App	Android / Flutter	Draft says direct APK; exact file/URL not supplied	https://github.com/waizhussain9955/t-downloader-android-application — verify
4	Word Blaze Game	Interactive web game	https://word-blaze.vercel.app/ — verify	https://github.com/waizhussain9955/WordBlaze — verify
5	Jewelry Store Website	E-commerce showcase	https://jewelry-store-ochre.vercel.app/ — verify	https://github.com/waizhussain9955/jewelry-store — verify
6	5 Word Letter Website	Web word tool	https://5-word-letter.vercel.app/ — verify	https://github.com/waizhussain9955/5-word-letter — verify
7	Laptop E-Commerce Mobile App	Mobile e-commerce	No verified demo supplied	https://github.com/waizhussain9955/laptop-E-com — verify
8	Swift Translate Pro	AI translation web app	No verified demo supplied	https://github.com/waizhussain9955/SwiftTranslate-Pro — verify
9	Smart Bachat Committee App	Mobile financial app	Draft says direct APK; exact file/URL not supplied	https://github.com/waizhussain9955/smart-committee-app — verify
10	Unplug_AI Chatbot	AI chatbot	Draft says direct APK; exact file/URL not supplied	Draft points to TikTok Downloader repo and explicitly flags this mapping as uncertain; do not publish until confirmed
11	Smart OCR Scanner	Mobile OCR utility	No verified demo supplied	Draft points to TikTok Downloader repo and explicitly flags this mapping as uncertain; do not publish until confirmed
12	Advanced Currency Converter	Financial web app	https://advanced-currency-converter.vercel.app/ — verify	https://github.com/waizhussain9955/advanced-currency-converter — verify


For every project approved for publication, record:
- Correct title and category.
- Short, factual summary.
- Verified technologies actually used.
- Live demo URL, if one exists.
- Repository URL, if one exists and is public.
- Preview image source and usage permission.
- Any limitations that should be disclosed.
- Whether a detailed case study has enough verified information to be shown.
Do not create a “case study” with invented problems, solutions, challenges, or results. If there is not enough verified information, show a concise project card without a case-study action.
Unconfirmed profile details
The original draft marks these details as unverified:
- Employers, job titles, internships, dates, and employment descriptions.
- Education institution, qualification, graduation year, and honors.
- Certification names, issuers, and dates.
- Demo links for projects 7, 8, and 11.
- Correct repositories for projects 10 and 11.
- Exact APK download URLs for projects 3 and 9, and possibly 10.
These details must remain unpublished until confirmed.
4. Approved Technical Direction
4.1 Stack
- Framework: Next.js App Router.
- Language: TypeScript with strict: true.
- Styling: Tailwind CSS and CSS variables for design tokens and themes.
- UI primitives: shadcn/ui where appropriate.
- Icons: lucide-react.
- Deployment: Vercel.
- Data: typed local TypeScript data files.
- No backend or database in v1.
Use supported, compatible stable versions at setup time and record the installed versions in package.json and the lockfile. Do not leave ambiguous “latest stable 14/15” instructions in the implementation plan. The actual installed version must be chosen once, then used consistently.
4.2 Framework and deployment decision
The project is intended to be frontend-only and deployed to Vercel. Before implementation, decide and document whether it will use:
- A normal Next.js Vercel deployment with no custom server/data services; or
- Static export, if all required features are compatible with it.
Do not combine these approaches ambiguously. Static export has feature constraints; do not use server-only Next.js features if static export is approved. If the owner has not chosen, record the decision in the plan and ask before building deployment-specific features.
4.3 Dependency policy
- Prefer framework and platform capabilities before adding a new package.
- Use shadcn/ui components that the project actually needs.
- Do not add duplicate dialog, popover, or accessibility libraries without a specific reason.
- Do not add analytics, form services, animation packages, or UI libraries outside the approved stack without approval.
- Keep the dependency list minimal and explain any non-obvious package in research.md or the plan.
- Follow the official setup instructions appropriate to the chosen Next.js and Tailwind versions.
4.4 Type safety
- Keep TypeScript strict mode enabled.
- Do not use any; use precise types or unknown with safe narrowing when necessary.
- Keep project data types explicit and reusable.
- Do not silence TypeScript errors with broad casts or disable compiler checks to make a build pass.
- Ensure external URLs are represented as strings and validated/handled safely before use.
4.5 Suggested source organization
The exact structure can be adjusted in plan.md, but keep responsibilities separated.
specs-portfolio/
├── AGENTS.md
├── specs/
│   └── portfolio/
│       ├── spec.md
│       ├── research.md
│       ├── plan.md
│       └── tasks.md
├── public/
│   ├── images/
│   └── resume/                 # only if an approved resume file exists
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── icon.*              # only if included
│   │   ├── robots.ts            # if appropriate for the deployment setup
│   │   └── sitemap.ts           # if appropriate for the deployment setup
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   └── ui/
│   ├── data/
│   │   └── portfolio.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validation.ts        # only if a shared validation helper is useful
│   └── types/
│       └── portfolio.ts
├── package.json
└── lockfile
This is a proposed structure, not permission to create every file blindly. Keep it aligned with the actual framework setup and plan.md.
5. Information Architecture
The main page should use these sections in this order unless the owner approves a change:
1. Navigation
2. Hero
3. About
4. Skills
5. Projects
6. Services
7. Contact
8. Footer
Use semantic section IDs:
- home
- about
- skills
- projects
- services
- contact
Navigation anchors must point to existing IDs. Do not show a link to a section that does not exist.
6. Visual Design Requirements
6.1 Overall direction
Create a clean, contemporary developer portfolio with a restrained “obsidian” dark theme and a readable light theme. Glass effects and gradients may be used as accents, but readability and speed take priority over decoration.
6.2 Design tokens
Centralize theme colors and common values using CSS variables and Tailwind-compatible tokens. Define tokens for:
- Page background.
- Surface/card background.
- Primary text.
- Muted text.
- Border.
- Primary/accent color.
- Focus ring.
- Success/availability status.
- Shadow and overlay.
- Light and dark color schemes.
Do not scatter unrelated hard-coded colors across components. Ensure text, borders, badges, focus rings, and disabled states remain legible in both themes.
6.3 Typography and spacing
- Use a clear type scale and consistent spacing system.
- Keep paragraphs readable and line lengths comfortable.
- Use fluid typography only where it improves responsiveness.
- Avoid text clipped by fixed heights.
- Avoid excessive animation, giant gradients, and glass effects that reduce contrast.
- Respect prefers-reduced-motion.
6.4 Responsive breakpoints
At minimum, verify:
- 320px wide small mobile.
- 375–390px common mobile.
- 768px tablet.
- 1024px small laptop.
- 1440px desktop.
- A wide desktop layout at 1920px or greater.
The page must not have unintended horizontal scrolling. Cards should reflow naturally, navigation should switch to a mobile menu at the selected breakpoint, and buttons must remain usable with touch.
7. Functional Requirements
7.1 Navigation
Required behavior
- Sticky header with an optional translucent surface and backdrop blur.
- WH monogram linking to the home section.
- Desktop links for all approved sections.
- Active section indicator, if implemented, should be based on the visible section and must not flicker rapidly.
- Smooth anchor scrolling where supported.
- Account for the sticky header so section headings are not hidden after navigation.
- Mobile menu opens from a clearly labelled button.
- Mobile menu closes when a link is selected, when Escape is pressed, and when the user activates the close control.
- Focus remains visible and keyboard users can reach every navigation item.
- Use a real button for the menu toggle, with aria-expanded and aria-controls reflecting state.
Acceptance criteria
- Every navigation link reaches the correct existing section.
- The mobile menu does not cover content after it is closed.
- Escape closes an open menu.
- No dead or duplicate anchor IDs exist.
7.2 Theme toggle
Required behavior
- Provide Dark and Light themes.
- Default to the approved default theme. The initial draft proposes dark/obsidian; owner approval is required if not already confirmed.
- Respect system preference when there is no saved user preference, if this is compatible with the chosen theme implementation.
- Persist the user's explicit selection using localStorage.
- Use a theme implementation compatible with the installed Next.js version and avoid hydration warnings.
- The toggle has an accessible label and exposes its current state.
- Theme colors must update all sections, forms, cards, dialogs, navigation, and focus indicators.
Acceptance criteria
- Switching themes updates the complete interface.
- Reloading retains the chosen theme.
- No broken contrast or unreadable text appears in either theme.
- No avoidable hydration errors or obvious theme flash is introduced.
7.3 Hero section
Required content
- Approved name and professional title.
- Concise, factual summary.
- Availability badge only if the owner confirms availability is current.
- Primary action: “View My Work” scrolling to Projects.
- Secondary action: “Let’s Talk” scrolling to Contact.
- Resume download action only if a verified current resume file exists.
- Approved social/contact links.
Rules
- Do not use unverified claims or invented statistics.
- Do not show a resume button pointing to a missing file.
- All external links must use correct destinations and appropriate security attributes when opening a new tab.
- Decorative motion must not interfere with reading or navigation.
Acceptance criteria
- The main headline is visible without requiring excessive scrolling on common desktop and mobile screens.
- All hero actions have meaningful destinations.
- Missing optional data does not leave empty buttons or awkward gaps.
7.4 About section
Required behavior
- Present a short professional narrative approved by the owner.
- It may describe development interests and working approach, but must not claim unverified work history or accomplishments.
- Focus cards may describe approved themes such as maintainable code, AI-assisted development, and user-focused interfaces.
- Experience and Education tabs/timeline are optional and must not be built with fabricated entries.
Acceptance criteria
- The section contains no visible placeholders.
- If there is insufficient verified education or experience data, omit the timeline or show only approved factual content.
- Tabs, if used, are keyboard accessible and expose their selected state.
7.5 Skills section
Required behavior
- Group verified skills into useful categories such as AI & Automation, Web Development, and Mobile Development.
- The exact category names and grouping may be refined in research.md and approved by the owner.
- Use consistent skill labels and avoid duplicate entries caused by synonyms.
- Skill filtering, if included, updates the displayed list correctly.
- Skill percentage meters are optional and require owner verification.
Acceptance criteria
- Every displayed skill is supported by the approved content inventory.
- No arbitrary or invented proficiency values appear.
- Category filters can be operated with a keyboard.
- Empty categories are hidden or handled clearly.
7.6 Projects section
Required behavior
- Show only projects approved for public display.
- Provide category filters such as All, SaaS & Full Stack, Mobile, Web & Tools, and AI where the approved projects justify these categories.
- Each project card may include:
  - Project title.
  - Short verified summary.
  - Category.
  - Verified technology badges.
  - Preview image, if an appropriate asset is available.
  - Live demo link, if verified.
  - Repository link, if verified and public.
  - Case-study action only when enough verified case-study content exists.
- External project links must be checked before release.
- A missing demo or repository must not be replaced by a guessed or unrelated URL.
- If a preview image is unavailable, use a designed fallback rather than a broken image.
- Project ordering should be explicitly set in the data file. The owner may choose featured projects after reviewing the verified inventory.
Case-study details
- If used, show only approved information such as project purpose, verified features, actual technology stack, and known implementation details.
- Do not fabricate business impact, scale, security claims, architecture diagrams, challenges, or outcomes.
- If a modal/dialog is used, it must have an accessible name, move focus appropriately, keep keyboard focus inside while open, close with Escape, and return focus to its trigger.
- If a detail page is used instead, it must have a clear route and a working return/navigation path.
Acceptance criteria
- Every filter returns the expected project set.
- “All” restores all approved projects.
- Every visible link points to the matching project.
- Missing links are omitted or explicitly disabled with an accessible explanation.
- Modal/dialog can be opened and closed using keyboard and pointer.
- No project displays fabricated details.
7.7 Services section
The original draft proposes these possible services:
1. Full-stack web application development.
2. AI and automation integration.
3. Cross-platform mobile app development.
4. SaaS/MVP development.
5. UI engineering and performance improvements.
6. Technical consulting and code review.
These are candidate service descriptions, not proof of commercial availability or expertise. The owner must approve the final services and wording before publication.

Required behavior
- Show only services the owner actually wants to offer.
- Each card should contain a clear title, short factual explanation, and a link to Contact.
- Do not promise delivery timelines, guaranteed outcomes, or unsupported service levels.
- Do not show empty or unapproved service cards.
Acceptance criteria
- Each service link reaches the contact section.
- Service copy is approved and avoids unsupported guarantees.
- The layout adapts to mobile without clipped content.
7.8 Contact section
Contact channels
- Email: waizhussain9955@gmail.com, subject to owner approval.
- WhatsApp: https://wa.me/923272051549, subject to owner approval.
- Location: Pakistan, if the owner approves showing it.
- Availability: show only if confirmed current.
- Other social links only if their destinations are confirmed.
Copy-email action
- Provide a “Copy Email” button.
- Use the Clipboard API when available and permitted.
- Show confirmation only after the copy operation succeeds.
- If clipboard access fails or is unavailable, show the email address with instructions to copy it manually.
- Do not display a success toast before success is known.
Contact form
- Fields: Full Name, Email Address, Subject, Service Needed (optional dropdown), Message.
- Required/optional status must be clear in labels and validation.
- Validate required fields and basic email structure on the client.
- Do not claim a browser-side regex proves an email address exists or is fully RFC-compliant.
- Show field-level, accessible validation messages.
- Preserve user-entered values after validation errors.
- Prevent accidental empty submission.
- Construct a properly encoded mailto: URL using the approved recipient and the entered subject/body.
- Explain before or at submission that the user's default email application will open and that the visitor must send the email from that application.
- If no email application is configured, the form may not work as expected; keep the email address visible as a fallback.
- Do not store or transmit the form contents to a server.
- Do not show “Message sent”, “Successfully submitted”, or equivalent server-success language because the site does not send the email itself.
- Do not use fake async timeouts or simulated submission progress.
Acceptance criteria
- Invalid required fields show understandable errors.
- Valid submission attempts to open the email client with encoded recipient, subject, and body.
- The interface accurately explains the mailto: behavior.
- Copy Email reports success only after the copy operation succeeds.
- Email and WhatsApp links open the intended destinations.
7.9 Footer
Required behavior
- Monogram or name.
- Quick navigation links.
- Only approved social links.
- Current year generated dynamically, rather than permanently hard-coded.
- A “Back to top” action that works with keyboard and pointer.
- Avoid unverified claims such as “designed and built entirely by me” unless the owner approves that wording.
Acceptance criteria
- Footer navigation points to valid destinations.
- Copyright year updates automatically.
- Back-to-top works and does not obscure content.
8. Centralized Data Model
Keep profile, social links, skills, services, and projects in typed data modules rather than embedding content in multiple UI components.

Suggested files:
- src/types/portfolio.ts
- src/data/portfolio.ts
Suggested conceptual types (adapt to the implementation; do not blindly copy without checking the actual content):
export type SocialLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  category: "ai" | "web" | "mobile" | "tools";
  proficiency?: number; // Include only if owner-verified and approved.
};

export type PortfolioProject = {
  id: string;
  title: string;
  category: "saas" | "mobile" | "web" | "ai";
  summary: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  image?: string;
  featured?: boolean;
  caseStudy?: {
    purpose?: string;
    verifiedFeatures?: string[];
    implementationNotes?: string[];
  };
};
Data rules
- Optional values should be omitted rather than filled with fake values.
- Keep project IDs stable and unique.
- Do not repeat contact information in several components.
- Avoid using untyped Record<string, any> structures.
- Validate external URLs and ensure buttons are not rendered when their destination is missing.
- Content data should not contain internal notes or TODO strings that might accidentally render publicly.
- If a field is unverified, record the verification status in research.md or the task notes, not in the public-facing string.
9. SEO and Sharing
9.1 Metadata
- Use the Next.js Metadata API supported by the installed version.
- Provide a clear page title and description.
- Add appropriate Open Graph and social sharing metadata.
- Use a canonical URL only after confirming that https://waiz.dev is owned, configured, and intended for this project.
- If the canonical domain is not confirmed, do not publish a guessed canonical URL.
- Add a favicon/app icon only if a suitable approved asset is available.
- Use descriptive alternative text for meaningful images; use empty alt text for purely decorative images.
9.2 Structured data
- Person structured data is optional and should be added only when the properties are accurate and publicly approved.
- Structured data must match the visible page content.
- Do not include unverified education, employer, certification, or same-as links.
- Validate generated JSON-LD and ensure user-provided text cannot break its serialization.
9.3 Indexing
- Configure robots and sitemap behavior appropriate to the chosen deployment.
- Do not index temporary preview content that should remain private.
- Do not create sitemap entries for routes that do not exist.
10. Accessibility Requirements
Target WCAG 2.1 AA principles and test practical keyboard and screen-reader behavior. A claim of full conformance must not be made without an appropriate audit.

Minimum requirements:
- Use semantic HTML landmarks and a logical heading hierarchy.
- Include a skip-to-content link.
- All interactive controls must be keyboard reachable.
- Provide visible focus indicators.
- Use descriptive button and link names.
- Ensure color contrast is checked for text, controls, and focus indicators.
- Do not rely on color alone to convey meaning.
- Label all form fields and associate validation errors with their fields.
- Announce important copy/validation feedback accessibly.
- Mobile menus and dialogs must manage focus correctly.
- Respect reduced-motion preferences.
- Use adequate touch target sizes.
- Give meaningful images appropriate alt text.
- Ensure icon-only controls have accessible names.
- Avoid unnecessary ARIA when native semantic HTML already provides the needed behavior.
11. Performance and Reliability
- Prefer server-rendered/static content where it fits the chosen Next.js deployment approach.
- Keep client components limited to features that require interactivity, such as theme state, filters, mobile menu, dialog, and form validation.
- Avoid unnecessary packages and large client bundles.
- Use optimized image handling compatible with the chosen deployment mode.
- If using Next.js image optimization, confirm it is compatible with the deployment configuration. For static export, configure image handling appropriately or use approved static assets.
- Provide image dimensions or aspect ratios to reduce layout shift.
- Avoid autoplaying heavy media.
- Avoid layout shifts caused by missing image dimensions or late-loading fonts.
- Test production build rather than relying only on the development server.
- Do not promise specific performance scores before measuring the deployed result.
Suggested performance goal: keep the page lightweight and responsive; use Lighthouse as a diagnostic tool. Numeric targets should be treated as goals to measure, not guaranteed facts.
12. Error, Empty, and Edge States
Explicitly handle these cases:
- No approved projects are available.
- A project has no live demo.
- A project has no public repository.
- A project preview image is missing or fails to load.
- The resume file is absent.
- Clipboard access is unavailable or rejected.
- The visitor has no default email application configured.
- The contact form contains invalid or missing fields.
- A filter category has no projects.
- The mobile menu is open when the viewport changes.
- The saved theme value is missing or invalid.
- External links are unavailable or have changed.
The interface must fail gracefully without fake success states, broken links, unhandled exceptions, or visible internal placeholders.
13. Testing and Verification
13.1 Required checks
Run the checks supported by the actual package.json. Do not invent scripts that do not exist.

At minimum, configure and run appropriate equivalents of:
- Production build.
- Lint.
- TypeScript type check.
- Manual responsive review.
- Keyboard interaction review.
- Link and asset verification.
If an automated test framework is added, first justify and approve the dependency, then add tests for core interactions.
13.2 Functional test checklist
- [ ] Logo returns to the home section.
- [ ] Every navigation link reaches the correct section.
- [ ] Mobile menu opens, closes, and responds to Escape.
- [ ] Theme toggles and persists after reload.
- [ ] Theme does not cause hydration warnings.
- [ ] Project filters show the correct projects.
- [ ] Project links match their actual projects.
- [ ] Missing project links do not render as broken actions.
- [ ] Project detail dialog/view is keyboard accessible, if implemented.
- [ ] Contact validation displays accessible field errors.
- [ ] Valid contact form opens an encoded mailto: action.
- [ ] The interface does not falsely claim the message was sent.
- [ ] Copy-email feedback reflects the actual result.
- [ ] Resume action exists only when the file exists.
- [ ] No visible TODO or internal notes remain.
- [ ] No unintended horizontal overflow at target widths.
- [ ] Production build, lint, and type check pass.
13.3 Acceptance evidence
For each completed implementation task, record:
- What changed.
- Which acceptance criteria were checked.
- Commands run and their actual results.
- Any remaining limitations.
- Screenshots only when useful and available.
- Any requirements that need owner approval.
Do not report a check as passed if it was not run.
14. SDD Workflow and Change Control
Phase 0 — Repository and source audit
- Inspect the new repository.
- Identify existing files and current framework setup.
- Review the current live portfolio as a reference only.
- Verify project URLs, resume availability, social destinations, and content claims.
- Record uncertainties in research.md.
- Do not modify the existing live portfolio.
Gate: owner approves the content inventory and unresolved items are either confirmed or intentionally excluded.
Phase 1 — Requirements approval
- Review this spec.md.
- Confirm the stack and deployment mode.
- Confirm the sections, design direction, and contact behavior.
- Confirm which projects should be featured.
- Confirm whether skill percentages, timeline, services, resume, and canonical domain are approved.
Gate: no implementation starts until the requirements are approved.
Phase 2 — Plan and task breakdown
- Align plan.md with this spec.
- Break implementation into small, reviewable tasks in tasks.md.
- Each task must include scope, dependencies, acceptance criteria, and verification steps.
- Resolve conflicts rather than silently choosing one document over another.
Gate: owner approves the implementation plan and task order.
Phase 3 — Foundation
- Configure the approved framework and dependencies.
- Set up type definitions, centralized data, theme tokens, and base layout.
- Confirm lint, type check, and build scripts work.
Phase 4 — Sections and interactions
- Implement navigation and theme.
- Implement Hero, About, Skills, Projects, Services, Contact, and Footer.
- Add only approved content and assets.
- Complete keyboard and responsive behavior.
Phase 5 — Quality assurance
- Verify links, resume, content, and assets.
- Test theme, filters, modal, form, and copy-email behavior.
- Review accessibility and responsive layouts.
- Run production checks and fix failures.
Phase 6 — Deployment readiness
- Confirm the intended Vercel project is the new repository.
- Confirm environment requirements; v1 should not require secrets unless separately approved.
- Verify canonical domain and metadata before release.
- Deploy only after owner approval.
- Confirm that the old live site remains unchanged.
Change control
If a requested change alters scope, dependencies, data handling, deployment behavior, or a user-visible requirement:
1. Explain the impact.
2. Update this spec or the relevant plan/task.
3. Get approval when required.
4. Implement the approved change.
5. Re-run affected checks.
15. Safety Boundaries
Always do
- Preserve the existing live site.
- Use approved, truthful content.
- Keep content centralized and typed.
- Use semantic and accessible controls.
- Explain mailto: limitations accurately.
- Verify links and assets before publication.
- Report failures and unresolved assumptions clearly.
- Make the smallest change needed for each task.
Ask before doing
- Adding a new dependency or external service.
- Adding analytics, tracking, a CMS, backend, database, or authentication.
- Publishing a new personal claim, credential, project result, testimonial, or skill rating.
- Changing the approved stack or deployment approach.
- Buying or configuring a domain.
- Replacing existing repository files where the intent is unclear.
- Deploying publicly or changing domain configuration.
- Making a project public that has not been approved.
Never do
- Modify or overwrite the reference live portfolio.
- Invent credentials, employment history, project links, repositories, metrics, testimonials, or achievements.
- Show internal TODOs on the public site.
- Link a project to an unrelated repository.
- Claim an email was sent when only a mailto: link was opened.
- Add secrets to client-side code.
- Disable type checks or lint rules just to make the build pass.
- Claim tests or audits passed without running them.
16. Definition of Done
The portfolio is ready for release only when all applicable conditions are met:
- [ ] Owner has approved this spec and the implementation plan.
- [ ] Approved profile information is accurate.
- [ ] Every published project, demo, repository, social link, and asset has been verified.
- [ ] No internal TODOs or placeholder claims are visible.
- [ ] Resume action works only if a current approved resume exists.
- [ ] Responsive behavior has been checked at the target viewport widths.
- [ ] Dark and light themes are readable and persist correctly.
- [ ] Navigation, filters, dialog, and contact interactions work.
- [ ] Contact behavior does not claim server-side delivery.
- [ ] Keyboard navigation and focus states have been checked.
- [ ] Production build passes.
- [ ] Lint and TypeScript checks pass.
- [ ] SEO metadata and canonical domain are accurate.
- [ ] Deployment points to the new repository/project.
- [ ] Existing live portfolio has not been modified.
- [ ] Known limitations are documented and accepted by the owner.
17. Owner Decisions Required Before Implementation
Resolve these questions in research.md or by editing this section before marking the spec approved:
1. Canonical domain: Is https://waiz.dev owned/configured and intended for this project?
2. Resume: Is Waiz_Resume_Full_Stack_Dev.pdf available, current, and approved for public download?
3. Skills: Are the listed proficiency percentages verified and intended for publication? If not, use skill categories without percentages.
4. Project list: Which of the 12 candidate projects should appear in the first release?
5. Repository mappings: What are the correct repositories for Unplug_AI Chatbot and Smart OCR Scanner?
6. Demo/APK links: Are there valid demo or APK URLs for projects that currently lack verified links?
7. Experience and education: Should these sections be omitted until verified details are supplied?
8. Services: Which proposed services are actually being offered?
9. Availability: Is the owner currently open to freelance work and full-time roles?
10. Social links: What is the exact X/Twitter profile URL, if it should be displayed?
11. Deployment mode: Normal Next.js deployment on Vercel or static export?
12. Featured projects: Which 3–4 projects should be highlighted first, based on the owner's preference and verified status?
If a decision remains unanswered, do not block unrelated work unnecessarily. Implement only the approved, unambiguous scope and omit the unresolved public content.
18. Final Implementation Rule
This document defines intended product behavior; it is not automatic permission to start coding. First reconcile spec.md, research.md, plan.md, tasks.md, and AGENTS.md. Identify missing evidence and conflicts, obtain owner approval, then implement the smallest approved task and verify it against its acceptance criteria.