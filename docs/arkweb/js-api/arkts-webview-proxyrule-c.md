# ProxyRule

The ProxyRule used by insertProxyRule.

**Since:** 15

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getSchemeFilter

```TypeScript
getSchemeFilter(): ProxySchemeFilter
```

获取代理规则中的ProxySchemeFilter信息。

**Since:** 15

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ProxySchemeFilter | 代理规则中的ProxySchemeFilter信息。 |

## getUrl

```TypeScript
getUrl(): string
```

获取代理规则中的代理的Url信息。

**Since:** 15

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 代理规则中的代理的Url信息。 |

