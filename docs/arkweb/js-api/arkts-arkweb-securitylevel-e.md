# SecurityLevel

Defines the security level for the page.

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## NONE

```TypeScript
NONE = 0
```

Unable to determine whether it is safe or not, the non-http/https protocol used.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## SECURE

```TypeScript
SECURE = 1
```

Indicates the HTTPS protocol used by the page and the authentication is successful.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## WARNING

```TypeScript
WARNING = 2
```

The page is insecure. For example, the HTTP protocol is used or the HTTPS protocol
is used but use an legacy TLS version.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## DANGEROUS

```TypeScript
DANGEROUS = 3
```

Attempted HTTPS and failed, the authentication is failed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

