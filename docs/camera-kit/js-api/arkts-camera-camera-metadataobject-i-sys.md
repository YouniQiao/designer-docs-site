# MetadataObject

Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput](arkts-camera-camera-camerainput-i.md). It is obtained by calling metadataOutput.[on('metadataObjectsAvailable')](camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback&lt;Array<MetadataObject>&gt;)).

**Since:** 10

<!--Device-camera-interface MetadataObject--><!--Device-camera-interface MetadataObject-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## confidence

```TypeScript
readonly confidence: number
```

Confidence of the detection, with a value range of [0, 1].

**Type:** number

**Since:** 13

<!--Device-MetadataObject-readonly confidence: double--><!--Device-MetadataObject-readonly confidence: double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## objectId

```TypeScript
readonly objectId: number
```

Metadata object ID.

**Type:** number

**Since:** 13

<!--Device-MetadataObject-readonly objectId: int--><!--Device-MetadataObject-readonly objectId: int-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

