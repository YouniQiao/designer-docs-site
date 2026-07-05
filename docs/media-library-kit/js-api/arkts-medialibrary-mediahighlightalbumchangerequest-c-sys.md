# MediaHighlightAlbumChangeRequest (System API)

Defines the class of media highlight album change request.

**Inheritance/Implementation:** MediaHighlightAlbumChangeRequest extends [MediaAnalysisAlbumChangeRequest](arkts-medialibrary-mediaanalysisalbumchangerequest-c-sys.md#mediaanalysisalbumchangerequest)

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## constructor

```TypeScript
constructor(album: Album)
```

Constructor.

**Since:** 21

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| album | Album | Yes | **Highlights** album. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |

**Example**

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

**Since:** 21

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attribute | HighlightAlbumChangeAttribute | Yes | Highlight attribute to be set. |
| value | string | Yes | Value of attribute. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application. |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out. |

**Example**

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

