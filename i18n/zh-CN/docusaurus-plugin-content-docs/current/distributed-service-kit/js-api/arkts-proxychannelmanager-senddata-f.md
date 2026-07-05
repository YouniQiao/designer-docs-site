# sendData

## sendData

```TypeScript
function sendData(channelId: int, data: ArrayBuffer): Promise<void>
```

向对端发送数据，使用Promise异步回调。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| channelId | int | 是 | 打开代理通道时获取的channelId。 |
| data | ArrayBuffer | 是 | 向对端发送的字节消息，长度最大为4096个字节。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | 无返回值的Promise的对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because bluetooth proxy function has  been trimmed. [since 26.0.0] |
| 32390004 | ChannelId is invalid or unavailable. |
| 32390006 | Parameter error. |
| 32390100 | Internal error. |
| 32390101 | Call is restricted. |
| 32390103 | Data too long. |
| 32390104 | Send failed. |

**示例：**

```TypeScript
import { proxyChannelManager } from '@kit.DistributedServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Button('测试')
        .onClick(() => {
          const data = new ArrayBuffer(10); // 创建一个长度为 10 的 ArrayBuffer
          try {
            proxyChannelManager.sendData(channelId, data) // channelId通过openProxyChannel接口的Promise返回值获取
              .then(() => {
              })
              .catch((error: BusinessError) => {
                console.error(`Failed to send data. Code: ${error.code}, message: ${error.message}`);
              });
          } catch (err) {
            let error = err as BusinessError;
            console.error(`Failed to send data. Code: ${error.code}, message: ${error.message}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

