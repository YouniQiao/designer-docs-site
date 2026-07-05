# MediaAssetEditData

Represents the edited media asset data.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## constructor

```TypeScript
constructor(compatibleFormat: string, formatVersion: string)
```

Constructor.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compatibleFormat | string | Yes | Format of the edited data. |
| formatVersion | string | Yes | Version of the data format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Called by non-system application |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 14000011 | System inner fail |

**Example**

```TypeScript
let assetEditData: photoAccessHelper.MediaAssetEditData = new photoAccessHelper.MediaAssetEditData('system', '1.0');

```

## compatibleFormat

```TypeScript
compatibleFormat: string
```

Compatible format

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## data

```TypeScript
data: string
```

Edit data

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## formatVersion

```TypeScript
formatVersion: string
```

Format version

**Type:** string

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

