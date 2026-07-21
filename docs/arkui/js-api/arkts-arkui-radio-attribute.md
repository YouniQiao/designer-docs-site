# Radio properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** RadioAttribute extends [CommonMethod<RadioAttribute>](CommonMethod<RadioAttribute>)

**Since:** 8

<!--Device-unnamed-declare class RadioAttribute extends CommonMethod<RadioAttribute>--><!--Device-unnamed-declare class RadioAttribute extends CommonMethod<RadioAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="checked"></a>
## checked

```TypeScript
checked(value: boolean)
```

Sets whether the radio button is selected.

Since API version 10, this attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).

Since API version 18, this attribute supports two-way binding through [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-RadioAttribute-checked(value: boolean): RadioAttribute--><!--Device-RadioAttribute-checked(value: boolean): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the radio button is selected.<br>Default value: **false**<br>**true**: The radio button is selected. **false**: The radio button is not selected. |

<a id="checked-1"></a>
## checked

```TypeScript
checked(isChecked: Optional<boolean>)
```

Sets whether the radio button is selected. Compared with [checked](RadioAttribute#checked(value: boolean)),this API supports the **undefined** type for the **isChecked** parameter.

This attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md) and [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-RadioAttribute-checked(isChecked: Optional<boolean>): RadioAttribute--><!--Device-RadioAttribute-checked(isChecked: Optional<boolean>): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isChecked | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether the radio button is selected.<br>If **isChecked** is set to **undefined**, the default value **false** is used.<br>**true**: The radio button is selected. **false**: The radio button is not selected. |

<a id="contentmodifier"></a>
## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<RadioConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RadioAttribute-contentModifier(modifier: ContentModifier<RadioConfiguration>): RadioAttribute--><!--Device-RadioAttribute-contentModifier(modifier: ContentModifier<RadioConfiguration>): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [ContentModifier](arkts-arkui-contentmodifier-i.md)&lt;RadioConfiguration&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

<a id="contentmodifier-1"></a>
## contentModifier

```TypeScript
contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>)
```

Creates a content modifier. Compared with [contentModifier](RadioAttribute#contentModifier(modifier: ContentModifier<RadioConfiguration>))<sup>12+</sup  
>, this API supports the **undefined** type for the **modifier** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-RadioAttribute-contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>): RadioAttribute--><!--Device-RadioAttribute-contentModifier(modifier: Optional<ContentModifier<RadioConfiguration>>): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [Optional](arkts-arkui-optional-t.md)&lt;ContentModifier&lt;RadioConfiguration&gt;&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.<br>If **modifier** is set to **undefined**, no content modifier is used. |

<a id="onchange"></a>
## onChange

```TypeScript
onChange(callback: (isChecked: boolean) => void)
```

Triggered when the selected state of the radio button changes.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-RadioAttribute-onChange(callback: (isChecked: boolean) => void): RadioAttribute--><!--Device-RadioAttribute-onChange(callback: (isChecked: boolean) => void): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isChecked: boolean) =&gt; void | Yes | Selected state of the radio button.<br>The value **true** means that the radio button changes from unselected to selected, and **false** means that the radio button changes from selected to unselected. |

<a id="onchange-1"></a>
## onChange

```TypeScript
onChange(callback: Optional<OnRadioChangeCallback>)
```

Triggered when the selected state of the radio button changes. Compared with [onChange](RadioAttribute#onChange(callback: (isChecked: boolean) => void)), this API supports the **undefined** type for the **callback** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-RadioAttribute-onChange(callback: Optional<OnRadioChangeCallback>): RadioAttribute--><!--Device-RadioAttribute-onChange(callback: Optional<OnRadioChangeCallback>): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](arkts-arkui-optional-t.md)&lt;OnRadioChangeCallback&gt; | Yes | Callback for radio button selection state changes.<br>If **callback** is set to **undefined**, the callback function is not used. |

<a id="radiostyle"></a>
## radioStyle

```TypeScript
radioStyle(value?: RadioStyle)
```

Sets the style of the radio button in selected or deselected state.

Since API version 10, this API is supported in ArkTS widgets.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RadioAttribute-radioStyle(value?: RadioStyle): RadioAttribute--><!--Device-RadioAttribute-radioStyle(value?: RadioStyle): RadioAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RadioStyle](arkts-arkui-radiostyle-i.md) | No | Style of the radio button in selected or deselected state. |

