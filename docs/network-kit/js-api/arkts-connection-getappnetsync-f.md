# getAppNetSync

## getAppNetSync

```TypeScript
function getAppNetSync(): NetHandle
```

Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.

**Since:** 10

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| NetHandle | Returns the {@link NetHandle} bound to a process using {@link setAppNet}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAppNetSync();

```

