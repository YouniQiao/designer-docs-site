# OptimizeSpaceParam

立即优化空间设置参数，设置优化总空间和老化天数。

**Since:** 17

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudSync } from '@kit.CoreFileKit';
```

## totalSize

```TypeScript
totalSize:long
```

优化空间总大小。查询媒体库接口获得需要老化的所有文件总大小，由应用传入，单位byte。

**Type:** long

**Since:** 17

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

## agingDays

```TypeScript
agingDays: int
```

老化天数。系统会以当前时间为基准，优化老化天数前未访问、已同步云空间的本地图片/视频，单位：天。

**Type:** int

**Since:** 17

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**System API:** This is a system API.

