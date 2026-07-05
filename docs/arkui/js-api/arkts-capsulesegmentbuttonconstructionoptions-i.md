# CapsuleSegmentButtonConstructionOptions

用于构建胶囊类的SegmentButtonOptions对象。 继承[CommonSegmentButtonOptions](arkts-commonsegmentbuttonoptions-i.md#CommonSegmentButtonOptions)。

**Inheritance:** CapsuleSegmentButtonConstructionOptionsextends: CommonSegmentButtonOptions.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions,SegmentButtonItemOptionsConstructorOptions,SegmentButtonIconTextItem,SegmentButtonItemOptions,SegmentButtonTextItem,CapsuleSegmentButtonOptions,SegmentButtonOptions,CapsuleSegmentButtonConstructionOptions,SegmentButtonItemTuple,SegmentButton,SegmentButtonItemArray,SegmentButtonItemOptionsArray,SegmentButtonIconItem,BorderRadiusMode,TabSegmentButtonConstructionOptions,TabSegmentButtonOptions,ItemRestriction,DimensionNoPercentage } from '@kit.ArkUI';
```

## buttons

```TypeScript
buttons: SegmentButtonItemTuple
```

按钮信息。

**Type:** SegmentButtonItemTuple

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## multiply

```TypeScript
multiply?: boolean
```

是否可以多选。 默认值：false 值为undefined时，按默认值处理。 true表示可以多选，false表示不可以多选。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

