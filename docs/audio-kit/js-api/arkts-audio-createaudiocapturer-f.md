# createAudioCapturer

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## createAudioCapturer

```TypeScript
function createAudioCapturer(options: AudioCapturerOptions, callback: AsyncCallback<AudioCapturer>): void
```

Creates an AudioCapturer instance. This API uses an asynchronous callback to return the result.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AudioCapturerOptions | Yes | Capturer configurations. |
| callback | AsyncCallback&lt;AudioCapturer&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the AudioCapturer instance obtained; otherwise, **err** isan error object. If the operation fails, an error object with one of the following error codes is returned:<br>Error code 6800301: indicates a parameter verification exception, permission verification exception, or systemprocessing exception. For details, see system logs.<br>Error code 6800101: indicates that a mandatory parameteris null or the parameter type is incorrect. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioStreamInfo: audio.AudioStreamInfo = {
  samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000, // Sampling rate.
  channels: audio.AudioChannel.CHANNEL_2, // Channel.
  sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE, // Sampling format.
  encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW // Encoding format.
};

let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // Audio source type: microphone. Set this parameter based on the service scenario.
  capturerFlags: 0 // AudioCapturer flag.
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

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | AudioCapturerOptions | Yes | Capturer configurations. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioCapturer&gt; | Promise used to return the result. If the operation is successful, anAudioCapturer instance is returned; otherwise, an error object with either of the following error codes isreturned:<br>Error code 6800301: indicates a parameter verification exception, permission verification exception, or systemprocessing exception. For details, see system logs.<br>Error code 6800101: indicates that a mandatory parameter is null or the parameter type is incorrect. |

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

let audioCapturerInfo: audio.AudioCapturerInfo = {
  source: audio.SourceType.SOURCE_TYPE_MIC, // Audio source type: microphone. Set this parameter based on the service scenario.
  capturerFlags: 0 // AudioCapturer flag.
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

