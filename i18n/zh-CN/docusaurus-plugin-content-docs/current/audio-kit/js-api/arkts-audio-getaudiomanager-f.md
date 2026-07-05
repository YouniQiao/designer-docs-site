# getAudioManager

## getAudioManager

```TypeScript
function getAudioManager(): AudioManager
```

Obtains an AudioManager instance.

**起始版本：** 7

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AudioManager | AudioManager instance. |

**示例：**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioManager = audio.getAudioManager();

```

