# PatternLockAttribute

除支持[通用属性]common外，还支持以下属性。 除支持[通用事件]common外，还支持以下事件。

**Inheritance:** PatternLockAttributeextends: CommonMethod<PatternLockAttribute>.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## activateCircleStyle

```TypeScript
activateCircleStyle(options: Optional<CircleStyleOptions>)
```

设置宫格圆点在“激活”状态下的背景圆环样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;CircleStyleOptions> | Yes | 宫格圆点在“激活”状态的背景圆环样式。 |

## activeColor

```TypeScript
activeColor(value: ResourceColor)
```

设置宫格圆点在“激活”状态的填充颜色，“激活”状态为手指经过圆点但还未选中的状态。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 宫格圆点在“激活”状态的填充颜色。 默认值：'#ff182431' |

## autoReset

```TypeScript
autoReset(value: boolean)
```

设置在完成密码输入后再次在组件区域按下时是否重置组件状态。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 在完成密码输入后再次在组件区域按下时是否重置组件状态。 true：完成密码输入后再次在组件区域按下时重置组件状态（即清除之前输入的密码）；false：完成密码输入后再次  在组件区域按下时不重置组件状态。 默认值：true |

## backgroundColor

```TypeScript
backgroundColor(value: ResourceColor)
```

设置背景颜色。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 背景颜色。 |

## circleRadius

```TypeScript
circleRadius(value: Length)
```

设置宫格中圆点的半径。设置为0或负数时，取默认值。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 宫格中圆点的半径。 默认值：6vp 取值范围：(0, sideLength/11]。设置小于等于0的值时，按默认值处理；超过最大值时，按最大值处理。 |

## onDotConnect

```TypeScript
onDotConnect(callback: import('../api/@ohos.base').Callback<number>)
```

密码输入选中宫格圆点时触发该回调。 回调参数为选中宫格圆点顺序的数字，数字为选中宫格圆点的索引值（第一行圆点从左往右依次为0、1、2，第二行圆点从左往右依次为3、4、5，第三行圆点从左往右依次为6、7、8）。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;number> | Yes | 密码输入选中宫格圆点时触发该回调。 |

## onPatternComplete

```TypeScript
onPatternComplete(callback: (input: Array<number>) => void)
```

密码输入结束时触发该回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (input: Array&lt;number>) => void | Yes | 与选中宫格圆点顺序一致的数字数组，每个数字表示选中宫格圆点的索引值（第一行圆点从左往右依次为0、1、2，第二行圆点从左往右依次为3、4、5，第三行圆点从左往右依次为6、  7、8）。 |

## pathColor

```TypeScript
pathColor(value: ResourceColor)
```

设置连线的颜色。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 连线的颜色。 默认值：'#33182431' |

## pathStrokeWidth

```TypeScript
pathStrokeWidth(value: number | string)
```

设置连线的宽度。设置为0或负数时连线不显示。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | 连线的宽度。 默认值：12vp 取值范围：(0, sideLength/3]，设置为0或负数时连线不显示，超过最大值按最大值处理。 |

## regularColor

```TypeScript
regularColor(value: ResourceColor)
```

设置宫格圆点在“未选中”状态的填充颜色。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 宫格圆点在“未选中”状态的填充颜色。 默认值：'#ff182431' |

## selectedColor

```TypeScript
selectedColor(value: ResourceColor)
```

设置宫格圆点在“选中”状态的填充颜色。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 宫格圆点在“选中”状态的填充颜色。 默认值：'#ff182431' |

## sideLength

```TypeScript
sideLength(value: Length)
```

设置组件的宽度和高度（宽高相同）。当设置为0或负数时，组件不显示。 > **说明：** > > PatternLock组件设置了通用属性宽高比[aspectRatio]CommonMethod#aspectRatio，且不等于1时（组件尺寸被设定为长方形），九宫格依然绘制为正方形（超出组件范围）。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 组件的宽度和高度。默认值：288vp |

## skipUnselectedPoint

```TypeScript
skipUnselectedPoint(skipped: boolean)
```

设置未选中的宫格圆点在密码路径经过时是否自动选中。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skipped | boolean | Yes | 未选中的宫格圆点在密码路径经过时是否自动选中。 true：跳过选中密码路径经过的宫格圆点；false：自动选中密码路径经过的宫格圆点。默认值：false。 |

