# Event

事件类。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## timeStamp

```TypeScript
readonly timeStamp: number
```

事件创建时的时间戳（精度为毫秒），目前不支持。

**Type:** number

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## type

```TypeScript
readonly type: string
```

指定事件的类型。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

