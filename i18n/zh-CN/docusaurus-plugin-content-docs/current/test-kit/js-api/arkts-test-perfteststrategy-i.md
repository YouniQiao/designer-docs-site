# PerfTestStrategy

表示性能测试策略。 > **说明：** > > **actionCode** 和 **resetCode** 属性的入参类型为 **Callback\<boolean>**。 需要在代码段中调用该回调以通知框架代码段执行完成， 否则代码段执行将超时。 > 回调参数为 **Boolean** 类型。 值 **true** 表示代码段执行符合预期，**false** 表示不符合预期。

**起始版本：** 20

**系统能力：** SystemCapability.Test.PerfTest

## actionCode

```TypeScript
actionCode: Callback<Callback<boolean>>
```

用于性能测试的代码段。 actionCode 的入参类型为 {@link Callback<boolean>}。由于 actionCode 可定义为异步函数， 开发者需要在 actionCode 执行完成时调用该回调函数， 以帮助 PerfTest 识别 actionCode 执行完成的时机。 例如，actionCode 的入参回调函数定义为 "(finish: Callback<boolean>)"。 当 actionCode 执行完成时，应调用 "finish(true)"，值 true 表示 actionCode 执行成功。 当发生异常时，应调用 "finish(false)"，值 false 表示 actionCode 执行失败。

**类型：** Callback<Callback<boolean>>

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## bundleName

```TypeScript
bundleName?: string
```

待测试应用的包名。 默认值为 ""。框架将测试当前应用的性能数据。

**类型：** string

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## iterations

```TypeScript
iterations?: number
```

测试迭代次数。默认值为 5。

**类型：** number

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## metrics

```TypeScript
metrics: Array<PerfMetric>
```

待采集的性能指标列表。

**类型：** Array<PerfMetric>

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## resetCode

```TypeScript
resetCode?: Callback<Callback<boolean>>
```

{@link actionCode} 完成后用于重置环境的代码段。默认值为空。 该执行期间不进行数据采集。 resetCode 的入参类型为 {@link Callback<boolean>}。由于 resetCode 可定义为异步函数， 开发者需要在 resetCode 执行完成时调用该回调函数， 以帮助 PerfTest 识别 resetCode 执行完成的时机。 例如，resetCode 的入参回调函数定义为 "(finish: Callback<boolean>)"。 当 resetCode 执行完成时，应调用 "finish(true)"，值 true 表示 resetCode 执行成功。 当发生异常时，应调用 "finish(false)"，值 false 表示 resetCode 执行失败。

**类型：** Callback<Callback<boolean>>

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## timeout

```TypeScript
timeout?: number
```

单次执行代码段（{@link actionCode} 或 {@link resetCode}）的超时时间。 默认值为 10000 毫秒。

**类型：** number

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

