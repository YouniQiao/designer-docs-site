# CaptureStartInfo

Describes the capture start information.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## captureId

```TypeScript
captureId: int
```

ID of this capture action.

**Type:** int

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## time

```TypeScript
time: long
```

Estimated duration when the sensor captures frames at the bottom layer in a single capture. If **–1** is reported , there is no estimated duration.

**Type:** long

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

