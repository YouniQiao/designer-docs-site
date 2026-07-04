# ArcScrollBarInterface

The **ArcScrollBar** component is designed to be used together with scrollable components such as [ArcList](arkts-arkui-arclist.md), [List](../arkts-components/arkts-arkui-list.md), [Grid](../arkts-components/arkts-arkui-grid.md), [Scroll](../arkts-components/arkts-arkui-scroll.md), and [WaterFlow](../arkts-components/arkts-arkui-waterflow.md). > **NOTE** > > - This component is supported since API version 18. Updates will be marked with a superscript to indicate their > earliest API version. > > - When the width and height of the **ArcScrollBar** component are not set, the **maxSize** value specified in its > parent component [LayoutConstraint](arkts-arkui-layoutconstraint-i.md#layoutconstraint) is used as the width and height. If > the parent component of the **ArcScrollBar** component contains scrollable components, such as > [ArcList](arkts-arkui-arclist.md), [List](../arkts-components/arkts-arkui-list.md), > [Grid](../arkts-components/arkts-arkui-grid.md), [Scroll](../arkts-components/arkts-arkui-scroll.md), or > [WaterFlow](../arkts-components/arkts-arkui-waterflow.md), you are advised to set the width and height of the > **ArcScrollBar** component. Otherwise, the width and height of the component may be infinite. > > - This component can be used on phones, PCs, 2-in-1 devices, tablets, TVs, and wearables. In API version 22 and > earlier versions, a compilation warning will be reported when this component is used on phones, PCs, 2-in-1 devices > , tablets, and TVs, but the component can still run properly.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcScrollBarAttribute, ArcScrollBar } from '@ohos.arkui.ArcScrollBar';
```

## constructor

```TypeScript
(options: ArcScrollBarOptions): ArcScrollBarAttribute
```

A constructor used to create an **ArcScrollBar** instance.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ArcScrollBarOptions | Yes | Parameters of the **ArcScrollBar** component. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcScrollBarAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

