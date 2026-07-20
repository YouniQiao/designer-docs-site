# OnHoverStatusChangeHandler

```TypeScript
export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void
```

Implements a handler for the **onHoverStatusChange** event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void--><!--Device-unnamed-export type OnHoverStatusChangeHandler = (status: HoverModeStatus) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | HoverModeStatus | Yes | Callback function triggered when the foldable device enters or exitsthe semi-folded state. |

