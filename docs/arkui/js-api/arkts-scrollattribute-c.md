# ScrollAttribute

定义Scroll组件的属性函数。

**Inheritance:** ScrollAttributeextends: ScrollableCommonMethod<ScrollAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## edgeEffect

```TypeScript
edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions)
```

设置边缘滑动效果。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | EdgeEffect | Yes | Scroll组件的边缘滑动效果，支持弹簧效果和阴影效果。  默认值：EdgeEffect.None |
| options | EdgeEffectOptions | No | 组件内容大小小于组件自身时，是否开启滑动效果。  设置为{ alwaysEnabled: true }会开启滑动效果，{ alwaysEnabled: false }不开启。  默认值：{ alwaysEnabled: true } [since 11] |

## enableBouncesZoom

```TypeScript
enableBouncesZoom(enable: boolean)
```

启用过缩放回弹效果。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 启用过缩放回弹效果。设置为true表示启用该效果，设置为false表示禁用该效果。  默认值：true。 |

## enablePaging

```TypeScript
enablePaging(value: boolean)
```

设置是否支持划动翻页。如果同时设置了划动翻页enablePaging和限位滚动scrollSnap， 则scrollSnap优先生效，enablePaging不生效。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否支持划动翻页。设置为true支持滑动翻页，false不支持。  默认值：false |

## enableScrollInteraction

```TypeScript
enableScrollInteraction(value: boolean)
```

设置是否支持滚动手势。设置为false时不支持手指或鼠标滚动，但不影响控制器的滚动接口。 组件无法通过鼠标按下拖动操作进行滚动。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否支持滚动手势。设置为true时可以通过手指或者鼠标滚动，设置为false时无法通过手指或者鼠标滚动，但不影响控制器的滚动接口。 默认值：true |

## friction

```TypeScript
friction(value: number | Resource)
```

设置摩擦系数，手动划动滚动区域时生效，仅影响惯性滚动过程，对惯性滚动过程中的链式效果有间接影响。 设置为小于等于0的值时，按默认值处理。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | 摩擦系数。  默认值：非可穿戴设备为0.6，可穿戴设备为0.9  从API version 11开始，非可穿戴设备默认值为0.7。  从API version 12开始，非可穿戴设备默认值为0.75。 |

## initialOffset

```TypeScript
initialOffset(value: OffsetOptions)
```

设置初始滚动偏移量。只在首次布局时生效，后续动态修改该属性值不生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | OffsetOptions | Yes | 初始滚动偏移量。当输入的大小为百分比时，  初始滚动偏移量为Scroll组件主轴方向大小与百分比数值之积。 |

## maxZoomScale

```TypeScript
maxZoomScale(scale: number)
```

设置Scroll组件内容的最大手势缩放比例。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | Scroll组件内容的最大手势缩放比例。  默认值：1。  取值范围：(0, +∞)，小于或等于0时按默认值1处理。 |

## minZoomScale

```TypeScript
minZoomScale(scale: number)
```

设置Scroll组件内容的最小手势缩放比例。 当maxZoomScale和minZoomScale不同时为1时，Scroll组件会启用缩放手势。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | Scroll组件内容的最小手势缩放比例。  默认值：1。  取值范围：(0, maxZoomScale]。大于maxZoomScale时按maxZoomScale处理。 |

## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions)
```

设置前后两个方向的嵌套滚动模式，实现与父组件的滚动联动。 Scroll设置enablePaging或者scrollSnap，并同时设置父组件优先的嵌套滚动时，嵌套滚动不生效。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NestedScrollOptions | Yes | 嵌套滚动选项。  默认值：{ scrollForward: NestedScrollMode.SELF_ONLY, scrollBackward: NestedScrollMode.SELF_ONLY  } |

## onDidScroll

```TypeScript
onDidScroll(handler: ScrollOnScrollCallback)
```

滚动事件回调，Scroll滚动时触发。 <p><strong>说明</strong> <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用。 <br>3、越界回弹。 </p>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | ScrollOnScrollCallback | Yes | Scroll滚动时触发的回调。 |

## onDidZoom

```TypeScript
onDidZoom(event: ScrollOnDidZoomCallback)
```

每帧缩放完成时触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ScrollOnDidZoomCallback | Yes | 每帧缩放完成时回调。 |

## onScroll

```TypeScript
onScroll(event: (xOffset: number, yOffset: number) => void)
```

滚动事件回调，返回滚动时水平、竖直方向偏移量，单位vp。 <p><strong>说明</strong> <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用。 <br>3、越界回弹。 </p>

**Since:** 7

**Deprecated since:** 12

**Substitute:** scroll/Scroll#onWillScroll

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (xOffset: number, yOffset: number) => void | Yes | callback when scroll,  xOffset: 相对于上一帧水平方向的偏移量，Scroll中的内容向左滚动时偏移量为正，向右滚动时偏移量为负。 单位vp。  yOffset: 相对于上一帧竖直方向的偏移量，Scroll中的内容向上滚动时偏移量为正，向下滚动时偏移量为负。 单位vp。 |

## onScrollEdge

```TypeScript
onScrollEdge(event: OnScrollEdgeCallback)
```

滚动到边缘事件回调。 <p><strong>说明</strong> <br>1、滚动组件滚动到边缘时触发，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用。 <br>3、越界回弹。 </p>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | OnScrollEdgeCallback | Yes | 滚动到的边缘位置。 [since 18] |

## onScrollEnd

```TypeScript
onScrollEnd(event: () => void)
```

滚动停止事件回调。 <p><strong>说明</strong> <br>1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用后停止，带过渡动效。 </p>

**Since:** 7

**Deprecated since:** 9

**Substitute:** scroll/Scroll#onScrollStop

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes |  |

## onScrollFrameBegin

```TypeScript
onScrollFrameBegin(event: OnScrollFrameBeginCallback)
```

每帧滚动开始前触发。 <p><strong>说明</strong> <br>满足以下任一条件时触发该事件： <br>1. 用户交互（如手指滑动、键鼠操作等）触发滚动。 <br>2. Scroll惯性滚动。 <br>3. 调用fling接口触发滚动。 <br>不触发该事件的条件： <br>1. 调用除fling接口外的其他滚动控制接口。 <br>2. 越界回弹。 <br>3. 拖动滚动条。 </p>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | OnScrollFrameBeginCallback | Yes | 每帧滚动开始回调函数。 [since 18] |

## onScrollStart

```TypeScript
onScrollStart(event: VoidCallback)
```

滚动开始时触发。 <p><strong>说明</strong> <br>1、滚动组件开始滚动时触发，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用后开始，带过渡动效。 </p>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 滚动开始回调。 [since 18] |

## onScrollStop

```TypeScript
onScrollStop(event: VoidCallback)
```

滚动停止时触发。 <p><strong>说明</strong> <br>1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用后停止，带过渡动效。 </p>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 滚动停止回调。 [since 18] |

## onWillScroll

```TypeScript
onWillScroll(handler: ScrollOnWillScrollCallback)
```

滚动事件回调，Scroll滚动前触发。 <p><strong>说明</strong> <br>1、滚动组件触发滚动时触发，支持键鼠操作等其他触发滚动的输入设置。 <br>2、通过滚动控制器API接口调用。 <br>3、越界回弹。 </p>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | ScrollOnWillScrollCallback | Yes | Scroll滚动前触发的回调。 |

## onZoomStart

```TypeScript
onZoomStart(event: VoidCallback)
```

手势缩放开始触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 缩放开始回调。 |

## onZoomStop

```TypeScript
onZoomStop(event: VoidCallback)
```

手势缩放停止时触发。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 缩放停止回调。 |

## scrollable

```TypeScript
scrollable(value: ScrollDirection)
```

设置滚动方向。该值被修改后会重置滚动偏移量。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScrollDirection | Yes | 滚动方向。 默认值：ScrollDirection.Vertical |

## scrollBar

```TypeScript
scrollBar(barState: BarState)
```

设置滚动条状态。如果容器组件无法滚动，则滚动条不显示。如果容器组件的子组件大小为无穷大， 则滚动条不支持拖动和伴随滚动。从API version 10开始，当滚动组件存在圆角时，为避免滚动条被圆角截断， 滚动条会自动计算距顶部和底部的避让距离。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| barState | BarState | Yes | 滚动条状态。 默认值：BarState.Auto |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string)
```

设置滚动条的颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Color \| number \| string | Yes | 滚动条的颜色。 默认值：'\#66182431'  number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。  string为rgb或者argb格式颜色，示例：'#ffffff'。 |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string | Resource)
```

设置滚动条的颜色。与scrollBarColor相比，color参数开始支持Resource类型。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Color \| number \| string \| Resource | Yes | 滚动条的颜色。 默认值：'\#66182431'  number为HEX格式颜色，支持rgb或者argb，示例：0xffffff。  string为rgb或者argb格式颜色，示例：'#ffffff'。 |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string)
```

设置滚动条的宽度，不支持百分比设置。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | 滚动条的宽度。 默认值：4 单位：vp  设置为小于0的值时，按默认值处理。设置为0时，不显示滚动条。 |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string | Resource)
```

设置滚动条的宽度，不支持百分比设置。支持Resource资源类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 滚动条的宽度。  单位：vp  默认值：4  取值范围：[0, +∞)。设置为小于0的值时，按4vp处理。设置为0时，不显示滚动条。 |

## scrollSnap

```TypeScript
scrollSnap(value: ScrollSnapOptions)
```

设置Scroll组件的限位滚动模式。 限位动画期间onWillScroll事件上报的滚动操作来源类型为ScrollSource.FLING。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScrollSnapOptions | Yes | Scroll组件的限位滚动模式。 |

## zoomScale

```TypeScript
zoomScale(scale: number)
```

设置Scroll组件内容的缩放比例。该参数支持!!双向绑定变量。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number | Yes | 设置Scroll组件内容的缩放比例。  默认值：1。  取值范围：(0, +∞)。 |

