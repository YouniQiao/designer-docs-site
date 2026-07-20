# @ohos.arkui.advanced.SegmentButton

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SegmentButtonItemOptions](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonitemoptions-c.md) | Button options in a segmented button. |
| [SegmentButtonItemOptionsArray](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonitemoptionsarray-c.md) | Represents an array for storing button information. |
| [SegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonoptions-c.md) |  |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [SegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonoptions-c-sys.md) |  |
<!--DelEnd-->

### Structs

| Name | Description |
| --- | --- |
| [SegmentButton](arkts-arkui-arkui-advanced-segmentbutton-segmentbutton-s.md) | **SegmentButton** is a versatile component that organizes related options into visually grouped buttons. It supports three variants: tab-style, capsule-style single-select, and capsule-style multi-select.&gt;@Prop are optional. They are required during construction only when used together with the @Require decorator. |

### Interfaces

| Name | Description |
| --- | --- |
| [CapsuleSegmentButtonConstructionOptions](arkts-arkui-arkui-advanced-segmentbutton-capsulesegmentbuttonconstructionoptions-i.md) | Represents configuration options for creating a **SegmentButton** component consisting of capsule-style segmented buttons.Inherits from [CommonSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-commonsegmentbuttonoptions-i.md). |
| [CapsuleSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-capsulesegmentbuttonoptions-i.md) | Provides configuration options for capsule-style segmented buttons. Inherits from [CapsuleSegmentButtonConstructionOptions](arkts-arkui-arkui-advanced-segmentbutton-capsulesegmentbuttonconstructionoptions-i.md). |
| [CommonSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-commonsegmentbuttonoptions-i.md) | Defines the customizable attributes of a segment button component. |
| [SegmentButtonIconItem](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttoniconitem-i.md) | Icon button information. |
| [SegmentButtonIconTextItem](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonicontextitem-i.md) | Icon and text button information. |
| [SegmentButtonItemOptionsConstructorOptions](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttonitemoptionsconstructoroptions-i.md) | Construct parameters for SegmentButtonItemOptions. |
| [SegmentButtonTextItem](arkts-arkui-arkui-advanced-segmentbutton-segmentbuttontextitem-i.md) | Text button information. |
| [TabSegmentButtonConstructionOptions](arkts-arkui-arkui-advanced-segmentbutton-tabsegmentbuttonconstructionoptions-i.md) | Creates a SegmentButtonOptions object of the tab type.Inherits from [CommonSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-commonsegmentbuttonoptions-i.md). |
| [TabSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-tabsegmentbuttonoptions-i.md) | Provides configuration options for tab-style segmented buttons. Inherits from [TabSegmentButtonConstructionOptions](arkts-arkui-arkui-advanced-segmentbutton-tabsegmentbuttonconstructionoptions-i.md). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CommonSegmentButtonOptions](arkts-arkui-arkui-advanced-segmentbutton-commonsegmentbuttonoptions-i-sys.md) | Defines the customizable attributes of a segment button component. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BorderRadiusMode](arkts-arkui-arkui-advanced-segmentbutton-borderradiusmode-e.md) | Enumerates the border radius modes for the **SegmentButton** component, which are used to control the border radius calculation method. |

### Types

| Name | Description |
| --- | --- |
| [DimensionNoPercentage](arkts-arkui-dimensionnopercentage-t.md) | The percentage length union type is not supported. |
| [ItemRestriction](arkts-arkui-itemrestriction-t.md) | Tuple type that stores button information. |
| [SegmentButtonItemArray](arkts-arkui-segmentbuttonitemarray-t.md) | Represents the array union type used to store button information. |
| [SegmentButtonItemTuple](arkts-arkui-segmentbuttonitemtuple-t.md) | Represents the tuple union type used to store button information. |

