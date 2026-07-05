# enableFlag

## enableFlag

```TypeScript
function enableFlag(id: HiTraceId, flag: HiTraceFlag): void
```

Enables the trace flag specified in HiTraceId. This API returns the result synchronously.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | HiTraceId | 是 | HiTraceId instance for which the trace flag is enabled. |
| flag | HiTraceFlag | 是 | Specified trace flag. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是INCLUDE_ASYNC。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);
// enabledDoNotCreateSpanFlag为false。
let enabledDoNotCreateSpanFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
// 设置DONOT_CREATE_SPAN跟踪标志。
hiTraceChain.enableFlag(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
// enabledDoNotCreateSpanFlag为true。
enabledDoNotCreateSpanFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
if (enabledDoNotCreateSpanFlag) {
// 基于DONOT_CREATE_SPAN跟踪标志已设置场景的处理逻辑。
}
// 业务结束，结束跟踪。
hiTraceChain.end(traceId);

```

