# GlobalScope

Worker线程自身的运行环境，GlobalScope类继承WorkerEventTarget。

**Inheritance:** GlobalScopeextends: WorkerEventTarget.

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## onerror

```TypeScript
onerror?: (ev: ErrorEvent) => void
```

Worker在执行过程中发生异常被调用的回调函数，该回调函数在Worker线程中执行。 其中ev类型为ErrorEvent，表示收到的异常数据。

**Type:** (ev: ErrorEvent) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## name

```TypeScript
readonly name: string
```

Worker的名字，new Worker时指定。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## self

```TypeScript
readonly self: GlobalScope & typeof globalThis
```

GlobalScope本身。

**Type:** GlobalScope & typeof globalThis

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

