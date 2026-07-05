# @ohos.bundleState

本模块提供设备使用信息统计能力。

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.ResourceSchedule.UsageStatistics.App

## 导入模块

```TypeScript
import { bundleState } from '@kit.BackgroundTasksKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [isIdleState](arkts-bundlestate-isidlestate-f.md#isIdleState-1) | 判断指定bundleName的应用当前是否是空闲状态，三方应用只能查询自身的空闲状态。系统应用支持查询其他应用的空闲状态，查询前需要申请权限ohos.permission.BUNDLE_ACTIVE_INFO。使用Callback 异步回调。 |
| [isIdleState](arkts-bundlestate-isidlestate-f.md#isIdleState-2) | 判断指定bundleName的应用当前是否是空闲状态，三方应用只能查询自身的空闲状态。系统应用支持查询其他应用的空闲状态，查询前需要申请权限ohos.permission.BUNDLE_ACTIVE_INFO，使用Promise异 步回调。 |
| [queryAppUsagePriorityGroup](arkts-bundlestate-queryappusageprioritygroup-f.md#queryAppUsagePriorityGroup-1) | Queries the usage priority group of the calling application. The priority defined in a priority group restricts the resource usage of an application, for example, restricting the running of background tasks. |
| [queryAppUsagePriorityGroup](arkts-bundlestate-queryappusageprioritygroup-f.md#queryAppUsagePriorityGroup-2) | Queries the usage priority group of the calling application. The priority defined in a priority group restricts the resource usage of an application, for example, restricting the running of background tasks. |
| <!--DelRow-->[queryBundleActiveStates](arkts-bundlestate-querybundleactivestates-f-sys.md#queryBundleActiveStates-1) | Queries state data of all bundles within a specified period identified by the start and end time. |
| <!--DelRow-->[queryBundleActiveStates](arkts-bundlestate-querybundleactivestates-f-sys.md#queryBundleActiveStates-2) | Queries state data of all bundles within a specified period identified by the start and end time. |
| <!--DelRow-->[queryBundleStateInfoByInterval](arkts-bundlestate-querybundlestateinfobyinterval-f-sys.md#queryBundleStateInfoByInterval-1) | Queries usage information about each bundle within a specified period at a specified interval. |
| <!--DelRow-->[queryBundleStateInfoByInterval](arkts-bundlestate-querybundlestateinfobyinterval-f-sys.md#queryBundleStateInfoByInterval-2) | Queries usage information about each bundle within a specified period at a specified interval. |
| <!--DelRow-->[queryBundleStateInfos](arkts-bundlestate-querybundlestateinfos-f-sys.md#queryBundleStateInfos-1) | Queries usage information about each bundle within a specified period. This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| <!--DelRow-->[queryBundleStateInfos](arkts-bundlestate-querybundlestateinfos-f-sys.md#queryBundleStateInfos-2) | Queries usage information about each bundle within a specified period. This method queries usage information at the {@link #BY_OPTIMIZED} interval by default. |
| [queryCurrentBundleActiveStates](arkts-bundlestate-querycurrentbundleactivestates-f.md#queryCurrentBundleActiveStates-1) | Queries state data of the current bundle within a specified period. |
| [queryCurrentBundleActiveStates](arkts-bundlestate-querycurrentbundleactivestates-f.md#queryCurrentBundleActiveStates-2) | Queries state data of the current bundle within a specified period. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BundleActiveInfoResponse](arkts-bundlestate-bundleactiveinforesponse-i.md) |  |
| [BundleActiveState](arkts-bundlestate-bundleactivestate-i.md) |  |
| [BundleStateInfo](arkts-bundlestate-bundlestateinfo-i.md) |  |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [IntervalType](arkts-bundlestate-intervaltype-e.md) | Declares interval type. |

