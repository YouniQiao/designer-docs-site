# AudioRendererChangeInfo

Describes the audio renderer change event.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## rendererState

```TypeScript
readonly rendererState: AudioState
```

Audio state.

**类型：** AudioState

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

## rendererInfo

```TypeScript
readonly rendererInfo: AudioRendererInfo
```

Audio renderer information.

**类型：** AudioRendererInfo

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## clientUid

```TypeScript
readonly clientUid: int
```

Uid for audio renderer client application.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

**系统接口：** 此接口为系统接口。

## streamId

```TypeScript
readonly streamId: int
```

Unique ID of an audio stream.

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## deviceDescriptors

```TypeScript
readonly deviceDescriptors: AudioDeviceDescriptors
```

Audio device description.

**类型：** AudioDeviceDescriptors

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

