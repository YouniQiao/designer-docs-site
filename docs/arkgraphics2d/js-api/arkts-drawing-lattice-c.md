# Lattice

矩形网格对象。该对象用于将图片按照矩形网格进行划分。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

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

创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网 格将进行缩放，来适应剩余的空间。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | Array&lt;number> | Yes | 用于划分图像的X坐标值数组。该参数为整数。 |
| yDivs | Array&lt;number> | Yes | 用于划分图像的Y坐标值数组。该参数为整数。 |
| fXCount | number | Yes | X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。 |
| fYCount | number | Yes | Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。 |
| fBounds | common2D.Rect \| null | No |  |
| fRectTypes | Array&lt;RectType> \| null | No |  |
| fColors | Array&lt;common2D.Color> \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Lattice | 返回创建的矩形网格对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createImageLattice

```TypeScript
static createImageLattice(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<common2D.Color> | null): Lattice | undefined
```

Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | Array&lt;int> | Yes | Array of X coordinates used to divide the image. The value is an integer. |
| yDivs | Array&lt;int> | Yes | Array of Y coordinates used to divide the image. The value is an integer. |
| fXCount | int | Yes | Size of the array that holds the X coordinates. The value range is [0, 5]. |
| fYCount | int | Yes | Size of the array that holds the Y coordinates. The value range is [0, 5]. |
| fBounds | common2D.Rect \| null | No |  |
| fRectTypes | Array&lt;RectType> \| null | No |  |
| fColors | Array&lt;common2D.Color> \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Lattice | Lattice object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createImageLattice

```TypeScript
static createImageLattice(xDivs: Array<number>, yDivs: Array<number>, fXCount: number, fYCount: number,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<number> | null): Lattice
```

创建矩形网格对象。将图像划分为矩形网格，同时处于偶数列和偶数行上的网格是固定的，如果目标网格足够大，则这些固定网格以其原始大小进行绘制。如果目标网格太小，无法容纳这些固定网格，则所有固定网格都会按比例缩小以适应目标网格。其余网 格将进行缩放，来适应剩余的空间。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | Array&lt;number> | Yes | 用于划分图像的X坐标值数组。该参数为整数。 |
| yDivs | Array&lt;number> | Yes | 用于划分图像的Y坐标值数组。该参数为整数。 |
| fXCount | number | Yes | X坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。 |
| fYCount | number | Yes | Y坐标值数组的大小。基于功能和性能的考虑，取值范围为[0, 5]。 |
| fBounds | common2D.Rect \| null | No |  |
| fRectTypes | Array&lt;RectType> \| null | No |  |
| fColors | Array&lt;number> \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Lattice | 返回创建的矩形网格对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createImageLatticeWithArrayInt

```TypeScript
static createImageLatticeWithArrayInt(xDivs: Array<int>, yDivs: Array<int>, fXCount: int, fYCount: int,
        fBounds?: common2D.Rect | null, fRectTypes?: Array<RectType> | null, fColors?: Array<int> | null): Lattice | undefined
```

Divides the image into lattices. The lattices on both even columns and even rows are fixed, and they are drawn at their original size if the target is large enough. If the target is too small to hold the fixed lattices, all the fixed lattices are scaled down to fit the target, and the lattices that are not on even columns and even rows are scaled to accommodate the remaining space.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xDivs | Array&lt;int> | Yes | Array of X coordinates used to divide the image. The value is an integer. |
| yDivs | Array&lt;int> | Yes | Array of Y coordinates used to divide the image. The value is an integer. |
| fXCount | int | Yes | Size of the array that holds the X coordinates. The value range is [0, 5]. |
| fYCount | int | Yes | Size of the array that holds the Y coordinates. The value range is [0, 5]. |
| fBounds | common2D.Rect \| null | No |  |
| fRectTypes | Array&lt;RectType> \| null | No |  |
| fColors | Array&lt;int> \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Lattice | Lattice object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

