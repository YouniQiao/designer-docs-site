# SystemTonePlayer (System API)

The module provides APIs for playing and configuring SMS tones and notification tones and obtaining related information. Before calling any API in SystemTonePlayer, you must use [getSystemTonePlayer](arkts-audio-systemsoundmanager-systemsoundmanager-i-sys.md#getsystemtoneplayer-1)to create a SystemTonePlayer instance.

**Since:** 11

<!--Device-unnamed-export declare interface SystemTonePlayer--><!--Device-unnamed-export declare interface SystemTonePlayer-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## getAudioVolumeScale

```TypeScript
getAudioVolumeScale(): number
```

Obtains the scale of the audio volume. This API returns the result synchronously.

**Since:** 13

<!--Device-SystemTonePlayer-getAudioVolumeScale(): double--><!--Device-SystemTonePlayer-getAudioVolumeScale(): double-End-->

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

<!--Device-SystemTonePlayer-getHapticsFeature(): systemSoundManager.ToneHapticsFeature--><!--Device-SystemTonePlayer-getHapticsFeature(): systemSoundManager.ToneHapticsFeature-End-->

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

<!--Device-SystemTonePlayer-getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>--><!--Device-SystemTonePlayer-getSupportedHapticsFeatures(): Promise<Array<systemSoundManager.ToneHapticsFeature>>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<systemSoundManager.ToneHapticsFeature>> | Promise used to return an array of the supported haptics styles. |

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

<!--Device-SystemTonePlayer-getTitle(): Promise<string>--><!--Device-SystemTonePlayer-getTitle(): Promise<string>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the title obtained. |

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

<!--Device-SystemTonePlayer-off(type: 'playFinished', callback?: Callback<int>): void--><!--Device-SystemTonePlayer-off(type: 'playFinished', callback?: Callback<int>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event **'playFinished'** is triggered when the playback is finished. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | No | Callback used to return the ID of the audio stream. If this parameter is not specified, all the subscriptions to the specified event are canceled. |

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

<!--Device-SystemTonePlayer-off(type: 'error', callback?: ErrorCallback): void--><!--Device-SystemTonePlayer-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The event **'error'** is triggered when an error occurs during ringtone playback. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used to return the error code and error information. If this parameter is not specified, all the subscriptions to the specified event are canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system App. |
| [20700002](../errorcode-audio-ringtone-sys.md#20700002-parameter-check-failed) | Parameter check error. |

## on('playFinished')

```TypeScript
on(type: 'playFinished', streamId: number, callback: Callback<number>): void
```

Subscribes to the event indicating that the ringtone playback is finished. This API uses an asynchronous callback to return the result.

The object to listen for is an audio stream specified by **streamId**. If **streamId** is set to **0**, this API subscribes to the playback complete event of all audio streams of the player.

**Since:** 18

<!--Device-SystemTonePlayer-on(type: 'playFinished', streamId: int, callback: Callback<int>): void--><!--Device-SystemTonePlayer-on(type: 'playFinished', streamId: int, callback: Callback<int>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The event **'playFinished'** is triggered when the playback is finished. |
| streamId | number | Yes | ID of the audio stream. **streamId** is obtained through [start](arkts-audio-systemtoneplayer-systemtoneplayer-i-sys.md#start-1). If **streamId** is set to **0**, the playback complete event of all audio streams of the player is subscribed to. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | Callback used to return the stream ID of the audio stream that finishes playing. |

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

<!--Device-SystemTonePlayer-on(type: 'error', callback: ErrorCallback): void--><!--Device-SystemTonePlayer-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The event **'error'** is triggered when an error occurs during ringtone playback. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback used to return the error code and error information. For details about the error codes, see [on('error')](../../apis-media-kit/arkts-apis/arkts-media-media-avplayer-i.md#on-16) of the AVPlayer. |

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

<!--Device-SystemTonePlayer-prepare(): Promise<void>--><!--Device-SystemTonePlayer-prepare(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

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

<!--Device-SystemTonePlayer-release(): Promise<void>--><!--Device-SystemTonePlayer-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

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

<!--Device-SystemTonePlayer-setAudioVolumeScale(scale: double): void--><!--Device-SystemTonePlayer-setAudioVolumeScale(scale: double): void-End-->

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

Sets a haptics style of the ringtone.

Before calling this API, call [getSupportedHapticsFeatures](arkts-audio-systemtoneplayer-systemtoneplayer-i-sys.md#getsupportedhapticsfeatures-1) to obtain the supported haptics styles. The setting fails if the haptics style to set is not supported.

**Since:** 13

<!--Device-SystemTonePlayer-setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void--><!--Device-SystemTonePlayer-setHapticsFeature(hapticsFeature: systemSoundManager.ToneHapticsFeature): void-End-->

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

<!--Device-SystemTonePlayer-start(toneOptions?: SystemToneOptions): Promise<int>--><!--Device-SystemTonePlayer-start(toneOptions?: SystemToneOptions): Promise<int>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toneOptions | [SystemToneOptions](arkts-audio-systemsoundmanager-systemtoneoptions-t-sys.md) | No | Options of the system tone. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the stream ID. |

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

<!--Device-SystemTonePlayer-stop(id: int): Promise<void>--><!--Device-SystemTonePlayer-stop(id: int): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Promise used to return the stream ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [5400102](../../apis-media-kit/errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. |

