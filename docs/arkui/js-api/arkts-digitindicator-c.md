# DigitIndicator

构造数字指示器的样式，继承自[Indicator](arkts-indicator-c.md#Indicator)。 > **说明：** > 按组翻页时，数字导航点显示的子节点数量不包括占位节点。 > 数字导航点文本最大的字体缩放倍数[maxFontScale]TextAttribute#maxFontScale为2。 > 页码的镜像显示依据为系统的RTL状态。

**Inheritance:** DigitIndicatorextends: Indicator<DigitIndicator>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

DotIndicator的构造函数。 > **说明：** > - 按压导航点时，导航点会放大至1.33倍显示，因此非按压态时导航点的可见范围边界至实际范围边界存在一定距离，该距离会随着itemWidth、itemHeight、selectedItemWidth、 > selectedItemHeight等参数变大而变大。 > > - 若页面数量较多、圆点导航点超出页面时，建议使用maxDisplayCount设置导航点显示个数。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## digitFont

```TypeScript
digitFont(value: Font): DigitIndicator
```

Swiper组件数字导航点的字体样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 设置Swiper组件数字导航点的字体样式。 只支持Font中size和weight参数，family和style设置不生效。 默认值： { size: 14,   weight: FontWeight.Normal } |

**Return value:**

| Type | Description |
| --- | --- |
| DigitIndicator | 返回当前数字指示器。 |

## fontColor

```TypeScript
fontColor(value: ResourceColor): DigitIndicator
```

Swiper组件数字导航点的字体颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 设置Swiper组件数字导航点的字体颜色。 默认值：'#ff182431' |

**Return value:**

| Type | Description |
| --- | --- |
| DigitIndicator | 返回当前数字指示器。 |

## selectedDigitFont

```TypeScript
selectedDigitFont(value: Font): DigitIndicator
```

选中Swiper组件数字导航点的字体样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 设置选中Swiper组件数字导航点的字体样式。 默认值： { size: 14, weight: FontWeight.Normal } |

**Return value:**

| Type | Description |
| --- | --- |
| DigitIndicator | 返回当前数字指示器。 |

## selectedFontColor

```TypeScript
selectedFontColor(value: ResourceColor): DigitIndicator
```

选中Swiper组件数字导航点的字体颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 设置选中Swiper组件数字导航点的字体颜色。 默认值：'#ff182431' |

**Return value:**

| Type | Description |
| --- | --- |
| DigitIndicator | 返回当前数字指示器。 |

