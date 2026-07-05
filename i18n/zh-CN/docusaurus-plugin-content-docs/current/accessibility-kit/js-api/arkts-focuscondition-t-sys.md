# FocusCondition

```TypeScript
export type FocusCondition = 'forward' | 'backward' |
'findLast' | 'getForwardScrollAncestor' | 'getBackwardScrollAncestor' | 'getScrollableAncestor'
```

Defines a condition for querying the focusable node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

| 类型 | 说明 |
| --- | --- |
| 'forward' | Queries the next focusable node. The value is fixed at 'forward'. |
| 'backward' | Queries the next focusable node. The value is fixed at 'backward'. |
| 'findLast' | Queries the last child node of the start node. The value is fixed at 'findLast'. |
| 'getForwardScrollAncestor' | Queries the parent component that supports forward scrolling. The value  is fixed at 'getForwardScrollAncestor'. |
| 'getBackwardScrollAncestor' | Queries the parent component that supports backward scrolling. The value  is fixed at 'getBackwardScrollAncestor'. |
| 'getScrollableAncestor' | Queries the parent component that supports scrolling in any direction. The  value is fixed at 'getScrollableAncestor'. |

