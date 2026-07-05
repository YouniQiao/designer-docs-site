# ScrollOnWillScrollCallback

```TypeScript
declare type ScrollOnWillScrollCallback =
 (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | OffsetResult
```

Scroll滚动前触发的回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| (xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void |  |
| OffsetResult |  |

