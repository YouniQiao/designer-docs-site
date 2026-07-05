# RoundRect

圆角矩形对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## constructor

```TypeScript
constructor(roundRect: RoundRect)
```

拷贝一个圆角矩形。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| roundRect | RoundRect | Yes | 用于拷贝的圆角矩形。 |

## constructor

```TypeScript
constructor(rect: common2D.Rect, xRadii: double, yRadii: double)
```

构造一个圆角矩形对象，当且仅当xRadii和yRadii均大于0时，圆角生效，否则只会构造一个矩形。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rect | common2D.Rect | Yes | 需要创建的圆角矩形区域。 |
| xRadii | double | Yes | X轴上的圆角半径，该参数为浮点数，小于等于0时无效。 |
| yRadii | double | Yes | Y轴上的圆角半径，该参数为浮点数，小于等于0时无效。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## getCorner

```TypeScript
getCorner(pos: CornerPos): common2D.Point
```

获取圆角矩形中指定圆角位置的圆角半径。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | CornerPos | Yes | 圆角位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Point | Point. The horizontal coordinate indicates the radius of the rounded corner on the X  axis, and the vertical coordinate indicates the radius on the Y axis. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## getCorner

```TypeScript
getCorner(pos: CornerPos): common2D.Point | undefined
```

Obtains the radii of the specified rounded corner in this rounded rectangle.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | CornerPos | Yes | Position of the rounded corner. |

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Point | Point. The horizontal coordinate indicates the radius of  the rounded corner on the X axis, and the vertical coordinate indicates the radius on the Y axis. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## offset

```TypeScript
offset(dx: double, dy: double): void
```

将圆角矩形分别沿x轴方向和y轴方向平移dx,dy。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | double | Yes | 表示x轴方向上的偏移量。正数表示向x轴正方向平移，负数表示向x轴负方向平移，该参数为浮点数。 |
| dy | double | Yes | 表示y轴方向上的偏移量。正数表示向y轴正方向平移，负数表示向y轴负方向平移，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setCorner

```TypeScript
setCorner(pos: CornerPos, x: double, y: double): void
```

设置圆角矩形中指定圆角位置的圆角半径。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | CornerPos | Yes | 圆角位置。 |
| x | double | Yes | x轴方向的圆角半径，该参数为浮点数，小于等于0时无效。 |
| y | double | Yes | y轴方向的圆角半径，该参数为浮点数，小于等于0时无效。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

