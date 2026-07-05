# on

## on('sessionCreate')

```TypeScript
function on(type: 'sessionCreate', callback: (session: AVSessionDescriptor) => void): void
```

Register session create callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionCreate' | 是 | Registration Type, 'sessionCreate' |
| callback | (session: AVSessionDescriptor) => void | 是 | Used to handle ('sessionCreate' command) |

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
              console.info(`on sessionCreate : isActive : ${descriptor.isActive}`);
              console.info(`on sessionCreate : type : ${descriptor.type}`);
              console.info(`on sessionCreate : sessionTag : ${descriptor.sessionTag}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}


```

## on('sessionDestroy')

```TypeScript
function on(type: 'sessionDestroy', callback: (session: AVSessionDescriptor) => void): void
```

Register session destroy callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionDestroy' | 是 | Registration Type, 'sessionDestroy' |
| callback | (session: AVSessionDescriptor) => void | 是 | Used to handle ('sessionDestroy' command) |

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
              console.info(`on sessionDestroy : ${descriptor.sessionId}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

## on('topSessionChange')

```TypeScript
function on(type: 'topSessionChange', callback: (session: AVSessionDescriptor) => void): void
```

Register top session changed callback

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'topSessionChange' | 是 | Registration Type, top priority session change, 'topSessionChange' |
| callback | (session: AVSessionDescriptor) => void | 是 | Used to handle ('topSessionChange' command) |

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
              console.info(`on topSessionChange : isActive : ${descriptor.isActive}`);
              console.info(`on topSessionChange : type : ${descriptor.type}`);
              console.info(`on topSessionChange : sessionTag : ${descriptor.sessionTag}`);
            });
          })
      }
    .width('100%')
    .height('100%')
  }
}

```

## on('sessionServiceDie')

```TypeScript
function on(type: 'sessionServiceDie', callback: () => void): void
```

Register Session service death callback, notifying the application to clean up resources.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'sessionServiceDie' | 是 | Registration Type, 'sessionServiceDie' |
| callback | () => void | 是 | Used to handle ('sessionServiceDie') command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.on('sessionServiceDie', () => {
  console.info('on sessionServiceDie : session is dead ');
});

```

## on('distributedSessionChange')

```TypeScript
function on(type: 'distributedSessionChange', distributedSessionType: DistributedSessionType, callback: Callback<Array<AVSessionController>>): void
```

Register distributed session changed callback

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'distributedSessionChange' | 是 | Registration Type, distributed session change |
| distributedSessionType | DistributedSessionType | 是 | Indicates the distributed session type |
| callback | Callback&lt;Array&lt;AVSessionController>> | 是 | The callback will return remote changed  AVSessionController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 6600101 | Session service exception. |

**示例：**

```TypeScript
avSession.on('distributedSessionChange', avSession.DistributedSessionType.TYPE_SESSION_REMOTE, (sessionControllers: Array<avSession.AVSessionController>) => {
  console.info(`on distributedSessionChange size: ${sessionControllers.length}`);
});

```

## on('deviceAvailable')

```TypeScript
function on(type: 'deviceAvailable', callback: (device: OutputDeviceInfo) => void): void
```

Register device discovery callback

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceAvailable' | 是 | Registration Type |
| callback | (device: OutputDeviceInfo) => void | 是 | Used to returns the device info |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

**示例：**

```TypeScript
let castDevice: avSession.OutputDeviceInfo;
avSession.on('deviceAvailable', (device: avSession.OutputDeviceInfo) => {
  castDevice = device;
  console.info(`on deviceAvailable  : ${device} `);
});

```

## on('deviceOffline')

```TypeScript
function on(type: 'deviceOffline', callback: (deviceId: string) => void): void
```

Register device offline callback

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceOffline' | 是 | Registration Type |
| callback | (deviceId: string) => void | 是 | Used to returns the device info |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

**示例：**

```TypeScript
let castDeviceId: string;
avSession.on('deviceOffline', (deviceId: string) => {
  castDeviceId = deviceId;
  console.info(`on deviceOffline  : ${deviceId} `);
});

```

## on('deviceLogEvent')

```TypeScript
function on(type: 'deviceLogEvent', callback: Callback<DeviceLogEventCode>): void
```

Register log event callback.

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceLogEvent' | 是 | Command to register 'deviceLogEvent'. |
| callback | Callback&lt;DeviceLogEventCode> | 是 | Used to handle ('deviceLogEvent') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

**示例：**

```TypeScript
avSession.on('deviceLogEvent', (eventCode: avSession.DeviceLogEventCode) => {
  console.info(`on deviceLogEvent code : ${eventCode}`);
});

```

## on('deviceStateChanged')

```TypeScript
function on(type: 'deviceStateChanged', callback: Callback<DeviceState>): void
```

Registers a system callback for the device connection phase. The callback includes information such as error codes, connection status, radar errors, and user behavior codes.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'deviceStateChanged' | 是 | Event type. |
| callback | Callback&lt;DeviceState> | 是 | Callback used to return the device information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not System App. |

**示例：**

```TypeScript
avSession.on('deviceStateChanged', (state: avSession.DeviceState) => {
  console.info(`on deviceStateChanged state, deviceId=${state.deviceId}, connect status=${state.deviceState},
    reasonCode=${state.reasonCode}, radarErrorCode=${state.radarErrorCode}`)
})

```

