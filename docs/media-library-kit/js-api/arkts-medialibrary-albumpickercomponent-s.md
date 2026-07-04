# AlbumPickerComponent

AlbumPickerComponent: can select a certain album and display the images in that album through PhotoPickerComponent

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { EmptyAreaClickCallback, AlbumPickerComponent, AlbumInfo, AlbumPickerOptions, AlbumPickerController } from '@ohos.file.AlbumPickerComponent';
```

## albumPickerController

```TypeScript
albumPickerController?: AlbumPickerController
```

AlbumPickerController

**Type:** AlbumPickerController

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumPickerOptions

```TypeScript
albumPickerOptions?: AlbumPickerOptions
```

AlbumPickerOptions

**Type:** AlbumPickerOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onAlbumClick

```TypeScript
onAlbumClick?: (albumInfo: AlbumInfo) => boolean
```

Callback when select an album, will return album uri

**Type:** (albumInfo: AlbumInfo) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onEmptyAreaClick

```TypeScript
onEmptyAreaClick?: EmptyAreaClickCallback
```

Callback when click the empty area of the album component

**Type:** EmptyAreaClickCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

