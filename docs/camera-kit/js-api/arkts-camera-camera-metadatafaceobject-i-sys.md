# MetadataFaceObject (System API)

Implements the human face metadata object used for camera detection. It inherits from [MetadataObject](arkts-camera-camera-metadataobjecttype-e.md) and is the data source of the camera information in [CameraInput](arkts-camera-camera-camerainput-i.md). It is obtained by calling metadataOutput.[on('metadataObjectsAvailable')](camera.MetadataOutput.on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>)).

**Inheritance/Implementation:** MetadataFaceObject extends [MetadataObject](arkts-camera-camera-metadataobject-i.md)

**Since:** 26.0.0

<!--Device-camera-interface MetadataFaceObject extends MetadataObject--><!--Device-camera-interface MetadataFaceObject extends MetadataObject-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## emotion

```TypeScript
readonly emotion: Emotion
```

Detected emotion.

**Type:** Emotion

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly emotion: Emotion--><!--Device-MetadataFaceObject-readonly emotion: Emotion-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## emotionConfidence

```TypeScript
readonly emotionConfidence: number
```

Confidence of the emotion detection, with a value range of [0, 1].

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly emotionConfidence: double--><!--Device-MetadataFaceObject-readonly emotionConfidence: double-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## leftEyeBoundingBox

```TypeScript
readonly leftEyeBoundingBox: Rect
```

Left eye area.

**Type:** Rect

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly leftEyeBoundingBox: Rect--><!--Device-MetadataFaceObject-readonly leftEyeBoundingBox: Rect-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## pitchAngle

```TypeScript
readonly pitchAngle: number
```

Pitch angle, with a value range of [-90, 90], where downward is positive.

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly pitchAngle: int--><!--Device-MetadataFaceObject-readonly pitchAngle: int-End-->

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

<!--Device-MetadataFaceObject-readonly rightEyeBoundingBox: Rect--><!--Device-MetadataFaceObject-readonly rightEyeBoundingBox: Rect-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## rollAngle

```TypeScript
readonly rollAngle: number
```

Row angle, with a value range of [-180, 180], where clockwise direction is positive.

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly rollAngle: int--><!--Device-MetadataFaceObject-readonly rollAngle: int-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## yawAngle

```TypeScript
readonly yawAngle: number
```

Yaw angle, with a value range of [-90, 90], where rightward is positive.

**Type:** number

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataFaceObject-readonly yawAngle: int--><!--Device-MetadataFaceObject-readonly yawAngle: int-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

