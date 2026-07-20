# refreshGlobalHttpProxy

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

## refreshGlobalHttpProxy

```TypeScript
function refreshGlobalHttpProxy(): Promise<HttpProxy>
```

Notifies the system that global proxy re-authentication is required.Upon receiving the notification, the system will reproces the global proxy's authentication status.

**Since:** 26.0.0

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function refreshGlobalHttpProxy(): Promise<HttpProxy>--><!--Device-connection-function refreshGlobalHttpProxy(): Promise<HttpProxy>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<HttpProxy> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

