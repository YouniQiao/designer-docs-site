# WorkerGlobalScope

Specifies the worker thread running environment, which is isolated from the host thread environment.

**Inheritance/Implementation:** WorkerGlobalScope extends [EventTarget](arkts-arkts-eventtarget-i.md#eventtarget)

**Since:** 7

**Deprecated since:** 9

**Substitutes:** GlobalScope

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
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

**System capability:** SystemCapability.Utils.Lang

## onerror

```TypeScript
onerror?: (ev: ErrorEvent) => void
```

The onerror attribute of parentPort specifies the event handler to be called when an exception occurs during worker execution. The event handler is executed in the worker thread.

**Type:** (ev: ErrorEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitutes:** onerror

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

**System capability:** SystemCapability.Utils.Lang

