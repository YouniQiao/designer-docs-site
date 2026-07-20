# WorkerGlobalScope

Specifies the worker thread running environment, which is isolated from the host thread environment.

**Inheritance/Implementation:** WorkerGlobalScope extends [EventTarget](arkts-arkts-worker-eventtarget-i.md)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** GlobalScope

<!--Device-unnamed-declare interface WorkerGlobalScope extends EventTarget--><!--Device-unnamed-declare interface WorkerGlobalScope extends EventTarget-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

## name

```TypeScript
readonly name: string
```

Worker name specified when there is a new worker.

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** name

<!--Device-WorkerGlobalScope-readonly name: string--><!--Device-WorkerGlobalScope-readonly name: string-End-->

**System capability:** SystemCapability.Utils.Lang

## onerror

```TypeScript
onerror?: (ev: ErrorEvent) => void
```

The onerror attribute of parentPort specifies the event handler to be called when an exception occurs during worker execution.The event handler is executed in the worker thread.

**Type:** (ev: ErrorEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onerror

<!--Device-WorkerGlobalScope-onerror?: (ev: ErrorEvent) => void--><!--Device-WorkerGlobalScope-onerror?: (ev: ErrorEvent) => void-End-->

**System capability:** SystemCapability.Utils.Lang

## self

```TypeScript
readonly self: WorkerGlobalScope & typeof globalThis
```

Specify the type attribute for self.

**Type:** WorkerGlobalScope & typeof globalThis

**Since:** 7

**Deprecated since:** 9

**Substitutes:** self

<!--Device-WorkerGlobalScope-readonly self: WorkerGlobalScope & typeof globalThis--><!--Device-WorkerGlobalScope-readonly self: WorkerGlobalScope & typeof globalThis-End-->

**System capability:** SystemCapability.Utils.Lang

