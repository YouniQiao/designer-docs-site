# TextPicker properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TextPickerAttribute extends [CommonMethod<TextPickerAttribute>](CommonMethod<TextPickerAttribute>)

**Since:** 8

<!--Device-unnamed-declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute>--><!--Device-unnamed-declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## canLoop

```TypeScript
canLoop(value: boolean)
```

Sets whether to enable loop scrolling.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-canLoop(value: boolean): TextPickerAttribute--><!--Device-TextPickerAttribute-canLoop(value: boolean): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>- **false**:Disable loop scrolling.<br>Default value: **true** |

## canLoop

```TypeScript
canLoop(isLoop: Optional<boolean>)
```

Sets whether to enable loop scrolling. Compared with [canLoop<sup>10+</sup>](TextPickerAttribute#canLoop(value: boolean)), this API supports the **undefined** type for the **isLoop** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-canLoop(isLoop: Optional<boolean>): TextPickerAttribute--><!--Device-TextPickerAttribute-canLoop(isLoop: Optional<boolean>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isLoop | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable loop scrolling.<br>- **true**: Enable loop scrolling.<br>-**false**: Disable loop scrolling.<br>Default value: **true**<br>If the value of **isLoop** is **undefined**,the default value is used. |

## defaultPickerItemHeight

```TypeScript
defaultPickerItemHeight(value: number | string)
```

Sets the height of the picker items.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-defaultPickerItemHeight(value: number | string): TextPickerAttribute--><!--Device-TextPickerAttribute-defaultPickerItemHeight(value: number | string): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Height of the picker items.<br>Value range:<br>Number type:[0, +∞), in vp.<br>String type: numeric string only, for example, **"56"**.<br>Default value:selected item 56 vp, unselected item 36 vp.<br>**NOTE**<br>The set value applies to both selected and unselected items. |

## defaultPickerItemHeight

```TypeScript
defaultPickerItemHeight(height: Optional<number | string>)
```

Sets the height of the picker items. Compared with [defaultPickerItemHeight](TextPickerAttribute#defaultPickerItemHeight(value: number | string)), this API supports the **undefined** type for the **height** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-defaultPickerItemHeight(height: Optional<number | string>): TextPickerAttribute--><!--Device-TextPickerAttribute-defaultPickerItemHeight(height: Optional<number | string>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | [Optional](arkts-arkui-optional-t.md)&lt;number \| string&gt; | Yes | Height of the picker items.<br>Value range:<br>Number type:[0, +∞), in vp.<br>String type: numeric string only, for example, **"56"**.<br>Default value: selected item56 vp, unselected item 36 vp.<br>**NOTE**<br>1. The set value applies to both selected and unselected items.<br>2. If **height** is set to **undefined**, the previous value is retained. |

## defaultTextStyle

```TypeScript
defaultTextStyle(style: TextPickerTextStyle)
```

Sets the text style of the items when the text style change animation during the scrolling process is disabled.This setting takes effect only when [disableTextStyleAnimation](TextPickerAttribute#disableTextStyleAnimation) is set to **true**.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextPickerAttribute-defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute--><!--Device-TextPickerAttribute-defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [TextPickerTextStyle](arkts-arkui-textpickertextstyle-i.md) | Yes | Text style of the items when the text style change animation during the scrolling process is disabled.<br>Default value: same as the default value of the [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md)component |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>)
```

Sets the sensitivity to the digital crown rotation.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TextPickerAttribute--><!--Device-TextPickerAttribute-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | [Optional](arkts-arkui-optional-t.md)&lt;CrownSensitivity&gt; | Yes | Sensitivity to the digital crown rotation.<br>Default value:**CrownSensitivity.MEDIUM** |

## disableTextStyleAnimation

```TypeScript
disableTextStyleAnimation(disabled: boolean)
```

Sets whether to disable the animation effect of text style changes during scrolling.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextPickerAttribute-disableTextStyleAnimation(disabled: boolean): TextPickerAttribute--><!--Device-TextPickerAttribute-disableTextStyleAnimation(disabled: boolean): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | boolean | Yes | Whether to disable the animation effect of text style changes during scrolling.<br>-**true**: Disable the animation effect of text style changes.<br>- **false**: Do not disable the animation effect of text style changes.<br>Default value: **false**<br>**NOTE**<br>When this API is used with **true**,there are no text style changes, including the font size, weight, and color, during scrolling, and all text is displayed in the style set by [defaultTextStyle](TextPickerAttribute#defaultTextStyle). If [defaultTextStyle](TextPickerAttribute#defaultTextStyle) is not set, the default style of the [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md) component is used. |

## disappearTextStyle

```TypeScript
disappearTextStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-disappearTextStyle(value: PickerTextStyle): TextPickerAttribute--><!--Device-TextPickerAttribute-disappearTextStyle(value: PickerTextStyle): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-pickertextstyle-i.md) | Yes | Text color, font size, and font weight for edge items.<br>Default value:<br>{<br   >color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>} |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of edge items (the second item above or below the selected item).Compared with [disappearTextStyle<sup>10+</sup>](TextPickerAttribute#disappearTextStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle&gt; | Yes | Text color, font size, and font weight for edge items.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## disappearTextStyle

```TypeScript
disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

Sets the text style of edge items (the second item above or below the selected item), covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode. Compared with [disappearTextStyle](TextPickerAttribute#disappearTextStyle(style: Optional<PickerTextStyle>))<sup>18+</sup>,this API supports the [TextPickerTextStyle](arkts-arkui-textpickertextstyle-i.md) type for the **style** parameter.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextPickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-disappearTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle \| TextPickerTextStyle&gt; | Yes | Text style of edge items, covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>},<br>minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## divider

```TypeScript
divider(value: DividerOptions | null)
```

Sets the divider style. If not explicitly set, the divider uses the default style.

If the sum of **startMargin** and **endMargin** in [DividerOptions](arkts-arkui-divideroptions-i.md) exceeds the component's width, both margins are automatically reset to 0.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextPickerAttribute-divider(value: DividerOptions | null): TextPickerAttribute--><!--Device-TextPickerAttribute-divider(value: DividerOptions | null): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DividerOptions](arkts-arkui-divideroptions-i.md) \| null | Yes |  |

## divider

```TypeScript
divider(textDivider: Optional<DividerOptions | null>)
```

Sets the divider style. If not explicitly set, the divider uses the default style. Compared with [divider<sup>12+</sup>](TextPickerAttribute#divider(value: DividerOptions | null)), this API supports the **undefined** type for the **textDivider** parameter.

If the sum of **startMargin** and **endMargin** in [DividerOptions](arkts-arkui-divideroptions-i.md) exceeds the component's width, both margins are automatically reset to 0.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-divider(textDivider: Optional<DividerOptions | null>): TextPickerAttribute--><!--Device-TextPickerAttribute-divider(textDivider: Optional<DividerOptions | null>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textDivider | [Optional](arkts-arkui-optional-t.md)&lt;DividerOptions \| null&gt; | Yes | Default value:<br>{<br>strokeWidth: '2px', <br>startMargin: 0, <br>endMargin: 0, <br>color: '#33000000'<br>}<br>1. If the value of **textDivider** is **undefined**, the default value is used.<br>2. If **textDivider** is a valid [DividerOptions](arkts-arkui-divideroptions-i.md) object, the divider is rendered using the specified style.<br>3. If **textDivider** is **null**, the divider is hidden. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(enable: Optional<boolean>)
```

Sets whether to enable haptic feedback.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-enableHapticFeedback(enable: Optional<boolean>): TextPickerAttribute--><!--Device-TextPickerAttribute-enableHapticFeedback(enable: Optional<boolean>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable haptic feedback.<br>- **true**: Enable haptic feedback.<br>   - **false**: Disable haptic feedback.<br>Default value: **true**<br>Whether this parameter takes effect after being set to **true** depends on hardware support. |

## gradientHeight

```TypeScript
gradientHeight(value: Dimension)
```

Sets the height of the fade effect applied to the top and bottom edges of the content area. If no setting is specified, a default fade effect is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextPickerAttribute-gradientHeight(value: Dimension): TextPickerAttribute--><!--Device-TextPickerAttribute-gradientHeight(value: Dimension): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) | Yes | Height of the fade effect.<br>Default value: **36vp**<br>Value range:[0, +∞). Percentages are supported.<br>**NOTE**<br>1. If the value is set to a percentage, **100%** equals half the height of the text picker.<br>2. A value of **0** disables the fade effect.<br>3. Values exceeding half the height of the text picker revert to the default value.<br>4. If the value is **undefined** or negative,the default value is used. |

## gradientHeight

```TypeScript
gradientHeight(height: Optional<Dimension>)
```

Sets the height of the fade effect applied to the top and bottom edges of the content area. If no setting is specified, a default fade effect is used. Compared with [gradientHeight<sup>12+</sup>](TextPickerAttribute#gradientHeight(value: Dimension)), this API supports the **undefined** type for the **height** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-gradientHeight(height: Optional<Dimension>): TextPickerAttribute--><!--Device-TextPickerAttribute-gradientHeight(height: Optional<Dimension>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | [Optional](arkts-arkui-optional-t.md)&lt;Dimension&gt; | Yes | Height of the fade effect.<br>Default value: **36vp**<br>Value range:[0, +∞). Percentages are supported.<br>**NOTE**<br>1. If the value is set to a percentage, **100%** equals half the height of the text picker.<br>2. A value of **0** disables the fade effect.<br>3. Values exceeding half the height of the text picker revert to the default value.<br>4. If the value is **undefined** or negative,the default value is used. |

## onAccept

```TypeScript
onAccept(callback: (value: string, index: number) => void)
```

Triggered when the OK button in the dialog box is clicked. This event can be triggered only in the [text picker dialog box](arkts-arkui-textpicker.md).

This API is supported since API version 8 and deprecated since API version 10. No substitute is provided.

**Since:** 8

**Deprecated since:** 10

<!--Device-TextPickerAttribute-onAccept(callback: (value: string, index: number) => void): TextPickerAttribute--><!--Device-TextPickerAttribute-onAccept(callback: (value: string, index: number) => void): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string, index: number) =&gt; void | Yes |  |

## onCancel

```TypeScript
onCancel(callback: () => void)
```

Triggered when the cancel button in the dialog box is clicked. This event can be triggered only in the [text picker dialog box](arkts-arkui-textpicker.md).

This API is supported since API version 8 and deprecated since API version 10. No substitute is provided.

**Since:** 8

**Deprecated since:** 10

<!--Device-TextPickerAttribute-onCancel(callback: () => void): TextPickerAttribute--><!--Device-TextPickerAttribute-onCancel(callback: () => void): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes |  |

## onChange

```TypeScript
onChange(callback: (value: string | string[], index: number | number[]) => void)
```

Triggered when the text picker snaps to the selected item. This event cannot be triggered by two-way bound state variables. When the picker contains text only or a combination of images and text, **value** indicates the text of the selected item. When the picker contains images only, **value** is empty.

This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use [onEnterSelectedArea](TextPickerAttribute#onEnterSelectedArea) instead.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute--><!--Device-TextPickerAttribute-onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string \| string[], index: number \| number[]) =&gt; void | Yes |  |

## onChange

```TypeScript
onChange(callback: Optional<OnTextPickerChangeCallback>)
```

Triggered when the text picker snaps to the selected item. This event cannot be triggered by two-way bound state variables. When the picker contains text only or a combination of images and text, **value** indicates the text of the selected item. When the picker contains images only, **value** is empty. Compared with [onChange](TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) => void)),this API supports the **undefined** type for the **callback** parameter.

This callback is triggered only after the scroll animation completes. To obtain real-time index changes, use [onEnterSelectedArea](TextPickerAttribute#onEnterSelectedArea) instead.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-onChange(callback: Optional<OnTextPickerChangeCallback>): TextPickerAttribute--><!--Device-TextPickerAttribute-onChange(callback: Optional<OnTextPickerChangeCallback>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](arkts-arkui-optional-t.md)&lt;OnTextPickerChangeCallback&gt; | Yes | Callback invoked when an item in the picker is selected.<br>If **callback** is set to **undefined**, the callback function is not used. |

## onEnterSelectedArea

```TypeScript
onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback)
```

Triggered when an option enters the selection zone during text picker scrolling (when the scroll distance exceeds half the selected item's height).
> **NOTE**  
>  
> - This event is triggered earlier than the [onChange]  
> {@link TextPickerAttribute#onChange(callback: (value: string | string[], index: number | number[]) => void)}  
> event.  
>  
> - In scenarios where the picker contains linked columns, the use of this callback is not recommended. The reason  
> is that it identifies nodes where items enter the divider area during scrolling. However, items that change in  
> response to the scrolling do not themselves scroll. As a result, the callback's return values will only reflect  
> changes for the currently scrolling column, while other non-scrolling columns will remain unchanged.  
>  
> - This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback): TextPickerAttribute--><!--Device-TextPickerAttribute-onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TextPickerEnterSelectedAreaCallback](arkts-arkui-textpickerenterselectedareacallback-t.md) | Yes | Callback invoked when an option enters the selection zone during text picker scrolling. |

## onScrollStop

```TypeScript
onScrollStop(callback: TextPickerScrollStopCallback)
```

Triggered when the scrolling in the text picker stops.

If the scrolling is initiated by a gesture, this event is triggered when the finger is lifted from the screen and the scrolling stops.
> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier) since API version 20.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-TextPickerAttribute-onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute--><!--Device-TextPickerAttribute-onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TextPickerScrollStopCallback](arkts-arkui-textpickerscrollstopcallback-t.md) | Yes | Event triggered when the scrolling in the text picker stops. |

## onScrollStop

```TypeScript
onScrollStop(callback: Optional<TextPickerScrollStopCallback>)
```

Triggered when the scrolling in the text picker stops. Compared with [onScrollStop<sup>14+</sup>](TextPickerAttribute#onScrollStop(callback: TextPickerScrollStopCallback)), this API supports the **undefined** type for the **callback** parameter.

If the scrolling is initiated by a gesture, this event is triggered when the finger is lifted from the screen and the scrolling stops.
> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier) since API version 20.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-onScrollStop(callback: Optional<TextPickerScrollStopCallback>): TextPickerAttribute--><!--Device-TextPickerAttribute-onScrollStop(callback: Optional<TextPickerScrollStopCallback>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](arkts-arkui-optional-t.md)&lt;TextPickerScrollStopCallback&gt; | Yes | Event triggered when the scrolling in the text picker stops.<br>If **callback** is set to **undefined**, the callback function is not used. |

## selectedBackgroundStyle

```TypeScript
selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>)
```

Sets the background style of selected items.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextPickerAttribute-selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerBackgroundStyle&gt; | Yes | Background color and corner radius for selected items. Applies to all columns in multi-column mode.<br>Default value:<br>{ <br>color: $r('sys.color.comp_background_tertiary'),<br>borderRadius: $r('sys.float.corner_radius_level12')<br>} |

## selectedIndex

```TypeScript
selectedIndex(value: number | number[])
```

Sets the index of the selected item or items in the data list. This setting takes precedence over the **value** property in [TextPickerOptions](arkts-arkui-textpickeroptions-i.md). Use the number type for single-column pickers. Use the number[] type for multi-column pickers.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-selectedIndex(value: number | number[]): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedIndex(value: number | number[]): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| number[] | Yes | Index of the selected item or items in the data list. The index is zero-based.<br>Default value: **0**<br>If the value is negative or exceeds the maximum index, the default value is used.<br> |

## selectedIndex

```TypeScript
selectedIndex(index: Optional<number | number[]>)
```

Sets the index of the selected item or items in the data list. This setting takes precedence over the **value** property in [TextPickerOptions](arkts-arkui-textpickeroptions-i.md). Use the number type for single-column pickers. Use the number[] type for multi-column pickers. Compared with [selectedIndex<sup>10+</sup>](TextPickerAttribute#selectedIndex(value: number | number[])), this API supports the **undefined** type for the **index** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-selectedIndex(index: Optional<number | number[]>): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedIndex(index: Optional<number | number[]>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | [Optional](arkts-arkui-optional-t.md)&lt;number \| number[]&gt; | Yes | Index of the selected item or items in the data list. The index is zero-based.<br>Default value: **0**<br>If **index** is **undefined**, the **selected** value of [TextPickerOptions](arkts-arkui-textpickeroptions-i.md) is used.<br>If it is negative or exceeds the maximum index, the default value is used.<br> |

## selectedTextStyle

```TypeScript
selectedTextStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of the selected item.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-selectedTextStyle(value: PickerTextStyle): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedTextStyle(value: PickerTextStyle): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-pickertextstyle-i.md) | Yes | Text color, font size, and font weight of the selected item.<br>Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>} |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of the selected item. Compared with [selectedTextStyle<sup>10+</sup>](TextPickerAttribute#selectedTextStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle&gt; | Yes | Text color, font size, and font weight of the selected item.<br>Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>}<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## selectedTextStyle

```TypeScript
selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

Sets the text style of the selected item, covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode. Compared with [selectedTextStyle](TextPickerAttribute#selectedTextStyle(style: Optional<PickerTextStyle>))<sup>18+</sup>,this API supports the [TextPickerTextStyle](arkts-arkui-textpickertextstyle-i.md) type for the **style** parameter.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextPickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-selectedTextStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle \| TextPickerTextStyle&gt; | Yes | Text style of the selected item, covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>Default value:<br>{<br>color: '#ff007dff',<br>font: {<br>size: '20fp', <br>weight: FontWeight.Medium<br>},<br>minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## textStyle

```TypeScript
textStyle(value: PickerTextStyle)
```

Sets the text color, font size, and font weight of candidate items (the first item immediately above or below the selected item).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerAttribute-textStyle(value: PickerTextStyle): TextPickerAttribute--><!--Device-TextPickerAttribute-textStyle(value: PickerTextStyle): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PickerTextStyle](arkts-arkui-pickertextstyle-i.md) | Yes | Text color, font size, and font weight for candidate items.<br>Default value:<br   >{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>} |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle>)
```

Sets the text color, font size, and font weight of candidate items (the first item immediately above or below the selected item). Compared with [textStyle<sup>10+</sup>](TextPickerAttribute#textStyle(value: PickerTextStyle)), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerAttribute-textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle&gt; | Yes | Text color, font size, and font weight for candidate items.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}<br>If the value of **style** is **undefined**, the default value is used. |

## textStyle

```TypeScript
textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>)
```

Sets the text style of candidate items (the first item immediately above or below the selected item), covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode. Compared with [textStyle](TextPickerAttribute#textStyle(style: Optional<PickerTextStyle>))<sup>18+</sup>, this API supports the [TextPickerTextStyle](arkts-arkui-textpickertextstyle-i.md) type for the **style** parameter.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextPickerAttribute-textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute--><!--Device-TextPickerAttribute-textStyle(style: Optional<PickerTextStyle | TextPickerTextStyle>): TextPickerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;PickerTextStyle \| TextPickerTextStyle&gt; | Yes | Style of candidate items, covering the following: text color, font size, font weight, maximum font size, minimum font size, text overflow mode.<br>Default value:<br>{<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>},<br>minFontSize: 0,<br>maxFontSize: 0,<br>overflow: TextOverflow.Clip<br>}<br>If the value of **style** is **undefined**, the default value is used. |

