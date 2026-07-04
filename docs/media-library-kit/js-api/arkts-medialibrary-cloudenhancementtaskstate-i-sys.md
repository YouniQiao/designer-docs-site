# CloudEnhancementTaskState (System API)

Represents the cloud enhancement task information, which includes the cloud enhancement task state and other information related to certain states.

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## expectedDuration

```TypeScript
readonly expectedDuration?: number
```

Indicates the expected duration of cloud enhancement queue time.

**Type:** number

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## statusCode

```TypeScript
readonly statusCode?: number
```

Status code when failed in cloud enhancement.

**Type:** number

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## taskStage

```TypeScript
readonly taskStage: CloudEnhancementTaskStage
```

Indicates the cloud enhancement task stage.

**Type:** CloudEnhancementTaskStage

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## totalFileSize

```TypeScript
readonly totalFileSize?: number
```

Indicates the total file size.

**Type:** number

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## transferredFileSize

```TypeScript
readonly transferredFileSize?: number
```

Indicates the transferred file size.

**Type:** number

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

