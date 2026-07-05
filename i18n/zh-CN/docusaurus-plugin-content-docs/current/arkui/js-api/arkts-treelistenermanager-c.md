# TreeListenerManager

Declare class TreeListenerManager

**起始版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TreeListener,NodeParam,CallbackParam,TreeListenType,TreeView,TreeController,TreeListenerManager } from '@kit.ArkUI';
```

## getInstance

```TypeScript
static getInstance(): TreeListenerManager
```

Get instance of treeListenerManager.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TreeListenerManager |  |

## getTreeListener

```TypeScript
getTreeListener(): TreeListener
```

Get treeListener.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TreeListener |  |

