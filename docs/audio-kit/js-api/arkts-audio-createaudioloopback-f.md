# createAudioLoopback

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## createAudioLoopback

```TypeScript
function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback>
```

Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear
monitoring using a fast capturer and renderer.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioLoopbackMode | Yes | Audio loopback mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioLoopback&gt; | Promise used to return the <b>AudioLoopback</b> instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6800101](../errorcode-audio.md#6800101-invalid-parameter) | Parameter verification failed. |
| [6800104](../errorcode-audio.md#6800104-unsupported-parameter-value) | Loopback mode is unsupported. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';
import { BusinessError } from '@kit.BasicServicesKit';

let audioLoopback: audio.AudioLoopback;

audio.createAudioLoopback(audio.AudioLoopbackMode.HARDWARE).then((data) => {
  audioLoopback = data;
  console.info('AudioLoopback Created : SUCCESS');
}).catch((err: BusinessError) => {
  console.error(`AudioLoopback Created : ERROR : ${err}`);
});

```

