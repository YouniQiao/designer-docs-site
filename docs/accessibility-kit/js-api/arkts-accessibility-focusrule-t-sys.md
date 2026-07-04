# FocusRule (System API)

```TypeScript
export type FocusRule = 'bypassSelf' | 'bypassSelfDescendants' |
'checkSelf' | 'checkSelfBypassDescendants'
```

Defines a focus rule for determining the start node and its descendants when searching for a focusable node.

**Since:** 23

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

| Type | Description |
| --- | --- |
| 'bypassSelf' | Checks only the descendants of the start node. The value is fixed at **'bypassSelf'**. |
| 'bypassSelfDescendants' | Skips the check on the start node and all its descendants. The value isfixed at **'bypassSelfDescendants'**. |
| 'checkSelf' | Checks whether the start node is focusable. If yes, use this node; otherwise, checks itsdescendants. The value is fixed at **'checkSelf'**. |
| 'checkSelfBypassDescendants' | Checks whether the start node is focusable. If yes, use this node;otherwise, skips the check on all its descendants. The value is fixed at **'checkSelfBypassDescendants'**. |

