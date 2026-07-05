# TaskResult

处于等待或执行过程中的任务进行取消操作后，在catch分支里捕获到**BusinessError**里的补充信息。其他场景下该信息为**undefined**。

**Since:** 20

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## result

```TypeScript
result?: Object
```

任务执行结果。默认为**undefined**。不建议修改此值。

**Type:** Object

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## error

```TypeScript
error?: Error | Object
```

错误信息。默认和**BusinessError**的**message**字段一致。不建议修改此值。

**Type:** Error | Object

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

