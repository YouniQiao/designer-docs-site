# ErrorEvent

错误事件类用于表示Worker执行过程中出现异常的详细信息，ErrorEvent类继承Event。

**继承实现关系：** ErrorEvent继承自：Event。

**起始版本：** 7

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## lineno

```TypeScript
readonly lineno: number
```

异常所在的行数。

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## filename

```TypeScript
readonly filename: string
```

出现异常所在的文件。

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## colno

```TypeScript
readonly colno: number
```

异常所在的列数。

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## error

```TypeScript
readonly error: Object
```

异常类型。

**类型：** Object

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## message

```TypeScript
readonly message: string
```

异常发生的错误信息。

**类型：** string

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

