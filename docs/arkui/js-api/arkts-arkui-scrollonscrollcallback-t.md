# ScrollOnScrollCallback

```TypeScript
declare type ScrollOnScrollCallback = (xOffset: number, yOffset: number, scrollState: ScrollState) => void
```

Represents the callback triggered when the <em>Scroll</em> component scrolls.

<p><strong>NOTE</strong>
<br>If the <em>onScrollFrameBegin</em> event and <em>scrollBy</em> method are used to implement nested scrolling,
set the <em>edgeEffect</em> attribute of the scrollable child component to <em>None</em>. For example,
if a <em>List</em> is nested in the <em>Scroll</em> component, <em>edgeEffect</em> of the <em>List</em> must be
set to <em>EdgeEffect.None</em>.
</p>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| xOffset | number | Yes | Horizontal offset per frame during scrolling. A positive offset indicates scrolling tothe left,and a negative offset indicates scrolling to the right.<br>Unit: vp |
| yOffset | number | Yes | Vertical offset per frame during scrolling.A positive offset indicates scrolling upward, and a negative offset indicates scrolling downward.<br>Unit: vp |
| scrollState | ScrollState | Yes | Current scrolling state. |

