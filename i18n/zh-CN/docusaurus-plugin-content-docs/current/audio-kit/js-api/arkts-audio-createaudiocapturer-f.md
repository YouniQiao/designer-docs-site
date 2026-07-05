# createAudioCapturer

## createAudioCapturer

```TypeScript
function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void
```

Creates an AudioCapturer instance. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AudioCapturerOptions | 是 | Capturer configurations. |
| callback | AsyncCallback&lt;AudioCapturer> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the AudioCapturer instance obtained; otherwise, err is  an error object. If the operation fails, an error object with one of the following error codes is returned:  Error code 6800301: indicates a parameter verification exception, permission verification exception, or system  processing exception. For details, see system logs. Error code 6800101: indicates that a mandatory parameter  is null or the parameter type is incorrect. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};

let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
  capturerFlags: 0 // 音频采集器标志。
};

let audioCapturerOptions: audio.AudioCapturerOptions = {
  streamInfo: audioStreamInfo,
  capturerInfo: audioCapturerInfo
};

let audioCapturer: audio.AudioCapturer;

audio.createAudioCapturer(audioCapturerOptions, (err, data) => {
  if (err) {
    console.error(`AudioCapturer Created : Error: ${err}`);
  } else {
    console.info('AudioCapturer Created : SUCCESS');
    audioCapturer = data;
  }
});

```

## createAudioCapturer

```TypeScript
function createAudioCapturer(options: AudioCapturerOptions): Promise<AudioCapturer>
```

Creates an AudioCapturer instance. This API uses a promise to return the result.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AudioCapturerOptions | 是 | Capturer configurations. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioCapturer> | Promise used to return the result. If the operation is successful, an  AudioCapturer instance is returned; otherwise, an error object with either of the following error codes is  returned:  Error code 6800301: indicates a parameter verification exception, permission verification exception, or system  processing exception. For details, see system logs.  Error code 6800101: indicates that a mandatory parameter is null or the parameter type is incorrect. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};

let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // 音源类型：Mic音频源。根据业务场景配置，参考SourceType。
  capturerFlags: 0 // 音频采集器标志。
};

let audioCapturerOptions:audio.AudioCapturerOptions = {
  streamInfo: audioStreamInfo,
  capturerInfo: audioCapturerInfo
};

let audioCapturer: audio.AudioCapturer;

audio.createAudioCapturer(audioCapturerOptions).then((data) => {
  audioCapturer = data;
  console.info('AudioCapturer Created : SUCCESS');
}).catch((err: BusinessError) => {
  console.error(`AudioCapturer Created : ERROR : ${err}`);
});

```

