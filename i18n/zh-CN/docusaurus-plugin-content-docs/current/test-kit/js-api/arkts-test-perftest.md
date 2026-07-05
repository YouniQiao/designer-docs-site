# @ohos.test.PerfTest

## 导入模块

```TypeScript
import { PerfTestStrategy,PerfMetric,PerfTest,PerfMeasureResult } from '@kit.TestKit';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [PerfTest](arkts-perftest-c.md) | 表示白盒性能测试框架的通用入口。 提供测试任务创建、测试代码段执行、数据采集和测量结果获取等能力。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [PerfMeasureResult](arkts-perfmeasureresult-i.md) | 表示性能指标对应的测量结果数据。 |
| [PerfTestStrategy](arkts-perfteststrategy-i.md) | 表示性能测试策略。 > **说明：** > > **actionCode** 和 **resetCode** 属性的入参类型为 **Callback\<boolean>**。 需要在代码段中调用该回调以通知框架代码段执行完成， 否则代码段执行将超时。 > 回调参数为 **Boolean** 类型。 值 **true** 表示代码段执行符合预期，**false** 表示不符合预期。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PerfMetric](arkts-perfmetric-e.md) | 表示框架可采集的性能指标。 > **说明：** > > 1. 本枚举中各指标采集的是指定应用进程的性能数据，而非系统级性能数据。 > 2. CPU 数据（**CPU_LOAD** / **CPU_USAGE**）和内存数据（**MEMORY_RSS** / **MEMORY_PSS**）采集说明： > - 测试过程中会在代码段执行前后分别采集指定应用进程的 CPU 和内存数据，因此需要确保被测应用进程在测试期间存在。 > 3. 应用启动时延数据（**APP_START_RESPONSE_TIME** / **APP_START_COMPLETE_TIME**）采集说明： > - 应用启动时延数据受系统日志打点上报的影响。起始时间为点击事件上报的时刻， > 响应时延的结束时间为点击后首帧上屏的时刻， > 完成时延的结束时间为应用启动后首帧上屏的时刻。 > 该时延与用户实际感知的时延存在差异。 > - 应用启动时延数据可在以下场景采集：点击桌面应用图标、点击任务栏应用图标、点击应用中心应用图标。 > - 一次测试中仅采集指定应用的首次启动时延。 > 4. 页面切换时延数据（**PAGE_SWITCH_COMPLETE_TIME**）采集说明： > - 页面切换时延的计算受系统日志打点上报的影响。起始时间为点击事件上报的时刻， > 结束时间为页面切换后首帧上屏的时刻， > 与用户实际感知的时延存在差异。 > - 页面切换时延数据可在 **Router** 和 **Navigation** 组件中采集。 > - 一次测试中仅采集指定应用的首次页面切换时延。 > 5. 列表滑动帧率（**LIST_SWIPE_FPS**）采集说明： > - **LIST_SWIPE_FPS**：列表滑动时每秒在屏幕上渲染和更新的帧数。 > - 支持的场景：ArkUI 子系统中 **List**、**Grid**、**Scroll** 和 **WaterFlow** 组件的列表滚动。 > - 一次测试中仅采集指定应用的首次列表滑动帧率。 |

