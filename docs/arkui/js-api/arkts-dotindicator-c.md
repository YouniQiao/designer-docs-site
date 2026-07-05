# DotIndicator

构造圆点指示器的样式，继承自[Indicator](arkts-indicator-c.md#Indicator)。

**Inheritance:** DotIndicatorextends: Indicator<DotIndicator>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor): DotIndicator
```

Swiper组件圆点导航指示器的颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 设置Swiper组件圆点导航指示器的颜色。 默认值：'#1A182431'，浅灰色。 |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

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

## indicatorIcon

```TypeScript
indicatorIcon(iconList: Array<IndicatorIconInfo>): DotIndicator
```

设置导航点图标。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iconList | Array&lt;IndicatorIconInfo> | Yes | 需要设置的导航点索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回DotIndicator。 |

## itemHeight

```TypeScript
itemHeight(value: Length): DotIndicator
```

Swiper组件圆点导航指示器的高。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置Swiper组件圆点导航指示器的高，不支持设置百分比。 默认值：6 单位：vp 取值范围：(0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## itemWidth

```TypeScript
itemWidth(value: Length): DotIndicator
```

Swiper组件圆点导航指示器的宽。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置Swiper组件圆点导航指示器的宽，不支持设置百分比。 默认值：6 单位：vp 取值范围：(0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## mask

```TypeScript
mask(value: boolean): DotIndicator
```

是否显示Swiper组件圆点导航指示器的蒙版样式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 设置是否显示Swiper组件圆点导航指示器的蒙版样式。true为显示Swiper组件圆点导航指示器的蒙版样式，false为不显示。 默认值：false |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## maxDisplayCount

```TypeScript
maxDisplayCount(maxDisplayCount: number): DotIndicator
```

圆点导航点指示器样式下，导航点显示个数最大值。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxDisplayCount | number | Yes | 设置圆点导航点指示器样式下，导航点显示个数最大值，当实际导航点个数大于最大导航点个数时，会生效超长效果样式，样式如  [示例5](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例5设置圆点导航点超长显示)所示。 默认值：这个属性没有默认值，如果设置异  常值那等同于没有超长显示效果。 取值范围：[6, 9] 说明： 1、超长显示场景，目前暂时不支持交互功能（包括：手指点击拖拽、鼠标操作等）。 2、在超长显示场景下，中间页面对应的选  中导航点的位置，并不是完全固定的，取决于之前的翻页操作序列。 3、当前仅支持displayCount为1的场景。 |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor): DotIndicator
```

选中Swiper组件圆点导航指示器的颜色。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 设置选中Swiper组件圆点导航指示器的颜色。 默认值：'#007DFF'，蓝色。 |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## selectedItemHeight

```TypeScript
selectedItemHeight(value: Length): DotIndicator
```

选中Swiper组件圆点导航指示器的高。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置选中Swiper组件圆点导航指示器的高，不支持设置百分比。 默认值：6 单位：vp 取值范围：(0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## selectedItemWidth

```TypeScript
selectedItemWidth(value: Length): DotIndicator
```

选中Swiper组件圆点导航指示器的宽。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置选中Swiper组件圆点导航指示器的宽，不支持设置百分比。 默认值：6 单位：vp 取值范围：(0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

## space

```TypeScript
space(space: LengthMetrics): DotIndicator
```

设置Swiper圆点导航点间距。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| space | LengthMetrics | Yes | 设置圆点导航点间距，不支持设置百分比。 默认值：PC/2in1设备上为10，其他设备为8。 单位：vp 取值范围：[0, +∞) |

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 返回当前圆点指示器。 |

