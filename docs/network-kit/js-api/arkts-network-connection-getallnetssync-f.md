# getAllNetsSync

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getAllNetsSync

```TypeScript
function getAllNetsSync(): Array<NetHandle>
```

Obtains the list of data networks that are activated.To call this method, you must have the {@code ohos.permission.GET_NETWORK_INFO} permission.

**Since:** 10

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-connection-function getAllNetsSync(): Array<NetHandle>--><!--Device-connection-function getAllNetsSync(): Array<NetHandle>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<NetHandle> | Returns data networks that are activated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAllNetsSync();

```

