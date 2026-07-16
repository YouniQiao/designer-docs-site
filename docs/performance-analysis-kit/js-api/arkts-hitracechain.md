# @ohos.hiTraceChain

The **hiTraceChain** module implements call chain trace throughout a service process. It provides functions such as
starting and stopping call chain trace and configuring trace points.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiTrace

## Modules to Import

```TypeScript
import { hiTraceChain } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [begin](arkts-performanceanalysis-begin-f.md#begin-1) | Starts call chain trace. This API returns the result synchronously.If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, andreturns it.If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returnsan invalid HiTrace ID with all property values being 0. |
| [clearId](arkts-performanceanalysis-clearid-f.md#clearid-1) | Clears the trace ID. This API returns the result synchronously.Clears the HiTrace ID in the current thread's TLS. |
| [createSpan](arkts-performanceanalysis-createspan-f.md#createspan-1) | Creates a trace span. This API works in synchronous manner.Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread toinitialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the**HiTraceId**, and return the **HiTraceId**. |
| [enableFlag](arkts-performanceanalysis-enableflag-f.md#enableflag-1) | Enables the trace flag specified in HiTraceId. This API returns the result synchronously. |
| [end](arkts-performanceanalysis-end-f.md#end-1) | Stops call chain trace. This API works in synchronous manner.If the given HiTrace ID is valid and is the same as the HiTrace ID in the current thread's TLS, the tracing isstopped and the HiTrace ID in the current thread's TLS is set to invalid.If the given HiTrace ID is invalid or is not the same as the HiTrace ID in the current thread's TLS, the tracingfails to be stopped, and a tracing stop failure log is printed. |
| [getId](arkts-performanceanalysis-getid-f.md#getid-1) | Obtains the trace ID. This API returns the result synchronously.Obtains the HiTrace ID in the TLS of the current thread. |
| [isFlagEnabled](arkts-performanceanalysis-isflagenabled-f.md#isflagenabled-1) | Checks whether the trace flag is enabled for **HiTraceId**. This API returns the result synchronously. |
| [isValid](arkts-performanceanalysis-isvalid-f.md#isvalid-1) | Checks whether a **HiTraceId** instance is valid. This API returns the result synchronously. |
| [setId](arkts-performanceanalysis-setid-f.md#setid-1) | Sets a trace ID. This API returns the result synchronously.Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operation isperformed. |
| [tracepoint](arkts-performanceanalysis-tracepoint-f.md#tracepoint-1) | Adds a trace point for the [@ohos.hiTraceMeter (Performance Tracing)](arkts-hitracemeter.md)logging, which is synchronous.When type is set to **CS** and **SR**, the HiTraceMeter tracing starts. When type is set to **CR** and **SS**, theHiTraceMeter tracing ends. When type is set to **GENERAL**, the HiTraceMeter tracing does not start.The trace points for **CS** and **CR** types must be used as a pair; likewise, trace points for **SR** and **SS**types must also be used together. Otherwise, the start and end trace points of HiTraceMeter cannot match eachother. |

### Interfaces

| Name | Description |
| --- | --- |
| [HiTraceId](arkts-performanceanalysis-hitraceid-i.md) | Defines a **HiTraceId** object. |

### Enums

| Name | Description |
| --- | --- |
| [HiTraceCommunicationMode](arkts-performanceanalysis-hitracecommunicationmode-e.md) | Enumerates communication modes. |
| [HiTraceFlag](arkts-performanceanalysis-hitraceflag-e.md) | Enumerates trace flag types. |
| [HiTraceTracepointType](arkts-performanceanalysis-hitracetracepointtype-e.md) | Enumerates trace point types. |

