# ResourceInfo

预下载的资源信息。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';
```

## size

```TypeScript
readonly size: long
```

预下载资源解压后的大小，单位为字节（B）。当值为正整数时表示资源下载成功，-1表示下载失败。

**Type:** long

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

