# PerfTest

Represents the general entry of the white-box performance test framework.It provides capabilities such as test task creation, test code segment execution, data collection, and measurement result obtaining.

**Since:** 20

<!--Device-unnamed-declare class PerfTest--><!--Device-unnamed-declare class PerfTest-End-->

**System capability:** SystemCapability.Test.PerfTest

## Modules to Import

```TypeScript
import { PerfTestStrategy, PerfMetric, PerfTest, PerfMeasureResult } from '@kit.TestKit';
```

## create

```TypeScript
static create(strategy: PerfTestStrategy): PerfTest
```

Creates a {@link PerfTest} object and returns the object created. This API is a static API.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTest-static create(strategy: PerfTestStrategy): PerfTest--><!--Device-PerfTest-static create(strategy: PerfTestStrategy): PerfTest-End-->

**System capability:** SystemCapability.Test.PerfTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | [PerfTestStrategy](arkts-test-test-perftest-perfteststrategy-i.md) | Yes | Performance test strategy. |

**Return value:**

| Type | Description |
| --- | --- |
| [PerfTest](arkts-test-test-perftest-perftest-c.md) | {@link PerfTest} object created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [32400001](../errorcode-perftest.md#32400001-initialization-failed) | Initialization failed. |
| [32400002](../errorcode-perftest.md#32400002-internal-error) | Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist. |
| [32400003](../errorcode-perftest.md#32400003-parameter-verification-failed) | Parameter verification failed. |
| [32400007](../errorcode-perftest.md#32400007-api-does-not-support-concurrent-calls) | The API does not support concurrent calls.@static |

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

Destroys the {@link PerfTest} object.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTest-destroy(): void--><!--Device-PerfTest-destroy(): void-End-->

**System capability:** SystemCapability.Test.PerfTest

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-internal-error) | Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist. |
| [32400007](../errorcode-perftest.md#32400007-api-does-not-support-concurrent-calls) | The API does not support concurrent calls. |

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

Obtains the measurement data of a specified performance metric.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTest-getMeasureResult(metric: PerfMetric): PerfMeasureResult--><!--Device-PerfTest-getMeasureResult(metric: PerfMetric): PerfMeasureResult-End-->

**System capability:** SystemCapability.Test.PerfTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metric | [PerfMetric](arkts-test-test-perftest-perfmetric-e.md) | Yes | Performance metric. |

**Return value:**

| Type | Description |
| --- | --- |
| [PerfMeasureResult](arkts-test-test-perftest-perfmeasureresult-i.md) | - Measurement result data corresponding to the performance metric. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-internal-error) | Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist. |
| [32400003](../errorcode-perftest.md#32400003-parameter-verification-failed) | Parameter verification failed. |
| [32400006](../errorcode-perftest.md#32400006-failed-to-obtain-performance-data) | Failed to obtain the measurement result. |
| [32400007](../errorcode-perftest.md#32400007-api-does-not-support-concurrent-calls) | The API does not support concurrent calls. |

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

Runs a performance test, iteratively executes test code segments, and collects performance data.This API uses a promise to return the result.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PerfTest-run(): Promise<void>--><!--Device-PerfTest-run(): Promise<void>-End-->

**System capability:** SystemCapability.Test.PerfTest

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | @throws { BusinessError } 32400002 - Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-internal-error) | Internal error. Possible causes: 1. IPC connection failed. 2. The object does not exist. |
| [32400004](../errorcode-perftest.md#32400004-failed-to-execute-the-callback) | Failed to execute the callback. Possible causes: 1. An exception is thrown in the callback. 2. Callback execution timed out. |
| [32400005](../errorcode-perftest.md#32400005-failed-to-collect-performance-data) | Failed to collect metric data. |
| [32400007](../errorcode-perftest.md#32400007-api-does-not-support-concurrent-calls) | The API does not support concurrent calls.* |

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

