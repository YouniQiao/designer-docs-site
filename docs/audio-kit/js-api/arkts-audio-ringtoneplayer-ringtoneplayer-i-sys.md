# RingtonePlayer (System API)

Provides APIs for setting and obtaining ringtone parameters as well as playing and stopping ringtones. Before calling any API in RingtonePlayer, you must use [getRingtonePlayer](arkts-audio-systemsoundmanager-systemsoundmanager-i-sys.md#getringtoneplayer-1)to obtain a RingtonePlayer instance.

**Since:** 10

<!--Device-unnamed-export interface RingtonePlayer--><!--Device-unnamed-export interface RingtonePlayer-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

<a id="configure"></a>
## configure

```TypeScript
configure(options: RingtoneOptions, callback: AsyncCallback<void>): void
```

Sets ringtone parameters. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-configure(options: RingtoneOptions, callback: AsyncCallback<void>): void--><!--Device-RingtonePlayer-configure(options: RingtoneOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RingtoneOptions](arkts-audio-systemsoundmanager-ringtoneoptions-t-sys.md) | Yes | Ringtone parameters. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="configure-1"></a>
## configure

```TypeScript
configure(options: RingtoneOptions): Promise<void>
```

Sets ringtone parameters. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-configure(options: RingtoneOptions): Promise<void>--><!--Device-RingtonePlayer-configure(options: RingtoneOptions): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [RingtoneOptions](arkts-audio-systemsoundmanager-ringtoneoptions-t-sys.md) | Yes | Ringtone parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="getaudiorendererinfo"></a>
## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void
```

Obtains the information about the audio renderer used by the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void--><!--Device-RingtonePlayer-getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;audio.AudioRendererInfo&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the renderer information obtained; otherwise, **err** is an error object. |

<a id="getaudiorendererinfo-1"></a>
## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(): Promise<audio.AudioRendererInfo>
```

Obtains the information about the audio renderer used by the ringtone. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-getAudioRendererInfo(): Promise<audio.AudioRendererInfo>--><!--Device-RingtonePlayer-getAudioRendererInfo(): Promise<audio.AudioRendererInfo>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;audio.AudioRendererInfo&gt; | Promise used to return the renderer information. |

<a id="gettitle"></a>
## getTitle

```TypeScript
getTitle(callback: AsyncCallback<string>): void
```

Obtains the title of the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-getTitle(callback: AsyncCallback<string>): void--><!--Device-RingtonePlayer-getTitle(callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the title obtained; otherwise, **err** is an error object. |

<a id="gettitle-1"></a>
## getTitle

```TypeScript
getTitle(): Promise<string>
```

Obtains the title of the ringtone. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-getTitle(): Promise<string>--><!--Device-RingtonePlayer-getTitle(): Promise<string>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the title obtained. |

<a id="off"></a>
## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**Since:** 10

<!--Device-RingtonePlayer-off(type: 'audioInterrupt'): void--><!--Device-RingtonePlayer-off(type: 'audioInterrupt'): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focus is changed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="on"></a>
## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void--><!--Device-RingtonePlayer-on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | Yes | Event type. The event **'audioInterrupt'** is triggered when the audio focus is changed. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;audio.InterruptEvent&gt; | Yes | Callback used to return the event information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |

<a id="release"></a>
## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the ringtone player. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-release(callback: AsyncCallback<void>): void--><!--Device-RingtonePlayer-release(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="release-1"></a>
## release

```TypeScript
release(): Promise<void>
```

Releases the ringtone player. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-release(): Promise<void>--><!--Device-RingtonePlayer-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts playing the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-start(callback: AsyncCallback<void>): void--><!--Device-RingtonePlayer-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts playing the ringtone. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-start(): Promise<void>--><!--Device-RingtonePlayer-start(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops playing the ringtone. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-RingtonePlayer-stop(callback: AsyncCallback<void>): void--><!--Device-RingtonePlayer-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops playing the ringtone. This API uses a promise to return the result.

**Since:** 10

<!--Device-RingtonePlayer-stop(): Promise<void>--><!--Device-RingtonePlayer-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## state

```TypeScript
readonly state: media.AVPlayerState
```

Gets player state.

**Type:** media.AVPlayerState

**Since:** 10

<!--Device-RingtonePlayer-readonly state: media.AVPlayerState--><!--Device-RingtonePlayer-readonly state: media.AVPlayerState-End-->

**System capability:** SystemCapability.Multimedia.SystemSound.Core

**System API:** This is a system API.

