# MaskFilter

蒙版滤镜对象。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createBlurMaskFilter

```TypeScript
static createBlurMaskFilter(blurType: BlurType, sigma: number): MaskFilter
```

创建具有模糊效果的蒙版滤镜。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurType | BlurType | Yes | 模糊类型。 |
| sigma | number | Yes | 高斯模糊的标准偏差，必须为大于0的浮点数。 |

**Return value:**

| Type | Description |
| --- | --- |
| MaskFilter | 返回创建的蒙版滤镜对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlurMaskFilter

```TypeScript
static createBlurMaskFilter(blurType: BlurType, sigma: double): MaskFilter | undefined
```

Creates a mask filter with a blur effect.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurType | BlurType | Yes | Blur type. |
| sigma | double | Yes | Standard deviation of the Gaussian blur to apply.  The value must be a floating point number greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| MaskFilter | MaskFilter object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

