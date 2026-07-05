# Watcher

Defines parameters for a **Watcher** object. This API is used to configure and manage event watchers to subscribe to and process specified events. > **NOTE** > > You are not advised to [remove watchers]hiAppEvent.removeWatcher in the callback. Once a watcher is > removed, the subscription callback of the watcher becomes invalid, and the callback may not be triggered when an > event occurs.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## onTrigger

```TypeScript
onTrigger?: (curRow: int, curSize: int, holder: AppEventPackageHolder) => void
```

Subscription callback. This parameter takes effect only when it is passed together with **triggerCondition**. The input arguments are described as follows: **curRow**: total number of subscription events when the callback is triggered. **curSize**: total size of subscribed events when the callback is triggered, in bytes. **holder**: subscription data holder, which can be used to process subscribed events.

**类型：** (curRow: int, curSize: int, holder: AppEventPackageHolder) => void

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## triggerCondition

```TypeScript
triggerCondition?: TriggerCondition
```

Subscription callback triggering condition. This parameter takes effect only when it is passed together with **onTrigger**. If this parameter is not set, the **onTrigger** callback is not triggered by default.

**类型：** TriggerCondition

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## name

```TypeScript
name: string
```

Unique name of a watcher. The value contains a maximum of 32 characters, including digits (0 to 9), letters (a to z)(A to Z), and underscore (_). It must start with a letter and end with a digit or letter. For example, **testName1** and **crash_Watcher**.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## onReceive

```TypeScript
onReceive?: (domain: string, appEventGroups: Array<AppEventGroup>) => void
```

Real-time subscription callback. Only this callback function is triggered if it is passed together with **onTrigger**. The input arguments are described as follows: domain: domain name. appEventGroups: event group.

**类型：** (domain: string, appEventGroups: Array<AppEventGroup>) => void

**起始版本：** 11

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appEventFilters

```TypeScript
appEventFilters?: AppEventFilter[]
```

Subscription filtering condition. This parameter is passed only when subscription events need to be filtered. If this parameter is not set, events are not filtered by default.

**类型：** AppEventFilter[]

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

