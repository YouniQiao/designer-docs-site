# UploadResponse

**Since:** 3

**Deprecated since:** 9

**Substitute:** @ohos.request:request.UploadConfig

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## headers

```TypeScript
headers: Object
```

服务器返回的返回头内容。

**Type:** Object

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.HttpResponse.headers

**System capability:** SystemCapability.MiscServices.Upload

## code

```TypeScript
code: number
```

服务器返回的HTTP状态码。

**Type:** number

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.HttpResponse.statusCode

**System capability:** SystemCapability.MiscServices.Upload

## data

```TypeScript
data: string
```

服务器返回的内容。根据返回头内容中的type决定该值的类型。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Progress.extras

**System capability:** SystemCapability.MiscServices.Upload

