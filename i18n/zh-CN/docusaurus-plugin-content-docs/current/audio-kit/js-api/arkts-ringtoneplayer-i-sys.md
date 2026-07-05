# RingtonePlayer

Provides APIs for setting and obtaining ringtone parameters as well as playing and stopping ringtones. Before calling any API in RingtonePlayer, you must use [getRingtonePlayer]./../@ohos.multimedia.systemSoundManager:systemSoundManager.SystemSoundManager.getRingtonePlayer(context: BaseContext, type: RingtoneType) to obtain a RingtonePlayer instance.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## configure

```TypeScript
configure(options: RingtoneOptions, callback: AsyncCallback<void>): void
```

Sets ringtone parameters. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | RingtoneOptions | 是 | Ringtone parameters. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## configure

```TypeScript
configure(options: RingtoneOptions): Promise<void>
```

Sets ringtone parameters. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | RingtoneOptions | 是 | Ringtone parameters. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(callback: AsyncCallback<audio.AudioRendererInfo>): void
```

Obtains the information about the audio renderer used by the ringtone. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;audio.AudioRendererInfo> | 是 | Callback used to return the result. If the operation  is successful, err is undefined and data is the renderer information obtained; otherwise, err  is an error object. |

## getAudioRendererInfo

```TypeScript
getAudioRendererInfo(): Promise<audio.AudioRendererInfo>
```

Obtains the information about the audio renderer used by the ringtone. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;audio.AudioRendererInfo> | Promise used to return the renderer information. |

## getTitle

```TypeScript
getTitle(callback: AsyncCallback<string>): void
```

Obtains the title of the ringtone. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 | Callback used to return the result. If the operation is successful,  err is undefined and data is the title obtained; otherwise, err is an error object. |

## getTitle

```TypeScript
getTitle(): Promise<string>
```

Obtains the title of the ringtone. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the title obtained. |

## off

```TypeScript
off(type: 'audioInterrupt'): void
```

Unsubscribes from the audio interruption event.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus is  changed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## offAudioInterrupt

```TypeScript
offAudioInterrupt(): void
```

Unsubscribes to audio interrupt events.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |

## on('audioInterrupt')

```TypeScript
on(type: 'audioInterrupt', callback: Callback<audio.InterruptEvent>): void
```

Subscribes to the audio interruption event, which is triggered when the audio focus is changed. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'audioInterrupt' | 是 | Event type. The event 'audioInterrupt' is triggered when the audio focus is  changed. |
| callback | Callback&lt;audio.InterruptEvent> | 是 | Callback used to return the event information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 6800101 | Parameter verification failed. |

## onAudioInterrupt

```TypeScript
onAudioInterrupt(callback: Callback<audio.InterruptEvent>): void
```

Listens for audio interrupt events. This method uses a callback to get interrupt events. The interrupt event is triggered when audio playback is interrupted.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;audio.InterruptEvent> | 是 | Callback used to listen for interrupt callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system application. |
| 6800101 | Parameter verification failed. |

## release

```TypeScript
release(callback: AsyncCallback<void>): void
```

Releases the ringtone player. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## release

```TypeScript
release(): Promise<void>
```

Releases the ringtone player. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts playing the ringtone. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## start

```TypeScript
start(): Promise<void>
```

Starts playing the ringtone. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops playing the ringtone. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the operation is successful,  err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops playing the ringtone. This API uses a promise to return the result.

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## state

```TypeScript
readonly state: media.AVPlayerState
```

Gets player state.

**类型：** media.AVPlayerState

**起始版本：** 10

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

