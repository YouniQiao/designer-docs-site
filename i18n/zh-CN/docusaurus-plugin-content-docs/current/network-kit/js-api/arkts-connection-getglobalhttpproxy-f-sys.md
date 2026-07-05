# getGlobalHttpProxy

## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(callback: AsyncCallback<HttpProxy>): void
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;HttpProxy> | 是 | Returns the proxy settings. For details, see {@link HttpProxy}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 202 | Non-system applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getGlobalHttpProxy((error: BusinessError, data: connection.HttpProxy) => {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```

## getGlobalHttpProxy

```TypeScript
function getGlobalHttpProxy(): Promise<HttpProxy>
```

Obtains the network independent global {@link HttpProxy} proxy settings.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HttpProxy> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getGlobalHttpProxy().then((data: connection.HttpProxy) => {
  console.info(JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

