# registerConversationListener (System API)

## registerConversationListener

```TypeScript
function registerConversationListener(
    bundleName: string,
    abilityName: string,
    dataCallback: DataCallback,
  ): void
```

Registers a listener to receive data from trusted devices under the same account. When the remote device sends data to the local device by calling [postConversationData]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_, the data is distributed to the registered callback based on the specified bundle name and ability name. Only one listener can be registered for the same bundle name and ability name. Duplicate registration will overwrite the previously registered listener.

**API called in pairs:** This API must be used in pairs with  
[unregisterConversationListener]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_, which is called to unregister the listener to release resources.

**Since:** 26.1.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.1.0.

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the stage model.

<!--Device-conversation-function registerConversationListener(    bundleName: string,    abilityName: string,    dataCallback: DataCallback,  ): void--><!--Device-conversation-function registerConversationListener(    bundleName: string,    abilityName: string,    dataCallback: DataCallback,  ): void-End-->

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Name of the bundle that receives data. The value contains 1 to 127 bytes and must be the same as the bundle name of the app. If this requirement is not met, the listener cannot receive data correctly. If an invalid or empty value is passed, error code 401 is returned. |
| abilityName | string | Yes | Name of the ability that receives data. The value contains 1 to 127 bytes and must be the same as the ability name of the app. If this requirement is not met, the listener cannot receive data correctly. If an invalid or empty value is passed, error code 401 is returned. |
| dataCallback | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Callback function used to receive data transferred across devices. If an invalid value is passed, error code 401 is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The application does not have the required permission to access distributed data. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. The bundleName, abilityName or dataCallback is invalid or empty. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2000001](../../apis-distributedservice-kit/errorcode-conversation.md#2000001-internal-error) | Internal error. |

