# PerfMetric

表示框架可采集的性能指标。 > **说明：** > > 1. 本枚举中各指标采集的是指定应用进程的性能数据，而非系统级性能数据。 > 2. CPU 数据（**CPU_LOAD** / **CPU_USAGE**）和内存数据（**MEMORY_RSS** / **MEMORY_PSS**）采集说明： > - 测试过程中会在代码段执行前后分别采集指定应用进程的 CPU 和内存数据，因此需要确保被测应用进程在测试期间存在。 > 3. 应用启动时延数据（**APP_START_RESPONSE_TIME** / **APP_START_COMPLETE_TIME**）采集说明： > - 应用启动时延数据受系统日志打点上报的影响。起始时间为点击事件上报的时刻， > 响应时延的结束时间为点击后首帧上屏的时刻， > 完成时延的结束时间为应用启动后首帧上屏的时刻。 > 该时延与用户实际感知的时延存在差异。 > - 应用启动时延数据可在以下场景采集：点击桌面应用图标、点击任务栏应用图标、点击应用中心应用图标。 > - 一次测试中仅采集指定应用的首次启动时延。 > 4. 页面切换时延数据（**PAGE_SWITCH_COMPLETE_TIME**）采集说明： > - 页面切换时延的计算受系统日志打点上报的影响。起始时间为点击事件上报的时刻， > 结束时间为页面切换后首帧上屏的时刻， > 与用户实际感知的时延存在差异。 > - 页面切换时延数据可在 **Router** 和 **Navigation** 组件中采集。 > - 一次测试中仅采集指定应用的首次页面切换时延。 > 5. 列表滑动帧率（**LIST_SWIPE_FPS**）采集说明： > - **LIST_SWIPE_FPS**：列表滑动时每秒在屏幕上渲染和更新的帧数。 > - 支持的场景：ArkUI 子系统中 **List**、**Grid**、**Scroll** 和 **WaterFlow** 组件的列表滚动。 > - 一次测试中仅采集指定应用的首次列表滑动帧率。

**起始版本：** 20

**系统能力：** SystemCapability.Test.PerfTest

## DURATION

```TypeScript
DURATION = 0
```

代码段的执行时长，单位为毫秒。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## CPU_LOAD

```TypeScript
CPU_LOAD = 1
```

应用进程的 CPU 负载，单位为百分比。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## CPU_USAGE

```TypeScript
CPU_USAGE = 2
```

应用进程的 CPU 使用率，单位为百分比。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## MEMORY_RSS

```TypeScript
MEMORY_RSS = 3
```

代码段执行时应用进程占用的物理内存（包含共享库），单位为 KB。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## MEMORY_PSS

```TypeScript
MEMORY_PSS = 4
```

代码段执行时应用进程占用的物理内存（不包含共享库），单位为 KB。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## APP_START_RESPONSE_TIME

```TypeScript
APP_START_RESPONSE_TIME = 5
```

应用启动的响应时延，单位为毫秒。 说明： 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻， 响应时延的结束时间为系统响应点击后首帧上屏的时刻。 与端到端用户感知的时延存在差异。 2) 应用启动时延可在以下场景采集：点击桌面应用图标； 点击多任务中心应用；点击 Dock 栏应用图标； 点击应用中心应用图标。 3) 该指标不支持对当前应用的测试。 4) 测试过程中仅能采集指定应用首次启动的数据。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## APP_START_COMPLETE_TIME

```TypeScript
APP_START_COMPLETE_TIME = 6
```

应用启动的完成时延，单位为毫秒。 说明： 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻， 完成时延的结束时间为应用启动后首帧上屏的时刻。 与端到端用户感知的时延存在差异。 2) 应用启动时延可在以下场景采集：点击桌面应用图标； 点击多任务中心应用；点击 Dock 栏应用图标； 点击应用中心应用图标。 3) 该指标不支持对当前应用的测试。 4) 测试过程中仅能采集指定应用首次启动的数据。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## PAGE_SWITCH_COMPLETE_TIME

```TypeScript
PAGE_SWITCH_COMPLETE_TIME = 7
```

应用内页面切换的完成时延，单位为毫秒。 说明： 1) 时延计算受系统打点上报的限制。起始时间为点击事件上报的时刻， 完成时延的结束时间为页面切换后首帧上屏的时刻。 与端到端用户感知的时延存在差异。 2) 页面切换时延可在 Router 或 Navigation 组件的页面切换场景中采集。 3) 测试过程中仅能采集指定应用首次页面切换的数据。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

## LIST_SWIPE_FPS

```TypeScript
LIST_SWIPE_FPS = 8
```

应用内列表滑动帧率，单位为帧每秒（fps）。 说明： 1) 列表滑动帧率：指列表滑动时每秒实际渲染的帧数。 仅可采集 ArkUI 子系统中 List、Grid、Scroll 和 WaterFlow 滚动组件的滑动帧率。 2) 测试过程中仅能采集指定应用中组件首次滑动的数据。

**起始版本：** 20

**元服务API：** 从API版本20开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.PerfTest

