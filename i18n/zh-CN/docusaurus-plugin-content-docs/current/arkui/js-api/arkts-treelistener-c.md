# TreeListener

Declare class TreeListener

**起始版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TreeListener,NodeParam,CallbackParam,TreeListenType,TreeView,TreeController,TreeListenerManager } from '@kit.ArkUI';
```

## off(TreeListenType)

```TypeScript
off(type: TreeListenType, callback?: (callbackParam: CallbackParam) => void): void
```

Destroy event.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TreeListenType | 是 |  |
| callback | (callbackParam: CallbackParam) => void | 否 |  |

## on(TreeListenType)

```TypeScript
on(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void
```

Event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TreeListenType | 是 |  |
| callback | (callbackParam: CallbackParam) => void | 是 |  |

## once(TreeListenType)

```TypeScript
once(type: TreeListenType, callback: (callbackParam: CallbackParam) => void): void
```

Event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TreeListenType | 是 |  |
| callback | (callbackParam: CallbackParam) => void | 是 |  |

