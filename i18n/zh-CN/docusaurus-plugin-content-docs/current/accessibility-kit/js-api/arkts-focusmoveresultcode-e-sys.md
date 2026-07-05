# FocusMoveResultCode

```TypeScript
export enum FocusMoveResultCode
```

Enumerates the result codes returned by the focusable node query.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## NOT_SUPPORTED

```TypeScript
NOT_SUPPORTED = -1
```

Query is not supported.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_SUCCESS

```TypeScript
SEARCH_SUCCESS = 0
```

The node is queried successfully.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_SUCCESS_NEXT_BYPASS_DESCENDANTS

```TypeScript
SEARCH_SUCCESS_NEXT_BYPASS_DESCENDANTS = 1
```

The node is queried successfully. Use the **bypassSelfDescendants** parameter to quickly obtain the result in the next query.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_FAILURE

```TypeScript
SEARCH_FAILURE = 2
```

Failed to query the node. The current page has no focusable node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_FAILURE_IN_CHILD_TREE

```TypeScript
SEARCH_FAILURE_IN_CHILD_TREE = 3
```

Failed to query the node. The current container has no focusable node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_FAILURE_LOST_NODE

```TypeScript
SEARCH_FAILURE_LOST_NODE = 4
```

Failed to query the node. The start node is not found.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_NEXT

```TypeScript
SEARCH_NEXT = 5
```

The returned node is not focusable. Continue to query from the returned node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## DOUBLE_CHECK_CHILD_PROPERTY

```TypeScript
DOUBLE_CHECK_CHILD_PROPERTY = 6
```

The returned node is not focusable. Continue to query from all descendants of the returned node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## DOUBLE_CHECK_CHILD_PROPERTY_AND_GET_LAST

```TypeScript
DOUBLE_CHECK_CHILD_PROPERTY_AND_GET_LAST = 7
```

The returned node is not focusable. Continue to query from the last child node of the returned node.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## SEARCH_FAILURE_IN_SCROLL

```TypeScript
SEARCH_FAILURE_IN_SCROLL = 8
```

Failed to query the node in the scrollable component.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

