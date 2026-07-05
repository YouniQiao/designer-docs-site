# MediaAssetDataHandler

Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
```

## onDataPrepared

```TypeScript
onDataPrepared(data: T, map?: Map<string, string>): void
```

Indicates required media asset data is prepared

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T | Yes | the returned data of media asset |
| map | Map&lt;string, string&gt; | No | additional information for the data |

