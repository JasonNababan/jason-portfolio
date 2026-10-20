# Jason Nababan — Portfolio

A warm, colorful portfolio for Jason's engineering, storytelling, venture, and creative work. Built with HTML, CSS, and JavaScript. No build step or runtime dependencies.

## Run locally

Serve this directory with any static server, for example `npx serve .`. Open the printed local address. The website can also be opened directly as `index.html`; clipboard support requires a secure context or localhost.

## Update the site

- Edit `content.js` for project cards, case studies, and project links.
- Edit `index.html` for biography, career history, social links, and contact details.
- Replace assets in `assets/`. Keep the same names or update references.
- Edit `styles.css` for colors, layout, and animation.
- `script.js` contains filters, accessible dialogs, phase visualization, drawing, downloads, and small interactive details.
- `welcome.js` and `welcome.css` define the loading → interactive welcome → introduction sequence, visitor interests, and photo gallery.

Project descriptions are grounded in Jason's engineering and business CVs and his public GitHub repositories. The signal playground illustrates ideal triangle-wave cancellation. The introduction and gallery use original photos from Hult Prize Taiwan's 2026 national competition. Recheck time-sensitive experience and project milestones when updating.

## GitHub Pages

The site is static and uses relative asset paths, so it supports a GitHub Pages repository path. `.nojekyll` disables Jekyll processing. GitHub Pages should publish from the repository's `main` branch, root directory (`/`). Every push updates the site.

Accessibility includes keyboard-accessible dialogs with focus return, labeled project filters, reduced-motion support, a skip link, readable color contrast, touch-friendly drawing, and a keyboard-accessible stamp alternative to freehand drawing.

All page code, fonts, icons, photos, video, and the CV are stored in this repository and served by GitHub Pages. No third-party runtime requests, analytics, tracking scripts, cookies, or contact-form backend are included. Profile links open the corresponding external websites only when clicked. Contact uses email, telephone, and direct profile links. The doodle remains local to the tab; download is optional. DM Sans and Manrope are self-hosted with their open font licenses in `assets/fonts/`.
