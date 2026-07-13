# PhotoAssetChangeData

Defines the photo or video change data.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## assetAfterChange

```TypeScript
assetAfterChange: PhotoAssetChangeInfo | null
```

Photo or video information after change.

**Type:** PhotoAssetChangeInfo | null

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## assetBeforeChange

```TypeScript
assetBeforeChange: PhotoAssetChangeInfo | null
```

Photo or video information before change.

**Type:** PhotoAssetChangeInfo | null

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isContentChanged

```TypeScript
isContentChanged: boolean
```

Whether the content of a photo or video changes. It is used to distinguish between attribute changes
and content changes of a photo or video.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isDeleted

```TypeScript
isDeleted: boolean
```

Whether the photo or video is permanently completely.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

