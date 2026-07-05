# @ohos.hiviewdfx.jsLeakWatcher

This module provides the capability of monitoring whether JS objects are leaked.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiChecker

## Modules to Import

```TypeScript
import { jsLeakWatcher } from '@ohos.hiviewdfx.jsLeakWatcher';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [check](arkts-performanceanalysis-check-f.md#check-1) | Obtains the list of objects that are leaked and registered using **jsLeakWatcher.watch()**. Objects that are not reclaimed after GC is triggered are marked as leaked. |
| [dump](arkts-performanceanalysis-dump-f.md#dump-1) | Dumps the list of leaked objects and VM memory snapshot. |
| [enable](arkts-performanceanalysis-enable-f.md#enable-1) | Enables the detection for JS object leaks. This function is disabled by default. |
| [enableLeakWatcher](arkts-performanceanalysis-enableleakwatcher-f.md#enableleakwatcher-1) | Enables the detection for JS object leaks. This function is disabled by default. This API can detect the JS object memory leak, which is simpler than the method that needs to call the **enable**, **watch**, **check**, and **dump** functions. If a memory leak occurs, the leaked file is returned through the callback. |
| [enableLeakWatcher](arkts-performanceanalysis-enableleakwatcher-f.md#enableleakwatcher-2) | Enables the ArkTS object leak detection. This API can detect memory leaks of ArkTS objects with a single call, which is simpler than the previous method that requires four functions (**enable**, **watch**, **check**, and **dump**). You can use the **configs** parameter to customize the properties of monitoring items, greatly improving the leak detection performance. |
| [watch](arkts-performanceanalysis-watch-f.md#watch-1) | Registers the object to be checked. |

### Interfaces

| Name | Description |
| --- | --- |
| [LeakWatcherConfig](arkts-performanceanalysis-leakwatcherconfig-i.md) | Defines the **LeakWatcherConfig** object, which contains multiple configurable properties for memory leak monitoring. |

### Enums

| Name | Description |
| --- | --- |
| [MonitorObjectType](arkts-performanceanalysis-monitorobjecttype-e.md) | Enumerates the types of component objects to be monitored. |

