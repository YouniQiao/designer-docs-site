# @ohos.filemanagement.userFileManager

The **userFileManager** module provides user data management capabilities, including accessing and modifying user media data.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [photoAccessHelper:photoAccessHelper](../../apis-media-library-kit/arkts-apis/arkts-file-photoaccesshelper.md)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getUserFileMgr](arkts-corefile-getuserfilemgr-f-sys.md#getuserfilemgr-1) | Obtains a **UserFileManager** instance. This instance can be used to access and modify user media data (such as audio and video assets, images, and documents). |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-corefile-absalbum-i-sys.md) | Defines the AbsAlbum. |
| [Album](arkts-corefile-album-i-sys.md) | Provides APIs to manage albums. |
| [AlbumFetchOptions](arkts-corefile-albumfetchoptions-i-sys.md) | Defines the options for fetching file attributes. |
| [ChangeData](arkts-corefile-changedata-i-sys.md) | Defines the return value of the listener callback. |
| [FetchOptions](arkts-corefile-fetchoptions-i-sys.md) | Defines the options for fetching file attributes. |
| [FetchResult](arkts-corefile-fetchresult-i-sys.md) | Provides APIs to manage the file retrieval result. |
| [FileAsset](arkts-corefile-fileasset-i-sys.md) | Provides APIs for encapsulating file asset attributes. |
| [PeerInfo](arkts-corefile-peerinfo-i-sys.md) | Defines information about a registered device. |
| [PhotoCreateOptions](arkts-corefile-photocreateoptions-i-sys.md) | Defines the options for creating an image or video asset. |
| [PrivateAlbum](arkts-corefile-privatealbum-i-sys.md) | Provides APIs for managing the system albums. This API will be deprecated. Use [Album](arkts-corefile-album-i-sys.md) instead. |
| [UserFileManager](arkts-corefile-userfilemanager-i-sys.md) | Defines the UserFileManager class and provides functions to access the data in user file storage. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AlbumKey](arkts-corefile-albumkey-e-sys.md) | Defines the key album information. |
| [AlbumSubType](arkts-corefile-albumsubtype-e-sys.md) | Enumerates the album subtypes. |
| [AlbumType](arkts-corefile-albumtype-e-sys.md) | Enumerates the album types. |
| [AudioKey](arkts-corefile-audiokey-e-sys.md) | Defines the key information about an audio file. |
| [DefaultChangeUri](arkts-corefile-defaultchangeuri-e-sys.md) | Enumerates the **DefaultChangeUri** subtypes. |
| [FileType](arkts-corefile-filetype-e-sys.md) | Enumerates media file types. |
| [ImageVideoKey](arkts-corefile-imagevideokey-e-sys.md) | Defines the key information about an image or video file. |
| [NotifyType](arkts-corefile-notifytype-e-sys.md) | Enumerates the notification event types. |
| [PhotoSubType](arkts-corefile-photosubtype-e-sys.md) | Enumerates the [FileAsset](arkts-corefile-fileasset-i-sys.md) types. |
| [PositionType](arkts-corefile-positiontype-e-sys.md) | Enumerates the file location. |
| [PrivateAlbumType](arkts-corefile-privatealbumtype-e-sys.md) | Enumerates the system album types. This API will be deprecated. Use [AlbumType](arkts-corefile-albumtype-e-sys.md) and [AlbumSubType](arkts-corefile-albumsubtype-e-sys.md) instead. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ChangeEvent](arkts-corefile-changeevent-t-sys.md) | Enumerates the type of changes to observe. |
| [MemberType](arkts-corefile-membertype-t-sys.md) | Represents the type of a file asset member. |
<!--DelEnd-->

