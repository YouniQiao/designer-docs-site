# LoadingProgressAttribute

除支持[通用属性]common外，还支持以下属性。 支持[通用事件]common。

**Inheritance:** LoadingProgressAttributeextends: CommonMethod<LoadingProgressAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor)
```

设置加载进度条前景色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 加载进度条的前景色。 默认值： API version 10及以下：'#99666666' API version 11及以上：'#ff66  6666' |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<LoadingProgressConfiguration>)
```

定制LoadingProgress内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;LoadingProgressConfiguration> | Yes | 在LoadingProgress组件上，定制内容区的方法。 modifier： 内容修  改器，开发者需要自定义class实现ContentModifier接口。 |

## enableLoading

```TypeScript
enableLoading(value: boolean)
```

设置LoadingProgress动画是否显示。LoadingProgress动画不显示时，该组件依旧占位。通用属性[Visibility]Visibility.Hidden隐藏的是包括 [border]CommonMethod#border、[padding]CommonMethod#padding等整个组件范围，而enableLoading=false只隐藏 LoadingProgress本身动画内容，不包括border等。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | LoadingProgress动画是否显示。 默认值：true，true表示显示LoadingProgress动画，false表示不显示LoadingProgress动  画。 |

