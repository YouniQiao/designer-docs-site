# postConversationData (System API)

## postConversationData

```TypeScript
function postConversationData(
    deviceId: string,
    bundleName: string,
    abilityName: string,
    msg: ArrayBuffer
): Promise<void>
```

Sends session data to the target device. The target device must be a trusted device under the same account. The network ID or UDID of the target device is used for device addressing. Data is sent to the app with the registered listener on the target device based on the specified bundle name and ability name. Typical use scenarios include sending collaboration commands across devices.

**Since:** 26.1.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.1.0.

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the stage model.

<!--Device-conversation-function postConversationData(    deviceId: string,    bundleName: string,    abilityName: string,    msg: ArrayBuffer): Promise<void>--><!--Device-conversation-function postConversationData(    deviceId: string,    bundleName: string,    abilityName: string,    msg: ArrayBuffer): Promise<void>-End-->

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Network ID or UDID of the target device, which can be obtained by calling [getTrustedDevices()]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. The length of both the network ID and UDID must be 64 bytes. If an invalid value is passed, error code 401 is returned. |
| bundleName | string | Yes | Name of the target bundle to which data is sent. The value contains 1 to 127 bytes and must be the same as the bundle name of the app registered with a listener on the target device by calling [registerConversationListener]\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. If this requirement is not met, data cannot be sent to the target app. If an invalid or empty value is passed, error code 401 is returned. |
| abilityName | string | Yes | Name of the target ability to which data is sent. The value contains 1 to 127 bytes and must be the same as the ability name of the app registered with a session listener on the target device. If this requirement is not met, data cannot be sent to the target app. If an invalid or empty value is passed, error code 401 is returned. |
| msg | ArrayBuffer | Yes | Message to be sent. A maximum of 10,240 bytes can be sent at a time. The data structure is defined by the application layer protocol. If empty or invalid data is passed, error code 401 is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The application does not have the required permission to access distributed data. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. The deviceId, bundleName, abilityName or msg is invalid or empty. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2000001](../../apis-distributedservice-kit/errorcode-conversation.md#2000001-internal-error) | Internal error. |
| [2004001](../../apis-distributedservice-kit/errorcode-conversation.md#2004001-unsupported-peer-version) | Remote not support. |
| [2004002](../../apis-distributedservice-kit/errorcode-conversation.md#2004002-duplicate-calls) | Duplicate calls, previous call still in progress. |
| [2004003](../../apis-distributedservice-kit/errorcode-conversation.md#2004003-failure-to-send-data) | Send data failed. |
| [2004004](../../apis-distributedservice-kit/errorcode-conversation.md#2004004-request-timeout) | Wait remote ack timeout. |

