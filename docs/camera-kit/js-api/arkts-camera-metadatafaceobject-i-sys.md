# MetadataFaceObject

Implements the human face metadata object used for camera detection. It inherits from [MetadataObject]camera.MetadataObjectType and is the data source of the camera information in [CameraInput]camera.CameraInput. It is obtained by calling metadataOutput. [on('metadataObjectsAvailable')]camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>).

**Inheritance:** MetadataFaceObjectextends: MetadataObject.

**Since:** 13

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## pitchAngle

```TypeScript
readonly pitchAngle: int
```

Pitch angle, with a value range of [-90, 90], where downward is positive.

**Type:** int

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## emotion

```TypeScript
readonly emotion: Emotion
```

Detected emotion.

**Type:** Emotion

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

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

## yawAngle

```TypeScript
readonly yawAngle: int
```

Yaw angle, with a value range of [-90, 90], where rightward is positive.

**Type:** int

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## rollAngle

```TypeScript
readonly rollAngle: int
```

Row angle, with a value range of [-180, 180], where clockwise direction is positive.

**Type:** int

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

## emotionConfidence

```TypeScript
readonly emotionConfidence: double
```

Confidence of the emotion detection, with a value range of [0, 1].

**Type:** double

**Since:** 13

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

