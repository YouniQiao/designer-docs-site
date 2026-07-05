# on

## on('receiveData')

```TypeScript
function on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>): void
```

订阅数据接收事件，使用异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveData' | Yes | 设置订阅类型，固定取值为'receiveData'。 |
| channelId | number | Yes | 打开代理通道时获取的channelId。 |
| callback | Callback&lt;DataInfo> | Yes | 回调函数，返回接收到的数据。多次注册回调函数，最后一次注册的回调函数生效。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
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
          const receiveDataCallback = (dataInfo: proxyChannelManager.DataInfo) => {
          };
          try {
            proxyChannelManager.on('receiveData', 1, receiveDataCallback); // Assume that the channel ID is 1.
          } catch (err) {
            let error = err as BusinessError;
            console.error(`register receiveData error: ${error.code} ${error.message}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## on('channelStateChange')

```TypeScript
function on(type: 'channelStateChange', channelId: number, callback: Callback<ChannelStateInfo>): void
```

订阅通道状态事件，使用callback进行异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'channelStateChange' | Yes | 设置订阅类型，固定取值为'channelStateChange'。 |
| channelId | number | Yes | 打开代理通道时获取的channelId。 |
| callback | Callback&lt;ChannelStateInfo> | Yes | 回调函数，返回接收到的通道状态。多次注册callback，  最后一次注册的callback生效 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
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
          const receiveStatusCallback = (channelStateInfo: proxyChannelManager.ChannelStateInfo) => {
          };
          try {
            proxyChannelManager.on ('channelStateChange', 1, receiveStatusCallback); // Assume that the channel ID is 1.
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

