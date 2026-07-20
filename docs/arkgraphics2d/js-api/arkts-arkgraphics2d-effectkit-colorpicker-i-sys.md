# ColorPicker

A class used to obtain the color from an image. Before calling any method of ColorPicker, use createColorPicker to create a ColorPicker instance.

**Since:** 9

<!--Device-effectKit-interface ColorPicker--><!--Device-effectKit-interface ColorPicker-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## discriminatePictureLightDegree

```TypeScript
discriminatePictureLightDegree(): PictureLightDegree
```

Discriminates the light and dark degree of the picture.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-discriminatePictureLightDegree(): PictureLightDegree--><!--Device-ColorPicker-discriminatePictureLightDegree(): PictureLightDegree-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [PictureLightDegree](arkts-arkgraphics2d-effectkit-picturelightdegree-e-sys.md) | - returns the picture light and dark degree. |

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
};
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let pictureLightDegree: effectKit.PictureLightDegree = colorPicker.discriminatePictureLightDegree();
      console.info('The color light degree of the image is ' + pictureLightDegree);
    }
  })
});

```

## getAlphaZeroTransparentProportion

```TypeScript
getAlphaZeroTransparentProportion(): number
```

Get the proportion of transparent pixels with alpha=0 in the image

**Since:** 23

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-ColorPicker-getAlphaZeroTransparentProportion(): double--><!--Device-ColorPicker-getAlphaZeroTransparentProportion(): double-End-->

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
};
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
});

```

## getComplexityDegree

```TypeScript
getComplexityDegree(): PictureComplexityDegree
```

Get complexity degree of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-ColorPicker-getComplexityDegree(): PictureComplexityDegree--><!--Device-ColorPicker-getComplexityDegree(): PictureComplexityDegree-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [PictureComplexityDegree](arkts-arkgraphics2d-effectkit-picturecomplexitydegree-e-sys.md) | complexity degree of an image |

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
};
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
});

```

## getDeepenImmersionColor

```TypeScript
getDeepenImmersionColor(): Color
```

Generates a stronger immersion color that merges with the background color and is deeper than the background color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-getDeepenImmersionColor(): Color--><!--Device-ColorPicker-getDeepenImmersionColor(): Color-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | - returns the stronger immersion color that both blends with the background and appears deeper than the background. |

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
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let color = colorPicker.getDeepenImmersionColor();
      console.info('get deepen immersion color =' + color);
    }
  })
});

```

## getImmersiveBackgroundColor

```TypeScript
getImmersiveBackgroundColor(): Color
```

Generates an immersive background color that creates an immersive visual effect.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-getImmersiveBackgroundColor(): Color--><!--Device-ColorPicker-getImmersiveBackgroundColor(): Color-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | - returns the immersive background color. |

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
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let color = colorPicker.getImmersiveBackgroundColor();
      console.info('get immersive background color =' + color);
    }
  })
});

```

## getImmersiveForegroundColor

```TypeScript
getImmersiveForegroundColor(): Color
```

Generates an immersive foreground color that creates an immersive visual effect for text and content.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-getImmersiveForegroundColor(): Color--><!--Device-ColorPicker-getImmersiveForegroundColor(): Color-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | - returns the immersive foreground color. |

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
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let color = colorPicker.getImmersiveForegroundColor();
      console.info('get immersive foreground color =' + color);
    }
  })
});

```

## getMorandiShadowColor

```TypeScript
getMorandiShadowColor(): Color
```

Gets the Morandi shadow color from the dominant color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-getMorandiShadowColor(): Color--><!--Device-ColorPicker-getMorandiShadowColor(): Color-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | - returns the Morandi shadow color converted from the dominant color. |

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
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let color = colorPicker.getMorandiShadowColor();
      console.info('get Morandi shadow color =' + color);
    }
  })
});

```

## getReverseColor

```TypeScript
getReverseColor(): Color
```

Gets the reverse color based on the discriminatePictureLightDegree result.When the picture light degree is EXTREMELY_LIGHT_COLOR_PICTURE, returns black color.For other picture light degree types, returns white color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-ColorPicker-getReverseColor(): Color--><!--Device-ColorPicker-getReverseColor(): Color-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) | - returns the reverse color for UI themes or contrast calculations. |

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
}
image.createPixelMap(color, opts).then((pixelMap) => {
  effectKit.createColorPicker(pixelMap, (error, colorPicker) => {
    if (error) {
      console.error('Failed to create color picker.');
    } else {
      console.info('Succeeded in creating color picker.');
      let color = colorPicker.getReverseColor();
      console.info('get reverse color =' + color);
    }
  })
});

```

## getShadeDegree

```TypeScript
getShadeDegree(): PictureShadeDegree
```

Get shade degree of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-ColorPicker-getShadeDegree(): PictureShadeDegree--><!--Device-ColorPicker-getShadeDegree(): PictureShadeDegree-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [PictureShadeDegree](arkts-arkgraphics2d-effectkit-pictureshadedegree-e-sys.md) | shade degree of an image |

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
};
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
});

```

## getTopProportionColorsAndPercentage

```TypeScript
getTopProportionColorsAndPercentage(colorCount: number): Map<Color | null, number | null>
```

Get top proportion colors and percentages of an image

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-ColorPicker-getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>--><!--Device-ColorPicker-getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorCount | number | Yes | The number of colors to require, the value is 1 to 10. |

**Return value:**

| Type | Description |
| --- | --- |
| [Map](../../apis-na/arkts-apis/arkts-na-lib-es2015-collection-map-i.md)<Color \| null, number \| null> | Map of colors and percentages, sorted by proportion.  - If the number of colors obtained is less than the value of colorCount, the map size is the actual number obtained.  - If the colors fail to be obtained or the number of colors obtained is less than 1, Map() is returned.  - If the value of colorCount is greater than 10, a map holding the first 10 colors with the top proportions is returned. |

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
};
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
});

```

