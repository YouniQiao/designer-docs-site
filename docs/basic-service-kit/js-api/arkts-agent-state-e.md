# State

```TypeScript
enum State
```

定义任务当前的状态。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## INITIALIZED

```TypeScript
INITIALIZED = 0x00
```

表示通过配置信息（[Config]request.agent.Config）创建的任务已初始 化。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## WAITING

```TypeScript
WAITING = 0x10
```

表示任务缺少运行或重试的资源，又或是网络状态不匹配。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## RUNNING

```TypeScript
RUNNING = 0x20
```

表示任务正在运行中。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## RETRYING

```TypeScript
RETRYING = 0x21
```

表示任务至少失败一次，现在正在再次处理中。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## PAUSED

```TypeScript
PAUSED = 0x30
```

表示任务暂停，通常后续会恢复任务。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## STOPPED

```TypeScript
STOPPED = 0x31
```

表示任务停止。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## COMPLETED

```TypeScript
COMPLETED = 0x40
```

表示任务完成。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## FAILED

```TypeScript
FAILED = 0x41
```

表示任务失败。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## REMOVED

```TypeScript
REMOVED = 0x50
```

表示任务移除。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

