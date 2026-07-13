# PhotoSessionForSys (System API)

Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves
all [CameraInput](arkts-camera-camerainput-i.md) and [CameraOutput](arkts-camera-cameraoutput-i.md)
instances required to run the camera. It inherits from [Session](arkts-camera-session-i.md).

**Inheritance/Implementation:** PhotoSessionForSys extends [PhotoSession](arkts-camera-photosession-i.md), [Beauty](arkts-camera-beauty-i-sys.md), [ColorEffect](arkts-camera-coloreffect-i-sys.md), [ColorManagement](arkts-camera-colormanagement-i.md), [Macro](arkts-camera-macro-i-sys.md), [SceneDetection](arkts-camera-scenedetection-i-sys.md), [EffectSuggestion](arkts-camera-effectsuggestion-i-sys.md), [DepthFusion](arkts-camera-depthfusion-i-sys.md)

**Since:** 11

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

