# hasDefaultNetSync

## hasDefaultNetSync

```TypeScript
function hasDefaultNetSync(): boolean
```

Checks whether the default data network is activated.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the default data network is activated, else returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let hasDefaultNet = connection.hasDefaultNetSync();

```

