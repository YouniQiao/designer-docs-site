# MetadataObject

Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1).

**Since:** 10

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## objectId

```TypeScript
readonly objectId: number
```

Metadata object ID.

**Type:** number

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

