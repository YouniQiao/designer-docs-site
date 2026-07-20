# createTonePlayer (System API)

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## createTonePlayer

```TypeScript
function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void
```

Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance.

**Since:** 9

<!--Device-audio-function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void--><!--Device-audio-function createTonePlayer(options: AudioRendererInfo, callback: AsyncCallback<TonePlayer>): void-End-->

**System capability:** SystemCapability.Multimedia.Audio.Tone

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [AudioRendererInfo](arkts-audio-audio-audiorendererinfo-i.md) | Yes | Tone playing attribute. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<TonePlayer> | Yes | Callback used to return the tonePlayer instance. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioRendererInfo: audio.AudioRendererInfo = {
  usage : audio.StreamUsage.STREAM_USAGE_DTMF,
  rendererFlags : 0
};
let tonePlayer: audio.TonePlayer;

audio.createTonePlayer(audioRendererInfo, (err, data) => {
  console.info(`callback call createTonePlayer: audioRendererInfo: ${audioRendererInfo}`);
  if (err) {
    console.error(`callback call createTonePlayer return error: ${err.message}`);
  } else {
    console.info(`callback call createTonePlayer return data: ${data}`);
    tonePlayer = data;
  }
});

```


## createTonePlayer

```TypeScript
function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>
```

Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance.

**Since:** 9

<!--Device-audio-function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>--><!--Device-audio-function createTonePlayer(options: AudioRendererInfo): Promise<TonePlayer>-End-->

**System capability:** SystemCapability.Multimedia.Audio.Tone

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [AudioRendererInfo](arkts-audio-audio-audiorendererinfo-i.md) | Yes | Tone playing attribute. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<TonePlayer> | Promise used to return the tonePlayer instance. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let tonePlayer: audio.TonePlayer;
async function createTonePlayerBefore(){
  let audioRendererInfo: audio.AudioRendererInfo = {
    usage : audio.StreamUsage.STREAM_USAGE_DTMF,
    rendererFlags : 0
  };
  tonePlayer = await audio.createTonePlayer(audioRendererInfo);
}

```

