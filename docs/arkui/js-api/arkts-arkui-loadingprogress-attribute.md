# LoadingProgress properties/events

In addition to the [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following attributes are supported.

The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.

**Inheritance/Implementation:** LoadingProgressAttribute extends [CommonMethod<LoadingProgressAttribute>](CommonMethod<LoadingProgressAttribute>)

**Since:** 8

<!--Device-unnamed-declare class LoadingProgressAttribute extends CommonMethod<LoadingProgressAttribute>--><!--Device-unnamed-declare class LoadingProgressAttribute extends CommonMethod<LoadingProgressAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="color"></a>
## color

```TypeScript
color(value: ResourceColor)
```

Sets the foreground color for the **LoadingProgress** component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-LoadingProgressAttribute-color(value: ResourceColor): LoadingProgressAttribute--><!--Device-LoadingProgressAttribute-color(value: ResourceColor): LoadingProgressAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Foreground color of the **LoadingProgress** component.<br>Default value:<br>API version 10 or earlier: **'#99666666'**<br>API version 11 or later: **'#ff666666'** |

<a id="contentmodifier"></a>
## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>)
```

Creates a content modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LoadingProgressAttribute-contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>): LoadingProgressAttribute--><!--Device-LoadingProgressAttribute-contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>): LoadingProgressAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [ContentModifier](arkts-arkui-contentmodifier-i.md)&lt;LoadingProgressConfiguration&gt; | Yes | Content modifier to apply to the current component.<br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API. |

<a id="enableloading"></a>
## enableLoading

```TypeScript
enableLoading(value: boolean)
```

Sets whether to display the LoadingProgress animation. The component still takes up space in the layout when the loading animation is not shown. The universal attribute [Visibility](../arkts-apis/arkts-arkui-visibility-e.md).Hidden hides the entire component area, including the regions specified by [border](arkts-arkui-commonmethod-c.md#border-1) and [padding](arkts-arkui-commonmethod-c.md#padding-1). In contrast, when the value of **enableLoading** is set to **false**, only the loading animation itself is hidden without affecting the borders or other elements.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LoadingProgressAttribute-enableLoading(value: boolean): LoadingProgressAttribute--><!--Device-LoadingProgressAttribute-enableLoading(value: boolean): LoadingProgressAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to show the loading animation.<br>Default value: **true**. **true**: Show the loading animation. **false**: Do not show the loading animation. |

