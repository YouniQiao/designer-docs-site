# WorkerOptions

Provides options that can be set for the Worker instance to create.

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents, PostMessageOptions, MessageEvent, Priority, WorkerEventTarget, ThreadWorkerPriority, ThreadWorkerGlobalScope, DedicatedWorkerGlobalScope, ErrorEvent, Event, EventListener, WorkerOptions, EventTarget, WorkerEventListener } from '@ohos.worker';
```

## name

```TypeScript
name?: string
```

Name of the Worker thread. The default value is undefined.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

## priority

```TypeScript
priority?: ThreadWorkerPriority
```

Priority of the Worker thread.

**Type:** ThreadWorkerPriority

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Utils.Lang

## shared

```TypeScript
shared?: boolean
```

Whether sharing of the Worker instance is enabled. Currently, sharing is not supported.

**Type:** boolean

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

## type

```TypeScript
type?: 'classic' | 'module'
```

Mode in which the Worker instance executes the script. The module type is not supported yet. The default value is classic.

**Type:** 'classic' | 'module'

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Utils.Lang

