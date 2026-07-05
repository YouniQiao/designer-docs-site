# refreshGlobalHttpProxy

## refreshGlobalHttpProxy

```TypeScript
function refreshGlobalHttpProxy(): Promise<HttpProxy>
```

Notifies the system that global proxy re-authentication is required. Upon receiving the notification, the system will reproces the global proxy's authentication status.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HttpProxy> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

