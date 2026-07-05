# AudioCapturerChangeInfo

Describes the audio capturer change event.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## clientUid

```TypeScript
readonly clientUid: int
```

Uid for audio capturer client application.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## streamId

```TypeScript
readonly streamId: int
```

Unique ID of an audio stream.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## capturerState

```TypeScript
readonly capturerState: AudioState
```

Audio state.

**类型：** AudioState

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## capturerInfo

```TypeScript
readonly capturerInfo: AudioCapturerInfo
```

Audio capturer information.

**类型：** AudioCapturerInfo

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## deviceDescriptors

```TypeScript
readonly deviceDescriptors: AudioDeviceDescriptors
```

Audio device information.

**类型：** AudioDeviceDescriptors

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## muted

```TypeScript
readonly muted?: boolean
```

Whether the audio capturer is muted. **true** if muted, **false** otherwise.

**类型：** boolean

**起始版本：** 11

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

