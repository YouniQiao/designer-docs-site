# RequestFile

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.File

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## filename

```TypeScript
filename?: string
```

multipart 提交时，请求头中的文件名。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.FileSpec.filename

**System capability:** SystemCapability.MiscServices.Upload

## name

```TypeScript
name?: string
```

multipart 提交时，表单项目的名称，缺省为file。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.FormItem.name

**System capability:** SystemCapability.MiscServices.Upload

## type

```TypeScript
type?: string
```

文件的内容类型，默认根据文件名或路径的后缀获取。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.FileSpec.contentType

**System capability:** SystemCapability.MiscServices.Upload

## uri

```TypeScript
uri: string
```

文件的本地存储路径。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.FileSpec.path

**System capability:** SystemCapability.MiscServices.Upload

