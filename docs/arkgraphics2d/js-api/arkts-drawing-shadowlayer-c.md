# ShadowLayer

阴影层对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## create

```TypeScript
static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer
```

创建阴影层对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | number | Yes | 阴影的半径，必须为大于零的浮点数。 |
| x | number | Yes | x轴上的偏移点，该参数为浮点数。 |
| y | number | Yes | Y轴上的偏移点，该参数为浮点数。 |
| color | common2D.Color | Yes | ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ShadowLayer | 返回创建的阴影层对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: double, x: double, y: double, color: common2D.Color): ShadowLayer | undefined
```

Creates a ShadowLayer object.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | double | Yes | Radius of the shadow layer.  The value must be a floating point number greater than 0. |
| x | double | Yes | Offset on the X axis. The value is a floating point number. |
| y | double | Yes | Offset on the Y axis. The value is a floating point number. |
| color | common2D.Color | Yes | Color in ARGB format.  The value of each color channel is an integer ranging from 0 to 255. |

**Return value:**

| Type | Description |
| --- | --- |
| ShadowLayer | ShadowLayer object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer
```

创建阴影层对象。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | number | Yes | 阴影的半径，必须为大于零的浮点数。 |
| x | number | Yes | x轴上的偏移点，该参数为浮点数。 |
| y | number | Yes | Y轴上的偏移点，该参数为浮点数。 |
| color | common2D.Color \| number | Yes | 颜色，可以用16进制ARGB格式的无符号整数表示。 |

**Return value:**

| Type | Description |
| --- | --- |
| ShadowLayer | 返回创建的阴影层对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: double, x: double, y: double, color: common2D.Color | int): ShadowLayer | undefined
```

Creates a ShadowLayer object.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | double | Yes | Radius of the shadow layer.  The value must be a floating point number greater than 0. |
| x | double | Yes | Offset on the X axis. The value is a floating point number. |
| y | double | Yes | Offset on the Y axis. The value is a floating point number. |
| color | common2D.Color \| int | Yes | Color, represented by an unsigned integer in hexadecimal ARGB format. |

**Return value:**

| Type | Description |
| --- | --- |
| ShadowLayer | ShadowLayer object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

