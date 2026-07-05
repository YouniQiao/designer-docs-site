# postConversationData

## postConversationData

```TypeScript
function postConversationData(
    deviceId: string,
    bundleName: string,
    abilityName: string,
    msg: ArrayBuffer
): Promise<void>
```

Posts conversation data to a specified device. This API sends a message to the target device identified by its networkId or udid. The message will be delivered to the specified bundle and ability on the remote device.

**Since:** 26.1.0

**Required permissions:** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | This parameter accepts networkId or udid of the target device. This ID  can be obtained by calling [getTrustedDevices()]conversation.getTrustedDevices. |
| bundleName | string | Yes | Name of the bundle to which the message will be delivered. This must match  the bundle name of an application installed on the target device that has registered a conversation listener. |
| abilityName | string | Yes | Name of the ability within the bundle that will receive the message. This must  match an ability that has registered a conversation listener with the corresponding bundle name. |
| msg | ArrayBuffer | Yes | Message content to be sent. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Invalid parameter. The deviceId, bundleName, abilityName or msg is invalid  or empty. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |
| 2004001 | Remote not support. |
| 2004002 | Duplicate calls, previous call still in progress. |
| 2004003 | Send data failed. |
| 2004004 | Wait remote ack timeout. |

