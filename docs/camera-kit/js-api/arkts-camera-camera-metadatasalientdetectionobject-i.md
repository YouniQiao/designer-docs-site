# MetadataSalientDetectionObject (System API)

Implements the salient detection metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camera-camerainput-i.md). It is obtained by calling metadataOutput.[on('metadataObjectsAvailable')](camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback&lt;Array<MetadataObject>&gt;)).

**Inheritance/Implementation:** MetadataSalientDetectionObject extends [MetadataObject](arkts-camera-camera-metadataobject-i.md)

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-camera-interface MetadataSalientDetectionObject extends MetadataObject--><!--Device-camera-interface MetadataSalientDetectionObject extends MetadataObject-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

