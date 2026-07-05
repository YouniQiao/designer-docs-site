# @ohos.hiTraceMeter

The **HiTraceMeter** module provides the functions of tracing service processes and monitoring the system performance. It provides the data needed for HiTraceMeter to carry out performance analysis. For details about the development process, see [Using HiTraceMeter (ArkTS)](docroot://dfx/hitracemeter-guidelines-arkts.md). > **NOTE** > > You are advised to use the performance tracing APIs of API version 19. The > [startTrace()]{@link hiTraceMeter.startTrace}, [finishTrace()]{@link hiTraceMeter.finishTrace}, and > [traceByValue()]{@link hiTraceMeter.traceByValue(name: string, count: long)} APIs will be deprecated. > > The trace output level cannot be specified in the [startTrace()]{@link hiTraceMeter.startTrace}, > [finishTrace()]{@link hiTraceMeter.finishTrace} and > [traceByValue()]{@link hiTraceMeter.traceByValue(name: string, count: long)} APIs. By default, the trace output > level is **COMMERCIAL**. > > The vertical bar (|) is used as the separator in > [user-mode trace format](docroot://dfx/hitracemeter-view.md#user-mode-trace-format). Therefore, the string > parameters passed by the performance tracing APIs must exclude this character to avoid trace parsing exceptions. > > The maximum length of a [user-mode trace](docroot://dfx/hitracemeter-view.md#user-mode-trace-format) is 512 > characters. Excess characters will be truncated.

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
| [finishAsyncTrace](arkts-hitracemeter-finishasynctrace-f.md#finishAsyncTrace-1) | Stops an asynchronous trace with the trace output level specified. The **level**, **name**, and **taskId** used in **finishAsyncTrace()** must be the same as those of [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}. |
| [finishSyncTrace](arkts-hitracemeter-finishsynctrace-f.md#finishSyncTrace-1) | Stops a synchronous trace with the trace output level specified. The **level** used in **finishSyncTrace** must be the same as that of [startSyncTrace()]{@link hiTraceMeter.startSyncTrace}. |
| [finishTrace](arkts-hitracemeter-finishtrace-f.md#finishTrace-1) | Stops an asynchronous trace. To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in [startTrace()]{@link hiTraceMeter.startTrace}. Since API version 19, you are advised to use [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}, which must be used together with [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}. |
| [isTraceEnabled](arkts-hitracemeter-istraceenabled-f.md#isTraceEnabled-1) | Checks whether application trace capture is enabled. |
| [registerTraceListener](arkts-hitracemeter-registertracelistener-f.md#registerTraceListener-1) | Registers a callback to notify whether the application trace capture is enabled. This API uses a synchronous callback to return the result. After the registration is successful, the callback is executed immediately. Subsequent callbacks are executed when the application trace capture status changes. > **NOTE** > > If the callback contains time-consuming operations, the registration or deregistration will be blocked (waiting > for the callback execution to complete) when the callback is executed. > > Therefore, you are advised not to register or deregister callbacks containing time-consuming operations in the > main thread of the application to avoid application freeze. |
| [startAsyncTrace](arkts-hitracemeter-startasynctrace-f.md#startAsyncTrace-1) | Starts an asynchronous trace with the trace output level specified. If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed multiple times concurrently, different task IDs must be specified in **startAsyncTrace**. If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For details, see [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}. |
| [startSyncTrace](arkts-hitracemeter-startsynctrace-f.md#startSyncTrace-1) | Starts a synchronous trace with the trace output level specified. For details, see [finishSyncTrace()]{@link hiTraceMeter.finishSyncTrace}. |
| [startTrace](arkts-hitracemeter-starttrace-f.md#startTrace-1) | Starts an asynchronous trace. If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed multiple times concurrently, different task IDs must be specified in **startTrace**. If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For a specific example, see [finishTrace()]{@link hiTraceMeter.finishTrace}. Since API version 19, you are advised to use [startAsyncTrace()]{@link hiTraceMeter.startAsyncTrace}, which must be used together with [finishAsyncTrace()]{@link hiTraceMeter.finishAsyncTrace}. In this way, you can specify the trace output level and category. |
| [traceByValue](arkts-hitracemeter-tracebyvalue-f.md#traceByValue-1) | Traces the value changes of an integer variable. Since API version 19, you are advised to use the [traceByValue<sup>19+</sup>()]{@link hiTraceMeter.traceByValue(level: HiTraceOutputLevel, name: string, count: long)} API to specify the trace output level |
| [traceByValue](arkts-hitracemeter-tracebyvalue-f.md#traceByValue-2) | Traces an integer with the trace output level specified. It is used to mark the name and value of a predefined integer variable to be traced. |
| [unregisterTraceListener](arkts-hitracemeter-unregistertracelistener-f.md#unregisterTraceListener-1) | Unregisters the callback function used to notify whether the trace capture is enabled, which is registered using **registerTraceListener()**. |

### Types

| Name | Description |
| --- | --- |
| [TraceEventListener](arkts-hitracemeter-traceeventlistener-t.md) | Defines a callback to listen for whether the trace capture is enabled. |

### Enums

| Name | Description |
| --- | --- |
| [HiTraceOutputLevel](arkts-hitracemeter-hitraceoutputlevel-e.md) | Enumerates trace output levels. The trace output level lower than the threshold does not take effect. The log version threshold is **INFO**, and the nolog version threshold is **COMMERCIAL**. |

