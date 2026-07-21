# ListItemSwipeActionManager

Implements the swipe action menu manager for list items.

**Since:** 21

<!--Device-unnamed-declare class ListItemSwipeActionManager--><!--Device-unnamed-declare class ListItemSwipeActionManager-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="collapse"></a>
## collapse

```TypeScript
static collapse(node: FrameNode): void
```

Collapses the swipe action menu for the specified list item.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-ListItemSwipeActionManager-static collapse(node: FrameNode): void--><!--Device-ListItemSwipeActionManager-static collapse(node: FrameNode): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](../arkts-apis/arkts-arkui-framenode-c.md) | Yes | The ListItem FrameNode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | The component type of the node is incorrect. |
| [106203](../errorcode-node.md#106203-passed-node-not-mounted-to-component-tree) | The node not mounted to component tree. |

<a id="expand"></a>
## expand

```TypeScript
static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void
```

Expands the swipe action menu for the specified list item.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-ListItemSwipeActionManager-static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void--><!--Device-ListItemSwipeActionManager-static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | [FrameNode](../arkts-apis/arkts-arkui-framenode-c.md) | Yes | The ListItem FrameNode. |
| direction | [ListItemSwipeActionDirection](arkts-arkui-listitemswipeactiondirection-e.md) | Yes | The direction to expand. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100023](../errorcode-node.md#100023-parameter-error) | The component type of the node is incorrect. |
| [106203](../errorcode-node.md#106203-passed-node-not-mounted-to-component-tree) | The node not mounted to component tree. |

