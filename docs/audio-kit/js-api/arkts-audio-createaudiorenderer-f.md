# createAudioRenderer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## createAudioRenderer

```TypeScript
function createAudioRenderer(options: AudioRendererOptions, callback: AsyncCallback<AudioRenderer>): void
```

Obtains an {@link AudioRenderer} instance.
This method uses a promise to return the renderer instance.

The AudioRenderer instance is used to play streaming audio data.
When using AudioRenderer apis, there are many instructions for application
to achieve better performance and lower power consumption:
In music or audiobook background playback situation, you can have low power
consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.

Application developer should also be careful when app goes to background, please check if your audio playback
is still needed, see **Audio Resources** in best practices document.
And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
control measures when this behavior is detected, see **Audio Playback** in best practices document.

If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
scenes to consider, see **Developing an Audio Application** in best practices document.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AudioRendererOptions | Yes | Renderer configurations. |
| callback | AsyncCallback&lt;AudioRenderer&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the AudioRenderer instance obtained; otherwise, **err** isan error object. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // Sampling rate.
  channels: audio.AudioChannel.CHANNEL_2, // Channel.
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // Sampling format.
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // Encoding format.
};

let audioRendererInfo: audio.AudioRendererInfo = {
  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // Audio stream usage type: music. Set this parameter based on the service scenario.
  rendererFlags: 0 // AudioRenderer flag.
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

Obtains an {@link AudioRenderer} instance.
This method uses a promise to return the renderer instance.

The AudioRenderer instance is used to play streaming audio data.
When using AudioRenderer apis, there are many instructions for application
to achieve better performance and lower power consumption:
In music or audiobook background playback situation, you can have low power
consumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.
And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.

Application developer should also be careful when app goes to background, please check if your audio playback
is still needed, see **Audio Resources** in best practices document.
And avoiding to send silence audio data continuously to waste system resources, otherwise system will take
control measures when this behavior is detected, see **Audio Playback** in best practices document.

If you want to use AudioRenderer api to implement a music playback application, there are also many interactive
scenes to consider, see **Developing an Audio Application** in best practices document.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Renderer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AudioRendererOptions | Yes | Renderer configurations. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioRenderer&gt; | Promise used to return the AudioRenderer instance. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // Sampling rate.
  channels: audio.AudioChannel.CHANNEL_2, // Channel.
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // Sampling format.
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // Encoding format.
};

let audioRendererInfo: audio.AudioRendererInfo = {
  usage: audio.StreamUsage.STREAM_USAGE_MUSIC, // Audio stream usage type: music. Set this parameter based on the service scenario.
  rendererFlags: 0 // AudioRenderer flag.
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

