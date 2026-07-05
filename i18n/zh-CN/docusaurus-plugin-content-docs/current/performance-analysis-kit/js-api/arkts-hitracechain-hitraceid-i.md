# HiTraceId

Defines a **HiTraceId** object.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## 导入模块

```TypeScript
import { hiTraceChain } from '@kit.PerformanceAnalysisKit';
```

## spanId

```TypeScript
spanId?: int
```

Span ID. The default value is **0**.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## chainId

```TypeScript
chainId: bigint
```

Call chain ID.

**类型：** bigint

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## flags

```TypeScript
flags?: int
```

Trace flag. The default value is **0**.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## parentSpanId

```TypeScript
parentSpanId?: int
```

Parent span ID. The default value is **0**.

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

