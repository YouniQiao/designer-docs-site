# OptimizeSpaceProgress

立即优化空间状态和当前进度。

**Since:** 17

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## progress

```TypeScript
progress: int
```

优化进度百分比，范围[0,100]，单位：百分比。

**Type:** int

**Since:** 17

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## state

```TypeScript
state: OptimizeState
```

枚举值，优化空间状态。

**Type:** OptimizeState

**Since:** 17

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

