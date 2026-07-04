# SystemTonePlayer (System API)

The module provides APIs for playing and configuring SMS tones and notification tones and obtaining related information. Before calling any API in SystemTonePlayer, you must use [getSystemTonePlayer](arkts-audio-systemsoundmanager-i-sys.md#getsystemtoneplayer-1) to create a SystemTonePlayer instance.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## getAudioVolumeScale

```TypeScript
getAudioVolumeScale(): number
```

Obtains the scale of the audio volume. This API returns the result synchronously.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Current audio volume. The value range is [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

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
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [20700003](../errorcode-audio-ringtone-sys.md#20700003-operation-not-supported) | Unsupported operation. |

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
| Promise&lt;Array&lt;systemSoundManager.ToneHapticsFeature&gt;&gt; | Promise used to return an array of the supportedhaptics styles. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [20700003](../errorcode-audio-ringtone-sys.md#20700003-operation-not-supported) | Unsupported operation. |

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
| Promise&lt;string&gt; | Promise used to return the title obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [5400103](../../apis-media-kit/errorcode-media.md#5400103-io-error) | I/O error. |

## off('playFinished')

```TypeScript
off(type: 'playFinished', callback?: Callback<number>): void
```

Unsubscribes from the event indicating that the ringtone playback is finished. This API uses an asynchronous callback to return the result.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event **'playFinished'** is triggered when the playback isfinished. |
| callback | Callback&lt;number&gt; | No | Callback used to return the ID of the audio stream. If this parameter is notspecified, all the subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. |

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
| type | 'error' | Yes | Event type. The event **'error'** is triggered when an error occurs during ringtoneplayback. |
| callback | ErrorCallback | No | Callback used to return the error code and error information. If thisparameter is not specified, all the subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. |

## on('playFinished')

```TypeScript
on(type: 'playFinished', streamId: number, callback: Callback<number>): void
```

Subscribes to the event indicating that the ringtone playback is finished. This API uses an asynchronous callback to return the result. The object to listen for is an audio stream specified by **streamId**. If **streamId** is set to **0**, this API subscribes to the playback complete event of all audio streams of the player.

**Since:** 18

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event **'playFinished'** is triggered when the playback isfinished. |
| streamId | number | Yes | ID of the audio stream. **streamId** is obtained through[start](arkts-audio-systemtoneplayer-i-sys.md#start-1). If **streamId** is set to **0**, the playback complete event of allaudio streams of the player is subscribed to. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the stream ID of the audio stream that finishesplaying. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. |

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
| type | 'error' | Yes | Event type. The event **'error'** is triggered when an error occurs during ringtoneplayback. |
| callback | ErrorCallback | Yes | Callback used to return the error code and error information. For details aboutthe error codes, see[on('error')](../../apis-media-kit/arkts-apis/arkts-media-avplayer-i.md#on-16) ofthe AVPlayer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. |

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
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |
| [5400103](../../apis-media-kit/errorcode-media.md#5400103-io-error) | I/O error. |

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
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |

## setAudioVolumeScale

```TypeScript
setAudioVolumeScale(scale: number): void
```

Sets the scale of the audio volume. No result is returned.

**Since:** 13

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | Scale of the audio volume. The value is in the range [0, 1]. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. For example, value is outside [0,1]. |

## setHapticsFeature

```TypeScript
setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void
```

Sets a haptics style of the ringtone. Before calling this API, call [getSupportedHapticsFeatures](arkts-audio-systemtoneplayer-i-sys.md#getsupportedhapticsfeatures-1) to obtain the supported haptics styles. The setting fails if the haptics style to set is not supported.

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
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |
| [20700003](../errorcode-audio-ringtone-sys.md#20700003-operation-not-supported) | Unsupported operation. |

## start

```TypeScript
start(toneOptions?: SystemToneOptions): Promise<number>
```

Start playing the system tone. By default, the audio and haptic will not be muted. Using tone options to mute audio or haptics. If haptics is needed, caller should have the permission of ohos.permission.VIBRATE.

**Since:** 11

**Required permissions:** ohos.permission.VIBRATE

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toneOptions | SystemToneOptions | No | Options of the system tone. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the stream ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

## stop

```TypeScript
stop(id: number): Promise<void>
```

Stops playing a system tone. This API uses a promise to return the result.

**Since:** 11

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Promise used to return the stream ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

