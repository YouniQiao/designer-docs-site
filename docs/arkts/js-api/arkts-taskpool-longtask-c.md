# LongTask

表示长时任务。**LongTask**继承自 [Task]taskpool.execute(func: Function, ...args: Object[])。 长时任务不设置执行时间上限，长时间运行不会触发超时异常，但不支持将同一任务多次执行或者将该任务加入任务组（TaskGroup）。 执行长时任务的线程会持续存在，直到任务完成并调用[terminateTask]taskpool.terminateTask后，该线程在空闲时被回收。

**Inheritance:** LongTaskextends: Task.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

