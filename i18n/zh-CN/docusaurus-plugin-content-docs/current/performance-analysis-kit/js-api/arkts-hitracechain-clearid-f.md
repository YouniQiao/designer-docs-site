# clearId

## clearId

```TypeScript
function clearId(): void
```

Clears the trace ID. This API returns the result synchronously. Clears the HiTrace ID in the current thread's TLS.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**示例：**

```TypeScript
// 业务开始前，尝试清除跟踪标识。
hiTraceChain.clearId();
// 开始跟踪，跟踪标志是DEFAULT。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.DEFAULT);
// 若干业务逻辑完成后，结束跟踪。
hiTraceChain.end(traceId);

```

