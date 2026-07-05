# TypefaceArguments

提供字体属性配置的结构体。 > **说明：** > > - 本Class首批接口从API version 20开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## addVariation

```TypeScript
addVariation(axis: string, value: number)
```

给字体属性设置字重值。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | string | Yes | Indicates the axis tag, which must contain four ASCII characters. |
| value | number | Yes | Indicates the value of the axis field. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## addVariation

```TypeScript
addVariation(axis: string, value: double) : void
```

Adds variation axis for the TypefaceArguments.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | string | Yes | Indicates the axis tag, which must contain four ASCII characters. |
| value | double | Yes | Indicates the value of the axis field. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## constructor

```TypeScript
constructor()
```

字体属性的构造函数。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

