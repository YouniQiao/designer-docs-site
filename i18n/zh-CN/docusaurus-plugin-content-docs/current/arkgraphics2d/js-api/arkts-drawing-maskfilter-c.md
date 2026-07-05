# MaskFilter

蒙版滤镜对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createBlurMaskFilter

```TypeScript
static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter
```

创建具有模糊效果的蒙版滤镜。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurType | BlurType | 是 | 模糊类型。 |
| sigma | number | 是 | 高斯模糊的标准偏差，必须为大于0的浮点数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MaskFilter | 返回创建的蒙版滤镜对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlurMaskFilter

```TypeScript
static createBlurMaskFilter(blurType: BlurType, sigma: double): MaskFilter | undefined
```

Creates a mask filter with a blur effect.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blurType | BlurType | 是 | Blur type. |
| sigma | double | 是 | Standard deviation of the Gaussian blur to apply.  The value must be a floating point number greater than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MaskFilter | MaskFilter object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

