# isDefaultNetMeteredSync

## isDefaultNetMeteredSync

```TypeScript
function isDefaultNetMeteredSync(): boolean
```

Checks whether data traffic usage on the current network is metered.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the current network is metered, else returns false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let isMetered = connection.isDefaultNetMeteredSync();

```

