# DownloadRequestOptions

**起始版本：** 3

**废弃版本：** 9

**替代接口：** @ohos.request:request.UploadConfig

**系统能力：** SystemCapability.MiscServices.Download

## 导入模块

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when downloading fails.

**类型：** (data: any, code: number) => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Task.on

**系统能力：** SystemCapability.MiscServices.Download

## filename

```TypeScript
filename?: string
```

Name of the file to downloaded. The value is obtained from the current request or resource URL by default.

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Config.saveas

**系统能力：** SystemCapability.MiscServices.Download

## success

```TypeScript
success?: (data: DownloadResponse) => void
```

Called when the files are successfully downloaded.

**类型：** (data: DownloadResponse) => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Task.on

**系统能力：** SystemCapability.MiscServices.Download

## description

```TypeScript
description?: string
```

Download description. The default value is the file name.

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Config.description

**系统能力：** SystemCapability.MiscServices.Download

## header

```TypeScript
header?: string
```

Request header.

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Config.headers

**系统能力：** SystemCapability.MiscServices.Download

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**类型：** () => void

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Task.on

**系统能力：** SystemCapability.MiscServices.Download

## url

```TypeScript
url: string
```

Resource URL.

**类型：** string

**起始版本：** 3

**废弃版本：** 9

**替代接口：** ohos.request.agent.Config.url

**系统能力：** SystemCapability.MiscServices.Download

