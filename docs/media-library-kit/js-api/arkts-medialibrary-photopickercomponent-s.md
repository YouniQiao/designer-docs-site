# PhotoPickerComponent

Declare struct PhotoPickerComponent

**Since:** 12

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## build

```TypeScript
build(): void
```

Build function of PhotoPickerComponent

**Since:** 12

**Decorator:** @Builder

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onCurrentAlbumDeleted

```TypeScript
onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback
```

Callback when the current album is deleted

**Type:** CurrentAlbumDeletedCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onDeselect

```TypeScript
onDeselect?: (uri: string) => void
```

Callback when Deselect photos or videos

**Type:** (uri: string) => void

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onEnterPhotoBrowser

```TypeScript
onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean
```

Callback when enter photo browser, will return photoBrowserInfo

**Type:** (photoBrowserInfo: PhotoBrowserInfo) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onError

```TypeScript
onError?: ErrorCallback
```

Callback when an error occurs in the PhotoPickerComponent.

**Type:** ErrorCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onExceedMaxSelected

```TypeScript
onExceedMaxSelected?: ExceedMaxSelectedCallback
```

Callback when exceed max selected

**Type:** ExceedMaxSelectedCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onExitPhotoBrowser

```TypeScript
onExitPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean
```

Callback when exit photo browser, will return photoBrowserInfo

**Type:** (photoBrowserInfo: PhotoBrowserInfo) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onItemClicked

```TypeScript
onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean
```

Callback when click item. include click camera item and thumbnail item, will return itemInfo

**Type:** (itemInfo: ItemInfo, clickType: ClickType) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onItemClickedNotify

```TypeScript
onItemClickedNotify?: ItemClickedNotifyCallback
```

Callback when click item. Includes camera items and thumbnail items. Returns itemInfo in the callback.
Must be used in conjunction with the addData method.

**Type:** ItemClickedNotifyCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onMovingPhotoBadgeStateChanged

```TypeScript
onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback
```

Callback when moving photo badge state changed

**Type:** MovingPhotoBadgeStateChangedCallback

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onPhotoBrowserChangeStart

```TypeScript
onPhotoBrowserChangeStart?: PhotoBrowserChangeStartCallback
```

Callback when photo browser change start (upon user swipe release), will return targetPhotoInfo

**Type:** PhotoBrowserChangeStartCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onPhotoBrowserChanged

```TypeScript
onPhotoBrowserChanged?: (browserItemInfo: BaseItemInfo) => boolean
```

Callback when photo browser change, will return browserItemInfo

**Type:** (browserItemInfo: BaseItemInfo) => boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onPhotoBrowserZoom

```TypeScript
onPhotoBrowserZoom?: PhotoBrowserZoomCallback
```

Callback when the zoom scale changes during large image browsing.

**Type:** PhotoBrowserZoomCallback

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onPickerControllerReady

```TypeScript
onPickerControllerReady?: () => void
```

Callback when pickerController is ready.
Set data to picker component by pickerController is supported after pickerController is ready

**Type:** () => void

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onPinchGridSwitched

```TypeScript
onPinchGridSwitched?: PinchGridSwitchedCallback
```

Callback when the grid's level is switched via pinch gesture.

**Type:** PinchGridSwitchedCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onScrollStopAtEnd

```TypeScript
onScrollStopAtEnd?: ScrollStopAtEndCallback
```

Callback when the grid stops scrolling at the ending position.

**Type:** ScrollStopAtEndCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onScrollStopAtStart

```TypeScript
onScrollStopAtStart?: ScrollStopAtStartCallback
```

Callback when the grid stops scrolling at the starting position.

**Type:** ScrollStopAtStartCallback

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onSelect

```TypeScript
onSelect?: (uri: string) => void
```

Callback when select photos or videos

**Type:** (uri: string) => void

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onSelectedItemsDeleted

```TypeScript
onSelectedItemsDeleted?: ItemsDeletedCallback
```

Callback when selected items are deleted

**Type:** ItemsDeletedCallback

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## onVideoPlayStateChanged

```TypeScript
onVideoPlayStateChanged?: videoPlayStateChangedCallback
```

Callback when the video play state changed

**Type:** videoPlayStateChangedCallback

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## pickerController

```TypeScript
pickerController: PickerController
```

PickerController

**Type:** PickerController

**Since:** 12

**Decorator:** @ObjectLink

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## pickerOptions

```TypeScript
pickerOptions?: PickerOptions
```

PickerOptions

**Type:** PickerOptions

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

