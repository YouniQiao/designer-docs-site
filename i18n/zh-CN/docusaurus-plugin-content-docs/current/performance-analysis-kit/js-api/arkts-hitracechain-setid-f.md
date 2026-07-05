# setId

## setId

```TypeScript
function setId(id: HiTraceId): void
```

Sets a trace ID. This API returns the result synchronously. Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operation is performed.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | HiTraceId | 是 | HiTraceId instance. |

**示例：**

```TypeScript
// 获取当前跟踪链中的跟踪标识。
let traceId = hiTraceChain.getId();
// 将获取的跟踪标识设置为当前traceId。
hiTraceChain.setId(traceId);

```

