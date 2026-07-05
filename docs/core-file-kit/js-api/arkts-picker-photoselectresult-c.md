# PhotoSelectResult

返回图库选择后的结果集。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## isOriginalPhoto

```TypeScript
isOriginalPhoto: boolean
```

返回图库选择后的媒体文件是否为原图。true为原图；false不是原图。

**Type:** boolean

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult#isOriginalPhoto

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## photoUris

```TypeScript
photoUris: Array<string>
```

返回图库选择后的媒体文件的URI数组。此URI数组只能通过临时授权的方式调用接口 [photoAccessHelper.getAssets](../../apis-media-library-kit/arkts-apis/arkts-photoaccesshelper-photoaccesshelper-i.md#getAssets) 去使用，具体使用方式参见用户文件URI介绍中的[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。

**Type:** Array<string>

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectResult#photoUris

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

