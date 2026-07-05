# RestrictedWorker

RestrictedWorker类包含所有Worker功能。

**继承实现关系：** RestrictedWorker继承自：ThreadWorker。

**起始版本：** 11

**系统能力：** SystemCapability.Utils.Lang

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

创建一个worker实例。

**起始版本：** 11

**系统能力：** SystemCapability.Utils.Lang

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scriptURL | string | 是 | scriptURL Worker线程执行的脚本URL。 |
| options | WorkerOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10200003 | Worker initialization failure. |
| 10200007 | The worker file patch is invalid path. |

