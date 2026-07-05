# Progress

任务进度的数据结构。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## processed

```TypeScript
readonly processed: long
```

任务中当前文件的已处理数据大小，单位为字节（B）。

**Type:** long

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## sizes

```TypeScript
readonly sizes: Array<long>
```

任务中文件的大小，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，sizes为 -1。

**Type:** Array<long>

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## extras

```TypeScript
readonly extras?: object
```

交互的额外内容，例如：来自服务器的响应的header和body。默认值为空。

**Type:** object

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

```TypeScript
readonly extras?: Record<string, string>
```

The extras for an interaction. Such as headers and body of response from server. But when the Content-Disposition header responded, <br>the body will be into the uri of its attachment only, the body here is empty. {"headers": {"key": v}, "body": "contents"}. The "body" field is not supported in cross-platform scenarios.

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## index

```TypeScript
readonly index: int
```

任务中当前正在处理的文件索引。

**Type:** int

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## state

```TypeScript
readonly state: State
```

任务当前的状态。

**Type:** State

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

