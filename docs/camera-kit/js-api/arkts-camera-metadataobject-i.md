# MetadataObject

Implements the basic metadata object used for camera detection. It serves as the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## boundingBox

```TypeScript
readonly boundingBox: Rect
```

Metadata rectangle.

**Type:** Rect

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## confidence

```TypeScript
readonly confidence: double
```

Confidence of the detection, with a value range of [0, 1].

**Type:** double

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## type

```TypeScript
readonly type: MetadataObjectType
```

Metadata object type.

**Type:** MetadataObjectType

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## objectId

```TypeScript
readonly objectId: int
```

Metadata object ID.

**Type:** int

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## isLockFocusTracked

```TypeScript
readonly isLockFocusTracked?: boolean
```

Whether the focus is locked and being tracked currently.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## timestamp

```TypeScript
readonly timestamp: int
```

Current timestamp, in nanoseconds (ns).

**Type:** int

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

