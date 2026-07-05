# TreeListenerV2

Declare class TreeListenerV2

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { TreeListenerManagerV2,NodeParamV2,CallbackParamV2,TreeControllerV2,TreeViewV2,TreeListenerV2 } from '@kit.ArkUI';
```

## offNodeAdd

```TypeScript
offNodeAdd(callback?: OnChangedCallback): void
```

Destroy node add callback event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 否 |  |

## offNodeClick

```TypeScript
offNodeClick(callback?: OnChangedCallback): void
```

Destroy node click callback event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 否 |  |

## offNodeDelete

```TypeScript
offNodeDelete(callback?: OnChangedCallback): void
```

Destroy node delete callback event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 否 |  |

## offNodeModify

```TypeScript
offNodeModify(callback?: OnChangedCallback): void
```

Destroy node modify callback event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 否 |  |

## offNodeMove

```TypeScript
offNodeMove(callback?: OnChangedCallback): void
```

Destroy node move callback event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 否 |  |

## onceNodeAdd

```TypeScript
onceNodeAdd(callback: OnChangedCallback): void
```

Node add event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onceNodeClick

```TypeScript
onceNodeClick(callback: OnChangedCallback): void
```

Node click event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onceNodeDelete

```TypeScript
onceNodeDelete(callback: OnChangedCallback): void
```

Node delete event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onceNodeModify

```TypeScript
onceNodeModify(callback: OnChangedCallback): void
```

Node modify event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onceNodeMove

```TypeScript
onceNodeMove(callback: OnChangedCallback): void
```

Node move event registration and processing. After the event is processed once, it will be destroyed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onNodeAdd

```TypeScript
onNodeAdd(callback: OnChangedCallback): void
```

Node add event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onNodeClick

```TypeScript
onNodeClick(callback: OnChangedCallback): void
```

Node click event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onNodeDelete

```TypeScript
onNodeDelete(callback: OnChangedCallback): void
```

Node delete event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onNodeModify

```TypeScript
onNodeModify(callback: OnChangedCallback): void
```

Node modify event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

## onNodeMove

```TypeScript
onNodeMove(callback: OnChangedCallback): void
```

Node move event registration and processing. The event will not be destroyed after being processed.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnChangedCallback | 是 |  |

