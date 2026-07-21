# MakerNoteHuaweiMetadata

MakerNoteHuaweiMetadata implements Metadata

Photo metadata from Huawei cameras.

**Inheritance/Implementation:** MakerNoteHuaweiMetadata implements [Metadata](arkts-image-image-metadata-i.md)

**Since:** 23

<!--Device-image-class MakerNoteHuaweiMetadata implements Metadata--><!--Device-image-class MakerNoteHuaweiMetadata implements Metadata-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

<a id="clone"></a>
## clone

```TypeScript
clone(): Promise<MakerNoteHuaweiMetadata>
```

Clones [MakerNoteHuaweiMetadata](arkts-image-image-makernotehuaweimetadata-c.md) metadata. This API returns the result asynchronously through a promise.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-clone(): Promise<MakerNoteHuaweiMetadata>--><!--Device-MakerNoteHuaweiMetadata-clone(): Promise<MakerNoteHuaweiMetadata>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MakerNoteHuaweiMetadata&gt; | Promise used to return the **MakerNoteHuaweiMetadata** metadata instance if metadata is successfully obtained. |

<a id="createinstance"></a>
## createInstance

```TypeScript
static createInstance(): MakerNoteHuaweiMetadata
```

Returns an empty [MakerNoteHuaweiMetadata](arkts-image-image-makernotehuaweimetadata-c.md) instance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-static createInstance(): MakerNoteHuaweiMetadata--><!--Device-MakerNoteHuaweiMetadata-static createInstance(): MakerNoteHuaweiMetadata-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MakerNoteHuaweiMetadata](arkts-image-image-makernotehuaweimetadata-c.md) | Empty **MakerNoteHuaweiMetadata** instance. |

<a id="getallproperties"></a>
## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

Obtains all properties and their values from the image metadata. This API returns the result asynchronously through a promise.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-getAllProperties(): Promise<Record<string, string | null>>--><!--Device-MakerNoteHuaweiMetadata-getAllProperties(): Promise<Record<string, string | null>>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null&gt;&gt; | Promise used to return the values of all properties. |

<a id="getblob"></a>
## getBlob

```TypeScript
getBlob(): Promise<ArrayBuffer>
```

Obtains the metadata in binary format. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-getBlob(): Promise<ArrayBuffer>--><!--Device-MakerNoteHuaweiMetadata-getBlob(): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer&gt; | Promise that returns the binary data of the metadata. |

<a id="getproperties"></a>
## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

Obtains the property values from image metadata. This API returns the result asynchronously through a promise.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>--><!--Device-MakerNoteHuaweiMetadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | Array&lt;string&gt; | Yes | Names of the properties to query. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null&gt;&gt; | Promise used to return the obtained image metadata property values. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: unsupported metadata type. |

<a id="setblob"></a>
## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

Replaces the current metadata with binary data. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-setBlob(blob: ArrayBuffer): Promise<void>--><!--Device-MakerNoteHuaweiMetadata-setBlob(blob: ArrayBuffer): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blob | ArrayBuffer | Yes | Binary data used to replace the metadata. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600206](../errorcode-image.md#7600206-invalid-parameter) | Invalid parameter. Possible causes: The blob is empty or has a length of 0. |

<a id="setproperties"></a>
## setProperties

```TypeScript
setProperties(records: Record<string, string | null>): Promise<void>
```

Sets the values of specified properties in image metadata in batches. This API returns the result asynchronously through a promise.

For details about the properties, see [PropertyKey](arkts-image-image-propertykey-e.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-setProperties(records: Record<string, string | null>): Promise<void>--><!--Device-MakerNoteHuaweiMetadata-setProperties(records: Record<string, string | null>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, string \| null&gt; | Yes | Array containing key-value pairs representing properties and their corresponding values of the **MakerNoteHuaweiMetadata** object to be modified. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: unsupported metadata type. |

## burstNumber

```TypeScript
burstNumber?: number
```

Number of burst shots.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-burstNumber?: int--><!--Device-MakerNoteHuaweiMetadata-burstNumber?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## captureMode

```TypeScript
captureMode?: number
```

Capture mode.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-captureMode?: int--><!--Device-MakerNoteHuaweiMetadata-captureMode?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## cloudLabel

```TypeScript
cloudLabel?: string
```

Cloud enhancement label.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-cloudLabel?: string--><!--Device-MakerNoteHuaweiMetadata-cloudLabel?: string-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## faceConfidences

```TypeScript
faceConfidences?: number[]
```

Confidences of a specified number of faces.

**Type:** number[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-faceConfidences?: int[]--><!--Device-MakerNoteHuaweiMetadata-faceConfidences?: int[]-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## faceCount

```TypeScript
faceCount?: number
```

Number of faces.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-faceCount?: int--><!--Device-MakerNoteHuaweiMetadata-faceCount?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## faceSmileScores

```TypeScript
faceSmileScores?: number[]
```

Smile scores of a specified number of faces.

**Type:** number[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-faceSmileScores?: int[]--><!--Device-MakerNoteHuaweiMetadata-faceSmileScores?: int[]-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## focusMode

```TypeScript
focusMode?: FocusMode
```

Lens focus control policy, which determines how the camera adjusts the focal length.

**Type:** FocusMode

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-focusMode?: FocusMode--><!--Device-MakerNoteHuaweiMetadata-focusMode?: FocusMode-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## isCloudEnhanced

```TypeScript
isCloudEnhanced?: boolean
```

Whether the image has been cloud-enhanced. **true** indicates yes; **false** indicates no.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-isCloudEnhanced?: boolean--><!--Device-MakerNoteHuaweiMetadata-isCloudEnhanced?: boolean-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## isFrontCamera

```TypeScript
isFrontCamera?: boolean
```

Whether to use the front camera. **true** indicates yes; **false** indicates no.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-isFrontCamera?: boolean--><!--Device-MakerNoteHuaweiMetadata-isFrontCamera?: boolean-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## isWindSnapshot

```TypeScript
isWindSnapshot?: boolean
```

Whether the wind snapshot mode is used. **true** indicates yes; **false** indicates no.This mode is a specialized photography mode designed for capturing fast-moving subjects or scenes prone to blurring, such as in windy conditions or when photographing moving objects.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-isWindSnapshot?: boolean--><!--Device-MakerNoteHuaweiMetadata-isWindSnapshot?: boolean-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## isXmageSupported

```TypeScript
isXmageSupported?: boolean
```

Whether XMAGE is supported. **true** indicates yes; **false** indicates no.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-isXmageSupported?: boolean--><!--Device-MakerNoteHuaweiMetadata-isXmageSupported?: boolean-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## physicalAperture

```TypeScript
physicalAperture?: number
```

Physical aperture, in fNumber.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-physicalAperture?: int--><!--Device-MakerNoteHuaweiMetadata-physicalAperture?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## pitchAngle

```TypeScript
pitchAngle?: number
```

Pitch angle.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-pitchAngle?: int--><!--Device-MakerNoteHuaweiMetadata-pitchAngle?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## rollAngle

```TypeScript
rollAngle?: number
```

Horizontal pan angle.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-rollAngle?: int--><!--Device-MakerNoteHuaweiMetadata-rollAngle?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneBeachConfidence

```TypeScript
sceneBeachConfidence?: number
```

Capture scene: beach confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneBeachConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneBeachConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneBlueSkyConfidence

```TypeScript
sceneBlueSkyConfidence?: number
```

Capture scene: blue sky confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneBlueSkyConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneBlueSkyConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneFlowersConfidence

```TypeScript
sceneFlowersConfidence?: number
```

Capture scene: flower confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneFlowersConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneFlowersConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneFoodConfidence

```TypeScript
sceneFoodConfidence?: number
```

Capture scene: food confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneFoodConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneFoodConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneGreenPlantConfidence

```TypeScript
sceneGreenPlantConfidence?: number
```

Capture scene: green plant confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneGreenPlantConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneGreenPlantConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneNightConfidence

```TypeScript
sceneNightConfidence?: number
```

Capture scene: night scene confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneNightConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneNightConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneSnowConfidence

```TypeScript
sceneSnowConfidence?: number
```

Capture scene: snow confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneSnowConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneSnowConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneStageConfidence

```TypeScript
sceneStageConfidence?: number
```

Capture scene: stage performance confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneStageConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneStageConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneSunsetConfidence

```TypeScript
sceneSunsetConfidence?: number
```

Capture scene: sunset confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneSunsetConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneSunsetConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneTextConfidence

```TypeScript
sceneTextConfidence?: number
```

Capture scene: text confidence.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneTextConfidence?: int--><!--Device-MakerNoteHuaweiMetadata-sceneTextConfidence?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneVersion

```TypeScript
sceneVersion?: number
```

Version number of the scene recognition algorithm.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-sceneVersion?: int--><!--Device-MakerNoteHuaweiMetadata-sceneVersion?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageBottom

```TypeScript
xmageBottom?: number
```

Vertical coordinate of the bottom boundary of the effective content area (excluding the watermark coverage area)on the original image, relative to the top-left origin of the image. The unit is px.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageBottom?: int--><!--Device-MakerNoteHuaweiMetadata-xmageBottom?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageColorMode

```TypeScript
xmageColorMode?: XmageColorMode
```

XMAGE color mode.

**Type:** XmageColorMode

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageColorMode?: XmageColorMode--><!--Device-MakerNoteHuaweiMetadata-xmageColorMode?: XmageColorMode-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageLeft

```TypeScript
xmageLeft?: number
```

Horizontal coordinate of the left boundary of the effective content area (excluding the watermark coverage area)on the original image, relative to the top-left origin of the image. The unit is px.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageLeft?: int--><!--Device-MakerNoteHuaweiMetadata-xmageLeft?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageRight

```TypeScript
xmageRight?: number
```

Horizontal coordinate of the right boundary of the effective content area (excluding the watermark coverage area)on the original image, relative to the top-left origin of the image. The unit is px.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageRight?: int--><!--Device-MakerNoteHuaweiMetadata-xmageRight?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageTop

```TypeScript
xmageTop?: number
```

Vertical coordinate of the top boundary of the effective content area (excluding the watermark coverage area) on the original image, relative to the top-left origin of the image. The unit is px.The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageTop?: int--><!--Device-MakerNoteHuaweiMetadata-xmageTop?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageWatermarkMode

```TypeScript
xmageWatermarkMode?: number
```

XMAGE watermark mode. For details, see [Constants](@ohos.multimedia.image:image.Constants).The value range is all integers.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-MakerNoteHuaweiMetadata-xmageWatermarkMode?: int--><!--Device-MakerNoteHuaweiMetadata-xmageWatermarkMode?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

