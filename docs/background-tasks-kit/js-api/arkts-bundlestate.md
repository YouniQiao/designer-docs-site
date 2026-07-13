# @ohos.bundleState (Device Usage Statistics)

This module provides APIs for collecting statistics on device usage.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## Modules to Import

```TypeScript
import { bundleState } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [isIdleState](arkts-backgroundtasks-isidlestate-f.md#isidlestate-1) | Checks whether the application specified by **bundleName** is in the idle state. A third-party application can onlycheck the idle state of itself. A system application can check the idle state of other applications only when it isgranted with the ohos.permission.BUNDLE_ACTIVE_INFO permission. This API uses an asynchronous callback to return the result. |
| [isIdleState](arkts-backgroundtasks-isidlestate-f.md#isidlestate-2) | Checks whether the application specified by **bundleName** is in the idle state. A third-party application can onlycheck the idle state of itself. A system application can check the idle state of other applications only when it isgranted with the ohos.permission.BUNDLE_ACTIVE_INFO permission. This API uses a promise to return the result. |
| [queryAppUsagePriorityGroup](arkts-backgroundtasks-queryappusageprioritygroup-f.md#queryappusageprioritygroup-1) | Queries the usage priority group of the calling application.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppUsagePriorityGroup](arkts-backgroundtasks-queryappusageprioritygroup-f.md#queryappusageprioritygroup-2) | Queries the usage priority group of the calling application.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryCurrentBundleActiveStates](arkts-backgroundtasks-querycurrentbundleactivestates-f.md#querycurrentbundleactivestates-1) | Queries state data of the current bundle within a specified period. |
| [queryCurrentBundleActiveStates](arkts-backgroundtasks-querycurrentbundleactivestates-f.md#querycurrentbundleactivestates-2) | Queries state data of the current bundle within a specified period. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [queryBundleActiveStates](arkts-backgroundtasks-querybundleactivestates-f-sys.md#querybundleactivestates-1) | Queries state data of all bundles within a specified period identified by the start and end time. |
| [queryBundleActiveStates](arkts-backgroundtasks-querybundleactivestates-f-sys.md#querybundleactivestates-2) | Queries state data of all bundles within a specified period identified by the start and end time. |
| [queryBundleStateInfoByInterval](arkts-backgroundtasks-querybundlestateinfobyinterval-f-sys.md#querybundlestateinfobyinterval-1) | Queries usage information about each bundle within a specified period at a specified interval. |
| [queryBundleStateInfoByInterval](arkts-backgroundtasks-querybundlestateinfobyinterval-f-sys.md#querybundlestateinfobyinterval-2) | Queries usage information about each bundle within a specified period at a specified interval. |
| [queryBundleStateInfos](arkts-backgroundtasks-querybundlestateinfos-f-sys.md#querybundlestateinfos-1) | Queries usage information about each bundle within a specified period.This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| [queryBundleStateInfos](arkts-backgroundtasks-querybundlestateinfos-f-sys.md#querybundlestateinfos-2) | Queries usage information about each bundle within a specified period.This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BundleActiveInfoResponse](arkts-backgroundtasks-bundleactiveinforesponse-i.md) |  |
| [BundleActiveState](arkts-backgroundtasks-bundleactivestate-i.md) |  |
| [BundleStateInfo](arkts-backgroundtasks-bundlestateinfo-i.md) |  |

### Enums

| Name | Description |
| --- | --- |
| [IntervalType](arkts-backgroundtasks-intervaltype-e.md) | Declares interval type. |

