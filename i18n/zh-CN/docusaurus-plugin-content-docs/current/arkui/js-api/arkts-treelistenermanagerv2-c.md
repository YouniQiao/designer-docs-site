# TreeListenerManagerV2

Declare class TreeListenerManagerV2

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TreeListenerManagerV2,NodeParamV2,CallbackParamV2,TreeControllerV2,TreeViewV2,TreeListenerV2 } from '@kit.ArkUI';
```

## getInstance

```TypeScript
static getInstance(): TreeListenerManagerV2
```

Get instance of treeListenerManagerV2.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TreeListenerManagerV2 | - Returns the treeListenerManagerV2 instance.  @static |

## getTreeListener

```TypeScript
getTreeListener(): TreeListenerV2
```

Get treeListenerV2.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TreeListenerV2 | - Returns the treeListenerV2 object. |

