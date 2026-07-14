# @ohos.file.sendablePhotoAccessHelper

The module provides APIs for album management, including creating an album and accessing and modifying media data in an album, based on a [Sendable](../../../../arkts-utils/arkts-sendable.md) object.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@kit.MediaLibraryKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPhotoAccessHelper](arkts-medialibrary-getphotoaccesshelper-f.md#getphotoaccesshelper-1) | Obtains a PhotoAccessHelper instance, which can be used for accessing and modifying media files in an album. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPhotoAccessHelper](arkts-medialibrary-getphotoaccesshelper-f-sys.md#getphotoaccesshelper-2) | Obtains a PhotoAccessHelper instance for the specified user, letting you access and modify media files in an album. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i.md) | Provides APIs to manage albums. |
| [FetchResult](arkts-medialibrary-fetchresult-i.md) | Provides APIs to manage the file retrieval result. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i.md) | Provides APIs for encapsulating file asset attributes. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-medialibrary-absalbum-i-sys.md) | Defines the abstract interface of albums. |
| [Album](arkts-medialibrary-album-i-sys.md) | Provides APIs to manage albums. |
| [PhotoAccessHelper](arkts-medialibrary-photoaccesshelper-i-sys.md) | Helper functions to access photos and albums. |
| [PhotoAsset](arkts-medialibrary-photoasset-i-sys.md) | Provides APIs for encapsulating file asset attributes. |
| [SharedPhotoAsset](arkts-medialibrary-sharedphotoasset-i-sys.md) | Defines the shared photo asset |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e.md) | Enumerates the album types. |
| [DynamicRangeType](arkts-medialibrary-dynamicrangetype-e.md) | Enumerates the dynamic range types of media assets. |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md) types. |
| [PhotoType](arkts-medialibrary-phototype-e.md) | Enumerates media file types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AlbumSubtype](arkts-medialibrary-albumsubtype-e-sys.md) | Enumerate the album subtypes. |
| [AlbumType](arkts-medialibrary-albumtype-e-sys.md) | Enumerates the album types. |
| [MovingPhotoEffectMode](arkts-medialibrary-movingphotoeffectmode-e-sys.md) | Enumeration of moving photo effect mode. |
| [PhotoSubtype](arkts-medialibrary-photosubtype-e-sys.md) | Enumerates the [PhotoAsset](arkts-medialibrary-photoasset-i.md) types. |
| [PositionType](arkts-medialibrary-positiontype-e-sys.md) | Photo asset position |
| [ThumbnailVisibility](arkts-medialibrary-thumbnailvisibility-e-sys.md) | Ability to access thumbnail |
<!--DelEnd-->

