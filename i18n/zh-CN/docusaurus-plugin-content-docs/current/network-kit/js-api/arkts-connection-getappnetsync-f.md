# getAppNetSync

## getAppNetSync

```TypeScript
function getAppNetSync(): NetHandle
```

Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NetHandle | Returns the {@link NetHandle} bound to a process using {@link setAppNet}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAppNetSync();

```

