# getPacFileUrl

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## getPacFileUrl

```TypeScript
function getPacFileUrl(): string
```

Obtain the URL {@link pacFileUrl} of the current PAC script.

**Since:** 20

<!--Device-connection-function getPacFileUrl(): string--><!--Device-connection-function getPacFileUrl(): string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the URL of the current PAC script or empty string if there is no PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacFileUrl = connection.getPacFileUrl();
console.info(pacFileUrl);

```

