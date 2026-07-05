# DataPanelAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** DataPanelAttributeextends: CommonMethod<DataPanelAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeEffect

```TypeScript
closeEffect(value: boolean)
```

设置是否关闭数据占比图表旋转动效和投影效果。若未设置[trackShadow](arkts-datapanelattribute-c.md#trackShadow)属性，则由该属性控制投影效果的开关，开启投影的效果为投影的默认效果。若设置了 trackShadow属性，则由trackShadow属性值控制投影效果的开关。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 关闭数据占比图表旋转动效和投影效果。 默认值：false，false表示开启数据占比图表旋转动效和投影效果，true表示关闭数据占比图表旋转动效和投影效果。 |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<DataPanelConfiguration>)
```

定制DataPanel内容区的方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;DataPanelConfiguration> | Yes | 在DataPanel组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义  class实现ContentModifier接口。 |

## strokeWidth

```TypeScript
strokeWidth(value: Length)
```

设置圆环粗细。数据面板的类型为DataPanelType.Line时该属性不生效。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 圆环粗细。 默认值：24 单位：vp 设置字符串类型参数时，如果不指定单位，默认单位为px，例如'10'，等同于'10px'。 说明：  设置小于0的值时，按默认值显示。 请合理设置圆环粗细，当value大于圆环半径时，圆环粗细会自动设置为圆环半径的12%。如果value过大，圆环可能会消失。 |

## trackBackgroundColor

```TypeScript
trackBackgroundColor(value: ResourceColor)
```

设置底板颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 底板颜色。 默认值：'#08182431'，格式为十六进制ARGB值，前两位代表透明度。 |

## trackShadow

```TypeScript
trackShadow(value: DataPanelShadowOptions)
```

设置投影样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DataPanelShadowOptions | Yes | 投影样式。 说明： 设置为null时，不开启投影。 |

## valueColors

```TypeScript
valueColors(value: Array<ResourceColor | LinearGradient>)
```

设置各数据段颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor \| LinearGradient> | Yes | 各数据段颜色，ResourceColor为纯色，LinearGradient为渐变色。默认渐变色，其九段数据段默认颜  色：[{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }]、  [{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }]、  [{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }]、  [{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }]、  [{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }]、  [{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }]、  [{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }]、  [{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }]、  [{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }] |

