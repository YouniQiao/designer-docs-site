# ProxyRule

The ProxyRule used by insertProxyRule.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@ohos.web.webview';
```

## getSchemeFilter

```TypeScript
getSchemeFilter(): ProxySchemeFilter
```

Returns the scheme filter used for this rule.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ProxySchemeFilter | The scheme filter used for this rule. |

## getUrl

```TypeScript
getUrl(): string
```

Returns the proxy URL.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | The proxy URL. |

