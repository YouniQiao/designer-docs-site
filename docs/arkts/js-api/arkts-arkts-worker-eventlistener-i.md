# EventListener

Implements event listening.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** WorkerEventListener

<!--Device-unnamed-export interface EventListener--><!--Device-unnamed-export interface EventListener-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

<a id="constructor"></a>
## constructor

```TypeScript
(evt: Event): void | Promise<void>
```

Specifies the callback to invoke.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** (event:

<!--Device-EventListener-(evt: Event): void | Promise<void>--><!--Device-EventListener-(evt: Event): void | Promise<void>-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| evt | [Event](../../apis-contacts-kit/arkts-apis/arkts-contacts-contact-event-c.md) | Yes | evt evt Event class for the callback to invoke. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.Worker("entry/ets/workers/worker.ets");
workerInstance.addEventListener("alert", ()=>{
    console.info("alert listener callback");
})

```

