# AVSessionController

Session controller,used to control media playback and get media information

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroy the server controller

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the server controller

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
| 6600103 | The session controller does not exist. |

## getAVCallState

```TypeScript
getAVCallState(callback: AsyncCallback<AVCallState>): void
```

Get the call status of the current session

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVCallState> | Yes | The triggered asyncCallback when (getAVCallState). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVCallState

```TypeScript
getAVCallState(): Promise<AVCallState>
```

Get the call status of the current session

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVCallState> | (AVCallState) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVMetadata

```TypeScript
getAVMetadata(callback: AsyncCallback<AVMetadata>): void
```

Get the metadata of the current session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVMetadata> | Yes | The triggered asyncCallback when (getAVMetadata). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVMetadata

```TypeScript
getAVMetadata(): Promise<AVMetadata>
```

Get the metadata of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVMetadata> | (AVMetadata) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVMetadataSync

```TypeScript
getAVMetadataSync(): AVMetadata
```

Get the metadata of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| AVMetadata | (AVMetadata) returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVPlaybackState

```TypeScript
getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void
```

Get the playback status of the current session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVPlaybackState> | Yes | The triggered asyncCallback when (getAVPlaybackState). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVPlaybackState

```TypeScript
getAVPlaybackState(): Promise<AVPlaybackState>
```

Get the playback status of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVPlaybackState> | (AVPlaybackState) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVPlaybackStateSync

```TypeScript
getAVPlaybackStateSync(): AVPlaybackState
```

Get the playback status of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| AVPlaybackState | (AVPlaybackState) returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueItems

```TypeScript
getAVQueueItems(callback: AsyncCallback<Array<AVQueueItem>>): void
```

Get the playlist of the current session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AVQueueItem>> | Yes | The triggered asyncCallback when (getAVQueueItems). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueItems

```TypeScript
getAVQueueItems(): Promise<Array<AVQueueItem>>
```

Get the playlist of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AVQueueItem>> | (Array) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueItemsSync

```TypeScript
getAVQueueItemsSync(): Array<AVQueueItem>
```

Get the playlist of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AVQueueItem> | (Array) returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueTitle

```TypeScript
getAVQueueTitle(callback: AsyncCallback<string>): void
```

Get the name of the playlist of the current session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | The triggered asyncCallback when (getAVQueueTitle). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueTitle

```TypeScript
getAVQueueTitle(): Promise<string>
```

Get the name of the playlist of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | (string) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getAVQueueTitleSync

```TypeScript
getAVQueueTitleSync(): string
```

Get the name of the playlist of the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | (string) returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getCallMetadata

```TypeScript
getCallMetadata(callback: AsyncCallback<CallMetadata>): void
```

Get the call metadata of the current session

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;CallMetadata> | Yes | The triggered asyncCallback when (getCallMetadata). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getCallMetadata

```TypeScript
getCallMetadata(): Promise<CallMetadata>
```

Get the call metadata of the current session

**Since:** 11

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CallMetadata> | (CallMetadata) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## getExtras

```TypeScript
getExtras(callback: AsyncCallback<{[key: string]: Object}>): void
```

Get custom media packets provided by the corresponding session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;{[key: string]: Object}> | Yes | The triggered asyncCallback when (getExtras). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

## getExtras

```TypeScript
getExtras(callback: AsyncCallback<Record<string, Object>>): void
```

Get custom media packets provided by the corresponding session

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Record&lt;string, Object>> | Yes | The triggered asyncCallback when (getExtras). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

## getExtras

```TypeScript
getExtras(): Promise<{[key: string]: Object}>
```

Get custom media packets provided by the corresponding session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;{[key: string]: Object}> | the parameters of extras |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

## getExtras

```TypeScript
getExtras(): Promise<Record<string, Object>>
```

Get custom media packets provided by the corresponding session

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, Object>> | the parameters of extras |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600107 | Too many commands or events. |

## getExtrasWithEvent

```TypeScript
getExtrasWithEvent(extraEvent: string): Promise<ExtraInfo>
```

Get extra information for remote device, such as volume level, connected devices.

**Since:** 18

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extraEvent | string | Yes | the event name to get |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ExtraInfo> | the value returned for such event |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |

## getLaunchAbility

```TypeScript
getLaunchAbility(callback: AsyncCallback<WantAgent>): void
```

Get the {@link WantAgent} of this session that can launch the session ability

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;WantAgent> | Yes | The asyncCallback triggered when getting the WantAgent. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getLaunchAbility

```TypeScript
getLaunchAbility(): Promise<WantAgent>
```

Get the {@link WantAgent} of this session that can launch the session ability

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;WantAgent> | WantAgent promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getMediaCenterControlType

```TypeScript
getMediaCenterControlType(): Promise<Array<AVMediaCenterControlType>>
```

Get media control type that the can be displayed on the media center.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AVMediaCenterControlType>> | The control types that the app sets to be displayed  on the media center. The default value is empty, indicating that the types of the customized  display control is not set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| callback | AsyncCallback&lt;OutputDeviceInfo> | Yes | The triggered asyncCallback when (getOutputDevice). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 600101 | Session service exception. |
| 600103 | The session controller does not exist. |

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
| Promise&lt;OutputDeviceInfo> | (OutputDeviceInfo) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 600101 | Session service exception. |
| 600103 | The session controller does not exist. |

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
| OutputDeviceInfo | (OutputDeviceInfo) returned |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## getRealPlaybackPositionSync

```TypeScript
getRealPlaybackPositionSync(): long
```

Get the adjusted playback position. The time automatically calculated by the system taking into account factors such as playback status, playback speed, and application update time.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| long | current playback position in ms.Note that the returns value of each call will be different. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## getSupportedLoopModes

```TypeScript
getSupportedLoopModes(): Promise<Array<LoopMode>>
```

Get supported loop modes supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;LoopMode>> | supported loop modes returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## getSupportedPlaySpeeds

```TypeScript
getSupportedPlaySpeeds(): Promise<Array<double>>
```

Get supported speeds supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;double>> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## getValidCommands

```TypeScript
getValidCommands(callback: AsyncCallback<Array<AVControlCommandType>>): void
```

Get commands supported by the current session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AVControlCommandType>> | Yes | The triggered asyncCallback when (  getValidCommands). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getValidCommands

```TypeScript
getValidCommands(): Promise<Array<AVControlCommandType>>
```

Get commands supported by the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;AVControlCommandType>> | array of AVControlCommandType promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## getValidCommandsSync

```TypeScript
getValidCommandsSync(): Array<AVControlCommandType>
```

Get commands supported by the current session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;AVControlCommandType> | array of AVControlCommandType |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## isActive

```TypeScript
isActive(callback: AsyncCallback<boolean>): void
```

Check if the current session is active

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes | The triggered asyncCallback when (isActive). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## isActive

```TypeScript
isActive(): Promise<boolean>
```

Check if the current session is active

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | boolean promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## isActiveSync

```TypeScript
isActiveSync(): boolean
```

Check if the current session is active

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | boolean |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## isDesktopLyricEnabled

```TypeScript
isDesktopLyricEnabled(): Promise<boolean>
```

Query desktop lyric enabled state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | return the enabled status |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600111 | The desktop lyrics feature is not supported. |

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
| 6600103 | The session controller does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## off('metadataChange')

```TypeScript
off(type: 'metadataChange', callback?: (data: AVMetadata) => void)
```

Unregister metadata changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataChange' | Yes |  |
| callback | (data: AVMetadata) => void | No | The callback used to handle metadata changed event.  The callback function provides the {@link AVMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('playbackStateChange')

```TypeScript
off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void)
```

Unregister playback state changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackStateChange' | Yes |  |
| callback | (state: AVPlaybackState) => void | No | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('callMetadataChange')

```TypeScript
off(type: 'callMetadataChange', callback?: Callback<CallMetadata>): void
```

Unregister call metadata changed callback

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callMetadataChange' | Yes | 'callMetadataChange' |
| callback | Callback&lt;CallMetadata> | No | The callback used to handle call metadata changed event.  The callback function provides the {@link CallMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('callStateChange')

```TypeScript
off(type: 'callStateChange', callback?: Callback<AVCallState>): void
```

Unregister playback state changed callback

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChange' | Yes | 'callStateChange' |
| callback | Callback&lt;AVCallState> | No | The callback used to handle call state changed event.  The callback function provides the {@link AVCallState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('sessionDestroy')

```TypeScript
off(type: 'sessionDestroy', callback?: () => void)
```

Unregister current session destroyed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionDestroy' | Yes | 'sessionDestroy' |
| callback | () => void | No | The callback used to handle current session destroyed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('activeStateChange')

```TypeScript
off(type: 'activeStateChange', callback?: (isActive: boolean) => void)
```

Unregister the active state of this session changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeStateChange' | Yes | 'activeStateChange' |
| callback | (isActive: boolean) => void | No | The callback used to handle the active state of this session changed event.  The callback function provides the changed session state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('validCommandChange')

```TypeScript
off(type: 'validCommandChange', callback?: (commands: Array<AVControlCommandType>) => void)
```

Unregister the valid commands of the session changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'validCommandChange' | Yes | 'validCommandChange' |
| callback | (commands: Array&lt;AVControlCommandType>) => void | No | The callback used to handle the changes.  The callback function provides an array of AVControlCommandType. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist |

## off('sessionEvent')

```TypeScript
off(type: 'sessionEvent', callback?: (sessionEvent: string, args: {[key: string]: Object}) => void): void
```

Unregister session event callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionEvent' | Yes | 'sessionEvent' |
| callback | (sessionEvent: string, args: {[key: string]: Object}) => void | No | Used to cancel a specific listener  The callback function provides the event string and key-value pair parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('queueItemsChange')

```TypeScript
off(type: 'queueItemsChange', callback?: (items: Array<AVQueueItem>) => void): void
```

Unregister session playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'queueItemsChange' | Yes | Registration Type 'queueItemsChange' |
| callback | (items: Array&lt;AVQueueItem>) => void | No | Used to handle playlist changed.  The callback provides the new array of AVQueueItem {@link AVQueueItem} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('queueTitleChange')

```TypeScript
off(type: 'queueTitleChange', callback?: (title: string) => void): void
```

Unregister the name of session playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'queueTitleChange' | Yes | Registration Type 'queueTitleChange' |
| callback | (title: string) => void | No | Used to handle name of playlist changed.  The callback provides the new name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('extrasChange')

```TypeScript
off(type: 'extrasChange', callback?: (extras: {[key: string]: Object}) => void): void
```

Unregister the custom media packets change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'extrasChange' | Yes | Registration Type 'extrasChange' |
| callback | (extras: {[key: string]: Object}) => void | No | Used to handle custom media packets changed.  The callback provides the new media packets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off('customDataChange')

```TypeScript
off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void
```

Unregister listener for custom data.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'customDataChange' | Yes | Type of the 'customDataChange' to listen for. |
| callback | Callback&lt;Record&lt;string, Object>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600103 | The session controller does not exist. |

## offActiveStateChange

```TypeScript
offActiveStateChange(callback?: Callback<boolean>): void
```

Unregister the active state of this session changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offCallMetadataChange

```TypeScript
offCallMetadataChange(callback?: Callback<CallMetadata>): void
```

Unregister call metadata changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CallMetadata> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offCallStateChange

```TypeScript
offCallStateChange(callback?: Callback<AVCallState>): void
```

Unregister playback state changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVCallState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offCustomDataChange

```TypeScript
offCustomDataChange(callback?: Callback<Record<string, Object>>): void
```

Unregister listener for custom data.

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
| 6600103 | The session controller does not exist. |

## offDesktopLyricEnabled

```TypeScript
offDesktopLyricEnabled(callback?: Callback<boolean>): void
```

Unregister desktop lyric enable state change callback.

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
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |

## offExtrasChange

```TypeScript
offExtrasChange(callback?: Callback<Record<string, Object>>): void
```

Unregister the custom media packets change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offMediaCenterControlTypeChanged

```TypeScript
offMediaCenterControlTypeChanged(callback?: Callback<Array<AVMediaCenterControlType>>): void
```

Unregister media center control type changed callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVMediaCenterControlType>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offMetadataChange

```TypeScript
offMetadataChange(callback?: Callback<AVMetadata>): void
```

Unregister metadata changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMetadata> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist |

## offPlaybackStateChange

```TypeScript
offPlaybackStateChange(callback?: Callback<AVPlaybackState>): void
```

Unregister playback state changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVPlaybackState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offQueueItemsChange

```TypeScript
offQueueItemsChange(callback?: Callback<Array<AVQueueItem>>): void
```

Unregister session playlist change callback

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVQueueItem>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offQueueTitleChange

```TypeScript
offQueueTitleChange(callback?: Callback<string>): void
```

Unregister the name of session playlist change callback

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
| 6600103 | The session controller does not exist. |

## offSessionDestroy

```TypeScript
offSessionDestroy(callback?: NoParamCallback): void
```

Unregister current session destroyed callback

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
| 6600103 | The session controller does not exist. |

## offSessionEvent

```TypeScript
offSessionEvent(callback?: EventProcess): void
```

Unregister session event callback

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
| 6600103 | The session controller does not exist. |

## offSupportedLoopModesChange

```TypeScript
offSupportedLoopModesChange(callback?: Callback<Array<LoopMode>>): void
```

Unregister listener for supported loop modes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;LoopMode>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600103 | The session controller does not exist. |

## offSupportedPlaySpeedsChange

```TypeScript
offSupportedPlaySpeedsChange(callback?: Callback<Array<double>>): void
```

Unregister listener for supported play speeds.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;double>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600103 | The session controller does not exist. |

## offValidCommandChange

```TypeScript
offValidCommandChange(callback?: Callback<Array<AVControlCommandType>>): void
```

Unregister the valid commands of the session changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVControlCommandType>> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('metadataChange')

```TypeScript
on(type: 'metadataChange', filter: Array<keyof AVMetadata> | 'all', callback: (data: AVMetadata) => void)
```

Register metadata changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataChange' | Yes |  |
| filter | Array&lt;keyof AVMetadata> \| 'all' | Yes | The properties of {@link AVMetadata} that you cared about |
| callback | (data: AVMetadata) => void | Yes | The callback used to handle metadata changed event.  The callback function provides the {@link AVMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('playbackStateChange')

```TypeScript
on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void)
```

Register playback state changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playbackStateChange' | Yes |  |
| filter | Array&lt;keyof AVPlaybackState> \| 'all' | Yes | The properties of {@link AVPlaybackState}  that you cared about |
| callback | (state: AVPlaybackState) => void | Yes | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('callMetadataChange')

```TypeScript
on(type: 'callMetadataChange', filter: Array<keyof CallMetadata> | 'all', callback: Callback<CallMetadata>): void
```

Register call metadata changed callback

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callMetadataChange' | Yes | 'callMetadataChange' |
| filter | Array&lt;keyof CallMetadata> \| 'all' | Yes | The properties of {@link CallMetadata} that you cared about |
| callback | Callback&lt;CallMetadata> | Yes | The callback used to handle call metadata changed event.  The callback function provides the {@link CallMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('callStateChange')

```TypeScript
on(type: 'callStateChange', filter: Array<keyof AVCallState> | 'all', callback: Callback<AVCallState>): void
```

Register call state changed callback

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'callStateChange' | Yes | 'callStateChange' |
| filter | Array&lt;keyof AVCallState> \| 'all' | Yes | The properties of {@link AVCallState} that you cared about |
| callback | Callback&lt;AVCallState> | Yes | The callback used to handle call state changed event.  The callback function provides the {@link AVCallState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('sessionDestroy')

```TypeScript
on(type: 'sessionDestroy', callback: () => void)
```

Register current session destroyed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionDestroy' | Yes |  |
| callback | () => void | Yes | The callback used to handle current session destroyed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('activeStateChange')

```TypeScript
on(type: 'activeStateChange', callback: (isActive: boolean) => void)
```

Register the active state of this session changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'activeStateChange' | Yes | 'activeStateChange' |
| callback | (isActive: boolean) => void | Yes | The callback used to handle the active state of this session changed event.  The callback function provides the changed session state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('validCommandChange')

```TypeScript
on(type: 'validCommandChange', callback: (commands: Array<AVControlCommandType>) => void)
```

Register the valid commands of the session changed callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'validCommandChange' | Yes | 'validCommandChange' |
| callback | (commands: Array&lt;AVControlCommandType>) => void | Yes | The callback used to handle the changes.  The callback function provides an array of AVControlCommandType. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist |

## on('sessionEvent')

```TypeScript
on(type: 'sessionEvent', callback: (sessionEvent: string, args: {[key: string]: Object}) => void): void
```

Register session event callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sessionEvent' | Yes | 'sessionEvent' |
| callback | (sessionEvent: string, args: {[key: string]: Object}) => void | Yes | The callback used to handle session event changed event.  The callback function provides the event string and key-value pair parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('queueItemsChange')

```TypeScript
on(type: 'queueItemsChange', callback: (items: Array<AVQueueItem>) => void): void
```

Register session playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'queueItemsChange' | Yes | Registration Type 'queueItemsChange' |
| callback | (items: Array&lt;AVQueueItem>) => void | Yes | Used to handle playlist changed.  The callback provides the new array of AVQueueItem {@link AVQueueItem} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('queueTitleChange')

```TypeScript
on(type: 'queueTitleChange', callback: (title: string) => void): void
```

Register the name of session playlist change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'queueTitleChange' | Yes | Registration Type 'queueTitleChange' |
| callback | (title: string) => void | Yes | Used to handle name of playlist changed.  The callback provides the new name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('extrasChange')

```TypeScript
on(type: 'extrasChange', callback: (extras: {[key: string]: Object}) => void): void
```

Register the custom media packets change callback

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'extrasChange' | Yes | Registration Type 'extrasChange' |
| callback | (extras: {[key: string]: Object}) => void | Yes | Used to handle custom media packets changed.  The callback provides the new media packets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('customDataChange')

```TypeScript
on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void
```

Register listener for custom data.

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
| 6600103 | The session controller does not exist. |

## onActiveStateChange

```TypeScript
onActiveStateChange(callback: Callback<boolean>): void
```

Register the active state of this session changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | The callback used to handle the active state of this session changed  event.  The callback function provides the changed session state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onCallMetadataChange

```TypeScript
onCallMetadataChange(filter: Array<string>, callback: Callback<CallMetadata>): void
```

Register call metadata changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Array&lt;string> | Yes | The properties of {@link CallMetadata} that you cared about |
| callback | Callback&lt;CallMetadata> | Yes | The callback used to handle call metadata changed event.  The callback function provides the {@link CallMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onCallMetadataChangeAll

```TypeScript
onCallMetadataChangeAll(callback: Callback<CallMetadata>): void
```

Registers a callback for all call metadata changes

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CallMetadata> | Yes | The callback used to handle call metadata changed event.  The callback function provides the {@link CallMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onCallStateChange

```TypeScript
onCallStateChange(filter: Array<string>, callback: Callback<AVCallState>): void
```

Register call state changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Array&lt;string> | Yes | The properties of {@link AVCallState} that you cared about |
| callback | Callback&lt;AVCallState> | Yes | The callback used to handle call state changed event.  The callback function provides the {@link AVCallState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onCallStateChangeAll

```TypeScript
onCallStateChangeAll(callback: Callback<AVCallState>): void
```

Register a callback for all call attribute changes

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVCallState> | Yes | The callback used to handle call state changed event.  The callback function provides the {@link AVCallState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onCustomDataChange

```TypeScript
onCustomDataChange(callback: Callback<Record<string, Object>>): void
```

Register listener for custom data.

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
| 6600103 | The session controller does not exist. |

## onDesktopLyricEnabled

```TypeScript
onDesktopLyricEnabled(callback: Callback<boolean>): void
```

Register desktop lyric enable state change callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | Yes | a callback to receive desktop lyric enable state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |

## onExtrasChange

```TypeScript
onExtrasChange(callback: Callback<Record<string, Object>>): void
```

Register the custom media packets change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Record&lt;string, Object>> | Yes | Used to handle custom media packets changed.  The callback provides the new media packets. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onMediaCenterControlTypeChanged

```TypeScript
onMediaCenterControlTypeChanged(callback: Callback<Array<AVMediaCenterControlType>>): void
```

Register media center control type changed callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVMediaCenterControlType>> | Yes | Callback to receive the changed control types. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onMetadataChange

```TypeScript
onMetadataChange(filter: Array<string>, callback: Callback<AVMetadata>): void
```

Register metadata changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Array&lt;string> | Yes | The properties of {@link AVMetadata} that you cared about |
| callback | Callback&lt;AVMetadata> | Yes | The callback used to handle metadata changed event.  The callback function provides the {@link AVMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onMetadataChangeAll

```TypeScript
onMetadataChangeAll(callback: Callback<AVMetadata>): void
```

Registers a callback to be invoked whenever any metadata changes

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMetadata> | Yes | The callback used to handle metadata changed event.  The callback function provides the {@link AVMetadata} parameter.  It only contains the properties set in the filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist |

## onPlaybackStateChange

```TypeScript
onPlaybackStateChange(filter: Array<string>, callback: Callback<AVPlaybackState>): void
```

Register playback state changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Array&lt;string> | Yes | The properties of {@link AVPlaybackState}  that you cared about |
| callback | Callback&lt;AVPlaybackState> | Yes | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onPlaybackStateChangeAll

```TypeScript
onPlaybackStateChangeAll(callback: Callback<AVPlaybackState>): void
```

Registers a callback to be invoked whenever the playback state changes

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;AVPlaybackState> | Yes | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onQueueItemsChange

```TypeScript
onQueueItemsChange(callback: Callback<Array<AVQueueItem>>): void
```

Register session playlist change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVQueueItem>> | Yes | Used to handle playlist changed.  The callback provides the new array of AVQueueItem {@link AVQueueItem} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onQueueTitleChange

```TypeScript
onQueueTitleChange(callback: Callback<string>): void
```

Register the name of session playlist change callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | Used to handle name of playlist changed.  The callback provides the new name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onSessionDestroy

```TypeScript
onSessionDestroy(callback: NoParamCallback): void
```

Register current session destroyed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | NoParamCallback | Yes | The callback used to handle current session destroyed event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onSessionEvent

```TypeScript
onSessionEvent(callback: EventProcess): void
```

Register session event callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | EventProcess | Yes | The callback used to handle session event changed event.  The callback function provides the event string and key-value pair parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onSupportedLoopModesChange

```TypeScript
onSupportedLoopModesChange(callback: Callback<Array<LoopMode>>): void
```

Register listener for supported loop modes.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;LoopMode>> | Yes | Callback used to retrieve supported loop modes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600103 | The session controller does not exist. |

## onSupportedPlaySpeedsChange

```TypeScript
onSupportedPlaySpeedsChange(callback: Callback<Array<double>>): void
```

Register listener for supported play speeds.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;double>> | Yes | Callback used to retrieve supported play speeds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception |
| 6600103 | The session controller does not exist. |

## onValidCommandChange

```TypeScript
onValidCommandChange(callback: Callback<Array<AVControlCommandType>>): void
```

Register the valid commands of the session changed callback

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVControlCommandType>> | Yes | The callback used to handle the changes.  The callback function provides an array of AVControlCommandType. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## sendAVKeyEvent

```TypeScript
sendAVKeyEvent(event: KeyEvent, callback: AsyncCallback<void>): void
```

Send media key event to this session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | KeyEvent | Yes | The KeyEvent |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 600101 | Session service exception. |
| 600102 | The session does not exist. |
| 600103 | The session controller does not exist. |
| 600105 | Invalid session command. |
| 600106 | The session is not activated. |

## sendAVKeyEvent

```TypeScript
sendAVKeyEvent(event: KeyEvent): Promise<void>
```

Send media key event to this session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | KeyEvent | Yes | The KeyEvent |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 600101 | Session service exception. |
| 600102 | The session does not exist. |
| 600103 | The session controller does not exist. |
| 600105 | Invalid session command. |
| 600106 | The session is not activated. |

## sendCommonCommand

```TypeScript
sendCommonCommand(command: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Send common commands to this session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | The command name to be sent. |
| args | {[key: string]: Object} | Yes | The parameters of session event |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendCommonCommand

```TypeScript
sendCommonCommand(command: string, args: Record<string, Object>, callback: AsyncCallback<void>): void
```

Send common commands to this session

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | The command name to be sent. |
| args | Record&lt;string, Object> | Yes | The parameters of session event |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendCommonCommand

```TypeScript
sendCommonCommand(command: string, args: {[key: string]: Object}): Promise<void>
```

Send common commands to this session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | The command name to be sent. |
| args | {[key: string]: Object} | Yes | The parameters of session event |

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
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendCommonCommand

```TypeScript
sendCommonCommand(command: string, args: Record<string, Object>): Promise<void>
```

Send common commands to this session

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | string | Yes | The command name to be sent. |
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
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendControlCommand

```TypeScript
sendControlCommand(command: AVControlCommand, callback: AsyncCallback<void>): void
```

Send control commands to this session

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | AVControlCommand | Yes | The command to be sent. See {@link AVControlCommand} |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendControlCommand

```TypeScript
sendControlCommand(command: AVControlCommand): Promise<void>
```

Send control commands to this session

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | AVControlCommand | Yes | The command to be sent. See {@link AVControlCommand} |

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
| 6600103 | The session controller does not exist. |
| 6600105 | Invalid session command. |
| 6600106 | The session is not activated. |
| 6600107 | Too many commands or events. |

## sendCustomData

```TypeScript
sendCustomData(data: Record<string, Object>): Promise<void>
```

Send custom data to this avsession.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | The custom data populated by application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void result promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6600101 | Session service exception.  You are advised to:1.Scheduled retry.2.Destroy the current session or session controller and re-create it. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

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
| 6600103 | The session controller does not exist. |
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
| 6600103 | The session controller does not exist. |
| 6600110 | The desktop lyrics feature of this application is not enabled. |
| 6600111 | The desktop lyrics feature is not supported. |

## skipToQueueItem

```TypeScript
skipToQueueItem(itemId: int, callback: AsyncCallback<void>): void
```

Set the item in the playlist to be played

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemId | int | Yes | The serial number of the item to be played |
| callback | AsyncCallback&lt;void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600103 | The session controller does not exist. |

## skipToQueueItem

```TypeScript
skipToQueueItem(itemId: int): Promise<void>
```

Set the item in the playlist to be played

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemId | int | Yes | The serial number of the item to be played |

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
| 6600103 | The session controller does not exist. |

## sessionId

```TypeScript
readonly sessionId: string
```

Unique session Id

**Type:** string

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.AVSession.Core

