# ImageFilter

Implements an image filter. > **NOTE** > > - The initial APIs of this class are supported since API version 12. > > - This module uses the physical pixel unit, px. > > - This module operates under a single-threaded model. The caller needs to manage thread safety and context state > transitions.

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

Creates a filter by blending two existing filters in a certain way.

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlendMode | Yes | Blend mode. |
| background | ImageFilter | Yes | Filter that serves as the destination color in blend mode. |
| foreground | ImageFilter | Yes | Filter that serves as the source color in blend mode. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

## createBlurImageFilter

```TypeScript
static createBlurImageFilter(sigmaX: number, sigmaY: number,
        tileMode: TileMode, imageFilter?: ImageFilter | null): ImageFilter
```

Creates an image filter with a given blur effect.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sigmaX | number | Yes | Standard deviation of the Gaussian blur along the X axis. The value must be a floatingpoint number greater than 0. |
| sigmaY | number | Yes | Standard deviation of the Gaussian blur along the Y axis. The value must be a floatingpoint number greater than 0. |
| tileMode | TileMode | Yes | Tile mode to apply to the edges. |
| imageFilter | ImageFilter \| null | No | Filter to which the image filter will be applied. The default valueis null, indicating that the image filter is directly applied to the original image. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## createComposeImageFilter

```TypeScript
static createComposeImageFilter(cOuter: ImageFilter, cInner: ImageFilter): ImageFilter
```

Cascades two image filters to create a new image filter. The first filter's output becomes the second filter's input. The second filter then processes this input to produce the final result.

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cOuter | ImageFilter | Yes | The second filter in the cascade, which processes the first filter's output. Ifthe second filter is empty and the first filter is not empty, the final result is the first filter's output.The two filters cannot be empty at the same time. |
| cInner | ImageFilter | Yes | The first filter in the cascade, which directly processes the original imagecontent. If the first filter is empty and the second filter is not empty, the final result is the secondfilter's output. The two filters cannot be empty at the same time. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

## createFromColorFilter

```TypeScript
static createFromColorFilter(colorFilter: ColorFilter, imageFilter?: ImageFilter | null): ImageFilter
```

Creates an image filter object with a given color filter effect.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorFilter | ColorFilter | Yes | Color filter. |
| imageFilter | ImageFilter \| null | No | Filter to which the image filter will be applied. The default valueis null, indicating that the image filter is directly applied to the original image.<br>**Since:** 20 |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

## createFromImage

```TypeScript
static createFromImage(pixelmap: image.PixelMap, srcRect?: common2D.Rect | null, dstRect?: common2D.Rect | null): ImageFilter
```

Creates an image filter from a given image. You are advised not to use the function for the canvas of the capture type because it affects the performance.

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | Yes | Image object. |
| srcRect | common2D.Rect \| null | No | (Optional) Pixel area of the image to be applied to the filter. Thisparameter is left empty by default, which means that the entire **PixelMap** area is applied. |
| dstRect | common2D.Rect \| null | No | (Optional) Area to be rendered. This parameter is left empty bydefault, which means that the value is the same as that of **srcRect**. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

## createFromShaderEffect

```TypeScript
static createFromShaderEffect(shader: ShaderEffect): ImageFilter
```

Creates an **ImageFilter** object based on a shader.

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | ShaderEffect | Yes | Shader effect to be applied to the image. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

## createOffsetImageFilter

```TypeScript
static createOffsetImageFilter(dx: number, dy: number, input?: ImageFilter | null): ImageFilter
```

Creates an offset filter to translate the input filter based on the specified vector.

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | number | Yes | Horizontal translation distance. The value is a floating point number. |
| dy | number | Yes | Vertical translation distance. The value is a floating point number. |
| input | ImageFilter \| null | No | Filter to be translated. This parameter is left empty by default, whichmeans that the drawing result without the filtering effect is translated. |

**Return value:**

| Type | Description |
| --- | --- |
| ImageFilter | Image filter created. |

