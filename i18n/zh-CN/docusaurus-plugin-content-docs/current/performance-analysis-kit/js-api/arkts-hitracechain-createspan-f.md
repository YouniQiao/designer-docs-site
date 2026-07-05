# createSpan

## createSpan

```TypeScript
function createSpan(): HiTraceId
```

Creates a trace span. This API works in synchronous manner. Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread to initialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the **HiTraceId**, and return the **HiTraceId**.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HiTraceId | HiTraceId instance. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是DEFAULT。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.DEFAULT);
// 若干业务逻辑完成后，创建跟踪分支。
let spanTraceId = hiTraceChain.createSpan();
// 同一跟踪链的跟踪标识的chainId一定相同。
if (spanTraceId.chainId != traceId.chainId) {
// 基于异常场景的处理逻辑。
}
// 业务结束，结束跟踪。
hiTraceChain.end(traceId);

```

