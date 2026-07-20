# TreeController

Declare TreeController

**Since:** 22

<!--Device-unnamed-export declare class TreeController--><!--Device-unnamed-export declare class TreeController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TreeListener, NodeParam, CallbackParam, TreeListenType, TreeView, TreeController, TreeListenerManager } from '@kit.ArkUI';
```

## addNode

```TypeScript
addNode(nodeParam?: NodeParam): TreeController
```

Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data.addNode is only designed for initialization. It can only be invoked during initialization.

A maximum of 50 directory levels can be added.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TreeController-addNode(nodeParam?: NodeParam): TreeController--><!--Device-TreeController-addNode(nodeParam?: NodeParam): TreeController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nodeParam | [NodeParam](arkts-arkui-arkui-advanced-treeview-nodeparam-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| [TreeController](arkts-arkui-arkui-advanced-treeview-treecontroller-c.md) |  |

## buildDone

```TypeScript
buildDone(): void
```

After the initialization is complete by calling the addNode interface,call this interface to complete initialization.

This interface must be called when you finish initializing the ListTreeView by addNode.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TreeController-buildDone(): void--><!--Device-TreeController-buildDone(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## modifyNode

```TypeScript
modifyNode(): void
```

Modify the node name.Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TreeController-modifyNode(): void--><!--Device-TreeController-modifyNode(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## refreshNode

```TypeScript
refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void
```

This interface is called when a secondaryTitle needs to be updated

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TreeController-refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void--><!--Device-TreeController-refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parentId | number | Yes |  |
| parentSubTitle | [ResourceStr](arkts-arkui-resourcestr-t.md) | Yes |  |
| currentSubtitle | [ResourceStr](arkts-arkui-resourcestr-t.md) | Yes |  |

## removeNode

```TypeScript
removeNode(): void
```

Delete a node.Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TreeController-removeNode(): void--><!--Device-TreeController-removeNode(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

