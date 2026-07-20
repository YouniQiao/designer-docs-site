# AlbumPickerComponent

AlbumPickerComponent: can select a certain album and display the images in that album through PhotoPickerComponent

**Since:** 12

<!--Device-unnamed-export declare struct AlbumPickerComponent--><!--Device-unnamed-export declare struct AlbumPickerComponent-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { EmptyAreaClickCallback, AlbumPickerComponent, AlbumInfo, AlbumPickerOptions, AlbumPickerController } from '@kit.MediaLibraryKit';
```

## albumPickerController

```TypeScript
albumPickerController?: AlbumPickerController
```

AlbumPickerController

**Type:** AlbumPickerController

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AlbumPickerComponent-albumPickerController?: AlbumPickerController--><!--Device-AlbumPickerComponent-albumPickerController?: AlbumPickerController-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumPickerOptions

```TypeScript
albumPickerOptions?: AlbumPickerOptions
```

AlbumPickerOptions

**Type:** AlbumPickerOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlbumPickerComponent-albumPickerOptions?: AlbumPickerOptions--><!--Device-AlbumPickerComponent-albumPickerOptions?: AlbumPickerOptions-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onAlbumClick

```TypeScript
onAlbumClick?: (albumInfo: AlbumInfo) => boolean
```

Callback when select an album, will return album uri

**Type:** (albumInfo: AlbumInfo) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlbumPickerComponent-onAlbumClick?: (albumInfo: AlbumInfo) => boolean--><!--Device-AlbumPickerComponent-onAlbumClick?: (albumInfo: AlbumInfo) => boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onEmptyAreaClick

```TypeScript
onEmptyAreaClick?: EmptyAreaClickCallback
```

Callback when click the empty area of the album component

**Type:** EmptyAreaClickCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-AlbumPickerComponent-onEmptyAreaClick?: EmptyAreaClickCallback--><!--Device-AlbumPickerComponent-onEmptyAreaClick?: EmptyAreaClickCallback-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

