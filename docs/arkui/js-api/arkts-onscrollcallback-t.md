# OnScrollCallback

```TypeScript
declare type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void
```

On scroll callback using in scrollable onDidScroll.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scrollOffset | number | Yes | offset this frame did scroll. |
| scrollState | ScrollState | Yes | current scroll state. |

