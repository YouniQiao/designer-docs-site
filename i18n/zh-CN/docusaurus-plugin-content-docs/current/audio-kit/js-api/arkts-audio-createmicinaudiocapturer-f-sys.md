# createMicInAudioCapturer

## createMicInAudioCapturer

```TypeScript
function createMicInAudioCapturer(config: AudioCapturerMicInConfig): Promise<AudioCapturer | null>
```

Obtains a special {@link #AudioCapturer} instance. This method uses a promise to return the capturer instance. This capture can be used to record both Mic-In audio data and echo reference signal, for application to process algorithm. Mic-In audio data and echo reference signal will be put in one buffer or multiple buffers according to configuration set by application. Capturer is also not allowed to be created when application is in background.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MICROPHONE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | AudioCapturerMicInConfig | 是 | Capturer configuration, see {@link #AudioCapturerMicInConfig}  for details. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioCapturer \| null> | Promise used to return the audio capturer instance,  or null if any error occurs. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied, including background recording. |
| 202 | Not system App. |
| 6800101 | Parameter verification failed. |
| 6800104 | Capturer creation is not supported, may caused by following problems:  1. Source type is unsupported for this capturer, only {@link #SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT} is  supported currently.  2. Echo reference signal's config is unsupported, echo reference's sampling rate and format must be the  same as MicIn audio data currently. |
| 6800301 | Audio system internal error, such as system process crash. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let audioEcStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};

let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT, // 音源类型：Mic音频源。SourceType需为SOURCE_TYPE_UNPROCESSED_VOICE_ASSISTANT。
  capturerFlags: 0 // 音频采集器标志。
};

let audioMicInStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};

let audioCapturerMicInConfig: audio.AudioCapturerMicInConfig = {
  ecStreamInfo: audioEcStreamInfo,
  capturerInfo: audioCapturerInfo,
  micInStreamInfo: audioMicInStreamInfo
};

let audioCapturer: audio.AudioCapturer | null = null;

audio.createMicInAudioCapturer(audioCapturerMicInConfig).then((data) => {
  audioCapturer = data;
  console.info('AudioCapturer Created : SUCCESS');
}).catch((err: BusinessError) => {
  console.error(`AudioCapturer Created : ERROR : ${err}`);
});

```

