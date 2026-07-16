# @ohos.resourceschedule.usageStatistics

Provides methods for managing bundle usage statistics,
including the methods for querying bundle usage information and state data.

You can use the methods defined in this class to query
the usage history and states of bundles in a specified period.
The system stores the query result in a {@link BundleStatsInfo} instance and
then returns it to you.

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [isIdleState](arkts-backgroundtasks-isidlestate-f-sys.md#isidlestate-1) | Checks whether the application with a specified bundle name is in the idle state. |
| [isIdleState](arkts-backgroundtasks-isidlestate-f-sys.md#isidlestate-2) | Checks whether the application with a specified bundle name is in the idle state. |
| [isIdleStateSync](arkts-backgroundtasks-isidlestatesync-f-sys.md#isidlestatesync-1) | Checks whether the application with a specified bundle name is in the idle state. |
| [queryAppGroup](arkts-backgroundtasks-queryappgroup-f-sys.md#queryappgroup-1) | Queries the app group of the calling application.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppGroup](arkts-backgroundtasks-queryappgroup-f-sys.md#queryappgroup-2) | Queries the app group of the calling application.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppGroup](arkts-backgroundtasks-queryappgroup-f-sys.md#queryappgroup-3) | Queries the usage priority group by bundleName.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppGroup](arkts-backgroundtasks-queryappgroup-f-sys.md#queryappgroup-4) | Queries the usage priority group by bundleName.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppGroupSync](arkts-backgroundtasks-queryappgroupsync-f-sys.md#queryappgroupsync-1) | Queries the app group of the calling application.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppGroupSync](arkts-backgroundtasks-queryappgroupsync-f-sys.md#queryappgroupsync-2) | Queries the usage priority group by bundleName.The priority defined in a priority group restricts the resource usage of an application,for example, restricting the running of background tasks. |
| [queryAppStatsInfos](arkts-backgroundtasks-queryappstatsinfos-f-sys.md#queryappstatsinfos-1) | Queries usage information about each application within a specified period.This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| [queryBundleEvents](arkts-backgroundtasks-querybundleevents-f-sys.md#querybundleevents-1) | Queries state data of all bundles within a specified period identified by the start and end time. |
| [queryBundleEvents](arkts-backgroundtasks-querybundleevents-f-sys.md#querybundleevents-2) | Queries state data of all bundles within a specified period identified by the start and end time. |
| [queryBundleEvents](arkts-backgroundtasks-querybundleevents-f-sys.md#querybundleevents-3) | Queries state data of all bundles within a specified period identified by the start and end time. |
| [queryBundleStatsInfoByInterval](arkts-backgroundtasks-querybundlestatsinfobyinterval-f-sys.md#querybundlestatsinfobyinterval-1) | Queries usage information about each bundle within a specified period at a specified interval. |
| [queryBundleStatsInfoByInterval](arkts-backgroundtasks-querybundlestatsinfobyinterval-f-sys.md#querybundlestatsinfobyinterval-2) | Queries usage information about each bundle within a specified period at a specified interval. |
| [queryBundleStatsInfos](arkts-backgroundtasks-querybundlestatsinfos-f-sys.md#querybundlestatsinfos-1) | Queries usage information about each bundle within a specified period.This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| [queryBundleStatsInfos](arkts-backgroundtasks-querybundlestatsinfos-f-sys.md#querybundlestatsinfos-2) | Queries usage information about each bundle within a specified period.This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| [queryCurrentBundleEvents](arkts-backgroundtasks-querycurrentbundleevents-f-sys.md#querycurrentbundleevents-1) | Queries state data of the current bundle within a specified period. |
| [queryCurrentBundleEvents](arkts-backgroundtasks-querycurrentbundleevents-f-sys.md#querycurrentbundleevents-2) | Queries state data of the current bundle within a specified period. |
| [queryCurrentBundleEvents](arkts-backgroundtasks-querycurrentbundleevents-f-sys.md#querycurrentbundleevents-3) | Queries state data of the current bundle within a specified period. |
| [queryDeviceEventStats](arkts-backgroundtasks-querydeviceeventstats-f-sys.md#querydeviceeventstats-1) | Queries device event states data within a specified period identified by the start and end time. |
| [queryDeviceEventStats](arkts-backgroundtasks-querydeviceeventstats-f-sys.md#querydeviceeventstats-2) | Queries device event states data within a specified period identified by the start and end time. |
| [queryLastUseTime](arkts-backgroundtasks-querylastusetime-f-sys.md#querylastusetime-1) | Queries the last usage timestamp by bundleName and app index. |
| [queryModuleUsageRecords](arkts-backgroundtasks-querymoduleusagerecords-f-sys.md#querymoduleusagerecords-1) | Queries recently module usage records with maxNum. |
| [queryModuleUsageRecords](arkts-backgroundtasks-querymoduleusagerecords-f-sys.md#querymoduleusagerecords-2) | Queries recently module usage records with maxNum. |
| [queryModuleUsageRecords](arkts-backgroundtasks-querymoduleusagerecords-f-sys.md#querymoduleusagerecords-3) | Queries recently module usage records. |
| [queryModuleUsageRecords](arkts-backgroundtasks-querymoduleusagerecords-f-sys.md#querymoduleusagerecords-4) | Queries recently module usage records. |
| [queryNotificationEventStats](arkts-backgroundtasks-querynotificationeventstats-f-sys.md#querynotificationeventstats-1) | Queries app notification number within a specified period identified by the start and end time. |
| [queryNotificationEventStats](arkts-backgroundtasks-querynotificationeventstats-f-sys.md#querynotificationeventstats-2) | Queries app notification number within a specified period identified by the start and end time. |
| [registerAppGroupCallBack](arkts-backgroundtasks-registerappgroupcallback-f-sys.md#registerappgroupcallback-1) | Register appGroup change callback to service. |
| [registerAppGroupCallBack](arkts-backgroundtasks-registerappgroupcallback-f-sys.md#registerappgroupcallback-2) | Register appGroup change callback to service. |
| [setAppGroup](arkts-backgroundtasks-setappgroup-f-sys.md#setappgroup-1) | Set app group by bundleName. |
| [setAppGroup](arkts-backgroundtasks-setappgroup-f-sys.md#setappgroup-2) | Set app group by bundleName. |
| [unregisterAppGroupCallBack](arkts-backgroundtasks-unregisterappgroupcallback-f-sys.md#unregisterappgroupcallback-1) | Unregister appGroup change callback from service. |
| [unregisterAppGroupCallBack](arkts-backgroundtasks-unregisterappgroupcallback-f-sys.md#unregisterappgroupcallback-2) | Unregister appGroup change callback from service. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AppGroupCallbackInfo](arkts-backgroundtasks-appgroupcallbackinfo-i-sys.md) |  |
| [BundleEvents](arkts-backgroundtasks-bundleevents-i-sys.md) |  |
| [BundleStatsInfo](arkts-backgroundtasks-bundlestatsinfo-i-sys.md) |  |
| [DeviceEventStats](arkts-backgroundtasks-deviceeventstats-i-sys.md) |  |
| [HapFormInfo](arkts-backgroundtasks-hapforminfo-i-sys.md) |  |
| [HapModuleInfo](arkts-backgroundtasks-hapmoduleinfo-i-sys.md) |  |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [GroupType](arkts-backgroundtasks-grouptype-e-sys.md) | Declares group type. |
| [IntervalType](arkts-backgroundtasks-intervaltype-e-sys.md) | Declares interval type. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AppStatsMap](arkts-backgroundtasks-appstatsmap-t-sys.md) |  |
| [BundleStatsMap](arkts-backgroundtasks-bundlestatsmap-t-sys.md) |  |
<!--DelEnd-->

