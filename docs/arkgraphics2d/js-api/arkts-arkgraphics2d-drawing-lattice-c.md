# Lattice

Lattice object. which is used to divide an image by lattice.

> **NOTE**  
>  
> - The initial APIs of this class are supported since API version 12.  
>  
> - This module uses the physical pixel unit, px.  
>  
> - This module operates under a single-threaded model. The caller needs to manage thread safety and context state  
> transitions.

**Since:** 12

<!--Device-drawing-class Lattice--><!--Device-drawing-class Lattice-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createImageLattice

```TypeScript
static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice
```

Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.

**Since:** 12

<!--Device-Lattice-static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice--><!--Device-Lattice-static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Array of X coordinates used to divide the image. The value is an integer. |
| yDivs | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Array of Y coordinates used to divide the image. The value is an integer. |
| fXCount | number | Yes | Size of the array that holds the X coordinates. The value range is [0, 5]. |
| fYCount | number | Yes | Size of the array that holds the Y coordinates. The value range is [0, 5]. |
| fBounds | common2D.Rect \| null | No | Source bounds to draw. The rectangle parameter must be an integer.The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the decimal part is discarded and converted into an integer. |
| fRectTypes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<RectType> \| null | No | Array that holds the rectangle types. The default value is null.If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1). |
| fColors | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<common2D.Color> \| null | No | Array that holds the colors used to fill the lattices. The default value is null. If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Lattice](arkts-arkgraphics2d-drawing-lattice-c.md) | **Lattice** object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

## createImageLattice

```TypeScript
static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice
```

Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.

**Since:** 18

<!--Device-Lattice-static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice--><!--Device-Lattice-static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Array of X coordinates used to divide the image. The value is an integer. |
| yDivs | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | Array of Y coordinates used to divide the image. The value is an integer. |
| fXCount | number | Yes | Size of the array that holds the X coordinates. The value range is [0, 5]. |
| fYCount | number | Yes | Size of the array that holds the Y coordinates. The value range is [0, 5]. |
| fBounds | common2D.Rect \| null | No | Source bounds to draw. The rectangle parameter must be an integer.The default value is the rectangle size of the original image. If the rectangle parameter is a decimal, the decimal part is discarded and converted into an integer. |
| fRectTypes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<RectType> \| null | No | Array that holds the rectangle types. The default value is null.If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1). |
| fColors | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> \| null | No | Array that holds the colors used to fill the lattices. Each color is represented by a 32-bit unsigned integer in hexadecimal ARGB format. The default value is null. If this parameter is specified, the array size must be (fXCount + 1) * (fYCount + 1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Lattice](arkts-arkgraphics2d-drawing-lattice-c.md) | **Lattice** object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

