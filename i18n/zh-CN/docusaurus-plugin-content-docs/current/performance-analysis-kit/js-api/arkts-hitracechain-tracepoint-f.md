# tracepoint

## tracepoint

```TypeScript
function tracepoint(mode: HiTraceCommunicationMode, type: HiTraceTracepointType, id: HiTraceId, msg?: string): void
```

Adds a trace point for the [@ohos.hiTraceMeter (Performance Tracing)](arkts-hitracemeter.md#hiTraceMeter) logging, which is synchronous. When type is set to **CS** and **SR**, the HiTraceMeter tracing starts. When type is set to **CR** and **SS**, the HiTraceMeter tracing ends. When type is set to **GENERAL**, the HiTraceMeter tracing does not start. The trace points for **CS** and **CR** types must be used as a pair; likewise, trace points for **SR** and **SS** types must also be used together. Otherwise, the start and end trace points of HiTraceMeter cannot match each other.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | HiTraceCommunicationMode | 是 | Communication mode for the trace point. |
| type | HiTraceTracepointType | 是 | Trace point type. |
| id | HiTraceId | 是 | HiTraceId instance for trace point triggering. |
| msg | string | 否 | Trace description information passed by the HiTraceMeter logging. The default value is "". |

**示例：**

```TypeScript
// 开始跟踪，跟踪标志是INCLUDE_ASYNC与DONOT_CREATE_SPAN的并集。
let traceId = hiTraceChain.begin("business", hiTraceChain.HiTraceFlag.INCLUDE_ASYNC | hiTraceChain.HiTraceFlag.DONOT_CREATE_SPAN);
// 若干业务逻辑完成后，触发信息埋点操作。
hiTraceChain.tracepoint(hiTraceChain.HiTraceCommunicationMode.THREAD, hiTraceChain.HiTraceTracepointType.SS, traceId, "Just an example");
// 业务结束，结束跟踪。
hiTraceChain.end(traceId);

```

