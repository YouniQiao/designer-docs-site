# RingtonePlayer

Provides APIs for setting and obtaining ringtone parameters as well as playing and stopping ringtones. Before calling any API in RingtonePlayer, you must use [getRingtonePlayer]./../@ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getRingtonePlayer(context: BaseContext, type: RingtoneType) to obtain a RingtonePlayer instance.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

## configure

```TypeScript
configure(options: RingtoneOptions, callback: AsyncCallback<void>): void
```

Sets ringtone parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RingtoneOptions | Yes | Ringtone parameters. |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## configure

```TypeScript
configure(options: RingtoneOptions): Promise<void>
```

Sets ringtone parameters. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RingtoneOptions | Yes | Ringtone parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void
```

Obtains the information about the audio renderer used by the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioRendererInfo> | Yes | Callback used to return the result. If the operation  is successful, err is undefined and data is the renderer information obtained; otherwise, err  is an error object. |

## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(): Promise<audio.AudioRendererInfo>
```

Obtains the information about the audio renderer used by the ringtone. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;audio.AudioRendererInfo> | Promise used to return the renderer information. |

## getTitle

```TypeScript
getTitle(callback: AsyncCallback<string>): void
```

Obtains the title of the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | Callback used to return the result. If the operation is successful,  err is undefined and data is the title obtained; otherwise, err is an error object. |

## getTitle

```TypeScript
getTitle(): Promise<string>
```

Obtains the title of the ringtone. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise used to return the title obtained. |

## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event 'audioInterrupt' is triggered when the audio focus is  changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAudioInterrupt

```TypeScript
offAudioInterrupt(): void
```

Unsubscribes to audio interrupt events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event 'audioInterrupt' is triggered when the audio focus is  changed. |
| callback | Callback&lt;audio.InterruptEvent> | Yes | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void
```

Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is triggered when audio playback is interrupted.

**Since:** 23

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.InterruptEvent> | Yes | Callback used to listen for interrupt callback. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the ringtone player. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases the ringtone player. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts playing the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## start

```TypeScript
start(): Promise<void>
```

Starts playing the ringtone. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops playing the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops playing the ringtone. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## state

```TypeScript
readonly state: media.AVPlayerState
```

Gets player state.

**Type:** media.AVPlayerState

**Since:** 10

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

