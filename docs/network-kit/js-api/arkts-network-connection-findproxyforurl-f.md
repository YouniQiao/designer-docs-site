# findProxyForUrl

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## findProxyForUrl

```TypeScript
function findProxyForUrl(url: string): string
```

Find pac proxy info for the url.

**Since:** 20

<!--Device-connection-function findProxyForUrl(url: string): string--><!--Device-connection-function findProxyForUrl(url: string): string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | string | Yes | the url. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the proxy infomation. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let proxyInfo = connection.findProxyForUrl("http://example.com");
console.info(proxyInfo);

```

