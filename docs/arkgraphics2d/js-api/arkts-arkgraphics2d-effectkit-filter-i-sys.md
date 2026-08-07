# Filter

A class used to add a specified effect to an image. Before calling any method of Filter, use createEffect to create a Filter instance.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-effectKit-interface Filter--><!--Device-effectKit-interface Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## ellipticalGradientBlur

ArkTS-Dyn:
```TypeScript
ellipticalGradientBlur(blurRadius: number, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter
```

ArkTS-Sta:
```TypeScript
ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter
```

Adds the elliptical gradient blur effect to the filter linked list, and returns the head node of the linked list.

**Since:** 23

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-Filter-ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter--><!--Device-Filter-ellipticalGradientBlur(blurRadius: double, center: EllipticalMaskCenter, maskRadius: EllipticalMaskRadius, fractionStops: FractionStop[]): Filter-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Yes | Blur radius, in pixels. The blur effect is proportional to the configured value. A larger value indicates a more obvious effect. |
| center | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Set the center point of the ellipse. [0, 0] represents the top-left corner of the component, and floating-point numbers are allowed. Values exceeding the boundary will be automatically truncated during implementation. |
| maskRadius | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Set the major axis and minor axis of the ellipse. A radius of 1 is equal to the height of the component. The value range is [0, 10], and floating-point numbers are allowed. Values exceeding the boundary will be automatically truncated during implementation. |
| fractionStops | \_\_\_MD\_LINK\_USD\_0\_\_\_[] | Yes | Gradient blur position and intensity array. The array length ranges from 0 to 12. It has no effect if the length is 0 or greater than 12. Both position and intensity values are between 0 and 1. Position 0 corresponds to the ellipse center, and position 1 corresponds to the ellipse boundary. Intensity 0 means no blur, while intensity 1 equals the blur effect of the input blur radius. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Final image effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';	
import { effectKit } from '@kit.ArkGraphics2D';
import { common } from '@kit.AbilityKit';
// Pass the image data to be read.
function ImageEllipticalGradientBlur(Image: ArrayBuffer): Promise<image.PixelMap> {
  return new Promise((resolve, reject) => {
    let imageSource = image.createImageSource(Image);
	  let blurRadius:number = 25;
	  let fractionStops:FractionStop[] = [[0, 0.2], [0.5, 0.7]];
	  let maskRadius:effectKit.EllipticalMaskRadius = [1, 1];
	  let center:effectKit.EllipticalMaskCenter = [0.5, 0.5];
    imageSource.createPixelMap().then(async (pixelMap: image.PixelMap) => {
      let headFilter = effectKit.createEffect(pixelMap);
      if (headFilter != null) {
        // Add an effect flag to the image.
        headFilter.ellipticalGradientBlur(blurRadius, center, maskRadius, fractionStops);
      }
      // Process the image based on the added effect flag and return the processed image data.
      headFilter.getEffectPixelMap(false).then(imageData => {
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
    this.imagePixelMap = await ImageEllipticalGradientBlur(this.imageBuffer);
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

