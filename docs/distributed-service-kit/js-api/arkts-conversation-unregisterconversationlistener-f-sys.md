# unregisterConversationListener

## unregisterConversationListener

```TypeScript
function unregisterConversationListener(bundleName: string, abilityName: string): void
```

Unregisters the conversation listener for the specified bundle and ability. After calling this API, the application will no longer receive messages. If no listener was previously registered for the given bundle and ability, this API returns success without any effect.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Name of the bundle whose listener will be unregistered. |
| abilityName | string | Yes | Name of the ability within the bundle whose listener will be unregistered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The bundleName or abilityName is invalid or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

