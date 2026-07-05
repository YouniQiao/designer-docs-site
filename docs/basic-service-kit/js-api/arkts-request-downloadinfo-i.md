# DownloadInfo

下载任务信息，[getTaskInfo]request.DownloadTask.getTaskInfo()接口的回调参数。

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## downloadTotalBytes

```TypeScript
downloadTotalBytes: long
```

下载的文件的总大小，单位为字节（B）。

**Type:** long

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## fileName

```TypeScript
fileName: string
```

下载的文件名。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## downloadTitle

```TypeScript
downloadTitle: string
```

下载任务名称。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## filePath

```TypeScript
filePath: string
```

存储文件的URI。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## targetURI

```TypeScript
targetURI: string
```

下载文件的URI。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## downloadId

```TypeScript
downloadId: long
```

下载任务id。

**Type:** long

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## description

```TypeScript
description: string
```

待下载任务的描述信息。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## pausedReason

```TypeScript
pausedReason: int
```

会话暂停的原因，可以是任何 [下载任务暂停原因](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## downloadedBytes

```TypeScript
downloadedBytes: long
```

实时下载大小，单位为字节（B）。

**Type:** long

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## status

```TypeScript
status: int
```

下载状态码，可以是任何 [下载任务状态码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

## failedReason

```TypeScript
failedReason: int
```

下载失败原因，可以是任何 [下载任务的错误码](docroot://reference/apis-basic-services-kit/js-apis-request.md#constants)常量。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.MiscServices.Download

