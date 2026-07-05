# ShadowLayer

阴影层对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## create

```TypeScript
static create(blurRadius: number, x: number, y: number, color: common2D.Color): ShadowLayer
```

创建阴影层对象。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurRadius | number | 是 | 阴影的半径，必须为大于零的浮点数。 |
| x | number | 是 | x轴上的偏移点，该参数为浮点数。 |
| y | number | 是 | Y轴上的偏移点，该参数为浮点数。 |
| color | common2D.Color | 是 | ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ShadowLayer | 返回创建的阴影层对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: double, x: double, y: double, color: common2D.Color): ShadowLayer | undefined
```

Creates a ShadowLayer object.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurRadius | double | 是 | Radius of the shadow layer.  The value must be a floating point number greater than 0. |
| x | double | 是 | Offset on the X axis. The value is a floating point number. |
| y | double | 是 | Offset on the Y axis. The value is a floating point number. |
| color | common2D.Color | 是 | Color in ARGB format.  The value of each color channel is an integer ranging from 0 to 255. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ShadowLayer | ShadowLayer object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: number, x: number, y: number, color: common2D.Color | number): ShadowLayer
```

创建阴影层对象。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurRadius | number | 是 | 阴影的半径，必须为大于零的浮点数。 |
| x | number | 是 | x轴上的偏移点，该参数为浮点数。 |
| y | number | 是 | Y轴上的偏移点，该参数为浮点数。 |
| color | common2D.Color \| number | 是 | 颜色，可以用16进制ARGB格式的无符号整数表示。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ShadowLayer | 返回创建的阴影层对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## create

```TypeScript
static create(blurRadius: double, x: double, y: double, color: common2D.Color | int): ShadowLayer | undefined
```

Creates a ShadowLayer object.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurRadius | double | 是 | Radius of the shadow layer.  The value must be a floating point number greater than 0. |
| x | double | 是 | Offset on the X axis. The value is a floating point number. |
| y | double | 是 | Offset on the Y axis. The value is a floating point number. |
| color | common2D.Color \| int | 是 | Color, represented by an unsigned integer in hexadecimal ARGB format. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ShadowLayer | ShadowLayer object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

