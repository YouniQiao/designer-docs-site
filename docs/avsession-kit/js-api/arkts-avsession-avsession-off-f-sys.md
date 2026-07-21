# off (System API)

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

<a id="off"></a>
## off('sessionCreate')

```TypeScript
function off(type: 'sessionCreate', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister session create callback

**Since:** 9

<!--Device-avSession-function off(type: 'sessionCreate', callback?: (session: AVSessionDescriptor) => void): void--><!--Device-avSession-function off(type: 'sessionCreate', callback?: (session: AVSessionDescriptor) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionCreate' | Yes | Registration Type, session creation, 'sessionCreate' |
| callback | (session: AVSessionDescriptor) =&gt; void | No | Used to unregister listener for ('sessionCreate') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
        Text(this.message)
          .onClick(()=>{
            avSession.on('sessionCreate', (descriptor: avSession.AVSessionDescriptor) => {
            });
            avSession.off('sessionCreate');
          })
      }
    .width('100%')
    .height('100%')
  }
}

```


<a id="off-1"></a>
## off('sessionDestroy')

```TypeScript
function off(type: 'sessionDestroy', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister session destroy callback

**Since:** 9

<!--Device-avSession-function off(type: 'sessionDestroy', callback?: (session: AVSessionDescriptor) => void): void--><!--Device-avSession-function off(type: 'sessionDestroy', callback?: (session: AVSessionDescriptor) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionDestroy' | Yes | Registration Type, session deletion, 'sessionDestroy' |
| callback | (session: AVSessionDescriptor) =&gt; void | No | Used to unregister listener for ('sessionDestroy') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
        Text(this.message)
          .onClick(()=>{
            avSession.on('sessionDestroy', (descriptor: avSession.AVSessionDescriptor) => {
            });
            avSession.off('sessionDestroy');
          })
      }
    .width('100%')
    .height('100%')
  }
}

```


<a id="off-2"></a>
## off('topSessionChange')

```TypeScript
function off(type: 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister top session changed callback

**Since:** 9

<!--Device-avSession-function off(type: 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void--><!--Device-avSession-function off(type: 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'topSessionChange' | Yes | Registration Type, top priority session change, 'topSessionChange' |
| callback | (session: AVSessionDescriptor) =&gt; void | No | Used to unregister listener for ('topSessionChange') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
import { avSession } from '@kit.AVSessionKit';

@Entry
@Component
struct Index {
  @State message: string = 'hello world';

  build() {
    Column() {
        Text(this.message)
          .onClick(()=>{
            avSession.on('topSessionChange', (descriptor: avSession.AVSessionDescriptor) => {
            });
            avSession.off('topSessionChange');
          })
      }
    .width('100%')
    .height('100%')
  }
}

```


<a id="off-3"></a>
## off('sessionServiceDie')

```TypeScript
function off(type: 'sessionServiceDie', callback?: () => void): void
```

Unregister Session service death callback, notifying the application to clean up resources.

**Since:** 9

<!--Device-avSession-function off(type: 'sessionServiceDie', callback?: () => void): void--><!--Device-avSession-function off(type: 'sessionServiceDie', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionServiceDie' | Yes | Registration Type, 'sessionServiceDie' |
| callback | () =&gt; void | No | Used to unregister listener for ('sessionServiceDie') command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
avSession.off('sessionServiceDie');

```


<a id="off-4"></a>
## off('distributedSessionChange')

```TypeScript
function off(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void
```

Unregister distributed session changed callback

**Since:** 18

<!--Device-avSession-function off(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void--><!--Device-avSession-function off(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'distributedSessionChange' | Yes | Registration Type, distributed session change |
| distributedSessionType | [DistributedSessionType](arkts-avsession-avsession-distributedsessiontype-e-sys.md) | Yes | Indicates the distributed session type |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;Array&lt;AVSessionController&gt;&gt; | No | The callback will return remote changed AVSessionController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |

**Example**

```TypeScript
avSession.off('distributedSessionChange', avSession.DistributedSessionType.TYPE_SESSION_REMOTE);

```


<a id="off-5"></a>
## off('deviceAvailable')

```TypeScript
function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void
```

Unregister device discovery callback

**Since:** 10

<!--Device-avSession-function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void--><!--Device-avSession-function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceAvailable' | Yes | Registration Type |
| callback | (device: OutputDeviceInfo) =&gt; void | No | Used to returns the device info |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

**Example**

```TypeScript
avSession.off('deviceAvailable');

```


<a id="off-6"></a>
## off('deviceOffline')

```TypeScript
function off(type: 'deviceOffline', callback?: (deviceId: string) => void): void
```

Unregister device offline callback

**Since:** 11

<!--Device-avSession-function off(type: 'deviceOffline', callback?: (deviceId: string) => void): void--><!--Device-avSession-function off(type: 'deviceOffline', callback?: (deviceId: string) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceOffline' | Yes | Registration Type |
| callback | (deviceId: string) =&gt; void | No | Used to returns the device info |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

**Example**

```TypeScript
avSession.off('deviceOffline');

```


<a id="off-7"></a>
## off('deviceLogEvent')

```TypeScript
function off(type: 'deviceLogEvent', callback?: Callback<DeviceLogEventCode>): void
```

UnRegister log event callback.

**Since:** 13

<!--Device-avSession-function off(type: 'deviceLogEvent', callback?: Callback<DeviceLogEventCode>): void--><!--Device-avSession-function off(type: 'deviceLogEvent', callback?: Callback<DeviceLogEventCode>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceLogEvent' | Yes | Command to register 'deviceLogEvent'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DeviceLogEventCode&gt; | No | Used to handle ('deviceLogEvent') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter check failed. 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

**Example**

```TypeScript
avSession.off('deviceLogEvent');

```


<a id="off-8"></a>
## off('deviceStateChanged')

```TypeScript
function off(type: 'deviceStateChanged', callback?: Callback<DeviceState>): void
```

Unregisters a system callback for the device connection phase.

**Since:** 20

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

<!--Device-avSession-function off(type: 'deviceStateChanged', callback?: Callback<DeviceState>): void--><!--Device-avSession-function off(type: 'deviceStateChanged', callback?: Callback<DeviceState>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'deviceStateChanged' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DeviceState&gt; | No | Callback used to return the device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |

**Example**

```TypeScript
avSession.off('deviceStateChanged');

```

