# WorkerGlobalScope

Worker线程自身的运行环境，与宿主线程环境隔离。

**Inheritance:** WorkerGlobalScopeextends: EventTarget.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.GlobalScope

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## onerror

```TypeScript
onerror?: (ev: ErrorEvent) => void
```

onerror属性用于指定Worker在执行过程中发生异常被调用的回调函数， 该回调函数在Worker线程中执行。

**Type:** (ev: ErrorEvent) => void

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.GlobalScope.onerror

**System capability:** SystemCapability.Utils.Lang

## name

```TypeScript
readonly name: string
```

Worker的名字，new Worker时指定。

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.GlobalScope.name

**System capability:** SystemCapability.Utils.Lang

## self

```TypeScript
readonly self: WorkerGlobalScope & typeof globalThis
```

为self指定的type属性。

**Type:** WorkerGlobalScope & typeof globalThis

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.worker.GlobalScope.self

**System capability:** SystemCapability.Utils.Lang

