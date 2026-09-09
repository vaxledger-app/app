# VaxLedger business handoff

VaxLedger is a standalone product prepared for independent business operation and ongoing development. This repository contains its own interface, article, public guide search, metadata and build pipeline.

## Product and search identity

- Public site: https://vaxledgerapp.com/
- Source repository: https://github.com/vaxledger-app/app
- Primary subject: Immunization record search & personal export
- Editorial source: `content/seo.json`
- Featured guide: An immunization history is not a vaccination schedule

Keep the product name, real operator contact, domain and source links consistent. The current contact is software@council.health. Replace it with the receiving business’s approved contact when the handoff takes place. Avoid publishing customer names, testimonials or operational claims until they have been approved and verified.

## Independent production setup

Before a receiving business enables health connections, configure its own approved FinchNode application, privacy notice, server-side credentials and connection deployment. The current frontend uses the existing FinchApps connection service; deployment of the public site does not establish an active patient connection. Update the frontend API origin, backend allowed origins, return route and Content-Security-Policy together. Credentials belong only in the business’s backend secret environment.

The existing privacy notice and import consent text describe the current connection architecture. Update those details to match the business’s actual deployment at handoff. Do not change consent wording independently of the backend configuration.

## Domain and indexing

The canonical origin is https://vaxledgerapp.com/. The domain is registered through Squarespace and assigned to this Render site; `www` redirects to the apex domain. Keep `liveUrl` in `content/seo.json`, repository homepage, sitemaps and DNS aligned. The original https://vaxledger.onrender.com/ address remains available during migration. Verify HTTPS before publishing domain changes and update the backend origin restrictions before enabling connections on a new domain.

The business should verify its live origin in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml`. These verification accounts and tokens are not included in this repository. Review indexing, branded queries, relevant topic queries and clicks after deployment; search engines decide when and whether to index pages. There are no analytics trackers in the app.

## Editorial maintenance

Keep the guide specific to VaxLedger. Describe actual product decisions and user workflows, and check FinchNode references against the implementation. Add a new guide when it answers a real product question. Update article dates when content changes substantively. Add new entries to the `articles` array in `content/seo.json`. Public search, homepage links, related guides, article metadata and the sitemap are generated automatically. Keep each article’s publication date stable and set `modified` only after a substantive revision.

Run `npm run build` followed by `npm test` before deployment. Inspect the homepage and guide at phone and desktop widths. Confirm that the deployed HTML includes the public content, the sitemap lists the intended origin, guide search works, and private imports remain outside the public index.
