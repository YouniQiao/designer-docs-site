# RadioAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** RadioAttributeextends: CommonMethod<RadioAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checked

```TypeScript
checked(value: boolean)
```

设置单选框的选中状态。 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 单选框的选中状态。 默认值：false 值为true时，单选框被选中。值为false时，单选框不被选中。 |

## checked

```TypeScript
checked(isChecked: Optional<boolean>)
```

设置单选框的选中状态。与[checked](arkts-radioattribute-c.md#checked)相比，isChecked参数新增了对undefined类型的支持。 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、 [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isChecked | Optional&lt;boolean> | Yes | 单选框的选中状态。 当isChecked的值为undefined时取默认值false。 值为true时，单选框被选中。值为false  时，单选框不被选中。 |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<RadioConfiguration>)
```

定制Radio内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;RadioConfiguration> | Yes | 在Radio组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义class实现  ContentModifier接口。 |

## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>)
```

定制Radio内容区的方法。与 [contentModifier](arkts-radioattribute-c.md#contentModifier)<sup>12+</sup >相比，modifier参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;RadioConfiguration>> | Yes | 在Radio组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义  class实现ContentModifier接口。 当modifier的值为undefined时，不使用内容修改器。 |

## onChange

```TypeScript
onChange(callback: (isChecked: boolean) => void)
```

单选框选中状态改变时触发的回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isChecked: boolean) => void | Yes | 单选框选中状态改变时触发该回调。 值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。 |

## onChange

```TypeScript
onChange(callback: Optional<OnRadioChangeCallback>)
```

单选框选中状态改变时触发的回调。与[onChange](arkts-radioattribute-c.md#onChange)相比，callback参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnRadioChangeCallback> | Yes | 单选框选中状态改变时触发该回调。 当callback的值为undefined时，不使用回调函数。 |

## radioStyle

```TypeScript
radioStyle(value?: RadioStyle)
```

设置单选框选中状态和非选中状态的样式。 从API version 10开始，该接口支持在ArkTS组件中使用。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RadioStyle | No | 单选框选中状态和非选中状态的样式。 未设置时，则按照RadioStyle中各参数的默认值配置。 |

