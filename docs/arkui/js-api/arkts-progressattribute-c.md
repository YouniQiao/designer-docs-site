# ProgressAttribute

除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性。 支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)。

**Inheritance:** ProgressAttributeextends: CommonMethod<ProgressAttribute<Type>>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor | LinearGradient)
```

设置进度条前景色。 从API version 10开始支持利用[LinearGradient]LinearGradient设置Ring样式的渐变色。Ring类型不建议设置透明度，如需设置透明度，建议使用 [DataPanel]data_panel。 从API version 23开始支持利用[LinearGradient]LinearGradient设置Linear样式和Capsule样式的渐变色。API version 22及之前版本利用 LinearGradient设置Linear样式和Capsule样式的渐变色时，会以默认主题色显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor \| LinearGradient | Yes | 进度条前景色。 默认值： - Capsule：    API version 9及以下：'#ff007  dff'    API version 10：'#33006cde'    API version 11及以上：'#33007dff' - Ring：    API version 9及以  下：'#ff007dff'    API version 10及以上：起始端：'#ff86c1ff'，结束端：'#ff254ff7' - 其他样式：'#ff007dff' |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<ProgressConfiguration>)
```

定制progress内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;ProgressConfiguration> | Yes | The contentModifier of progress. |

## privacySensitive

```TypeScript
privacySensitive(isPrivacySensitiveMode: Optional<boolean>)
```

设置隐私敏感。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isPrivacySensitiveMode | Optional&lt;boolean> | Yes | 设置隐私敏感，隐私模式下进度清零，文字将被遮罩。true：打开隐私敏感；false：关闭隐私敏感。 。  默认值：false。 |

## style

```TypeScript
style(value: Style)
```

设置组件的样式。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Style | Yes | 组件的样式。 - CapsuleStyleOptions：设置Capsule的样式。 - RingStyleOptions：设置Ring的样式。 -  LinearStyleOptions：设置Linear的样式。 - ScaleRingStyleOptions：设置ScaleRing的样式。 - EclipseStyleOptions：设置Eclipse  的样式。 - ProgressStyleOptions：仅可设置各类型进度条的strokeWidth、scaleCount、scaleWidth，仅对支持这些样式设置的进度条生效。 |

## value

```TypeScript
value(value: number)
```

设置当前进度值。设置小于0的数值时置为0，设置大于total的数值时置为total。非法数值不生效。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 当前进度值。 默认值：0 |

