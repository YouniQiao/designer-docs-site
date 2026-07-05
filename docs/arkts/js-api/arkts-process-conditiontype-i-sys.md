# ConditionType

提供 ConditionType 类型，包括 timeout、killSignal、maxBuffer。

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { process } from '@kit.ArkTS';
```

## maxBuffer

```TypeScript
maxBuffer?: number
```

子进程标准输入和输出的最大缓冲区大小。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## killSignal

```TypeScript
killSignal?: number | string
```

当子进程运行时间超过 timeout 时，向子进程发送的信号。

**Type:** number | string

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

## timeout

```TypeScript
timeout?: number
```

子进程的最大运行时间（单位：毫秒）。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Utils.Lang

**System API:** This is a system API.

