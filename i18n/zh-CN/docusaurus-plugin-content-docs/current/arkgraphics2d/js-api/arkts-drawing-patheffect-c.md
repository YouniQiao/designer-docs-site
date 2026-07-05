# PathEffect

路径效果对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createComposePathEffect

```TypeScript
static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect
```

创建路径组合的路径效果对象，首先应用内部路径效果，然后应用外部路径效果。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outer | PathEffect | 是 | 组合路径效果中外部路径效果。 |
| inner | PathEffect | 是 | 组合路径效果中内部路径效果。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createComposePathEffect

```TypeScript
static createComposePathEffect(outer: PathEffect, inner: PathEffect): PathEffect | undefined
```

Creates a path effect by sequentially applying the inner effect and then the outer effect.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outer | PathEffect | 是 | Path effect that is applied second, overlaying the first effect. |
| inner | PathEffect | 是 | Inner path effect that is applied first. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

## createCornerPathEffect

```TypeScript
static createCornerPathEffect(radius: number): PathEffect
```

创建将路径的夹角变成指定半径的圆角的路径效果对象。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | number | 是 | 圆角的半径，必须大于0，该参数为浮点数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createCornerPathEffect

```TypeScript
static createCornerPathEffect(radius: double): PathEffect | undefined
```

Creates a path effect that transforms the sharp angle between line segments into a rounded corner with the specified radius.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| radius | double | 是 | Radius of the rounded corner.  The value must be greater than 0. The value is a floating point number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDashPathEffect

```TypeScript
static createDashPathEffect(intervals: Array<number>, phase: number): PathEffect
```

创建将路径变为虚线的路径效果对象。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| intervals | Array&lt;number> | 是 | 表示虚线的ON（实线部分）和OFF（空白部分）长度的数组，数组个数必须是偶数，且>=2，该参数为正整数。 |
| phase | number | 是 | 绘制时的偏移量，该参数为浮点数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDashPathEffect

```TypeScript
static createDashPathEffect(intervals: Array<double>, phase: double): PathEffect | undefined
```

Creates a PathEffect object that converts a path into a dotted line.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| intervals | Array&lt;double> | 是 | Array of ON and OFF lengths of dotted lines.  The number of arrays must be an even number and be greater than or equal to 2. |
| phase | double | 是 | Offset used during drawing. The value is a floating point number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createDiscretePathEffect

```TypeScript
static createDiscretePathEffect(segLength: number, dev: number, seedAssist?: number): PathEffect
```

创建一种将路径打散，并且在路径上产生不规则分布的效果。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| segLength | number | 是 | 路径中每进行一次打散操作的长度，该长度为浮点数，负数和0时无效果。 |
| dev | number | 是 | 绘制时的末端点的最大移动偏离量，该偏移量为浮点数。 |
| seedAssist | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createDiscretePathEffect

```TypeScript
static createDiscretePathEffect(segLength: double, dev: double, seedAssist?: int): PathEffect | undefined
```

Creates an effect that segments the path and scatters the segments in an irregular pattern along the path.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| segLength | double | 是 | Distance along the path at which each segment is fragmented.  The value is a floating point number.  If a negative number or the value 0 is passed in, no effect is created. |
| dev | double | 是 | Maximum amount by which the end points of the segments can be  randomly displaced during rendering. The value is a floating-point number. |
| seedAssist | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

## createPathDashEffect

```TypeScript
static createPathDashEffect(path: Path, advance: number, phase: number, style: PathDashStyle): PathEffect
```

通过路径描述的形状创建一个虚线路径效果。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path | 是 | 通过该路径生成一个图形，用来填充每个虚线段。 |
| advance | number | 是 | 虚线段的步长，该参数为大于0的浮点数，否则会抛错误码。 |
| phase | number | 是 | 表示虚线段内图形在虚线步长范围内的偏移量，该参数为浮点数，效果为先对偏移量取绝对值，然后对步长取模。 |
| style | PathDashStyle | 是 | 指定虚线效果的样式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createPathDashEffect

```TypeScript
static createPathDashEffect(path: Path, advance: double, phase: double, style: PathDashStyle): PathEffect | undefined
```

Creates a dashed path effect based on the shape described by a path.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | Path | 是 | Path that defines the shape to be used for filling each dash in the pattern. |
| advance | double | 是 | Distance between two consecutive dashes.  The value is a floating point number greater than 0.  Otherwise, an error code is thrown. |
| phase | double | 是 | Starting offset of the dash pattern. The value is a floating point number.  The actual offset used is the absolute value of this value modulo the value of advance. |
| style | PathDashStyle | 是 | Style of the dashed path effect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createSumPathEffect

```TypeScript
static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect
```

创建一个叠加的路径效果。与createComposePathEffect不同，此接口会分别对两个参数的效果各自独立进行表现，然后将两个效果简单重叠显示。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| firstPathEffect | PathEffect | 是 | 表示第一个路径效果。 |
| secondPathEffect | PathEffect | 是 | 表示第二个路径效果。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | 返回创建的路径效果对象。 |

## createSumPathEffect

```TypeScript
static createSumPathEffect(firstPathEffect: PathEffect, secondPathEffect: PathEffect): PathEffect | undefined
```

Creates an overlay path effect based on two distinct path effects. Different from createComposePathEffect, this API applies each effect separately and then displays them as a simple overlay.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| firstPathEffect | PathEffect | 是 | First path effect. |
| secondPathEffect | PathEffect | 是 | Second path effect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PathEffect | PathEffect object. |

