# Filter

过滤条件。

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## 导入模块

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## mode

```TypeScript
mode?: Mode
```

任务模式。 - FOREGROUND表示前台任务。 - BACKGROUND表示后台任务。 - 如果未填写，则查询所有任务。

**类型：** Mode

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## before

```TypeScript
before?: long
```

结束的Unix时间戳（毫秒），默认为调用时刻。

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## action

```TypeScript
action?: Action
```

任务操作选项。 - UPLOAD表示上传任务。 - DOWNLOAD表示下载任务。 - 如果未填写，则查询所有任务。

**类型：** Action

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## state

```TypeScript
state?: State
```

指定任务的状态。如果未填写，则查询所有任务。

**类型：** State

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## after

```TypeScript
after?: long
```

开始的Unix时间戳（毫秒），默认值为调用时刻减24小时。

**类型：** long

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## bundle

```TypeScript
bundle?: string
```

Specify the package name of an application. Only for advanced search, common search will be fixed to the caller. A "*" means any bundle.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

**系统接口：** 此接口为系统接口。

