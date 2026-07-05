# Matrix

矩阵对象。 表示为3*3的矩阵，如下图所示： ![matrix_3x3](docroot://reference/apis-arkgraphics2d/figures/matrix3X3.PNG) 矩阵中的元素从左到右，从上到下分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X轴透视系数、Y轴透视系数、透视缩放系数。 设(x<sub>1</sub>, y<sub>1</sub>)为源坐标点，(x<sub>2</sub>, y<sub>2</sub>)为源坐标点通过矩阵变换后的坐标点，则两个坐标点的关系如下： ![matrix_xy](docroot://reference/apis-arkgraphics2d/figures/matrix_xy.PNG) > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## constructor

```TypeScript
constructor()
```

构造一个矩阵对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## constructor

```TypeScript
constructor(matrix: Matrix)
```

拷贝一个矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Matrix | Yes | 被拷贝的矩阵。 |

## getAll

```TypeScript
getAll(): Array<number>
```

获取矩阵的所有元素值。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number> | 存储矩阵元素值的浮点数组，长度为9。 |

## getAll

```TypeScript
getAll(): Array<double> | undefined
```

Obtains all element values of this matrix.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;double> | nine scalar values contained by Matrix. |

## getValue

```TypeScript
getValue(index: int): double
```

获取矩阵给定索引位的值。索引范围0-8。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | 索引位置，范围0-8，该参数为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 函数返回矩阵给定索引位对应的值，该返回值为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## invert

```TypeScript
invert(matrix: Matrix): boolean
```

将矩阵matrix设置为当前矩阵的逆矩阵，并返回是否设置成功的结果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Matrix | Yes | 矩阵对象，用于存储获取到的逆矩阵。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回matrix是否被设置为逆矩阵的结果。true表示当前矩阵可逆，matrix被设置为逆矩阵，false表示当前矩阵不可逆，matrix不被设置。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## isAffine

```TypeScript
isAffine(): boolean
```

判断当前矩阵是否为仿射矩阵。仿射矩阵是一种包括平移、旋转、缩放等变换的矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回当前矩阵是否为仿射矩阵。true表示是仿射矩阵，false表示不是仿射矩阵。 |

## isEqual

```TypeScript
isEqual(matrix: Matrix): boolean
```

判断两个矩阵是否相等。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Matrix | Yes | 另一个矩阵。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回两个矩阵的比较结果。true表示两个矩阵相等，false表示两个矩阵不相等。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## isIdentity

```TypeScript
isIdentity(): boolean
```

判断矩阵是否是单位矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回矩阵是否是单位矩阵。true表示矩阵是单位矩阵，false表示矩阵不是单位矩阵。 |

## mapPoints

```TypeScript
mapPoints(src: Array<common2D.Point>): Array<common2D.Point>
```

通过矩阵变换将源点数组映射到目标点数组。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Array&lt;common2D.Point> | Yes | 源点数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Array of points obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## mapPoints

```TypeScript
mapPoints(src: Array<common2D.Point>): Array<common2D.Point> | undefined
```

Maps a source point array to a destination point array by means of matrix transformation.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Array&lt;common2D.Point> | Yes | Array of source points. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Return mapped points array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## mapRadius

```TypeScript
mapRadius(radius: double): double
```

返回半径为radius的圆经过当前矩阵映射形成的椭圆的平均半径。平均半径的平方为椭圆长轴长度和短轴长度的乘积。若当前矩阵包含透视变换，则该结果无意义。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | double | Yes | 用于计算的圆的半径，浮点数。如果是负数，则按照绝对值进行计算。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 返回经过变换之后的平均半径。 |

## mapRect

```TypeScript
mapRect(dst: common2D.Rect, src: common2D.Rect): boolean
```

将目标矩形设置为源矩形通过矩阵变换后的图形的外接矩形。如下图所示，蓝色矩形为源矩形，假设黄色矩形为源矩形通过矩阵变换形成的图形，此时黄色矩形的边不与坐标轴平行，无法使用矩形对象表示，因此，将目标矩形设置为黄色矩形的外接矩形，即 黑色矩形。 ![mapRect](docroot://reference/apis-arkgraphics2d/figures/zh-ch_matrix_mapRect.png)

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dst | common2D.Rect | Yes | 目标矩形对象，用于存储源矩形经矩阵变换后的图形的外接矩形。 |
| src | common2D.Rect | Yes | 源矩形对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回源矩形经过矩阵变换后的图形是否仍然是矩形，true表示是矩形，false表示不是矩形。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## postConcat

```TypeScript
postConcat(matrix: Matrix): void
```

用当前矩阵右乘一个矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Matrix | Yes | 用于运算的矩阵。 |

## postRotate

```TypeScript
postRotate(degree: double, px: double, py: double): void
```

将矩阵设置为矩阵右乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| degree | double | Yes | 旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。 |
| px | double | Yes | 旋转中心点的横坐标，该参数为浮点数。 |
| py | double | Yes | 旋转中心点的纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## postScale

```TypeScript
postScale(sx: double, sy: double, px: double, py: double): void
```

将矩阵设置为矩阵右乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sx | double | Yes | x轴方向缩放系数，负数表示先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。 |
| sy | double | Yes | y轴方向缩放系数，负数表示先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。 |
| px | double | Yes | 缩放中心点的横坐标，该参数为浮点数。 |
| py | double | Yes | 缩放中心点的纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## postSkew

```TypeScript
postSkew(kx: double, ky: double, px: double, py: double): void
```

当前矩阵右乘一个倾斜变换矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| kx | double | Yes | x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。 |
| ky | double | Yes | y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。 |
| px | double | Yes | 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。 |
| py | double | Yes | 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。 |

## postTranslate

```TypeScript
postTranslate(dx: double, dy: double): void
```

将矩阵设置为矩阵右乘平移一定距离后的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | double | Yes | x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。 |
| dy | double | Yes | y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## preConcat

```TypeScript
preConcat(matrix: Matrix): void
```

将当前矩阵设置为当前矩阵左乘matrix的结果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Matrix | Yes | 表示矩阵对象，位于乘法表达式右侧。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## preRotate

```TypeScript
preRotate(degree: double, px: double, py: double): void
```

将矩阵设置为矩阵左乘围绕轴心点旋转一定角度的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| degree | double | Yes | 旋转角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。 |
| px | double | Yes | 旋转中心点的横坐标，该参数为浮点数。 |
| py | double | Yes | 旋转中心点的纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## preScale

```TypeScript
preScale(sx: double, sy: double, px: double, py: double): void
```

将矩阵设置为矩阵左乘围绕轴心点按一定缩放系数缩放后的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sx | double | Yes | x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。 |
| sy | double | Yes | y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。 |
| px | double | Yes | 轴心点横坐标，该参数为浮点数。 |
| py | double | Yes | 轴心点纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## preSkew

```TypeScript
preSkew(kx: double, ky: double, px: double, py: double): void
```

当前矩阵左乘一个倾斜变换矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| kx | double | Yes | x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。 |
| ky | double | Yes | y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。 |
| px | double | Yes | 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。 |
| py | double | Yes | 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。 |

## preTranslate

```TypeScript
preTranslate(dx: double, dy: double): void
```

将矩阵设置为矩阵左乘平移一定距离后的单位矩阵后得到的矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | double | Yes | x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。 |
| dy | double | Yes | y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## rectStaysRect

```TypeScript
rectStaysRect(): boolean
```

判断经过该矩阵映射后的矩形的形状是否仍为矩形。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回经过该矩阵映射后的矩形的形状是否仍为矩形。true表示仍是矩形，false表示不是矩形。 |

## reset

```TypeScript
reset(): void
```

重置当前矩阵为单位矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## setConcat

```TypeScript
setConcat(matrixA: Matrix, matrixB: Matrix): void
```

用两个矩阵的乘积更新当前矩阵。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrixA | Matrix | Yes | 用于运算的矩阵A。 |
| matrixB | Matrix | Yes | 用于运算的矩阵B。 |

## setMatrix

```TypeScript
setMatrix(values: Array<double>): void
```

设置矩阵对象的各项参数。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| values | Array&lt;double> | Yes | 长度为9的浮点数组，表示矩阵对象参数。数组中的值按下标从小，到大分别表示水平缩放系数、水平倾斜系数、水平位移系数、垂直倾斜系数、垂直缩放系数、垂直位移系数、X  轴透视系数、Y轴透视系数、透视缩放系数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setMatrix

```TypeScript
setMatrix(matrix: Array<double> | Matrix): void
```

用一个矩阵对当前矩阵进行更新。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| matrix | Array&lt;double> \| Matrix | Yes | 用于更新的数组或矩阵。 |

## setPolyToPoly

```TypeScript
setPolyToPoly(src: Array<common2D.Point>, dst: Array<common2D.Point>, count: int): boolean
```

将当前矩阵设置为能够将源点数组映射到目标点数组的变换矩阵。源点和目标点的个数必须大于等于0，小于等于4。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Array&lt;common2D.Point> | Yes | 源点数组，长度必须为count。 |
| dst | Array&lt;common2D.Point> | Yes | 目标点数组，长度必须为count。 |
| count | int | Yes | 在src和dst点的数量，该参数为整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回设置矩阵是否成功的结果，true表示设置成功，false表示设置失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setRectToRect

```TypeScript
setRectToRect(src: common2D.Rect, dst: common2D.Rect, scaleToFit: ScaleToFit): boolean
```

将当前矩阵设置为能使源矩形映射到目标矩形的变换矩阵。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | common2D.Rect | Yes | 源矩形。 |
| dst | common2D.Rect | Yes | 目标矩形。 |
| scaleToFit | ScaleToFit | Yes | 源矩形到目标矩形的映射方式。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回矩阵是否可以表示矩形之间的映射，true表示可以，false表示不可以。如果源矩形的宽高任意一个小于等于0，则返回false，并将矩阵设置为单位矩阵；如果目标矩形的宽高任意一个小于  等于0，则返回true，并将矩阵设置为除透视缩放系数为1外其余值皆为0的矩阵。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setRotation

```TypeScript
setRotation(degree: double, px: double, py: double): void
```

设置矩阵为单位矩阵，并围绕位于(px, py)的旋转轴点进行旋转。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| degree | double | Yes | 角度，单位为度。正数表示顺时针旋转，负数表示逆时针旋转，该参数为浮点数。 |
| px | double | Yes | 旋转轴点的横坐标，该参数为浮点数。 |
| py | double | Yes | 旋转轴点的纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setScale

```TypeScript
setScale(sx: double, sy: double, px: double, py: double): void
```

设置矩阵为单位矩阵围绕位于(px, py)的中心点，以sx和sy进行缩放后的结果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sx | double | Yes | x轴方向缩放系数，为负数时可看作是先关于y = px作镜像翻转后再进行缩放，该参数为浮点数。 |
| sy | double | Yes | y轴方向缩放系数，为负数时可看作是先关于x = py作镜像翻转后再进行缩放，该参数为浮点数。 |
| px | double | Yes | 缩放中心点的横坐标，该参数为浮点数。 |
| py | double | Yes | 缩放中心点的纵坐标，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setSinCos

```TypeScript
setSinCos(sinValue: double, cosValue: double, px: double, py: double): void
```

设置矩阵，使其围绕旋转中心(px, py)以指定的正弦值和余弦值旋转。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sinValue | double | Yes | 旋转角度的正弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。 |
| cosValue | double | Yes | 旋转角度的余弦值。仅当正弦值和余弦值的平方和为1时，为旋转变换，否则矩阵可能包含平移缩放等其他变换。 |
| px | double | Yes | 旋转中心的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。 |
| py | double | Yes | 旋转中心的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。 |

## setSkew

```TypeScript
setSkew(kx: double, ky: double, px: double, py: double): void
```

设置矩阵的倾斜系数。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| kx | double | Yes | x轴上的倾斜量，该参数为浮点数。正值会使绘制沿y轴增量方向向右倾斜；负值会使绘制沿y轴增量方向向左倾斜。 |
| ky | double | Yes | y轴上的倾斜量，该参数为浮点数。正值会使绘制沿x轴增量方向向下倾斜；负值会使绘制沿x轴增量方向向上倾斜。 |
| px | double | Yes | 倾斜中心点的x轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点右侧，负数表示位于坐标原点左侧。 |
| py | double | Yes | 倾斜中心点的y轴坐标，该参数为浮点数。0表示坐标原点，正数表示位于坐标原点下侧，负数表示位于坐标原点上侧。 |

## setTranslation

```TypeScript
setTranslation(dx: double, dy: double): void
```

设置矩阵为单位矩阵平移(dx, dy)后的结果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | double | Yes | x轴方向平移距离，正数表示往x轴正方向平移，负数表示往x轴负方向平移，该参数为浮点数。 |
| dy | double | Yes | y轴方向平移距离，正数表示往y轴正方向平移，负数表示往y轴负方向平移，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

