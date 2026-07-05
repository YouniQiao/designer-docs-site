# getAllNetsSync

## getAllNetsSync

```TypeScript
function getAllNetsSync(): Array<NetHandle>
```

Obtains the list of data networks that are activated. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;NetHandle> | Returns data networks that are activated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAllNetsSync();

```

