# ColorPicker

取色类，用于从一张图像数据中获取它的主要颜色。在调用ColorPicker的方法前，需要先通过 [createColorPicker]effectKit.createColorPicker(source: image.PixelMap)创建一个ColorPicker实例。

**Since:** 9

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { effectKit } from '@kit.ArkGraphics2D';
```

## discriminatePictureLightDegree

```TypeScript
discriminatePictureLightDegree(): PictureLightDegree
```

获取图片的明亮程度。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureLightDegree | - 图像颜色明亮程度。 |

## getAlphaZeroTransparentProportion

```TypeScript
getAlphaZeroTransparentProportion(): double
```

获取图像中完全透明的像素占比。

**Since:** 23

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| double | 完全透明的像素占比，比例的取值范围为[0,1]。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

## getAverageColor

```TypeScript
getAverageColor(): Color
```

读取图像平均的颜色值，结果写入[Color]effectKit.Color里，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Color | Color实例，即图像平均的颜色值，失败时返回null。 |

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
      let color = colorPicker.getAverageColor();
      console.info('get average color =' + color);
    }
  })
})

```

## getComplexityDegree

```TypeScript
getComplexityDegree(): PictureComplexityDegree
```

获取图像内容复杂度。

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureComplexityDegree | 图像内容复杂度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

生成与背景色融合且比背景色更深的强沉浸感颜色，并将结果写入[Color]effectKit.Color里。该接口通过颜色混合算法，创建一种既与背景色协调又具有更强沉浸感的颜色效果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - Color实例，即图像强沉浸色对应的颜色值，失败时返回null。 |

## getHighestSaturationColor

```TypeScript
getHighestSaturationColor(): Color
```

读取图像饱和度最高的颜色值，结果写入[Color]effectKit.Color里，使用同步方式返回。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Color | Color实例，即图像饱和度最高的颜色值，失败时返回null。 |

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
      let color = colorPicker.getHighestSaturationColor();
      console.info('get highest saturation color =' + color);
    }
  })
})

```

## getImmersiveBackgroundColor

```TypeScript
getImmersiveBackgroundColor(): Color
```

生成能够创造沉浸式视觉效果的沉浸式背景色，并将结果写入[Color]effectKit.Color里。该接口基于主色生成适合作为沉浸式背景的颜色值。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - Color实例，即图像沉浸式背景色对应的颜色值，失败时返回null。 |

## getImmersiveForegroundColor

```TypeScript
getImmersiveForegroundColor(): Color
```

生成能够创造沉浸式视觉效果的沉浸式前景色，并将结果写入[Color]effectKit.Color里。该接口基于主色生成适合作为沉浸式前景的颜色值。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - Color实例，即图像沉浸式前景色对应的颜色值，失败时返回null。 |

## getLargestProportionColor

```TypeScript
getLargestProportionColor(): Color
```

读取图像中占比最多的颜色值，结果写入[Color]effectKit.Color里，使用同步方式返回。该接口使用中位切分算法划分颜色空间，获取占比最多的颜色空间的平均颜色。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Color | Color实例，即图像占比最多的颜色值，失败时返回null。 |

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
      let color = colorPicker.getLargestProportionColor();
      console.info('get largest proportion color =' + color);
    }
  })
})

```

## getMainColor

```TypeScript
getMainColor(): Promise<Color>
```

读取图像主色的颜色值，结果写入[Color]effectKit.Color里，使用Promise异步回调。该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Color> | Promise对象。返回图像主色对应的颜色值，失败时返回错误信息。 |

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
       colorPicker.getMainColor().then(color => {
        console.info('Succeeded in getting main color.');
         console.info(`color[ARGB]=${color.alpha},${color.red},${color.green},${color.blue}`);
      })
    }
  })
})

```

## getMainColorSync

```TypeScript
getMainColorSync(): Color
```

读取图像主色的颜色值，结果写入[Color]effectKit.Color里，使用同步方式返回。该接口通过图像缩放算法，根据周围像素的加权计算，将原图缩小到1个像素以得到主色。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Color | Color实例，即图像主色对应的颜色值，失败时返回null。 |

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
      let color = colorPicker.getMainColorSync();
      console.info('get main color =' + color);
    }
  })
})

```

## getMorandiShadowColor

```TypeScript
getMorandiShadowColor(): Color
```

从图像的主色中获取莫兰迪阴影色，并将结果写入[Color]effectKit.Color。该接口通过特定的颜色转换算法，将主色调转换为具有莫兰迪风格的阴影色调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - Color实例，即图像莫兰迪阴影色对应的颜色值，失败时返回null。 |

## getReverseColor

```TypeScript
getReverseColor(): Color
```

基于图像亮度判别结果生成反向颜色，并将结果写入[Color]effectKit.Color里。根据 [discriminatePictureLightDegree]effectKit.ColorPicker.discriminatePictureLightDegree接口获取的图片明亮类型得到一个反色， 仅极亮色图片（EXTREMELY_LIGHT_COLOR_PICTURE）类型返回黑色，其他类型返回白色。用于界面主题或对比度计算。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Color | - Color实例，即图像反向颜色对应的颜色值，失败时返回null。 |

## getShadeDegree

```TypeScript
getShadeDegree(): PictureShadeDegree
```

获取图像颜色深浅度。

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| PictureShadeDegree | 图像颜色深浅度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

## getTopProportionColors

```TypeScript
getTopProportionColors(colorCount: int): Array<Color | null>
```

读取图像占比靠前的颜色值，个数由`colorCount`指定，结果写入[Color]effectKit.Color的数组里，使用同步方式返回。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorCount | int | Yes | 需要取主色的个数，向下取整。在OpenHarmony 6.1之前，取值范围为[1, 10]，取色个数大于10视为取前10个；从OpenHarmony 6.1开始，取值范围为[1, 20]，取色个数大于20视为取前20个。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Color \| null> | Color数组，即图像占比前`colorCount`的颜色值数组，按占比排序。  - 当实际读取的特征色个数小于`colorCount`时，数组大小为实际特征色个数。  - 取色失败或取色个数小于1返回`[null]`。 |

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
      let colors = colorPicker.getTopProportionColors(2);
      for(let index = 0; index < colors.length; index++) {
        if (colors[index]) {
          console.info('get top proportion colors: index ' + index + ', color ' + colors[index]);
        }
      }
    }
  })
})

```

## getTopProportionColorsAndPercentage

```TypeScript
getTopProportionColorsAndPercentage(colorCount: int): Map<Color | null, double | null>
```

读取图像占比靠前的颜色值以及对应比例，个数由`colorCount`指定，结果写入Color与其对应比例的字典中，使用同步方式返回。

**Since:** 22

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorCount | int | Yes | 需要取主色及对应比例的个数，向下取整。在OpenHarmony 6.1之前，取值范围为[1, 10]，取色个数大于10视为取前10个；从OpenHarmony 6.1开始，取值范围为[1, 20]，取色个数大于20视为取前20个。 |

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;Color \| null, double \| null> | 图像占比前`colorCount`的颜色值与对应比例的字典，比例的取值范围为[0,1]。  - 当实际读取的特征色个数小于`colorCount`时，字典大小为实际特征色个数。  - 取色失败或取色个数小于1返回`Map()`。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 权限校验失败，非系统应用调用系统接口。 |

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

## isBlackOrWhiteOrGrayColor

```TypeScript
isBlackOrWhiteOrGrayColor(color: long): boolean
```

判断图像是否为黑白灰颜色，返回true或false。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | long | Yes | 需要判断是否黑白灰色的颜色值，取值范围[0x0, 0xFFFFFFFF]。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果图像为黑白灰颜色，则返回true；否则返回false。 |

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
      let bJudge = colorPicker.isBlackOrWhiteOrGrayColor(0xFFFFFFFF);
      console.info('is black or white or gray color[bool](white) =' + bJudge);
    }
  })
})

```

