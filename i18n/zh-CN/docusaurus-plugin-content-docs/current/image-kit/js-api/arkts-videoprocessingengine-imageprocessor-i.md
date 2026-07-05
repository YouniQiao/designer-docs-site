# ImageProcessor

Provides the ImageProcessor type, including the processing function.

**起始版本：** 18

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

## 导入模块

```TypeScript
import { videoProcessingEngine } from '@kit.ImageKit';
```

## enhanceDetail

```TypeScript
enhanceDetail(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): Promise<image.PixelMap>
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to width and height. Different levels of scaling methods are provided to <br>balance performance and image quality. This method uses a promise to return the result.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | 是 | The source pixelmap. |
| width | int | 是 | The zoom value of width. |
| height | int | 是 | The zoom value of height. |
| level | QualityLevel | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | A Promise instance used to return the PixelMap object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetail can not work correctly due to  limited device capabilities. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**示例：**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetail(sourceImage: image.PixelMap, width: number, height: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // 示例：width可配置为1024，height可配置为1280。
  let enhancedPixelmap: Promise<image.PixelMap> =
    imageProcessor.enhanceDetail(sourceImage, width, height, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetail

```TypeScript
enhanceDetail(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): Promise<image.PixelMap>
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to the zoom ratio. Different levels of scaling methods are provided to <br>balance performance and image quality. This method uses a promise to return the result.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | 是 | The source pixelmap. |
| scale | double | 是 | The zoom ratio. |
| level | QualityLevel | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | A Promise instance used to return the PixelMap object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetail can not work correctly due to  limited device capabilities. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**示例：**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetail(sourceImage: image.PixelMap, scale: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // 示例：scale可配置为2.0。
  let enhancedPixelmap: Promise<image.PixelMap> =
    imageProcessor.enhanceDetail(sourceImage, scale, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetailSync

```TypeScript
enhanceDetailSync(sourceImage: image.PixelMap, width: int, height: int, level?: QualityLevel): image.PixelMap
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to width and height. Different levels of scaling methods are provided to <br>balance performance and image quality.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | 是 | The source pixelmap. |
| width | int | 是 | The zoom value of width. |
| height | int | 是 | The zoom value of height. |
| level | QualityLevel | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | Returns the destination pixelmap instance .  if the operation is successful; Otherwise, return undefined. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetailSync can not work correctly due  to limited device capabilities. |
| 29200004 | Failed to process image buffer. For example, the processing times out. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**示例：**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetailSync(sourceImage: image.PixelMap, width: number, height: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // 示例：width可配置为1024，height可配置为1280。
  let enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(
    sourceImage, width, height, videoProcessingEngine.QualityLevel.HIGH);
}

```

## enhanceDetailSync

```TypeScript
enhanceDetailSync(sourceImage: image.PixelMap, scale: double, level?: QualityLevel): image.PixelMap
```

The function generate the destinationImage from sourceImage with necessary scaling operation <br>according to the zoom ratio. Different levels of scaling methods are provided to <br>balance performance and image quality.

**起始版本：** 18

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Multimedia.VideoProcessingEngine

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourceImage | image.PixelMap | 是 | The source pixelmap. |
| scale | double | 是 | The zoom ratio. |
| level | QualityLevel | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | Returns the destination pixelmap instance  if the operation is successful; Otherwise, return undefined. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function enhanceDetailSync can not work correctly due  to limited device capabilities. |
| 29200004 | Failed to process image buffer. For example, the processing times out. |
| 29200007 | Out of memory. |
| 29200009 | Input value is invalid. This error is returned for  all of the following error conditions:  1 - Invalid input or output image buffer - The image buffer width(height)  is too large or colorspace is incorrect.  2 - Invalid parameter - The parameter does not contain valid information,  such as detail enhancer level is incorrect. |

**示例：**

```TypeScript
import { image, videoProcessingEngine } from '@kit.ImageKit';

async function enhanceDetailSync(sourceImage: image.PixelMap, scale: number) {
  videoProcessingEngine.initializeEnvironment();
  let imageProcessor = videoProcessingEngine.create() as videoProcessingEngine.ImageProcessor;
  // 示例：scale可配置为2.0。
  let enhancedPixelmap: image.PixelMap = imageProcessor.enhanceDetailSync(
    sourceImage, scale, videoProcessingEngine.QualityLevel.HIGH);
}

```

