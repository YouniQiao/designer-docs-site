# EventData

发送事件时传递的数据。

**Since:** 7

**System capability:** SystemCapability.Notification.Emitter

## Modules to Import

```TypeScript
import { emitter } from '@kit.BasicServicesKit';
```

## data

```TypeScript
data?: { [key: string]: any }
```

发送事件时传递的数据，支持数据类型包括Array、ArrayBuffer、Boolean、DataView、Date、Error、Map、Number、Object、Primitive（除了symbol）、RegExp、Set 、String、TypedArray，数据大小最大为16M。

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.Emitter

```TypeScript
data?: Record<string, RecordData> | ESValue
```

发送事件时传递的数据，支持数据类型包括Array、ArrayBuffer、Boolean、DataView、Date、Error、Map、Number、Object、Primitive（除了symbol）、RegExp、Set 、String、TypedArray，数据大小最大为16M。

**Type:** Record<string, RecordData> | ESValue

**Since:** 23

**System capability:** SystemCapability.Notification.Emitter

