# ColorFilter

Defines a color filter.

> **NOTE**  
>  
> - This module uses the physical pixel unit, px.  
>  
> - This module operates under a single-threaded model. The caller needs to manage thread safety and context state  
> transitions.

**Since:** 11

<!--Device-drawing-class ColorFilter--><!--Device-drawing-class ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter
```

Creates a **ColorFilter** object with a given color and blend mode.

**Since:** 11

<!--Device-ColorFilter-static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter--><!--Device-ColorFilter-static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color | Yes | Color in ARGB format. The value of each color channel is an integer ranging from 0 to 255. |
| mode | [BlendMode](../../apis-arkui/arkts-components/arkts-arkui-common-blendmode-e.md) | Yes | Blend mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter
```

Creates a **ColorFilter** object with a given color and blend mode.

**Since:** 18

<!--Device-ColorFilter-static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter--><!--Device-ColorFilter-static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color \| number | Yes | Color, represented by an unsigned integer in hexadecimal ARGB format. |
| mode | [BlendMode](../../apis-arkui/arkts-components/arkts-arkui-common-blendmode-e.md) | Yes | Blend mode. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## createComposeColorFilter

```TypeScript
static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter
```

Creates a **ColorFilter** object by combining another two color filters.

**Since:** 11

<!--Device-ColorFilter-static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter--><!--Device-ColorFilter-static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outer | [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Yes | Color filter that takes effect later in the new filter. |
| inner | [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Yes | Color filter that takes effect first in the new filter. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

## createLightingColorFilter

```TypeScript
static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter
```

Creates a lighting color filter. It multiplies the RGB channel values by one color and then adds another color value. The final output stays between 0 and 255.

**Since:** 20

<!--Device-ColorFilter-static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter--><!--Device-ColorFilter-static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mutColor | common2D.Color \| number | Yes | Color used for multiplication. The value is in the ARGB format, and each color channel is an integer ranging from 0 to 255. If the value is of the number type, it must be an unsigned integer in the hexadecimal ARGB format. |
| addColor | common2D.Color \| number | Yes | Color used for addition. The value is in the ARGB format, and each color channel is an integer ranging from 0 to 255. If the value is of the number type, it must be an unsigned integer in the hexadecimal ARGB format. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | **ColorFilter** object created. |

## createLinearToSRGBGamma

```TypeScript
static createLinearToSRGBGamma(): ColorFilter
```

Creates a **ColorFilter** object that applies the sRGB gamma curve to the RGB channels.

**Since:** 11

<!--Device-ColorFilter-static createLinearToSRGBGamma(): ColorFilter--><!--Device-ColorFilter-static createLinearToSRGBGamma(): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

## createLumaColorFilter

```TypeScript
static createLumaColorFilter(): ColorFilter
```

Creates a **ColorFilter** object that multiplies the luma into the alpha channel and sets the RGB channels to zero.

**Since:** 11

<!--Device-ColorFilter-static createLumaColorFilter(): ColorFilter--><!--Device-ColorFilter-static createLumaColorFilter(): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

## createMatrixColorFilter

```TypeScript
static createMatrixColorFilter(matrix: Array<number>): ColorFilter
```

Creates a color filter object with a 4*5 color matrix.

**Since:** 12

<!--Device-ColorFilter-static createMatrixColorFilter(matrix: Array<double>): ColorFilter--><!--Device-ColorFilter-static createMatrixColorFilter(matrix: Array<double>): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | An array of 20 numbers, indicating the 4*5 matrix. |

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## createSRGBGammaToLinear

```TypeScript
static createSRGBGammaToLinear(): ColorFilter
```

Creates a **ColorFilter** object that applies the RGB channels to the sRGB gamma curve.

**Since:** 11

<!--Device-ColorFilter-static createSRGBGammaToLinear(): ColorFilter--><!--Device-ColorFilter-static createSRGBGammaToLinear(): ColorFilter-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| [ColorFilter](../../apis-arkui/arkts-apis/arkts-arkui-units-colorfilter-c.md) | Color filter. |

