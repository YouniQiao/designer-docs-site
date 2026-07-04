# isDefaultNetMeteredSync

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## isDefaultNetMeteredSync

```TypeScript
function isDefaultNetMeteredSync(): boolean
```

Checks whether data traffic usage on the current network is metered.

**Since:** 10

**Required permissions:** ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the current network is metered, else returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let isMetered = connection.isDefaultNetMeteredSync();

```

