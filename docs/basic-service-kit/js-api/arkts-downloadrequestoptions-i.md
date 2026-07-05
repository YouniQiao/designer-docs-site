# DownloadRequestOptions

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.UploadConfig

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

Called when downloading fails.

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Download

## filename

```TypeScript
filename?: string
```

Name of the file to downloaded. The value is obtained from the current request or resource URL by default.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.saveas

**System capability:** SystemCapability.MiscServices.Download

## success

```TypeScript
success?: (data: DownloadResponse) => void
```

Called when the files are successfully downloaded.

**Type:** (data: DownloadResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Download

## description

```TypeScript
description?: string
```

Download description. The default value is the file name.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.description

**System capability:** SystemCapability.MiscServices.Download

## header

```TypeScript
header?: string
```

Request header.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.headers

**System capability:** SystemCapability.MiscServices.Download

## complete

```TypeScript
complete?: () => void
```

接口调用结束的回调函数。

**Type:** () => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Download

## url

```TypeScript
url: string
```

Resource URL.

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Config.url

**System capability:** SystemCapability.MiscServices.Download

