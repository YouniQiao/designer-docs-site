# setId

## Modules to Import

```TypeScript
import { hiTraceChain } from '@kit.PerformanceAnalysisKit';
```

## setId

```TypeScript
function setId(id: HiTraceId): void
```

Sets a trace ID. This API returns the result synchronously.

Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operation is
performed.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | HiTraceId | Yes | **HiTraceId** instance. |

**Example**

```TypeScript
// Obtain the trace ID of the current call chain.
let traceId = hiTraceChain.getId();
// Set traceId to the obtained trace ID.
hiTraceChain.setId(traceId);

```

