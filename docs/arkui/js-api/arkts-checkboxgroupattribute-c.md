# CheckboxGroupAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** CheckboxGroupAttributeextends: CommonMethod<CheckboxGroupAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checkboxShape

```TypeScript
checkboxShape(value: CheckBoxShape)
```

设置CheckboxGroup组件形状，包括圆形和圆角方形。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CheckBoxShape | Yes | 设置CheckboxGroup组件形状，包括圆形和圆角方形。 默认值：CheckBoxShape.CIRCLE 说明：  CheckboxGroup组件将按照设置的形状显示。 CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状将与CheckboxGroup保持一致。 CheckboxGroup内  已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。 |

## checkboxShape

```TypeScript
checkboxShape(shape: Optional<CheckBoxShape>)
```

设置CheckboxGroup组件形状，包括圆形和圆角方形。与[checkboxShape](arkts-checkboxgroupattribute-c.md#checkboxShape)< sup>12+</sup>相比，shape参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | Optional&lt;CheckBoxShape> | Yes | 设置CheckboxGroup组件形状，包括圆形和圆角方形。 当shape的值为undefined时，默认值为  CheckBoxShape.CIRCLE。 说明： CheckboxGroup组件将按照设置的形状显示。 CheckboxGroup内所有未单独设置shape类型的Checkbox，其形状  将与CheckboxGroup保持一致。 CheckboxGroup内已单独设置shape类型的Checkbox，其形状将优先于CheckboxGroup的设置，按照自身设置显示。 |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<CheckBoxGroupConfiguration>>)
```

定制CheckboxGroup内容区的方法。设置该属性时，其他属性设置会失效。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;CheckBoxGroupConfiguration>> | Yes | 在CheckboxGroup组件上，定制内容区的方法。  modifier：内容修改器，开发者需要自定义类以实现ContentModifier接口。 当modifier的值为undefined时，不使用内容修改器。 |

## mark

```TypeScript
mark(value: MarkStyle)
```

设置多选框内部图标样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | MarkStyle | Yes | 多选框内部图标样式。 |

## mark

```TypeScript
mark(style: Optional<MarkStyle>)
```

设置多选框内部图标样式。与[mark](arkts-checkboxgroupattribute-c.md#mark)<sup>10+</sup>相比，style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;MarkStyle> | Yes | 多选框内部图标样式。 当style的值为undefined时，维持上次取值。 |

## onChange

```TypeScript
onChange(callback: OnCheckboxGroupChangeCallback)
```

CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCheckboxGroupChangeCallback | Yes | 多选框群组的信息。 [since 18] |

## onChange

```TypeScript
onChange(callback: Optional<OnCheckboxGroupChangeCallback>)
```

CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。与 [onChange](arkts-checkboxgroupattribute-c.md#onChange)相比，callback参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnCheckboxGroupChangeCallback> | Yes | 多选框群组的信息。 当callback的值为undefined时，不使用回调函数。 |

## selectAll

```TypeScript
selectAll(value: boolean)
```

设置是否全选。若同组的[Checkbox]checkbox显式设置了select属性，则Checkbox的优先级高。 在与带有缓存功能的组件（如[List]list）配合使用时，未创建的Checkbox选中状态需由开发者控制。 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否全选。 默认值：false 值为true时，多选框群组将全部被选中；值为false时，多选框群组将全部取消选中。 |

## selectAll

```TypeScript
selectAll(isAllSelected: Optional<boolean>)
```

设置是否全选。若同组的[Checkbox]checkbox显式设置了select属性，则Checkbox的优先级高。与 [selectAll](arkts-checkboxgroupattribute-c.md#selectAll)相比，isAllSelected参数新增了对undefined类型的支持。 在与带有缓存功能的组件（如[List]list）配合使用时，未创建的Checkbox选中状态需由开发者控制。 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、 [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAllSelected | Optional&lt;boolean> | Yes | 是否全选。 当isAllSelected的值为undefined时取默认值false。 值为true时，多选框群组将全部被选  中；值为false时，多选框群组将全部取消选中。 |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置被选中或部分选中状态的颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 被选中或部分选中状态的颜色。 默认值：$r('sys.color.ohos_id_color_text_primary_activated') 异常  值按照默认值处理。 |

## selectedColor

```TypeScript
selectedColor(resColor: Optional<ResourceColor>)
```

设置被选中或部分选中状态的颜色。与[selectedColor](arkts-checkboxgroupattribute-c.md#selectedColor)相比，resColor参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 被选中或部分选中状态的颜色。 当resColor的值为undefined时，默认值：$r('  sys.color.ohos_id_color_text_primary_activated') 异常值按照默认值处理。 |

## unselectedColor

```TypeScript
unselectedColor(value: ResourceColor)
```

设置非选中状态边框颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 非选中状态边框颜色。 默认值：$r('sys.color.ohos_id_color_switch_outline_off')。 |

## unselectedColor

```TypeScript
unselectedColor(resColor: Optional<ResourceColor>)
```

设置非选中状态边框颜色。与[unselectedColor](arkts-checkboxgroupattribute-c.md#unselectedColor)<sup>10+</sup>相比， resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 非选中状态边框颜色。 当resColor的值为undefined时，默认值：$r('  sys.color.ohos_id_color_switch_outline_off')。 |

