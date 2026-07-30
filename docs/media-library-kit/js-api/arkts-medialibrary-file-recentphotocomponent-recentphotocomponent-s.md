# RecentPhotoComponent

Declare struct RecentPhotoComponent

**Since:** 12

**Decorator:** @Component

<!--Device-unnamed-export declare struct RecentPhotoComponent--><!--Device-unnamed-export declare struct RecentPhotoComponent-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { RecentPhotoComponent, RecentPhotoCheckResultCallback, RecentPhotoCheckInfoCallback, PhotoSource, RecentPhotoClickCallback, RecentPhotoOptions, RecentPhotoInfo } from '@kit.MediaLibraryKit';
```

## onRecentPhotoCheckInfo

```TypeScript
onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback
```

Callback when check whether photos or videos exists and return the recent photo info

**Type:** RecentPhotoCheckInfoCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-RecentPhotoComponent-onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback--><!--Device-RecentPhotoComponent-onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onRecentPhotoCheckResult

```TypeScript
onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback
```

Callback when check whether photos or videos exists

**Type:** RecentPhotoCheckResultCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RecentPhotoComponent-onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback--><!--Device-RecentPhotoComponent-onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onRecentPhotoClick

```TypeScript
onRecentPhotoClick: RecentPhotoClickCallback
```

Callback when select photos or videos

**Type:** RecentPhotoClickCallback

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RecentPhotoComponent-onRecentPhotoClick: RecentPhotoClickCallback--><!--Device-RecentPhotoComponent-onRecentPhotoClick: RecentPhotoClickCallback-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recentPhotoOptions

```TypeScript
recentPhotoOptions?: RecentPhotoOptions
```

recentPhotoOptions

**Type:** RecentPhotoOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RecentPhotoComponent-recentPhotoOptions?: RecentPhotoOptions--><!--Device-RecentPhotoComponent-recentPhotoOptions?: RecentPhotoOptions-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

