# PerfMeasureResult

Represents the measurement result data corresponding to the performance metric.

**Since:** 20

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy, PerfMetric, PerfTest, PerfMeasureResult } from '@ohos.test.PerfTest';
```

## average

```TypeScript
readonly average: number
```

Average value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.PerfTest

## maximum

```TypeScript
readonly maximum: number
```

Maximum value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.PerfTest

## metric

```TypeScript
readonly metric: PerfMetric
```

Performance metric to test.

**Type:** PerfMetric

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.PerfTest

## minimum

```TypeScript
readonly minimum: number
```

Minimum value of the measurement data of each round (the value **-1** is excluded).

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.PerfTest

## roundValues

```TypeScript
readonly roundValues: Array<number>
```

Measurement data value of each round of the tested performance metric. If data collection fails, the value **-1** is returned.

**Type:** Array<number>

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Test.PerfTest

