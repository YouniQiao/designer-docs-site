# closeProxyChannel

## closeProxyChannel

```TypeScript
function closeProxyChannel(channelId: int): void
```

关闭已打开的代理通道。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelId | int | Yes | 打开代理通道时获取的channelId。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because bluetooth proxy function has  been trimmed. [since 26.0.0] |
| 32390004 | ChannelId is invalid or unavailable. |
| 32390006 | Parameter error. |
| 32390100 | Internal error. |
| 32390101 | Call is restricted. |

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

