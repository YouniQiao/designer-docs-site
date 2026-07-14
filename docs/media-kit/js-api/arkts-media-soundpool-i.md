# SoundPool

Implements a sound pool that provides APIs for loading, unloading, playing, and stopping playing system sounds, setting the volume, and setting the number of loops. Before using these APIs, you must call [media.createSoundPool](../../../../reference/apis-media-kit/arkts-apis-media-f.md) to create a SoundPool instance. > **NOTE** > > - When using the SoundPool instance, you are advised to register the following callbacks to proactively obtain > status changes: > > - [on('loadComplete')](arkts-media-soundpool-i.md#on-1): listens for the > event indicating that the resource loading is finished. You are advised to listen for this callback to ensure that > the audio is played after being loaded. > > - > [on('playFinishedWithStreamId')](arkts-media-soundpool-i.md#on-2): > listens for the event indicating that the playback is finished and returns the stream ID of the audio that finishes > playing. > > - [on('playFinished')](arkts-media-soundpool-i.md#on-2): listens > for the event indicating that the playback is finished. > > - [on('error')](arkts-media-soundpool-i.md#on-4): listens for error events. > > - [on('errorOccurred')](arkts-media-soundpool-i.md#on-5): listens for > error events and returns [errorInfo](arkts-media-errorinfo-i.md). > > - Currently, SoundPool does not support audio focus policies such as background playback and audio interruption, or > skipping the silent frames at the beginning and end of an audio file. For details about low-latency playback using > SoundPool, see > [Using SoundPool to Play Short Sounds (ArkTS)](../../../../media/media/using-soundpool-for-playback.md).

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

## load

```TypeScript
load(uri: string, callback: AsyncCallback<number>): void
```

Loads a sound. This API uses an asynchronous callback to return the result. This API uses an asynchronous callback to obtain the resource ID. The input parameter URL is a string starting with **fd://**, which is generated based on the file descriptor (FD) obtained. This API cannot be used to load resources in the **rawfile** directory. Instead, use [load(fd: number, offset: number, length: number, callback: AsyncCallback\<number>): void](arkts-media-soundpool-i.md#load-3) or [load(fd: number, offset: number, length: number): Promise\<number>](arkts-media-soundpool-i.md#load-4) . > **NOTE** > > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to > the player, do not use the resource handle or path description in read or write operations, including but not > limited to transferring it to multiple players. > > - Competition occurs when multiple players use the same resource handle or path description to read and write > files at the same time, resulting in playback errors.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the audio file to load. Generally, the URI starts with **fd://**. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the sound ID. A valid value must be greater than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## load

```TypeScript
load(uri: string): Promise<number>
```

Loads a sound. This API uses a promise to return the result. This API uses a promise to obtain the resource ID. The input parameter URL is a string starting with **fd://**, which is generated based on the file descriptor (FD) obtained. This API cannot be used to load resources in the **rawfile** directory. Instead, use [load(fd: number, offset: number, length: number, callback: AsyncCallback\<number>): void](arkts-media-soundpool-i.md#load-3) or [load(fd: number, offset: number, length: number): Promise\<number>](arkts-media-soundpool-i.md#load-4) . > **NOTE** > > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to > the player, do not use the resource handle or path description in read or write operations, including but not > limited to transferring it to multiple players. > > - Competition occurs when multiple players use the same resource handle or path description to read and write > files at the same time, resulting in playback errors.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | URI of the audio file to load. Generally, the URI starts with **fd://**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the sound ID. A valid value must be greater than 0 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## load

```TypeScript
load(fd: number, offset: number, length: number, callback: AsyncCallback<number>): void
```

Loads a sound. This API uses an asynchronous callback to return the result. This API uses an asynchronous callback to obtain the resource ID. For the input parameter, resource information can be passed in manually or acquired automatically by reading the application's built-in resources. > **NOTE** > > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to > the player, do not use the resource handle or path description in read or write operations, including but not > limited to transferring it to multiple players. > > - Competition occurs when multiple players use the same resource handle or path description to read and write > files at the same time, resulting in playback errors.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | Resource handle, which is obtained by calling[resourceManager.getRawFd](../../../../reference/apis-localization-kit/js-apis-resource-manager.md). |
| offset | number | Yes | Resource offset, which needs to be entered based on the preset resource information. Aninvalid value causes a failure to parse audio and video resources. |
| length | number | Yes | Resource length, which needs to be entered based on the preset resource information. Aninvalid value causes a failure to parse audio and video resources. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the sound ID. A valid value must be greater than 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## load

```TypeScript
load(fd: number, offset: number, length: number): Promise<number>
```

Loads a sound. This API uses a promise to return the result. This API uses a promise to obtain the resource ID. For the input parameter, resource information can be passed in manually or acquired automatically by reading the application's built-in resources. > **NOTE** > > - After the resource handle (in the form of an FD) or path description (in the form of a URI) is transferred to > the player, do not use the resource handle or path description in read or write operations, including but not > limited to transferring it to multiple players. > > - Competition occurs when multiple players use the same resource handle or path description to read and write > files at the same time, resulting in playback errors.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | Resource handle, which is obtained by calling[resourceManager.getRawFd](../../../../reference/apis-localization-kit/js-apis-resource-manager.md) |
| offset | number | Yes | Resource offset, which needs to be entered based on the preset resource information. Aninvalid value causes a failure to parse audio and video resources. |
| length | number | Yes | Resource length, which needs to be entered based on the preset resource information. Aninvalid value causes a failure to parse audio and video resources. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the sound ID. A valid value must be greater than 0 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## off

```TypeScript
off(type: 'loadComplete'): void
```

Unsubscribes from events indicating that a sound finishes loading.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'loadComplete' | Yes | Event type. The value is fixed at **'loadComplete'**. |

## off

```TypeScript
off(type: 'playFinishedWithStreamId'): void
```

Unsubscribes from events indicating that a sound finishes playing.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinishedWithStreamId' | Yes | Event type. The value is fixed at **'playFinishedWithStreamId'**. |

## off

```TypeScript
off(type: 'playFinished'): void
```

Unsubscribes from events indicating that a sound finishes playing.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type. The value is fixed at **'playFinished'**. |

## off

```TypeScript
off(type: 'error'): void
```

Unsubscribes from error events of a SoundPool instance.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. |

## off('errorOccurred')

```TypeScript
off(type: 'errorOccurred', callback?: Callback<ErrorInfo>): void
```

Unsubscribes from error events of a SoundPool instance.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'errorOccurred' | Yes | Event type, which is **'errorOccurred'** in this case. |
| callback | Callback&lt;ErrorInfo&gt; | No | Callback used to return [ErrorInfo](arkts-media-errorinfo-i.md) if an error occursduring the use of the player. If the callback is not set, no related information is provided. |

## on('loadComplete')

```TypeScript
on(type: 'loadComplete', callback: Callback<number>): void
```

Subscribes to events indicating that a sound finishes loading. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'loadComplete' | Yes | Event type, which is **'loadComplete'** in this case. This event is triggered when asound is loaded. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the ID of the resource that has been loaded. |

## on('playFinishedWithStreamId')

```TypeScript
on(type: 'playFinishedWithStreamId', callback: Callback<number>): void
```

Subscribes to events indicating the completion of audio playback and returns the stream ID of the audio that finishes playing. This API uses an asynchronous callback to return the result. When only [on('playFinished')](arkts-media-soundpool-i.md#on-2) or [on('playFinishedWithStreamId')](arkts-media-soundpool-i.md#on-2) is subscribed to, the registered callback is triggered when the audio playback is complete. When both [on('playFinished')](arkts-media-soundpool-i.md#on-2) and [on('playFinishedWithStreamId')](arkts-media-soundpool-i.md#on-2) are subscribed to, the 'playFinishedWithStreamId' callback is triggered, but the 'playFinished' callback is not triggered, when the audio playback is complete.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinishedWithStreamId' | Yes | Event type, which is **'playFinishedWithStreamId'** in this case. Thisevent is triggered when an audio stream finishes playing, and the stream ID is returned. |
| callback | Callback&lt;number&gt; | Yes | Callback used to return the stream ID of the audio that has finished playing. |

## on('playFinished')

```TypeScript
on(type: 'playFinished', callback: Callback<void>): void
```

Subscribes to events indicating that a sound finishes playing. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFinished' | Yes | Event type, which is **'playFinished'** in this case. This event is triggered when asound finishes playing. |
| callback | Callback&lt;void&gt; | Yes | Callback used to return the result. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to error events of a [SoundPool](../../../../reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool) instance. This event is used only for error prompt. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type, which is **'error'** in this case. This event can be triggered by both useroperations and the system. |
| callback | ErrorCallback | Yes | Callback used to return the error code ID and error message. |

## on('errorOccurred')

```TypeScript
on(type: 'errorOccurred', callback: Callback<ErrorInfo>): void
```

Subscribes to error events of a [SoundPool](../../../../reference/apis-media-kit/js-apis-inner-multimedia-soundPool.md#soundpool) instance and returns [ErrorInfo](arkts-media-errorinfo-i.md) that contains the error code, error stage, resource ID, and audio stream ID. This API uses an asynchronous callback to return the result.

**Since:** 20

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'errorOccurred' | Yes | Event type, which is **'errorOccurred'** in this case. This event can betriggered by both user operations and the system. |
| callback | Callback&lt;ErrorInfo&gt; | Yes | Callback used to return [ErrorInfo](arkts-media-errorinfo-i.md). |

## play

```TypeScript
play(soundID: number, params: PlayParameters, callback: AsyncCallback<number>): void
```

Plays a sound and obtains the stream ID. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundID | number | Yes | Sound ID, which is obtained by calling **load()**. |
| params | PlayParameters | Yes | Playback parameters. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the audio stream ID. A valid value must be greaterthan 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## play

```TypeScript
play(soundID: number, callback: AsyncCallback<number>): void
```

Plays a sound using default parameters and obtains the stream ID. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundID | number | Yes | Sound ID, which is obtained by calling **load()**. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the audio stream ID. A valid value must be greaterthan 0. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## play

```TypeScript
play(soundID: number, params?: PlayParameters): Promise<number>
```

Plays a sound and obtains the stream ID. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundID | number | Yes | Sound ID, which is obtained by calling **load()**. |
| params | PlayParameters | No | Playback parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the audio stream ID. A valid value must be greater than 0 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases a **SoundPool** instance. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## release

```TypeScript
release(): Promise<void>
```

Releases a **SoundPool** instance. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## setInterruptMode

```TypeScript
setInterruptMode(interruptMode: media.SoundInterruptMode): void
```

Sets the interruption mode of the audio files with the same ID during playback. After the **SoundPool** is created, this API is valid only when the **Play** function of the **SoundPool** is called for the first time. You can set the interruption mode for multiple times. If the interruption mode is not set, the [SAME_SOUND_INTERRUPT](../../../../reference/apis-media-kit/arkts-apis-media-e.md) mode is used by default. That is , if the former audio file is not completely played, the latter audio file with the same ID interrupts the former audio file.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interruptMode | media.SoundInterruptMode | Yes | Interruption mode of the audio files with the same ID duringplayback, which is obtained through the **media.SoundInterruptMode** enum. |

## setLoop

```TypeScript
setLoop(streamID: number, loop: number, callback: AsyncCallback<void>): void
```

Sets the loop mode. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| loop | number | Yes | Number of loops.<br>If this parameter is set to a value greater than or equal to 0, the numberof times the content is actually played is the value of **loop** plus 1.<br> If this parameter is set to avalue less than 0, the content is played repeatedly. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## setLoop

```TypeScript
setLoop(streamID: number, loop: number): Promise<void>
```

Sets the loop mode. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| loop | number | Yes | Number of loops.<br>If this parameter is set to a value greater than or equal to 0, the numberof times the content is actually played is the value of **loop** plus 1.<br> If this parameter is set to avalue less than 0, the content is played repeatedly. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## setPriority

```TypeScript
setPriority(streamID: number, priority: number, callback: AsyncCallback<void>): void
```

Sets the priority for an audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| priority | number | Yes | Priority. The value **0** means the lowest priority. The value is an integer greater thanor equal to 0. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## setPriority

```TypeScript
setPriority(streamID: number, priority: number): Promise<void>
```

Sets the priority for an audio stream. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| priority | number | Yes | Priority. The value **0** means the lowest priority. The value is an integer greater thanor equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## setRate

```TypeScript
setRate(streamID: number, rate: audio.AudioRendererRate, callback: AsyncCallback<void>): void
```

Sets the playback rate for an audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| rate | audio.AudioRendererRate | Yes | Playback rate. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## setRate

```TypeScript
setRate(streamID: number, rate: audio.AudioRendererRate): Promise<void>
```

Sets the playback rate for an audio stream. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| rate | audio.AudioRendererRate | Yes | Playback rate. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## setVolume

```TypeScript
setVolume(streamID: number, leftVolume: number, rightVolume: number, callback: AsyncCallback<void>): void
```

Sets the volume for an audio stream. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| leftVolume | number | Yes | Volume of the left channel. The value range is [0.0, 1.0]. |
| rightVolume | number | Yes | Volume of the right channel. The value range is [0.0, 1.0]. Currently, setting thevolume for the right channel does not take effect. The volume set for the left channel is used. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## setVolume

```TypeScript
setVolume(streamID: number, leftVolume: number, rightVolume: number): Promise<void>
```

Sets the volume for an audio stream. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| leftVolume | number | Yes | Volume of the left channel. The value range is [0.0, 1.0]. |
| rightVolume | number | Yes | Volume of the right channel. The value range is [0.0, 1.0]. Currently, setting thevolume for the right channel does not take effect. The volume set for the left channel is used. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## stop

```TypeScript
stop(streamID: number, callback: AsyncCallback<void>): void
```

Stops audio playback. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by callback. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## stop

```TypeScript
stop(streamID: number): Promise<void>
```

Stops audio playback. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| streamID | number | Yes | Audio stream ID, which is obtained by calling **play()**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. Return by promise. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## unload

```TypeScript
unload(soundID: number, callback: AsyncCallback<void>): void
```

Unloads a sound. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundID | number | Yes | Sound ID, which is obtained by calling **load()**. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. If the operation is successful, **err** is**undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by callback. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by callback. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by callback. |

## unload

```TypeScript
unload(soundID: number): Promise<void>
```

Unloads a sound. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Media.SoundPool

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| soundID | number | Yes | Sound ID, which is obtained by calling **load()**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | I/O error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

