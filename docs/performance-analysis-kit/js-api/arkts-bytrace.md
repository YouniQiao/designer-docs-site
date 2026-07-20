# @ohos.bytrace

Provides interfaces to trace a task for performance measure, the logs can be capture by the bytrace cmdline available on the device.

<p>This interfaces trace the start, end, and value changes of key processes that last for at least 3 ms.

<p>Example:To trace a name verification that is expected to complete within 5 ms:<pre>{@code bytrace.startTrace("checkName", 111, 5);//your process bytrace.finishTrace("checkName", 111);}</pre>To trace the number of layers, which is 3:<pre>{@code bytrace.traceByValue("curLayer", 3);}</pre>

<p>Each {@code startTrace} matches one {@code finishTrace}, and they must have the same name and taskId.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** hiTraceMeter

<!--Device-unnamed-declare namespace bytrace--><!--Device-unnamed-declare namespace bytrace-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

## Summary

### Functions

| Name | Description |
| --- | --- |
| [finishTrace](arkts-performanceanalysis-bytrace-finishtrace-f.md#finishtrace-1) | Records a trace and marks it as the end of a task.This method is invoked at the end of a transaction to indicate that a task has ended, whose name is specified by {@code name}. This method must be invoked after the the startTrace. |
| [startTrace](arkts-performanceanalysis-bytrace-starttrace-f.md#starttrace-1) | Records a trace marking it as the start of a task, can with the expected completion time between startTrace and finishTrace.This method is invoked at the start of a transaction to indicate that a task has started, whose name is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by{@link #finishTrace}, the name and taskId need to be the same. |
| [traceByValue](arkts-performanceanalysis-bytrace-tracebyvalue-f.md#tracebyvalue-1) | Records a trace for generating a count, such as clock pulse and the number of layers. |

