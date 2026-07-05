# ThreadInfo

工作线程的内部信息。

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## priority

```TypeScript
priority?: Priority
```

当前线程的优先级。如果返回为空，表示当前没有任务执行。不建议修改此值。

**Type:** Priority

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## taskIds

```TypeScript
taskIds?: number[]
```

在当前线程上运行的任务ID列表。如果返回为空，表示当前没有任务执行。不建议修改此值。

**Type:** number[]

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## tid

```TypeScript
tid: number
```

工作线程的标识符。如果返回为空，表示当前没有任务执行。不建议修改此值。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

