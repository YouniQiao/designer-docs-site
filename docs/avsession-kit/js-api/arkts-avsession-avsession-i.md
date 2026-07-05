# AVSession

AVSession object.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## activate

```TypeScript
activate(callback: AsyncCallback<void>): void
```

Activate the session, indicating that the session can accept control commands

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the session is activated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## activate

```TypeScript
activate(): Promise<void>
```

Activate the session, indicating that the session can accept control commands

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void result promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## deactivate

```TypeScript
deactivate(callback: AsyncCallback<void>): void
```

Deactivate the session, indicating that the session not ready to accept control commands

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the session is deactivated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## deactivate

```TypeScript
deactivate(): Promise<void>
```

Deactivate the session, indicating that the session not ready to accept control commands

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroy this session, the server will clean up the session resources

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy this session, the server will clean up the session resources

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Dispatch the session event of this session.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | {[key: string]: Object} | Yes | The parameters of session event |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: Record<string, Object>, callback: AsyncCallback<void>): void
```

Dispatch the session event of this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | Record&lt;string, Object> | Yes | The parameters of session event |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>
```

Dispatch the session event of this session.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | {[key: string]: Object} | Yes | The parameters of session event |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: Record<string, Object>): Promise<void>
```

Dispatch the session event of this session.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | Record&lt;string, Object> | Yes | The parameters of session event |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## enableDesktopLyric

```TypeScript
enableDesktopLyric(enable: boolean): Promise<void>
```

Enable desktop lyric for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | The enable status indicating to using system desktop lyric feature or not |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600111 | The desktop lyrics feature is not supported. |

## getAllCastDisplays

```TypeScript
getAllCastDisplays(): Promise<Array<CastDisplayInfo>>
```

Get all the current virtual display information for extended display.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;CastDisplayInfo>> | Promise for the CastDisplayInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getAVCastController

```TypeScript
getAVCastController(callback: AsyncCallback<AVCastController>): void
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return null.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVCastController> | Yes | async callback for the AVCastController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(callback: AsyncCallback<AVCastController | undefined>): void
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return undefined.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVCastController \| undefined> | Yes | async callback for the AVCastController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(): Promise<AVCastController>
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return null.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVCastController> | Promise for the AVCastController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(): Promise<AVCastController | undefined>
```

Get the cast controller when the session is casted to remote device. If the avsession is not under casting state, the controller will return undefined.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVCastController \| undefined> | Promise for the AVCastController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600102 | The session does not exist |
| 6600109 | The remote connection is not established |

## getController

```TypeScript
getController(callback: AsyncCallback<AVSessionController>): void
```

Get the current session's own controller

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVSessionController> | Yes | async callback for the AVSessionController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getController

```TypeScript
getController(): Promise<AVSessionController>
```

Get the current session's own controller

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVSessionController> | Promise for the AVSessionController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getDesktopLyricState

```TypeScript
getDesktopLyricState(): Promise<DesktopLyricState>
```

Get desktop lyric state such as lock state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DesktopLyricState> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;OutputDeviceInfo> | Yes | async callback for the OutputDeviceInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getOutputDevice

```TypeScript
getOutputDevice(): Promise<OutputDeviceInfo>
```

Get output device information

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OutputDeviceInfo> | Promise for the OutputDeviceInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## getOutputDeviceSync

```TypeScript
getOutputDeviceSync(): OutputDeviceInfo
```

Get output device information

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| OutputDeviceInfo | the OutputDeviceInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## isDesktopLyricVisible

```TypeScript
isDesktopLyricVisible(): Promise<boolean>
```

Query desktop lyric visible state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | return desktop lyric visible state |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' | Yes | Command to register 'play'. |
| callback | () => void | No | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('pause')

```TypeScript
off(type: 'pause', callback?: () => void): void
```

Unregister pause command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pause' | Yes | Command to register 'pause'. |
| callback | () => void | No | Used to handle ('pause') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('stop')

```TypeScript
off(type: 'stop', callback?: () => void): void
```

Unregister stop command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stop' | Yes | Command to register 'stop'. |
| callback | () => void | No | Used to handle ('stop') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playNext')

```TypeScript
off(type: 'playNext', callback?: () => void): void
```

Unregister playNext command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playNext' | Yes | Command to register 'playNext'. |
| callback | () => void | No | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playPrevious')

```TypeScript
off(type: 'playPrevious', callback?: () => void): void
```

Unregister playPrevious command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playPrevious' | Yes | Command to register 'playPrevious'. |
| callback | () => void | No | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('fastForward')

```TypeScript
off(type: 'fastForward', callback?: () => void): void
```

Unregister fastForward command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fastForward' | Yes | Command to register 'fastForward'. |
| callback | () => void | No | Used to handle ('fastForward') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('rewind')

```TypeScript
off(type: 'rewind', callback?: () => void): void
```

Unregister rewind command callback. When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rewind' | Yes | Command to register 'rewind'. |
| callback | () => void | No | Used to handle ('rewind') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playFromAssetId')

```TypeScript
off(type: 'playFromAssetId', callback?: (assetId: number) => void): void
```

Unregister playFromAssetId command callback.

**Since:** 11

**Deprecated since:** 20

**Substitute:** ohos.multimedia.avsession.AVSession#off

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | Yes | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | No | Used to handle ('playFromAssetId') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('playWithAssetId')

```TypeScript
off(type: 'playWithAssetId', callback?: Callback<string>): void
```

Unsubscribes from playWithAssetId events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | Yes | Event type. |
| callback | Callback&lt;string> | No | Callback used to handle the 'playWithAssetId' command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('seek')

```TypeScript
off(type: 'seek', callback?: (time: long) => void): void
```

Unregister seek command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seek' | Yes | Registration Type 'seek' |
| callback | (time: long) => void | No | Used to handle seek command.The callback provides the seek time(ms) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setSpeed')

```TypeScript
off(type: 'setSpeed', callback?: (speed: double) => void): void
```

Unregister setSpeed command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSpeed' | Yes | Registration Type 'setSpeed' |
| callback | (speed: double) => void | No | Used to handle setSpeed command.The callback provides the speed value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setLoopMode')

```TypeScript
off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void
```

Unregister setLoopMode command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setLoopMode' | Yes | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | No | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('setTargetLoopMode')

```TypeScript
off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void
```

Unregister setTargetLoopMode command callback

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | Yes | Registration Type 'setTargetLoopMode' |
| callback | Callback&lt;LoopMode> | No | Used to handle setTargetLoopMode command.The callback provides the {@  link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('toggleFavorite')

```TypeScript
off(type: 'toggleFavorite', callback?: (assetId: string) => void): void
```

Unregister toggle favorite command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | Yes | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | No | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('handleKeyEvent')

```TypeScript
off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void
```

Unregister media key handling callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | Yes | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | No | Used to handle key events.The callback provides the KeyEvent |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('outputDeviceChange')

```TypeScript
off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Unregister session output device change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | No | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link  ConnectionState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## off('commonCommand')

```TypeScript
off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void
```

Unregister session custom command change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'commonCommand' | Yes | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | No | Used to cancel a specific listener  The callback provide the command name and command args |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('skipToQueueItem')

```TypeScript
off(type: 'skipToQueueItem', callback?: (itemId: int) => void): void
```

Unregister the item to play from the playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | Yes | Registration Type 'skipToQueueItem' |
| callback | (itemId: int) => void | No | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('answer')

```TypeScript
off(type: 'answer', callback?: Callback<void>): void
```

Unregister answer command callback.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'answer' | Yes | Command to register 'answer'. |
| callback | Callback&lt;void> | No | Used to handle ('answer') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('hangUp')

```TypeScript
off(type: 'hangUp', callback?: Callback<void>): void
```

Unregister hangUp command callback.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hangUp' | Yes | Command to register 'hangUp'. |
| callback | Callback&lt;void> | No | Used to handle ('hangUp') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('toggleCallMute')

```TypeScript
off(type: 'toggleCallMute', callback?: Callback<void>): void
```

Unregister toggleCallMute command callback.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | Yes | Command to register 'toggleCallMute'. |
| callback | Callback&lt;void> | No | Used to handle ('toggleCallMute') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect  parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## off('castDisplayChange')

```TypeScript
off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void
```

Unregister listener for cast display information changed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | Yes | Type of the 'castDisplayChange' to listen for. |
| callback | Callback&lt;CastDisplayInfo> | No | Callback used to return cast display information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## off('customDataChange')

```TypeScript
off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void
```

Unsubscribes from custom data changes.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'customDataChange' | Yes | Custom data type. |
| callback | Callback&lt;Record&lt;string, Object>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## offAnswer

```TypeScript
offAnswer(callback?: NoParamCallback): void
```

Unregister answer command callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offCastDisplayChange

```TypeScript
offCastDisplayChange(callback?: Callback<CastDisplayInfo>): void
```

Unregister listener for cast display information changed.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CastDisplayInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## offCommonCommand

```TypeScript
offCommonCommand(callback?: EventProcess): void
```

Unregister session custom command change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | EventProcess | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offCustomDataChange

```TypeScript
offCustomDataChange(callback?: Callback<Record<string, Object>>): void
```

Unsubscribes from custom data changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## offDesktopLyricStateChanged

```TypeScript
offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void
```

Unregister desktop lyric state changed callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DesktopLyricState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offDesktopLyricVisibilityChanged

```TypeScript
offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void
```

Unregister desktop lyric visible state change callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offFastForward

```TypeScript
offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void
```

Unregister fastForward command callback. When canceling the callback, need to update the supported commands list.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offHandleKeyEvent

```TypeScript
offHandleKeyEvent(callback?: Callback<KeyEvent>): void
```

Unregister media key handling callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offHangUp

```TypeScript
offHangUp(callback?: NoParamCallback): void
```

Unregister hangUp command callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offOutputDeviceChange

```TypeScript
offOutputDeviceChange(callback?: ConnectionEvent): void
```

Unregister session output device change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ConnectionEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## offPause

```TypeScript
offPause(callback?: NoParamCallback): void
```

Unregister pause command callback. When canceling the callback, need to update the supported commands list.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlay

```TypeScript
offPlay(callback?: Callback<CommandInfo>): void
```

Unregister play command callback. When canceling the callback, need to update the supported commands list.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayNext

```TypeScript
offPlayNext(callback?: Callback<CommandInfo>): void
```

Unregister playNext command callback. When canceling the callback, need to update the supported commands list.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayPrevious

```TypeScript
offPlayPrevious(callback?: Callback<CommandInfo>): void
```

Unregister playPrevious command callback. When canceling the callback, need to update the supported commands list.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offPlayWithAssetId

```TypeScript
offPlayWithAssetId(callback?: Callback<string>): void
```

Unsubscribes from playWithAssetId events.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offRewind

```TypeScript
offRewind(callback?: TwoParamCallback<long, CommandInfo>): void
```

Unregister rewind command callback. When canceling the callback, need to update the supported commands list.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSeek

```TypeScript
offSeek(callback?: Callback<long>): void
```

Unregister seek command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetLoopMode

```TypeScript
offSetLoopMode(callback?: Callback<LoopMode>): void
```

Unregister setLoopMode command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetSpeed

```TypeScript
offSetSpeed(callback?: Callback<double>): void
```

Unregister setSpeed command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSetTargetLoopMode

```TypeScript
offSetTargetLoopMode(callback?: Callback<LoopMode>): void
```

Unregister setTargetLoopMode command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offSkipToQueueItem

```TypeScript
offSkipToQueueItem(callback?: Callback<int>): void
```

Unregister the item to play from the playlist change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offStop

```TypeScript
offStop(callback?: NoParamCallback): void
```

Unregister stop command callback. When canceling the callback, need to update the supported commands list.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offToggleCallMute

```TypeScript
offToggleCallMute(callback?: NoParamCallback): void
```

Unregister toggleCallMute command callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## offToggleFavorite

```TypeScript
offToggleFavorite(callback?: Callback<string>): void
```

Unregister toggle favorite command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('play')

```TypeScript
on(type: 'play', callback: () => void): void
```

Register play command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' | Yes | Command to register 'play'. |
| callback | () => void | Yes | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('pause')

```TypeScript
on(type: 'pause', callback: () => void): void
```

Register pause command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pause' | Yes | Command to register 'pause'. |
| callback | () => void | Yes | Used to handle ('pause') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('stop')

```TypeScript
on(type: 'stop', callback: () => void): void
```

Register stop command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stop' | Yes | Command to register 'stop'. |
| callback | () => void | Yes | Used to handle ('stop') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playNext')

```TypeScript
on(type: 'playNext', callback: () => void): void
```

Register playNext command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playNext' | Yes | Command to register 'playNext'. |
| callback | () => void | Yes | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playPrevious')

```TypeScript
on(type: 'playPrevious', callback: () => void): void
```

Register playPrevious command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playPrevious' | Yes | Command to register 'playPrevious'. |
| callback | () => void | Yes | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('fastForward')

```TypeScript
on(type: 'fastForward', callback: (time ?: long) => void): void
```

Register fastForward command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fastForward' | Yes | Command to register 'fastForward'. |
| callback | (time ?: long) => void | Yes | Used to handle ('fastForward') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('rewind')

```TypeScript
on(type: 'rewind', callback: (time ?: long) => void): void
```

Register rewind command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rewind' | Yes | Command to register 'rewind'. |
| callback | (time ?: long) => void | Yes | Used to handle ('rewind') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playFromAssetId')

```TypeScript
on(type: 'playFromAssetId', callback: (assetId: number) => void): void
```

Register playFromAssetId command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 11

**Deprecated since:** 20

**Substitute:** ohos.multimedia.avsession.AVSession#on

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | Yes | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | Yes | Used to handle ('playFromAssetId') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('playWithAssetId')

```TypeScript
on(type: 'playWithAssetId', callback: Callback<string>): void
```

Subscribes to playWithAssetId events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | Yes | Event type. |
| callback | Callback&lt;string> | Yes | Callback used to handle the 'playWithAssetId' command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('seek')

```TypeScript
on(type: 'seek', callback: (time: long) => void): void
```

Register seek command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seek' | Yes | Registration Type 'seek' |
| callback | (time: long) => void | Yes | Used to handle seek command.The callback provides the seek time(ms) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setSpeed')

```TypeScript
on(type: 'setSpeed', callback: (speed: double) => void): void
```

Register setSpeed command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSpeed' | Yes | Registration Type 'setSpeed' |
| callback | (speed: double) => void | Yes | Used to handle setSpeed command.The callback provides the speed value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setLoopMode')

```TypeScript
on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void
```

Register setLoopMode command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setLoopMode' | Yes | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | Yes | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('setTargetLoopMode')

```TypeScript
on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void
```

Register setTargetLoopMode command callback Application should change playmode to the loopmode which is requested.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | Yes | Registration Type 'setTargetLoopMode' |
| callback | Callback&lt;LoopMode> | Yes | Used to handle setTargetLoopMode command.The callback provides the {@  link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('toggleFavorite')

```TypeScript
on(type: 'toggleFavorite', callback: (assetId: string) => void): void
```

Register toggle favorite command callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | Yes | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | Yes | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('handleKeyEvent')

```TypeScript
on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void
```

Register media key handling callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | Yes | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | Yes | Used to handle key events.The callback provides the KeyEvent |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('outputDeviceChange')

```TypeScript
on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Register session output device change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | Yes | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link  ConnectionState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## on('commonCommand')

```TypeScript
on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void
```

Register session custom command change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'commonCommand' | Yes | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | Yes | Used to handle event when the common command is received  The callback provide the command name and command args |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('skipToQueueItem')

```TypeScript
on(type: 'skipToQueueItem', callback: (itemId: int) => void): void
```

Register the item to play from the playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | Yes | Registration Type 'skipToQueueItem' |
| callback | (itemId: int) => void | Yes | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('answer')

```TypeScript
on(type: 'answer', callback: Callback<void>): void
```

Register answer command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'answer' | Yes | Command to register 'answer'. |
| callback | Callback&lt;void> | Yes | Used to handle ('answer') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('hangUp')

```TypeScript
on(type: 'hangUp', callback: Callback<void>): void
```

Register hangUp command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hangUp' | Yes | Command to register 'hangUp'. |
| callback | Callback&lt;void> | Yes | Used to handle ('hangUp') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('toggleCallMute')

```TypeScript
on(type: 'toggleCallMute', callback: Callback<void>): void
```

Register toggleCallMute command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | Yes | Command to register 'toggleCallMute'. |
| callback | Callback&lt;void> | Yes | Used to handle ('toggleCallMute') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## on('castDisplayChange')

```TypeScript
on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void
```

Register listener for cast display information changed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | Yes | Type of the 'castDisplayChange' to listen for. |
| callback | Callback&lt;CastDisplayInfo> | Yes | Callback used to return cast display information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## on('customDataChange')

```TypeScript
on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void
```

Register listener for custom data sent from remote device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'customDataChange' | Yes | Type of the 'customDataChange' to listen for. |
| callback | Callback&lt;Record&lt;string, Object>> | Yes | Callback used to retrieve custom data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## onAnswer

```TypeScript
onAnswer(callback: NoParamCallback): void
```

Register answer command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | Used to handle ('answer') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onCastDisplayChange

```TypeScript
onCastDisplayChange(callback: Callback<CastDisplayInfo>): void
```

Register listener for cast display information changed.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CastDisplayInfo> | Yes | Callback used to return cast display information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## onCommonCommand

```TypeScript
onCommonCommand(callback: EventProcess): void
```

Register session custom command change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | EventProcess | Yes | Used to handle event when the common command is received  The callback provide the command name and command args |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onCustomDataChange

```TypeScript
onCustomDataChange(callback: Callback<Record<string, Object>>): void
```

Register listener for custom data sent from remote device.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | Yes | Callback used to retrieve custom data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## onDesktopLyricStateChanged

```TypeScript
onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void
```

Register desktop lyric state changed callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DesktopLyricState> | Yes | a callback to receive desktop lyric state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onDesktopLyricVisibilityChanged

```TypeScript
onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void
```

Register desktop lyric visible state change callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | a callback to receive desktop lyric window visible state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onFastForward

```TypeScript
onFastForward(callback: TwoParamCallback<long, CommandInfo>): void
```

Register fastForward command callback. The application will receive forward time and {@link CommandInfo} from a controller.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | Yes | Used to handle ('fastForward') command, described by  milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onHandleKeyEvent

```TypeScript
onHandleKeyEvent(callback: Callback<KeyEvent>): void
```

Register media key handling callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;KeyEvent> | Yes | Used to handle key events.The callback provides the KeyEvent |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onHangUp

```TypeScript
onHangUp(callback: NoParamCallback): void
```

Register hangUp command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | Used to handle ('hangUp') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onOutputDeviceChange

```TypeScript
onOutputDeviceChange(callback: ConnectionEvent): void
```

Register session output device change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ConnectionEvent | Yes | Used to handle output device changed.  The callback provide the new device info {@link OutputDeviceInfo}  and related connection state {@link ConnectionState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist |

## onPause

```TypeScript
onPause(callback: NoParamCallback): void
```

Register pause command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | Used to handle ('pause') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlay

```TypeScript
onPlay(callback: Callback<CommandInfo>): void
```

Register play command callback. The application will receive {@link CommandInfo} from a controller.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | Yes | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayNext

```TypeScript
onPlayNext(callback: Callback<CommandInfo>): void
```

Register playNext command callback. The application will receive {@link CommandInfo} from a controller.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | Yes | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayPrevious

```TypeScript
onPlayPrevious(callback: Callback<CommandInfo>): void
```

Register playPrevious command callback. The application will receive {@link CommandInfo} from a controller.

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CommandInfo> | Yes | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onPlayWithAssetId

```TypeScript
onPlayWithAssetId(callback: Callback<string>): void
```

Subscribes to playWithAssetId events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | Callback used to handle the 'playWithAssetId' command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onRewind

```TypeScript
onRewind(callback: TwoParamCallback<long, CommandInfo>): void
```

Register rewind command callback. The application will receive rewind time and {@link CommandInfo} from a controller.

**Since:** 22

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | TwoParamCallback&lt;long, CommandInfo> | Yes | Used to handle ('rewind') command, described by  milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSeek

```TypeScript
onSeek(callback: Callback<long>): void
```

Register seek command callback

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;long> | Yes | Used to handle seek command.The callback provides the seek time(ms) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetLoopMode

```TypeScript
onSetLoopMode(callback: Callback<LoopMode>): void
```

Register setLoopMode command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | Yes | Used to handle setLoopMode command.The callback provides the {@link  LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetSpeed

```TypeScript
onSetSpeed(callback: Callback<double>): void
```

Register setSpeed command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;double> | Yes | Used to handle setSpeed command.The callback provides the speed value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSetTargetLoopMode

```TypeScript
onSetTargetLoopMode(callback: Callback<LoopMode>): void
```

Register setTargetLoopMode command callback Application should change playmode to the loopmode which is requested.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;LoopMode> | Yes | Used to handle setTargetLoopMode command.  The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onSkipToQueueItem

```TypeScript
onSkipToQueueItem(callback: Callback<int>): void
```

Register the item to play from the playlist change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | Yes | Used to handle the item to be played.  The callback provide the new device info {@link OutputDeviceInfo} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onStop

```TypeScript
onStop(callback: NoParamCallback): void
```

Register stop command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off} When canceling the callback, need to update the supported commands list. Each playback command only supports registering one callback, and the new callback will replace the previous one.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | Used to handle ('stop') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onToggleCallMute

```TypeScript
onToggleCallMute(callback: NoParamCallback): void
```

Register toggleCallMute command callback. As long as it is registered, it means that the ability supports this command. If you cancel the callback, you need to call off {@link off}

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | Used to handle ('toggleCallMute') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## onToggleFavorite

```TypeScript
onToggleFavorite(callback: Callback<string>): void
```

Register toggle favorite command callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | Used to handle toggleFavorite command.The callback provides  the assetId for which the favorite status needs to be switched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## sendCustomData

```TypeScript
sendCustomData(data: Record<string, Object>): Promise<void>
```

Sends custom data to a remote device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | Custom data populated by the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception.  You are advised to:1.Scheduled retry.2.Destroy the current session or session controller and re-create it. |
| 6600102 | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void
```

Set the call state of this session.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AVCallState | Yes | {@link AVCallState} |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState): Promise<void>
```

Set the call state of this session.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AVCallState | Yes | {@link AVCallState} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void
```

Set the metadata of this session. In addition to the required properties, users can fill in partially supported properties

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | AVMetadata | Yes | {@link AVMetadata} |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata): Promise<void>
```

Set the metadata of this session. In addition to the required properties, users can fill in partially supported properties

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | AVMetadata | Yes | {@link AVMetadata} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void
```

Set the playback state of this session.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AVPlaybackState | Yes | {@link AVPlaybackState} |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState): Promise<void>
```

Set the playback state of this session.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | AVPlaybackState | Yes | {@link AVPlaybackState} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | Array&lt;AVQueueItem> | Yes | An array of the AVQueueItem |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>): Promise<void>
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | Array&lt;AVQueueItem> | Yes | An array of the AVQueueItem |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string, callback: AsyncCallback<void>): void
```

Set the name of the playlist presented by this session.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | The name of the playlist |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string): Promise<void>
```

Set the name of the playlist presented by this session.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | The name of the playlist |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setBackgroundPlayMode

```TypeScript
setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>
```

Set the background playback mode. It is recommended that you associate it with the background playback switch in the app. If not set, the default value for 'audio' session is {@link ENABLE_BACKGROUND_PLAY} and the default value for 'video' session is {@link DISENABLE_BACKGROUND_PLAY}.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BackgroundPlayMode | Yes | Background play mode |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void
```

Set the metadata related with current call.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | CallMetadata | Yes | {@link CallMetadata} |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata): Promise<void>
```

Set the metadata related with current call.

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | CallMetadata | Yes | {@link CallMetadata} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setDesktopLyricState

```TypeScript
setDesktopLyricState(state: DesktopLyricState): Promise<void>
```

Set desktop lyric state such as lock state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | DesktopLyricState | Yes | The desktop lyric state |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| visible | boolean | Yes | make desktop lyric window visible or not |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
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

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | Yes | The custom media packets |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: Record<string, Object>, callback: AsyncCallback<void>): void
```

Set the custom media packets for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | Record&lt;string, Object> | Yes | The custom media packets |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: {[key: string]: Object}): Promise<void>
```

Set the custom media packets for this session.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | Yes | The custom media packets |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: Record<string, Object>): Promise<void>
```

Set the custom media packets for this session.

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | Record&lt;string, Object> | Yes | The custom media packets |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void
```

Set the ability to start the session corresponding to

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | WantAgent | Yes | The WantAgent for launch the ability |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent): Promise<void>
```

Set the ability to start the session corresponding to

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | WantAgent | Yes | The WantAgent for launch the ability |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setMediaCenterControlType

```TypeScript
setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>
```

Set media control types that can be displayed on the media center.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | Array&lt;AVMediaCenterControlType> | Yes | The control types that can be displayed on the media center.  If the priority of control type is not set, the media center will display based on {@link AVSessionType}.  The control type set must be registered by {@link on}, the media center prioritizes displaying  the set control type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |

## setSupportedLoopModes

```TypeScript
setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>
```

Set supported loop modes supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loopModes | Array&lt;LoopMode> | Yes | supported loop modes |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## setSupportedPlaySpeeds

```TypeScript
setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>
```

Set supported speeds supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speeds | Array&lt;double> | Yes | supported speeds |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600102 | The session does not exist. |

## stopCasting

```TypeScript
stopCasting(callback: AsyncCallback<void>): void
```

Stop current cast and disconnect device connection.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | A callback instance used to return when cast stopped completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600109 | The remote connection is not established |

## stopCasting

```TypeScript
stopCasting(): Promise<void>
```

Stop current cast and disconnect device connection.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void result promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600109 | The remote connection is not established |

## sessionTag

```TypeScript
readonly sessionTag: string
```

Current session tag.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## sessionType

```TypeScript
readonly sessionType: AVSessionType
```

Get current session type

**Type:** AVSessionType

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

## sessionId

```TypeScript
readonly sessionId: string
```

unique session Id

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

