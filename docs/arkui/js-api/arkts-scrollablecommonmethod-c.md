# ScrollableCommonMethod

CommonScrollableMethod

**Inheritance:** ScrollableCommonMethodextends: CommonMethod<T>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoAdjustScrollBarMargin

```TypeScript
autoAdjustScrollBarMargin(enable: boolean | undefined): T
```

设置滚动条自动调整margin以避让组件的padding、safeAreaPadding、contentStartOffset/contentEndOffset。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | 是否启用自动调整滚动条边距。  默认值：false。 |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## backToTop

```TypeScript
backToTop(backToTop: boolean): T
```

Controls whether the scrollable scrolls back to top when status bar is clicked.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backToTop | boolean | Yes | whether the scrollable scrolls back to top when status bar is clicked.  The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## clipContent

```TypeScript
clipContent(clip: ContentClipMode | RectShape): T
```

Clip the content of the scrollable container, excluding background.

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clip | ContentClipMode \| RectShape | Yes | A value from enum ContentClipMode or a customized clip rect. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## contentEndOffset

```TypeScript
contentEndOffset(offset: number | Resource): T
```

设置从内容结尾到可滚动显示区域边界的偏移量。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number \| Resource | Yes | 从内容末尾到可滚动显示区域边界的偏移量。  默认值：0  单位：vp |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## contentStartOffset

```TypeScript
contentStartOffset(offset: number | Resource): T
```

Sets the offset from the start of the content to the boundary of the scrollable display area.

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number \| Resource | Yes | Offset from the start of the content to the boundary of  the scrollable display area.  Default value: 0  Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T
```

Set the sensitivity of rotating crown.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | Yes | The sensitivity of rotating crown, default value is { MEDIUM }. |

**Return value:**

| Type | Description |
| --- | --- |
| T | The component instance. |

## edgeEffect

```TypeScript
edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T
```

Edge scrolling effect.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | EdgeEffect | Yes | edge scrolling effect. |
| options | EdgeEffectOptions | No | edge scrolling effect options. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## enableScrollInteraction

```TypeScript
enableScrollInteraction(value: boolean): T
```

Whether to support scroll gestures by finger or mouse.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to support scroll gestures by finger or mouse. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## enableScrollWithMouse

```TypeScript
enableScrollWithMouse(enabled: boolean | undefined): T
```

启用鼠标左键按住并拖动滚动。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean \| undefined | Yes | 启用鼠标左键按住并拖动滚动。  默认值：false。 |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## fadingEdge

```TypeScript
fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T
```

Called when setting whether to enable fading Edge effect.

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | Whether to turn on the edge fade effect |
| options | FadingEdgeOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## flingSpeedLimit

```TypeScript
flingSpeedLimit(speedLimit: number): T
```

Limit the max speed when fling.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speedLimit | number | Yes | Max fling speed, the minimum value is 0, the maximum value is not limited.  The unit is vp/s. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## friction

```TypeScript
friction(value: number | Resource): T
```

friction coefficient.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | friction coefficient. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions): T
```

Nested scrolling options.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | NestedScrollOptions | Yes | options for nested scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onDidScroll

```TypeScript
onDidScroll(handler: OnScrollCallback): T
```

Triggered when the scrollable component scrolls.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnScrollCallback | Yes | Callback triggered when the scrollable component scrolls. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onDidStopDragging

```TypeScript
onDidStopDragging(handler: OnDidStopDraggingCallback): T
```

Called when the scrollable did end dragging.

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnDidStopDraggingCallback | Yes | callback of end dragging. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onDidStopFling

```TypeScript
onDidStopFling(handler: VoidCallback): T
```

Called when the scrollable did end fling.

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | VoidCallback | Yes | callback of end fling. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onReachEnd

```TypeScript
onReachEnd(event: () => void): T
```

Called when the scrollable reaches the end position.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback function, triggered when the scrollable reaches the end position. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onReachStart

```TypeScript
onReachStart(event: () => void): T
```

Called when the scrollable reaches the start position.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback function, triggered when the scrollable reaches the start position. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onScroll

```TypeScript
onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T
```

Triggered when the scrollable component scrolls.

**Since:** 11

**Deprecated since:** 12

**Substitute:** ScrollableCommonMethod#onDidScroll

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (scrollOffset: number, scrollState: ScrollState) => void | Yes | callback of scrollable,  scrollOffset is offset per frame scrolling, ScrollState is current scroll state. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onScrollStart

```TypeScript
onScrollStart(event: () => void): T
```

Called when the scrollable starts scrolling.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback function, triggered when the scrollable starts scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onScrollStop

```TypeScript
onScrollStop(event: () => void): T
```

Called when the scrollable stops scrolling.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () => void | Yes | Callback function, triggered when the scrollable stops scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onWillScroll

```TypeScript
onWillScroll(handler: Optional<OnWillScrollCallback>): T
```

Called when the scrollable will scroll.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;OnWillScrollCallback> | Yes | callback of scrollable. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onWillStartDragging

```TypeScript
onWillStartDragging(handler: VoidCallback): T
```

Called when the scrollable will start dragging.

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | VoidCallback | Yes | callback of start dragging. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onWillStartFling

```TypeScript
onWillStartFling(handler: VoidCallback): T
```

Called when the scrollable will start fling.

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | VoidCallback | Yes | callback of start fling. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onWillStopDragging

```TypeScript
onWillStopDragging(handler: OnWillStopDraggingCallback): T
```

Called when the scrollable will end dragging.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnWillStopDraggingCallback | Yes | callback of end dragging, |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBar

```TypeScript
scrollBar(barState: BarState): T
```

Scrollbar status.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| barState | BarState | Yes | Scrollbar status. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string): T
```

Color of the scrollbar.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Color \| number \| string | Yes | Color of the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string | Resource): T
```

Sets the scrollbar color.

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Color \| number \| string \| Resource | Yes | Scrollbar color.  Default value: '\#182431' (40% opacity)  A number value indicates a HEX color in RGB or ARGB format, for example, 0xffffff.  A string value indicates a color in RGB or ARGB format, for example, '#ffffff'. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarHeight

```TypeScript
scrollBarHeight(height: LengthMetrics | undefined): T
```

设置滚动条滑轨高度。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | LengthMetrics \| undefined | Yes | 滚动条滑轨高度  取值应≥0，如果设置为undefined或小于0的值，则使用默认值.  如果设置为0，则不显示滚动条。 默认值： 适应可滚动组件的高度。 |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarMargin

```TypeScript
scrollBarMargin(margin: ScrollBarMargin): T
```

Margin of the scrollbar.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| margin | ScrollBarMargin | Yes | Margin of the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string): T
```

Width of the scrollbar.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Width of the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string | Resource): T
```

设置滚动条宽度。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 滚动条宽度。   单位：vp  默认值：4  如果设置为小于0的值，则使用默认值。  值0表示不显示滚动条。 |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

