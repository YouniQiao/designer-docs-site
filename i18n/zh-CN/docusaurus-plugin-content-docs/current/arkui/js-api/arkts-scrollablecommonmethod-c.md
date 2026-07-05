# ScrollableCommonMethod

CommonScrollableMethod

**继承实现关系：** ScrollableCommonMethod继承自：CommonMethod<T>。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## autoAdjustScrollBarMargin

```TypeScript
autoAdjustScrollBarMargin(enable: boolean | undefined): T
```

设置滚动条自动调整margin以避让组件的padding、safeAreaPadding、contentStartOffset/contentEndOffset。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean \| undefined | 是 | 是否启用自动调整滚动条边距。  默认值：false。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## backToTop

```TypeScript
backToTop(backToTop: boolean): T
```

Controls whether the scrollable scrolls back to top when status bar is clicked.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| backToTop | boolean | 是 | whether the scrollable scrolls back to top when status bar is clicked.  The default value is false. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## clipContent

```TypeScript
clipContent(clip: ContentClipMode | RectShape): T
```

Clip the content of the scrollable container, excluding background.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clip | ContentClipMode \| RectShape | 是 | A value from enum ContentClipMode or a customized clip rect. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## contentEndOffset

```TypeScript
contentEndOffset(offset: number | Resource): T
```

设置从内容结尾到可滚动显示区域边界的偏移量。

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | number \| Resource | 是 | 从内容末尾到可滚动显示区域边界的偏移量。  默认值：0  单位：vp |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## contentStartOffset

```TypeScript
contentStartOffset(offset: number | Resource): T
```

Sets the offset from the start of the content to the boundary of the scrollable display area.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | number \| Resource | 是 | Offset from the start of the content to the boundary of  the scrollable display area.  Default value: 0  Unit: vp |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T
```

Set the sensitivity of rotating crown.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sensitivity | Optional&lt;CrownSensitivity> | 是 | The sensitivity of rotating crown, default value is { MEDIUM }. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T | The component instance. |

## edgeEffect

```TypeScript
edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T
```

Edge scrolling effect.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| edgeEffect | EdgeEffect | 是 | edge scrolling effect. |
| options | EdgeEffectOptions | 否 | edge scrolling effect options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## enableScrollInteraction

```TypeScript
enableScrollInteraction(value: boolean): T
```

Whether to support scroll gestures by finger or mouse.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | Whether to support scroll gestures by finger or mouse. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## enableScrollWithMouse

```TypeScript
enableScrollWithMouse(enabled: boolean | undefined): T
```

启用鼠标左键按住并拖动滚动。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean \| undefined | 是 | 启用鼠标左键按住并拖动滚动。  默认值：false。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## fadingEdge

```TypeScript
fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T
```

Called when setting whether to enable fading Edge effect.

**起始版本：** 14

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | 是 | Whether to turn on the edge fade effect |
| options | FadingEdgeOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## flingSpeedLimit

```TypeScript
flingSpeedLimit(speedLimit: number): T
```

Limit the max speed when fling.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| speedLimit | number | 是 | Max fling speed, the minimum value is 0, the maximum value is not limited.  The unit is vp/s. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## friction

```TypeScript
friction(value: number | Resource): T
```

friction coefficient.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| Resource | 是 | friction coefficient. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions): T
```

Nested scrolling options.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | NestedScrollOptions | 是 | options for nested scrolling. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onDidScroll

```TypeScript
onDidScroll(handler: OnScrollCallback): T
```

Triggered when the scrollable component scrolls.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | OnScrollCallback | 是 | Callback triggered when the scrollable component scrolls. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onDidStopDragging

```TypeScript
onDidStopDragging(handler: OnDidStopDraggingCallback): T
```

Called when the scrollable did end dragging.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | OnDidStopDraggingCallback | 是 | callback of end dragging. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onDidStopFling

```TypeScript
onDidStopFling(handler: VoidCallback): T
```

Called when the scrollable did end fling.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | VoidCallback | 是 | callback of end fling. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onReachEnd

```TypeScript
onReachEnd(event: () => void): T
```

Called when the scrollable reaches the end position.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 | Callback function, triggered when the scrollable reaches the end position. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onReachStart

```TypeScript
onReachStart(event: () => void): T
```

Called when the scrollable reaches the start position.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 | Callback function, triggered when the scrollable reaches the start position. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onScroll

```TypeScript
onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T
```

Triggered when the scrollable component scrolls.

**起始版本：** 11

**废弃版本：** 12

**替代接口：** ScrollableCommonMethod#onDidScroll

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (scrollOffset: number, scrollState: ScrollState) => void | 是 | callback of scrollable,  scrollOffset is offset per frame scrolling, ScrollState is current scroll state. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onScrollStart

```TypeScript
onScrollStart(event: () => void): T
```

Called when the scrollable starts scrolling.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 | Callback function, triggered when the scrollable starts scrolling. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onScrollStop

```TypeScript
onScrollStop(event: () => void): T
```

Called when the scrollable stops scrolling.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | () => void | 是 | Callback function, triggered when the scrollable stops scrolling. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onWillScroll

```TypeScript
onWillScroll(handler: Optional<OnWillScrollCallback>): T
```

Called when the scrollable will scroll.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | Optional&lt;OnWillScrollCallback> | 是 | callback of scrollable. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onWillStartDragging

```TypeScript
onWillStartDragging(handler: VoidCallback): T
```

Called when the scrollable will start dragging.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | VoidCallback | 是 | callback of start dragging. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onWillStartFling

```TypeScript
onWillStartFling(handler: VoidCallback): T
```

Called when the scrollable will start fling.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | VoidCallback | 是 | callback of start fling. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onWillStopDragging

```TypeScript
onWillStopDragging(handler: OnWillStopDraggingCallback): T
```

Called when the scrollable will end dragging.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | OnWillStopDraggingCallback | 是 | callback of end dragging, |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBar

```TypeScript
scrollBar(barState: BarState): T
```

Scrollbar status.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| barState | BarState | 是 | Scrollbar status. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string): T
```

Color of the scrollbar.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Color \| number \| string | 是 | Color of the scrollbar. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string | Resource): T
```

Sets the scrollbar color.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Color \| number \| string \| Resource | 是 | Scrollbar color.  Default value: '\#182431' (40% opacity)  A number value indicates a HEX color in RGB or ARGB format, for example, 0xffffff.  A string value indicates a color in RGB or ARGB format, for example, '#ffffff'. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarHeight

```TypeScript
scrollBarHeight(height: LengthMetrics | undefined): T
```

设置滚动条滑轨高度。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| height | LengthMetrics \| undefined | 是 | 滚动条滑轨高度  取值应≥0，如果设置为undefined或小于0的值，则使用默认值.  如果设置为0，则不显示滚动条。 默认值： 适应可滚动组件的高度。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarMargin

```TypeScript
scrollBarMargin(margin: ScrollBarMargin): T
```

Margin of the scrollbar.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| margin | ScrollBarMargin | 是 | Margin of the scrollbar. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string): T
```

Width of the scrollbar.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 | Width of the scrollbar. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string | Resource): T
```

设置滚动条宽度。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 | 滚动条宽度。   单位：vp  默认值：4  如果设置为小于0的值，则使用默认值。  值0表示不显示滚动条。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

