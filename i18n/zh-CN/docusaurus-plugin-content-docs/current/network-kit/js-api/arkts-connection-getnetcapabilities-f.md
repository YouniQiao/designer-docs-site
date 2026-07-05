# getNetCapabilities

## getNetCapabilities

```TypeScript
function getNetCapabilities(netHandle: NetHandle, callback: AsyncCallback<NetCapabilities>): void
```

Obtains {@link NetCapabilities} of a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netHandle | NetHandle | 是 | Indicates the handle. See {@link NetHandle}. |
| callback | AsyncCallback&lt;NetCapabilities> | 是 | the callback of getNetCapabilities.{@link NetCapabilities}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  if (netHandle.netId == 0) {
    // 当前没有已连接的网络时，netHandle的netId为0，属于异常场景。可根据实际情况添加处理机制。
    return;
  }
  connection.getNetCapabilities(netHandle, (error: BusinessError, data: connection.NetCapabilities) => {
    if (error) {
      console.error(`Failed to get net capabilities. Code:${error.code}, message:${error.message}`);
      return;
    }
    console.info("Succeeded to get data: " + JSON.stringify(data));
  })
}).catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
});

```

## getNetCapabilities

```TypeScript
function getNetCapabilities(netHandle: NetHandle): Promise<NetCapabilities>
```

Obtains {@link NetCapabilities} of a {@link NetHandle} object. To invoke this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netHandle | NetHandle | 是 | Indicates the handle. See {@link NetHandle}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetCapabilities> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  if (netHandle.netId == 0) {
    // 当前没有已连接的网络时，netHandle的netId为0，属于异常场景。可根据实际情况添加处理机制。
    return;
  }
  connection.getNetCapabilities(netHandle).then((data: connection.NetCapabilities) => {
      console.info("Succeeded to get data: " + JSON.stringify(data));
  })
}).catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
});

```

