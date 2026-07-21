# V-Impact

Portable nine-page civic-editorial website for deployment at Vimpact.org. It preserves the authorized Vimpact.us source material and local media while presenting the platform, participation status, external services, organizational gaps, and an interactive Conscious Progress history map clearly. The public site is static, tracker-free, and does not collect form submissions or create accounts.

## Local preview

```sh
python3 -m http.server 8000
```

The repository root is the deployable Cloudflare Pages output. Vimpact.org does not operate a contact form, membership database, analytics tracker, or event system. Project updates use Substack; the legacy forum and donation page remain explicit external Wix handoffs.

## Checks

```sh
npm test
npm run validate
```

## Deployment and rollback

Cloudflare Pages should deploy the protected `main` branch. Use a preview deployment for every pull request, require the automated checks, and scope the Cloudflare token to this project only. Verify `_headers`, redirects, all eight routes, and external handoffs after production deployment. To roll back, redeploy the last known-good commit from Cloudflare Pages; do not rewrite Git history.

Before enabling forms, accounts, event RSVPs, or proposal submission, publish an accountable recipient, privacy/data-retention notice, governance and moderation rules, and an incident-response owner. Keep form content out of analytics and logs.
