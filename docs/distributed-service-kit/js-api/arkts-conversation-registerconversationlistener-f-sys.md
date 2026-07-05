# registerConversationListener

## registerConversationListener

```TypeScript
function registerConversationListener(
    bundleName: string,
    abilityName: string,
    dataCallback: DataCallback,
  ): void
```

Registers a conversation listener to receive messages from any trusted device. Once registered, the specified callback function will be invoked whenever a message is received by the specified bundle and ability combination. Only one listener can be registered for a given bundle/ability pair at a time; registering a new listener will replace any previously registered listener for the same bundle and ability.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Name of the bundle for which messages will be received. This must match the  bundle name of the local application. |
| abilityName | string | Yes | Name of the ability within the bundle that will receive the messages. This must  match an ability name in the local application. |
| dataCallback | DataCallback | Yes | Callback function called when a message is received. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The bundleName, abilityName or dataCallback is  invalid or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

