# getAppNetSync

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getAppNetSync

```TypeScript
function getAppNetSync(): NetHandle
```

Obtains the {@link NetHandle} bound to a process using {@link setAppNet}.

**Since:** 10

<!--Device-connection-function getAppNetSync(): NetHandle--><!--Device-connection-function getAppNetSync(): NetHandle-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [NetHandle](arkts-network-connection-nethandle-i.md) | Returns the {@link NetHandle} bound to a process using {@link setAppNet}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let netHandle = connection.getAppNetSync();

```

