# openProxyChannel

## openProxyChannel

```TypeScript
function openProxyChannel(channelInfo: ChannelInfo): Promise<int>
```

打开代理通道，使用Promise异步回调返回结果。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelInfo | ChannelInfo | Yes | 对端设备及服务的MAC和UUID信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | 返回代理通道的channelId，取值范围为1~2147483647。channelId的生命周期和代理通道生命周期相同，  不关闭代理时，传入相同入参将返回相同channelId。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because bluetooth proxy function has  been trimmed. [since 26.0.0] |
| 32390001 | BR is disabled. |
| 32390002 | Device not paired. |
| 32390006 | Parameter error. |
| 32390100 | Internal error. |
| 32390101 | Call is restricted. |
| 32390102 | Operation failed or Connection timed out. |

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

