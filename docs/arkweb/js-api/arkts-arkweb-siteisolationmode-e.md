# SiteIsolationMode

Enumerates the site isolation modes. The site isolation mechanism isolates websites from different sources in
different render processes to reduce the cross-domain attack surface. For example, on a PC, each tab corresponds to
a render process. After site isolation is enabled, Iframes from different sources run in independent render
processes.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## PARTIAL

```TypeScript
PARTIAL = 0
```

Partial site isolation. New sites are loaded in the same render process.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

## STRICT

```TypeScript
STRICT = 1
```

Strict site isolation. Iframes from different sites are switched to new render processes.

**Since:** 21

**System capability:** SystemCapability.Web.Webview.Core

