# setPacUrl

## setPacUrl

```TypeScript
function setPacUrl(pacUrl: string): void
```

Set the URL {@link pacUrl} of the current PAC script. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.

**Since:** 15

**Required permissions:** 

 ohos.permission.SET_PAC_URL

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pacUrl | string | Yes | Indicates the URL of the current PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = "xxx";
connection.setPacUrl(pacUrl);

```

