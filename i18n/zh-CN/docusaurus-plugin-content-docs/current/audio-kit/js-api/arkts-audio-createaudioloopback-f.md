# createAudioLoopback

## createAudioLoopback

```TypeScript
function createAudioLoopback(mode: AudioLoopbackMode): Promise<AudioLoopback>
```

Creates an <b>AudioLoopback</b> instance, which provides low-latency in-ear monitoring using a fast capturer and renderer.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioLoopbackMode | 是 | Audio loopback mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioLoopback> | Promise used to return the AudioLoopback instance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800104 | Loopback mode is unsupported. |

**示例：**

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

