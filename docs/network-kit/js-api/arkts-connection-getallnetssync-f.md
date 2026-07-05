# getAllNetsSync

## getAllNetsSync

```TypeScript
function getAllNetsSync(): Array<NetHandle>
```

Obtains the list of data networks that are activated. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NetHandle> | Returns data networks that are activated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAllNetsSync();

```

