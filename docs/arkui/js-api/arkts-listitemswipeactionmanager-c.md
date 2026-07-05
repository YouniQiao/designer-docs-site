# ListItemSwipeActionManager

ListItem划出菜单的管理器。

**Since:** 21

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## collapse

```TypeScript
static collapse(node: FrameNode): void
```

收起指定ListItem的划出菜单。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | ListItem节点对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | The component type of the node is incorrect. |
| 106203 | The node not mounted to component tree. |

## expand

```TypeScript
static expand(node: FrameNode, direction: ListItemSwipeActionDirection): void
```

展开指定ListItem的划出菜单。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | ListItem节点对象。 |
| direction | ListItemSwipeActionDirection | Yes | ListItem划出菜单的展开方向。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100023 | The component type of the node is incorrect. |
| 106203 | The node not mounted to component tree. |

