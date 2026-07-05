# AVCastController

AVCastController definition used to implement a remote control when a cast is connected

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

## 导入模块

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## getAVPlaybackState

```TypeScript
getAVPlaybackState(callback: AsyncCallback<AVPlaybackState>): void
```

Get the playback status of the current player

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVPlaybackState> | 是 | The triggered asyncCallback when (getAVPlaybackState). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getAVPlaybackState

```TypeScript
getAVPlaybackState(): Promise<AVPlaybackState>
```

Get the playback status of the current player

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVPlaybackState> | (AVPlaybackState) returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getCurrentItem

```TypeScript
getCurrentItem(callback: AsyncCallback<AVQueueItem>): void
```

Get the current playing item

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;AVQueueItem> | 是 | The triggered asyncCallback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getCurrentItem

```TypeScript
getCurrentItem(): Promise<AVQueueItem>
```

Get the current playing item

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVQueueItem> | (AVQueueItem) returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getRecommendedResolutionLevel

```TypeScript
getRecommendedResolutionLevel(decoderType: DecoderType): Promise<ResolutionLevel>
```

Get recommended resolution of remote player based on each decoder.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| decoderType | DecoderType | 是 | The decoder type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResolutionLevel> | ResolutionLevel returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getSupportedDecoders

```TypeScript
getSupportedDecoders(): Promise<Array<DecoderType>>
```

Get supported decoders of remote player.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;DecoderType>> | (DecoderType) returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getSupportedHdrCapabilities

```TypeScript
getSupportedHdrCapabilities(): Promise<Array<hdrCapability.HDRFormat>>
```

Get supported hdr capabilities of remote player.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;hdrCapability.HDRFormat>> | HDRFormat returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getSupportedPlaySpeeds

```TypeScript
getSupportedPlaySpeeds(): Promise<Array<double>>
```

Get supported speed of remote player.

**起始版本：** 19

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;double>> | supported speed returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## getValidCommands

```TypeScript
getValidCommands(callback: AsyncCallback<Array<AVCastControlCommandType>>): void
```

Get commands supported by the current cast controller

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;AVCastControlCommandType>> | 是 | The triggered asyncCallback when (  getValidCommands). |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |

## getValidCommands

```TypeScript
getValidCommands(): Promise<Array<AVCastControlCommandType>>
```

Get commands supported by the current cast controller

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;AVCastControlCommandType>> | array of AVCastControlCommandType promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |

## off('playbackStateChange')

```TypeScript
off(type: 'playbackStateChange', callback?: (state: AVPlaybackState) => void): void
```

Unregister playback state changed callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playbackStateChange' | 是 |  |
| callback | (state: AVPlaybackState) => void | 否 | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off

```TypeScript
off(type: 'mediaItemChange'): void
```

Unregister listener for current media item playback events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mediaItemChange' | 是 | Type of the playback event to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off

```TypeScript
off(type: 'playNext'): void
```

Unregister playback command callback sent by remote side or media center. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playNext' | 是 | Type of the 'playNext' event to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off

```TypeScript
off(type: 'playPrevious'): void
```

Unregister playback command callback sent by remote side or media center. When canceling the callback, need to update the supported commands list.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playPrevious' | 是 | Type of the 'playPrevious' to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off('requestPlay')

```TypeScript
off(type: 'requestPlay', callback?: Callback<AVQueueItem>): void
```

Unregister requested playback command callback sent by remote side or media center.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'requestPlay' | 是 | Type of the 'requestPlay' to listen for. |
| callback | Callback&lt;AVQueueItem> | 否 | Used to handle 'requestPlay' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off('endOfStream')

```TypeScript
off(type: 'endOfStream', callback?: Callback<void>): void
```

Unregister endOfStream state callback.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'endOfStream' | 是 | Type of the 'endOfStream' to listen for. |
| callback | Callback&lt;void> | 否 | Used to handle 'endOfStream' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off

```TypeScript
off(type: 'seekDone'): void
```

Unregister listens for playback events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'seekDone' | 是 | Type of the 'seekDone' to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off('validCommandChange')

```TypeScript
off(type: 'validCommandChange', callback?: Callback<Array<AVCastControlCommandType>>)
```

Unregister the valid commands of the casted session changed callback

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'validCommandChange' | 是 | 'validCommandChange' |
| callback | Callback&lt;Array&lt;AVCastControlCommandType>> | 否 | The callback used to handle the changes.  The callback function provides an array of AVCastControlCommandType. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## off

```TypeScript
off(type: 'videoSizeChange'): void
```

Unregister listener for video size change event, used at remote side.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'videoSizeChange' | 是 | Type of the 'videoSizeChange' to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

**示例：**

```TypeScript
avCastController.off('videoSizeChange');

```

## off

```TypeScript
off(type: 'error'): void
```

Unregister listens for playback error events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Type of the 'error' to listen for. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupport format. |
| 6600101 | Session service exception |

## off('castControlGenericError')

```TypeScript
off(type: 'castControlGenericError', callback?: ErrorCallback): void
```

Unregister listeners for cast control generic error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlGenericError' | 是 | Type of the 'castControlGenericError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('castControlIoError')

```TypeScript
off(type: 'castControlIoError', callback?: ErrorCallback): void
```

Unregister listeners for cast control input/output error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlIoError' | 是 | Type of the 'castControlIoError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('castControlParsingError')

```TypeScript
off(type: 'castControlParsingError', callback?: ErrorCallback): void
```

Unregister listeners for cast control parsing error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlParsingError' | 是 | Type of the 'castControlParsingError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('castControlDecodingError')

```TypeScript
off(type: 'castControlDecodingError', callback?: ErrorCallback): void
```

Unregister listeners for cast control decoding error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlDecodingError' | 是 | Type of the 'castControlDecodingError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('castControlAudioRendererError')

```TypeScript
off(type: 'castControlAudioRendererError', callback?: ErrorCallback): void
```

Unregister listeners for cast control audio renderer error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlAudioRendererError' | 是 | Type of the 'castControlAudioRendererError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('castControlDrmError')

```TypeScript
off(type: 'castControlDrmError', callback?: ErrorCallback): void
```

Unregister listeners for cast control drm error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlDrmError' | 是 | Type of the 'castControlDrmError' to listen for. |
| callback | ErrorCallback | 否 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |

## off('keyRequest')

```TypeScript
off(type: 'keyRequest', callback?: KeyRequestCallback): void
```

Unregister listener for drm key request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyRequest' | 是 | Type of the 'keyRequest' to listen for. |
| callback | KeyRequestCallback | 否 | Callback used to request drm key. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## off('customDataChange')

```TypeScript
off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void
```

Unregister listener for custom data sent from remote device.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'customDataChange' | 是 | Type of the 'customDataChange' to listen for. |
| callback | Callback&lt;Record&lt;string, Object>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offCastControlAudioRendererError

```TypeScript
offCastControlAudioRendererError(callback?: ErrorCallback): void
```

Unregister listeners for cast control audio renderer error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCastControlDecodingError

```TypeScript
offCastControlDecodingError(callback?: ErrorCallback): void
```

Unregister listeners for cast control decoding error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCastControlDrmError

```TypeScript
offCastControlDrmError(callback?: ErrorCallback): void
```

Unregister listeners for cast control drm error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCastControlGenericError

```TypeScript
offCastControlGenericError(callback?: ErrorCallback): void
```

Unregister listeners for cast control generic error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCastControlIoError

```TypeScript
offCastControlIoError(callback?: ErrorCallback): void
```

Unregister listeners for cast control input/output error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCastControlParsingError

```TypeScript
offCastControlParsingError(callback?: ErrorCallback): void
```

Unregister listeners for cast control parsing error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 否 |  |

## offCustomDataChange

```TypeScript
offCustomDataChange(callback?: Callback<Record<string, Object>>): void
```

Unregister listener for custom data sent from remote device.

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

## offEndOfStream

```TypeScript
offEndOfStream(callback?: NoParamCallback): void
```

Unregister endOfStream state callback.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offError

```TypeScript
offError(): void
```

Unregister listens for playback error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupport format. |
| 6600101 | Session service exception |

## offKeyRequest

```TypeScript
offKeyRequest(callback?: KeyRequestCallback): void
```

Unregister listener for drm key request.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | KeyRequestCallback | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offMediaItemChange

```TypeScript
offMediaItemChange(): void
```

Unregister listener for current media item playback events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offPlaybackStateChange

```TypeScript
offPlaybackStateChange(callback?: Callback<AVPlaybackState>): void
```

Unregister playback state changed callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVPlaybackState> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offPlayNext

```TypeScript
offPlayNext(): void
```

Unregister playback command callback sent by remote side or media center. When canceling the callback, need to update the supported commands list.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offPlayPrevious

```TypeScript
offPlayPrevious(): void
```

Unregister playback command callback sent by remote side or media center. When canceling the callback, need to update the supported commands list.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offRequestPlay

```TypeScript
offRequestPlay(callback?: Callback<AVQueueItem>): void
```

Unregister requested playback command callback sent by remote side or media center.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVQueueItem> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offSeekDone

```TypeScript
offSeekDone(): void
```

Unregister listens for playback events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## offValidCommandChange

```TypeScript
offValidCommandChange(callback?: Callback<Array<AVCastControlCommandType>>): void
```

Unregister the valid commands of the casted session changed callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVCastControlCommandType>> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## offVideoSizeChange

```TypeScript
offVideoSizeChange(): void
```

Unregister listener for video size change event, used at remote side.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## on('playbackStateChange')

```TypeScript
on(type: 'playbackStateChange', filter: Array<keyof AVPlaybackState> | 'all', callback: (state: AVPlaybackState) => void): void
```

Register playback state changed callback

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playbackStateChange' | 是 |  |
| filter | Array&lt;keyof AVPlaybackState> \| 'all' | 是 | The properties of {@link AVPlaybackState} that you cared  about |
| callback | (state: AVPlaybackState) => void | 是 | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('mediaItemChange')

```TypeScript
on(type: 'mediaItemChange', callback: Callback<AVQueueItem>): void
```

Register listener for current media item playback events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'mediaItemChange' | 是 | Type of the playback event to listen for. |
| callback | Callback&lt;AVQueueItem> | 是 | Callback used to listen for current item changed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('playNext')

```TypeScript
on(type: 'playNext', callback: Callback<void>): void
```

Register playback command callback sent by remote side or media center. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playNext' | 是 | Type of the 'playNext' event to listen for. |
| callback | Callback&lt;void> | 是 | Used to handle 'playNext' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('playPrevious')

```TypeScript
on(type: 'playPrevious', callback: Callback<void>): void
```

Register playback command callback sent by remote side or media center. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'playPrevious' | 是 | Type of the 'playPrevious' to listen for. |
| callback | Callback&lt;void> | 是 | Used to handle 'playPrevious' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('requestPlay')

```TypeScript
on(type: 'requestPlay', callback: Callback<AVQueueItem>): void
```

Register requested playback command callback sent by remote side or media center. The AVQueueItem may include the requested assetId, starting position and other configurations.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'requestPlay' | 是 | Type of the 'requestPlay' to listen for. |
| callback | Callback&lt;AVQueueItem> | 是 | Used to handle 'requestPlay' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('endOfStream')

```TypeScript
on(type: 'endOfStream', callback: Callback<void>): void
```

Register endOfStream state callback. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'endOfStream' | 是 | Type of the 'endOfStream' to listen for. |
| callback | Callback&lt;void> | 是 | Used to handle 'endOfStream' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('seekDone')

```TypeScript
on(type: 'seekDone', callback: Callback<int>): void
```

Register listens for playback events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'seekDone' | 是 | Type of the 'seekDone' to listen for. |
| callback | Callback&lt;int> | 是 | Callback used to listen for the playback seekDone event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

## on('validCommandChange')

```TypeScript
on(type: 'validCommandChange', callback: Callback<Array<AVCastControlCommandType>>)
```

Register the valid commands of the casted session changed callback

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'validCommandChange' | 是 | 'validCommandChange' |
| callback | Callback&lt;Array&lt;AVCastControlCommandType>> | 是 | The callback used to handle the changes.  The callback function provides an array of AVCastControlCommandType. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## on('videoSizeChange')

```TypeScript
on(type: 'videoSizeChange', callback: (width: int, height: int) => void): void
```

Register listener for video size change event, used at remote side.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'videoSizeChange' | 是 | Type of the 'videoSizeChange' to listen for. |
| callback | (width: int, height: int) => void | 是 | Callback used to return video size. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

**示例：**

```TypeScript
avCastController.on('videoSizeChange', (width: number, height: number) => {
  console.info(`width ：${width} `);
  console.info(`height：${height} `);
});

```

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Register listeners for playback error events.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'error' | 是 | Type of the 'error' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the playback error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupport format. |
| 6600101 | Session service exception |

## on('castControlGenericError')

```TypeScript
on(type: 'castControlGenericError', callback: ErrorCallback): void
```

Register listeners for cast control generic error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlGenericError' | 是 | Type of the 'castControlGenericError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6611000 | The error code for cast control is unspecified. |
| 6611001 | An unspecified error occurs in the remote player. |
| 6611002 | The playback position falls behind the live window. |
| 6611003 | The process of cast control times out. |
| 6611004 | The runtime check failed. |
| 6611100 | Cross-device data transmission is locked. |
| 6611101 | The specified seek mode is not supported. |
| 6611102 | The position to seek to is out of the range of the media asset  or the specified seek mode is not supported. |
| 6611103 | The specified playback mode is not supported. |
| 6611104 | The specified playback speed is not supported. |
| 6611105 | The action failed because either the media source device or the media sink  device has been revoked. |
| 6611106 | The parameter is invalid, for example, the url is illegal to play. |
| 6611107 | Allocation of memory failed. |
| 6611108 | Operation is not allowed. |

## on('castControlIoError')

```TypeScript
on(type: 'castControlIoError', callback: ErrorCallback): void
```

Register listeners for cast control input/output error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlIoError' | 是 | Type of the 'castControlIoError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6612000 | An unspecified input/output error occurs. |
| 6612001 | Network connection failure. |
| 6612002 | Network timeout. |
| 6612003 | Invalid "Content-Type" HTTP header. |
| 6612004 | The HTTP server returns an unexpected HTTP response status code. |
| 6612005 | The file does not exist. |
| 6612006 | No permission is granted to perform the IO operation. |
| 6612007 | Access to cleartext HTTP traffic is not allowed by the app's network security  configuration. |
| 6612008 | Reading data out of the data bound. |
| 6612100 | The media does not contain any contents that can be played. |
| 6612101 | The media cannot be read, for example, because of dust or scratches. |
| 6612102 | This resource is already in use. |
| 6612103 | The content using the validity interval has expired. |
| 6612104 | Using the requested content to play is not allowed. |
| 6612105 | The use of the allowed content cannot be verified. |
| 6612106 | The number of times this content has been used as requested has reached the  maximum allowed number of uses. |
| 6612107 | An error occurs when sending packet from source device to sink device. |

## on('castControlParsingError')

```TypeScript
on(type: 'castControlParsingError', callback: ErrorCallback): void
```

Register listeners for cast control parsing error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlParsingError' | 是 | Type of the 'castControlParsingError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6613000 | Unspecified error related to content parsing. |
| 6613001 | Parsing error associated with media container format bit streams. |
| 6613002 | Parsing error associated with the media manifest. |
| 6613003 | An error occurs when attempting to extract a file with an unsupported media  container format  or an unsupported media container feature. |
| 6613004 | Unsupported feature in the media manifest. |

## on('castControlDecodingError')

```TypeScript
on(type: 'castControlDecodingError', callback: ErrorCallback): void
```

Register listeners for cast control decoding error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlDecodingError' | 是 | Type of the 'castControlDecodingError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6614000 | Unspecified decoding error. |
| 6614001 | Decoder initialization failed. |
| 6614002 | Decoder query failed. |
| 6614003 | Decoding the media samples failed. |
| 6614004 | The format of the content to decode exceeds the capabilities of the device. |
| 6614005 | The format of the content to decode is not supported. |

## on('castControlAudioRendererError')

```TypeScript
on(type: 'castControlAudioRendererError', callback: ErrorCallback): void
```

Register listeners for cast control audio renderer error error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlAudioRendererError' | 是 | Type of the 'castControlAudioRendererError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6615000 | Unspecified errors related to the audio renderer. |
| 6615001 | Initializing the audio renderer failed. |
| 6615002 | The audio renderer fails to write data. |

## on('castControlDrmError')

```TypeScript
on(type: 'castControlDrmError', callback: ErrorCallback): void
```

Register listeners for cast control drm error events.

**起始版本：** 13

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'castControlDrmError' | 是 | Type of the 'castControlDrmError' to listen for. |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter check failed. 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 6616000 | Unspecified error related to DRM. |
| 6616001 | The chosen DRM protection scheme is not supported by the device. |
| 6616002 | Device provisioning failed. |
| 6616003 | The DRM-protected content to play is incompatible. |
| 6616004 | Failed to obtain a license. |
| 6616005 | The operation is disallowed by the license policy. |
| 6616006 | An error occurs in the DRM system. |
| 6616007 | The device has revoked DRM privileges. |
| 6616008 | The DRM license being loaded into the open DRM session has expired. |
| 6616100 | An error occurs when the DRM processes the key response. |

## on('keyRequest')

```TypeScript
on(type: 'keyRequest', callback: KeyRequestCallback): void
```

Register listener for drm key request.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'keyRequest' | 是 | Type of the 'keyRequest' to listen for. |
| callback | KeyRequestCallback | 是 | Callback used to request drm key. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 6600101 | Session service exception |

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

## onCastControlAudioRendererError

```TypeScript
onCastControlAudioRendererError(callback: ErrorCallback): void
```

Register listeners for cast control audio renderer error error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6615000 | Unspecified errors related to the audio renderer. |
| 6615001 | Initializing the audio renderer failed. |
| 6615002 | The audio renderer fails to write data. |

## onCastControlDecodingError

```TypeScript
onCastControlDecodingError(callback: ErrorCallback): void
```

Register listeners for cast control decoding error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6614000 | Unspecified decoding error. |
| 6614001 | Decoder initialization failed. |
| 6614002 | Decoder query failed. |
| 6614003 | Decoding the media samples failed. |
| 6614004 | The format of the content to decode exceeds the capabilities of the device. |
| 6614005 | The format of the content to decode is not supported. |

## onCastControlDrmError

```TypeScript
onCastControlDrmError(callback: ErrorCallback): void
```

Register listeners for cast control drm error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6616000 | Unspecified error related to DRM. |
| 6616001 | The chosen DRM protection scheme is not supported by the device. |
| 6616002 | Device provisioning failed. |
| 6616003 | The DRM-protected content to play is incompatible. |
| 6616004 | Failed to obtain a license. |
| 6616005 | The operation is disallowed by the license policy. |
| 6616006 | An error occurs in the DRM system. |
| 6616007 | The device has revoked DRM privileges. |
| 6616008 | The DRM license being loaded into the open DRM session has expired. |
| 6616100 | An error occurs when the DRM processes the key response. |

## onCastControlGenericError

```TypeScript
onCastControlGenericError(callback: ErrorCallback): void
```

Register listeners for cast control generic error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6611000 | The error code for cast control is unspecified. |
| 6611001 | An unspecified error occurs in the remote player. |
| 6611002 | The playback position falls behind the live window. |
| 6611003 | The process of cast control times out. |
| 6611004 | The runtime check failed. |
| 6611100 | Cross-device data transmission is locked. |
| 6611101 | The specified seek mode is not supported. |
| 6611102 | The position to seek to is out of the range of the media asset  or the specified seek mode is not supported. |
| 6611103 | The specified playback mode is not supported. |
| 6611104 | The specified playback speed is not supported. |
| 6611105 | The action failed because either the media source device  or the media sink device has been revoked. |
| 6611106 | The parameter is invalid, for example, the url is illegal to play. |
| 6611107 | Allocation of memory failed. |
| 6611108 | Operation is not allowed. |

## onCastControlIoError

```TypeScript
onCastControlIoError(callback: ErrorCallback): void
```

Register listeners for cast control input/output error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6612000 | An unspecified input/output error occurs. |
| 6612001 | Network connection failure. |
| 6612002 | Network timeout. |
| 6612003 | Invalid "Content-Type" HTTP header. |
| 6612004 | The HTTP server returns an unexpected HTTP response status code. |
| 6612005 | The file does not exist. |
| 6612006 | No permission is granted to perform the IO operation. |
| 6612007 | Access to cleartext HTTP traffic is not allowed  by the app's network security configuration. |
| 6612008 | Reading data out of the data bound. |
| 6612100 | The media does not contain any contents that can be played. |
| 6612101 | The media cannot be read, for example, because of dust or scratches. |
| 6612102 | This resource is already in use. |
| 6612103 | The content using the validity interval has expired. |
| 6612104 | Using the requested content to play is not allowed. |
| 6612105 | The use of the allowed content cannot be verified. |
| 6612106 | The number of times this content has been used as requested  has reached the maximum allowed number of uses. |
| 6612107 | An error occurs when sending packet from source device to sink device. |

## onCastControlParsingError

```TypeScript
onCastControlParsingError(callback: ErrorCallback): void
```

Register listeners for cast control parsing error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the cast control error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6613000 | Unspecified error related to content parsing. |
| 6613001 | Parsing error associated with media container format bit streams. |
| 6613002 | Parsing error associated with the media manifest. |
| 6613003 | An error occurs when attempting to extract a file  with an unsupported media container format  or an unsupported media container feature. |
| 6613004 | Unsupported feature in the media manifest. |

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

## onEndOfStream

```TypeScript
onEndOfStream(callback: NoParamCallback): void
```

Register endOfStream state callback. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle 'endOfStream' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Register listeners for playback error events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ErrorCallback | 是 | Callback used to listen for the playback error event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400101 | No memory. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |
| 5400104 | Time out. |
| 5400105 | Service died. |
| 5400106 | Unsupport format. |
| 6600101 | Session service exception |

## onKeyRequest

```TypeScript
onKeyRequest(callback: KeyRequestCallback): void
```

Register listener for drm key request.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | KeyRequestCallback | 是 | Callback used to request drm key. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onMediaItemChange

```TypeScript
onMediaItemChange(callback: Callback<AVQueueItem>): void
```

Register listener for current media item playback events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVQueueItem> | 是 | Callback used to listen for current item changed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onPlaybackStateChange

```TypeScript
onPlaybackStateChange(filter: Array<string>, callback: Callback<AVPlaybackState>): void
```

Register playback state changed callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filter | Array&lt;string> | 是 | The properties of {@link AVPlaybackState} that you cared about |
| callback | Callback&lt;AVPlaybackState> | 是 | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. 1. Required parameters are missing.  2. Provided parameters have invalid types. |

## onPlaybackStateChangeAll

```TypeScript
onPlaybackStateChangeAll(callback: Callback<AVPlaybackState>): void
```

Registers a callback to be invoked whenever the playback state changes

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVPlaybackState> | 是 | The callback used to handle playback state changed event.  The callback function provides the {@link AVPlaybackState} parameter. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. 1. Required parameters are missing.  2. Provided parameters have invalid types. |

## onPlayNext

```TypeScript
onPlayNext(callback: NoParamCallback): void
```

Register playback command callback sent by remote side or media center. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle 'playNext' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onPlayPrevious

```TypeScript
onPlayPrevious(callback: NoParamCallback): void
```

Register playback command callback sent by remote side or media center. Application needs update the new media resource when receive these commands by using playItem.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | NoParamCallback | 是 | Used to handle 'playPrevious' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onRequestPlay

```TypeScript
onRequestPlay(callback: Callback<AVQueueItem>): void
```

Register requested playback command callback sent by remote side or media center. The AVQueueItem may include the requested assetId, starting position and other configurations.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVQueueItem> | 是 | Used to handle 'requestPlay' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onSeekDone

```TypeScript
onSeekDone(callback: Callback<int>): void
```

Register listens for playback events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | 是 | Callback used to listen for the playback seekDone event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## onValidCommandChange

```TypeScript
onValidCommandChange(callback: Callback<Array<AVCastControlCommandType>>): void
```

Register the valid commands of the casted session changed callback

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Array&lt;AVCastControlCommandType>> | 是 | The callback used to handle the changes.  The callback function provides an array of AVCastControlCommandType. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |
| 6600103 | The session controller does not exist. |

## onVideoSizeChange

```TypeScript
onVideoSizeChange(callback: VideoSizeEvent): void
```

Register listener for video size change event, used at remote side.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | VideoSizeEvent | 是 | Callback used to return video size. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception |

## prepare

```TypeScript
prepare(item: AVQueueItem, callback: AsyncCallback<void>): void
```

Load the current item and mediaUri can be null, this is needed for sink media information displaying

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| item | AVQueueItem | 是 | media item info. |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600109 | The remote connection is not established |

## prepare

```TypeScript
prepare(item: AVQueueItem): Promise<void>
```

Load the current item and mediaUri can be null, this is needed for sink media information displaying

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| item | AVQueueItem | 是 | media item info. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600109 | The remote connection is not established |

## processMediaKeyResponse

```TypeScript
processMediaKeyResponse(assetId: string, response: Uint8Array): Promise<void>
```

Process the response corresponding to the media key request obtained by the application.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| assetId | string | 是 | The assetId of resource which provides the response. |
| response | Uint8Array | 是 | Response corresponding to the request. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Destroy the controller

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |

## release

```TypeScript
release(): Promise<void>
```

Destroy the controller

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6600101 | Session service exception. |

## sendControlCommand

```TypeScript
sendControlCommand(command: AVCastControlCommand, callback: AsyncCallback<void>): void
```

Send control commands to remote player

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | AVCastControlCommand | 是 | The command to be send. |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600105 | Invalid session command |
| 6600109 | The remote connection is not established |

## sendControlCommand

```TypeScript
sendControlCommand(command: AVCastControlCommand): Promise<void>
```

Send control commands to remote player

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | AVCastControlCommand | 是 | The command to be send. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600105 | Invalid session command |
| 6600109 | The remote connection is not established |

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

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void
```

Set a surface instance to display playing view, used at sink side.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | surface id, video player will use this id get a surface instance. |
| callback | AsyncCallback&lt;void> | 是 | A callback instance used to return when set surface completed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600109 | The remote connection is not established |

**示例：**

```TypeScript
import { media } from '@kit.MediaKit';

let surfaceID: string = '';
media.createAVRecorder().then((avRecorder) => {
  avRecorder.getInputSurface((surfaceId: string) => {
    console.info('Succeeded in getting input surface.');
    surfaceID = surfaceId;
    if (surfaceID) {
      avCastController.setDisplaySurface(surfaceID, () => {
          console.info('Succeeded in setting display surface.');
      });
    }
  });
})

```

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string): Promise<void>
```

Set a surface instance to display playing view, used at sink side.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| surfaceId | string | 是 | surface id, video player will use this id get a surface instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600109 | The remote connection is not established |

**示例：**

```TypeScript
import { media } from '@kit.MediaKit';

let surfaceID: string = '';
media.createAVRecorder().then((avRecorder) => {
  avRecorder.getInputSurface((surfaceId: string) => {
    console.info('Succeeded in getting input surface.');
    surfaceID = surfaceId;
    if (surfaceID) {
      avCastController.setDisplaySurface(surfaceID).then(() => {
        console.info('Succeeded in setting display surface.');
      });
    }
  });
})

```

## start

```TypeScript
start(item: AVQueueItem, callback: AsyncCallback<void>): void
```

Play the current item, should contain mediaUri otherwise the playback will fail.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| item | AVQueueItem | 是 | media item info. |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600109 | The remote connection is not established |

## start

```TypeScript
start(item: AVQueueItem): Promise<void>
```

Play the current item, should contain mediaUri otherwise the playback will fail.

**起始版本：** 10

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVCast

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| item | AVQueueItem | 是 | media item info. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception |
| 6600109 | The remote connection is not established |

