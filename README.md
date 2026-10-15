# Lake Country Local Produce (LCLP)

A static marketing site for a fictional Lake Country, BC grocery store built around
locally grown produce. Built with plain HTML/CSS/JS — no framework or build step.

## Contents

- `index.html` — hero, about, local growers directory, in-season highlights, store
  hours/map, newsletter signup, and a contact form
- `styles.css` — responsive, mobile-first styling
- `script.js` — mobile nav toggle, scroll-spy navigation, back-to-top button, and
  client-side form handlers (no backend wired up — forms show a confirmation message
  only)
- `public/` — reserved for future static assets

## Hosting

Served as static files from an Nginx container on a personal k3s cluster, backed by an
NFS-mounted PersistentVolume (see the [`Kubernetes`](https://github.com/Kevin-Smith-112/Kubernetes)
repo's `webstorage.yaml`).

## Local preview

Open `index.html` directly in a browser, or serve the directory with any static file
server, e.g.:

```bash
python3 -m http.server 8000
```
