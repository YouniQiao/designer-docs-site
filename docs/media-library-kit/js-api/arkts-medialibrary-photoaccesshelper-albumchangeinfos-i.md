# AlbumChangeInfos

Describes the notification information about the change of an album.

**Since:** 20

<!--Device-photoAccessHelper-interface AlbumChangeInfos--><!--Device-photoAccessHelper-interface AlbumChangeInfos-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## albumChangeDatas

```TypeScript
albumChangeDatas: AlbumChangeData[] | null
```

Array of changed albums. If all albums need to be queried again, **albumChangeDatas** is null.

**Type:** AlbumChangeData[] | null

**Since:** 20

<!--Device-AlbumChangeInfos-albumChangeDatas: AlbumChangeData[] | null--><!--Device-AlbumChangeInfos-albumChangeDatas: AlbumChangeData[] | null-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isForRecheck

```TypeScript
isForRecheck: boolean
```

Whether the application should query all media assets again. **true** if the application should query all assets again, **false** otherwise.

**NOTE**

In scenarios involving bulk asset operations or abnormal notifications, **isForRecheck** will be **true**. In this case, the application should query all assets again.

**Type:** boolean

**Since:** 20

<!--Device-AlbumChangeInfos-isForRecheck: boolean--><!--Device-AlbumChangeInfos-isForRecheck: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## type

```TypeScript
type: NotifyChangeType
```

Type of the album change.

**Type:** NotifyChangeType

**Since:** 20

<!--Device-AlbumChangeInfos-type: NotifyChangeType--><!--Device-AlbumChangeInfos-type: NotifyChangeType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

