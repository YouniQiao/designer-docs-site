# SceneDetectionQuery

Provides the scene detection and query capabilities.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isSceneFeatureSupported

```TypeScript
isSceneFeatureSupported(type: SceneFeatureType): boolean
```

Checks whether a scene feature is supported.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SceneFeatureType | Yes | Scene feature. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the scene feature. true if supported, false  otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application, only throw in session usage. |
| 7400101 | Parameter missing or parameter type incorrect. |

**Example**

```TypeScript
function isSceneFeatureSupported(photoSessionForSys: camera.PhotoSessionForSys, featureType: camera.SceneFeatureType): boolean {
  let isSupported: boolean = photoSessionForSys.isSceneFeatureSupported(featureType);
  return isSupported;
}

```

