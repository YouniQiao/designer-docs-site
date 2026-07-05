# MarqueeAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** MarqueeAttributeextends: CommonMethod<MarqueeAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowScale

```TypeScript
allowScale(value: boolean)
```

设置是否允许文本缩放。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否允许文本缩放。 true：允许文本缩放；false：不允许文本缩放。 默认值：false 说明： 仅当  [fontSize](arkts-marqueeattribute-c.md#fontSize)为fp单位时生效。 |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

设置字体颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 字体颜色。 Wearable设备上默认值为：'#c5ffffff'，显示为淡蓝色，其他设备默认值为：'e6182431'，显示为黑色。 |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

设置字体列表。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | 字体列表。默认字体'HarmonyOS Sans'。 应用当前支持'HarmonyOS Sans'字体和注册自定义字体  [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-text-fontcollection-c.md#loadFontSync)。 卡片当前仅支持'HarmonyOS Sans'字体。 |

## fontSize

```TypeScript
fontSize(value: Length)
```

设置字体大小。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。不支持设置百分比字符串。 |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

设置文本的字体粗细，设置过大可能会在不同字体下有截断。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | Yes | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持  number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 默认值：  FontWeight.Normal |

## marqueeUpdateStrategy

```TypeScript
marqueeUpdateStrategy(value: MarqueeUpdateStrategy)
```

跑马灯组件属性更新后，跑马灯的滚动策略。(当跑马灯为播放状态，且文本内容宽度超过跑马灯组件宽度时，该属性生效。)

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | MarqueeUpdateStrategy | Yes | 跑马灯组件属性更新后，跑马灯的滚动策略。 默认值: MarqueeUpdateStrategy.DEFAULT |

## onBounce

```TypeScript
onBounce(event: () => void)
```

完成一次滚动时触发，若循环次数不为1，则该事件会多次触发。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 完成一次滚动时触发的回调。 |

## onFinish

```TypeScript
onFinish(event: () => void)
```

滚动全部循环次数完成时触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 滚动全部循环次数完成时的回调。 |

## onStart

```TypeScript
onStart(event: () => void)
```

当滚动的文本内容变化或者开始滚动时触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | 当滚动的文本内容变化或者开始滚动时的回调。 |

## onStop

```TypeScript
onStop(event: Callback<void> | undefined)
```

跑马灯滚动结束或停止时触发回调。 跑马灯停止表示跑马灯将从开始位置，重新开始循环，不包含暂停场景，暂停不会触发该回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void> \| undefined | Yes |  |

