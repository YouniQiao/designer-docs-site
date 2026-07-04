# OnHoverCallback

```TypeScript
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void
```

Represents the callback invoked on mouse hover.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | Whether the mouse pointer is hovering over the component. The value **true** means thatthe mouse pointer enters the component, and **false** means that the mouse pointer leaves the component. |
| event | HoverEvent | Yes | Hover event. |

