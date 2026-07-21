# V-Impact

Portable six-page migration of the authorized Vimpact.us Wix site for deployment at Vimpact.org. It preserves the authored page copy, navigation, authorized local media, social links, Substack membership path, and Platform PDF while replacing Wix runtime dependencies with static HTML, CSS, and JavaScript.

## Local preview

```sh
python3 -m http.server 8000
```

The repository root is the deployable Cloudflare Pages output. The contact form is visual-only until a recipient and delivery service are configured; it does not transmit or store entries. Wix member login, event databases, forums, and donation processing are not portable and remain external migration dependencies.

## Checks

```sh
npm test
npx --yes html-validate@10.4.0 '*.html'
```
