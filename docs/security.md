# Site security

What the site does to stay safe, and the account steps only the owner can take.

## In the code
- **Publishing:** checks on pull requests can only read the code. Only the deploy job, which runs for
  `main` alone, may publish to GitHub Pages (`.github/workflows/deploy.yml`).
- **Text files:** raw HTML in the Markdown is shown as text, never run, and links may only go to web
  pages, e-mail or this site (`scripts/build.mjs`).
- **Content Security Policy:** every page tells the browser to run only the site's own scripts (plus the
  visit counter when it is on), so injected code is blocked even if a bad edit slips through.
- **Review key:** the optional one-tap GitHub key in reviewer mode is kept only for the open browser tab
  and is gone when the tab closes. The safest way needs no key: "Send to Claude" opens GitHub's own page.
- **Who can change things:** reviewer mode on the website is only a convenience; it gives no power.
  Claude acts only on review issues whose author is the repository's owner or a collaborator, and only
  Rizwin's merge publishes anything (see `docs/review-comments.md`).

## Owner's account steps (on GitHub)
1. Turn on two-factor sign-in: Settings > Password and authentication.
2. Protect `main`: repository Settings > Branches (or Rules) > add a rule for `main` that requires a
   pull request and the "Check and publish the site" check to pass.
3. Review keys: Settings > Developer settings > Personal access tokens. Delete any old "Amani tafsir
   review" key that is no longer needed (it was saved on the device by the earlier version of the site).
4. Keep a backup: download the repository now and then (Code > Download ZIP).
