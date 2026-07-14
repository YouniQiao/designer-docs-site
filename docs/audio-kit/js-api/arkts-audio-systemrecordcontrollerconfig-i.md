# SystemRecordControllerConfig

Defines the configuration for the system recording controller panel.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## sourceType

```TypeScript
sourceType: SourceType
```

The system uses this to determine the recording scenario of the application according to the SourceType that the application expects to use for streaming, and provides users with the ability to select matching noise reduction modes. The supported source types include {@link SourceType#SOURCE_TYPE_MIC}, {@link SourceType#SOURCE_TYPE_CAMCORDER}, and {@link SourceType#SOURCE_TYPE_LIVE}.

**Type:** SourceType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

