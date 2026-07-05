# AVSession

AVSession object.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## activate

```TypeScript
activate(callback: AsyncCallback<void>): void
```

Activate the session, indicating that the session can accept control commands

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the session is activated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## activate

```TypeScript
activate(): Promise<void>
```

Activate the session, indicating that the session can accept control commands

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void result promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## deactivate

```TypeScript
deactivate(callback: AsyncCallback<void>): void
```

Deactivate the session, indicating that the session not ready to accept control commands

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the session is deactivated. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## deactivate

```TypeScript
deactivate(): Promise<void>
```

Deactivate the session, indicating that the session not ready to accept control commands

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroy this session, the server will clean up the session resources

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy this session, the server will clean up the session resources

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Dispatch the session event of this session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Session event name to dispatch |
| args | {[key: string]: Object} | 是 | The parameters of session event |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: Record<string, Object>, callback: AsyncCallback<void>): void
```

Dispatch the session event of this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Session event name to dispatch |
| args | Record&lt;string, Object> | 是 | The parameters of session event |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>
```

Dispatch the session event of this session.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Session event name to dispatch |
| args | {[key: string]: Object} | 是 | The parameters of session event |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: Record<string, Object>): Promise<void>
```

Dispatch the session event of this session.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | string | 是 | Session event name to dispatch |
| args | Record&lt;string, Object> | 是 | The parameters of session event |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## enableDesktopLyric

```TypeScript
enableDesktopLyric(enable: boolean): Promise<void>
```

Enable desktop lyric for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | The enable status indicating to using system desktop lyric feature or not |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600111 | The desktop lyrics feature is not supported. |

## getAllCastDisplays

```TypeScript
getAllCastDisplays(): Promise<Array<CastDisplayInfo>>
```

Get all the current virtual display information for extended display.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;CastDisplayInfo>> | Promise for the CastDisplayInfo |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getAVCastController

```TypeScript
getAVCastController(callback: AsyncCallback<AVCastController>): void
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return null.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVCastController> | 是 | async callback for the AVCastController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(callback: AsyncCallback<AVCastController | undefined>): void
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return undefined.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVCastController \| undefined> | 是 | async callback for the AVCastController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(): Promise<AVCastController>
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return null.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVCastController> | Promise for the AVCastController |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(): Promise<AVCastController | undefined>
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return undefined.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVCastController \| undefined> | Promise for the AVCastController |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getController

```TypeScript
getController(callback: AsyncCallback<AVSessionController>): void
```

Get the current session's own controller

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVSessionController> | 是 | async callback for the AVSessionController. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getController

```TypeScript
getController(): Promise<AVSessionController>
```

Get the current session's own controller

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVSessionController> | Promise for the AVSessionController |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getDesktopLyricState

```TypeScript
getDesktopLyricState(): Promise<DesktopLyricState>
```

Get desktop lyric state such as lock state for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DesktopLyricState> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## getOutputDevice

```TypeScript
getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void
```

Get output device information

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OutputDeviceInfo> | 是 | async callback for the OutputDeviceInfo. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getOutputDevice

```TypeScript
getOutputDevice(): Promise<OutputDeviceInfo>
```

Get output device information

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OutputDeviceInfo> | Promise for the OutputDeviceInfo |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getOutputDeviceSync

```TypeScript
getOutputDeviceSync(): OutputDeviceInfo
```

Get output device information

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| OutputDeviceInfo | the OutputDeviceInfo |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## isDesktopLyricVisible

```TypeScript
isDesktopLyricVisible(): Promise<boolean>
```

Query desktop lyric visible state for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | return desktop lyric visible state |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## off('play')

```TypeScript
off(type: 'play', callback?: () => void): void
```

Unregister play command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'play' | 是 | Command to register 'play'. |
| callback | () => void | 否 | Used to handle ('play') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('pause')

```TypeScript
off(type: 'pause', callback?: () => void): void
```

Unregister pause command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'pause' | 是 | Command to register 'pause'. |
| callback | () => void | 否 | Used to handle ('pause') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('stop')

```TypeScript
off(type: 'stop', callback?: () => void): void
```

Unregister stop command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stop' | 是 | Command to register 'stop'. |
| callback | () => void | 否 | Used to handle ('stop') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playNext')

```TypeScript
off(type: 'playNext', callback?: () => void): void
```

Unregister playNext command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playNext' | 是 | Command to register 'playNext'. |
| callback | () => void | 否 | Used to handle ('playNext') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playPrevious')

```TypeScript
off(type: 'playPrevious', callback?: () => void): void
```

Unregister playPrevious command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playPrevious' | 是 | Command to register 'playPrevious'. |
| callback | () => void | 否 | Used to handle ('playPrevious') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('fastForward')

```TypeScript
off(type: 'fastForward', callback?: () => void): void
```

Unregister fastForward command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'fastForward' | 是 | Command to register 'fastForward'. |
| callback | () => void | 否 | Used to handle ('fastForward') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('rewind')

```TypeScript
off(type: 'rewind', callback?: () => void): void
```

Unregister rewind command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rewind' | 是 | Command to register 'rewind'. |
| callback | () => void | 否 | Used to handle ('rewind') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playFromAssetId')

```TypeScript
off(type: 'playFromAssetId', callback?: (assetId: number) => void): void
```

Unregister playFromAssetId command callback.

**起始版本：** 11

**废弃版本：** 20

**替代接口：** ohos.multimedia.avsession.AVSession#off

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | 是 | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | 否 | Used to handle ('playFromAssetId') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playWithAssetId')

```TypeScript
off(type: 'playWithAssetId', callback?: Callback<string>): void
```

Unsubscribes from playWithAssetId events.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | 是 | Event type. |
| callback | Callback&lt;string> | 否 | Callback used to handle the 'playWithAssetId' command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('seek')

```TypeScript
off(type: 'seek', callback?: (time: long) => void): void
```

Unregister seek command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'seek' | 是 | Registration Type 'seek' |
| callback | (time: long) => void | 否 | Used to handle seek command.The callback provides the seek time(ms) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setSpeed')

```TypeScript
off(type: 'setSpeed', callback?: (speed: double) => void): void
```

Unregister setSpeed command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setSpeed' | 是 | Registration Type 'setSpeed' |
| callback | (speed: double) => void | 否 | Used to handle setSpeed command.The callback provides the speed value |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setLoopMode')

```TypeScript
off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void
```

Unregister setLoopMode command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setLoopMode' | 是 | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | 否 | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setTargetLoopMode')

```TypeScript
off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void
```

Unregister setTargetLoopMode command callback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | 是 | Registration Type 'setTargetLoopMode' |
| callback | Callback&lt;LoopMode> | 否 | Used to handle setTargetLoopMode command.The callback provides the {@  link LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('toggleFavorite')

```TypeScript
off(type: 'toggleFavorite', callback?: (assetId: string) => void): void
```

Unregister toggle favorite command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | 是 | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | 否 | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('handleKeyEvent')

```TypeScript
off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void
```

Unregister media key handling callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | 是 | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | 否 | Used to handle key events.The callback provides the KeyEvent |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('outputDeviceChange')

```TypeScript
off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Unregister session output device change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | 是 | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | 否 | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link  ConnectionState}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## off('commonCommand')

```TypeScript
off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void
```

Unregister session custom command change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'commonCommand' | 是 | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | 否 | Used to cancel a specific listener  The callback provide the command name and command args |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('skipToQueueItem')

```TypeScript
off(type: 'skipToQueueItem', callback?: (itemId: int) => void): void
```

Unregister the item to play from the playlist change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | 是 | Registration Type 'skipToQueueItem' |
| callback | (itemId: int) => void | 否 | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('answer')

```TypeScript
off(type: 'answer', callback?: Callback<void>): void
```

Unregister answer command callback.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'answer' | 是 | Command to register 'answer'. |
| callback | Callback&lt;void> | 否 | Used to handle ('answer') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('hangUp')

```TypeScript
off(type: 'hangUp', callback?: Callback<void>): void
```

Unregister hangUp command callback.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hangUp' | 是 | Command to register 'hangUp'. |
| callback | Callback&lt;void> | 否 | Used to handle ('hangUp') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('toggleCallMute')

```TypeScript
off(type: 'toggleCallMute', callback?: Callback<void>): void
```

Unregister toggleCallMute command callback.

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | 是 | Command to register 'toggleCallMute'. |
| callback | Callback&lt;void> | 否 | Used to handle ('toggleCallMute') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect  parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('castDisplayChange')

```TypeScript
off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void
```

Unregister listener for cast display information changed.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | 是 | Type of the 'castDisplayChange' to listen for. |
| callback | Callback&lt;CastDisplayInfo> | 否 | Callback used to return cast display information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## off('customDataChange')

```TypeScript
off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void
```

Unsubscribes from custom data changes.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'customDataChange' | 是 | Custom data type. |
| callback | Callback&lt;Record&lt;string, Object>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## offAnswer

```TypeScript
offAnswer(callback?: NoParamCallback): void
```

Unregister answer command callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offCastDisplayChange

```TypeScript
offCastDisplayChange(callback?: Callback<CastDisplayInfo>): void
```

Unregister listener for cast display information changed.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CastDisplayInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## offCommonCommand

```TypeScript
offCommonCommand(callback?: EventProcess): void
```

Unregister session custom command change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | EventProcess | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offCustomDataChange

```TypeScript
offCustomDataChange(callback?: Callback<Record<string, Object>>): void
```

Unsubscribes from custom data changes.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## offDesktopLyricStateChanged

```TypeScript
offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void
```

Unregister desktop lyric state changed callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DesktopLyricState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offDesktopLyricVisibilityChanged

```TypeScript
offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void
```

Unregister desktop lyric visible state change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offFastForward

```TypeScript
offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void
```

Unregister fastForward command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offHandleKeyEvent

```TypeScript
offHandleKeyEvent(callback?: Callback<KeyEvent>): void
```

Unregister media key handling callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offHangUp

```TypeScript
offHangUp(callback?: NoParamCallback): void
```

Unregister hangUp command callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offOutputDeviceChange

```TypeScript
offOutputDeviceChange(callback?: ConnectionEvent): void
```

Unregister session output device change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ConnectionEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## offPause

```TypeScript
offPause(callback?: NoParamCallback): void
```

Unregister pause command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlay

```TypeScript
offPlay(callback?: Callback<CommandInfo>): void
```

Unregister play command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayNext

```TypeScript
offPlayNext(callback?: Callback<CommandInfo>): void
```

Unregister playNext command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayPrevious

```TypeScript
offPlayPrevious(callback?: Callback<CommandInfo>): void
```

Unregister playPrevious command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayWithAssetId

```TypeScript
offPlayWithAssetId(callback?: Callback<string>): void
```

Unsubscribes from playWithAssetId events.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offRewind

```TypeScript
offRewind(callback?: TwoParamCallback<long, CommandInfo>): void
```

Unregister rewind command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSeek

```TypeScript
offSeek(callback?: Callback<long>): void
```

Unregister seek command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetLoopMode

```TypeScript
offSetLoopMode(callback?: Callback<LoopMode>): void
```

Unregister setLoopMode command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetSpeed

```TypeScript
offSetSpeed(callback?: Callback<double>): void
```

Unregister setSpeed command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetTargetLoopMode

```TypeScript
offSetTargetLoopMode(callback?: Callback<LoopMode>): void
```

Unregister setTargetLoopMode command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSkipToQueueItem

```TypeScript
offSkipToQueueItem(callback?: Callback<int>): void
```

Unregister the item to play from the playlist change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offStop

```TypeScript
offStop(callback?: NoParamCallback): void
```

Unregister stop command callback. When canceling the callback, need to update the supported commands list.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offToggleCallMute

```TypeScript
offToggleCallMute(callback?: NoParamCallback): void
```

Unregister toggleCallMute command callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offToggleFavorite

```TypeScript
offToggleFavorite(callback?: Callback<string>): void
```

Unregister toggle favorite command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('play')

```TypeScript
on(type: 'play', callback: () => void): void
```

Register play command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'play' | 是 | Command to register 'play'. |
| callback | () => void | 是 | Used to handle ('play') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('pause')

```TypeScript
on(type: 'pause', callback: () => void): void
```

Register pause command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'pause' | 是 | Command to register 'pause'. |
| callback | () => void | 是 | Used to handle ('pause') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('stop')

```TypeScript
on(type: 'stop', callback: () => void): void
```

Register stop command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'stop' | 是 | Command to register 'stop'. |
| callback | () => void | 是 | Used to handle ('stop') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playNext')

```TypeScript
on(type: 'playNext', callback: () => void): void
```

Register playNext command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playNext' | 是 | Command to register 'playNext'. |
| callback | () => void | 是 | Used to handle ('playNext') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playPrevious')

```TypeScript
on(type: 'playPrevious', callback: () => void): void
```

Register playPrevious command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playPrevious' | 是 | Command to register 'playPrevious'. |
| callback | () => void | 是 | Used to handle ('playPrevious') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('fastForward')

```TypeScript
on(type: 'fastForward', callback: (time ?: long) => void): void
```

Register fastForward command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'fastForward' | 是 | Command to register 'fastForward'. |
| callback | (time ?: long) => void | 是 | Used to handle ('fastForward') command, described by milliseconds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('rewind')

```TypeScript
on(type: 'rewind', callback: (time ?: long) => void): void
```

Register rewind command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'rewind' | 是 | Command to register 'rewind'. |
| callback | (time ?: long) => void | 是 | Used to handle ('rewind') command, described by milliseconds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playFromAssetId')

```TypeScript
on(type: 'playFromAssetId', callback: (assetId: number) => void): void
```

Register playFromAssetId command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 11

**废弃版本：** 20

**替代接口：** ohos.multimedia.avsession.AVSession#on

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | 是 | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | 是 | Used to handle ('playFromAssetId') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playWithAssetId')

```TypeScript
on(type: 'playWithAssetId', callback: Callback<string>): void
```

Subscribes to playWithAssetId events.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | 是 | Event type. |
| callback | Callback&lt;string> | 是 | Callback used to handle the 'playWithAssetId' command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('seek')

```TypeScript
on(type: 'seek', callback: (time: long) => void): void
```

Register seek command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'seek' | 是 | Registration Type 'seek' |
| callback | (time: long) => void | 是 | Used to handle seek command.The callback provides the seek time(ms) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setSpeed')

```TypeScript
on(type: 'setSpeed', callback: (speed: double) => void): void
```

Register setSpeed command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setSpeed' | 是 | Registration Type 'setSpeed' |
| callback | (speed: double) => void | 是 | Used to handle setSpeed command.The callback provides the speed value |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setLoopMode')

```TypeScript
on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void
```

Register setLoopMode command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setLoopMode' | 是 | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | 是 | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setTargetLoopMode')

```TypeScript
on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void
```

Register setTargetLoopMode command callback Application should change playmode to the loopmode which is requested.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | 是 | Registration Type 'setTargetLoopMode' |
| callback | Callback&lt;LoopMode> | 是 | Used to handle setTargetLoopMode command.The callback provides the {@  link LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('toggleFavorite')

```TypeScript
on(type: 'toggleFavorite', callback: (assetId: string) => void): void
```

Register toggle favorite command callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | 是 | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | 是 | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('handleKeyEvent')

```TypeScript
on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void
```

Register media key handling callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | 是 | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | 是 | Used to handle key events.The callback provides the KeyEvent |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('outputDeviceChange')

```TypeScript
on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Register session output device change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | 是 | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | 是 | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link  ConnectionState}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## on('commonCommand')

```TypeScript
on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void
```

Register session custom command change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'commonCommand' | 是 | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | 是 | Used to handle event when the common command is received  The callback provide the command name and command args |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('skipToQueueItem')

```TypeScript
on(type: 'skipToQueueItem', callback: (itemId: int) => void): void
```

Register the item to play from the playlist change callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | 是 | Registration Type 'skipToQueueItem' |
| callback | (itemId: int) => void | 是 | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('answer')

```TypeScript
on(type: 'answer', callback: Callback<void>): void
```

Register answer command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'answer' | 是 | Command to register 'answer'. |
| callback | Callback&lt;void> | 是 | Used to handle ('answer') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('hangUp')

```TypeScript
on(type: 'hangUp', callback: Callback<void>): void
```

Register hangUp command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'hangUp' | 是 | Command to register 'hangUp'. |
| callback | Callback&lt;void> | 是 | Used to handle ('hangUp') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('toggleCallMute')

```TypeScript
on(type: 'toggleCallMute', callback: Callback<void>): void
```

Register toggleCallMute command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | 是 | Command to register 'toggleCallMute'. |
| callback | Callback&lt;void> | 是 | Used to handle ('toggleCallMute') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('castDisplayChange')

```TypeScript
on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void
```

Register listener for cast display information changed.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | 是 | Type of the 'castDisplayChange' to listen for. |
| callback | Callback&lt;CastDisplayInfo> | 是 | Callback used to return cast display information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## on('customDataChange')

```TypeScript
on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void
```

Register listener for custom data sent from remote device.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'customDataChange' | 是 | Type of the 'customDataChange' to listen for. |
| callback | Callback&lt;Record&lt;string, Object>> | 是 | Callback used to retrieve custom data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## onAnswer

```TypeScript
onAnswer(callback: NoParamCallback): void
```

Register answer command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle ('answer') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onCastDisplayChange

```TypeScript
onCastDisplayChange(callback: Callback<CastDisplayInfo>): void
```

Register listener for cast display information changed.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CastDisplayInfo> | 是 | Callback used to return cast display information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## onCommonCommand

```TypeScript
onCommonCommand(callback: EventProcess): void
```

Register session custom command change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | EventProcess | 是 | Used to handle event when the common command is received  The callback provide the command name and command args |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onCustomDataChange

```TypeScript
onCustomDataChange(callback: Callback<Record<string, Object>>): void
```

Register listener for custom data sent from remote device.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | 是 | Callback used to retrieve custom data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## onDesktopLyricStateChanged

```TypeScript
onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void
```

Register desktop lyric state changed callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;DesktopLyricState> | 是 | a callback to receive desktop lyric state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onDesktopLyricVisibilityChanged

```TypeScript
onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void
```

Register desktop lyric visible state change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | a callback to receive desktop lyric window visible state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onFastForward

```TypeScript
onFastForward(callback: TwoParamCallback<long, CommandInfo>): void
```

Register fastForward command callback. The application will receive forward time and {@link CommandInfo} from a controller.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | 是 | Used to handle ('fastForward') command, described by  milliseconds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onHandleKeyEvent

```TypeScript
onHandleKeyEvent(callback: Callback<KeyEvent>): void
```

Register media key handling callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent> | 是 | Used to handle key events.The callback provides the KeyEvent |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onHangUp

```TypeScript
onHangUp(callback: NoParamCallback): void
```

Register hangUp command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle ('hangUp') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onOutputDeviceChange

```TypeScript
onOutputDeviceChange(callback: ConnectionEvent): void
```

Register session output device change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ConnectionEvent | 是 | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo}  and related connection state {@link ConnectionState}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## onPause

```TypeScript
onPause(callback: NoParamCallback): void
```

Register pause command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle ('pause') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlay

```TypeScript
onPlay(callback: Callback<CommandInfo>): void
```

Register play command callback. The application will receive {@link CommandInfo} from a controller.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 是 | Used to handle ('play') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayNext

```TypeScript
onPlayNext(callback: Callback<CommandInfo>): void
```

Register playNext command callback. The application will receive {@link CommandInfo} from a controller.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 是 | Used to handle ('playNext') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayPrevious

```TypeScript
onPlayPrevious(callback: Callback<CommandInfo>): void
```

Register playPrevious command callback. The application will receive {@link CommandInfo} from a controller.

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | 是 | Used to handle ('playPrevious') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayWithAssetId

```TypeScript
onPlayWithAssetId(callback: Callback<string>): void
```

Subscribes to playWithAssetId events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Callback used to handle the 'playWithAssetId' command. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onRewind

```TypeScript
onRewind(callback: TwoParamCallback<long, CommandInfo>): void
```

Register rewind command callback. The application will receive rewind time and {@link CommandInfo} from a controller.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | 是 | Used to handle ('rewind') command, described by  milliseconds. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSeek

```TypeScript
onSeek(callback: Callback<long>): void
```

Register seek command callback

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | 是 | Used to handle seek command.The callback provides the seek time(ms) |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetLoopMode

```TypeScript
onSetLoopMode(callback: Callback<LoopMode>): void
```

Register setLoopMode command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | 是 | Used to handle setLoopMode command.The callback provides the {@link  LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetSpeed

```TypeScript
onSetSpeed(callback: Callback<double>): void
```

Register setSpeed command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | 是 | Used to handle setSpeed command.The callback provides the speed value |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetTargetLoopMode

```TypeScript
onSetTargetLoopMode(callback: Callback<LoopMode>): void
```

Register setTargetLoopMode command callback Application should change playmode to the loopmode which is requested.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | 是 | Used to handle setTargetLoopMode command.  The callback provides the {@link LoopMode} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSkipToQueueItem

```TypeScript
onSkipToQueueItem(callback: Callback<int>): void
```

Register the item to play from the playlist change callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onStop

```TypeScript
onStop(callback: NoParamCallback): void
```

Register stop command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle ('stop') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onToggleCallMute

```TypeScript
onToggleCallMute(callback: NoParamCallback): void
```

Register toggleCallMute command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle ('toggleCallMute') command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onToggleFavorite

```TypeScript
onToggleFavorite(callback: Callback<string>): void
```

Register toggle favorite command callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## sendCustomData

```TypeScript
sendCustomData(data: Record<string, Object>): Promise<void>
```

Sends custom data to a remote device.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | 是 | Custom data populated by the application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception.  You are advised to:1.Scheduled retry.2.Destroy the current session or session controller and re-create it. |
| 6600102 | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void
```

Set the call state of this session.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | AVCallState | 是 | {@link AVCallState} |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState): Promise<void>
```

Set the call state of this session.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | AVCallState | 是 | {@link AVCallState} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void
```

Set the metadata of this session. In addition to the required properties, users can fill in partially supported properties

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | AVMetadata | 是 | {@link AVMetadata} |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata): Promise<void>
```

Set the metadata of this session. In addition to the required properties, users can fill in partially supported properties

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | AVMetadata | 是 | {@link AVMetadata} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void
```

Set the playback state of this session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | AVPlaybackState | 是 | {@link AVPlaybackState} |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState): Promise<void>
```

Set the playback state of this session.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | AVPlaybackState | 是 | {@link AVPlaybackState} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;AVQueueItem> | 是 | An array of the AVQueueItem |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>): Promise<void>
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| items | Array&lt;AVQueueItem> | 是 | An array of the AVQueueItem |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string, callback: AsyncCallback<void>): void
```

Set the name of the playlist presented by this session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | The name of the playlist |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string): Promise<void>
```

Set the name of the playlist presented by this session.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | The name of the playlist |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setBackgroundPlayMode

```TypeScript
setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>
```

Set the background playback mode. It is recommended that you associate it with the background playback switch in the app. If not set, the default value for 'audio' session is {@link ENABLE_BACKGROUND_PLAY} and the default value for 'video' session is {@link DISENABLE_BACKGROUND_PLAY}.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | BackgroundPlayMode | 是 | Background play mode |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void
```

Set the metadata related with current call.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | CallMetadata | 是 | {@link CallMetadata} |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata): Promise<void>
```

Set the metadata related with current call.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | CallMetadata | 是 | {@link CallMetadata} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setDesktopLyricState

```TypeScript
setDesktopLyricState(state: DesktopLyricState): Promise<void>
```

Set desktop lyric state such as lock state for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| state | DesktopLyricState | 是 | The desktop lyric state |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## setDesktopLyricVisible

```TypeScript
setDesktopLyricVisible(visible: boolean): Promise<void>
```

Set desktop lyric visible state for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| visible | boolean | 是 | make desktop lyric window visible or not |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## setExtras

```TypeScript
setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Set the custom media packets for this session.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | 是 | The custom media packets |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: Record<string, Object>, callback: AsyncCallback<void>): void
```

Set the custom media packets for this session.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extras | Record&lt;string, Object> | 是 | The custom media packets |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: {[key: string]: Object}): Promise<void>
```

Set the custom media packets for this session.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | 是 | The custom media packets |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: Record<string, Object>): Promise<void>
```

Set the custom media packets for this session.

**起始版本：** 23

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| extras | Record&lt;string, Object> | 是 | The custom media packets |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void
```

Set the ability to start the session corresponding to

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | WantAgent | 是 | The WantAgent for launch the ability |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent): Promise<void>
```

Set the ability to start the session corresponding to

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ability | WantAgent | 是 | The WantAgent for launch the ability |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setMediaCenterControlType

```TypeScript
setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>
```

Set media control types that can be displayed on the media center.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | Array&lt;AVMediaCenterControlType> | 是 | The control types that can be displayed on the media center.  If the priority of control type is not set, the media center will display based on {@link AVSessionType}.  The control type set must be registered by {@link on}, the media center prioritizes displaying  the set control type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setSupportedLoopModes

```TypeScript
setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>
```

Set supported loop modes supplied by application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loopModes | Array&lt;LoopMode> | 是 | supported loop modes |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## setSupportedPlaySpeeds

```TypeScript
setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>
```

Set supported speeds supplied by application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speeds | Array&lt;double> | 是 | supported speeds |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## stopCasting

```TypeScript
stopCasting(callback: AsyncCallback<void>): void
```

Stop current cast and disconnect device connection.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | A callback instance used to return when cast stopped completed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600109 | The remote connection is not established |

## stopCasting

```TypeScript
stopCasting(): Promise<void>
```

Stop current cast and disconnect device connection.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void result promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600109 | The remote connection is not established |

## sessionTag

```TypeScript
readonly sessionTag: string
```

Current session tag.

**类型：** string

**起始版本：** 22

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## sessionType

```TypeScript
readonly sessionType: AVSessionType
```

Get current session type

**类型：** AVSessionType

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

## sessionId

```TypeScript
readonly sessionId: string
```

unique session Id

**类型：** string

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.Core

