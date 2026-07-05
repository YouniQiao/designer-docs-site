# FocusRule

```TypeScript
export type FocusRule = 'bypassSelf' | 'bypassSelfDescendants' |
'checkSelf' | 'checkSelfBypassDescendants'
```

Defines a focus rule for determining the start node and its descendants when searching for a focusable node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

| 类型 | 说明 |
| --- | --- |
| 'bypassSelf' | Checks only the descendants of the start node. The value is fixed at 'bypassSelf'. |
| 'bypassSelfDescendants' | Skips the check on the start node and all its descendants. The value is  fixed at 'bypassSelfDescendants'. |
| 'checkSelf' | Checks whether the start node is focusable. If yes, use this node; otherwise, checks its  descendants. The value is fixed at 'checkSelf'. |
| 'checkSelfBypassDescendants' | Checks whether the start node is focusable. If yes, use this node;  otherwise, skips the check on all its descendants. The value is fixed at 'checkSelfBypassDescendants'. |

