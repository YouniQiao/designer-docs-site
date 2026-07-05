# Scroller

可滚动容器组件的控制器，可以将此组件绑定至容器组件，然后通过它控制容器组件的滚动。同一个控制器不可以控制多个容器组件，目前支持绑定到ArcList、ArcScrollBar、List、Scroll、ScrollBar、Grid、WaterFlow上。 <p><strong>说明</strong> <br>1、Scroller控制器与滚动容器组件的绑定发生在组件创建阶段。 <br>2、Scroller控制器与滚动容器组件绑定后才可以正常调用Scroller方法，否则根据调用接口不同会不生效或者抛异常。 <br>3、以aboutToAppear为例，aboutToAppear在创建自定义组件的新实例后，在执行其build()方法之前执行。因此如果滚动组件在自定义组件build内，在该自定义组件aboutToAppear执行时，内部滚动组件还没有创建，是不能正常调用上述Scroller方法的。 <br>4、以onAppear为例，组件挂载显示后触发此回调。因此在滚动组件的onAppear回调执行时，滚动组件已经创建并已经和Scroller绑定成功，是可以正常调用Scroller方法的。 </p>

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

Scroller的构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentSize

```TypeScript
contentSize(): SizeResult
```

获取内容大小。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| SizeResult | 滚动组件内容总大小，包括内容宽度和高度。 单位：vp |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100004 | Controller not bound to a component. |

## currentOffset

```TypeScript
currentOffset() : OffsetResult
```

获取当前滚动偏移量。 <p><strong>说明</strong> <br>1. 当Scroller没有和组件绑定时，该接口会返回undefined，但是接口中没有声明， 推荐使用offset函数。 <br>2. Grid、List、WaterFlow组件有懒加载机制，组件内容没有加载并布局完成时， 内容总偏移量通过估算得到，估算结果可能会有误差。其中List组件可以通过childrenMainSize 属性解决估算不准确的问题，Grid与WaterFlow估算不准暂无解决方案。 </p>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| OffsetResult | 返回当前的滚动总偏移量。当Scroller没有和组件绑定时，返回值为undefined。 [since 11] |

## fling

```TypeScript
fling(velocity: number): void
```

滚动类组件根据传入的初始速度进行惯性滚动。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | 初始速度，单位vp/s。  说明  设置为0时按异常值处理，不生效。正值表示向上方滚动，负值表示向下方滚动。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## getFrameNode

```TypeScript
getFrameNode(): FrameNode | undefined
```

获取此控制器对应的FrameNode。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| FrameNode | Returns the FrameNode bound to this scroller.  If the scroller is not bound to a component, the return value is undefined. |

## getItemIndex

```TypeScript
getItemIndex(x: number, y: number): number
```

根据坐标获取子组件的索引。 <p><strong>说明</strong> <br>坐标无效时返回<em>-1</em>。 </p>

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | x轴坐标，单位为vp。 |
| y | number | Yes | y轴坐标，单位为vp。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回子组件的索引。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## getItemRect

```TypeScript
getItemRect(index: number): RectResult
```

获取子组件相对于父组件的大小和位置。 <p><strong>说明</strong> <br>index必须是显示区域内可见的子组件的索引，否则视为无效值。 <br>非法值返回的大小和位置均为0。 </p>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 子组件的索引值。 |

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | 子组件的大小和相对于组件的位置。 单位：vp。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100004 | Controller not bound to a component. |

## isAtEnd

```TypeScript
isAtEnd(): boolean
```

检查是否已滚动到底部。 <p><strong>说明</strong> <br>该接口支持ArcList、Scroll、List、Grid和WaterFlow组件。 </p>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回是否已滚动到底部。true表示已经滚动到底部，false表示还没滚动到底部。 |

## offset

```TypeScript
offset() : OffsetResult | undefined
```

获取当前滚动偏移量。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| OffsetResult | Returns the current scrolling offset.  If the scroller not bound to a component, the return value is undefined. |

## scrollBy

```TypeScript
scrollBy(dx: Length, dy: Length)
```

滚动指定距离。 <p><strong>说明</strong> <br>该接口支持ArcList、Scroll、List、Grid和WaterFlow组件。 </p>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | Length | Yes | 水平方向滚动距离，不支持百分比形式。 |
| dy | Length | Yes | 竖直方向滚动距离，不支持百分比形式。 |

## scrollEdge

```TypeScript
scrollEdge(value: Edge, options?: ScrollEdgeOptions)
```

滚动到容器边缘，不区分滚动轴方向，Edge.Top和Edge.Start表现相同，Edge.Bottom和Edge.End表现相同。 Scroll组件默认有动画，Grid、List、WaterFlow组件默认无动画。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Edge | Yes | 滚动到的边缘位置。  原子化服务API：该API可在原子化服务中使用，从API version 11开始。 |
| options | ScrollEdgeOptions | No |  |

## scrollPage

```TypeScript
scrollPage(value: ScrollPageOptions)
```

滚动到下一页或上一页。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ScrollPageOptions | Yes | 翻页模式。 [since 14] |

## scrollPage

```TypeScript
scrollPage(value: { next: boolean; direction?: Axis })
```

滚动到下一页或上一页。

**Since:** 7

**Deprecated since:** 9

**Substitute:** Scroller#scrollPage

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { next: boolean; direction?: Axis } | Yes | next: Whether to turn to the next page.  The value true means to scroll to the next page, and false means to scroll to the previous  page.  direction: Scrolling direction: horizontal or vertical. |

## scrollTo

```TypeScript
scrollTo(options: ScrollOptions)
```

滑动到指定位置。 <p><strong>说明</strong> <br>scrollTo动画速度大于200vp/s时，滚动组件区域内的组件不响应点击事件。 </p>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScrollOptions | Yes | 滑动到指定位置的参数。 [since 18] |

## scrollToIndex

```TypeScript
scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions)
```

滑动到指定索引位置，支持设置额外偏移量。 开启smooth动效时，会对经过的所有item进行加载和布局计算，当大量加载item时会导致性能问题， 建议先调用scrollToIndex不带动画跳转到目标附近位置，再调用scrollToIndex带动画滚动到目标位置。 <p><strong>说明</strong> <br>该接口仅对ArcList、Grid、List和WaterFlow组件生效。 <br>在LazyForEach、ForEach、Repeat刷新数据源时，需确保在数据刷新完成之后再调用此接口。 <br>从API version 11开始，在List中支持contentStartOffset和contentEndOffset。 从API version 22开始，在Grid和Waterflow组件中支持设置contentStartOffset和contentEndOffset。 <br>- 当滚动容器组件设置contentStartOffset时，如果ScrollAlign设置为START，滚动结束时， 指定item首部会与滚动容器组件contentStartOffset处对齐。 <br>- 当滚动容器组件设置contentEndOffset时，如果ScrollAlign设置为END，滚动结束时， 指定item尾部会与滚动容器组件contentEndOffset处对齐。 <br>- 当滚动容器组件设置contentStartOffset或contentEndOffset时，如果ScrollAlign设置为AUTO， 且指定item完全处于显示区内，不做调整；否则依照滚动距离最短的原则，将指定item首部与滚动组件 contentStartOffset处对齐，或指定item尾部与滚动组件contentEndOffset处对齐，使指定item完全显示。 </p>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 要滑动到的目标元素在当前容器中的索引值。  说明  value值设置成负值或者大于当前容器子组件的最大索引值，视为异常值，本次跳转不生效。 |
| smooth | boolean | No | 设置滑动到列表项在列表中的索引值时是否有动效，true表示有动效，false表示没有动效。 [since 7 - 11] |
| align | ScrollAlign | No | 指定滑动到的元素与当前容器的对齐方式。 [since 7 - 11] |
| options | ScrollToIndexOptions | No |  |

