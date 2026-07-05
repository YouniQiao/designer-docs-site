# UploadProgress

文件上传进度信息。

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## processed

```TypeScript
processed: long
```

已上传数据大小，取值范围[0, 9223372036854775807]，单位：Byte。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## size

```TypeScript
size: long
```

当前文件总大小，取值范围[0, 9223372036854775807]，单位：Byte。

**Type:** long

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## state

```TypeScript
state: UploadState
```

文件上传状态。

**Type:** UploadState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## error

```TypeScript
error: ErrorType
```

上传的错误类型。

**Type:** ErrorType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## uri

```TypeScript
uri: string
```

当前文件的URI。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

