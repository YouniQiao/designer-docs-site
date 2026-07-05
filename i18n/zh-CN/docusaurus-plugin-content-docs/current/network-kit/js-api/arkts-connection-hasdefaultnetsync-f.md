# hasDefaultNetSync

## hasDefaultNetSync

```TypeScript
function hasDefaultNetSync(): boolean
```

Checks whether the default data network is activated.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the default data network is activated, else returns false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let hasDefaultNet = connection.hasDefaultNetSync();

```

