# WebHttpCookieSameSitePolicy

Indicates whether to restrict cookies so that only requests sent back to the same site that
created them can carry them.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## NONE

```TypeScript
NONE = 0
```

Cookies marked as Secure are allowed to be carried in cross-site requests.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## LAX

```TypeScript
LAX = 1
```

Allow specific cross-site requests to carry cookies.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

## STRICT

```TypeScript
STRICT = 2
```

Prohibit cross-site requests from carrying cookies.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

