# AlbumPickerOptions

AlbumPickerOptions Object

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { EmptyAreaClickCallback, AlbumPickerComponent, AlbumInfo, AlbumPickerOptions, AlbumPickerController } from '@ohos.file.AlbumPickerComponent';
```

## filterType

```TypeScript
filterType?: photoAccessHelper.PhotoViewMIMETypes
```

The type of the content displayed in the album

**Type:** photoAccessHelper.PhotoViewMIMETypes

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fontSize

```TypeScript
fontSize?: number | string
```

The size of the font displayed in the album. When `fontSize` is a number type, must use 'fp' unit

**Type:** number | string

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## themeColorMode

```TypeScript
themeColorMode?: PickerColorMode
```

AlbumPickerComponent theme color

**Type:** PickerColorMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

