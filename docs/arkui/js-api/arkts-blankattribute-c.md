# BlankAttribute

除支持[通用属性]CommonMethod外，还支持以下属性： 支持[通用事件]CommonMethod。

**Inheritance:** BlankAttributeextends: CommonMethod<BlankAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor)
```

设置空白填充的填充颜色，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 空白填充的填充颜色。 默认值：Color.Transparent 非法值：按默认值处理。 |

