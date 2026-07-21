# ProxyRule

The ProxyRule used by insertProxyRule.

**Since:** 15

<!--Device-webview-class ProxyRule--><!--Device-webview-class ProxyRule-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

<a id="getschemefilter"></a>
## getSchemeFilter

```TypeScript
getSchemeFilter(): ProxySchemeFilter
```

Returns the scheme filter used for this rule.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyRule-getSchemeFilter(): ProxySchemeFilter--><!--Device-ProxyRule-getSchemeFilter(): ProxySchemeFilter-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ProxySchemeFilter](arkts-arkweb-webview-proxyschemefilter-e.md) | The scheme filter used for this rule. |

<a id="geturl"></a>
## getUrl

```TypeScript
getUrl(): string
```

Returns the proxy URL.

**Since:** 15

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-ProxyRule-getUrl(): string--><!--Device-ProxyRule-getUrl(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | The proxy URL. |

