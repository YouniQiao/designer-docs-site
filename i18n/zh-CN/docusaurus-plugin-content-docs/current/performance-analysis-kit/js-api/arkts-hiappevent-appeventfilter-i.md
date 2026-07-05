# AppEventFilter

Defines parameters of subscription filtering conditions of a [Watcher]hiAppEvent.Watcher. This API is used to set event filtering conditions in the event watcher to ensure that only the events that meet the filtering conditions are subscribed to. > **NOTE** > > The subscription specifications of system events vary according to application types. For details, see > [HiAppEvent Constraints](docroot://dfx/hiappevent-intro.md#constraints).

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## names

```TypeScript
names?: string[]
```

Names of the events to be subscribed. If this parameter is not set, events are not filtered by default.

**类型：** string[]

**起始版本：** 11

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## domain

```TypeScript
domain: string
```

Event domain, which can be the system event domain (**hiAppEvent.domain.OS**) or the event domain of the custom event information ([AppEventInfo]hiAppEvent.AppEventInfo) passed through the [Write]hiAppEvent.write(info: AppEventInfo) API.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## eventTypes

```TypeScript
eventTypes?: EventType[]
```

Event types. If this parameter is not set, events are not filtered by default.

**类型：** EventType[]

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

