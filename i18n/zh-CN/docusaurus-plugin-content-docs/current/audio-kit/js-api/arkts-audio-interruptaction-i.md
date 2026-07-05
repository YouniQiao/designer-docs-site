# InterruptAction

Describes the callback invoked for audio interruption or focus gain events.When the audio of an application is interrupted by another application, the callback is invoked to notify the former application.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## actionType

```TypeScript
actionType: InterruptActionType
```

Event type. The value TYPE_ACTIVATED means the focus gain event, and TYPE_INTERRUPT means the audio interruption event.

**类型：** InterruptActionType

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent#eventType

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## hint

```TypeScript
hint?: InterruptHint
```

Hint provided along with the audio interruption event.

**类型：** InterruptHint

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent#hintType

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## type

```TypeScript
type?: InterruptType
```

Type of the audio interruption event.

**类型：** InterruptType

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent#eventType

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## activated

```TypeScript
activated?: boolean
```

Whether the focus is gained or released. **true** if the focus is gained or released, **false** if the focus fails to be gained or released.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.multimedia.audio.InterruptEvent#hintType

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

