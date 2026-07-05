# Indicator

设置导航点距离Swiper组件距离。由于导航点有默认交互区域，交互区域高度为32vp，所以无法让显示部分完全贴底。若想实现完全贴底，可以使用 [IndicatorComponent](docroot://reference/apis-arkui/arkui-ts/ts-swiper-components-indicator.md#indicatorcomponent)组件， 更灵活地调整位置。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## bottom

```TypeScript
bottom(value: Length): T
```

导航点底部相对于Swiper的位置。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置导航点底部相对于Swiper的位置。 未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置  bottom=0一致。 设置为0时：按照0位置布局计算。 优先级：低于top属性。 取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## bottom

```TypeScript
bottom(bottom: LengthMetrics | Length, ignoreSize: boolean): T
```

导航点底部相对于Swiper的位置，并可通过ignoreSize属性忽略导航点大小。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bottom | LengthMetrics \| Length | Yes | 设置导航点底部相对于Swiper的位置。 未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交  叉轴方向上，位于底部，效果与设置bottom=0一致。 设置为0时：按照0位置布局计算。 优先级：低于top属性。 取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。 |
| ignoreSize | boolean | Yes | 设置是否忽略导航点本身大小，默认false。 设为true时可以将导航点更靠近Swiper底部，使用方法可以参考  [示例9演示导航点space与bottom](docroot://reference/apis-arkui/arkui-ts/ts-container-swiper.md#示例9演示导航点space与bottom)。 说明：[数字导航点](arkts-digitindicator-c.md#DigitIndicator)ignoreSize属性，不生效的场景如下： • 当[vertical](arkts-swiperattribute-c.md#vertical) 设  置为false，且bottom > 0。 • 当[vertical](arkts-swiperattribute-c.md#vertical) 设置为true时： 1、bottom > 0 时。 2、  bottom设为undefined。 3、isSidebarMiddle设置为false时。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## digit

```TypeScript
static digit(): DigitIndicator
```

返回一个DigitIndicator对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DigitIndicator | 数字指示器。 |

## dot

```TypeScript
static dot(): DotIndicator
```

返回一个DotIndicator对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DotIndicator | 圆点指示器。 |

## end

```TypeScript
end(value: LengthMetrics): T
```

在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 设置在RTL模式下为导航点距离Swiper组件左边的距离，在LTR模式下为导航点距离Swiper组件右边的距离。 默认值：0 单位：vp 取  值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## left

```TypeScript
left(value: Length): T
```

导航点左侧相对于Swiper的位置。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置导航点左侧相对于Swiper的位置。 未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐。 设置  为0时：按照0位置布局计算。 优先级：高于right属性。 取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## right

```TypeScript
right(value: Length): T
```

导航点右侧相对于Swiper的位置。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置导航点右侧相对于Swiper的位置。 未设置left和right时，进行自适应大小布局，按照指示器本身大小和Swiper的大小在主轴方向上进行居中对齐。 设置  为0时：按照0位置布局计算。 优先级：低于left属性。 取值范围：[0,Swiper宽度-导航点区域宽度]，超出该范围 时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## start

```TypeScript
start(value: LengthMetrics): T
```

在[RTL]LayoutDirection模式下为导航点距离Swiper组件右边的距离，在[LTR]LayoutDirection模式下为导航点距离Swiper组件左边的距离。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 设置在RTL模式下为导航点距离Swiper组件右边的距离，在LTR模式下为导航点距离Swiper组件左边的距离。 默认值：0 单位：vp 取  值范围：[0, Swiper宽度-导航点区域宽度]，超出该范围时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

## top

```TypeScript
top(value: Length): T
```

导航点顶部相对于Swiper的位置。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 设置导航点顶部相对于Swiper的位置。 未设置top和bottom时，进行自适应大小布局，按照指示器本身大小和Swiper的大小，在交叉轴方向上，位于底部，效果与设置  bottom=0一致。 设置为0时：按照0位置布局计算。 优先级：高于bottom属性。 取值范围：[0,Swiper高度-导航点区域高度]，超出该范围时，取最近的边界值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前导航点指示器。 |

