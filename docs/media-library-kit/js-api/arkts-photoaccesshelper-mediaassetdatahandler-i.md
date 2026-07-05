# MediaAssetDataHandler

Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.

**Since:** 11

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
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
| map | Map&lt;string, string> | No |  |

## onDataPrepared

```TypeScript
onDataPrepared(data: T | undefined, map?: Map<string, string>): void
```

Indicates required media asset data is prepared

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T \| undefined | Yes | the returned data of media asset  if data of media asset is invalid, return undefined. |
| map | Map&lt;string, string> | No |  |

