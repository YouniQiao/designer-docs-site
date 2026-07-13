# FetchResult (System API)

Implements file retrieval.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [FetchResult](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { userFileManager } from '@kit.CoreFileKit';
```

## close

```TypeScript
close(): void
```

Releases the FetchResult instance and invalidates it. Other methods cannot be called.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [close](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#close-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('fetchResultCloseDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  try {
    let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
    fetchResult.close();
    console.info('close succeed.');
  } catch (err) {
    console.error('close fail. message = ' + err);
  }
}

```

## getAllObject

```TypeScript
getAllObject(callback: AsyncCallback<Array<T>>): void
```

Obtains all T in the file retrieval result.
This method uses a callback to return the result. After this method is called,

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [getAllObjects](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getallobjects-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;T&gt;&gt; | Yes | Callback used to return a T array. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAllObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  fetchResult.getAllObject((err, fileAssetList) => {
    if (fileAssetList != undefined) {
      console.info('fileAssetList length: ', fileAssetList.length);
    } else {
      console.error('fileAssetList failed with err:' + err);
    }
  });
}

```

## getAllObject

```TypeScript
getAllObject(): Promise<Array<T>>
```

Obtains all T in the file retrieval result.
This method uses a promise to return the result. that store the selected media resources.

**Since:** 10

**Deprecated since:** 26.0.0

**Substitutes:** [getAllObjects](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getallobjects-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;T&gt;&gt; | A Promise instance used to return a T array. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getAllObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let fileAssetList: Array<userFileManager.FileAsset> = await fetchResult.getAllObject();
  console.info('fileAssetList length: ', fileAssetList.length);
}

```

## getCount

```TypeScript
getCount(): number
```

Obtains the total number of files in the file retrieval result.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getCount](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getcount-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of files. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getCountDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const fetchCount: number = fetchResult.getCount();
  console.info('fetchCount = ', fetchCount);
}

```

## getFirstObject

```TypeScript
getFirstObject(callback: AsyncCallback<T>): void
```

Obtains the first FileAsset in the file retrieval result. This method uses a callback to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getFirstObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getfirstobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T&gt; | Yes | Callback used to return the file in the format of a FileAsset instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getFirstObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  fetchResult.getFirstObject((err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('fileAsset displayName: ', fileAsset.displayName);
    } else {
      console.error('fileAsset failed with err:' + err);
    }
  });
}

```

## getFirstObject

```TypeScript
getFirstObject(): Promise<T>
```

Obtains the first T in the file retrieval result. This method uses a promise to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getFirstObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getfirstobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | A Promise instance used to return the file in the format of a T instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getFirstObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getFirstObject();
  console.info('fileAsset displayName: ', fileAsset.displayName);
}

```

## getLastObject

```TypeScript
getLastObject(callback: AsyncCallback<T>): void
```

Obtains the last T in the file retrieval result. This method uses a callback to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getLastObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getlastobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T&gt; | Yes | Callback used to return the file in the format of a T instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getLastObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  fetchResult.getLastObject((err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('fileAsset displayName: ', fileAsset.displayName);
    } else {
      console.error('fileAsset failed with err: ' + err);
    }
  });
}

```

## getLastObject

```TypeScript
getLastObject(): Promise<T>
```

Obtains the last T in the file retrieval result. This method uses a promise to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getLastObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getlastobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | A Promise instance used to return the file in the format of a T instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getLastObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getLastObject();
  console.info('fileAsset displayName: ', fileAsset.displayName);
}

```

## getNextObject

```TypeScript
getNextObject(callback: AsyncCallback<T>): void
```

Obtains the next T in the file retrieval result.
This method uses a callback to return the file.
Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
This method returns the next file only when False is returned for isAfterLast().

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getNextObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getnextobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;T&gt; | Yes | Callback used to return the file in the format of a T instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getNextObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  await fetchResult.getFirstObject();
  if (!fetchResult.isAfterLast()) {
    fetchResult.getNextObject((err, fileAsset) => {
      if (fileAsset != undefined) {
        console.info('fileAsset displayName: ', fileAsset.displayName);
      } else {
        console.error('fileAsset failed with err: ' + err);
      }
    });
  }
}

```

## getNextObject

```TypeScript
getNextObject(): Promise<T>
```

Obtains the next T in the file retrieval result.
This method uses a promise to return the file.
Before calling this method, you must use isAfterLast() to check whether the result set points to the last row.
This method returns the next file only when False is returned for isAfterLast().

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getNextObject](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getnextobject-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | A Promise instance used to return the file in the format of a T instance. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getNextObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  await fetchResult.getFirstObject();
  if (!fetchResult.isAfterLast()) {
    let fileAsset: userFileManager.FileAsset = await fetchResult.getNextObject();
    console.info('fileAsset displayName: ', fileAsset.displayName);
  }
}

```

## getPositionObject

```TypeScript
getPositionObject(index: number, callback: AsyncCallback<T>): void
```

Obtains the T with the specified index in the file retrieval result.
This method uses a callback to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getObjectByPosition](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getobjectbyposition-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the file to obtain. |
| callback | AsyncCallback&lt;T&gt; | Yes | Callback used to return the file in the format of a T instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type index is not number |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPositionObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  fetchResult.getPositionObject(0, (err, fileAsset) => {
    if (fileAsset != undefined) {
      console.info('fileAsset displayName: ', fileAsset.displayName);
    } else {
      console.error('fileAsset failed with err: ' + err);
    }
  });
}

```

## getPositionObject

```TypeScript
getPositionObject(index: number): Promise<T>
```

Obtains the T with the specified index in the file retrieval result.
This method uses a promise to return the file.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [getObjectByPosition](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#getobjectbyposition-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the file to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T&gt; | A Promise instance used to return the file in the format of a T instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | if type index is not number |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  console.info('getPositionObjectDemo');
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  if (fetchResult.getCount() > 0) {
    let fileAsset: userFileManager.FileAsset = await fetchResult.getPositionObject(0);
    console.info('fileAsset displayName: ', fileAsset.displayName);
  } else {
    console.info('No file assets found');
  } 
}

```

## isAfterLast

```TypeScript
isAfterLast(): boolean
```

Checks whether the result set points to the last row.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [isAfterLast](../../apis-media-library-kit/arkts-apis/arkts-medialibrary-fetchresult-i.md#isafterlast-1)

**System capability:** SystemCapability.FileManagement.UserFileManager.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the file is the last one.You need to check whether the file is the last one before calling getNextObject,which returns the next file only when False is returned for this method. |

**Example**

For details about how to create a userFileManager instance, see the example in [userFileManager.getUserFileMgr](#userfilemanagergetuserfilemgr).

```TypeScript
import { dataSharePredicates } from '@kit.ArkData';

async function example(mgr: userFileManager.UserFileManager) {
  let predicates: dataSharePredicates.DataSharePredicates = new dataSharePredicates.DataSharePredicates();
  let fetchOption: userFileManager.FetchOptions = {
    fetchColumns: [],
    predicates: predicates
  };
  let fetchResult: userFileManager.FetchResult<userFileManager.FileAsset> = await mgr.getPhotoAssets(fetchOption);
  const fetchCount: number = fetchResult.getCount();
  console.info('count:' + fetchCount);
  let fileAsset: userFileManager.FileAsset = await fetchResult.getLastObject();
  if (fetchResult.isAfterLast()) {
    console.info('fileAsset isAfterLast displayName = ', fileAsset.displayName);
  } else {
    console.info('fileAsset  not isAfterLast ');
  }
}

```

