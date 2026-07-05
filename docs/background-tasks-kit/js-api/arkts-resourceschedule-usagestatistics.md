# @ohos.resourceschedule.usageStatistics

本模块提供设备使用信息统计能力，包括查询应用是否为常用应用、优先级分组、使用时长、系统事件（休眠、唤醒、解锁、锁屏）信息、应用事件（前台、后台、长时任务开始和结束）信息、通知次数等不同类型信息。 > **说明：** > > 本模块接口为系统接口。

**Since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## Modules to Import

```TypeScript
import { usageStatistics } from '@kit.BackgroundTasksKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[isIdleState](arkts-usagestatistics-isidlestate-f-sys.md#isIdleState-1) | 查询指定的应用是否为常用应用（GroupType值≤30），使用Callback形式返回。 |
| <!--DelRow-->[isIdleState](arkts-usagestatistics-isidlestate-f-sys.md#isIdleState-2) | 查询指定的应用是否为常用应用（GroupType值≤30），使用Promise异步回调。 |
| <!--DelRow-->[isIdleStateSync](arkts-usagestatistics-isidlestatesync-f-sys.md#isIdleStateSync-1) | 查询指定的应用是否为常用应用（GroupType值≤30），使用同步方式返回。 |
| <!--DelRow-->[queryAppGroup](arkts-usagestatistics-queryappgroup-f-sys.md#queryAppGroup-1) | 查询当前应用的优先级分组，使用Callback异步回调。 |
| <!--DelRow-->[queryAppGroup](arkts-usagestatistics-queryappgroup-f-sys.md#queryAppGroup-2) | 查询当前应用的优先级分组，使用Promise异步回调。 |
| <!--DelRow-->[queryAppGroup](arkts-usagestatistics-queryappgroup-f-sys.md#queryAppGroup-3) | 查询指定bundleName应用的优先级分组，使用Callback异步回调。 |
| <!--DelRow-->[queryAppGroup](arkts-usagestatistics-queryappgroup-f-sys.md#queryAppGroup-4) | 查询指定bundleName应用的优先级分组，使用Promise异步回调。 |
| <!--DelRow-->[queryAppGroupSync](arkts-usagestatistics-queryappgroupsync-f-sys.md#queryAppGroupSync-1) | 查询当前应用的优先级分组，使用同步方式返回。 |
| <!--DelRow-->[queryAppGroupSync](arkts-usagestatistics-queryappgroupsync-f-sys.md#queryAppGroupSync-2) | 查询指定bundleName应用的优先级分组，使用同步方式返回。 |
| <!--DelRow-->[queryAppStatsInfos](arkts-usagestatistics-queryappstatsinfos-f-sys.md#queryAppStatsInfos-1) | 通过指定起始和结束时间，查询应用使用时长的具体信息（包含分身应用），统计的最小颗粒度是天。使用Promise异步回调。 |
| <!--DelRow-->[queryBundleEvents](arkts-usagestatistics-querybundleevents-f-sys.md#queryBundleEvents-1) | 通过指定起始和结束时间，查询所有应用的事件集合，使用Callback异步回调。 |
| <!--DelRow-->[queryBundleEvents](arkts-usagestatistics-querybundleevents-f-sys.md#queryBundleEvents-2) | 通过指定起始和结束时间，查询所有应用的事件集合，使用Promise异步回调。 |
| <!--DelRow-->[queryBundleEvents](arkts-usagestatistics-querybundleevents-f-sys.md#queryBundleEvents-3) | 通过指定起始时间、结束时间及最大返回条数，查询指定时间段内所有应用的事件集合。若条数大于maxNum，则按事件发生时间降序排列，返回前maxNum条，否则返回所有数据。使用Promise异步回调。 |
| <!--DelRow-->[queryBundleStatsInfoByInterval](arkts-usagestatistics-querybundlestatsinfobyinterval-f-sys.md#queryBundleStatsInfoByInterval-1) | 通过指定时间段间隔（天、周、月、年），查询应用使用时长的统计信息，使用Callback异步回调。 |
| <!--DelRow-->[queryBundleStatsInfoByInterval](arkts-usagestatistics-querybundlestatsinfobyinterval-f-sys.md#queryBundleStatsInfoByInterval-2) | 通过指定时间段间隔（天、周、月、年），查询应用使用时长的统计信息，使用Promise异步回调。 |
| <!--DelRow-->[queryBundleStatsInfos](arkts-usagestatistics-querybundlestatsinfos-f-sys.md#queryBundleStatsInfos-1) | 通过指定起始和结束时间，查询应用使用时长的具体信息，统计的最小颗粒度是天，使用Callback异步回调。 |
| <!--DelRow-->[queryBundleStatsInfos](arkts-usagestatistics-querybundlestatsinfos-f-sys.md#queryBundleStatsInfos-2) | 通过指定起始和结束时间，查询应用使用时长的具体信息，统计的最小颗粒度是天，使用Promise异步回调。 |
| <!--DelRow-->[queryCurrentBundleEvents](arkts-usagestatistics-querycurrentbundleevents-f-sys.md#queryCurrentBundleEvents-1) | 通过指定起始和结束时间，查询当前应用的事件集合，使用Callback异步回调。 |
| <!--DelRow-->[queryCurrentBundleEvents](arkts-usagestatistics-querycurrentbundleevents-f-sys.md#queryCurrentBundleEvents-2) | 通过指定起始和结束时间段内，查询当前应用的事件集合，使用Promise异步回调。 |
| <!--DelRow-->[queryCurrentBundleEvents](arkts-usagestatistics-querycurrentbundleevents-f-sys.md#queryCurrentBundleEvents-3) | 通过指定起始时间、结束时间及最大返回条数，查询指定时间段内当前应用的事件集合。若条数大于maxNum，则按事件发生时间降序排列，返回前maxNum条，否则返回所有数据。使用Promise异步回调。 |
| <!--DelRow-->[queryDeviceEventStats](arkts-usagestatistics-querydeviceeventstats-f-sys.md#queryDeviceEventStats-1) | 通过指定起始和结束时间，查询系统事件（休眠、唤醒、解锁、锁屏）的统计信息，使用Callback异步回调。 |
| <!--DelRow-->[queryDeviceEventStats](arkts-usagestatistics-querydeviceeventstats-f-sys.md#queryDeviceEventStats-2) | 通过指定起始和结束时间，查询系统事件（休眠、唤醒、解锁、锁屏）的统计信息，使用Promise异步回调。 |
| <!--DelRow-->[queryLastUseTime](arkts-usagestatistics-querylastusetime-f-sys.md#queryLastUseTime-1) | 通过指定bundleName和应用的index，查询应用使用具体信息，统计的最小颗粒度是天，使用Promise异步回调。 |
| <!--DelRow-->[queryModuleUsageRecords](arkts-usagestatistics-querymoduleusagerecords-f-sys.md#queryModuleUsageRecords-1) | 根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Callback异步回调。 |
| <!--DelRow-->[queryModuleUsageRecords](arkts-usagestatistics-querymoduleusagerecords-f-sys.md#queryModuleUsageRecords-2) | 根据设置的maxNum，查询FA模型下各应用不用Hap包的使用记录。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。 |
| <!--DelRow-->[queryModuleUsageRecords](arkts-usagestatistics-querymoduleusagerecords-f-sys.md#queryModuleUsageRecords-3) | 查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用CallBack异步回调。 |
| <!--DelRow-->[queryModuleUsageRecords](arkts-usagestatistics-querymoduleusagerecords-f-sys.md#queryModuleUsageRecords-4) | 查询FA模型下各应用不用Hap包的使用记录（不超过1000条）。若Hap包中存在FA卡片，使用信息中也包含卡片信息。使用Promise异步回调。 使用Promise形式返回不超过1000条FA使用记录，FA使用记录由近及远排序。 |
| <!--DelRow-->[queryNotificationEventStats](arkts-usagestatistics-querynotificationeventstats-f-sys.md#queryNotificationEventStats-1) | 通过指定起始和结束时间，查询所有应用的通知次数，使用Callback异步回调。 |
| <!--DelRow-->[queryNotificationEventStats](arkts-usagestatistics-querynotificationeventstats-f-sys.md#queryNotificationEventStats-2) | 通过指定起始和结束时间，查询所有应用的通知次数，使用Promise异步回调。 |
| <!--DelRow-->[registerAppGroupCallBack](arkts-usagestatistics-registerappgroupcallback-f-sys.md#registerAppGroupCallBack-1) | 应用注册分组变化监听，即用户名下的某个应用分组发生变化时，向所有已注册分组变化监听的应用返回[AppGroupCallbackInfo]{@link usageStatistics.AppGroupCallbackInfo}信息。 使用Callback异步回调。 |
| <!--DelRow-->[registerAppGroupCallBack](arkts-usagestatistics-registerappgroupcallback-f-sys.md#registerAppGroupCallBack-2) | 注册应用分组变化监听，即用户名下的某个应用分组发生变化时，向所有已注册分组变化监听的应用返回[AppGroupCallbackInfo]{@link usageStatistics.AppGroupCallbackInfo}信息。 使用Promise异步回调。 |
| <!--DelRow-->[setAppGroup](arkts-usagestatistics-setappgroup-f-sys.md#setAppGroup-1) | 将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用CallBack异步回调。 |
| <!--DelRow-->[setAppGroup](arkts-usagestatistics-setappgroup-f-sys.md#setAppGroup-2) | 将指定bundleName应用的分组设置为newGroup，仅支持当前应用为其他应用设置，使用Promise异步回调。 |
| <!--DelRow-->[unregisterAppGroupCallBack](arkts-usagestatistics-unregisterappgroupcallback-f-sys.md#unregisterAppGroupCallBack-1) | 应用解除分组变化监听。使用callback异步回调。 |
| <!--DelRow-->[unregisterAppGroupCallBack](arkts-usagestatistics-unregisterappgroupcallback-f-sys.md#unregisterAppGroupCallBack-2) | 应用解除分组变化监听。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AppGroupCallbackInfo](arkts-usagestatistics-appgroupcallbackinfo-i-sys.md) | 应用分组变化回调返回的属性集合 |
| <!--DelRow-->[BundleEvents](arkts-usagestatistics-bundleevents-i-sys.md) | FA模型的使用信息属性集合。 |
| <!--DelRow-->[BundleStatsInfo](arkts-usagestatistics-bundlestatsinfo-i-sys.md) | FA模型的使用信息属性集合。 |
| <!--DelRow-->[DeviceEventStats](arkts-usagestatistics-deviceeventstats-i-sys.md) | FA模型的使用信息属性集合。 |
| <!--DelRow-->[HapFormInfo](arkts-usagestatistics-hapforminfo-i-sys.md) | FA模型的使用信息属性集合。 |
| <!--DelRow-->[HapModuleInfo](arkts-usagestatistics-hapmoduleinfo-i-sys.md) | FA模型的使用信息属性集合。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[AppStatsMap](arkts-usagestatistics-appstatsmap-t-sys.md) |  |
| <!--DelRow-->[BundleStatsMap](arkts-usagestatistics-bundlestatsmap-t-sys.md) | FA模型的使用信息属性集合。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[GroupType](arkts-usagestatistics-grouptype-e-sys.md) | 应用分组的设置类型。 |
| <!--DelRow-->[IntervalType](arkts-usagestatistics-intervaltype-e-sys.md) | 应用使用时长的查询类型。 |

