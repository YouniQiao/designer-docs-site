# on

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@ohos.distributedsched.proxyChannelManager';
```

## on('receiveData')

```TypeScript
function on(type: 'receiveData', channelId: number, callback: Callback<DataInfo>): void
```

Subscribes to data receiving events. This API returns the result asynchronously through a callback.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveData' | Yes | Event type. The value **receiveData** indicates the data receiving event. |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |
| callback | Callback&lt;DataInfo&gt; | Yes | Callback used to return the received data. If the callback function isregistered multiple times, only the last registered one takes effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
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

Subscribes to channel state change events. This API returns the result asynchronously through a callback.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'channelStateChange' | Yes | Event type. The value **channelStateChange** indicates the channel statechange event. |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |
| callback | Callback&lt;ChannelStateInfo&gt; | Yes | Callback used to return the received channel state. If thecallback function is registered multiple times, only the last registered one takes effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
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

