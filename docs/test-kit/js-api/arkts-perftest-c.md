# PerfTest

表示白盒性能测试框架的通用入口。 提供测试任务创建、测试代码段执行、数据采集和测量结果获取等能力。

**Since:** 20

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy,PerfMetric,PerfTest,PerfMeasureResult } from '@kit.TestKit';
```

## create

```TypeScript
static create(strategy: PerfTestStrategy): PerfTest
```

创建 {@link PerfTest} 对象并返回创建的对象。该 API 为静态 API。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | PerfTestStrategy | Yes | 性能测试策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| PerfTest | 创建的 {@link PerfTest} 对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32400001 | 初始化失败。 |
| 32400002 | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| 32400003 | 参数校验失败。 |
| 32400007 | 该接口不支持并发调用。  @static |

**Example**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => { // Define the test code segment. The input parameter type is Callback<boolean> and the name is finish.
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true); // Call the finish callback to notify that the code segment is executed successfully and as expected.
  }
  let resetCode = async (finish: Callback<boolean>) => { // Define the code segment for resetting the environment after the test ends.
    num = 0;
    finish(true);
  }
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode,
    resetCode: resetCode,
    timeout: 30000,
    iterations: 10,
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // Construct a PerfTest object and create a test task.
}

```

## destroy

```TypeScript
destroy(): void
```

销毁 {@link PerfTest} 对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32400002 | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| 32400007 | 该接口不支持并发调用。 |

**Example**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true);
  }
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy);
  await perfTest.run();
  perfTest.destroy(); // Destroy the PerfTest object.
}

```

## getMeasureResult

```TypeScript
getMeasureResult(metric: PerfMetric): PerfMeasureResult
```

获取指定性能指标的测量数据。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metric | PerfMetric | Yes | 性能指标。 |

**Return value:**

| Type | Description |
| --- | --- |
| PerfMeasureResult | - 性能指标对应的测量结果数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32400002 | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| 32400003 | 参数校验失败。 |
| 32400006 | 获取测量结果失败。 |
| 32400007 | 该接口不支持并发调用。 |

**Example**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true);
  }
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy);
  await perfTest.run();
  let res = perfTest.getMeasureResult(PerfMetric.DURATION); // Obtain the measurement data of a specified performance metric.
}

```

## run

```TypeScript
run(): Promise<void>
```

运行性能测试，迭代执行测试代码段并采集性能数据。 该 API 使用 Promise 返回结果。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.PerfTest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 32400002 | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| 32400004 | 执行回调失败。可能原因：1. 回调中抛出异常。2. 回调执行超时。 |
| 32400005 | 采集指标数据失败。 |
| 32400007 | 该接口不支持并发调用。 |

**Example**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true);
  }
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy);
  await perfTest.run(); // Run the performance test.
}

```

