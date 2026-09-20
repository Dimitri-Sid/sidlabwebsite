# SIDlab (Systems ImmunoDynamics Lab) website (sid-lab.org)

Built with [Astro](https://astro.build). All content is Markdown, one file per item.

## Run locally
```
npm install
npm run dev        # http://localhost:4321
```

## Editing content
| To change…            | Edit…                                         |
|-----------------------|-----------------------------------------------|
| Lab name, tagline, email, address, nav | `src/config.ts`              |
| Research themes (home + Research page) | `src/content/research/*.md`  |
| People                | `src/content/people/*.md` (`group: pi / member / alumni`) |
| Publications          | `src/content/publications/*.md`               |
| News                  | `src/content/news/*.md`                       |
| Join / Contact text   | `src/pages/join.astro`, `src/pages/contact.astro` |

- Add a photo: put the file in `public/images/people/` and set `photo: /images/people/name.jpg`.
- In front matter, **quote any value containing a colon**, e.g. `details: "12(3): 100-110"`.
- Bold author names in the publication list: edit `highlight` in `src/pages/publications.astro`.

## Deploy (GitHub Pages + GoDaddy domain)
1. Create a repo under the DSidLab org (e.g. `website`), push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**. Pushes to `main` now deploy automatically.
3. Pages → Custom domain: `sid-lab.org`, then tick **Enforce HTTPS** once available.
4. At GoDaddy → DNS for sid-lab.org, add:
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (four records)
   - `CNAME` `www` → `dsidlab.github.io`
   - Delete GoDaddy's default parked `A` record and any `www` CNAME to a GoDaddy host.
5. DNS can take from minutes to a few hours. (Check GitHub's current IPs in their docs if these ever change.)
