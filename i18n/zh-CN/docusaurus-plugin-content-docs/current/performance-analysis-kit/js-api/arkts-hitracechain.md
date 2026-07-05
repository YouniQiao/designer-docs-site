# @ohos.hiTraceChain

The **hiTraceChain** module implements call chain trace throughout a service process. It provides functions such as starting and stopping call chain trace and configuring trace points.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiTrace

## 导入模块

```TypeScript
import { hiTraceChain } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [begin](arkts-hitracechain-begin-f.md#begin-1) | Starts call chain trace. This API returns the result synchronously. If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, and returns it. If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns an invalid HiTrace ID with all property values being 0. |
| [clearId](arkts-hitracechain-clearid-f.md#clearId-1) | Clears the trace ID. This API returns the result synchronously. Clears the HiTrace ID in the current thread's TLS. |
| [createSpan](arkts-hitracechain-createspan-f.md#createSpan-1) | Creates a trace span. This API works in synchronous manner. Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread to initialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the **HiTraceId**, and return the **HiTraceId**. |
| [enableFlag](arkts-hitracechain-enableflag-f.md#enableFlag-1) | Enables the trace flag specified in HiTraceId. This API returns the result synchronously. |
| [end](arkts-hitracechain-end-f.md#end-1) | Stops call chain trace. This API works in synchronous manner. If the given HiTrace ID is valid and is the same as the HiTrace ID in the current thread's TLS, the tracing is stopped and the HiTrace ID in the current thread's TLS is set to invalid. If the given HiTrace ID is invalid or is not the same as the HiTrace ID in the current thread's TLS, the tracing fails to be stopped, and a tracing stop failure log is printed. |
| [getId](arkts-hitracechain-getid-f.md#getId-1) | Obtains the trace ID. This API returns the result synchronously. Obtains the HiTrace ID in the TLS of the current thread. |
| [isFlagEnabled](arkts-hitracechain-isflagenabled-f.md#isFlagEnabled-1) | Checks whether the trace flag is enabled for **HiTraceId**. This API returns the result synchronously. |
| [isValid](arkts-hitracechain-isvalid-f.md#isValid-1) | Checks whether a **HiTraceId** instance is valid. This API returns the result synchronously. |
| [setId](arkts-hitracechain-setid-f.md#setId-1) | Sets a trace ID. This API returns the result synchronously. Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operation is performed. |
| [tracepoint](arkts-hitracechain-tracepoint-f.md#tracepoint-1) | Adds a trace point for the [@ohos.hiTraceMeter (Performance Tracing)]{@link @ohos.hiTraceMeter:hiTraceMeter} logging, which is synchronous. When type is set to **CS** and **SR**, the HiTraceMeter tracing starts. When type is set to **CR** and **SS**, the HiTraceMeter tracing ends. When type is set to **GENERAL**, the HiTraceMeter tracing does not start. The trace points for **CS** and **CR** types must be used as a pair; likewise, trace points for **SR** and **SS** types must also be used together. Otherwise, the start and end trace points of HiTraceMeter cannot match each other. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [HiTraceId](arkts-hitracechain-hitraceid-i.md) | Defines a **HiTraceId** object. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [HiTraceCommunicationMode](arkts-hitracechain-hitracecommunicationmode-e.md) | Enumerates communication modes. |
| [HiTraceFlag](arkts-hitracechain-hitraceflag-e.md) | Enumerates trace flag types. |
| [HiTraceTracepointType](arkts-hitracechain-hitracetracepointtype-e.md) | Enumerates trace point types. |

