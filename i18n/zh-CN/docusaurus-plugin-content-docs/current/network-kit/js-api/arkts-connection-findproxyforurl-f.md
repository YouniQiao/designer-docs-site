# findProxyForUrl

## findProxyForUrl

```TypeScript
function findProxyForUrl(url: string): string
```

Find pac proxy info for the url.

**起始版本：** 20

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | string | 是 | the url. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the proxy infomation. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let proxyInfo = connection.findProxyForUrl("http://example.com");
console.info(proxyInfo);

```

