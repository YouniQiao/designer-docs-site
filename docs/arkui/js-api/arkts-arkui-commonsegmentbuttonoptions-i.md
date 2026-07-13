# CommonSegmentButtonOptions

Defines the customizable attributes of a segment button component.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { CommonSegmentButtonOptions, SegmentButtonItemOptionsConstructorOptions, SegmentButtonIconTextItem, SegmentButtonItemOptions, SegmentButtonTextItem, CapsuleSegmentButtonOptions, SegmentButtonOptions, CapsuleSegmentButtonConstructionOptions, SegmentButtonItemTuple, SegmentButton, SegmentButtonItemArray, SegmentButtonItemOptionsArray, SegmentButtonIconItem, BorderRadiusMode, TabSegmentButtonConstructionOptions, TabSegmentButtonOptions, ItemRestriction, DimensionNoPercentage } from '@kit.ArkUI';
```

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

Background blur style of the component.

If the value is **undefined**, it defaults to **BlurStyle.NONE**.

**Type:** BlurStyle

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBorderRadius

```TypeScript
backgroundBorderRadius?: LengthMetrics
```

Container border radius.

**NOTE**

This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.

For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
**true**), this attribute does not take effect and **itemBorderRadius** must be used to set the border radius.

The maximum value for the border radius is half of the component's width or height, and percentage values are not
supported.

Default value: **$r('sys.float.segmentbutton_container_shape')**

If the value is **undefined**, the default value is used.

**Type:** LengthMetrics

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

Background color.

Default value: **$r('sys.color.ohos_id_color_button_normal')**

If the value is **undefined**, the default value is used.

**Type:** ResourceColor

**Default:** $r('sys.color.ohos_id_color_button_normal')

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadiusMode

```TypeScript
borderRadiusMode?: BorderRadiusMode
```

Border radius mode, used to control the border radius calculation method.

Default value: **BorderRadiusMode.DEFAULT**

If the value is **undefined**, the default value is used.

**Type:** BorderRadiusMode

**Default:** BorderRadiusMode.Default

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonPadding

```TypeScript
buttonPadding?: Padding | Dimension
```

Button padding.

Default value:

For icon buttons and text buttons: { top: 4, right: 8, bottom: 4, left: 8 }

For icon+text buttons: { top: 6, right: 8, bottom: 6, left: 8 }

Unit: vp

If the value is **undefined**, the default value is used.

**Type:** Padding | Dimension

**Default:** For text only / icon only buttons Padding { top: 4, right: 8, bottom: 4, left: 8 }.
For text & icon buttons Padding { top: 6, right: 8, bottom: 6, left: 8 }.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: Direction
```

Layout direction of the component.

Default value: **Direction.Auto**

If the value is **undefined**, the default value is used.

**Type:** Direction

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Text color of the unselected button.

If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_secondary').

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontSize

```TypeScript
fontSize?: DimensionNoPercentage
```

Font size of the unselected item. It cannot be set in percentage.

Default value: **$r('sys.float.ohos_id_text_size_body2')**

If the value is **undefined**, the default value is used.

**Type:** DimensionNoPercentage

**Default:** $r('sys.float.ohos_id_text_size_body2')

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontWeight

```TypeScript
fontWeight?: FontWeight
```

Font weight of the unselected item.

Default value: **FontWeight.Regular**

If the value is **undefined**, the default value is used.

**Type:** FontWeight

**Default:** FontWeight.Regular

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageSize

```TypeScript
imageSize?: SizeOptions
```

Defines the image size.

Default value: { width: 24, height: 24 }

Unit: vp

If the value is **undefined**, the default value is used.

**NOTE**

The **imageSize** property takes effect only for icon-only and icon-with-text buttons.

**Type:** SizeOptions

**Default:** SizeOptions { width: 24, height: 24 }

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## itemBorderRadius

```TypeScript
itemBorderRadius?: LengthMetrics
```

Individual button border radius.

**NOTE**

This attribute takes effect only when **borderRadiusMode** is set to **BorderRadiusMode.CUSTOM**.

For capsule-style multi-selection segmented buttons (with **type** being **"capsule"** and **multiply** being
**true**), this attribute only affects end items.

The maximum value for the border radius is half of the component's width or height, and percentage values are not
supported.

Default value: **$r('sys.float.segmentbutton_selected_background_shape')**

If the value is **undefined**, the default value is used.

**Type:** LengthMetrics

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localizedButtonPadding

```TypeScript
localizedButtonPadding?: LocalizedPadding
```

Button padding.

Default value:

Icon button and text button:
**{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }**.

Icon + text button:
**{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8) **}
.

If the value is **undefined**, the default value is used.

**Type:** LocalizedPadding

**Default:** For text only / icon only buttons LocalizedPadding
{ top: LengthMetrics.vp(4), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(4), start: LengthMetrics.vp(8) }
.
For text & icon buttons LocalizedPadding
{{ top: LengthMetrics.vp(6), end: LengthMetrics.vp(8), bottom: LengthMetrics.vp(6), start: LengthMetrics.vp(8)
}.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## localizedTextPadding

```TypeScript
localizedTextPadding?: LocalizedPadding
```

Text padding.

Default value: **0**

If the value is **undefined**, the default value is used.

**Type:** LocalizedPadding

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor?: ResourceColor
```

Background color of the selected button.

When the value is **undefined** and **type** is **"tab"**, the background color is
**$r('sys.color.segment_button_checked_foreground_color')**.

When **type** is **"capsule"**, the background color is **$r('sys.color.ohos_id_color_emphasize')**.

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontColor

```TypeScript
selectedFontColor?: ResourceColor
```

Text color of the selected button.

If the value is **undefined**, the color is $r('sys.color.ohos_id_color_text_primary') when type is set to
**"tab"**.

When type is set to **"capsule"**, the color is $r('sys.color.ohos_id_color_foreground_contrary').

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontSize

```TypeScript
selectedFontSize?: DimensionNoPercentage
```

Font size of the selected item. It cannot be set in percentage.

Default value: **$r('sys.float.ohos_id_text_size_body2')**

If the value is **undefined**, the default value is used.

**Type:** DimensionNoPercentage

**Default:** $r('sys.float.ohos_id_text_size_body2')

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedFontWeight

```TypeScript
selectedFontWeight?: FontWeight
```

Font weight of the selected item.

Default value: **FontWeight.Medium**

If the value is **undefined**, the default value is used.

**Type:** FontWeight

**Default:** FontWeight.Medium

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textPadding

```TypeScript
textPadding?: Padding | Dimension
```

Text padding.

Default value: **0**

Unit: vp

If the value is **undefined**, the default value is used.

**Type:** Padding | Dimension

**Default:** 0

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

