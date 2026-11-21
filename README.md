# MA Odoo Solutions — GitHub Pages Website

A bilingual (English / Arabic) static website for presenting Odoo apps and business-focused ERP solutions.

## Included
- Responsive premium-style homepage
- English / Arabic language toggle (saved in the visitor's browser)
- Light / dark theme toggle (saved in the visitor's browser)
- Contact links configured for email and WhatsApp
- App catalogue with category filters
- Detail pages for Employee Custody and Employee Loan
- "In development" placeholder for Trade Finance
- Contact CTA via email
- GitHub Pages-ready static files

## Before publishing
1. Contact email and WhatsApp are configured in `index.html`: `mohamed.ahmed.dev92@gmail.com` and `+201556206489`.
2. Review each app's description and feature list against the exact release you intend to distribute.
3. Add your real product screenshots and demo videos when ready. The dashboard visuals currently shown are illustrative concepts, not actual Odoo screenshots.
4. Add ZIP packages only when you are ready to publish and have confirmed the code is safe to distribute.
5. Consider adding a custom domain later.

## Publish with GitHub Pages
1. Create a new **public** GitHub repository, for example `ma-odoo-solutions`.
2. Upload all files and folders from this package to the repository root. Keep `index.html` at the root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for the Pages deployment. Your site will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/ma-odoo-solutions/`

If you name the repository `YOUR-GITHUB-USERNAME.github.io`, the site can use the root URL:
`https://YOUR-GITHUB-USERNAME.github.io/`.

## Update the website
Edit the HTML/CSS/JS files in GitHub or locally, then commit and push. GitHub Pages will redeploy automatically.

## Important limitations
GitHub Pages hosts static websites. It does not provide built-in user accounts, payments, protected downloads, a product database, or a backend. For paid downloads, use a trusted external checkout/delivery service or add a separate backend later.

## Suggested next steps
- Confirm brand name and contact details.
- Add actual screenshots from Odoo.
- Add module version / edition / dependencies / license information.
- Add a proper privacy policy and terms before collecting visitor information or selling modules.
- Prepare release ZIPs and documentation before enabling download links.


## Product admin
Open `admin.html` on the published website to manage the catalogue. Drafts are kept in this browser only. To publish, enter the GitHub repository as `owner/repository`, branch, and a fine-grained GitHub token with **Contents: Read and write** access to that repository. The token is held in page memory only and is not saved to browser storage. Product data is written to `data/products.json`; uploaded screenshots are stored under `assets/shots/`.

Use HTTPS and keep the admin URL private. GitHub Pages is static hosting: this admin page is not an independent server-side login system. Anyone who can open the admin page can see the form, but publishing still requires your GitHub token. Never share the token or place it in website source files.
