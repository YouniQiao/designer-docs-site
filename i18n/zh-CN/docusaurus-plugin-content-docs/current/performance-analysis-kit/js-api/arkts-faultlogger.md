# @ohos.faultLogger

The **faultLogger** APIs can be used to query fault logs of an application cached on the system. The APIs use the application bundle name and the UID allocated by the system as the unique key value. The number of application fault logs stored in the system is limited by the system log pressure. You are advised to use [@ohos.hiviewdfx.hiAppEvent]{@link @ohos.hiviewdfx.hiAppEvent:hiAppEvent} to subscribe to fault events such as **APP_CRASH** and **APP_FREEZE**. > **NOTE** > > The APIs of this module are no longer maintained since API version 18. You are advised to use > [@ohos.hiviewdfx.hiAppEvent]{@link @ohos.hiviewdfx.hiAppEvent:hiAppEvent} to subscribe to the **APP_CRASH** and > **APP_FREEZE** events in later versions. > > For details about how to use HiAppEvent to subscribe to the **APP_CRASH** event, see > [Migrating Crash Events from the FaultLogger API](docroot://dfx/hiappevent-watcher-crash-events-arkts.md#migrating-crash-events-from-the-faultlogger-api) > . > > For details about how to use HiAppEvent to subscribe to the **APP_FREEZE** event, see > [Migrating Application Freeze Events from the Faultlogger API](docroot://dfx/hiappevent-watcher-freeze-events-arkts.md#migrating-application-freeze-events-from-the-faultlogger-api) > .

**起始版本：** 8

**废弃版本：** 18

**替代接口：** ohos.hiviewdfx.hiAppEvent

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

## 导入模块

```TypeScript
import { FaultLogger } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [query](arkts-faultlogger-query-f.md#query-1) | Obtains the fault information about the current application. This API uses an asynchronous callback to return the fault information array obtained, which contains a maximum of 10 pieces of fault information. |
| [query](arkts-faultlogger-query-f.md#query-2) | Obtains the fault information about the current application. This API uses a promise to return the fault information array obtained, which contains a maximum of 10 pieces of fault information. |
| [querySelfFaultLog](arkts-faultlogger-queryselffaultlog-f.md#querySelfFaultLog-1) | Obtains the fault information about the current application. This API uses an asynchronous callback to return the fault information array obtained, which contains a maximum of 10 pieces of fault information. |
| [querySelfFaultLog](arkts-faultlogger-queryselffaultlog-f.md#querySelfFaultLog-2) | Obtains the fault information about the current application. This API uses a promise to return the fault information array obtained, which contains a maximum of 10 pieces of fault information. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [FaultLogInfo](arkts-faultlogger-faultloginfo-i.md) | Defines the data structure of the fault log information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [FaultType](arkts-faultlogger-faulttype-e.md) | Enumerates the fault types. |

