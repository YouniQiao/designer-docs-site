# MessageEvents

消息类，持有Worker线程间传递的数据。

**Inheritance:** MessageEventsextends: Event.

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## data

```TypeScript
readonly data: any
```

异常发生时传递的数据。

**Type:** any

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

