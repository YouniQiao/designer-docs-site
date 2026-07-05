# WorkerOptions

Worker构造函数的选项，用于为Worker添加其他信息。

**起始版本：** 7

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## shared

```TypeScript
shared?: boolean
```

表示Worker共享功能，此接口暂不支持。

**类型：** boolean

**起始版本：** 7

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## name

```TypeScript
name?: string
```

Worker的名称。默认值为undefined。

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## priority

```TypeScript
priority?: ThreadWorkerPriority
```

表示Worker线程优先级。

**类型：** ThreadWorkerPriority

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## type

```TypeScript
type?: 'classic' | 'module'
```

Worker执行脚本的模式类型，暂不支持module类型，默认值为classic。

**类型：** 'classic' | 'module'

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

