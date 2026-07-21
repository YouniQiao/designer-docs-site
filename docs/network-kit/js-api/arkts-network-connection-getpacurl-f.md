# getPacUrl

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getpacurl"></a>
## getPacUrl

```TypeScript
function getPacUrl(): string
```

Obtain the URL {@link pacUrl} of the current PAC script.

**Since:** 15

<!--Device-connection-function getPacUrl(): string--><!--Device-connection-function getPacUrl(): string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the URL of the current PAC script or empty string if there is no PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = connection.getPacUrl();

```

