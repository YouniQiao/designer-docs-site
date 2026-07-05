# PathEffect

路径效果对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createComposePathEffect

```TypeScript
static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect
```

创建路径组合的路径效果对象，首先应用内部路径效果，然后应用外部路径效果。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outer | PathEffect | Yes | 组合路径效果中外部路径效果。 |
| inner | PathEffect | Yes | 组合路径效果中内部路径效果。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createComposePathEffect

```TypeScript
static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect | undefined
```

Creates a path effect by sequentially applying the inner effect and then the outer effect.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outer | PathEffect | Yes | Path effect that is applied second, overlaying the first effect. |
| inner | PathEffect | Yes | Inner path effect that is applied first. |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

## createCornerPathEffect

```TypeScript
static createCornerPathEffect(radius: number): PathEffect
```

创建将路径的夹角变成指定半径的圆角的路径效果对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | number | Yes | 圆角的半径，必须大于0，该参数为浮点数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createCornerPathEffect

```TypeScript
static createCornerPathEffect(radius: double): PathEffect | undefined
```

Creates a path effect that transforms the sharp angle between line segments into a rounded corner with the specified radius.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | double | Yes | Radius of the rounded corner.  The value must be greater than 0. The value is a floating point number. |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDashPathEffect

```TypeScript
static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect
```

创建将路径变为虚线的路径效果对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intervals | Array&lt;number> | Yes | 表示虚线的ON（实线部分）和OFF（空白部分）长度的数组，数组个数必须是偶数，且>=2，该参数为正整数。 |
| phase | number | Yes | 绘制时的偏移量，该参数为浮点数。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDashPathEffect

```TypeScript
static createDashPathEffect(intervals: Array<double>, phase: double): PathEffect | undefined
```

Creates a PathEffect object that converts a path into a dotted line.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intervals | Array&lt;double> | Yes | Array of ON and OFF lengths of dotted lines.  The number of arrays must be an even number and be greater than or equal to 2. |
| phase | double | Yes | Offset used during drawing. The value is a floating point number. |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDiscretePathEffect

```TypeScript
static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect
```

创建一种将路径打散，并且在路径上产生不规则分布的效果。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| segLength | number | Yes | 路径中每进行一次打散操作的长度，该长度为浮点数，负数和0时无效果。 |
| dev | number | Yes | 绘制时的末端点的最大移动偏离量，该偏移量为浮点数。 |
| seedAssist | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createDiscretePathEffect

```TypeScript
static createDiscretePathEffect(segLength: double, dev: double, seedAssist?: int): PathEffect | undefined
```

Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| segLength | double | Yes | Distance along the path at which each segment is fragmented.  The value is a floating point number.  If a negative number or the value 0 is passed in, no effect is created. |
| dev | double | Yes | Maximum amount by which the end points of the segments can be  randomly displaced during rendering. The value is a floating-point number. |
| seedAssist | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

## createPathDashEffect

```TypeScript
static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect
```

通过路径描述的形状创建一个虚线路径效果。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path | Yes | 通过该路径生成一个图形，用来填充每个虚线段。 |
| advance | number | Yes | 虚线段的步长，该参数为大于0的浮点数，否则会抛错误码。 |
| phase | number | Yes | 表示虚线段内图形在虚线步长范围内的偏移量，该参数为浮点数，效果为先对偏移量取绝对值，然后对步长取模。 |
| style | PathDashStyle | Yes | 指定虚线效果的样式。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createPathDashEffect

```TypeScript
static createPathDashEffect(path: Path, advance: double, phase: double, style: PathDashStyle): PathEffect | undefined
```

Creates a dashed path effect based on the shape described by a path.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | Path | Yes | Path that defines the shape to be used for filling each dash in the pattern. |
| advance | double | Yes | Distance between two consecutive dashes.  The value is a floating point number greater than 0.  Otherwise, an error code is thrown. |
| phase | double | Yes | Starting offset of the dash pattern. The value is a floating point number.  The actual offset used is the absolute value of this value modulo the value of advance. |
| style | PathDashStyle | Yes | Style of the dashed path effect. |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createSumPathEffect

```TypeScript
static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect
```

创建一个叠加的路径效果。与createComposePathEffect不同，此接口会分别对两个参数的效果各自独立进行表现，然后将两个效果简单重叠显示。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstPathEffect | PathEffect | Yes | 表示第一个路径效果。 |
| secondPathEffect | PathEffect | Yes | 表示第二个路径效果。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createSumPathEffect

```TypeScript
static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect | undefined
```

Creates an overlay path effect based on two distinct path effects. Different from createComposePathEffect, this API applies each effect separately and then displays them as a simple overlay.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| firstPathEffect | PathEffect | Yes | First path effect. |
| secondPathEffect | PathEffect | Yes | Second path effect. |

**Return value:**

| Type | Description |
| --- | --- |
| PathEffect | PathEffect object. |

