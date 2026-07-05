# ProxySchemeFilter

```TypeScript
enum ProxySchemeFilter
```

Enum type supplied to {@link insertProxyRule} for indicating the scheme filter for proxy.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

## MATCH_ALL_SCHEMES

```TypeScript
MATCH_ALL_SCHEMES = 0
```

所有的scheme都会使用代理。

**Since:** 15

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## MATCH_HTTP

```TypeScript
MATCH_HTTP = 1
```

HTTP请求会使用代理。

**Since:** 15

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## MATCH_HTTPS

```TypeScript
MATCH_HTTPS = 2
```

HTTPS请求会使用代理。

**Since:** 15

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

