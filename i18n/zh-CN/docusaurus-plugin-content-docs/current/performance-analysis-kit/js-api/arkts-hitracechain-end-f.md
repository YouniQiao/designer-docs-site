# end

## end

```TypeScript
function end(id: HiTraceId): void
```

Stops call chain trace. This API works in synchronous manner. If the given HiTrace ID is valid and is the same as the HiTrace ID in the current thread's TLS, the tracing is stopped and the HiTrace ID in the current thread's TLS is set to invalid. If the given HiTrace ID is invalid or is not the same as the HiTrace ID in the current thread's TLS, the tracing fails to be stopped, and a tracing stop failure log is printed.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | HiTraceId | 是 | HiTraceId instance. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是DEFAULT。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.DEFAULT);
// 若干业务逻辑完成后，结束跟踪。
hiTraceChain.end(traceId);

```

