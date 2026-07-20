# @ohos.hiTraceChain

The **hiTraceChain** module implements call chain trace throughout a service process. It provides functions such as starting and stopping call chain trace and configuring trace points.

**Since:** 8

<!--Device-unnamed-declare namespace hiTraceChain--><!--Device-unnamed-declare namespace hiTraceChain-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

## Modules to Import

```TypeScript
import { hiTraceChain } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [begin](arkts-performanceanalysis-hitracechain-begin-f.md#begin-1) | Starts call chain trace. This API returns the result synchronously.If the current thread's TLS does not contain a valid HiTrace ID, this function generates one, stores it in TLS, and returns it.If the current thread's TLS already contains a valid HiTrace ID, this function does not start tracing and returns an invalid HiTrace ID with all property values being 0. |
| [clearId](arkts-performanceanalysis-hitracechain-clearid-f.md#clearid-1) | Clears the trace ID. This API returns the result synchronously.Clears the HiTrace ID in the current thread's TLS. |
| [createSpan](arkts-performanceanalysis-hitracechain-createspan-f.md#createspan-1) | Creates a trace span. This API works in synchronous manner.Specifically, create a **HiTraceId**, use the **chainId** and **spanId** in the TLS of the current thread to initialize the **chainId** and **parentSpanId** of the **HiTraceId**, generate a new **spanId** for the **HiTraceId**, and return the **HiTraceId**. |
| [enableFlag](arkts-performanceanalysis-hitracechain-enableflag-f.md#enableflag-1) | Enables the trace flag specified in HiTraceId. This API returns the result synchronously. |
| [end](arkts-performanceanalysis-hitracechain-end-f.md#end-1) | Stops call chain trace. This API works in synchronous manner.If the given HiTrace ID is valid and is the same as the HiTrace ID in the current thread's TLS, the tracing is stopped and the HiTrace ID in the current thread's TLS is set to invalid.If the given HiTrace ID is invalid or is not the same as the HiTrace ID in the current thread's TLS, the tracing fails to be stopped, and a tracing stop failure log is printed. |
| [getId](arkts-performanceanalysis-hitracechain-getid-f.md#getid-1) | Obtains the trace ID. This API returns the result synchronously.Obtains the HiTrace ID in the TLS of the current thread. |
| [isFlagEnabled](arkts-performanceanalysis-hitracechain-isflagenabled-f.md#isflagenabled-1) | Checks whether the trace flag is enabled for **HiTraceId**. This API returns the result synchronously. |
| [isValid](arkts-performanceanalysis-hitracechain-isvalid-f.md#isvalid-1) | Checks whether a **HiTraceId** instance is valid. This API returns the result synchronously. |
| [setId](arkts-performanceanalysis-hitracechain-setid-f.md#setid-1) | Sets a trace ID. This API returns the result synchronously.Sets the given HiTrace ID to the TLS of the current thread. If the given HiTrace ID is invalid, no operation is performed. |
| [tracepoint](arkts-performanceanalysis-hitracechain-tracepoint-f.md#tracepoint-1) | Adds a trace point for the [@ohos.hiTraceMeter (Performance Tracing)](arkts-hitracemeter.md)logging, which is synchronous.When type is set to **CS** and **SR**, the HiTraceMeter tracing starts. When type is set to **CR** and **SS**, the HiTraceMeter tracing ends. When type is set to **GENERAL**, the HiTraceMeter tracing does not start.The trace points for **CS** and **CR** types must be used as a pair; likewise, trace points for **SR** and **SS** types must also be used together. Otherwise, the start and end trace points of HiTraceMeter cannot match each other. |

### Interfaces

| Name | Description |
| --- | --- |
| [HiTraceId](arkts-performanceanalysis-hitracechain-hitraceid-i.md) | Defines a **HiTraceId** object. |

### Enums

| Name | Description |
| --- | --- |
| [HiTraceCommunicationMode](arkts-performanceanalysis-hitracechain-hitracecommunicationmode-e.md) | Enumerates communication modes. |
| [HiTraceFlag](arkts-performanceanalysis-hitracechain-hitraceflag-e.md) | Enumerates trace flag types. |
| [HiTraceTracepointType](arkts-performanceanalysis-hitracechain-hitracetracepointtype-e.md) | Enumerates trace point types. |

