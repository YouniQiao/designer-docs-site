# @ohos.filemanagement.userFileManager

**起始版本：** 9

**废弃版本：** 26.0.0

**替代接口：** @ohos.file.photoAccessHelper:photoAccessHelper

**系统能力：** SystemCapability.FileManagement.UserFileManager.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getUserFileMgr](arkts-userfilemanager-getuserfilemgr-f-sys.md#getUserFileMgr-1) | Returns an instance of UserFileManager |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AbsAlbum](arkts-userfilemanager-absalbum-i-sys.md) | Defines the AbsAlbum. |
| <!--DelRow-->[Album](arkts-userfilemanager-album-i-sys.md) | Defines the album. |
| <!--DelRow-->[AlbumFetchOptions](arkts-userfilemanager-albumfetchoptions-i-sys.md) | Fetch parameters |
| <!--DelRow-->[ChangeData](arkts-userfilemanager-changedata-i-sys.md) | the value of the monitor callback function |
| <!--DelRow-->[FetchOptions](arkts-userfilemanager-fetchoptions-i-sys.md) | Fetch parameters |
| <!--DelRow-->[FetchResult](arkts-userfilemanager-fetchresult-i-sys.md) | Implements file retrieval. |
| <!--DelRow-->[FileAsset](arkts-userfilemanager-fileasset-i-sys.md) | Provides methods to encapsulate file attributes. |
| <!--DelRow-->[PeerInfo](arkts-userfilemanager-peerinfo-i-sys.md) | Peer devices' information |
| <!--DelRow-->[PhotoCreateOptions](arkts-userfilemanager-photocreateoptions-i-sys.md) | Describe additional operations for creating photo |
| <!--DelRow-->[PrivateAlbum](arkts-userfilemanager-privatealbum-i-sys.md) | Defines the private album |
| <!--DelRow-->[UserFileManager](arkts-userfilemanager-userfilemanager-i-sys.md) | Defines the UserFileManager class and provides functions to access the data in user file storage. |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ChangeEvent](arkts-userfilemanager-changeevent-t-sys.md) | Indicates the type of notify event. |
| <!--DelRow-->[MemberType](arkts-userfilemanager-membertype-t-sys.md) | Indicates the type of file asset member. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AlbumKey](arkts-userfilemanager-albumkey-e-sys.md) | Describes Album TYPE predicate |
| <!--DelRow-->[AlbumSubType](arkts-userfilemanager-albumsubtype-e-sys.md) | Album subtype |
| <!--DelRow-->[AlbumType](arkts-userfilemanager-albumtype-e-sys.md) | Album type. |
| <!--DelRow-->[AudioKey](arkts-userfilemanager-audiokey-e-sys.md) | Describes AUDIO TYPE FetchOptions's predicate |
| <!--DelRow-->[DefaultChangeUri](arkts-userfilemanager-defaultchangeuri-e-sys.md) | DefaultChangeUri subtype |
| <!--DelRow-->[FileType](arkts-userfilemanager-filetype-e-sys.md) | Enumeration types for different kinds of Files |
| <!--DelRow-->[ImageVideoKey](arkts-userfilemanager-imagevideokey-e-sys.md) | Describes Image, Video TYPE FetchOptions's predicate |
| <!--DelRow-->[NotifyType](arkts-userfilemanager-notifytype-e-sys.md) | NotifyType subtype |
| <!--DelRow-->[PhotoSubType](arkts-userfilemanager-photosubtype-e-sys.md) | Enumeration types for different types of FileAsset |
| <!--DelRow-->[PositionType](arkts-userfilemanager-positiontype-e-sys.md) | File position |
| <!--DelRow-->[PrivateAlbumType](arkts-userfilemanager-privatealbumtype-e-sys.md) | Private album type |

