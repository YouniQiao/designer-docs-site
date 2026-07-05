# off

## off('sessionCreate')

```TypeScript
function off(type: 'sessionCreate', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister session create callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionCreate' | 是 | Registration Type, session creation, 'sessionCreate' |
| callback | (session: AVSessionDescriptor) => void | 否 | Used to unregister listener for ('sessionCreate') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

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

## off('sessionDestroy')

```TypeScript
function off(type: 'sessionDestroy', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister session destroy callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionDestroy' | 是 | Registration Type, session deletion, 'sessionDestroy' |
| callback | (session: AVSessionDescriptor) => void | 否 | Used to unregister listener for ('sessionDestroy') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

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

## off('topSessionChange')

```TypeScript
function off(type: 'topSessionChange', callback?: (session: AVSessionDescriptor) => void): void
```

Unregister top session changed callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'topSessionChange' | 是 | Registration Type, top priority session change, 'topSessionChange' |
| callback | (session: AVSessionDescriptor) => void | 否 | Used to unregister listener for ('topSessionChange') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

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

## off('sessionServiceDie')

```TypeScript
function off(type: 'sessionServiceDie', callback?: () => void): void
```

Unregister Session service death callback, notifying the application to clean up resources.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionServiceDie' | 是 | Registration Type, 'sessionServiceDie' |
| callback | () => void | 否 | Used to unregister listener for ('sessionServiceDie') command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.off('sessionServiceDie');

```

## off('distributedSessionChange')

```TypeScript
function off(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback?: Callback<Array<AVSessionController>>): void
```

Unregister distributed session changed callback

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'distributedSessionChange' | 是 | Registration Type, distributed session change |
| distributedSessionType | DistributedSessionType | 是 | Indicates the distributed session type |
| callback | Callback&lt;Array&lt;AVSessionController>> | 否 | The callback will return remote changed  AVSessionController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.off('distributedSessionChange', avSession.DistributedSessionType.TYPE_SESSION_REMOTE);

```

## off('deviceAvailable')

```TypeScript
function off(type: 'deviceAvailable', callback?: (device: OutputDeviceInfo) => void): void
```

Unregister device discovery callback

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceAvailable' | 是 | Registration Type |
| callback | (device: OutputDeviceInfo) => void | 否 | Used to returns the device info |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

**示例：**

```TypeScript
avSession.off('deviceAvailable');

```

## off('deviceOffline')

```TypeScript
function off(type: 'deviceOffline', callback?: (deviceId: string) => void): void
```

Unregister device offline callback

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceOffline' | 是 | Registration Type |
| callback | (deviceId: string) => void | 否 | Used to returns the device info |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

**示例：**

```TypeScript
avSession.off('deviceOffline');

```

## off('deviceLogEvent')

```TypeScript
function off(type: 'deviceLogEvent', callback?: Callback<DeviceLogEventCode>): void
```

UnRegister log event callback.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceLogEvent' | 是 | Command to register 'deviceLogEvent'. |
| callback | Callback&lt;DeviceLogEventCode> | 否 | Used to handle ('deviceLogEvent') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**示例：**

```TypeScript
avSession.off('deviceLogEvent');

```

## off('deviceStateChanged')

```TypeScript
function off(type: 'deviceStateChanged', callback?: Callback<DeviceState>): void
```

Unregisters a system callback for the device connection phase.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceStateChanged' | 是 | Event type. |
| callback | Callback&lt;DeviceState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |

**示例：**

```TypeScript
avSession.off('deviceStateChanged');

```

