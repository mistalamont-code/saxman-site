# Saxman — Anthony Grayson

Official website for **Anthony Grayson**, professionally known as **Saxman** — a saxophonist based in Erie, Pennsylvania, available for travel.

Live saxophone for weddings, corporate events, worship services, and private celebrations.

---

## What's in here

| Path | What it is |
|---|---|
| `index.html` | The landing page — single-file site with inline CSS |
| `assets/hero-saxman.jpg` | Hero performance photo |
| `assets/sax-detail.jpg` | About-section detail photo |
| `google-apps-script/Code.gs` | Gmail-powered form backend for booking inquiries |
| `.gitignore` | Files to keep out of the repo |
| `LICENSE` | Copyright notice |
| `CNAME` | Custom domain (optional — only used if hosting on GitHub Pages with a custom domain) |

This is a static site — no build step, no dependencies, no server. Just open `index.html` in any browser.

---

## How to run it locally

Double-click `index.html`. Done.

If you ever want to test it from a local web server (a few features render slightly more reliably this way):

```bash
# from this folder
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## How to deploy to GitHub Pages (free hosting)

1. **Create a new GitHub repository.** Name it something like `saxman-site` (or `anthony-grayson.github.io` if you want it at the root of your GitHub Pages account).
2. **Push this folder up.** See the commands in the parent README (one folder up).
3. **Enable Pages.** In the repo on GitHub: Settings → Pages → Source → "Deploy from a branch" → Branch: `main`, Folder: `/ (root)` → Save.
4. **Wait 30-60 seconds.** GitHub builds the site.
5. **Visit** `https://<your-username>.github.io/saxman-site/` (or the URL Pages shows).

### Custom domain (optional — `saxmanmusic.com`)

1. Buy the domain (Namecheap, Google Domains, Porkbun — any registrar).
2. Edit the `CNAME` file in this folder and put your domain on the only line, e.g.:
   ```
   saxmanmusic.com
   ```
3. At your domain registrar, point the DNS records to GitHub Pages:
   - **A records** for the apex domain (`saxmanmusic.com`):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME record** for `www` → `<your-username>.github.io`
4. Push the updated `CNAME` file. In GitHub Settings → Pages, add the custom domain and check "Enforce HTTPS" once the certificate is ready (about an hour).

---

## How to update the site

To change content (copy, prices, links):
1. Open `index.html` in any text editor (VS Code, Sublime, even TextEdit)
2. Edit, save, refresh the browser

To swap photos:
1. Replace `assets/hero-saxman.jpg` and/or `assets/sax-detail.jpg` with new files of the same name
2. Refresh the browser

To change links (Instagram, YouTube, etc.):
*The current scaled-down page has the booking form and links to email — when you're ready to add social links, edit the footer section in `index.html`.*

---

## Gmail contact form backend

The booking form is designed to submit to a Google Apps Script web app owned by the Gmail account that should send the emails.

Destination inbox: `saxmangrayson@gmail.com`

### One-time setup

1. Sign into the Gmail / Google account that should own the form backend.
2. Go to `https://script.google.com/`.
3. Create a new Apps Script project.
4. Replace the default code with the contents of `google-apps-script/Code.gs`.
5. Click **Deploy** -> **New deployment**.
6. Choose **Web app**.
7. Set **Execute as** to **Me**.
8. Set **Who has access** to **Anyone**.
9. Click **Deploy** and approve the permissions.
10. Copy the web app URL. It should end in `/exec`.
11. In `index.html`, replace:

   ```js
   var FORM_ENDPOINT = 'PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```

   with the copied web app URL.
12. Commit and push the updated `index.html`.

### Test

Submit the booking form from the live site. A new email should arrive at `saxmangrayson@gmail.com`, and replying to it should reply to the visitor's email address.

---

## Tech notes

- Single-file HTML with inline CSS (no external dependencies except Google Fonts)
- Fonts: Cormorant Garamond + Manrope (loaded from Google Fonts)
- Mobile responsive (breakpoint at 900px)
- Photos are background-images set in CSS, so they scale and crop responsively

---

## Brand identity

Editorial luxury. Late-night jazz club. Warm champagne gold against deep black. Refined italics for emphasis. Generous space. The visual does the work — the copy is concise.

**Palette:**
- Ink: `#08080a`
- Champagne: `#c9a96a`
- Pearl: `#f4efe6`

**Typography:**
- Display: Cormorant Garamond (400/500, italic for accents)
- Body: Manrope (300/400/500)

---

© 2026 Anthony Grayson. All rights reserved.
