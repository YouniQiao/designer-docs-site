# UploadResponse

**起始版本：** 3

**废弃版本：** 9

**替代接口：** @ohos.request:request.UploadConfig

**系统能力：** SystemCapability.MiscServices.Upload

## 导入模块

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## headers

```TypeScript
headers: Object
```

服务器返回的返回头内容。

**类型：** Object

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.HttpResponse.headers

**系统能力：** SystemCapability.MiscServices.Upload

## code

```TypeScript
code: number
```

服务器返回的HTTP状态码。

**类型：** number

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.HttpResponse.statusCode

**系统能力：** SystemCapability.MiscServices.Upload

## data

```TypeScript
data: string
```

服务器返回的内容。根据返回头内容中的type决定该值的类型。

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Progress.extras

**系统能力：** SystemCapability.MiscServices.Upload

