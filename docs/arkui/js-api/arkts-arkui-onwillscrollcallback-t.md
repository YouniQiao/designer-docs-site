# OnWillScrollCallback

```TypeScript
declare type OnWillScrollCallback =
(scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult
```

Called before scroll to allow developer to control real offset the Scrollable can scroll.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scrollOffset | number | Yes | offset this frame will scroll, which may or may not be reached. |
| scrollState | ScrollState | Yes | current scroll state. |
| scrollSource | ScrollSource | Yes | source of current scroll. |

**Return value:**

| Type | Description |
| --- | --- |
| void \| ScrollResult | the remain offset for the scrollable,same as scrollOffset when no ScrollResult is returned. |

