# Progress

任务进度的数据结构。

**起始版本：** 10

**系统能力：** SystemCapability.Request.FileTransferAgent

## 导入模块

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## processed

```TypeScript
readonly processed: long
```

任务中当前文件的已处理数据大小，单位为字节（B）。

**类型：** long

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## sizes

```TypeScript
readonly sizes: Array<long>
```

任务中文件的大小，单位为字节（B）。在下载过程中，若服务器使用chunk方式传输导致无法从请求头中获取文件总大小时，sizes为 -1。

**类型：** Array<long>

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## extras

```TypeScript
readonly extras?: object
```

交互的额外内容，例如：来自服务器的响应的header和body。默认值为空。

**类型：** object

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

```TypeScript
readonly extras?: Record<string, string>
```

The extras for an interaction. Such as headers and body of response from server. But when the Content-Disposition header responded, <br>the body will be into the uri of its attachment only, the body here is empty. {"headers": {"key": v}, "body": "contents"}. The "body" field is not supported in cross-platform scenarios.

**类型：** Record<string, string>

**起始版本：** 23

**系统能力：** SystemCapability.Request.FileTransferAgent

## index

```TypeScript
readonly index: int
```

任务中当前正在处理的文件索引。

**类型：** int

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## state

```TypeScript
readonly state: State
```

任务当前的状态。

**类型：** State

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

