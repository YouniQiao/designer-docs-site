# MetadataDogFaceObject

Implements the dog face metadata object used for camera detection. It inherits from [MetadataObject]camera.MetadataObjectType and is the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**Inheritance:** MetadataDogFaceObjectextends: MetadataObject.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## rightEyeBoundingBox

```TypeScript
readonly rightEyeBoundingBox: Rect
```

Right eye area.

**Type:** Rect

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## leftEyeBoundingBox

```TypeScript
readonly leftEyeBoundingBox: Rect
```

Left eye area.

**Type:** Rect

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

