# isFlagEnabled

## isFlagEnabled

```TypeScript
function isFlagEnabled(id: HiTraceId, flag: HiTraceFlag): boolean
```

Checks whether the trace flag is enabled for **HiTraceId**. This API returns the result synchronously.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | HiTraceId | 是 | HiTraceId instance to be checked. |
| flag | HiTraceFlag | 是 | Specified trace flag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The value true indicates that the flag for HiTraceId is enabled, and false  indicates the opposite. |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是INCLUDE_ASYNC。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);
// enabledIncludeAsyncFlag为true。
let enabledIncludeAsyncFlag = hiTraceChain.isFlagEnabled(traceId, hiTraceChain.HiTraceFlag.INCLUDE_ASYNC);
if (enabledIncludeAsyncFlag) {
// 基于INCLUDE_ASYNC跟踪标志已设置场景的处理逻辑。
}
// 业务结束，结束跟踪。
hiTraceChain.end(traceId);

```

