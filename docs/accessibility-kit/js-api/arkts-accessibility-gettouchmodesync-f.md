# getTouchModeSync

## getTouchModeSync

```TypeScript
function getTouchModeSync(): string
```

Queries single- or double-touch mode.

**Since:** 20

**Atomic service API:** From API version 23 this API can be used in atomic services.

**Widget capability:** From API version 23 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Touch mode.  - singleTouchMode: Single-touch mode.  - doubleTouchMode: Double-touch mode.  - none: Touch guide mode is disabled. |

