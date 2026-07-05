# SystemTonePlayer

The module provides APIs for playing and configuring SMS tones and notification tones and obtaining related information. Before calling any API in SystemTonePlayer, you must use [getSystemTonePlayer]./../@ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getSystemTonePlayer(context: BaseContext, type: SystemToneType) to create a SystemTonePlayer instance.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## getAudioVolumeScale

```TypeScript
getAudioVolumeScale(): double
```

Obtains the scale of the audio volume. This API returns the result synchronously.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | Current audio volume. The value range is [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |

## getHapticsFeature

```TypeScript
getHapticsFeature(): systemSoundManager.ToneHapticsFeature
```

Obtains the haptics style of the ringtone. This API returns the result synchronously.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| systemSoundManager.ToneHapticsFeature | Haptics style. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 20700003 | Unsupported operation. |

## getSupportedHapticsFeatures

```TypeScript
getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>
```

Obtains the supported haptics styles. This API uses a promise to return the result.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;systemSoundManager.ToneHapticsFeature>> | Promise used to return an array of the supported  haptics styles. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 20700003 | Unsupported operation. |

## getTitle

```TypeScript
getTitle(): Promise<string>
```

Obtains the title of a system tone. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise used to return the title obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 5400103 | I/O error. |

## off('playFinished')

```TypeScript
off(type: 'playFinished', callback?: Callback<int>): void
```

Unsubscribes from the event indicating that the ringtone playback is finished. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event 'playFinished' is triggered when the playback is  finished. |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from error events that occur during ringtone playback. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The event 'error' is triggered when an error occurs during ringtone  playback. |
| callback | ErrorCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes the error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## offPlayFinished

```TypeScript
offPlayFinished(callback?: Callback<int>): void
```

Unsubscribes the play finished events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## on('playFinished')

```TypeScript
on(type: 'playFinished', streamId: int, callback: Callback<int>): void
```

Subscribes to the event indicating that the ringtone playback is finished. This API uses an asynchronous callback to return the result. The object to listen for is an audio stream specified by **streamId**. If **streamId** is set to **0**, this API subscribes to the playback complete event of all audio streams of the player.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event 'playFinished' is triggered when the playback is  finished. |
| streamId | int | Yes | ID of the audio stream. streamId is obtained through  [start](arkts-systemtoneplayer-i-sys.md#start). If streamId is set to 0, the playback complete event of all  audio streams of the player is subscribed to. |
| callback | Callback&lt;int> | Yes | Callback used to return the stream ID of the audio stream that finishes  playing. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to error events that occur during ringtone playback. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The event 'error' is triggered when an error occurs during ringtone  playback. |
| callback | ErrorCallback | Yes | Callback used to return the error code and error information. For details about  the error codes, see  [on('error')]./../@ohos.multimedia.media:media.AVPlayer.on(type: 'error', callback: ErrorCallback) of  the AVPlayer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes the error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Error callback while receiving the error event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## onPlayFinished

```TypeScript
onPlayFinished(streamId: int, callback: Callback<int>): void
```

Subscribes the play finished events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamId | int | Yes | Stream id, received from start(). |
| callback | Callback&lt;int> | Yes | Callback used to obtain the finished event. The callback info is the stream  id that is finished. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system App. |
| 20700002 | Parameter check error. |

## prepare

```TypeScript
prepare(): Promise<void>
```

Prepares to play a system tone. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 5400102 | Operation not allowed. |
| 5400103 | I/O error. |

## release

```TypeScript
release(): Promise<void>
```

Releases the system tone player. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |

## setAudioVolumeScale

```TypeScript
setAudioVolumeScale(scale: double): void
```

Sets the scale of the audio volume. No result is returned.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | double | Yes | Scale of the audio volume. The value is in the range [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |
| 20700002 | Parameter check error. For example, value is outside [0,1]. |

## setHapticsFeature

```TypeScript
setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void
```

Sets a haptics style of the ringtone. Before calling this API, call [getSupportedHapticsFeatures](arkts-systemtoneplayer-i-sys.md#getSupportedHapticsFeatures) to obtain the supported haptics styles. The setting fails if the haptics style to set is not supported.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hapticsFeature | systemSoundManager.ToneHapticsFeature | Yes | Haptics style. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |
| 20700003 | Unsupported operation. |

## start

```TypeScript
start(toneOptions?: SystemToneOptions): Promise<int>
```

Start playing the system tone. By default, the audio and haptic will not be muted. Using tone options to mute audio or haptics. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.

**Since:** 11

**Required permissions:** 

 ohos.permission.VIBRATE

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toneOptions | SystemToneOptions | No | Options of the system tone. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the stream ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |

## stop

```TypeScript
stop(id: int): Promise<void>
```

Stops playing a system tone. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | int | Yes | Promise used to return the stream ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 5400102 | Operation not allowed. |

