# PerfMeasureResult

表示性能指标对应的测量结果数据。

**Since:** 20

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy,PerfMetric,PerfTest,PerfMeasureResult } from '@kit.TestKit';
```

## average

```TypeScript
readonly average: double
```

每轮测量数据的平均值（不包含值 **-1**）。

**Type:** double

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

## roundValues

```TypeScript
readonly roundValues: Array<double>
```

被测性能指标每轮的测量数据值。如果数据采集失败，则返回 **-1**。

**Type:** Array<double>

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

## metric

```TypeScript
readonly metric: PerfMetric
```

待测试的性能指标。

**Type:** PerfMetric

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

## maximum

```TypeScript
readonly maximum: double
```

每轮测量数据的最大值（不包含值 **-1**）。

**Type:** double

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

## minimum

```TypeScript
readonly minimum: double
```

每轮测量数据的最小值（不包含值 **-1**）。

**Type:** double

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

