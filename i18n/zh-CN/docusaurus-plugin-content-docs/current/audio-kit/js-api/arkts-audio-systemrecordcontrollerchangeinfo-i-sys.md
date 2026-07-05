# SystemRecordControllerChangeInfo

Defines the information carried when the system recording controller state changes. It includes the enable status, application UID and expected audio source type.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## uid

```TypeScript
uid?: int
```

The UID of the application that triggers the system recording controller state change. The value range is all integers.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## sourceType

```TypeScript
sourceType?: SourceType
```

The expected audio source type configured by the application when enabling the recording controller. It is used to match the corresponding recording scenario and noise reduction mode.

**类型：** SourceType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

## enabled

```TypeScript
enabled: boolean
```

Whether the system recording controller panel is enabled. The value true means the panel is enabled, and false means disabled.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

