# Filter

A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance.

**Since:** 9

<!--Device-effectKit-interface Filter--><!--Device-effectKit-interface Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## blur

```TypeScript
blur(radius: number): Filter
```

Adds the blur effect to the filter linked list, and returns the head node of the linked list.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-Filter-blur(radius: double): Filter--><!--Device-Filter-blur(radius: double): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number | Yes | Blur radius, in pixels. The blur effect is proportional to the configured value.A larger value indicates a more obvious effect. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageBlur(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let radius = 5;
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.blur(radius);
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageBlur(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

## blur

```TypeScript
blur(radius: number, tileMode: TileMode): Filter
```

Adds the blur effect to the filter linked list, and returns the head node of the linked list.

**Since:** 14

<!--Device-Filter-blur(radius: double, tileMode: TileMode): Filter--><!--Device-Filter-blur(radius: double, tileMode: TileMode): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number | Yes | Blur radius, in pixels. The blur effect is proportional to the configured value.A larger value indicates a more obvious effect. |
| tileMode | [TileMode](arkts-arkgraphics2d-effectkit-tilemode-e.md) | Yes | Tile mode of the shader effect. The blur effect of image edges is affected.Currently,only CPU rendering is supported. Therefore, the tile mode supports only DECAL. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageBlur(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let radius = 30;
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.blur(radius, effectKit.TileMode.DECAL);
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageBlur(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

## brightness

```TypeScript
brightness(bright: number): Filter
```

Adds the brightness effect to the filter linked list, and returns the head node of the linked list.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-Filter-brightness(bright: double): Filter--><!--Device-Filter-brightness(bright: double): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bright | number | Yes | Brightness value, ranging from 0 to 1. When the value is 0, the image brightness remains unchanged. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageBrightness(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let bright = 0.5;
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.brightness(bright);
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageBrightness(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

## getEffectPixelMap

```TypeScript
getEffectPixelMap(): Promise<image.PixelMap>
```

Obtains image.PixelMap of the source image to which the filter linked list is added. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-Filter-getEffectPixelMap(): Promise<image.PixelMap>--><!--Device-Filter-getEffectPixelMap(): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<image.PixelMap> | - Promise used to return image.PixelMap of the source image. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts : image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
};
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createEffect(pixelMap).grayscale().getEffectPixelMap().then(data => {
    console.info('getPixelBytesNumber = ', data.getPixelBytesNumber());
  })
})

```

## getEffectPixelMap

```TypeScript
getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>
```

Gets the PixelMap where all filter effects have been added to the image.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-Filter-getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>--><!--Device-Filter-getEffectPixelMap(useCpuRender : boolean): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| useCpuRender | boolean | Yes | Whether to use cpu render. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<image.PixelMap> | - returns the PixelMap generated. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts : image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
};
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createEffect(pixelMap).grayscale().getEffectPixelMap(false).then(data => {
    console.info('getPixelBytesNumber = ', data.getPixelBytesNumber());
  })
})

```

## getPixelMap

```TypeScript
getPixelMap(): image.PixelMap
```

Obtains image.PixelMap of the source image to which the filter linked list is added.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [getEffectPixelMap](arkts-arkgraphics2d-effectkit-filter-i.md#geteffectpixelmap-1)

<!--Device-Filter-getPixelMap(): image.PixelMap--><!--Device-Filter-getPixelMap(): image.PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| image.PixelMap | image.PixelMap. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts : image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
};
image.createPixelMap(color, opts).then((pixelMap) => {
  let pixel = effectKit.createEffect(pixelMap).grayscale().getPixelMap();
  console.info('getPixelBytesNumber = ', pixel.getPixelBytesNumber());
})

```

## grayscale

```TypeScript
grayscale(): Filter
```

Adds the grayscale effect to the filter linked list, and returns the head node of the linked list.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-Filter-grayscale(): Filter--><!--Device-Filter-grayscale(): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageGrayscale(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.grayscale();
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageGrayscale(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

## invert

```TypeScript
invert(): Filter
```

Adds the inversion effect to the filter linked list, and returns the head node of the linked list.

**Since:** 12

<!--Device-Filter-invert(): Filter--><!--Device-Filter-invert(): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageInvert(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.invert();
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageInvert(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

## setColorMatrix

```TypeScript
setColorMatrix(colorMatrix: Array<number>): Filter
```

Adds a custom effect to the filter linked list, and returns the head node of the linked list.

**Since:** 12

<!--Device-Filter-setColorMatrix(colorMatrix: Array<double>): Filter--><!--Device-Filter-setColorMatrix(colorMatrix: Array<double>): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorMatrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Custom color matrix.A 5 x 4 matrix can be created. The value range of the matrix element is [0, 1],where 0 indicates that the color channel is not involved in the calculation,and 1 indicates that the color channel is involved in the calculation and retains the original weight. |

**Return value:**

| Type | Description |
| --- | --- |
| [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Final image effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Input parameter error. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageColorFilter(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let colorMatrix:Array<number> = [
      0.2126,0.7152,0.0722,0,0,
      0.2126,0.7152,0.0722,0,0,
      0.2126,0.7152,0.0722,0,0,
      0,0,0,1,0
      ];
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.setColorMatrix(colorMatrix);
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap().then(imageData => {
        resolve(imageData);
      })
    })
  })
}

@Entry
@Component
struct Index {
  @State imagePixelMap: image.PixelMap | null = null;
  private imageBuffer: ArrayBuffer | undefined = undefined;
  // Read the image file in the rawfile folder. You can also change the read mode as required to ensure that the image data in ArrayBuffer format is obtained.
  async getFileBuffer(): Promise<ArrayBuffer | undefined> {
    try{
      const context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
      const fileData: Uint8Array = await context.resourceManager.getRawFileContent('image.png');
      const buffer: ArrayBuffer = fileData.buffer.slice(0);
      return buffer;
    }catch (err){
      return undefined
    }
  }

  async aboutToAppear(): Promise<void>{
    this.imageBuffer = await this.getFileBuffer();
    if(this.imageBuffer == undefined){
      return;
    }
    // Image processing is an asynchronous operation. You can perform the next step based on whether the processed image data needs to be obtained. Add await as required for synchronization.
    this.imagePixelMap = await ImageColorFilter(this.imageBuffer);
  }

  build() {
    Column() {
      Image(this.imagePixelMap)
        .width(304)
        .height(305)
    }
    .height('100%')
    .width('100%')
  }
}

```

