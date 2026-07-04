# off

## Modules to Import

```TypeScript
import { proxyChannelManager } from '@ohos.distributedsched.proxyChannelManager';
```

## off('receiveData')

```TypeScript
function off(type: 'receiveData', channelId: number, callback?: Callback<DataInfo>): void
```

Unsubscribes from data receiving events.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'receiveData' | Yes | Event type. The value **receiveData** indicates the data receiving event. |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |
| callback | Callback&lt;DataInfo&gt; | No | Registered callback, If the value is empty, **undefined**, or **null**,all callbacks of data receiving events are unregistered. If the value is not empty, the last registeredcallback is used. |

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
          try {
            proxyChannelManager.off('receiveData', 1); // Assume that the channel ID is 1.
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


## off('channelStateChange')

```TypeScript
function off(type: 'channelStateChange', channelId: number, callback?: Callback<ChannelStateInfo>): void
```

Unsubscribes from channel state change events.

**Since:** 20

**Required permissions:** ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'channelStateChange' | Yes | Event type. The value **channelStateChange** indicates the channel statechange event. |
| channelId | number | Yes | Channel ID obtained when the proxy channel is opened. |
| callback | Callback&lt;ChannelStateInfo&gt; | No | Registered callback, If the value is empty, **undefined**, or**null**, all callbacks of data receiving events are unregistered. If the value is not empty, the lastregistered callback is used. |

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
          try {
            proxyChannelManager.off('channelStateChange', 1); // Assume that the channel ID is 1.
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

