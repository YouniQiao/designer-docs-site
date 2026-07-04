# QuickImageDataHandler

Data handler when quick request image is finished

**Since:** 13

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@ohos.file.photoAccessHelper';
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
| map | Map&lt;string, string&gt; | Yes | additional information for the data |

