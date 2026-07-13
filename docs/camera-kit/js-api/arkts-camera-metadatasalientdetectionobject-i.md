# MetadataSalientDetectionObject (System API)

Implements the salient detection metadata object used for camera detection. It inherits from
[MetadataObject](arkts-camera-metadataobjecttype-e.md) and is the data source of the camera information in
[CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput.
[on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1).

**Inheritance/Implementation:** MetadataSalientDetectionObject extends [MetadataObject](arkts-camera-metadataobject-i.md)

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

