# AudioInterrupt

Describes input parameters of audio interruption events.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRendererOptions

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## streamUsage

```TypeScript
streamUsage: StreamUsage
```

Audio stream usage.

**类型：** StreamUsage

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRendererOptions#rendererInfo

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## pauseWhenDucked

```TypeScript
pauseWhenDucked: boolean
```

Whether audio playback can be paused during an audio interruption. **true** if audio playback can be paused, **false** otherwise.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent#hintType

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## contentType

```TypeScript
contentType: ContentType
```

Audio content type.

**类型：** ContentType

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.AudioRendererOptions#rendererInfo

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

