# AppEventGroup

Defines parameters of the event group returned by the subscription. This API can be used to obtain detail information about an event group, which is often used in the **onReceive** callback of [Watcher]hiAppEvent.Watcher.

**起始版本：** 11

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## name

```TypeScript
name: string
```

Event name.

**类型：** string

**起始版本：** 11

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## appEventInfos

```TypeScript
appEventInfos: Array<AppEventInfo>
```

Event object group.

**类型：** Array<AppEventInfo>

**起始版本：** 11

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

