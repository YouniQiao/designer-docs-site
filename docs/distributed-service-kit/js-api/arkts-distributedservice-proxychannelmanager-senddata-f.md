# sendData

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
```

<a id="senddata"></a>
## sendData

```TypeScript
function sendData(channelId: number, data: ArrayBuffer): Promise<void>
```

Sends data to the peer end. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-proxyChannelManager-function sendData(channelId: int, data: ArrayBuffer): Promise<void>--><!--Device-proxyChannelManager-function sendData(channelId: int, data: ArrayBuffer): Promise<void>-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |
| data | ArrayBuffer | Yes | Byte message sent to the peer end. The maximum length is 4096 bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because bluetooth proxy function has been trimmed.<br>**Applicable version:** 26.0.0 and later |
| [32390004](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390004-invalid-or-unavailable-channel-id) | ChannelId is invalid or unavailable. |
| [32390006](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390006-parameter-verification-error) | Parameter error. |
| [32390100](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390100-internal-error) | Internal error. |
| [32390101](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390101-call-restricted) | Call is restricted. |
| [32390103](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390103-data-too-long) | Data too long. |
| [32390104](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390104-data-sending-failed) | Send failed. |

**Example**

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Button ('Test')
        .onClick(() => {
          const data = new ArrayBuffer(10); // Create an ArrayBuffer with a length of 10.
          try {
            proxyChannelManager.sendData(1, data) // Assume that the channel ID is 1.
              .then(() => {
              })
              .catch((error: BusinessError) => {
                console.error(`getErr: ${error.code} ${error.message}`);
              });
          } catch (err) {
            let error = err as BusinessError;
            console.error(`getErr: ${error.code} ${error.message}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

