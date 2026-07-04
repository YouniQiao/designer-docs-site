# openProxyChannel

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@ohos.distributedsched.proxyChannelManager';
```

## openProxyChannel

```TypeScript
function openProxyChannel(channelInfo: ChannelInfo): Promise<number>
```

Opens a proxy channel. This API uses a promise to return the result.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelInfo | ChannelInfo | Yes | Channel information, including the MAC address and service UUID of the peerdevice. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Proxy channel ID. The value range is [1, 2147483647]. The lifecycle of **channelId** isthe same as that of the proxy channel. If the proxy is not closed, the returned **channelId** is the same asthat passed in the API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because bluetooth proxy function hasbeen trimmed.<br>**Applicable version:** 26.0.0 |
| [32390001](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390001-bluetooth-disabled) | BR is disabled. |
| [32390002](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390002-bluetooth-unpaired) | Device not paired. |
| [32390006](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390006-parameter-verification-error) | Parameter error. |
| [32390100](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390100-internal-error) | Internal error. |
| [32390101](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390101-call-restricted) | Call is restricted. |
| [32390102](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390102-operation-failed-or-connection-timed-out) | Operation failed or Connection timed out. |

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
          let channelInfo: proxyChannelManager.ChannelInfo = {
            linkType: proxyChannelManager.LinkType.LINK_BR,
            peerDevAddr: "xx:xx:xx:xx:xx:xx", // Bluetooth MAC address of the wearable
            peerUuid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Service UUID of the peer device
          };
          // The following sample code uses try/catch as an example.
          try {
            proxyChannelManager.openProxyChannel(channelInfo)
              .then((channelId: number) => {
                // Obtain the channel ID.
              })
              .catch((error: BusinessError) => {
                console.error(`getErr: ${error.code} ${error.message}`);
              });
          } catch (err) {
            let error = err as BusinessError;
            console.error(`getErr: ${error.code} ${error.message}`);
            // If code:undefined message:"Cannot read property openProxyChannel of undefined" is displayed, this API is not supported in the current image.
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

