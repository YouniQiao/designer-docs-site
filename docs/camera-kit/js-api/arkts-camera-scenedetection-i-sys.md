# SceneDetection

Provides the scene detection capability. It inherits from [SceneDetectionQuery]camera.SceneDetectionQuery.

**Inheritance:** SceneDetectionextends: SceneDetectionQuery.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableSceneFeature

```TypeScript
enableSceneFeature(type: SceneFeatureType, enabled: boolean): void
```

Enables or disables a scene feature. This API must be called after [SceneFeatureDetectionResult]camera.SceneFeatureDetectionResult of the corresponding scene feature is received.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | SceneFeatureType | Yes | Scene feature. |
| enabled | boolean | Yes | Whether to enable the scene feature. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableSceneFeature(photoSession: camera.PhotoSessionForSys, cameraInput: camera.CameraInput, previewOutput: camera.PreviewOutput): void {
  photoSession.beginConfig();
  photoSession.addInput(cameraInput);
  photoSession.addOutput(previewOutput);
  photoSession.commitConfig();

  photoSession.on('featureDetection', camera.SceneFeatureType.MOON_CAPTURE_BOOST,
    (err: BusinessError, statusObject: camera.SceneFeatureDetectionResult) => {
      if (err !== undefined && err.code !== 0) {
        console.error(`Callback Error, errorCode: ${err.code}`);
        return;
      }
      console.info(
        `on featureDetectionStatus featureType:${statusObject.featureType} detected:${statusObject.detected}`);
      if (statusObject.featureType === camera.SceneFeatureType.MOON_CAPTURE_BOOST) {
        try {
          photoSession.enableSceneFeature(statusObject.featureType, statusObject.detected);
        } catch (error) {
          let err = error as BusinessError;
          console.error(`The enableSceneFeature call failed. error code: ${err.code}`);
        }
      }
    });
}

```

