# AudioTimestampInfo

Describes the information about the audio stream timestamp and the current data frame position.

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## framePos

```TypeScript
readonly framePos: long
```

Position of the current data frame for playback or recording.

**类型：** long

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Core

## timestamp

```TypeScript
readonly timestamp: long
```

Timestamp corresponding to the current data frame position during playback or recording, in nanoseconds.

**类型：** long

**起始版本：** 19

**系统能力：** SystemCapability.Multimedia.Audio.Core

