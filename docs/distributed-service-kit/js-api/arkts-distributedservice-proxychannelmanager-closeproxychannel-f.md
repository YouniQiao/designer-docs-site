# closeProxyChannel

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
```

<a id="closeproxychannel"></a>
## closeProxyChannel

```TypeScript
function closeProxyChannel(channelId: number): void
```

Closes a proxy channel that has been opened.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

<!--Device-proxyChannelManager-function closeProxyChannel(channelId: int): void--><!--Device-proxyChannelManager-function closeProxyChannel(channelId: int): void-End-->

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because bluetooth proxy function has been trimmed.<br>**Applicable version:** 26.0.0 and later |
| [32390004](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390004-invalid-or-unavailable-channel-id) | ChannelId is invalid or unavailable. |
| [32390006](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390006-parameter-verification-error) | Parameter error. |
| [32390100](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390100-internal-error) | Internal error. |
| [32390101](../../apis-distributedservice-kit/errorcode-proxyChannelManager.md#32390101-call-restricted) | Call is restricted. |

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
          // The following sample code uses try/catch as an example.
          try {
            proxyChannelManager.closeProxyChannel(1); // Assume that the channel ID is 1.
          } catch (err) {
            let error = err as BusinessError;
            console.error(`getErr: ${error.code} ${error.message}`);
            // If code:undefined message:"Cannot read property closeProxyChannel of undefined" is displayed, this API is not supported in the current image.
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

