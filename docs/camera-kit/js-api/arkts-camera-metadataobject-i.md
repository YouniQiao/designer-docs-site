# MetadataObject

Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput](arkts-camera-camerainput-i.md#camerainput). It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')](arkts-camera-metadataoutput-i.md#on-1).

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@ohos.multimedia.camera';
```

## boundingBox

```TypeScript
readonly boundingBox: Rect
```

Metadata rectangle.

**Type:** Rect

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

## isLockFocusTracked

```TypeScript
readonly isLockFocusTracked?: boolean
```

Whether the focus is locked and being tracked currently.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

## timestamp

```TypeScript
readonly timestamp: number
```

Current timestamp, in nanoseconds (ns).

**Type:** number

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

## type

```TypeScript
readonly type: MetadataObjectType
```

Metadata object type.

**Type:** MetadataObjectType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

