# Scroller

Defines a controller for scrollable container components.

<p><strong>NOTE</strong><br>1. The binding of a <em>Scroller</em> instance to a scrollable container component occurs during the component creation phase.<br>2. <em>Scroller</em> APIs can only be effectively called after the <em>Scroller</em> instance is bound to a scrollable container component.Otherwise, depending on the API called, it may have no effect or throw an exception.<br>3. For example, with aboutToAppear, this callback is executed after a new instance of a custom component is created and before its <em>build()</em> method is called.Therefore, if a scrollable component is defined within the <em>build</em> method of a custom component,the internal scrollable component has not yet been created during the <em>aboutToAppear</em> callback of that custom component, and therefore the <em>Scroller</em> APIs cannot be called effectively.</p>

**Since:** 7

<!--Device-unnamed-declare class Scroller--><!--Device-unnamed-declare class Scroller-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a <em>Scroller</em> object.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-constructor()--><!--Device-Scroller-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="contentsize"></a>
## contentSize

```TypeScript
contentSize(): SizeResult
```

Obtains the content size.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-Scroller-contentSize(): SizeResult--><!--Device-Scroller-contentSize(): SizeResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [SizeResult](arkts-arkui-sizeresult-i.md) | Total size of the scrollable component's content, including the content width and height.<br>Unit: vp |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Controller not bound to a component. |

<a id="currentoffset"></a>
## currentOffset

```TypeScript
currentOffset() : OffsetResult
```

Obtains the current scrolling offset.

<p><strong>NOTE</strong><br>1. If <em>Scroller</em> is not bound to a component, this API returns <em>undefined</em>,which is not declared in the API. You are advised to use the <em>offset</em> function.<br>2. The <em>Grid</em>, <em>List</em>, and <em>WaterFlow</em> components use a lazy loading mechanism.Before all content is fully loaded and laid out, the total content offset is estimated, and this estimation may be inaccurate. For the <em>List</em> component, the <em>childrenMainSize</em> attribute can be used to mitigate such inaccuracies. Currently, there is no solution to inaccurate estimation of the<em>Grid</em> and <em>WaterFlow</em> components.</p>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-currentOffset() : OffsetResult--><!--Device-Scroller-currentOffset() : OffsetResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [OffsetResult](arkts-arkui-offsetresult-i.md) | Returns the current scrolling offset. If the scroller not bound to a component, the return value is void. |

<a id="fling"></a>
## fling

```TypeScript
fling(velocity: number): void
```

Performs inertial scrolling based on the initial velocity passed in.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Scroller-fling(velocity: number): void--><!--Device-Scroller-fling(velocity: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| velocity | number | Yes | Initial velocity of inertial scrolling. Unit: vp/s<br><em>NOTE</em><br>If the value specified is 0, it is considered as invalid, and the scrolling for this instance will not take effect.A positive value indicates scrolling towards the top, while a negative value indicates scrolling towards the bottom. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Controller not bound to a component. |

<a id="getframenode"></a>
## getFrameNode

```TypeScript
getFrameNode(): FrameNode | undefined
```

Obtains the FrameNode corresponding to this scroller.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-Scroller-getFrameNode(): FrameNode | undefined--><!--Device-Scroller-getFrameNode(): FrameNode | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [FrameNode](../arkts-apis/arkts-arkui-framenode-c.md) | Returns the FrameNode bound to this scroller.If the scroller is not bound to a component, the return value is undefined. |

<a id="getitemindex"></a>
## getItemIndex

```TypeScript
getItemIndex(x: number, y: number): number
```

Obtains the index of a child component based on coordinates.

<p><strong>NOTE</strong><br>The returned index is <em>-1</em> for invalid coordinates.</p>

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-Scroller-getItemIndex(x: number, y: number): number--><!--Device-Scroller-getItemIndex(x: number, y: number): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X-coordinate, in vp. |
| y | number | Yes | Y-coordinate, in vp. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the item. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Controller not bound to a component. |

<a id="getitemrect"></a>
## getItemRect

```TypeScript
getItemRect(index: number): RectResult
```

Obtains the size and position of a child component relative to its container.

<p><strong>NOTE</strong><br>- The value of <em>index</em> must be the index of a child component visible in the display area.Otherwise, the value is considered invalid.<br>- The value of <em>index</em> must be the index of a child component visible in the display area. Otherwise,the value is considered invalid.</p>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Scroller-getItemRect(index: number): RectResult--><!--Device-Scroller-getItemRect(index: number): RectResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the target child component. |

**Return value:**

| Type | Description |
| --- | --- |
| [RectResult](arkts-arkui-rectresult-i.md) | Size and position of the child component relative to the component.<br>Unit: vp |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [100004](../errorcode-router.md#100004-incorrect-route-name) | Controller not bound to a component. |

<a id="isatend"></a>
## isAtEnd

```TypeScript
isAtEnd(): boolean
```

Checks whether the component has scrolled to the bottom.

<p><strong>NOTE</strong><br>This API is available for the <em>ArcList</em>, <em>Scroll</em>, <em>List</em>, <em>Grid</em>,and <em>WaterFlow</em> components.</p>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-isAtEnd(): boolean--><!--Device-Scroller-isAtEnd(): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns whether the component scrolls to the end position. |

<a id="offset"></a>
## offset

```TypeScript
offset() : OffsetResult | undefined
```

Obtains the current scrolling offset.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-Scroller-offset() : OffsetResult | undefined--><!--Device-Scroller-offset() : OffsetResult | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [OffsetResult](arkts-arkui-offsetresult-i.md) | Returns the current scrolling offset.If the scroller not bound to a component, the return value is undefined. |

<a id="scrollby"></a>
## scrollBy

```TypeScript
scrollBy(dx: Length, dy: Length)
```

Scrolls by the specified amount.

<p><strong>NOTE</strong><br>This API is available for the <em>ArcList</em>, <em>Scroll</em>, <em>List</em>, <em>Grid</em>,and <em>WaterFlow</em> components.</p>

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-scrollBy(dx: Length, dy: Length)--><!--Device-Scroller-scrollBy(dx: Length, dy: Length)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dx | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Amount to scroll by in the horizontal direction. The percentage format is not supported. |
| dy | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Amount to scroll by in the vertical direction. The percentage format is not supported. |

<a id="scrolledge"></a>
## scrollEdge

```TypeScript
scrollEdge(value: Edge, options?: ScrollEdgeOptions)
```

Scrolls to the edge of the container, regardless of the scroll axis direction.By default, the <em>Scroll</em> component comes with an animation, while the <em>Grid</em>, <em>List</em>,and <em>WaterFlow</em> components do not.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-scrollEdge(value: Edge, options?: ScrollEdgeOptions)--><!--Device-Scroller-scrollEdge(value: Edge, options?: ScrollEdgeOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Edge](../arkts-apis/arkts-arkui-edge-e.md) | Yes | Edge position to scroll to.<br><em>Atomic service API</em>: This API can be used in atomic services since API version 11. |
| options | [ScrollEdgeOptions](arkts-arkui-scrolledgeoptions-i.md) | No | Mode of scrolling to the edge position.<br><em>Atomic service API</em>: This API can be used in atomic services since API version 12.<br>**Since:** 12 |

<a id="scrollpage"></a>
## scrollPage

```TypeScript
scrollPage(value: ScrollPageOptions)
```

Scrolls to the next or previous page.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-scrollPage(value: ScrollPageOptions)--><!--Device-Scroller-scrollPage(value: ScrollPageOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ScrollPageOptions](arkts-arkui-scrollpageoptions-i.md) | Yes | Page turning mode.<br>**Since:** 14 |

<a id="scrollpage-1"></a>
## scrollPage

```TypeScript
scrollPage(value: { next: boolean; direction?: Axis })
```

Scrolls to the next or previous page.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [scrollPage](arkts-arkui-scroller-c.md#scrollpage-1)

<!--Device-Scroller-scrollPage(value: { next: boolean; direction?: Axis })--><!--Device-Scroller-scrollPage(value: { next: boolean; direction?: Axis })-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { next: boolean; direction?: Axis } | Yes | next: Whether to turn to the next page.The value <em>true</em> means to scroll to the next page, and <em>false</em> means to scroll to the previous page.direction: Scrolling direction: horizontal or vertical. |

<a id="scrollto"></a>
## scrollTo

```TypeScript
scrollTo(options: ScrollOptions)
```

Scrolls to the specified position.Anonymous Object Rectification.

<p><strong>NOTE</strong><br>If the scrolling speed of the <em>scrollTo</em> animation exceeds 200 vp/s, the components within the scrollable area will not respond to click events.</p>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-scrollTo(options: ScrollOptions)--><!--Device-Scroller-scrollTo(options: ScrollOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ScrollOptions](arkts-arkui-scrolloptions-i.md) | Yes | Parameters for scrolling to the specified position.<br>**Since:** 18 |

<a id="scrolltoindex"></a>
## scrollToIndex

```TypeScript
scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions)
```

Scrolls to a specified index, with support for setting an extra offset for the scroll.When smooth scrolling is enabled, all items encountered during the scroll are loaded and their layout is calculated. Loading a large number of items may cause performance issues. It is recommended that you first call <em>scrollToIndex</em> without animation to jump to a position near the target, then call it again with animation to smoothly scroll to the final target position.

<p><strong>NOTE</strong><br>This API only works for the <em>ArcList</em>, <em>Grid</em>, <em>List</em>, and <em>WaterFlow</em> components.<br>When refreshing the data source using <em>LazyForEach</em>, <em>ForEach</em>, or <em>Repeat</em>,ensure this API is called after the data refresh is complete.<br>Starting from API version 11, the <em>List</em> component supports <em>contentStartOffset</em>and <em>contentEndOffset</em>. Starting from API version 22, the <em>Grid</em> and <em>WaterFlow</em>components also support setting <em>contentStartOffset</em> and <em>contentEndOffset</em>.<br>- If the scrollable container has <em>contentStartOffset</em> set and <em>ScrollAlign</em> is<em>START</em>, after scrolling, the start of the specified item will align with the<em>contentStartOffset</em> of the container.<br>- If the scrollable container has <em>contentEndOffset</em> set and <em>ScrollAlign</em> is<em>END</em>, after scrolling, the end of the specified item will align with the<em>contentEndOffset</em> of the container.<br>- If the scrollable container has <em>contentStartOffset</em> or <em>contentEndOffset</em> set and <em>ScrollAlign</em> is <em>AUTO</em>: When the specified item is completely within the visible area,no adjustment is made. Otherwise, following the shortest-scroll-distance principle, the start of the item will align with the container's <em>contentStartOffset</em>, or the end will align with the container's<em>contentEndOffset</em>, ensuring the item is fully displayed.</p>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-Scroller-scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions)--><!--Device-Scroller-scrollToIndex(value: number, smooth?: boolean, align?: ScrollAlign, options?: ScrollToIndexOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Index of the item to be scrolled to in the container.<br><em>NOTE</em><br>If the value set is a negative value or greater than the maximum index of the items in the container,the value is deemed abnormal, and no scrolling will be performed. |
| smooth | boolean | No | Whether to enable the smooth animation for scrolling to the item with the specified index.The value <em>true</em> means to enable that the smooth animation, and <em>false</em> means the opposite.<br>Default value: <em>false</em><br>**Since:** 12 |
| align | [ScrollAlign](arkts-arkui-scrollalign-e.md) | No | How the list item to scroll to is aligned with the container.<br> Default value when the container is <em>List</em>: <em>ScrollAlign.START</em><br> Default value when the container is <em>Grid</em>: <em>ScrollAlign.AUTO</em><br> Default value when the container is <em>WaterFlow</em>: <em>ScrollAlign.START</em><br><em>NOTE</em><br>This parameter is only available for the <em>List</em>, <em>Grid</em>, and <em>WaterFlow</em>components.<br>**Since:** 12 |
| options | [ScrollToIndexOptions](arkts-arkui-scrolltoindexoptions-i.md) | No | Options for scrolling to a specified index,for example, an extra offset for the scroll.<br>Default value: <em>0</em>, in vp<br>**Since:** 12 |

