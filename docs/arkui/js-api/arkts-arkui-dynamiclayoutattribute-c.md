# DynamicLayoutAttribute

The [universal attributes](../arkts-components/arkts-arkui-commonmethod-c.md#commonmethod) are supported. > **NOTE** > > - When the layout algorithm is [RowLayoutAlgorithm](arkts-arkui-rowlayoutalgorithm-c.md#rowlayoutalgorithm) or > [ColumnLayoutAlgorithm](arkts-arkui-columnlayoutalgorithm-c.md#columnlayoutalgorithm), > the [Flex layout](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-flex-layout.md) attributes set > for child components take effect. > > - When the layout algorithm is [StackLayoutAlgorithm](arkts-arkui-stacklayoutalgorithm-c.md#stacklayoutalgorithm), > the [layoutGravity](../arkts-components/arkts-arkui-commonmethod-c.md#layoutgravity-1) attribute set for child components takes effect. > > - When the layout algorithm is > [CustomLayoutAlgorithm](arkts-arkui-customlayoutalgorithm-c.md#customlayoutalgorithm), > the [setMeasuredSize](arkts-arkui-framenode-c.md#setmeasuredsize-1) method of the > [FrameNode](arkts-arkui-framenode-c.md#framenode) component of **DynamicLayout** has a higher priority than the > [sizing](../arkts-components/arkts-arkui-commonmethod-c.md#size-1) and [border styling](../arkts-components/arkts-arkui-commonmethod-c.md#border-1) attributes. The > [measure](arkts-arkui-framenode-c.md#measure-1) and [layout](arkts-arkui-framenode-c.md#layout-1) methods > of the child component [FrameNode](arkts-arkui-framenode-c.md#framenode) have a higher priority than the > [ignoreLayoutSafeArea](../arkts-components/arkts-arkui-commonmethod-c.md#ignorelayoutsafearea-1) attribute. The [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.

**Inheritance/Implementation:** DynamicLayoutAttribute extends [CommonMethod<DynamicLayoutAttribute>](CommonMethod<DynamicLayoutAttribute>)

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**Widget capability:** This API can be used in ArkTS widgets since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DynamicLayoutAttribute, DynamicLayout } from '@ohos.arkui.components.ArkDynamicLayout';
```

