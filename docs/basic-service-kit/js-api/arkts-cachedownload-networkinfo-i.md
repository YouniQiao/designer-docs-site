# NetworkInfo

预下载的网络信息。

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';
```

## ip

```TypeScript
readonly ip?: string
```

下载资源时url的ip地址。当dns解析失败时，ip为undefined。

**Type:** string

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## dnsServers

```TypeScript
readonly dnsServers: string[]
```

下载资源时使用的dns服务器列表。

**Type:** string[]

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

