# worker

JS跨线程通信工具。

**起始版本：** 7

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[RestrictedWorker](arkts-worker-restrictedworker-c-sys.md) | RestrictedWorker类包含所有Worker功能。 |
| [ThreadWorker](arkts-worker-threadworker-c.md) | 使用以下方法前，需先构造ThreadWorker实例。ThreadWorker类继承WorkerEventTarget。 |
| [Worker](arkts-worker-worker-c.md) | Worker类包含所有Worker功能。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [parentPort](arkts-worker-con.md#parentPort) | Worker线程用于与宿主线程通信的对象。 |
| [workerPort](arkts-worker-con.md#workerPort) | Worker线程用于与宿主线程通信的对象。 |

