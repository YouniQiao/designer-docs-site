# CheckboxAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common外，还支持以下事件：

**Inheritance:** CheckboxAttributeextends: CommonMethod<CheckboxAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<CheckBoxConfiguration>)
```

定制Checkbox内容区的方法。设置该属性时，会导致其他属性设置失效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;CheckBoxConfiguration> | Yes | 在Checkbox组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义  class实现ContentModifier接口。 |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<CheckBoxConfiguration>>)
```

定制Checkbox内容区的方法。与 [contentModifier](arkts-checkboxattribute-c.md#contentModifier)<sup>12 +</sup>相比，modifier参数新增了对undefined类型的支持。设置该属性时，会导致其他属性设置失效。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;CheckBoxConfiguration>> | Yes | 在Checkbox组件上，定制内容区的方法。 modifier：内容修改器，开发  者需要自定义class实现ContentModifier接口。 当modifier的值为undefined时，不使用内容修改器。 |

## mark

```TypeScript
mark(value: MarkStyle)
```

设置多选框内部图标的样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | MarkStyle | Yes | 多选框内部图标样式。 从API version 12开始，设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。 默认值：{strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`, strokeWidth:  `$r('sys.float.ohos_id_checkbox_stroke_width')`, size: '20vp' } |

## mark

```TypeScript
mark(style: Optional<MarkStyle>)
```

设置多选框内部图标的样式。与[mark](arkts-checkboxattribute-c.md#mark)<sup>10+</sup>相比，style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;MarkStyle> | Yes | 多选框内部图标样式。 设置了indicatorBuilder时，按照indicatorBuilder中的内容显示。 当style的值为  undefined时，默认值：{ strokeColor : `$r('sys.color.ohos_id_color_foreground_contrary')`, strokeWidth:  `$r('sys.float.ohos_id_checkbox_stroke_width')`, size: '20vp' } |

## onChange

```TypeScript
onChange(callback: OnCheckboxChangeCallback)
```

当选中状态发生变化时，触发该回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnCheckboxChangeCallback | Yes | 返回选中的状态。 [since 18] |

## onChange

```TypeScript
onChange(callback: Optional<OnCheckboxChangeCallback>)
```

当选中状态发生变化时，触发该回调。与[onChange](arkts-checkboxattribute-c.md#onChange)相比，callback参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnCheckboxChangeCallback> | Yes | 返回选中的状态。 当callback的值为undefined时，不使用回调函数。 |

## select

```TypeScript
select(value: boolean)
```

设置多选框选中状态。 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 多选框是否选中。 默认值：false 值为true时，多选框被选中。值为false时，多选框未选中。 |

## select

```TypeScript
select(isSelected: Optional<boolean>)
```

设置多选框选中状态。与[select](arkts-checkboxattribute-c.md#select)相比，isSelected参数新增了对undefined类型的支持。 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、 [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSelected | Optional&lt;boolean> | Yes | 多选框是否选中。 当isSelected的值为undefined时取默认值false。 值为true时，多选框被选中。值为  false时，多选框未选中。 |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置多选框选中状态颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 多选框选中状态颜色。 默认值：$r('sys.color.ohos_id_color_text_primary_activated') 异常值按照默  认值处理。 |

## selectedColor

```TypeScript
selectedColor(resColor: Optional<ResourceColor>)
```

设置多选框选中状态颜色。与[selectedColor](arkts-checkboxattribute-c.md#selectedColor)相比，resColor参数新增了对undefined 类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 多选框选中状态颜色。 当resColor的值为undefined时取默认值$r('  sys.color.ohos_id_color_text_primary_activated')。 异常值按照默认值处理。 |

## shape

```TypeScript
shape(value: CheckBoxShape)
```

设置Checkbox组件形状，包括圆形和圆角方形。如果想要调整当前Checkbox的样式，需使用 [contentModifier](arkts-checkboxattribute-c.md#contentModifier)属性自定义 Checkbox样式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CheckBoxShape | Yes | Checkbox组件形状，包括圆形和圆角方形。 默认值：CheckBoxShape.CIRCLE |

## shape

```TypeScript
shape(shape: Optional<CheckBoxShape>)
```

设置Checkbox组件形状，包括圆形和圆角方形。与[shape](arkts-checkboxattribute-c.md#shape)<sup>11+</sup>相比，shape参数新增了对 undefined类型的支持。如果想要调整当前Checkbox的样式，需使用 [contentModifier](arkts-checkboxattribute-c.md#contentModifier)属性自定义 Checkbox样式。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | Optional&lt;CheckBoxShape> | Yes | Checkbox组件形状，包括圆形和圆角方形。 当shape的值为undefined时，默认值为  CheckBoxShape.CIRCLE。 |

## unselectedColor

```TypeScript
unselectedColor(value: ResourceColor)
```

设置多选框非选中状态的边框颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 多选框非选中状态边框颜色。 默认值：$r('sys.color.ohos_id_color_switch_outline_off') |

## unselectedColor

```TypeScript
unselectedColor(resColor: Optional<ResourceColor>)
```

设置多选框非选中状态的边框颜色。与[unselectedColor](arkts-checkboxattribute-c.md#unselectedColor)<sup>10+</sup>相比， resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 多选框非选中状态边框颜色。 当resColor的值为undefined时取默认值$r('  sys.color.ohos_id_color_switch_outline_off') |

