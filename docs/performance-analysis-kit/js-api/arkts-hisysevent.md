# @ohos.hiSysEvent

The **hiSysEvent** module provides the system event logging functions, such as configuring trace points, subscribing to system events, and querying system events written to the event file.

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@ohos.hiSysEvent';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addWatcher](arkts-performanceanalysis-addwatcher-f-sys.md#addwatcher-1) | Adds a watcher for event subscription. |
| [exportSysEvents](arkts-performanceanalysis-exportsysevents-f-sys.md#exportsysevents-1) | Exports system events in batches and writes them as a file to the fixed directory of the application sandbox (that is, /data/storage/el2/base/cache/hiview/event/). |
| [query](arkts-performanceanalysis-query-f-sys.md#query-1) | Queries system events. |
| [removeWatcher](arkts-performanceanalysis-removewatcher-f-sys.md#removewatcher-1) | Removes a watcher used for event subscription. |
| [subscribe](arkts-performanceanalysis-subscribe-f-sys.md#subscribe-1) | Subscribes to real-time system events that occur occasionally or occur in a low frequency. These events are written as a file to the fixed directory of the application sandbox (that is, /data/storage/el2/base/cache/hiview/event/). |
| [unsubscribe](arkts-performanceanalysis-unsubscribe-f-sys.md#unsubscribe-1) | Unsubscribes from system events. |
| [write](arkts-performanceanalysis-write-f-sys.md#write-1) | Writes event information to the event file. This API uses a promise to return the result. |
| [write](arkts-performanceanalysis-write-f-sys.md#write-2) | Writes event information to the event file. This API uses an asynchronous callback to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [Querier](arkts-performanceanalysis-querier-i-sys.md) | Defines an event query instance. |
| [QueryArg](arkts-performanceanalysis-queryarg-i-sys.md) | Defines arguments for an event query. |
| [QueryRule](arkts-performanceanalysis-queryrule-i-sys.md) | Defines event query rules. |
| [SysEventInfo](arkts-performanceanalysis-syseventinfo-i-sys.md) | Defines a system event. |
| [WatchRule](arkts-performanceanalysis-watchrule-i-sys.md) | Defines event subscription rules. |
| [Watcher](arkts-performanceanalysis-watcher-i-sys.md) | Defines a watcher for event subscription. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [EventType](arkts-performanceanalysis-eventtype-e-sys.md) | Enumerate system event types. |
| [RuleType](arkts-performanceanalysis-ruletype-e-sys.md) | Enumerates matching rule types. |
<!--DelEnd-->

