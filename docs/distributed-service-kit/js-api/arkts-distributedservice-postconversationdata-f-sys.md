# postConversationData (System API)

## Modules to Import

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

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

**Required permissions:** ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | This parameter accepts networkId or udid of the target device. This IDcan be obtained by calling [getTrustedDevices()](arkts-distributedservice-gettrusteddevices-f-sys.md#gettrusteddevices-1). |
| bundleName | string | Yes | Name of the bundle to which the message will be delivered. This must matchthe bundle name of an application installed on the target device that has registered a conversation listener. |
| abilityName | string | Yes | Name of the ability within the bundle that will receive the message. This mustmatch an ability that has registered a conversation listener with the corresponding bundle name. |
| msg | ArrayBuffer | Yes | Message content to be sent. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The application does not have the required permission toaccess distributed data. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameter. The deviceId, bundleName, abilityName or msg is invalidor empty. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2000001](../../apis-distributedservice-kit/errorcode-conversation.md#2000001-internal-error) | Internal error. |
| [2004001](../../apis-distributedservice-kit/errorcode-conversation.md#2004001-unsupported-peer-version) | Remote not support. |
| [2004002](../../apis-distributedservice-kit/errorcode-conversation.md#2004002-duplicate-calls) | Duplicate calls, previous call still in progress. |
| [2004003](../../apis-distributedservice-kit/errorcode-conversation.md#2004003-failure-to-send-data) | Send data failed. |
| [2004004](../../apis-distributedservice-kit/errorcode-conversation.md#2004004-request-timeout) | Wait remote ack timeout. |

