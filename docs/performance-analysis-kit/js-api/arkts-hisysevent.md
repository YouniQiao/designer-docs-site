# @ohos.hiSysEvent

本模块提供了系统事件打点能力，包括系统事件的埋点、落盘系统事件的订阅及已落盘的系统事件的查询能力。

**Since:** 9

**System capability:** SystemCapability.HiviewDFX.HiSysEvent

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hiSysEvent } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[addWatcher](arkts-hisysevent-addwatcher-f-sys.md#addWatcher-1) | 订阅系统事件，接收[Watcher]{@link Watcher}类型的对象作为事件参数。 |
| <!--DelRow-->[exportSysEvents](arkts-hisysevent-exportsysevents-f-sys.md#exportSysEvents-1) | 批量导出系统事件，以文件格式写入应用沙箱固定目录(/data/storage/el2/base/cache/hiview/event/)。 |
| <!--DelRow-->[query](arkts-hisysevent-query-f-sys.md#query-1) | 查询系统事件。 |
| <!--DelRow-->[removeWatcher](arkts-hisysevent-removewatcher-f-sys.md#removeWatcher-1) | 取消订阅系统事件，接收[Watcher]{@link Watcher}类型的对象作为事件参数。 |
| <!--DelRow-->[subscribe](arkts-hisysevent-subscribe-f-sys.md#subscribe-1) | 订阅实时系统事件(事件需满足低频率或偶发性的约束条件)，事件发生时立即以文件格式写入应用沙箱固定目录(/data/storage/el2/base/cache/hiview/event/)。 |
| <!--DelRow-->[unsubscribe](arkts-hisysevent-unsubscribe-f-sys.md#unsubscribe-1) | 取消订阅系统事件。 |
| <!--DelRow-->[write](arkts-hisysevent-write-f-sys.md#write-1) | 系统事件打点方法，接收[SysEventInfo]{@link SysEventInfo}类型的对象作为事件参数，使用promise方式作为异步回调。 |
| <!--DelRow-->[write](arkts-hisysevent-write-f-sys.md#write-2) | 系统事件打点方法，接收[SysEventInfo]{@link SysEventInfo}类型的对象作为事件参数，使用callback方式作为异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[Querier](arkts-hisysevent-querier-i-sys.md) | 系统事件查询者对象接口。 |
| <!--DelRow-->[QueryArg](arkts-hisysevent-queryarg-i-sys.md) | 系统事件查询参数对象接口。 |
| <!--DelRow-->[QueryRule](arkts-hisysevent-queryrule-i-sys.md) | 系统事件查询规则对象接口。 |
| <!--DelRow-->[SysEventInfo](arkts-hisysevent-syseventinfo-i-sys.md) | 系统事件信息对象接口。 |
| <!--DelRow-->[Watcher](arkts-hisysevent-watcher-i-sys.md) | 系统事件订阅者对象接口。 |
| <!--DelRow-->[WatchRule](arkts-hisysevent-watchrule-i-sys.md) | 系统事件订阅规则对象接口。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[EventType](arkts-hisysevent-eventtype-e-sys.md) | 系统事件类型枚举。 |
| <!--DelRow-->[RuleType](arkts-hisysevent-ruletype-e-sys.md) | 匹配规则类型枚举。 |

