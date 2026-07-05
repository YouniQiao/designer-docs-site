# AlbumChangeInfo

Defines the detailed attributes of an album.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## albumOrder

```TypeScript
albumOrder?: number
```

The album order of album asset.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## coverInfo

```TypeScript
coverInfo?: PhotoAssetChangeInfo
```

Detailed asset change information of the cover.

**Type:** PhotoAssetChangeInfo

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hidden

```TypeScript
hidden?: boolean
```

hidden state of the album.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenCount

```TypeScript
hiddenCount: number
```

Total number of hidden photos and videos in the album.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenCoverInfo

```TypeScript
hiddenCoverInfo?: PhotoAssetChangeInfo
```

Cover changes of hidden assets in the album.

**Type:** PhotoAssetChangeInfo

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## hiddenCoverUri

```TypeScript
hiddenCoverUri: string
```

Cover of hidden assets in the album.

**Type:** string

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isCoverChanged

```TypeScript
isCoverChanged: boolean
```

Whether the album cover content is changed. It is used to distinguish between attribute changes and content changes of a photo.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## isHiddenCoverChanged

```TypeScript
isHiddenCoverChanged: boolean
```

Whether the cover of hidden assets in the album is changed. It is used to distinguish between attribute changes and content changes of a cover asset.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## lpath

```TypeScript
lpath?: string
```

The virtual path of album.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## orderSection

```TypeScript
orderSection?: number
```

The order section of album asset.

**Type:** number

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

