# TaskInfo

任务的内部信息。

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## duration

```TypeScript
duration?: number
```

任务执行至当前所用的时间，默认为0，单位为ms。当返回为0时，表示任务未执行；返回为空时，表示没有任务执行。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## name

```TypeScript
name: string
```

任务的名字，不建议修改此值。<br> 从API version 12开始，该接口支持在原子化服务中使用。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## state

```TypeScript
state: State
```

任务的状态。不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** State

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## taskId

```TypeScript
taskId: number
```

任务ID。任务的标识符，系统默认提供全局唯一值，不建议修改此值。<br> 从API version 11开始，该接口支持在原子化服务中使用。

**Type:** number

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

