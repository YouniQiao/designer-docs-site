# FetchResult

FetchResult provides APIs to manage the file retrieval result.

**Since:** 10

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getRangeObjects

```TypeScript
getRangeObjects(index: number, offset: number): Promise<T[]>
```

Obtains the file asset array of a specified length (second parameter) from the specified index (first parameter) in the result set. This API uses a promise to return the result.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of the file asset to be obtained. The value must be greater than or equal to 0 andless than the number of objects in the result set. |
| offset | number | Yes | Number of file assets to be obtained. The value must be greater than 0.<br>The sum of **index** and **offset** must be less than the total number of objects in the result set.Otherwise, error code **23800151** is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T[]&gt; | Promise array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by non-system application<br>**Applicable version:** 21 - 22 |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | The scenario parameter verification fails.<br>Possible causes: index or offset validity check failed. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. You are advised to retry and check the logs.<br>Possible causes:<br>1. The database is corrupted.<br>2. The file system is abnormal. |

