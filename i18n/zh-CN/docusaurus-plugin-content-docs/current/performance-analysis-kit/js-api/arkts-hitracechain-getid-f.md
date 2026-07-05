# getId

## getId

```TypeScript
function getId(): HiTraceId
```

Obtains the trace ID. This API returns the result synchronously. Obtains the HiTrace ID in the TLS of the current thread.

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
// 若干业务逻辑完成后，获取当前跟踪标识。
let curTraceId = hiTraceChain.getId();
// 同一跟踪链获取的跟踪标识的chainId一定相同。
if (curTraceId.chainId != traceId.chainId) {
// 基于异常场景的处理逻辑。
}
// 若干业务逻辑完成后，结束跟踪。
hiTraceChain.end(traceId);

```

