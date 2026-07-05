# TreeController

Declare TreeController

**起始版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TreeListener,NodeParam,CallbackParam,TreeListenType,TreeView,TreeController,TreeListenerManager } from '@kit.ArkUI';
```

## addNode

```TypeScript
addNode(nodeParam?: NodeParam): TreeController
```

Initialize the interface of the tree view. This interface is used to generate ListNodeDataSource data. addNode is only designed for initialization. It can only be invoked during initialization. A maximum of 50 directory levels can be added.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| nodeParam | NodeParam | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TreeController |  |

## buildDone

```TypeScript
buildDone(): void
```

After the initialization is complete by calling the addNode interface, call this interface to complete initialization. This interface must be called when you finish initializing the ListTreeView by addNode.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## modifyNode

```TypeScript
modifyNode(): void
```

Modify the node name. Register an ON_ITEM_MODIFY callback to obtain the ID, parent node ID, and node name of the modified node.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## refreshNode

```TypeScript
refreshNode(parentId: number, parentSubTitle: ResourceStr, currentSubtitle: ResourceStr): void
```

This interface is called when a secondaryTitle needs to be updated

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parentId | number | 是 |  |
| parentSubTitle | ResourceStr | 是 |  |
| currentSubtitle | ResourceStr | 是 |  |

## removeNode

```TypeScript
removeNode(): void
```

Delete a node. Register an ON_ITEM_DELETE callback through the ListTreeListener mechanism to obtain the IDs of all deleted nodes.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

