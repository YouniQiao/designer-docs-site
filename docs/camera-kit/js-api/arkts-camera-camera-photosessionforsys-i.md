# PhotoSessionForSys (System API)

Implements a photo session for system applications, which sets the parameters of the normal photo mode and saves all [CameraInput](arkts-camera-camera-camerainput-i.md) and [CameraOutput](arkts-camera-camera-cameraoutput-i.md)instances required to run the camera. It inherits from [Session](arkts-camera-camera-session-i.md).

**Inheritance/Implementation:** PhotoSessionForSys extends [PhotoSession](arkts-camera-camera-photosession-i.md), [Beauty](arkts-camera-camera-beauty-i-sys.md), [ColorEffect](arkts-camera-camera-coloreffect-i-sys.md), [ColorManagement](arkts-camera-camera-colormanagement-i.md), [Macro](arkts-camera-camera-macro-i-sys.md), [SceneDetection](arkts-camera-camera-scenedetection-i-sys.md), [EffectSuggestion](arkts-camera-camera-effectsuggestion-i-sys.md), [DepthFusion](arkts-camera-camera-depthfusion-i-sys.md)

**Since:** 11

<!--Device-camera-interface PhotoSessionForSys extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion--><!--Device-camera-interface PhotoSessionForSys extends PhotoSession, Beauty, ColorEffect, ColorManagement, Macro, SceneDetection, EffectSuggestion, DepthFusion-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

