# PerfTest

表示白盒性能测试框架的通用入口。 提供测试任务创建、测试代码段执行、数据采集和测量结果获取等能力。

**起始版本：** 20

**系统能力：** SystemCapability.Test.PerfTest

## create

```TypeScript
static create(strategy: PerfTestStrategy): PerfTest
```

创建 {@link PerfTest} 对象并返回创建的对象。该 API 为静态 API。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategy | PerfTestStrategy | 是 | 性能测试策略。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PerfTest | 创建的 {@link PerfTest} 对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [32400001](../errorcode-perftest.md#32400001-初始化失败) | 初始化失败。 |
| [32400002](../errorcode-perftest.md#32400002-内部错误) | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| [32400003](../errorcode-perftest.md#32400003-参数校验失败) | 参数校验失败。 |
| [32400007](../errorcode-perftest.md#32400007-接口不支持并行调用) | 该接口不支持并发调用。@static |

**示例：**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => { // 定义测试代码段，入参类型'Callback<boolean>'，命名为finish
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true); // 调用finish回调函数，通知代码段执行结束，且执行符合预期
  };
  let resetCode = async (finish: Callback<boolean>) => { // 定义测试结束环境重置代码段
    num = 0;
    finish(true);
  };
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode,
    resetCode: resetCode,
    timeout: 30000,
    iterations: 10
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 构造一个PerfTest对象，创建测试任务
}

```

## destroy

```TypeScript
destroy(): void
```

销毁 {@link PerfTest} 对象。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-内部错误) | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| [32400007](../errorcode-perftest.md#32400007-接口不支持并行调用) | 该接口不支持并发调用。 |

**示例：**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true); // 调用finish回调函数，通知代码段执行结束，且执行符合预期
  };
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 构造一个PerfTest对象，创建测试任务
  await perfTest.run();
  perfTest.destroy(); // 销毁PerfTest对象
}

```

## getMeasureResult

```TypeScript
getMeasureResult(metric: PerfMetric): PerfMeasureResult
```

获取指定性能指标的测量数据。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| metric | PerfMetric | 是 | 性能指标。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PerfMeasureResult | - 性能指标对应的测量结果数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-内部错误) | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| [32400003](../errorcode-perftest.md#32400003-参数校验失败) | 参数校验失败。 |
| [32400006](../errorcode-perftest.md#32400006-无法获取性能数据) | 获取测量结果失败。 |
| [32400007](../errorcode-perftest.md#32400007-接口不支持并行调用) | 该接口不支持并发调用。 |

**示例：**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true); // 调用finish回调函数，通知代码段执行结束，且执行符合预期
  };
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 构造一个PerfTest对象，创建测试任务
  await perfTest.run();
  let res = perfTest.getMeasureResult(PerfMetric.DURATION); // 获取指定性能指标的测量数据
}

```

## run

```TypeScript
run(): Promise<void>
```

运行性能测试，迭代执行测试代码段并采集性能数据。 该 API 使用 Promise 返回结果。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | @throws { BusinessError } 32400002 - 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [32400002](../errorcode-perftest.md#32400002-内部错误) | 内部错误。可能原因：1. IPC 连接失败。2. 对象不存在。 |
| [32400004](../errorcode-perftest.md#32400004-执行回调函数失败) | 执行回调失败。可能原因：1. 回调中抛出异常。2. 回调执行超时。 |
| [32400005](../errorcode-perftest.md#32400005-采集性能数据失败) | 采集指标数据失败。 |
| [32400007](../errorcode-perftest.md#32400007-接口不支持并行调用) | 该接口不支持并发调用。 |

**示例：**

```TypeScript
import { PerfMetric, PerfTest, PerfTestStrategy } from '@kit.TestKit';

async function demo() {
  let metrics: Array<PerfMetric> = [PerfMetric.DURATION];
  let num = 0;
  let actionCode = async (finish: Callback<boolean>) => {
    for (let index = 0; index < 10000; index++) {
      num++;
    }
    finish(true); // 调用finish回调函数，通知代码段执行结束，且执行符合预期
  };
  let perfTestStrategy: PerfTestStrategy = {
    metrics: metrics,
    actionCode: actionCode
  };
  let perfTest: PerfTest = PerfTest.create(perfTestStrategy); // 构造一个PerfTest对象，创建测试任务
  await perfTest.run(); // 运行性能测试
}

```

