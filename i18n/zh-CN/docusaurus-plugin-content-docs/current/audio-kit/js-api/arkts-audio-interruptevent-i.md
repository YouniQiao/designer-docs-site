# InterruptEvent

Describes the interruption event received by the application when the audio is interrupted.

**起始版本：** 9

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## forceType

```TypeScript
forceType: InterruptForceType
```

Whether the audio interruption is forcibly taken by the system or taken by an application.

**类型：** InterruptForceType

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## hintType

```TypeScript
hintType: InterruptHint
```

Hint provided along the interruption to provide information related to the interruption event.

**类型：** InterruptHint

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

## eventType

```TypeScript
eventType: InterruptType
```

Whether the audio interruption has started or ended.

**类型：** InterruptType

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Audio.Renderer

