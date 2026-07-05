# Tool

本模块定义的工具类，仅提供静态的方法，主要完成其他模块和[common2D](arkts-graphics-common2d.md#common2D)中定义的数据结构的转换功能等操作。 > **说明：** > > - 本Class首批接口从API version 15开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 15

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## makeColorFromResourceColor

```TypeScript
static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color
```

将ResourceColor类型的值转换为common2D.Color对象。

**Since:** 15

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceColor | ResourceColor | Yes | ResourceColor格式的颜色值（支持所有的4种输入，示例中提供13个示例输入）。其中第4种类型  [Resource]./@internal/component/ets/units:Resource只接受``$r('belonging.type.name')``构造方法，需要确保该资源在main/  resources/base/element目录下已定义(app支持color、string和integer，sys只支持color)。 |

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Common2D.Color object. If the conversion fails, a null pointer is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeColorFromResourceColor

```TypeScript
static makeColorFromResourceColor(resourceColor: ResourceColor): common2D.Color | undefined
```

Converts a color value of the ResourceColor type to a common2D.Color object.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceColor | ResourceColor | Yes | Color value of the ResourceColor type.  (All four types of inputs are supported. The following provides 13 example inputs.)  The fourth type of Resource supports only the construction method $r('belonging.type.name').  Ensure that the resource has been defined in the main/resources/base/element directory.  (The types color, string, and integer are available for the belonging app,  whereas only the type color is available for the belonging sys.) |

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Returns a 32-bit (ARGB) variable that describes the color. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

