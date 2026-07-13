# @ohos.filemanagement.userFileManager

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
| [getUserFileMgr](arkts-corefile-getuserfilemgr-f-sys.md#getuserfilemgr-1) | Returns an instance of UserFileManager |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AbsAlbum](arkts-corefile-absalbum-i-sys.md) | Defines the AbsAlbum. |
| [Album](arkts-corefile-album-i-sys.md) | Defines the album. |
| [AlbumFetchOptions](arkts-corefile-albumfetchoptions-i-sys.md) | Fetch parameters |
| [ChangeData](arkts-corefile-changedata-i-sys.md) | the value of the monitor callback function |
| [FetchOptions](arkts-corefile-fetchoptions-i-sys.md) | Fetch parameters |
| [FetchResult](arkts-corefile-fetchresult-i-sys.md) | Implements file retrieval. |
| [FileAsset](arkts-corefile-fileasset-i-sys.md) | Provides methods to encapsulate file attributes. |
| [PeerInfo](arkts-corefile-peerinfo-i-sys.md) | Peer devices' information |
| [PhotoCreateOptions](arkts-corefile-photocreateoptions-i-sys.md) | Describe additional operations for creating photo |
| [PrivateAlbum](arkts-corefile-privatealbum-i-sys.md) | Defines the private album |
| [UserFileManager](arkts-corefile-userfilemanager-i-sys.md) | Defines the UserFileManager class and provides functions to access the data in user file storage. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AlbumKey](arkts-corefile-albumkey-e-sys.md) | Describes Album TYPE predicate |
| [AlbumSubType](arkts-corefile-albumsubtype-e-sys.md) | Album subtype |
| [AlbumType](arkts-corefile-albumtype-e-sys.md) | Album type. |
| [AudioKey](arkts-corefile-audiokey-e-sys.md) | Describes AUDIO TYPE FetchOptions's predicate |
| [DefaultChangeUri](arkts-corefile-defaultchangeuri-e-sys.md) | DefaultChangeUri subtype |
| [FileType](arkts-corefile-filetype-e-sys.md) | Enumeration types for different kinds of Files |
| [ImageVideoKey](arkts-corefile-imagevideokey-e-sys.md) | Describes Image, Video TYPE FetchOptions's predicate |
| [NotifyType](arkts-corefile-notifytype-e-sys.md) | NotifyType subtype |
| [PhotoSubType](arkts-corefile-photosubtype-e-sys.md) | Enumeration types for different types of FileAsset |
| [PositionType](arkts-corefile-positiontype-e-sys.md) | File position |
| [PrivateAlbumType](arkts-corefile-privatealbumtype-e-sys.md) | Private album type |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ChangeEvent](arkts-corefile-changeevent-t-sys.md) | Indicates the type of notify event. |
| [MemberType](arkts-corefile-membertype-t-sys.md) | Indicates the type of file asset member. |
<!--DelEnd-->

