# TorchStatusInfo

Describes the flashlight status information.

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## torchLevel

```TypeScript
readonly torchLevel: double
```

Flashlight brightness level. The value range is [0, 1]. A larger value indicates a greater luminance.

**Type:** double

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## isTorchAvailable

```TypeScript
readonly isTorchAvailable: boolean
```

Whether the flashlight is available. **true** if available, **false** otherwise.

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## isTorchActive

```TypeScript
readonly isTorchActive: boolean
```

Whether the flashlight is activated. **true** if activated, **false** otherwise.

**Type:** boolean

**Since:** 11

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

