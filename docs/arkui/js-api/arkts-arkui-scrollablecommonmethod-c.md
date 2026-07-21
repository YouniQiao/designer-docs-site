# ScrollableCommonMethod

CommonScrollableMethod

**Inheritance/Implementation:** ScrollableCommonMethod extends [CommonMethod<T>](CommonMethod<T>)

**Since:** 12

<!--Device-unnamed-declare class ScrollableCommonMethod<T> extends CommonMethod<T>--><!--Device-unnamed-declare class ScrollableCommonMethod<T> extends CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="autoadjustscrollbarmargin"></a>
## autoAdjustScrollBarMargin

```TypeScript
autoAdjustScrollBarMargin(enable: boolean | undefined): T
```

Set the scroll bar auto adjust the margin to avoid the padding, safeAreaPadding, and contentStartOffset/contentEndOffset of the component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ScrollableCommonMethod-autoAdjustScrollBarMargin(enable: boolean | undefined): T--><!--Device-ScrollableCommonMethod-autoAdjustScrollBarMargin(enable: boolean | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | Whether to enable automatic adjustment of scroll bar margin.<br>Default value: false. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="backtotop"></a>
## backToTop

```TypeScript
backToTop(backToTop: boolean): T
```

Sets whether to enable the back-to-top feature for a scrollable component when the status bar is touched.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-ScrollableCommonMethod-backToTop(backToTop: boolean): T--><!--Device-ScrollableCommonMethod-backToTop(backToTop: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| backToTop | boolean | Yes | Whether to enable the back-to-top feature for a scrollable component when the status bar is touched.<br>Default value: <em>false</em> |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="clipcontent"></a>
## clipContent

```TypeScript
clipContent(clip: ContentClipMode | RectShape): T
```

Sets the content clipping area for this scrollable component.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-ScrollableCommonMethod-clipContent(clip: ContentClipMode | RectShape): T--><!--Device-ScrollableCommonMethod-clipContent(clip: ContentClipMode | RectShape): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clip | [ContentClipMode](arkts-arkui-contentclipmode-e.md) \| RectShape | Yes | A value from enum ContentClipMode or a customized clip rect. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="contentendoffset"></a>
## contentEndOffset

```TypeScript
contentEndOffset(offset: number | Resource): T
```

Sets the offset from the end of the content to the boundary of the scrollable display area.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ScrollableCommonMethod-contentEndOffset(offset: number | Resource): T--><!--Device-ScrollableCommonMethod-contentEndOffset(offset: number | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number \| Resource | Yes | Offset from the end of the content to the boundary of the scrollable display area.<br>Default value: <em>0</em><br>Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="contentstartoffset"></a>
## contentStartOffset

```TypeScript
contentStartOffset(offset: number | Resource): T
```

Sets the offset from the start of the content to the boundary of the scrollable display area.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ScrollableCommonMethod-contentStartOffset(offset: number | Resource): T--><!--Device-ScrollableCommonMethod-contentStartOffset(offset: number | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number \| Resource | Yes | Offset from the start of the content to the boundary of the scrollable display area.<br>Default value: <em>0</em><br>Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="digitalcrownsensitivity"></a>
## digitalCrownSensitivity

```TypeScript
digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T
```

Set the sensitivity of rotating crown.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ScrollableCommonMethod-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T--><!--Device-ScrollableCommonMethod-digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sensitivity | [Optional](arkts-arkui-optional-t.md)&lt;CrownSensitivity&gt; | Yes | The sensitivity of rotating crown, default value is { MEDIUM }. |

**Return value:**

| Type | Description |
| --- | --- |
| T | The component instance. |

<a id="edgeeffect"></a>
## edgeEffect

```TypeScript
edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T
```

Sets the effect used when the scroll boundary is reached.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T--><!--Device-ScrollableCommonMethod-edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edgeEffect | [EdgeEffect](../arkts-apis/arkts-arkui-edgeeffect-e.md) | Yes | Effect used when the scroll boundary is reached. The spring and shadow effects are supported.<br>Default value: <em>EdgeEffect.None</em> for the <em>Grid</em>, <em>Scroll</em>, and <em>WaterFlow</em>components and <em>EdgeEffect.Spring</em> for the <em>List</em> component |
| options | [EdgeEffectOptions](arkts-arkui-edgeeffectoptions-i.md) | No | Whether to enable the scroll effect when the component content is smaller than the component itself.The value <em>{ alwaysEnabled: true }</em> means to enable the scroll effect, and <em>{ alwaysEnabled: false }</em> means the opposite.<br>Default value:<br><em>{ alwaysEnabled: false }</em> for the <em>List</em>, <em>Grid</em>, and <em>WaterFlow</em> components,and <em>{ alwaysEnabled: true }</em> for the <em>Scroll</em> component |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="enablescrollinteraction"></a>
## enableScrollInteraction

```TypeScript
enableScrollInteraction(value: boolean): T
```

Sets whether to support scroll gestures.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-enableScrollInteraction(value: boolean): T--><!--Device-ScrollableCommonMethod-enableScrollInteraction(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to support scroll gestures.<br>Default value: <em>true</em> |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="enablescrollwithmouse"></a>
## enableScrollWithMouse

```TypeScript
enableScrollWithMouse(enabled: boolean | undefined): T
```

Enable left mouse button press-and-drag scrolling.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ScrollableCommonMethod-enableScrollWithMouse(enabled: boolean | undefined): T--><!--Device-ScrollableCommonMethod-enableScrollWithMouse(enabled: boolean | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean \| undefined | Yes | Enable left mouse button press-and-drag scrolling.<br>Default value: false. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="fadingedge"></a>
## fadingEdge

```TypeScript
fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T
```

Called when setting whether to enable fading Edge effect.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-ScrollableCommonMethod-fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T--><!--Device-ScrollableCommonMethod-fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to turn on the edge fade effect |
| options | [FadingEdgeOptions](arkts-arkui-fadingedgeoptions-i.md) | No | The options of fadingEdge. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="flingspeedlimit"></a>
## flingSpeedLimit

```TypeScript
flingSpeedLimit(speedLimit: number): T
```

Sets the maximum initial velocity at the start of the fling animation that occurs after gesture-driven scrolling ends.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-flingSpeedLimit(speedLimit: number): T--><!--Device-ScrollableCommonMethod-flingSpeedLimit(speedLimit: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speedLimit | number | Yes | Maximum initial velocity at the start of the fling animation.<br>Default value: <em>9000</em><br>Unit: vp/s<br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="friction"></a>
## friction

```TypeScript
friction(value: number | Resource): T
```

Sets the friction coefficient.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-friction(value: number | Resource): T--><!--Device-ScrollableCommonMethod-friction(value: number | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | Friction coefficient. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="nestedscroll"></a>
## nestedScroll

```TypeScript
nestedScroll(value: NestedScrollOptions): T
```

Sets the nested scrolling options.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-nestedScroll(value: NestedScrollOptions): T--><!--Device-ScrollableCommonMethod-nestedScroll(value: NestedScrollOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [NestedScrollOptions](arkts-arkui-nestedscrolloptions-i.md) | Yes | options for nested scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="ondidscroll"></a>
## onDidScroll

```TypeScript
onDidScroll(handler: OnScrollCallback): T
```

Triggered when the scrollable component scrolls.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-ScrollableCommonMethod-onDidScroll(handler: OnScrollCallback): T--><!--Device-ScrollableCommonMethod-onDidScroll(handler: OnScrollCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [OnScrollCallback](arkts-arkui-onscrollcallback-t.md) | Yes | Callback triggered when the scrollable component scrolls. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="ondidstopdragging"></a>
## onDidStopDragging

```TypeScript
onDidStopDragging(handler: OnDidStopDraggingCallback): T
```

Called when the scrollable did end dragging.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**Widget capability:** This API can be used in ArkTS widgets since API version 21.

<!--Device-ScrollableCommonMethod-onDidStopDragging(handler: OnDidStopDraggingCallback): T--><!--Device-ScrollableCommonMethod-onDidStopDragging(handler: OnDidStopDraggingCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [OnDidStopDraggingCallback](arkts-arkui-ondidstopdraggingcallback-t.md) | Yes | callback of end dragging. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="ondidstopfling"></a>
## onDidStopFling

```TypeScript
onDidStopFling(handler: VoidCallback): T
```

Called when the scrollable did end fling.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**Widget capability:** This API can be used in ArkTS widgets since API version 21.

<!--Device-ScrollableCommonMethod-onDidStopFling(handler: VoidCallback): T--><!--Device-ScrollableCommonMethod-onDidStopFling(handler: VoidCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | callback of end fling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="onreachend"></a>
## onReachEnd

```TypeScript
onReachEnd(event: () => void): T
```

Triggered when the scrollable component reaches the end position.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-onReachEnd(event: () => void): T--><!--Device-ScrollableCommonMethod-onReachEnd(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function, triggered when the scrollable reaches the end position. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onreachstart"></a>
## onReachStart

```TypeScript
onReachStart(event: () => void): T
```

Triggered when the scrollable component reaches the start position.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-onReachStart(event: () => void): T--><!--Device-ScrollableCommonMethod-onReachStart(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function, triggered when the scrollable reaches the start position. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onscroll"></a>
## onScroll

```TypeScript
onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T
```

Triggered when the scrollable component scrolls.

**Since:** 11

**Deprecated since:** 12

**Substitutes:** [onDidScroll](arkts-arkui-scrollablecommonmethod-c.md#ondidscroll-1)

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T--><!--Device-ScrollableCommonMethod-onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (scrollOffset: number, scrollState: ScrollState) =&gt; void | Yes | callback of scrollable,scrollOffset is offset per frame scrolling, ScrollState is current scroll state. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onscrollstart"></a>
## onScrollStart

```TypeScript
onScrollStart(event: () => void): T
```

Triggered when the scrollable component starts scrolling initiated by the user's finger dragging the component or its scrollbar.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-onScrollStart(event: () => void): T--><!--Device-ScrollableCommonMethod-onScrollStart(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function, triggered when the scrollable starts scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onscrollstop"></a>
## onScrollStop

```TypeScript
onScrollStop(event: () => void): T
```

Triggered when scrolling stops after the user's finger leaves the screen.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-onScrollStop(event: () => void): T--><!--Device-ScrollableCommonMethod-onScrollStop(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function, triggered when the scrollable stops scrolling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onwillscroll"></a>
## onWillScroll

```TypeScript
onWillScroll(handler: Optional<OnWillScrollCallback>): T
```

Called when the scrollable will scroll.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ScrollableCommonMethod-onWillScroll(handler: Optional<OnWillScrollCallback>): T--><!--Device-ScrollableCommonMethod-onWillScroll(handler: Optional<OnWillScrollCallback>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [Optional](arkts-arkui-optional-t.md)&lt;OnWillScrollCallback&gt; | Yes | callback of scrollable. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onwillstartdragging"></a>
## onWillStartDragging

```TypeScript
onWillStartDragging(handler: VoidCallback): T
```

Called when the scrollable will start dragging.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**Widget capability:** This API can be used in ArkTS widgets since API version 21.

<!--Device-ScrollableCommonMethod-onWillStartDragging(handler: VoidCallback): T--><!--Device-ScrollableCommonMethod-onWillStartDragging(handler: VoidCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | callback of start dragging. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="onwillstartfling"></a>
## onWillStartFling

```TypeScript
onWillStartFling(handler: VoidCallback): T
```

Called when the scrollable will start fling.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**Widget capability:** This API can be used in ArkTS widgets since API version 21.

<!--Device-ScrollableCommonMethod-onWillStartFling(handler: VoidCallback): T--><!--Device-ScrollableCommonMethod-onWillStartFling(handler: VoidCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | callback of start fling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="onwillstopdragging"></a>
## onWillStopDragging

```TypeScript
onWillStopDragging(handler: OnWillStopDraggingCallback): T
```

Called when the scrollable will end dragging.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-ScrollableCommonMethod-onWillStopDragging(handler: OnWillStopDraggingCallback): T--><!--Device-ScrollableCommonMethod-onWillStopDragging(handler: OnWillStopDraggingCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [OnWillStopDraggingCallback](arkts-arkui-onwillstopdraggingcallback-t.md) | Yes | callback of end dragging. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="scrollbar"></a>
## scrollBar

```TypeScript
scrollBar(barState: BarState): T
```

Sets the scrollbar state.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-scrollBar(barState: BarState): T--><!--Device-ScrollableCommonMethod-scrollBar(barState: BarState): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| barState | [BarState](../arkts-apis/arkts-arkui-barstate-e.md) | Yes | Scrollbar state.<br>Default value: <em>BarState.Auto</em> for the <em>List</em>, <em   >Grid</em>,and <em>Scroll</em> components and <em>BarState.Off</em> for the <em>WaterFlow</em> component |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarcolor"></a>
## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string): T
```

Sets the scrollbar color.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-scrollBarColor(color: Color | number | string): T--><!--Device-ScrollableCommonMethod-scrollBarColor(color: Color | number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) \| number \| string | Yes | Scrollbar color.<br>Default value: <em>'\#182431'</em> (40% opacity)<br>A number value indicates a HEX color in RGB or ARGB format,for example, <em>0xffffff</em>. A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarcolor-1"></a>
## scrollBarColor

```TypeScript
scrollBarColor(color: Color | number | string | Resource): T
```

Sets the scrollbar color.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ScrollableCommonMethod-scrollBarColor(color: Color | number | string | Resource): T--><!--Device-ScrollableCommonMethod-scrollBarColor(color: Color | number | string | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) \| number \| string \| Resource | Yes | Scrollbar color.<br>Default value: <em>'\#182431'</em> (40%opacity)<br>A number value indicates a HEX color in RGB or ARGB format, for example, <em>0xffffff</em>.A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarheight"></a>
## scrollBarHeight

```TypeScript
scrollBarHeight(height: LengthMetrics | undefined): T
```

Sets the scrollbar track height.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ScrollableCommonMethod-scrollBarHeight(height: LengthMetrics | undefined): T--><!--Device-ScrollableCommonMethod-scrollBarHeight(height: LengthMetrics | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | Scrollbar track height.<br>The value must be greater than or equal to 0, If set to undefined or a value less than 0, the default value is used. If set to 0, the scrollbar is not displayed.<br> Default value: adaptive to the height of the scrollable component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarmargin"></a>
## scrollBarMargin

```TypeScript
scrollBarMargin(margin: ScrollBarMargin): T
```

Margin of the scrollbar.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ScrollableCommonMethod-scrollBarMargin(margin: ScrollBarMargin): T--><!--Device-ScrollableCommonMethod-scrollBarMargin(margin: ScrollBarMargin): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| margin | [ScrollBarMargin](../arkts-apis/arkts-arkui-scrollbarmargin-i.md) | Yes | Margin of the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarwidth"></a>
## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string): T
```

Sets the scrollbar width.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScrollableCommonMethod-scrollBarWidth(value: number | string): T--><!--Device-ScrollableCommonMethod-scrollBarWidth(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Scrollbar width.<br>Default value: <em>4</em><br>Unit: vp<br>If this parameter is set to a value less than or equal to 0, the default value is used.The value <em>0</em> means not to show the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="scrollbarwidth-1"></a>
## scrollBarWidth

```TypeScript
scrollBarWidth(value: number | string | Resource): T
```

Sets the scrollbar width.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ScrollableCommonMethod-scrollBarWidth(value: number | string | Resource): T--><!--Device-ScrollableCommonMethod-scrollBarWidth(value: number | string | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Scrollbar width.<br>Unit: vp<br>Default value: <em>4</em><br>If this parameter is set to a value less than 0, the default value is used.The value <em>0</em> means not to show the scrollbar. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

