# DynamicNode

Define DynamicNode.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMove

```TypeScript
onMove(handler: Optional<OnMoveHandler>): T
```

Set the move action.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;OnMoveHandler> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

## onMove

```TypeScript
onMove(handler: Optional<OnMoveHandler>, eventHandler: ItemDragEventHandler): T
```

设置移动动作

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Optional&lt;OnMoveHandler> | Yes |  |
| eventHandler | ItemDragEventHandler | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T |  |

