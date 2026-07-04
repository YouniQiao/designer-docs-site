# PerfMeasureResult

表示性能指标对应的测量结果数据。

**起始版本：** 20

**系统能力：** SystemCapability.Test.PerfTest

## average

```TypeScript
readonly average: number
```

每轮测量数据的平均值（不包含值 **-1**）。

**类型：** number

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## maximum

```TypeScript
readonly maximum: number
```

每轮测量数据的最大值（不包含值 **-1**）。

**类型：** number

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## metric

```TypeScript
readonly metric: PerfMetric
```

待测试的性能指标。

**类型：** PerfMetric

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## minimum

```TypeScript
readonly minimum: number
```

每轮测量数据的最小值（不包含值 **-1**）。

**类型：** number

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## roundValues

```TypeScript
readonly roundValues: Array<number>
```

被测性能指标每轮的测量数据值。如果数据采集失败，则返回 **-1**。

**类型：** Array<number>

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

