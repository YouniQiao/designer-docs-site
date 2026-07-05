# OnDownloadCompleteOptions

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { UploadResponse,RequestData,DownloadRequestOptions,DownloadResponse,RequestFile,OnDownloadCompleteOptions,OnDownloadCompleteResponse,UploadRequestOptions } from '@kit.BasicServicesKit';
```

## fail

```TypeScript
fail?: (data: any, code: number) => void
```

接口调用失败的回调函数。返回header信息与HTTP状态码。

**Type:** (data: any, code: number) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

**System capability:** SystemCapability.MiscServices.Download

## success

```TypeScript
success?: (data: OnDownloadCompleteResponse) => void
```

接口调用成功的回调函数。

**Type:** (data: OnDownloadCompleteResponse) => void

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.on

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

## token

```TypeScript
token: string
```

download 接口返回的结果 token。

**Type:** string

**Since:** 3

**Deprecated since:** 9

**Substitute:** ohos.request.agent.Task.tid

**System capability:** SystemCapability.MiscServices.Download

