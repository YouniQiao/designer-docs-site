# getDefaultHttpProxy

## getDefaultHttpProxy

```TypeScript
function getDefaultHttpProxy(callback: AsyncCallback<HttpProxy>): void
```

Obtains the default {@link HttpProxy} proxy settings. If an application level proxy is set, the application level proxy parameters are returned. If a global proxy is set, the global proxy parameters are returned. If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned. In other cases, the proxy settings of default network are returned.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;HttpProxy> | 是 | Returns the default {@link HttpProxy} settings. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultHttpProxy((error: BusinessError, data: connection.HttpProxy) => {
  if (error) {
    console.error(`Failed to get default http proxy. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data" + JSON.stringify(data));
});

```

## getDefaultHttpProxy

```TypeScript
function getDefaultHttpProxy(): Promise<HttpProxy>
```

Obtains the default {@link HttpProxy} proxy settings. If an application level proxy is set, the application level proxy parameters are returned. If a global proxy is set, the global proxy parameters are returned. If the process is bound to a {@link NetHandle} using {@link setAppNet}, the {@link NetHandle} proxy settings are returned. In other cases, the proxy settings of default network are returned.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HttpProxy> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultHttpProxy().then((data: connection.HttpProxy) => {
  console.info(JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.info(JSON.stringify(error));
});

```

