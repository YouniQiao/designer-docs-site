# @ohos.hiTraceMeter

The **HiTraceMeter** module provides the functions of tracing service processes and monitoring the system
performance. It provides the data needed for HiTraceMeter to carry out performance analysis.

For details about the development process, see
[Using HiTraceMeter (ArkTS)](../../../../dfx/hitracemeter-guidelines-arkts.md).

> **NOTE**
>
> You are advised to use the performance tracing APIs of API version 19. The
> [startTrace()](arkts-performanceanalysis-starttrace-f.md#starttrace-1), [finishTrace()](arkts-performanceanalysis-finishtrace-f.md#finishtrace-1), and
> [traceByValue()](arkts-performanceanalysis-tracebyvalue-f.md#tracebyvalue-1) APIs will be deprecated.
>
> The trace output level cannot be specified in the [startTrace()](arkts-performanceanalysis-starttrace-f.md#starttrace-1),
> [finishTrace()](arkts-performanceanalysis-finishtrace-f.md#finishtrace-1) and
> [traceByValue()](arkts-performanceanalysis-tracebyvalue-f.md#tracebyvalue-1) APIs. By default, the trace output
> level is **COMMERCIAL**.
>
> The vertical bar (|) is used as the separator in
> [user-mode trace format](../../../../dfx/hitracemeter-view.md#user-mode-trace-format). Therefore, the string
> parameters passed by the performance tracing APIs must exclude this character to avoid trace parsing exceptions.
>
> The maximum length of a [user-mode trace](../../../../dfx/hitracemeter-view.md#user-mode-trace-format) is 512
> characters. Excess characters will be truncated.

**Since:** 8

**System capability:** SystemCapability.HiviewDFX.HiTrace

## Modules to Import

```TypeScript
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [finishAsyncTrace](arkts-performanceanalysis-finishasynctrace-f.md#finishasynctrace-1) | Stops an asynchronous trace with the trace output level specified.The **level**, **name**, and **taskId** used in **finishAsyncTrace()** must be the same as those of[startAsyncTrace()](arkts-performanceanalysis-startasynctrace-f.md#startasynctrace-1). |
| [finishSyncTrace](arkts-performanceanalysis-finishsynctrace-f.md#finishsynctrace-1) | Stops a synchronous trace with the trace output level specified.The **level** used in **finishSyncTrace** must be the same as that of[startSyncTrace()](arkts-performanceanalysis-startsynctrace-f.md#startsynctrace-1). |
| [finishTrace](arkts-performanceanalysis-finishtrace-f.md#finishtrace-1) | Stops an asynchronous trace.To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in[startTrace()](arkts-performanceanalysis-starttrace-f.md#starttrace-1).Since API version 19, you are advised to use [finishAsyncTrace()](arkts-performanceanalysis-finishasynctrace-f.md#finishasynctrace-1), which mustbe used together with [startAsyncTrace()](arkts-performanceanalysis-startasynctrace-f.md#startasynctrace-1). |
| [isTraceEnabled](arkts-performanceanalysis-istraceenabled-f.md#istraceenabled-1) | Checks whether application trace capture is enabled. |
| [registerTraceListener](arkts-performanceanalysis-registertracelistener-f.md#registertracelistener-1) | Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronouscallback to return the result.After the registration is successful, the callback is executed immediately. Subsequent callbacks are executed whenthe application trace capture status changes.&gt; **NOTE**&gt;&gt; If the callback contains time-consuming operations, the registration or deregistration will be blocked (waiting&gt; for the callback execution to complete) when the callback is executed.&gt;&gt; Therefore, you are advised not to register or deregister callbacks containing time-consuming operations in the&gt; main thread of the application to avoid application freeze. |
| [startAsyncTrace](arkts-performanceanalysis-startasynctrace-f.md#startasynctrace-1) | Starts an asynchronous trace with the trace output level specified.If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performedmultiple times concurrently, different task IDs must be specified in **startAsyncTrace**.If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For details,see [finishAsyncTrace()](arkts-performanceanalysis-finishasynctrace-f.md#finishasynctrace-1). |
| [startSyncTrace](arkts-performanceanalysis-startsynctrace-f.md#startsynctrace-1) | Starts a synchronous trace with the trace output level specified. For details, see[finishSyncTrace()](arkts-performanceanalysis-finishsynctrace-f.md#finishsynctrace-1). |
| [startTrace](arkts-performanceanalysis-starttrace-f.md#starttrace-1) | Starts an asynchronous trace.If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performedmultiple times concurrently, different task IDs must be specified in **startTrace**.If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For aspecific example, see [finishTrace()](arkts-performanceanalysis-finishtrace-f.md#finishtrace-1).Since API version 19, you are advised to use [startAsyncTrace()](arkts-performanceanalysis-startasynctrace-f.md#startasynctrace-1), which must beused together with [finishAsyncTrace()](arkts-performanceanalysis-finishasynctrace-f.md#finishasynctrace-1). In this way, you can specify thetrace output level and category. |
| [traceByValue](arkts-performanceanalysis-tracebyvalue-f.md#tracebyvalue-1) | Traces the value changes of an integer variable.Since API version 19, you are advised to use the[traceByValue&lt;sup&gt;19+&lt;/sup&gt;()](arkts-performanceanalysis-tracebyvalue-f.md#tracebyvalue-2)API to specify the trace output level |
| [traceByValue](arkts-performanceanalysis-tracebyvalue-f.md#tracebyvalue-2) | Traces an integer with the trace output level specified. It is used to mark the name and value of a predefinedinteger variable to be traced. |
| [unregisterTraceListener](arkts-performanceanalysis-unregistertracelistener-f.md#unregistertracelistener-1) | Unregisters the callback function used to notify whether the trace capture is enabled, which is registered using**registerTraceListener()**. |

### Enums

| Name | Description |
| --- | --- |
| [HiTraceOutputLevel](arkts-performanceanalysis-hitraceoutputlevel-e.md) | Enumerates trace output levels.The trace output level lower than the threshold does not take effect. The log version threshold is **INFO**, andthe nolog version threshold is **COMMERCIAL**. |

### Types

| Name | Description |
| --- | --- |
| [TraceEventListener](arkts-performanceanalysis-traceeventlistener-t.md) | Defines a callback to listen for whether the trace capture is enabled. |

