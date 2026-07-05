# reportNetConnected

## reportNetConnected

```TypeScript
function reportNetConnected(netHandle: NetHandle, callback: AsyncCallback<void>): void
```

Reports the network state is connected.

**起始版本：** 8

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netHandle | NetHandle | 是 | Indicates the network whose state is to be reported. |
| callback | AsyncCallback&lt;void> | 是 | the callback of reportNetConnected. |

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
  connection.reportNetConnected(netHandle, (error: BusinessError) => {
    console.error(JSON.stringify(error));
  });
});

```

## reportNetConnected

```TypeScript
function reportNetConnected(netHandle: NetHandle): Promise<void>
```

Reports the network state is connected.

**起始版本：** 8

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO and ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netHandle | NetHandle | 是 | Indicates the network whose state is to be reported. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

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

connection.getDefaultNet().then((netHandle: connection.NetHandle) => {
  connection.reportNetConnected(netHandle).then(() => {
    console.info(`report success`);
  });
});

```

