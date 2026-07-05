# PhotoSelectOptions

图库选择选项。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions

**System capability:** SystemCapability.FileManagement.UserFileService

## Modules to Import

```TypeScript
import { picker } from '@kit.CoreFileKit';
```

## MIMEType

```TypeScript
MIMEType?: PhotoViewMIMETypes
```

可选择的媒体文件类型。若无此参数，则默认为图片和视频类型。

**Type:** PhotoViewMIMETypes

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions#MIMEType

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

## maxSelectNumber

```TypeScript
maxSelectNumber?: number
```

选择媒体文件数量的最大值，默认值为50，最大值为500。

**Type:** number

**Since:** 9

**Deprecated since:** 18

**Substitute:** @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSelectOptions#maxSelectNumber

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.UserFileService

