# TiffMetadata

TIFF metadata.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## dateTime

```TypeScript
readonly dateTime?: string
```

Date and time associated with the image (typically last modification).

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## copyright

```TypeScript
readonly copyright?: string
```

Copyright notice for the image.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## orientation

```TypeScript
readonly orientation?: Orientation
```

Indicates image orientation for correct display rotation/flip.

**Type:** Orientation

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xResolution

```TypeScript
readonly xResolution?: double
```

Horizontal resolution (pixels per resolution unit).

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## software

```TypeScript
readonly software?: string
```

Software used to create or process the image.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## artist

```TypeScript
readonly artist?: string
```

Name of the image creator or artist.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## photometricInterpretation

```TypeScript
readonly photometricInterpretation?: int
```

Defines how pixel colors are interpreted (e.g., RGB, grayscale). The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## documentName

```TypeScript
readonly documentName?: string
```

Name of the document or image.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## tileWidth

```TypeScript
readonly tileWidth?: int
```

Width of each image tile in pixels. The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## yResolution

```TypeScript
readonly yResolution?: double
```

Vertical resolution (pixels per resolution unit).

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## transferFunction

```TypeScript
readonly transferFunction?: string
```

Tone transfer curve mapping pixel values to output intensity.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## primaryChromaticities

```TypeScript
readonly primaryChromaticities?: double[]
```

Chromaticity coordinates of the RGB primaries.

**Type:** double[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## tileLength

```TypeScript
readonly tileLength?: int
```

Height of each image tile in pixels. The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## whitePoint

```TypeScript
readonly whitePoint?: double[]
```

Chromaticity coordinates of the reference white point.

**Type:** double[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## resolutionUnit

```TypeScript
readonly resolutionUnit?: int
```

Unit for X/Y resolution. The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## imageDescription

```TypeScript
readonly imageDescription?: string
```

Description of the image content.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## model

```TypeScript
readonly model?: string
```

Model name/number of the capture device.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## hostComputer

```TypeScript
readonly hostComputer?: string
```

Host computer/system used for image processing.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## compression

```TypeScript
readonly compression?: int
```

Compression scheme used for image data (e.g., None, LZW, JPEG, Deflate). The value should be an integer.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## make

```TypeScript
readonly make?: string
```

Manufacturer of the capture device.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

