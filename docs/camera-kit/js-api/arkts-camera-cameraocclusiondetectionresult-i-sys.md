# CameraOcclusionDetectionResult

Describes the instance returned by the occlusion status callback, which indicates whether the camera lens is blocked or dirty.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isCameraLensDirty

```TypeScript
readonly isCameraLensDirty: boolean
```

Whether the camera lens is dirty. **true** if dirty, false otherwise.

**Type:** boolean

**Since:** 13

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## isCameraOccluded

```TypeScript
readonly isCameraOccluded: boolean
```

Whether the camera lens is blocked. **true** if blocked, **false** otherwise.

**Type:** boolean

**Since:** 12

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

