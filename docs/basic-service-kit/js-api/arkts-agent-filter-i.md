# Filter

过滤条件。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## mode

```TypeScript
mode?: Mode
```

任务模式。 - FOREGROUND表示前台任务。 - BACKGROUND表示后台任务。 - 如果未填写，则查询所有任务。

**Type:** Mode

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## before

```TypeScript
before?: long
```

结束的Unix时间戳（毫秒），默认为调用时刻。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## action

```TypeScript
action?: Action
```

任务操作选项。 - UPLOAD表示上传任务。 - DOWNLOAD表示下载任务。 - 如果未填写，则查询所有任务。

**Type:** Action

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## state

```TypeScript
state?: State
```

指定任务的状态。如果未填写，则查询所有任务。

**Type:** State

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## after

```TypeScript
after?: long
```

开始的Unix时间戳（毫秒），默认值为调用时刻减24小时。

**Type:** long

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## bundle

```TypeScript
bundle?: string
```

Specify the package name of an application. Only for advanced search, common search will be fixed to the caller. A "*" means any bundle.

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**System API:** This is a system API.

