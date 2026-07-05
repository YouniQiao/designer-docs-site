# DynamicLayoutInterface

动态布局容器组件，支持在运行时动态切换不同的布局算法，不改变子组件的状态。 > **说明：

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DynamicLayoutAttribute,DynamicLayout } from '@kit.ArkUI';
```

## constructor

```TypeScript
(algorithm: LayoutAlgorithm): DynamicLayoutAttribute
```

动态布局容器。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algorithm | LayoutAlgorithm | Yes | 指定动态布局组件的布局算法。取非法值时，按照[堆叠布局算法](arkts-stacklayoutalgorithm-c.md#StackLayoutAlgorithm)  布局子组件，子组件堆叠排列。 |

**Return value:**

| Type | Description |
| --- | --- |
| DynamicLayoutAttribute |  |

