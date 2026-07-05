# FocusCondition (System API)

```TypeScript
export type FocusCondition = 'forward' | 'backward' |
'findLast' | 'getForwardScrollAncestor' | 'getBackwardScrollAncestor' | 'getScrollableAncestor'
```

Defines a condition for querying the focusable node.

**Since:** 23

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

| Type | Description |
| --- | --- |
| 'forward' | Queries the next focusable node. The value is fixed at **'forward'**. |
| 'backward' | Queries the next focusable node. The value is fixed at **'backward'**. |
| 'findLast' | Queries the last child node of the start node. The value is fixed at **'findLast'**. |
| 'getForwardScrollAncestor' | Queries the parent component that supports forward scrolling. The valueis fixed at **'getForwardScrollAncestor'**. |
| 'getBackwardScrollAncestor' | Queries the parent component that supports backward scrolling. The valueis fixed at **'getBackwardScrollAncestor'**. |
| 'getScrollableAncestor' | Queries the parent component that supports scrolling in any direction. Thevalue is fixed at **'getScrollableAncestor'**. |

