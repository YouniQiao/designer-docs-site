# ExtBundleStats

系统应用或系统服务的空间占用详情。

**Since:** 23

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
```

## flag

```TypeScript
flag: boolean
```

系统应用或系统服务的空间占用是否需要在“设置-存储”界面单独展示。true表示单独显示，false表示不单独显示。 该值为false时，空间占用会被归并到businessName指定的应用中。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

## size

```TypeScript
size: long
```

系统应用或系统服务的空间占用大小，单位Byte。

**Type:** long

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

## businessName

```TypeScript
businessName: string
```

系统应用包名或系统服务名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

