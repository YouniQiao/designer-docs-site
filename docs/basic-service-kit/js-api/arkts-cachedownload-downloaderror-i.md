# DownloadError

预下载错误回调的返回信息。

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';
```

## errorCode

```TypeScript
readonly errorCode: ErrorCode
```

预下载错误回调返回的特定错误类型。

**Type:** ErrorCode

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## message

```TypeScript
readonly message: string
```

返回[通用错误码](docroot://reference/errorcode-universal.md)或 [HTTP错误码](docroot://reference/apis-network-kit/errorcode-net-http.md)。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

