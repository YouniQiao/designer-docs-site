# AlbumChangeData

Defines the album change data.

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## albumBeforeChange

```TypeScript
albumBeforeChange: AlbumChangeInfo | null
```

Album before change.

**Type:** AlbumChangeInfo | null

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## version

```TypeScript
version: long
```

Version of the album information. It is used to determine the sequence of notifications.

**Type:** long

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## albumAfterChange

```TypeScript
albumAfterChange: AlbumChangeInfo | null
```

Album after change.

**Type:** AlbumChangeInfo | null

**Since:** 20

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

