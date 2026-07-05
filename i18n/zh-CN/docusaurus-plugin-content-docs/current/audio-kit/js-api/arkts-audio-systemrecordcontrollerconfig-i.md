# SystemRecordControllerConfig

Defines the configuration for the system recording controller panel.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## sourceType

```TypeScript
sourceType: SourceType
```

The system uses this to determine the recording scenario of the application according to the SourceType that the application expects to use for streaming, and provides users with the ability to select matching noise reduction modes. The supported source types include {@link SourceType#SOURCE_TYPE_MIC}, {@link SourceType#SOURCE_TYPE_CAMCORDER}, and {@link SourceType#SOURCE_TYPE_LIVE}.

**类型：** SourceType

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

