# @ohos.arkui.advanced.SegmentButton

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SegmentButtonItemOptions](arkts-arkui-segmentbuttonitemoptions-c.md) | Button options in a segmented button. |
| [SegmentButtonItemOptionsArray](arkts-arkui-segmentbuttonitemoptionsarray-c.md) | Represents an array for storing button information. &gt; **NOTE** &gt; &gt; The SegmentButtonItemOptionsArray can save only two to five button information elements. |
| [SegmentButtonOptions](arkts-arkui-segmentbuttonoptions-c.md) | &gt; **NOTE** &gt; &gt; The component does not support custom font type settings. Provides initial data and custom properties for the **SegmentButton** component. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [SegmentButtonOptions](arkts-arkui-segmentbuttonoptions-c-sys.md) | &gt; **NOTE** &gt; &gt; The component does not support custom font type settings. Provides initial data and custom properties for the **SegmentButton** component. |
<!--DelEnd-->

### Structs

| Name | Description |
| --- | --- |
| [SegmentButton](arkts-arkui-segmentbutton-s.md) | **SegmentButton** is a versatile component that organizes related options into visually grouped buttons. It supports three variants: tab-style, capsule-style single-select, and capsule-style multi-select. &gt;**NOTE** &gt; &gt; - The **SegmentButton** component does not support [universal attributes](../arkts-components/arkts-arkui-commonmethod-c.md). The component occupies the maximum available width within its content area and distributes this width evenly among its items. It adapts its height automatically to the content (text and images), the minimum height being 28 vp. &gt; &gt; - Properties decorated with @Prop are optional. They are required during construction only when used together with the @Require decorator. |

### Interfaces

| Name | Description |
| --- | --- |
| [CapsuleSegmentButtonConstructionOptions](arkts-arkui-capsulesegmentbuttonconstructionoptions-i.md) | Represents configuration options for creating a **SegmentButton** component consisting of capsule-style segmented buttons. Inherits from [CommonSegmentButtonOptions](arkts-arkui-commonsegmentbuttonoptions-i.md). |
| [CapsuleSegmentButtonOptions](arkts-arkui-capsulesegmentbuttonoptions-i.md) | Provides configuration options for capsule-style segmented buttons. Inherits from [CapsuleSegmentButtonConstructionOptions](arkts-arkui-capsulesegmentbuttonconstructionoptions-i.md). |
| [CommonSegmentButtonOptions](arkts-arkui-commonsegmentbuttonoptions-i.md) | Defines the customizable attributes of a segment button component. |
| [SegmentButtonIconItem](arkts-arkui-segmentbuttoniconitem-i.md) | Icon button information. &gt; **NOTE** &gt; &gt; Both the **icon** and **selectedIcon** attributes must be set. Setting only one of them is invalid. |
| [SegmentButtonIconTextItem](arkts-arkui-segmentbuttonicontextitem-i.md) | Icon and text button information. &gt; **NOTE** &gt; &gt; Both the **icon** and **selectedIcon** attributes must be set. Setting only one of them is invalid. |
| [SegmentButtonItemOptionsConstructorOptions](arkts-arkui-segmentbuttonitemoptionsconstructoroptions-i.md) | Construct parameters for SegmentButtonItemOptions. |
| [SegmentButtonTextItem](arkts-arkui-segmentbuttontextitem-i.md) | Text button information. |
| [TabSegmentButtonConstructionOptions](arkts-arkui-tabsegmentbuttonconstructionoptions-i.md) | Creates a SegmentButtonOptions object of the tab type. Inherits from [CommonSegmentButtonOptions](arkts-arkui-commonsegmentbuttonoptions-i.md). |
| [TabSegmentButtonOptions](arkts-arkui-tabsegmentbuttonoptions-i.md) | Provides configuration options for tab-style segmented buttons. Inherits from [TabSegmentButtonConstructionOptions](arkts-arkui-tabsegmentbuttonconstructionoptions-i.md). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CommonSegmentButtonOptions](arkts-arkui-commonsegmentbuttonoptions-i-sys.md) | Defines the customizable attributes of a segment button component. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BorderRadiusMode](arkts-arkui-borderradiusmode-e.md) | Enumerates the border radius modes for the **SegmentButton** component, which are used to control the border radius calculation method. |

### Types

| Name | Description |
| --- | --- |
| [DimensionNoPercentage](arkts-arkui-dimensionnopercentage-t.md) | The percentage length union type is not supported. |
| [ItemRestriction](arkts-arkui-itemrestriction-t.md) | Tuple type that stores button information. &gt; **NOTE** &gt; &gt; A **SegmentButton** component supports two to five buttons. |
| [SegmentButtonItemArray](arkts-arkui-segmentbuttonitemarray-t.md) | Represents the array union type used to store button information. |
| [SegmentButtonItemTuple](arkts-arkui-segmentbuttonitemtuple-t.md) | Represents the tuple union type used to store button information. |

