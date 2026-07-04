# CheckboxGroup properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md#common), the following events are supported.

**Inheritance/Implementation:** CheckboxGroupAttribute extends [CommonMethod<CheckboxGroupAttribute>](CommonMethod<CheckboxGroupAttribute>)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checkboxShape

```TypeScript
checkboxShape(value: CheckBoxShape)
```

Sets the check box shape of the check box group.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CheckBoxShape | Yes | Check box shape of the check box group.<br>Default value:**CheckBoxShape.CIRCLE**.<br>**NOTE**<br>The **CheckboxGroup** component is displayed according to the setshape.<br>All check boxes in the **CheckboxGroup** component that do not have their shape individually set willinherit the shape of the **CheckboxGroup**.<br>Check boxes in the **CheckboxGroup** component that have theirshape individually set will prioritize their own shape setting over the shape of the **CheckboxGroup**. |

## checkboxShape

```TypeScript
checkboxShape(shape: Optional<CheckBoxShape>)
```

Sets the check box shape of the check box group. Compared with [checkboxShape](CheckboxGroupAttribute#checkboxShape(value: CheckBoxShape))<sup>12+</sup>, this API supports the **undefined** type for the **shape** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | Optional&lt;CheckBoxShape&gt; | Yes | Check box shape of the check box group.<br>If **shape** is set to**undefined**, the default value **CheckBoxShape.CIRCLE** is used.<br>**NOTE**<br>The **CheckboxGroup**component is displayed according to the set shape.<br>All check boxes in the **CheckboxGroup** component thatdo not have their shape individually set will inherit the shape of the **CheckboxGroup**.<br>Check boxes in the**CheckboxGroup** component that have their shape individually set will prioritize their own shape setting overthe shape of the **CheckboxGroup**. |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<CheckBoxGroupConfiguration>>)
```

Customize the CheckboxGroup content area. When this attribute is set, the settings of other attributes become invalid. > **NOTE** > > This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;CheckBoxGroupConfiguration&gt;&gt; | Yes | Content modifier to apply to the**TextTimer** component.<br>modifier: content modifier. You need to customize a class to implement theContentModifier interface.<br>If **modifier** is set to **undefined**, no content modifier is used. |

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
| value | MarkStyle | Yes | Check mark style of the check box. |

## mark

```TypeScript
mark(style: Optional<MarkStyle>)
```

Sets the check mark style of the check box. Compared with [mark](CheckboxGroupAttribute#mark(value: MarkStyle))<sup>10+</sup>, this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;MarkStyle&gt; | Yes | Check mark style of the check box.<br>If **style** is set to **undefined**,the previous value is retained. |

## onChange

```TypeScript
onChange(callback: OnCheckboxGroupChangeCallback)
```

Triggered when the selected status of the check box group or any check box wherein changes.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCheckboxGroupChangeCallback | Yes | Information about the check box group.<br>**Since:** 18 |

## onChange

```TypeScript
onChange(callback: Optional<OnCheckboxGroupChangeCallback>)
```

Triggered when the selected status of the check box group or any check box wherein changes. Compared with [onChange](CheckboxGroupAttribute#onChange(callback: OnCheckboxGroupChangeCallback)), this API supports the **undefined** type for the **callback** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnCheckboxGroupChangeCallback&gt; | Yes | Information about the check box group.<br>If**callback** is set to **undefined**, the callback function is not used. |

## selectAll

```TypeScript
selectAll(value: boolean)
```

Sets whether to select all check boxes in the group. If the **select** attribute is set for a [Checkbox](arkts-arkui-checkbox.md) component in the same group, the setting of the **Checkbox** has a higher priority. When used with components that have caching functionality (such as [List](arkts-arkui-list.md)), the selection state of uncreated check boxes must be controlled by the developer. Since API version 10, this attribute supports two-way binding through [$$](../../../../ui/state-management/arkts-two-way-sync.md). Since API version 18, this attribute supports two-way binding through [!!](../../../../ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to select all.<br>Default value: **false**.<br>The value **true** means toselect all check boxes in the group, and **false** means to deselect all check boxes in the group. |

## selectAll

```TypeScript
selectAll(isAllSelected: Optional<boolean>)
```

Sets whether to select all. If the **select** attribute is set for a [Checkbox](arkts-arkui-checkbox.md) component in the same group, the setting of the **Checkbox** has a higher priority. Compared with [selectAll](CheckboxGroupAttribute#selectAll(value: boolean)), this API supports the **undefined** type for the **isAllSelected** parameter. When used with components that have caching functionality (such as [List](arkts-arkui-list.md)), the selection state of uncreated check boxes must be controlled by the developer. This attribute supports two-way binding through [$$](../../../../ui/state-management/arkts-two-way-sync.md) and [!!](../../../../ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAllSelected | Optional&lt;boolean&gt; | Yes | Whether to select all.<br>If **isAllSelected** is set to**undefined**, the default value **false** is used.<br>The value **true** means to select all check boxes inthe group, and **false** means to deselect all check boxes in the group. |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

Sets the color of the selected check box.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Color of the selected check box.<br>Default value:**$r('sys.color.ohos_id_color_text_primary_activated')**<br>An invalid value is handled as the default value. |

## selectedColor

```TypeScript
selectedColor(resColor: Optional<ResourceColor>)
```

Sets the color of the selected check box. Compared with [selectedColor](CheckboxGroupAttribute#selectedColor(value: ResourceColor)), this API supports the **undefined** type for the **resColor** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor&gt; | Yes | Color of the selected check box.<br>If **resColor** is set to**undefined**, the default value **$r('sys.color.ohos_id_color_text_primary_activated')** is used.<br>Aninvalid value is handled as the default value. |

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
| value | ResourceColor | Yes | Border color of the check box when it is not selected.<br>Default value:**$r('sys.color.ohos_id_color_switch_outline_off')** |

## unselectedColor

```TypeScript
unselectedColor(resColor: Optional<ResourceColor>)
```

Sets the border color of the check box when it is not selected. Compared with [unselectedColor](CheckboxGroupAttribute#unselectedColor(value: ResourceColor))<sup>10+</sup>, this API supports the **undefined** type for the **resColor** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor&gt; | Yes | Border color of the check box when it is not selected.<br>If**resColor** is set to **undefined**, the default value **$r('sys.color.ohos_id_color_switch_outline_off')** isused. |

