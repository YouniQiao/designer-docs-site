# ArcAlphabetIndexerAttribute

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** ArcAlphabetIndexerAttribute extends [CommonMethod<ArcAlphabetIndexerAttribute>](CommonMethod<ArcAlphabetIndexerAttribute>)

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcAlphabetIndexerAttribute, ArcAlphabetIndexer } from '@kit.ArkUI';
```

## autoCollapse

```TypeScript
autoCollapse(enable: Optional<boolean>): ArcAlphabetIndexerAttribute
```

Sets whether to enable the adaptive collapse behavior for the indexer.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean&gt; | Yes | Whether to enable the adaptive collapse behavior for the indexer.<br>Defaultvalue: **true**.<br>**true**: Enable the adaptive collapse behavior.<br>**false**: Disable the adaptivecollapse behavior. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## color

```TypeScript
color(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

Sets the text color of the index items in the normal state.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Text color.<br>Default value: **0xFFFFFF**, displayed as white |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## font

```TypeScript
font(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

Sets the default font style of the index items.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font&gt; | Yes | Default font style of the index items.<br>Default value:<br>{<br>size:'13.0fp',<br> style:FontStyle.Normal,<br> weight:500,<br> family:'HarmonyOS Sans'<br>} |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## itemSize

```TypeScript
itemSize(size: Optional<LengthMetrics>): ArcAlphabetIndexerAttribute
```

Sets the size of the index item area.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Optional&lt;LengthMetrics&gt; | Yes | Size of the index item area. For the circular item area, this representsthe diameter of the circle. Percentage values are not supported.<br>Default value: **24.0**<br>Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## onSelect

```TypeScript
onSelect(handler: Optional<OnSelectCallback>): ArcAlphabetIndexerAttribute
```

Triggered when an index item is selected. The return value is the index of the selected item.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;OnSelectCallback&gt; | Yes | Callback used to return the result. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## popupBackground

```TypeScript
popupBackground(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

Sets the background color of the pop-up window.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Background color of the pop-up window.<br>Default value: **0xD8404040**,displayed as dark gray with slight transparency |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## popupBackgroundBlurStyle

```TypeScript
popupBackgroundBlurStyle(style: Optional<BlurStyle>): ArcAlphabetIndexerAttribute
```

Sets the background blur style of the pop-up window. If this API is not used, the blur is disabled by default. The corresponding value is **NONE** in **BlurStyle**. > **NOTE** > After configuring the pop-up window background blur style with **popupBackgroundBlurStyle**, avoid applying > background colors via [popupBackground](arkts-arkui-arcalphabetindexerattribute-c.md#popupbackground-1).

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;BlurStyle&gt; | Yes | Background blur style of the pop-up window. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## popupColor

```TypeScript
popupColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

Sets the text color for the pop-up window.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Text color of the pop-up window.<br>Default value: **0xFFFFFF**,displayed as white |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## popupFont

```TypeScript
popupFont(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

Sets the font style of the pop-up window.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font&gt; | Yes | Font style of the pop-up window.<br>Default value:<br>{<br>size:'19.0fp',<br>style:FontStyle.Normal,<br> weight:500,<br> family:'HarmonyOS Sans'<br>} |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## selected

```TypeScript
selected(index: Optional<number>): ArcAlphabetIndexerAttribute
```

Sets the index of the selected item.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Optional&lt;number&gt; | Yes | Index of the selected item.<br>Default value: **0**<br>This parameter supportstwo-way binding through [!!](../../../../ui/state-management/arkts-new-binding.md). |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

Sets the background color of the selected item.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Background color of the selected item.<br>Default value: **0x1F71FF**,displayed as dark blue |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## selectedColor

```TypeScript
selectedColor(color: Optional<ColorMetrics>): ArcAlphabetIndexerAttribute
```

Sets the text color of the selected item.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Text color of the selected item.<br>Default value: **0xFFFFFF**,displayed as white |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## selectedFont

```TypeScript
selectedFont(font: Optional<Font>): ArcAlphabetIndexerAttribute
```

Sets the font style of the selected item, including size, weight, style, and font family.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| font | Optional&lt;Font&gt; | Yes | Font style of the selected item.<br>Default value: {<br>size:'13.0fp',<br> style:FontStyle.Normal,<br> weight:500,<br> family:'HarmonyOS Sans'<br>} |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## usePopup

```TypeScript
usePopup(enabled: Optional<boolean>): ArcAlphabetIndexerAttribute
```

Sets whether to display the pop-up window.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | Whether to display the pop-up window.<br>**true**: yes; **false**: no<br>Default value: **false** |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

