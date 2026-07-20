# setPacUrl

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## setPacUrl

```TypeScript
function setPacUrl(pacUrl: string): void
```

Set the URL {@link pacUrl} of the current PAC script.To invoke this method, you must have the {@code ohos.permission.SET_PAC_URL} permission.

**Since:** 15

**Required permissions:** ohos.permission.SET_PAC_URL

<!--Device-connection-function setPacUrl(pacUrl: string): void--><!--Device-connection-function setPacUrl(pacUrl: string): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pacUrl | string | Yes | Indicates the URL of the current PAC script. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let pacUrl = "xxx";
connection.setPacUrl(pacUrl);

```

