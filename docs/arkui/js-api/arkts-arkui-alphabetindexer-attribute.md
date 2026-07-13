# AlphabetIndexer properties/events

When the [width](arkts-arkui-commonmethod-c.md#width-1) attribute is set to **"auto"**, the width is adaptive. This
means that the width will adjust according to the maximum width of the index items.

The default value of the [padding](arkts-arkui-commonmethod-c.md#padding-1) attribute is 4 vp.

The [maxFontScale](TextAttribute#maxFontScale) and [minFontScale](TextAttribute#minFontScale) attributes
are both set to a constant value of 1, which means that they do not change with the system font size.

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** AlphabetIndexerAttribute extends [CommonMethod<AlphabetIndexerAttribute>](CommonMethod<AlphabetIndexerAttribute>)

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignStyle

```TypeScript
alignStyle(value: IndexerAlign, offset?: Length)
```

Sets the alignment style of the indexer pop-up window.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | IndexerAlign | Yes | Alignment style of the indexer pop-up window. The pop-up window can be displayed onthe right or left of the indexer.<br>Default value: **IndexerAlign.END** |
| offset | Length | No | Spacing between the pop-up window and the alphabetic index bar. A value greater thanor equal to **0** is valid. If this parameter is set to a value less than **0** or is not set, the spacing isthe same as **popupPosition**. When this parameter and[popupPosition](AlphabetIndexerAttribute#popupPosition) are set at the same time, **offset** takes effectin the horizontal direction, and **popupPosition.y** takes effect in the vertical direction.<br>**Since:** 10 |

## autoCollapse

```TypeScript
autoCollapse(value: boolean)
```

Sets whether to enable the adaptive collapse behavior for the indexer.

When the first index item is **"#"**: Remaining items ≤ 9: Full display mode; 9 < Remaining items ≤ 13: Adapts
between full display and short collapse modes based on the indexer height; remaining items > 13: Adapts between
short and long collapse modes based on the indexer height.

When the first index item is not **"#"**: All items ≤ 9: Full display mode; 9 < All items ≤ 13: Adapts between full
display and short collapse modes based on the indexer height; all items > 13: Adapts between short and long
collapse modes based on the indexer height.

> **NOTE**

> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to auto-collapse or expand the indexer bar.<br>Default value:<br>Before APIversion 12: **false**<br>Since API version 12: **true**<br>**true**: Enable the adaptive collapse behavior.<br>**false**: Disable the adaptive collapse behavior. |

## color

```TypeScript
color(value: ResourceColor)
```

Sets the text color for unselected items.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Text color of unselected items.<br>Default value: **0x99182431**, which is aslightly transparent brown. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(value: boolean)
```

Sets whether to enable haptic feedback.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable haptic feedback.<br>**true**: To enable haptic feedback.<br>**false**:Not to enable haptic feedback.<br>Default value: **true**<br>To enable haptic feedback, you must declare the**ohos.permission.VIBRATE** permission under **requestPermissions** in the[module.json5](../../../../quick-start/module-configuration-file.md) file of the project.<br>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}] |

## font

```TypeScript
font(value: Font)
```

Sets the text style for unselected items.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Text style of unselected items.<br>Default value:<br>API version 11 and earlier:<br>{<br>size:'12.0fp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Regular,<br> family:'HarmonyOS Sans'<br>}<br>API version 12 and later:<br>{<br>size:'10.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br>family:'HarmonyOS Sans'<br>} |

## itemBorderRadius

```TypeScript
itemBorderRadius(value: number)
```

Sets the radius of the index background border corners in the alphabetic index bar.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | <br>Unit: vp.- Radius of the index background border corners in the alphabetic index bar.<br>Defaultvalue: **8vp**<br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0**is used.<br>The radius of the index background border corners in the alphabetic index bar is automaticallyadaptive (radius of the index corners + 4 vp). |

## itemSize

```TypeScript
itemSize(value: string | number)
```

Sets the size of the index item area.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| number | Yes | Size of the index item area, which is a square, meaning the side length of thesquare. This attribute cannot be set in percentage.<br>The actual value is restricted by the component size.The maximum width of an index item is the component width minus the left and right[padding](arkts-arkui-commonmethod-c.md#padding-1), and the maximum height of an index item is (component height minus thetop and bottom [padding](arkts-arkui-commonmethod-c.md#padding-1))/number of index items. If the input value is less than orequal to 0, the default value is used.<br>Default value: **16.0**<br>Unit: vp |

## onPopupSelect

```TypeScript
onPopupSelect(callback: OnAlphabetIndexerPopupSelectCallback)
```

Triggered when a secondary index item in the pop-up window is selected. The callback parameter is the index of the
selected secondary index item.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerPopupSelectCallback | Yes | Event triggered when a secondary index item in the pop-up window is selected.<br>**Since:** 18 |

## onRequestPopupData

```TypeScript
onRequestPopupData(callback: OnAlphabetIndexerRequestPopupDataCallback)
```

Triggered for a secondary index item content event in the pop-up window. The callback parameter is the index of the
selected secondary index item. The return value is the secondary index item content to be displayed in the pop-up
window.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerRequestPopupDataCallback | Yes | Callback for setting the secondary index itemcontent event in the pop-up window.<br>**Since:** 18 |

## onSelect

```TypeScript
onSelect(callback: OnAlphabetIndexerSelectCallback)
```

Triggered when an index item is selected, with the callback parameter being the index of the currently selected
item.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAlphabetIndexerSelectCallback | Yes | Event triggered when an index item is selected.<br>**Since:** 18 |

## onSelected

```TypeScript
onSelected(callback: (index: number) => void)
```

Triggered when an index item is selected, with the callback parameter being the index of the currently selected
item.

> **NOTE**

**Since:** 7

**Deprecated since:** 8

**Substitutes:** onSelect

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number) =&gt; void | Yes | Index of the selected item. |

## popupBackground

```TypeScript
popupBackground(value: ResourceColor)
```

Sets the background color for the pop-up window.

If this API is not called or the **value** parameter is set to **undefined**:

In API version 11 and earlier versions, the default background color of the pop-up is **0xFFFFFFFF**, which is
white.

In API versions 12 to 24, the default background color is **#66808080**, which is translucent gray.

Since API version 26.0.0, if neither **popupBackground** nor
[popupBackgroundBlurStyle](AlphabetIndexerAttribute#popupBackgroundBlurStyle) is called or the **value**
parameter is set to **undefined**, the **THIN** style of
**[ImmersiveStyle](../../../../reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle)** is displayed by
default on devices with high- and mid-level computing power, and the white background is displayed by default on
devices with low-level computing power. If **popupBackgroundBlurStyle** is called and the **value** parameter is
set to a valid value, the background color of the pop-up is **#66808080** by default, which is translucent gray.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color of the pop-up window.<br>The background blur effect of the pop-uptext can affect the background color. You can disable the effect by setting[popupBackgroundBlurStyle](AlphabetIndexerAttribute#popupBackgroundBlurStyle) to **NONE**.<br> |

## popupBackgroundBlurStyle

```TypeScript
popupBackgroundBlurStyle(value: BlurStyle)
```

Sets the background blur style of the pop-up window. In versions earlier than API version 26.0.0, if this API is
not called, the **COMPONENT_REGULAR** value in **BlurStyle** is used by default. Since API version 26.0.0, if
neither [popupBackground](AlphabetIndexerAttribute#popupBackground) nor **popupBackgroundBlurStyle** is
called or the value is **undefined**, the **THIN** style of
[ImmersiveStyle](../../../../reference/apis-arkui/arkts-apis-uimaterial.md#immersivestyle) is used by default on
devices with high- and mid-level computing power, and the white background is used by default on devices with low-
level computing power.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BlurStyle | Yes | Background blur style of the pop-up window.<br>The background blur effect can affect[popupBackground](AlphabetIndexerAttribute#popupBackground). You can disable the effect by setting it to**NONE**. |

## popupColor

```TypeScript
popupColor(value: ResourceColor)
```

Sets the text color for the primary index item in the pop-up window.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Text color of the primary index item in the pop-up window.<br>Default value:**0xFF007DFF**, which is blue. |

## popupFont

```TypeScript
popupFont(value: Font)
```

Sets the text style for the primary index item in the pop-up window.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Text style of the primary index item in the pop-up window.<br>Default value:<br>{<br>size:'24.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br> family:'HarmonyOS Sans'<br>} |

## popupItemBackgroundColor

```TypeScript
popupItemBackgroundColor(value: ResourceColor)
```

Sets the background color for the secondary index item in the pop-up window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color of the secondary index item in the pop-up window.<br>Defaultvalue:<br>API version 11 and earlier: **#FFFFFFFF**, which is white.<br>API version 12 and later:**#00000000**, which is transparent. |

## popupItemBorderRadius

```TypeScript
popupItemBorderRadius(value: number)
```

Sets the radius of the index border corners in the pop-up window.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Radius of the index background border corners in the pop-up window.<br>Unit: vp.**24vp**.<br>This parameter cannot be set in percentage. If the value specified is less than **0**, **0** isused.<br>The radius of the index background border corners in the pop-up window is automatically adaptive (radius of the index corners + 4 vp). |

## popupItemFont

```TypeScript
popupItemFont(value: Font)
```

Sets the text style for the secondary index item in the pop-up window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Text style of the secondary index item in the pop-up window.<br>Default value:<br>{<br>size:24,<br>weight:FontWeight.Medium<br>} |

## popupPosition

```TypeScript
popupPosition(value: Position)
```

Sets the position of the pop-up window relative to the center of the indexer's top border.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Position | Yes | Position of the pop-up window relative to the center of the indexer's top border.<br>Default value: **{x: 60.0, y: 48.0}** |

## popupSelectedColor

```TypeScript
popupSelectedColor(value: ResourceColor)
```

Sets the text color for the selected secondary index item in the pop-up window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Text color of the selected secondary index items in the pop-up window.<br>Defaultvalue: **#FF182431**, which is dark blue. |

## popupTitleBackground

```TypeScript
popupTitleBackground(value: ResourceColor)
```

Sets the background color for the primary index item in the pop-up window.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color for the primary index item in the pop-up window.<br>Default value:<br>If the pop-up window has only one index: **#00FFFFFF**.<br>If the pop-up window has multiple indexes:**#0c182431**. |

## popupUnselectedColor

```TypeScript
popupUnselectedColor(value: ResourceColor)
```

Sets the text color for the unselected secondary index items in the pop-up window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Text color of the unselected secondary index items in the pop-up window.<br>Default value: **#FF182431**, which is dark blue. |

## selected

```TypeScript
selected(index: number)
```

Sets the index of the selected item.

Since API version 10, this parameter supports two-way binding through
[$$](../../../../ui/state-management/arkts-two-way-sync.md).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the selected item.<br>Value range:[0, [arrayValue](arkts-arkui-alphabetindexeroptions-i.md).length – 1]<br>Default value: **0** |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

Sets the background color of the selected item.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color of the selected item.<br>Default value: **0x1A007DFF**, which issemi-transparent blue-green. |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

Sets the text color for the selected item.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Text color of the selected item.<br>Default value: **0xFF007DFF**, which is blue. |

## selectedFont

```TypeScript
selectedFont(value: Font)
```

Sets the text style for the selected item.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | Text style of the selected item.<br>Default value:<br>API version 11 and earlier:<br>{<br>size:'12.0fp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Regular,<br> family:'HarmonyOS Sans'<br>}<br>API version 12 and later:<br>{<br>size:'10.0vp',<br> style:FontStyle.Normal,<br> weight:FontWeight.Medium,<br>family:'HarmonyOS Sans'<br>} |

## usingPopup

```TypeScript
usingPopup(value: boolean)
```

Sets whether to display the pop-up window.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the pop-up window.<br>Default value: **false**.<br>**true**: Displaythe pop-up window.<br>**false**: Do not display the pop-up window. |

