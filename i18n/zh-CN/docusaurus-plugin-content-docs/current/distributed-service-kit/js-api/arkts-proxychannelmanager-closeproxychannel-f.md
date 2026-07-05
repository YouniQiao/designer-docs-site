# closeProxyChannel

## closeProxyChannel

```TypeScript
function closeProxyChannel(channelId: int): void
```

关闭已打开的代理通道。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedSched.AppCollaboration

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| channelId | int | 是 | 打开代理通道时获取的channelId。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because bluetooth proxy function has  been trimmed. [since 26.0.0] |
| 32390004 | ChannelId is invalid or unavailable. |
| 32390006 | Parameter error. |
| 32390100 | Internal error. |
| 32390101 | Call is restricted. |

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
          // 以下为使用 try/catch 判断
          try {
            proxyChannelManager.closeProxyChannel(channelId); // channelId通过openProxyChannel接口的Promise返回值获取
          } catch (err) {
            let error = err as BusinessError;
            console.error(`Failed to close proxy channel. Code: ${error.code}, message: ${error.message}`);
            // 如果返回的error.code为undefined且error.message为"Cannot read property closeProxyChannel of undefined"，则当前镜像不支持该API
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

