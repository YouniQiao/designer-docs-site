# getPacUrl

## getPacUrl

```TypeScript
function getPacUrl(): string
```

Obtain the URL {@link pacUrl} of the current PAC script.

**Since:** 15

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the URL of the current PAC script or empty string if there is no PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = connection.getPacUrl();

```

