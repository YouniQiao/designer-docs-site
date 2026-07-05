# ImageProcessor

Provides the ImageProcessor type, including the processing function.

**Since:** 18

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

## Modules to Import

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';
```

## enhanceDetail

```TypeScript
enhanceDetail(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): Promise<image.PixelMap>
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to width and height. Different levels of scaling methods are provided to <br>balance performance and image quality. This method uses a promise to return the result.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | Yes | The source pixelmap. |
| width | int | Yes | The zoom value of width. |
| height | int | Yes | The zoom value of height. |
| level | QualityLevel | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | A Promise instance used to return the PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetail can not work correctly due to  limited device capabilities. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**Example**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetail(sourceImage: image.PixelMap, width: number, height: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // Example: The width can be set to 1024, and the height can be set to 1280.
  let enhancedPixelmap: Promise<image.PixelMap> =
    imageProcessor.enhanceDetail(sourceImage, width, height, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetail

```TypeScript
enhanceDetail(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): Promise<image.PixelMap>
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to the zoom ratio. Different levels of scaling methods are provided to <br>balance performance and image quality. This method uses a promise to return the result.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | Yes | The source pixelmap. |
| scale | double | Yes | The zoom ratio. |
| level | QualityLevel | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap> | A Promise instance used to return the PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetail can not work correctly due to  limited device capabilities. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**Example**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetail(sourceImage: image.PixelMap, scale: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // Example: The scale can be set to 2.0.
  let enhancedPixelmap: Promise<image.PixelMap> =
    imageProcessor.enhanceDetail(sourceImage, scale, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetailSync

```TypeScript
enhanceDetailSync(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): image.PixelMap
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to width and height. Different levels of scaling methods are provided to <br>balance performance and image quality.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | Yes | The source pixelmap. |
| width | int | Yes | The zoom value of width. |
| height | int | Yes | The zoom value of height. |
| level | QualityLevel | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | Returns the destination pixelmap instance .  if the operation is successful; Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetailSync can not work correctly due  to limited device capabilities. |
| 29200004 | Failed to process image buffer. For example, the processing times out. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**Example**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetailSync(sourceImage: image.PixelMap, width: number, height: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // Example: The width can be set to 1024, and the height can be set to 1280.
  let enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(
    sourceImage, width, height, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetailSync

```TypeScript
enhanceDetailSync(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): image.PixelMap
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to the zoom ratio. Different levels of scaling methods are provided to <br>balance performance and image quality.

**Since:** 18

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.VideoProcessingEngine

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | Yes | The source pixelmap. |
| scale | double | Yes | The zoom ratio. |
| level | QualityLevel | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | Returns the destination pixelmap instance  if the operation is successful; Otherwise, return undefined. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetailSync can not work correctly due  to limited device capabilities. |
| 29200004 | Failed to process image buffer. For example, the processing times out. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**Example**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetailSync(sourceImage: image.PixelMap, scale: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // Example: The scale can be set to 2.0.
  let enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(
    sourceImage, scale, videoProcessingEngine.QualityLevel.HIGH);
}

```

