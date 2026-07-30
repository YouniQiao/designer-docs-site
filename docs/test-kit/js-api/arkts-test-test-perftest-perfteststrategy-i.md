# PerfTestStrategy

Represents the performance test strategy.
> **NOTE**  
>  
> The input parameter type of the **actionCode** and **resetCode** attributes is the **Callback\<boolean>**.You need to call this callback in the code segment to notify the framework that the code segment execution is complete.Otherwise, the code segment execution times out.  
> The callback parameter is of the **Boolean** type.The value **true** indicates that the code segment execution meets the expectation, and false indicates the opposite.

**Since:** 20

<!--Device-unnamed-declare interface PerfTestStrategy--><!--Device-unnamed-declare interface PerfTestStrategy-End-->

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy, PerfMetric, PerfTest, PerfMeasureResult } from '@kit.TestKit';
```

## actionCode

```TypeScript
actionCode: Callback<Callback<boolean>>
```

Code segment for performance testing.The input parameter type of actionCode is {@link Callback<boolean>}. As actionCode can be defined as asynchronous function,developers need to invoke this callback function when the execution of actionCode is complete,to help PerfTest identify the time when the execution of the actionCode is complete.For example, the input parameter callback function of actionCode is defined as "(finish: Callback<boolean>)".When actionCode is executed completely, "finish(true)" should be invoked, the value true indicates actionCode is successfully executed.When an exception occurs, "finish(false)" should be invoked, the value false indicates actionCode is unsuccessfully executed.

**Type:** Callback&lt;Callback&lt;boolean&gt;&gt;

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-actionCode: Callback<Callback<boolean>>--><!--Device-PerfTestStrategy-actionCode: Callback<Callback<boolean>>-End-->

**System capability:** SystemCapability.Test.PerfTest

## bundleName

```TypeScript
bundleName?: string
```

Bundle name of the application to test.The default value is "". The framework tests the performance data of the current application.

**Type:** string

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-bundleName?: string--><!--Device-PerfTestStrategy-bundleName?: string-End-->

**System capability:** SystemCapability.Test.PerfTest

## iterations

```TypeScript
iterations?: number
```

Number of test iterations. The default value is 5.

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-iterations?: int--><!--Device-PerfTestStrategy-iterations?: int-End-->

**System capability:** SystemCapability.Test.PerfTest

## metrics

```TypeScript
metrics: Array<PerfMetric>
```

List of performance metrics to be collected.

**Type:** Array&lt;PerfMetric&gt;

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-metrics: Array<PerfMetric>--><!--Device-PerfTestStrategy-metrics: Array<PerfMetric>-End-->

**System capability:** SystemCapability.Test.PerfTest

## resetCode

```TypeScript
resetCode?: Callback<Callback<boolean>>
```

Code segment for resetting the environment after the {@link actionCode}. is complete. The default value is empty.Data collection is not performed during this execution.The input parameter type of resetCode is {@link Callback<boolean>}. As resetCode can be defined as asynchronous function,developers need to invoke this callback function when the execution of resetCode is complete,to help PerfTest identify the time when the execution of the resetCode is complete.For example, the input parameter callback function of resetCode is defined as "(finish: Callback<boolean>)".When resetCode is executed completely, "finish(true)" should be invoked, the value true indicates resetCode is successfully executed.When an exception occurs, "finish(false)" should be invoked, the value false indicates resetCode is unsuccessfully executed.

**Type:** Callback&lt;Callback&lt;boolean&gt;&gt;

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-resetCode?: Callback<Callback<boolean>>--><!--Device-PerfTestStrategy-resetCode?: Callback<Callback<boolean>>-End-->

**System capability:** SystemCapability.Test.PerfTest

## timeout

```TypeScript
timeout?: number
```

Timeout interval for executing a code segment ({@link actionCode} or {@link resetCode}) at a time.The default value is 10,000 ms.

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTestStrategy-timeout?: int--><!--Device-PerfTestStrategy-timeout?: int-End-->

**System capability:** SystemCapability.Test.PerfTest

