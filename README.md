# Purbanch Central Academy — World-Class Bilingual Website

## School
**Purbanch Central Academy**  
**Mirchaiya-6, Siraha, Nepal**  
Established: **2069 BS**

This package uses the two images supplied for this project:
- `assets/logo-pca.png`
- `assets/top-banner.jpeg`

## Main files
- `index.html` — public website
- `style.css` — public design
- `app.js` — bilingual website + localStorage CMS bridge
- `admin.html` — administrator login/dashboard
- `admin.css` — admin design
- `admin.js` — CMS controls
- `assets/` — supplied school logo and banner

## Bilingual support
The website supports:
- English
- नेपाली

The public language switcher remembers the selected language.

The admin dashboard provides separate English and Nepali fields for the editable content.

## Admin dashboard
Open `admin.html`.

### First-time secure setup
There is **no demo username or password** in this package. On the first opening of `admin.html`, create your private administrator username, password, and recovery phrase/code. These values are never printed on the public website or login screen.

The dashboard can edit:
- School name, tagline and address
- Phone/email
- Logo (URL or browser upload)
- Top banner (URL or browser upload)
- Homepage hero
- About
- Vision
- Mission
- Principal name/photo/message
- Director name/photo/message
- Academic programs
- Facilities
- News and events
- Admission enquiries

### Image uploads
Logo, principal photo and director photo can be selected through the browser. For the supplied logo/banner, the included files are used automatically.

## Admission enquiry
The public admission form stores submitted enquiries in browser `localStorage`. Admins can view/delete them from the dashboard.

## Important production/security note
This is an HTML/CSS/vanilla-JavaScript website with a browser-local CMS, as requested. It is suitable for a demo, local use, or static hosting.

The admin username/password are intentionally simple for this front-end-only version. **Do not use this authentication for a production public school website.** A production system should use a backend, secure password hashing, sessions/tokens, server-side authorization, a database, and secure file storage.

Also note that `localStorage` is browser-specific. Changes made on one computer/browser will not automatically appear on another device.

For production deployment, the frontend can be retained while replacing the localStorage layer with a secure API/database.


## Admin Login Fix
Use `admin` / `admin123`. The previous admin.js had a JavaScript template-literal syntax error; this package contains the corrected admin.js and the login opens the dashboard without requiring a page reload.


## Contact management
The Admin Dashboard now includes a dedicated **Contact & Location** tab. You can update the bilingual address, phone number, email address, and Google Maps location URL. Changes are saved with the same localStorage CMS and immediately reflected on the public Contact section.


## Contact management
Use Admin → Contact & Location. The dedicated **Save Contact Details** button updates address (English/Nepali), phone, email and Google Maps URL in localStorage. The public site reads the same data and listens for changes while open.


## Media Gallery
- Public navigation includes **Gallery / ग्यालरी**.
- Admin dashboard includes **Media Gallery**.
- Upload photos or short videos directly from the browser.
- Add larger media through an external image/video URL.
- Edit English/Nepali titles and captions and delete media from the dashboard.
- Uploaded media is stored in browser localStorage as data URLs; keep local videos under about 4 MB and images under about 2 MB.
- This is a browser-only CMS; media is not shared to other devices until a real backend/cloud storage is connected.

## Gallery + Admin Security Update
- Gallery is fully integrated into the Admin Dashboard under **Media Gallery**.
- Admin can upload photos/videos, add external media URLs, edit bilingual titles/captions, and delete media.
- Gallery data is shared with the public website through the same localStorage CMS key.
- Added **Admin Security** panel for changing the administrator username/password.
- Passwords are stored as SHA-256 hashes and are never displayed in plain text.
- Added authorized **Reset Admin Login** workflow; it requires the current credentials before reset.
- Login screen no longer displays a demo password.
