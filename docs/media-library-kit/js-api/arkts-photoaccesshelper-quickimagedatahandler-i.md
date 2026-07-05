# QuickImageDataHandler

Data handler when quick request image is finished

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## onDataPrepared

```TypeScript
onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void
```

Indicates required media asset data quickly is prepared

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T | Yes | the returned data of picture |
| imageSource | image.ImageSource | Yes | the returned data of imageSource |
| map | Map&lt;string, string> | Yes | additional information for the data |

## onDataPrepared

```TypeScript
onDataPrepared(data: T | undefined, imageSource: image.ImageSource | null, map: Map<string, string>): void
```

Indicates required media asset data quickly is prepared

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | T \| undefined | Yes | the returned data of picture  if data of media asset is invalid,return undefined. |
| imageSource | image.ImageSource \| null | Yes | the returned data of imageSource  if data of imageSource is invalid, return null. |
| map | Map&lt;string, string> | Yes | additional information for the data |

