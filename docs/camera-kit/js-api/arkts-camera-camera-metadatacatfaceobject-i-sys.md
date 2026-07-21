# MetadataCatFaceObject (System API)

Implements the cat face metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camera-camerainput-i.md). It is obtained by calling metadataOutput.[on('metadataObjectsAvailable')](camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)).

**Inheritance/Implementation:** MetadataCatFaceObject extends [MetadataObject](arkts-camera-camera-metadataobject-i.md)

**Since:** 26.0.0

<!--Device-camera-interface MetadataCatFaceObject extends MetadataObject--><!--Device-camera-interface MetadataCatFaceObject extends MetadataObject-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## leftEyeBoundingBox

```TypeScript
readonly leftEyeBoundingBox: Rect
```

Left eye area.

**Type:** Rect

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataCatFaceObject-readonly leftEyeBoundingBox: Rect--><!--Device-MetadataCatFaceObject-readonly leftEyeBoundingBox: Rect-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## rightEyeBoundingBox

```TypeScript
readonly rightEyeBoundingBox: Rect
```

Right eye area.

**Type:** Rect

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataCatFaceObject-readonly rightEyeBoundingBox: Rect--><!--Device-MetadataCatFaceObject-readonly rightEyeBoundingBox: Rect-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

