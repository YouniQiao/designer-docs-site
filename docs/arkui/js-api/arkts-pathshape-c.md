# PathShape

用于clipShape和maskShape接口的路径。 继承自[CommonShapeMethod](arkts-commonshapemethod-c.md#CommonShapeMethod)。

**Inheritance:** PathShapeextends: CommonShapeMethod<PathShape>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { RectShape,CircleShape,EllipseShape,PathShape } from '@kit.ArkUI';
```

## commands

```TypeScript
commands(commands: string): PathShape
```

设置路径的绘制指令。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| commands | string | Yes | 路径的绘制指令。 |

**Return value:**

| Type | Description |
| --- | --- |
| PathShape | 返回PathShape对象。 |

## constructor

```TypeScript
constructor(options?: PathShapeOptions)
```

创建PathShape对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PathShapeOptions | No | 路径参数。 |

