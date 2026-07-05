# ColorPicker

A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance.

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@ohos.effectKit';
```

## discriminatePictureLightDegree

```TypeScript
discriminatePictureLightDegree(): PictureLightDegree
```

Discriminates the light and dark degree of the picture.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureLightDegree | - returns the picture light and dark degree. |

## getAlphaZeroTransparentProportion

```TypeScript
getAlphaZeroTransparentProportion(): number
```

Get the proportion of transparent pixels with alpha=0 in the image

**Since:** 23

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | proportion of transparent pixels with alpha=0 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts: image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
        let percentage: number = colorPicker.getAlphaZeroTransparentProportion();
      console.info('Get proportion of fully transparent pixels: ' + percentage);
    }
  })
})

```

## getComplexityDegree

```TypeScript
getComplexityDegree(): PictureComplexityDegree
```

Get complexity degree of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureComplexityDegree | complexity degree of an image |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts: image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let complexityDegree: effectKit.PictureComplexityDegree = colorPicker.getComplexityDegree();
      console.info('The complexity degree of the image is ' + complexityDegree);
    }
  })
})

```

## getDeepenImmersionColor

```TypeScript
getDeepenImmersionColor(): Color
```

Generates a stronger immersion color that merges with the background color and is deeper than the background color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - returns the stronger immersion color that both blends with the backgroundand appears deeper than the background. |

## getImmersiveBackgroundColor

```TypeScript
getImmersiveBackgroundColor(): Color
```

Generates an immersive background color that creates an immersive visual effect.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - returns the immersive background color. |

## getImmersiveForegroundColor

```TypeScript
getImmersiveForegroundColor(): Color
```

Generates an immersive foreground color that creates an immersive visual effect for text and content.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - returns the immersive foreground color. |

## getMorandiShadowColor

```TypeScript
getMorandiShadowColor(): Color
```

Gets the Morandi shadow color from the dominant color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - returns the Morandi shadow color converted from the dominant color. |

## getReverseColor

```TypeScript
getReverseColor(): Color
```

Gets the reverse color based on the discriminatePictureLightDegree result. When the picture light degree is EXTREMELY_LIGHT_COLOR_PICTURE, returns black color. For other picture light degree types, returns white color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - returns the reverse color for UI themes or contrast calculations. |

## getShadeDegree

```TypeScript
getShadeDegree(): PictureShadeDegree
```

Get shade degree of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureShadeDegree | shade degree of an image |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts: image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let shadeDegree: effectKit.PictureShadeDegree = colorPicker.getShadeDegree();
      console.info('The shade degree of the image is ' + shadeDegree);
    }
  })
})

```

## getTopProportionColorsAndPercentage

```TypeScript
getTopProportionColorsAndPercentage(colorCount: number): Map<Color | null, number | null>
```

Get top proportion colors and percentages of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorCount | number | Yes | The number of colors to require, the value is 1 to 10. |

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;Color \| null, number \| null&gt; | Map of colors and percentages, sorted by proportion.- If the number of colors obtained is less than the value of colorCount, the map size isthe actual number obtained.- If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.- If the value of colorCount is greater than 10, a map holding the first 10 colors withthe top proportions is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { image } from "@kit.ImageKit";
import { effectKit } from "@kit.ArkGraphics2D";

const color = new ArrayBuffer(96);
let opts: image.InitializationOptions = {
  editable: true,
  pixelFormat: 3,
  size: {
    height: 4,
    width: 6
  }
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let colors: Map<effectKit.Color | null, number | null> = colorPicker.getTopProportionColorsAndPercentage(2);
      colors.forEach((value: number | null, key: effectKit.Color | null) => {
        console.info('get top proportion colors and percentages: color ' + key + ', percentage ' + value);
      })
    }
  })
})

```

