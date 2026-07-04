# @ohos.test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy, PerfMetric, PerfTest, PerfMeasureResult } from '@ohos.test.PerfTest';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [PerfTest](arkts-test-perftest-c.md) | Represents the general entry of the white-box performance test framework. It provides capabilities such as test task creation, test code segment execution, data collection, and measurement result obtaining. |

### Interfaces

| Name | Description |
| --- | --- |
| [PerfMeasureResult](arkts-test-perfmeasureresult-i.md) | Represents the measurement result data corresponding to the performance metric. |
| [PerfTestStrategy](arkts-test-perfteststrategy-i.md) | Represents the performance test strategy. &gt; **NOTE** &gt; &gt; The input parameter type of the **actionCode** and **resetCode** attributes is the **Callback\&lt;boolean&gt;**. You need to call this callback in the code segment to notify the framework that the code segment execution is complete. Otherwise, the code segment execution times out. &gt; The callback parameter is of the **Boolean** type. The value **true** indicates that the code segment execution meets the expectation, and false indicates the opposite. |

### Enums

| Name | Description |
| --- | --- |
| [PerfMetric](arkts-test-perfmetric-e.md) | Represents performance metrics that can be collected by the framework. &gt; **NOTE** &gt; &gt; 1. The preceding metrics collect performance data for a specified application process, not for the system. &gt; 2. Description of collecting the CPU data (**CPU_LOAD** / **CPU_USAGE**) and memory (**MEMORY_RSS** / **MEMORY_PSS**): &gt; - During the test, the CPU and memory data of the specified application process is collected before and after the &gt; code segment execution. Therefore, ensure that the application process to be tested exists during the test. &gt; 3. Description of collecting the application startup latency data (**APP_START_RESPONSE_TIME** / **APP_START_COMPLETE_TIME**): &gt; - Application startup latency data is affected by system log reporting. The start time is when the tap event is reported, &gt; the end time of the response latency is when the first frame is displayed on the screen after the tap, &gt; and the end time of the completion latency is when the first frame is displayed on the screen after the application is started. &gt; The latency is different from what users perceive. &gt; - Application startup latency data can be collected in the following scenarios: tapping an application icon on the home screen, &gt; tapping an application icon on the dock bar, and tapping an application icon in the application center. &gt; - During a test, only the first startup latency of the specified application is collected. &gt; 4. Description of collecting the page switching latency data (**PAGE_SWITCH_COMPLETE_TIME**): &gt; - The page switching latency calculation is affected by the system log reporting. The start time is when the tap event is reported, &gt; and the end time is when the first frame is displayed on the screen after the page switching, &gt; which is different from what users perceive. &gt; - Page switching latency data can be collected in the **Router** and **Navigation** components. &gt; - During a test, only the first page switching latency in the specified application is collected. &gt; 5. Description of collecting the list scrolling frame rate (**LIST_SWIPE_FPS**): &gt; - **LIST_SWIPE_FPS**: The number of frames rendered and updated on the screen per second when the list is scrolled. &gt; - Supported scenarios: list scrolling of the **List**, **Grid**, **Scroll**, and **WaterFlow** components in the ArkUI subsystem. &gt; - During a test, only the first list scrolling frame rate in the specified application is collected. |

