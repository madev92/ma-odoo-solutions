# MA Odoo Solutions — GitHub Pages Website

A bilingual (English / Arabic) premium static website for full Odoo implementation services and Odoo business apps.

## What's included
- Premium responsive homepage with English / Arabic language switch
- Persistent light / dark theme
- Full Odoo implementation service section (analysis through go-live and support)
- CMS-managed product catalogue (add, edit, remove products)
- Product descriptions in English and Arabic, categories, Odoo version, status, feature lists, cover image and screenshot gallery
- Detail pages for Employee Custody and Employee Loan
- Trade Finance Suite shown as in development
- Accounting Suite removed
- Contact links: mohamed.ahmed.dev92@gmail.com and WhatsApp +20 155 620 6489

## Product management dashboard
This site uses [Pages CMS](https://pagescms.org/) to manage product content and images directly in GitHub. The CMS configuration is `.pages.yml`.

1. Push the website files to the GitHub repository used by GitHub Pages.
2. Open [app.pagescms.org](https://app.pagescms.org/) and sign in with the GitHub account that owns the website repository.
3. Install/authorize the Pages CMS GitHub App for this repository only.
4. Select the repository and the publishing branch (normally `main`).
5. Open **Products** in the CMS. The collection edits `products/products.json`.
6. Add, edit or delete product entries. Add a cover image and up to 12 screenshots; uploads are saved in `media/products/`.
7. Save changes. Pages CMS commits them to GitHub, and GitHub Pages republishes the site.

The public footer contains a **Manage products** shortcut to Pages CMS. Editing still requires signing in to the authorized GitHub account; visitors cannot edit products merely by opening the link.

## Product fields
- Product ID: unique English slug (e.g. `employee-custody`)
- Product names and descriptions: English and Arabic
- Category: `hr` or `operations`
- Odoo version and status (`available` / `development`)
- Feature lists in both languages
- Link to the detail page or contact section
- Cover image and screenshots gallery

## Publish / update
Keep `index.html` at the repository root. GitHub Pages should publish from branch `main` and folder `/(root)`. Any commit to the publishing branch triggers a new deployment.

## Important
- GitHub Pages is static hosting. Pages CMS supplies the authenticated editing interface and writes changes to GitHub; it is not a custom private admin backend hosted inside this website.
- Do not put GitHub personal access tokens or passwords in website files.
- Add real Odoo screenshots before marketing product functionality; only advertise features verified in the release build.
