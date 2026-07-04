# refreshGlobalHttpProxy

## Modules to Import

```TypeScript
import { connection } from '@ohos.net.connection';
```

## refreshGlobalHttpProxy

```TypeScript
function refreshGlobalHttpProxy(): Promise<HttpProxy>
```

Notifies the system that global proxy re-authentication is required. Upon receiving the notification, the system will reproces the global proxy's authentication status.

**Since:** 26.0.0

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpProxy&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

