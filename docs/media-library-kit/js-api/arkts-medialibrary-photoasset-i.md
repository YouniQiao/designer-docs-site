# PhotoAsset

Defines the photo asset

**Inheritance/Implementation:** PhotoAsset extends [lang.ISendable](../../apis-arkts/arkts-apis/arkts-arkts-isendable-i.md#isendable)

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { sendablePhotoAccessHelper } from '@ohos.file.sendablePhotoAccessHelper';
```

## commitModify

```TypeScript
commitModify(): Promise<void>
```

Commits the modification on the file metadata to the database. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.WRITE_IMAGEVIDEO

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('commitModifyDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: ['title'],
    predicates: predicates
  };
  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
  let title: string = photoAccessHelper.PhotoKeys.TITLE.toString();
  let photoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title);
  console.info('photoAsset get photoAssetTitle = ', photoAssetTitle);
  photoAsset.set(title, 'newTitle3');
  try {
    await photoAsset.commitModify();
    let newPhotoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title);
    console.info('photoAsset get newPhotoAssetTitle = ', newPhotoAssetTitle);
  } catch (err) {
    console.error(`commitModify failed. error: ${err.code}, ${err.message}`);
  }
}

```

## convertToPhotoAsset

```TypeScript
convertToPhotoAsset(): photoAccessHelper.PhotoAsset
```

Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Return value:**

| Type | Description |
| --- | --- |
| photoAccessHelper.PhotoAsset | Returns the instance if the operation is successful. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('convertToPhotoAssetDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: ['title'],
      predicates: predicates
    };
    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let sendablePhotoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    let photoAsset: photoAccessHelper.PhotoAsset = sendablePhotoAsset.convertToPhotoAsset();
    console.info(`get no sendable uri success : ${photoAsset.uri}`);
  } catch (err) {
    console.error(`convertToPhotoAsset failed. error: ${err.code}, ${err.message}`);
  }
}

```

## get

```TypeScript
get(member: string): photoAccessHelper.MemberType
```

Obtains a PhotoAsset member parameter.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the member parameter to obtain.Except 'uri', 'media_type', 'subtype', and 'display_name', you must pass in PhotoKeys in fetchColumns.For example, to obtain the title, pass in fetchColumns: ['title']. |

**Return value:**

| Type | Description |
| --- | --- |
| photoAccessHelper.MemberType | Returns the value of the specified photo asset member |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('photoAssetGetDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: ['title'],
      predicates: predicates
    };
    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    if (fetchResult === undefined) {
      console.error('photoAssetGet fetchResult is undefined');
      return;
    }
    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    let title: photoAccessHelper.PhotoKeys = photoAccessHelper.PhotoKeys.TITLE;
    let photoAssetTitle: photoAccessHelper.MemberType = photoAsset.get(title.toString());
    console.info('photoAsset Get photoAssetTitle = ', photoAssetTitle);
  } catch (err) {
    console.error(`get failed. error: ${err.code}, ${err.message}`);
  }
}

```

## getThumbnail

```TypeScript
getThumbnail(size?: image.Size): Promise<image.PixelMap>
```

Obtains the file thumbnail of the given size. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | image.Size | No | Size of the thumbnail. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;image.PixelMap&gt; | Returns the thumbnail's pixelMap. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | Internal system error |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { image } from '@kit.ImageKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('getThumbnailDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: photoAccessHelper.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let size: image.Size = { width: 720, height: 720 };
  let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
  let asset = await fetchResult.getFirstObject();
  if (asset === undefined) {
    console.error('getThumbnailPromise albums is undefined');
    return;
  }
  console.info('asset displayName = ', asset.displayName);
  asset.getThumbnail(size).then((pixelMap) => {
    console.info('getThumbnail successful ' + pixelMap);
  }).catch((err: BusinessError) => {
    console.error(`getThumbnail fail with error: ${err.code}, ${err.message}`);
  });
}

```

## set

```TypeScript
set(member: string, value: string): void
```

Sets a PhotoAsset member parameter.

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| member | string | Yes | Name of the parameter to set, for example, PhotoKeys.TITLE.The value contains 1 to 255 characters. |
| value | string | Yes | Value to set. Only the value of PhotoKeys. TITLE can be changed.The title must meet the following requirements:- It does not contain a file name extension.- The file name, which is in the format of title+file name extension, does not exceed 255 characters.- The title does not contain any of the following characters:\ / : * ? " ' ` &lt; &gt; \| { } [ ] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

For details about how to create a phAccessHelper instance, see the example provided in [sendablePhotoAccessHelper.getPhotoAccessHelper](#sendablephotoaccesshelpergetphotoaccesshelper).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';
import { photoAccessHelper } from '@kit.MediaLibraryKit';

async function example(phAccessHelper: sendablePhotoAccessHelper.PhotoAccessHelper) {
  console.info('photoAssetSetDemo');
  try {
    let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
    let fetchOption: photoAccessHelper.FetchOptions = {
      fetchColumns: ['title'],
      predicates: predicates
    };
    let fetchResult: sendablePhotoAccessHelper.FetchResult<sendablePhotoAccessHelper.PhotoAsset> = await phAccessHelper.getAssets(fetchOption);
    let photoAsset: sendablePhotoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    let title: string = photoAccessHelper.PhotoKeys.TITLE.toString();
    photoAsset.set(title, 'newTitle');
  } catch (err) {
    console.error(`set failed. error: ${err.code}, ${err.message}`);
  }
}

```

## displayName

```TypeScript
readonly displayName: string
```

Display name (with a file name extension) of the asset.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoType

```TypeScript
readonly photoType: PhotoType
```

Photo type, image or video

**Type:** PhotoType

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
readonly uri: string
```

uri of the asset.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

