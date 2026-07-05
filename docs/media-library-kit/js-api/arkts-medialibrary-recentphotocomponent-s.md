# RecentPhotoComponent

Declare struct RecentPhotoComponent

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { RecentPhotoComponent, RecentPhotoCheckResultCallback, RecentPhotoCheckInfoCallback, PhotoSource, RecentPhotoClickCallback, RecentPhotoOptions, RecentPhotoInfo } from '@ohos.file.RecentPhotoComponent';
```

## onRecentPhotoCheckInfo

```TypeScript
onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback
```

Callback when check whether photos or videos exists and return the recent photo info

**Type:** RecentPhotoCheckInfoCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onRecentPhotoCheckResult

```TypeScript
onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback
```

Callback when check whether photos or videos exists

**Type:** RecentPhotoCheckResultCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onRecentPhotoClick

```TypeScript
onRecentPhotoClick: RecentPhotoClickCallback
```

Callback when select photos or videos

**Type:** RecentPhotoClickCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recentPhotoOptions

```TypeScript
recentPhotoOptions?: RecentPhotoOptions
```

recentPhotoOptions

**Type:** RecentPhotoOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

