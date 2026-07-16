# @ohos.arkui.components.ArkDynamicLayout

## Modules to Import

```TypeScript
import { DynamicLayoutAttribute, DynamicLayout } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [DynamicLayoutAttribute](arkts-arkui-dynamiclayoutattribute-c.md) | The [universal attributes](../arkts-components/arkts-arkui-commonmethod-c.md) are supported.&gt; **NOTE**&gt;&gt; - When the layout algorithm is [RowLayoutAlgorithm](arkts-arkui-rowlayoutalgorithm-c.md) or&gt; [ColumnLayoutAlgorithm](arkts-arkui-columnlayoutalgorithm-c.md),&gt; the [Flex layout](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-flex-layout.md) attributes set&gt; for child components take effect.&gt;&gt; - When the layout algorithm is [StackLayoutAlgorithm](arkts-arkui-stacklayoutalgorithm-c.md),&gt; the [layoutGravity](../arkts-components/arkts-arkui-commonmethod-c.md#layoutgravity-1) attribute set for child components takes effect.&gt;&gt; - When the layout algorithm is&gt; [CustomLayoutAlgorithm](arkts-arkui-customlayoutalgorithm-c.md),&gt; the [setMeasuredSize](arkts-arkui-framenode-c.md#setmeasuredsize-1) method of the&gt; [FrameNode](arkts-arkui-framenode-c.md) component of **DynamicLayout** has a higher priority than the&gt; [sizing](../arkts-components/arkts-arkui-commonmethod-c.md#size-1) and [border styling](../arkts-components/arkts-arkui-commonmethod-c.md#border-1) attributes. The&gt; [measure](arkts-arkui-framenode-c.md#measure-1) and [layout](arkts-arkui-framenode-c.md#layout-1) methods&gt; of the child component [FrameNode](arkts-arkui-framenode-c.md) have a higher priority than the&gt; [ignoreLayoutSafeArea](../arkts-components/arkts-arkui-commonmethod-c.md#ignorelayoutsafearea-1) attribute.The [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported. |

### Interfaces

| Name | Description |
| --- | --- |
| [DynamicLayoutInterface](arkts-arkui-dynamiclayoutinterface-i.md) | Defines the dynamic layout container. |

### Constants

| Name | Description |
| --- | --- |
| [DynamicLayout](arkts-arkui-arkui-components-arkdynamiclayout-con.md#dynamiclayout) | Defines the dynamic layout container component, which supports dynamically switching between different layoutalgorithms at runtime without changing the status of child components.&gt; **Child Components**&gt;&gt; Child components are supported. |
| [DynamicLayoutInstance](arkts-arkui-arkui-components-arkdynamiclayout-con.md#dynamiclayoutinstance) | Defines DynamicLayout Component instance. |

