# createAudioRenderer

## createAudioRenderer

```TypeScript
function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>): void
```

Obtains an {@link AudioRenderer} instance. This method uses a promise to return the renderer instance. The AudioRenderer instance is used to play streaming audio data. When using AudioRenderer apis, there are many instructions for application to achieve better performance and lower power consumption: In music or audiobook background playback situation, you can have low power consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**. And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**. Application developer should also be careful when app goes to background, please check if your audio playback is still needed, see **Audio Resources** in best practices document. And avoiding to send silence audio data continuously to waste system resources, otherwise system will take control measures when this behavior is detected, see **Audio Playback** in best practices document. If you want to use AudioRenderer api to implement a music playback application, there are also many interactive scenes to consider, see **Developing an Audio Application** in best practices document.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AudioRendererOptions | 是 | Renderer configurations. |
| callback | AsyncCallback&lt;AudioRenderer> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the AudioRenderer instance obtained; otherwise, err is  an error object. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // 采样率。
  channels: audio.AudioChannel.CHANNEL_2, // 通道。
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // 采样格式。
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // 编码格式。
};

let audioRendererInfo: audio.AudioRendererInfo = {
  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
  rendererFlags: 0 // 音频渲染器标志。
};

let audioRendererOptions: audio.AudioRendererOptions = {
  streamInfo: audioStreamInfo,
  rendererInfo: audioRendererInfo
};

let audioRenderer: audio.AudioRenderer;

audio.createAudioRenderer(audioRendererOptions,(err, data) => {
  if (err) {
    console.error(`AudioRenderer Created: Error: ${err}`);
  } else {
    console.info('AudioRenderer Created: SUCCESS');
    audioRenderer = data;
  }
});

```

## createAudioRenderer

```TypeScript
function createAudioRenderer(options: AudioRendererOptions): Promise<AudioRenderer>
```

Obtains an {@link AudioRenderer} instance. This method uses a promise to return the renderer instance. The AudioRenderer instance is used to play streaming audio data. When using AudioRenderer apis, there are many instructions for application to achieve better performance and lower power consumption: In music or audiobook background playback situation, you can have low power consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**. And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**. Application developer should also be careful when app goes to background, please check if your audio playback is still needed, see **Audio Resources** in best practices document. And avoiding to send silence audio data continuously to waste system resources, otherwise system will take control measures when this behavior is detected, see **Audio Playback** in best practices document. If you want to use AudioRenderer api to implement a music playback application, there are also many interactive scenes to consider, see **Developing an Audio Application** in best practices document.

**起始版本：** 8

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | AudioRendererOptions | 是 | Renderer configurations. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioRenderer> | Promise used to return the AudioRenderer instance. |

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

let audioRendererInfo: audio.AudioRendererInfo = {
  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // 音频流使用类型：音乐。根据业务场景配置，参考StreamUsage。
  rendererFlags: 0 // 音频渲染器标志。
};

let audioRendererOptions: audio.AudioRendererOptions = {
  streamInfo: audioStreamInfo,
  rendererInfo: audioRendererInfo
};

let audioRenderer: audio.AudioRenderer;

audio.createAudioRenderer(audioRendererOptions).then((data) => {
  audioRenderer = data;
  console.info('AudioFrameworkRenderLog: AudioRenderer Created : SUCCESS');
}).catch((err: BusinessError) => {
  console.error(`AudioFrameworkRenderLog: AudioRenderer Created : ERROR : ${err}`);
});

```

