# MediaHighlightAlbumChangeRequest

Defines the class of media highlight album change request.

**继承实现关系：** MediaHighlightAlbumChangeRequest继承自：MediaAnalysisAlbumChangeRequest。

**起始版本：** 21

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## constructor

```TypeScript
constructor(album: Album)
```

Constructor.

**起始版本：** 21

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| album | Album | 是 | Highlights album. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Called by non-system application. |
| 23800151 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(context: Context) {
  console.info('MediaHighlightAlbumChangeRequest constructorDemo');
  let helper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
  let albumFetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: new dataSharePredicates.DataSharePredicates()
  };
  let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> =
    await helper.getAlbums(photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, albumFetchOption);
  if (albumFetchResult.getCount() === 0) {
    console.error('No album');
    return;
  }
  let highlightAlbum: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
  albumFetchResult.close();
  let changeRequest: photoAccessHelper.MediaHighlightAlbumChangeRequest =
    new photoAccessHelper.MediaHighlightAlbumChangeRequest(highlightAlbum);
}

```

## setHighlightAttribute

```TypeScript
setHighlightAttribute(attribute: HighlightAlbumChangeAttribute, value: string): void
```

Set attribute values of highlight album.

**起始版本：** 21

**需要权限：** 

 ohos.permission.WRITE_IMAGEVIDEO

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| attribute | HighlightAlbumChangeAttribute | 是 | Highlight attribute to be set. |
| value | string | 是 | Value of attribute. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Called by non-system application. |
| 23800151 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**示例：**

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(context: Context) {
  try {
    console.info('setHighlightAttribute');
    let helper: photoAccessHelper.PhotoAccessHelper = photoAccessHelper.getPhotoAccessHelper(context);
    let albumFetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: [],
      predicates: new dataSharePredicates.DataSharePredicates()
    };
    let albumFetchResult: photoAccessHelper.FetchResult<photoAccessHelper.Album> = 
      await helper.getAlbums(photoAccessHelper.AlbumType.SMART, photoAccessHelper.AlbumSubtype.HIGHLIGHT, albumFetchOption);
    if (albumFetchResult.getCount() === 0) {
      console.error('No album');
      return;
    }
    let highlightAlbum: photoAccessHelper.Album = await albumFetchResult.getFirstObject();
    albumFetchResult.close();
    let highlightAlbumChangeAttribute: photoAccessHelper.HighlightAlbumChangeAttribute =
      photoAccessHelper.HighlightAlbumChangeAttribute.IS_VIEWED;
    let value: string = "1";
    let changeRequest: photoAccessHelper.MediaHighlightAlbumChangeRequest =
      new photoAccessHelper.MediaHighlightAlbumChangeRequest(highlightAlbum);
    changeRequest.setHighlightAttribute(highlightAlbumChangeAttribute, value);
    await helper.applyChanges(changeRequest);
    console.info(`setHighlightAttribute end`);
  } catch (err) {
    console.error(`setHighlightAttribute error: ${err}`);
  }
}

```

