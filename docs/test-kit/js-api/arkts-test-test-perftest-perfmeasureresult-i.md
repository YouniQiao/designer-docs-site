# PerfMeasureResult

Represents the measurement result data corresponding to the performance metric.

**Since:** 20

<!--Device-unnamed-declare interface PerfMeasureResult--><!--Device-unnamed-declare interface PerfMeasureResult-End-->

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy, PerfMetric, PerfTest, PerfMeasureResult } from '@kit.TestKit';
```

## average

```TypeScript
readonly average: number
```

Average value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfMeasureResult-readonly average: double--><!--Device-PerfMeasureResult-readonly average: double-End-->

**System capability:** SystemCapability.Test.PerfTest

## maximum

```TypeScript
readonly maximum: number
```

Maximum value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfMeasureResult-readonly maximum: double--><!--Device-PerfMeasureResult-readonly maximum: double-End-->

**System capability:** SystemCapability.Test.PerfTest

## metric

```TypeScript
readonly metric: PerfMetric
```

Performance metric to test.

**Type:** PerfMetric

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfMeasureResult-readonly metric: PerfMetric--><!--Device-PerfMeasureResult-readonly metric: PerfMetric-End-->

**System capability:** SystemCapability.Test.PerfTest

## minimum

```TypeScript
readonly minimum: number
```

Minimum value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfMeasureResult-readonly minimum: double--><!--Device-PerfMeasureResult-readonly minimum: double-End-->

**System capability:** SystemCapability.Test.PerfTest

## roundValues

```TypeScript
readonly roundValues: Array<number>
```

Measurement data value of each round of the tested performance metric. If data collection fails, the value **-1** is returned.

**Type:** Array<number>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfMeasureResult-readonly roundValues: Array<double>--><!--Device-PerfMeasureResult-readonly roundValues: Array<double>-End-->

**System capability:** SystemCapability.Test.PerfTest

