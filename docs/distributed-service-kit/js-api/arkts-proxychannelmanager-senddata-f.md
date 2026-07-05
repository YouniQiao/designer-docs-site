# sendData

## sendData

```TypeScript
function sendData(channelId: int, data: ArrayBuffer): Promise<void>
```

向对端发送数据，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| channelId | int | Yes | 打开代理通道时获取的channelId。 |
| data | ArrayBuffer | Yes | 向对端发送的字节消息，长度最大为4096个字节。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回值的Promise的对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because bluetooth proxy function has  been trimmed. [since 26.0.0] |
| 32390004 | ChannelId is invalid or unavailable. |
| 32390006 | Parameter error. |
| 32390100 | Internal error. |
| 32390101 | Call is restricted. |
| 32390103 | Data too long. |
| 32390104 | Send failed. |

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

