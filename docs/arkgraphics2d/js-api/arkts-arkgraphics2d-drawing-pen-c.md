# Pen

Defines a pen, which is used to describe the style and color to outline a shape.

> **NOTE**  
>  
> - This module uses the physical pixel unit, px.  
>  
> - The module operates under a single-threaded model. The caller needs to manage thread safety and context state  
> transitions.

**Since:** 11

<!--Device-drawing-class Pen--><!--Device-drawing-class Pen-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **Pen** object.

**Since:** 12

<!--Device-Pen-constructor()--><!--Device-Pen-constructor()-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(pen: Pen)
```

Copies a **Pen** object to create a new one.

**Since:** 12

<!--Device-Pen-constructor(pen: Pen)--><!--Device-Pen-constructor(pen: Pen)-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pen | [Pen](arkts-arkgraphics2d-drawing-pen-c.md) | Yes | **Pen** object to copy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="getalpha"></a>
## getAlpha

```TypeScript
getAlpha(): number
```

Obtains the alpha value of this pen.

**Since:** 12

<!--Device-Pen-getAlpha(): int--><!--Device-Pen-getAlpha(): int-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Alpha value of the pen. The return value is an integer ranging from 0 to 255. |

<a id="getcapstyle"></a>
## getCapStyle

```TypeScript
getCapStyle(): CapStyle
```

Obtains the cap style of this pen.

**Since:** 12

<!--Device-Pen-getCapStyle(): CapStyle--><!--Device-Pen-getCapStyle(): CapStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [CapStyle](arkts-arkgraphics2d-drawing-capstyle-e.md) | Cap style. |

<a id="getcolor"></a>
## getColor

```TypeScript
getColor(): common2D.Color
```

Obtains the color of this pen.

**Since:** 12

<!--Device-Pen-getColor(): common2D.Color--><!--Device-Pen-getColor(): common2D.Color-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Color of the pen. |

<a id="getcolor4f"></a>
## getColor4f

```TypeScript
getColor4f(): common2D.Color4f
```

Obtains the pen color. The difference between this method and [getColor](arkts-arkgraphics2d-drawing-pen-c.md#getcolor-1) is that this method returns a floating point number.

**Since:** 20

<!--Device-Pen-getColor4f(): common2D.Color4f--><!--Device-Pen-getColor4f(): common2D.Color4f-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color4f | Color of the pen. |

<a id="getcolorfilter"></a>
## getColorFilter

```TypeScript
getColorFilter(): ColorFilter
```

Obtains the color filter of this pen.

**Since:** 12

<!--Device-Pen-getColorFilter(): ColorFilter--><!--Device-Pen-getColorFilter(): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-colorfilter-c.md) | Color filter. |

<a id="getfillpath"></a>
## getFillPath

```TypeScript
getFillPath(src: Path, dst: Path): boolean
```

Obtains the source path outline drawn using this pen and represents it using a destination path.

**Since:** 12

<!--Device-Pen-getFillPath(src: Path, dst: Path): boolean--><!--Device-Pen-getFillPath(src: Path, dst: Path): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Source path. |
| dst | [Path](arkts-arkgraphics2d-drawing-path-c.md) | Yes | Destination path. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that the source path outline is obtained, and **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="gethexcolor"></a>
## getHexColor

```TypeScript
getHexColor(): number
```

Obtains the color of this pen.

**Since:** 18

<!--Device-Pen-getHexColor(): int--><!--Device-Pen-getHexColor(): int-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Color, represented as a 32-bit unsigned integer in hexadecimal ARGB format. |

<a id="getjoinstyle"></a>
## getJoinStyle

```TypeScript
getJoinStyle(): JoinStyle
```

Obtains the join style of this pen.

**Since:** 12

<!--Device-Pen-getJoinStyle(): JoinStyle--><!--Device-Pen-getJoinStyle(): JoinStyle-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [JoinStyle](arkts-arkgraphics2d-drawing-joinstyle-e.md) | Join style. |

<a id="getmiterlimit"></a>
## getMiterLimit

```TypeScript
getMiterLimit(): number
```

Obtains the maximum ratio allowed between the sharp corner length of a polyline and its line width.

**Since:** 12

<!--Device-Pen-getMiterLimit(): double--><!--Device-Pen-getMiterLimit(): double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum ratio obtained. |

<a id="getwidth"></a>
## getWidth

```TypeScript
getWidth(): number
```

Obtains the stroke width of this pen. The width describes the thickness of the outline of a shape.

**Since:** 12

<!--Device-Pen-getWidth(): double--><!--Device-Pen-getWidth(): double-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Stroke width for the pen, in px. |

<a id="isantialias"></a>
## isAntiAlias

```TypeScript
isAntiAlias(): boolean
```

Checks whether anti-aliasing is enabled for this pen.

**Since:** 12

<!--Device-Pen-isAntiAlias(): boolean--><!--Device-Pen-isAntiAlias(): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that anti-aliasing is enabled, and **false** means the opposite. |

<a id="reset"></a>
## reset

```TypeScript
reset(): void
```

Resets this pen to the initial state.

**Since:** 12

<!--Device-Pen-reset(): void--><!--Device-Pen-reset(): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

<a id="setalpha"></a>
## setAlpha

```TypeScript
setAlpha(alpha: number): void
```

Sets an alpha value for this pen.

**Since:** 11

<!--Device-Pen-setAlpha(alpha: int): void--><!--Device-Pen-setAlpha(alpha: int): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | number | Yes | Alpha value. The value is an integer in the range [0, 255]. If a floating point number is passed in, the value is rounded down. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setantialias"></a>
## setAntiAlias

```TypeScript
setAntiAlias(aa: boolean): void
```

Enables anti-aliasing for this pen. Anti-aliasing makes the edges of the content smoother. If this API is not called, anti-aliasing is disabled by default.

**Since:** 11

<!--Device-Pen-setAntiAlias(aa: boolean): void--><!--Device-Pen-setAntiAlias(aa: boolean): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aa | boolean | Yes | Whether to enable anti-aliasing. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setblendmode"></a>
## setBlendMode

```TypeScript
setBlendMode(mode: BlendMode): void
```

Sets a blend mode for this pen.

**Since:** 11

<!--Device-Pen-setBlendMode(mode: BlendMode): void--><!--Device-Pen-setBlendMode(mode: BlendMode): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [BlendMode](../../apis-arkui/arkts-components/arkts-arkui-blendmode-e.md) | Yes | Blend mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setcapstyle"></a>
## setCapStyle

```TypeScript
setCapStyle(style: CapStyle): void
```

Sets the cap style for this pen. If this API is not called, the default cap style is **FLAT_CAP**.

**Since:** 12

<!--Device-Pen-setCapStyle(style: CapStyle): void--><!--Device-Pen-setCapStyle(style: CapStyle): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [CapStyle](arkts-arkgraphics2d-drawing-capstyle-e.md) | Yes | Cap style. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setcolor"></a>
## setColor

```TypeScript
setColor(color: common2D.Color): void
```

Sets a color for this pen.

**Since:** 11

<!--Device-Pen-setColor(color: common2D.Color): void--><!--Device-Pen-setColor(color: common2D.Color): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color | Yes | Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setcolor-1"></a>
## setColor

```TypeScript
setColor(alpha: number, red: number, green: number, blue: number): void
```

Sets a color for this pen. This API provides better performance than [setColor](arkts-arkgraphics2d-drawing-pen-c.md#setcolor-1) and is recommended.

**Since:** 12

<!--Device-Pen-setColor(alpha: int, red: int, green: int, blue: int): void--><!--Device-Pen-setColor(alpha: int, red: int, green: int, blue: int): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | number | Yes | Alpha channel value of the color in ARGB format. The value is an integer ranging from 0 to255. Any passed-in floating point number is rounded down. |
| red | number | Yes | Red channel value of the color in ARGB format. The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down. |
| green | number | Yes | Green channel value of the color in ARGB format. The value is an integer ranging from 0 to255. Any passed-in floating point number is rounded down. |
| blue | number | Yes | Blue channel value of the color in ARGB format. The value is an integer ranging from 0 to 255. Any passed-in floating point number is rounded down. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setcolor-2"></a>
## setColor

```TypeScript
setColor(color: number): void
```

Sets a color for this pen.

**Since:** 18

<!--Device-Pen-setColor(color: int): void--><!--Device-Pen-setColor(color: int): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | number | Yes | Color in hexadecimal ARGB format. |

<a id="setcolor4f"></a>
## setColor4f

```TypeScript
setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void
```

Sets the color and standard color gamut for this pen. The difference between this method and [setColor](arkts-arkgraphics2d-drawing-pen-c.md#setcolor-1) is that the color gamut can be set separately.

**Since:** 20

<!--Device-Pen-setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void--><!--Device-Pen-setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color4f | common2D.Color4f | Yes | Color in the ARGB format. The value of each color channel is a floating point number ranging from 0.0 to 1.0. Values above 1.0 default to **1.0**, and values below 0.0 default to **0.0**. |
| colorSpace | colorSpaceManager.ColorSpaceManager \| null | Yes | Standard color gamut object. **null** indicates SRGB. |

<a id="setcolorfilter"></a>
## setColorFilter

```TypeScript
setColorFilter(filter: ColorFilter | null): void
```

Sets a color filter for this pen.

**Since:** 11

<!--Device-Pen-setColorFilter(filter: ColorFilter | null): void--><!--Device-Pen-setColorFilter(filter: ColorFilter | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-colorfilter-c.md) \| null | Yes | Defines a color filter. If **null** is passed in, the color filter is cleared.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setdither"></a>
## setDither

```TypeScript
setDither(dither: boolean): void
```

Enables dithering for this pen. Dithering make the drawn color more realistic.

**Since:** 11

<!--Device-Pen-setDither(dither: boolean): void--><!--Device-Pen-setDither(dither: boolean): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dither | boolean | Yes | Whether to enable dithering. **true** to enable, **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setimagefilter"></a>
## setImageFilter

```TypeScript
setImageFilter(filter: ImageFilter | null): void
```

Sets an image filter for this pen.

**Since:** 12

<!--Device-Pen-setImageFilter(filter: ImageFilter | null): void--><!--Device-Pen-setImageFilter(filter: ImageFilter | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [ImageFilter](arkts-arkgraphics2d-drawing-imagefilter-c.md) \| null | Yes | Image filter. If **null** is passed in, the image filter effect of the pen will be cleared. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setjoinstyle"></a>
## setJoinStyle

```TypeScript
setJoinStyle(style: JoinStyle): void
```

Sets the join style for this pen. If this API is not called, the default join style is **MITER_JOIN**.

**Since:** 12

<!--Device-Pen-setJoinStyle(style: JoinStyle): void--><!--Device-Pen-setJoinStyle(style: JoinStyle): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [JoinStyle](arkts-arkgraphics2d-drawing-joinstyle-e.md) | Yes | Join style. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

<a id="setmaskfilter"></a>
## setMaskFilter

```TypeScript
setMaskFilter(filter: MaskFilter | null): void
```

Adds a mask filter for this pen.

**Since:** 12

<!--Device-Pen-setMaskFilter(filter: MaskFilter | null): void--><!--Device-Pen-setMaskFilter(filter: MaskFilter | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [MaskFilter](arkts-arkgraphics2d-drawing-maskfilter-c.md) \| null | Yes | Mask filter. If **null** is passed in, the mask filter is cleared.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setmiterlimit"></a>
## setMiterLimit

```TypeScript
setMiterLimit(miter: number): void
```

Sets the maximum ratio allowed between the sharp corner length of a polyline and its line width. When drawing a polyline with the pen, if [JoinStyle](arkts-arkgraphics2d-drawing-joinstyle-e.md) is set to **MITER_JOIN** and this maximum ratio is exceeded, the corner will be displayed as beveled instead of mitered.

**Since:** 12

<!--Device-Pen-setMiterLimit(miter: double): void--><!--Device-Pen-setMiterLimit(miter: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| miter | number | Yes | Maximum ratio of the sharp corner length of the polyline to the line width. A negative number is processed as **4.0** during drawing. Non-negative numbers take effect normally. The value is a floating point number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setpatheffect"></a>
## setPathEffect

```TypeScript
setPathEffect(effect: PathEffect | null): void
```

Sets the path effect for this pen.

**Since:** 12

<!--Device-Pen-setPathEffect(effect: PathEffect | null): void--><!--Device-Pen-setPathEffect(effect: PathEffect | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [PathEffect](arkts-arkgraphics2d-drawing-patheffect-c.md) \| null | Yes | Implements a path effect. If **null** is passed in, the path filter is cleared.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setshadereffect"></a>
## setShaderEffect

```TypeScript
setShaderEffect(shaderEffect: ShaderEffect | null): void
```

Sets the shader effect for this pen.

**Since:** 12

<!--Device-Pen-setShaderEffect(shaderEffect: ShaderEffect | null): void--><!--Device-Pen-setShaderEffect(shaderEffect: ShaderEffect | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shaderEffect | [ShaderEffect](arkts-arkgraphics2d-drawing-shadereffect-c.md) \| null | Yes | **ShaderEffect** object. If **null** is passed in, the shader effect will be cleared.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setshadowlayer"></a>
## setShadowLayer

```TypeScript
setShadowLayer(shadowLayer: ShadowLayer | null): void
```

Sets a shadow layer for this pen. The shadow layer effect takes effect only when text is drawn.

**Since:** 12

<!--Device-Pen-setShadowLayer(shadowLayer: ShadowLayer | null): void--><!--Device-Pen-setShadowLayer(shadowLayer: ShadowLayer | null): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shadowLayer | [ShadowLayer](arkts-arkgraphics2d-drawing-shadowlayer-c.md) \| null | Yes | Implements a shadow layer. If **null** is passed in, the shadow layer is cleared.<br>**Since:** 20 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

<a id="setstrokewidth"></a>
## setStrokeWidth

```TypeScript
setStrokeWidth(width: number): void
```

Sets the stroke width for this pen. The value **0** is treated as an unusually thin width. During drawing, the width of 0 is always drawn as 1 pixel wide, regardless of any scaling applied to the canvas. Negative values are also regarded as the value **0** during the drawing process.

**Since:** 11

<!--Device-Pen-setStrokeWidth(width: double): void--><!--Device-Pen-setStrokeWidth(width: double): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Stroke width. The value is a floating point number. If a value less than 1 is passed in, the value **1** is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

