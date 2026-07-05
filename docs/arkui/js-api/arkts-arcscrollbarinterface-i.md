# ArcScrollBarInterface

弧形滚动条组件ArcScrollBar，用于配合可滚动组件使用，如[ArcList]@ohos.arkui.ArcList、[List]list、 [Grid]grid、[Scroll]scroll、 [WaterFlow]water_flow。 > **说明：** > - 该组件从API version 18开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - ArcScrollBar不设置宽高时，采用父组件[LayoutConstraint](arkts-layoutconstraint-i.md#LayoutConstraint)中的maxSize作为宽高。如果ArcScrollBar的 > 父组件存在可滚动组件，如[ArcList]@ohos.arkui.ArcList、[List]list、 > [Grid]grid、[Scroll]scroll、 > [WaterFlow]water_flow，建议设置ArcScrollBar宽高，否则ArcScrollBar的宽高可能为无穷大。 > > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcScrollBarAttribute,ArcScrollBar } from '@kit.ArkUI';
```

## constructor

```TypeScript
(options: ArcScrollBarOptions): ArcScrollBarAttribute
```

ArcScrollBar的构造函数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ArcScrollBarOptions | Yes | 滚动条组件参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcScrollBarAttribute |  |

