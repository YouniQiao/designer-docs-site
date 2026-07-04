# setPacFileUrl

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## setPacFileUrl

```TypeScript
function setPacFileUrl(pacFileUrl: string): void
```

Set the URL {@link pacFileUrl} of the current PAC script. Proxy information can be obtained through parsing the script address. To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.

**Since:** 20

**Required permissions:** ohos.permission.SET_PAC_URL

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pacFileUrl | string | Yes | Indicates the URL of the current PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacFileUrl = "http://example.com/proxy.pac";
connection.setPacFileUrl(pacFileUrl);

```

