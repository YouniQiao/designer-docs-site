# TreeController

Declare TreeController

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TreeListener, NodeParam, CallbackParam, TreeListenType, TreeView, TreeController, TreeListenerManager } from '@ohos.arkui.advanced.TreeView';
```

## addNode

```TypeScript
addNode(nodeParam?: NodeParam): TreeController
```

Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data. addNode is only designed for initialization. It can only be invoked during initialization. A maximum of 50 directory levels can be added.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nodeParam | NodeParam | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TreeController |  |

## buildDone

```TypeScript
buildDone(): void
```

After the initialization is complete by calling the addNode interface, call this interface to complete initialization. This interface must be called when you finish initializing the ListTreeView by addNode.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## modifyNode

```TypeScript
modifyNode(): void
```

Modify the node name. Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## refreshNode

```TypeScript
refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void
```

This interface is called when a secondaryTitle needs to be updated

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parentId | number | Yes |  |
| parentSubTitle | ResourceStr | Yes |  |
| currentSubtitle | ResourceStr | Yes |  |

## removeNode

```TypeScript
removeNode(): void
```

Delete a node. Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

