# WorkerOptions

Worker构造函数的选项，用于为Worker添加其他信息。

**Since:** 7

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## shared

```TypeScript
shared?: boolean
```

表示Worker共享功能，此接口暂不支持。

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## name

```TypeScript
name?: string
```

Worker的名称。默认值为undefined。

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## priority

```TypeScript
priority?: ThreadWorkerPriority
```

表示Worker线程优先级。

**Type:** ThreadWorkerPriority

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## type

```TypeScript
type?: 'classic' | 'module'
```

Worker执行脚本的模式类型，暂不支持module类型，默认值为classic。

**Type:** 'classic' | 'module'

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

