# ContainerSpan properties/events

Only the following attributes are supported.

The [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) are not supported.

**Since:** 11

<!--Device-unnamed-declare class ContainerSpanAttribute--><!--Device-unnamed-declare class ContainerSpanAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="attributemodifier"></a>
## attributeModifier

```TypeScript
attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute>)
```

Creates an attribute modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ContainerSpanAttribute-attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute>): ContainerSpanAttribute--><!--Device-ContainerSpanAttribute-attributeModifier(modifier: AttributeModifier<ContainerSpanAttribute>): ContainerSpanAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [AttributeModifier](arkts-arkui-attributemodifier-i.md)&lt;ContainerSpanAttribute&gt; | Yes | Modifier for dynamically setting attributes on the current component. |

<a id="textbackgroundstyle"></a>
## textBackgroundStyle

```TypeScript
textBackgroundStyle(style: TextBackgroundStyle)
```

Span background style.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ContainerSpanAttribute-textBackgroundStyle(style: TextBackgroundStyle): ContainerSpanAttribute--><!--Device-ContainerSpanAttribute-textBackgroundStyle(style: TextBackgroundStyle): ContainerSpanAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [TextBackgroundStyle](arkts-arkui-textbackgroundstyle-i.md) | Yes | The background style of span. |

