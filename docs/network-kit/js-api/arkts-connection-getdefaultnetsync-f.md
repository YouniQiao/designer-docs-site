# getDefaultNetSync

## getDefaultNetSync

```TypeScript
function getDefaultNetSync(): NetHandle
```

Obtains the data network that is activated by default. To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| NetHandle | if the default network is not activated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getDefaultNetSync();

```

