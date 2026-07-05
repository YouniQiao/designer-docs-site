# getUidTxBytes

## getUidTxBytes

```TypeScript
function getUidTxBytes(uid: int, callback: AsyncCallback<long>): void
```

Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | Indicates the process ID of the application. |
| callback | AsyncCallback&lt;long> | 是 | Returns the data traffic sent by the specified application. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // uid示例，请传入正确的uid
statistics.getUidTxBytes(uid, (error: BusinessError, stats: number) => {
  if (error) {
    console.error(JSON.stringify(error));
    return;
  }
  console.info(JSON.stringify(stats));
});

```

## getUidTxBytes

```TypeScript
function getUidTxBytes(uid: int): Promise<long>
```

Queries the data traffic (including all TCP and UDP data packets) sent by a specified application.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | Indicates the process ID of the application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |
| 2103005 | Failed to read the system map. |
| 2103011 | Failed to create a system map. |

**示例：**

```TypeScript
import { statistics } from '@kit.NetworkKit';

let uid = 123456789;  // uid示例，请传入正确的uid
statistics.getUidTxBytes(uid).then((stats: number) => {
  console.info(JSON.stringify(stats));
});

```

