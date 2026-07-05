# isDefaultNetMetered

## isDefaultNetMetered

```TypeScript
function isDefaultNetMetered(callback: AsyncCallback<boolean>): void
```

Checks whether data traffic usage on the current network is metered.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Returns {@code true} if data traffic usage on the current network is metered;  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.isDefaultNetMetered((error: BusinessError, data: boolean) => {
  console.error(JSON.stringify(error));
  console.info('data: ' + data);
});

```

## isDefaultNetMetered

```TypeScript
function isDefaultNetMetered(): Promise<boolean>
```

Checks whether data traffic usage on the current network is metered.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

connection.isDefaultNetMetered().then((data: boolean) => {
  console.info('data: ' + data);
});

```

