# isDefaultNetMeteredSync

## isDefaultNetMeteredSync

```TypeScript
function isDefaultNetMeteredSync(): boolean
```

Checks whether data traffic usage on the current network is metered.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the current network is metered, else returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let isMetered = connection.isDefaultNetMeteredSync();

```

