# @ohos.hiviewdfx.hiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## 汇总

### 命名空间

| 名称 | 描述 |
| --- | --- |
| [hiAppEvent](arkts-hiappevent-n.md) | This module provides application logging and event subscription capabilities, including event storage, event subscription, event clearance, and logging configuration. HiAppEvent records the events triggered during application running in [AppEventInfo]{@link hiAppEvent.AppEventInfo}, and classifies the events into system events and application events. System events are triggered in system services and are predefined in the system. The fields of the event parameter object **params** of such events are defined by each system event. For details, see overviews of user guides. For example, [Crash Event Overview](docroot://dfx/hiappevent-watcher-crash-events.md). Application events are defined by application developers and can be customized using the [Write]{@link hiAppEvent.write(info: AppEventInfo)} API as required. |

