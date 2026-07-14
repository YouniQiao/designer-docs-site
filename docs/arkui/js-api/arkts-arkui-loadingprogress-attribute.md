# LoadingProgress properties/events

In addition to the [universal attributes](../../../../reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following attributes are supported. The [universal events](../../../../reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.

**Inheritance/Implementation:** LoadingProgressAttribute extends [CommonMethod<LoadingProgressAttribute>](CommonMethod<LoadingProgressAttribute>)

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor)
```

Sets the foreground color for the **LoadingProgress** component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Foreground color of the **LoadingProgress** component.<br>Default value:<br>APIversion 10 or earlier: **'#99666666'**<br>API version 11 or later: **'#ff666666'** |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;LoadingProgressConfiguration&gt; | Yes | Content modifier to apply to the currentcomponent.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

## enableLoading

```TypeScript
enableLoading(value: boolean)
```

Sets whether to display the LoadingProgress animation. The component still takes up space in the layout when the loading animation is not shown. The universal attribute [Visibility](arkts-arkui-visibility-e.md).Hidden hides the entire component area, including the regions specified by [border](arkts-arkui-commonmethod-c.md#border-1) and [padding](arkts-arkui-commonmethod-c.md#padding-1). In contrast, when the value of **enableLoading** is set to **false**, only the loading animation itself is hidden without affecting the borders or other elements.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to show the loading animation.<br>Default value: **true**. **true**: Show theloading animation. **false**: Do not show the loading animation. |

