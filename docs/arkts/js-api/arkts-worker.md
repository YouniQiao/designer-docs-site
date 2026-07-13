# @ohos.worker

JS cross-thread communication tool

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@kit.ArkTS';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [worker](arkts-arkts-worker-n.md) | JS cross-thread communication tool |

### Interfaces

| Name | Description |
| --- | --- |
| [DedicatedWorkerGlobalScope](arkts-arkts-dedicatedworkerglobalscope-i.md) | Specifies the worker thread running environment, which is isolated from the host thread environment |
| [ErrorEvent](arkts-arkts-errorevent-i.md) | Provides detailed information about the exception that occurs during worker execution. The ErrorEvent class inheritsfrom Event. |
| [Event](arkts-arkts-event-i.md) | Defines the event. |
| [EventListener](arkts-arkts-eventlistener-i.md) | Implements event listening. |
| [EventTarget](arkts-arkts-eventtarget-i.md) | Specific event features. |
| [GlobalScope](arkts-arkts-globalscope-i.md) | Implements the running environment of the Worker thread. The GlobalScope class inherits from WorkerEventTarget. |
| [MessageEvent](arkts-arkts-messageevent-i.md) | Holds the data transferred between worker threads. |
| [MessageEvents](arkts-arkts-messageevents-i.md) | Holds the data transferred between Worker threads. |
| [PostMessageOptions](arkts-arkts-postmessageoptions-i.md) | Defines the object for which the ownership is to be transferred during data transfer. The object must be anArrayBuffer instance.After the ownership is transferred, the object becomes unavailable in the sender and can be used only in thereceiver. |
| [ThreadWorkerGlobalScope](arkts-arkts-threadworkerglobalscope-i.md) | Implements communication between the Worker thread and the host thread. The postMessage API is used to send messagesto the host thread, and the close API is used to terminate the Worker thread. The ThreadWorkerGlobalScope classinherits from GlobalScope9+. |
| [WorkerEventListener](arkts-arkts-workereventlistener-i.md) | Implements event listening. |
| [WorkerEventTarget](arkts-arkts-workereventtarget-i.md) | Processes worker listening events. |
| [WorkerGlobalScope](arkts-arkts-workerglobalscope-i.md) | Specifies the worker thread running environment, which is isolated from the host thread environment. |
| [WorkerOptions](arkts-arkts-workeroptions-i.md) | Provides options that can be set for the Worker instance to create. |

### Enums

| Name | Description |
| --- | --- |
| [Priority](arkts-arkts-priority-e.md) | Enumerates the priorities available for EventHandler.For details about the mappings between priorities and EventHandler levels, see EventHandler Level. |
| [ThreadWorkerPriority](arkts-arkts-threadworkerpriority-e.md) | Enumerates the priorities available for Worker threads.For details about the mappings between priorities and QoS levels, see QoS Level. |

### Types

| Name | Description |
| --- | --- |
| [ErrorCallback](arkts-arkts-errorcallback-t.md) | The event handler to be called when an exception occurs during worker execution. |
| [MessageType](arkts-arkts-messagetype-t.md) | Type of message, only "message" and "messageerror". |

