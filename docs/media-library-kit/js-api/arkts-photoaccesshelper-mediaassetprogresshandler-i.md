# MediaAssetProgressHandler

Data handler used to notify the progress of required media asset data

**Since:** 15

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onProgress

```TypeScript
onProgress(progress: int): void
```

Indicates the progress of required media asset data

**Since:** 15

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | int | Yes | Progress in percentage. Value range: 0 to 100 |

