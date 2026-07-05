# ImageFilter

图像滤波器。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createBlendImageFilter

```TypeScript
static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter
```

按照指定的混合模式对两个滤波器进行叠加，生成一个新的滤波器。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlendMode | Yes | 颜色混合模式。 |
| background | ImageFilter | Yes | 在混合模式中作为目标色的滤波器。 |
| foreground | ImageFilter | Yes | 在混合模式中作为源色的滤波器。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createBlendImageFilter

```TypeScript
static createBlendImageFilter(mode: BlendMode, background: ImageFilter, foreground: ImageFilter): ImageFilter | undefined
```

Makes an ImageFilter object that applies the blend to the input.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlendMode | Yes | Blendmode. |
| background | ImageFilter | Yes | Indicates the input background filter. |
| foreground | ImageFilter | Yes | Indicates the input foreground filter. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createBlurImageFilter

```TypeScript
static createBlurImageFilter(sigmaX: number, sigmaY: number,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter
```

创建具有模糊效果的图像滤波器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sigmaX | number | Yes | 表示沿x轴方向上高斯模糊的标准差，必须大于0，该参数为浮点数。 |
| sigmaY | number | Yes | 表示沿y轴方向上高斯模糊的标准差，必须大于0，该参数为浮点数。 |
| tileMode | TileMode | Yes | 表示在边缘处应用的平铺模式。 |
| imageFilter | ImageFilter \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlurImageFilter

```TypeScript
static createBlurImageFilter(sigmaX: double, sigmaY: double,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter | undefined
```

Creates an image filter with a given blur effect.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sigmaX | double | Yes | Standard deviation of the Gaussian blur along the X axis.  The value must be a floating point number greater than 0. |
| sigmaY | double | Yes | Standard deviation of the Gaussian blur along the Y axis.  The value must be a floating point number greater than 0. |
| tileMode | TileMode | Yes | Tile mode to apply to the edges. |
| imageFilter | ImageFilter \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createComposeImageFilter

```TypeScript
static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter
```

将两个图像滤波器进行级联生成新的图像滤波器，级联时会将第一级滤波器的输出作为第二级滤波器的输入，经过第二级滤波器处理后，输出最终的滤波结果。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cOuter | ImageFilter | Yes | 在级联中，作为第二级的滤波器，处理第一级滤波器的输出。如果第二级滤波器为空，第一级滤波器不为空，最后输出第一级滤波器的结果。两级滤波器不能同时为空。 |
| cInner | ImageFilter | Yes | 在级联中，作为第一级的滤波器，直接处理图像的原始内容。如果第一级滤波器为空，第二级滤波器不为空，最后输出第二级滤波器的结果。两级滤波器不能同时为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

## createComposeImageFilter

```TypeScript
static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter | undefined
```

Makes an ImageFilter object that combines the "inner" and "outer" filters, allowing the output of the "inner" filter to serve as the input source bitmap for the "outer" filter.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cOuter | ImageFilter | Yes | Indicates the instance to apply its effects to the output of the 'inner'  filter. |
| cInner | ImageFilter | Yes | Indicates the output as input for "outer" filters. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

## createFromColorFilter

```TypeScript
static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter
```

创建一个将颜色滤波器应用于传入的图像滤波器的图像滤波器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorFilter | ColorFilter | Yes | 表示颜色滤波器。 |
| imageFilter | ImageFilter \| null | No | 要与当前图像滤波器叠加的输入滤波器，默认为null，表示直接将当前图像滤波器作用于原始图像。 [since 12 - 19] |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createFromColorFilter

```TypeScript
static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter | undefined
```

Creates an image filter object with a given color filter effect.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorFilter | ColorFilter | Yes | Color filter. |
| imageFilter | ImageFilter \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createFromImage

```TypeScript
static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter
```

基于给定的图像创建一个图像滤波器。此接口不建议用于录制类型的画布，会影响性能。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | Yes | 图片对象。 |
| srcRect | common2D.Rect \| null | No |  |
| dstRect | common2D.Rect \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

## createFromImage

```TypeScript
static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter | undefined
```

Makes an ImageFilter object that applies the bitmap to the input.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | Yes | The source input image. |
| srcRect | common2D.Rect \| null | No |  |
| dstRect | common2D.Rect \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

## createFromShaderEffect

```TypeScript
static createFromShaderEffect(shader: ShaderEffect): ImageFilter
```

基于着色器创建一个图像滤波器。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | ShaderEffect | Yes | 表示应用于图像的着色器效果。 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

## createFromShaderEffect

```TypeScript
static createFromShaderEffect(shader: ShaderEffect): ImageFilter | undefined
```

Makes an ImageFilter object that renders the contents of the input Shader.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | ShaderEffect | Yes | Indicates the shader effect to be applied to the image. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

## createOffsetImageFilter

```TypeScript
static createOffsetImageFilter(dx: number, dy: number, input?: ImageFilter | null): ImageFilter
```

创建一个偏移滤波器，将输入的滤波器按照指定向量进行平移。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | number | Yes | 水平方向的平移距离， 该参数为浮点数。 |
| dy | number | Yes | 竖直方向的平移距离， 该参数为浮点数。 |
| input | ImageFilter \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | 返回创建的图像滤波器。 |

## createOffsetImageFilter

```TypeScript
static createOffsetImageFilter(dx: double, dy: double, input?: ImageFilter | null): ImageFilter | undefined
```

Makes an ImageFilter object that instance with the provided x and y offset.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | double | Yes | Indicates the offset in the X direction. |
| dy | double | Yes | Indicates the offset in the Y direction. |
| input | ImageFilter \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | ImageFilter object. |

