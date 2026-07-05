# HttpResponse

任务响应头的数据结构。

**起始版本：** 12

**系统能力：** SystemCapability.Request.FileTransferAgent

## 导入模块

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## headers

```TypeScript
readonly headers: Map<string, Array<string>>
```

Http响应头部。

**类型：** Map<string, Array<string>>

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## reason

```TypeScript
readonly reason: string
```

Http响应原因。

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## version

```TypeScript
readonly version: string
```

Http版本。

**类型：** string

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

## statusCode

```TypeScript
readonly statusCode: int
```

Http响应状态码。

**类型：** int

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Request.FileTransferAgent

