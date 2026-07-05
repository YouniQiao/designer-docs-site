# PhotoCaptureSetting

Describes the settings for taking an image.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## mirror

```TypeScript
mirror?: boolean
```

Whether mirror photography is enabled (disabled by default). Before using this enumerated value, call [isMirrorSupported]camera.PhotoOutput.isMirrorSupported to check whether mirror photography is supported. **true** if enabled, **false** otherwise.

**Type:** boolean

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## rotation

```TypeScript
rotation?: ImageRotation
```

Rotation angle of the image. The default value is **0**, indicating clockwise rotation.

**Type:** ImageRotation

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## compressionQuality

```TypeScript
compressionQuality?: int
```

Photo image compression quality.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## location

```TypeScript
location?: Location
```

Geolocation information of the image (depending on the device hardware information by default).

**Type:** Location

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

## quality

```TypeScript
quality?: QualityLevel
```

Image quality (low by default).

**Type:** QualityLevel

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

