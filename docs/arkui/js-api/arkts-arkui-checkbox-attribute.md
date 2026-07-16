# Checkbox properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** CheckboxAttribute extends [CommonMethod<CheckboxAttribute>](CommonMethod<CheckboxAttribute>)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)
```

Creates a content modifier for the **Checkbox** component. Setting this attribute will invalidate other attribute
settings.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;CheckBoxConfiguration&gt; | Yes | Content modifier to apply to the **Checkbox**component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<CheckBoxConfiguration>>)
```

Creates a content modifier for the **Checkbox** component. Compared with
[contentModifier](CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>))<sup>12
+</sup>, this API supports the **undefined** type for the **modifier** parameter. Setting this attribute will
invalidate other attribute settings.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;CheckBoxConfiguration&gt;&gt; | Yes | Content modifier to apply to the**Checkbox** component.<br>**modifier**: content modifier. You need a custom class to implement the**ContentModifier** API.<br>If **modifier** is set to **undefined**, no content modifier is used. |

## mark

```TypeScript
mark(value: MarkStyle)
```

Sets the check mark style of the check box.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | MarkStyle | Yes | Check mark style of the check box. Since API version 12, if **indicatorBuilder** isset, the style is determined by **indicatorBuilder**.<br>Default value: {<br>strokeColor :`$r('sys.color.ohos_id_color_foreground_contrary')`,<br>strokeWidth:`$r('sys.float.ohos_id_checkbox_stroke_width')`,<br>size: '20vp'<br>} |

## mark

```TypeScript
mark(style: Optional<MarkStyle>)
```

Sets the check mark style of the check box. Compared with [mark](CheckboxAttribute#mark(value: MarkStyle))<
sup>10+</sup>, this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;MarkStyle&gt; | Yes | Check mark style of the check box. If **indicatorBuilder** is set, the styleis determined by **indicatorBuilder**.<br>If **style** is set to **undefined**, the default value is used: {<br>strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`,<br>strokeWidth:`$r('sys.float.ohos_id_checkbox_stroke_width')`,<br>size: '20vp'<br>} |

## onChange

```TypeScript
onChange(callback: OnCheckboxChangeCallback)
```

Invoked when the selected state of the check box changes.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCheckboxChangeCallback | Yes | Callback used to return the selected state.<br>**Since:** 18 |

## onChange

```TypeScript
onChange(callback: Optional<OnCheckboxChangeCallback>)
```

Invoked when the selected state of the check box changes. Compared with
[onChange](CheckboxAttribute#onChange(callback: OnCheckboxChangeCallback)), this API supports the
**undefined** type for the **callback** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnCheckboxChangeCallback&gt; | Yes | Callback used to return the selected state.<br>If**callback** is set to **undefined**, the callback function is not used. |

## select

```TypeScript
select(value: boolean)
```

Sets whether the check box is selected.

Since API version 10, this attribute supports two-way binding through
[$$](../../../../ui/state-management/arkts-two-way-sync.md).

Since API version 18, this attribute supports two-way binding through
[!!](../../../../ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the check box is selected.<br>Default value: **false**<br>**true**: The checkbox is selected. <br>**false**: The check box is not selected. |

## select

```TypeScript
select(isSelected: Optional<boolean>)
```

Sets whether the check box is selected. Compared with [select](CheckboxAttribute#select(value: boolean)),
this API supports the **undefined** type for the **isSelected** parameter.

This attribute supports two-way binding through [$$](../../../../ui/state-management/arkts-two-way-sync.md) and
[!!](../../../../ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSelected | Optional&lt;boolean&gt; | Yes | Whether the check box is selected.<br>If **isSelected** is set to**undefined**, the default value **false** is used.<br>**true**: The check box is selected. <br>**false**: Thecheck box is not selected. |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

Sets the color of the check box when it is selected.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Color of the check box when it is selected.<br>Default value:**$r('sys.color.ohos_id_color_text_primary_activated')**.<br>An invalid value is handled as the default value. |

## selectedColor

```TypeScript
selectedColor(resColor: Optional<ResourceColor>)
```

Sets the color of the check box when it is selected. Compared with
[selectedColor](CheckboxAttribute#selectedColor(value: ResourceColor)), this API supports the **undefined**
type for the **resColor** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor&gt; | Yes | Color of the check box when it is selected.<br>If **resColor** is setto **undefined**, the default value **$r('sys.color.ohos_id_color_text_primary_activated')** is used.<br>Aninvalid value is handled as the default value. |

## shape

```TypeScript
shape(value: CheckBoxShape)
```

Sets the check box shape. To adjust the style of the current check box, use
[contentModifier](CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CheckBoxShape | Yes | Shape of the check box.<br>Default value: **CheckBoxShape.CIRCLE** |

## shape

```TypeScript
shape(shape: Optional<CheckBoxShape>)
```

Sets the check box shape. Compared with [shape](CheckboxAttribute#shape(value: CheckBoxShape))<sup>11+</sup>,
this API supports the **undefined** type for the **shape** parameter. To adjust the style of the current check box,
use [contentModifier](CheckboxAttribute#contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | Optional&lt;CheckBoxShape&gt; | Yes | Shape of the check box.<br>If **shape** is set to **undefined**, thedefault value **CheckBoxShape.CIRCLE** is used. |

## unselectedColor

```TypeScript
unselectedColor(value: ResourceColor)
```

Sets the border color of the check box when it is not selected.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Border color of the check box when it is not selected.<br>Default value:**$r('sys.color.ohos_id_color_switch_outline_off')**. |

## unselectedColor

```TypeScript
unselectedColor(resColor: Optional<ResourceColor>)
```

Sets the border color of the check box when it is not selected. Compared with
[unselectedColor](CheckboxAttribute#unselectedColor(value: ResourceColor))<sup>10+</sup>, this API supports
the **undefined** type for the **resColor** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor&gt; | Yes | Border color of the check box when it is not selected.<br>If**resColor** is set to **undefined**, the default value **$r('sys.color.ohos_id_color_switch_outline_off')** isused. |

