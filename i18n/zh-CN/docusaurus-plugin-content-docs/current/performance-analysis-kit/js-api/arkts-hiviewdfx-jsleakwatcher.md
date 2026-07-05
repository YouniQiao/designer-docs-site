# @ohos.hiviewdfx.jsLeakWatcher

This module provides the capability of monitoring whether JS objects are leaked.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiChecker

## 导入模块

```TypeScript
import { jsLeakWatcher } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [check](arkts-jsleakwatcher-check-f.md#check-1) | Obtains the list of objects that are leaked and registered using **jsLeakWatcher.watch()**. Objects that are not reclaimed after GC is triggered are marked as leaked. |
| [dump](arkts-jsleakwatcher-dump-f.md#dump-1) | Dumps the list of leaked objects and VM memory snapshot. |
| [enable](arkts-jsleakwatcher-enable-f.md#enable-1) | Enables the detection for JS object leaks. This function is disabled by default. |
| [enableLeakWatcher](arkts-jsleakwatcher-enableleakwatcher-f.md#enableLeakWatcher-1) | Enables the detection for JS object leaks. This function is disabled by default. This API can detect the JS object memory leak, which is simpler than the method that needs to call the **enable**, **watch**, **check**, and **dump** functions. If a memory leak occurs, the leaked file is returned through the callback. |
| [enableLeakWatcher](arkts-jsleakwatcher-enableleakwatcher-f.md#enableLeakWatcher-2) | Enables the ArkTS object leak detection. This API can detect memory leaks of ArkTS objects with a single call, which is simpler than the previous method that requires four functions (**enable**, **watch**, **check**, and **dump**). You can use the **configs** parameter to customize the properties of monitoring items, greatly improving the leak detection performance. |
| [watch](arkts-jsleakwatcher-watch-f.md#watch-1) | Registers the object to be checked. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [LeakWatcherConfig](arkts-jsleakwatcher-leakwatcherconfig-i.md) | Defines the **LeakWatcherConfig** object, which contains multiple configurable properties for memory leak monitoring. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [MonitorObjectType](arkts-jsleakwatcher-monitorobjecttype-e.md) | Enumerates the types of component objects to be monitored. |

