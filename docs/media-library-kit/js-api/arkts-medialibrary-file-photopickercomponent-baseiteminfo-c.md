# BaseItemInfo

BaseItemInfo

**Since:** 12

<!--Device-unnamed-export declare class BaseItemInfo--><!--Device-unnamed-export declare class BaseItemInfo-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## duration

```TypeScript
duration?: number
```

Duration. if the itemType is CAMERA, it will be null; if photos, return -1

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-duration?: number--><!--Device-BaseItemInfo-duration?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## dynamicRangeType

```TypeScript
dynamicRangeType?: photoAccessHelper.DynamicRangeType
```

DynamicRangeType. Dynamic range type of media files.For movingPhoto, this specifically refers to the dynamic range type of the cover image.

**Type:** photoAccessHelper.DynamicRangeType

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-BaseItemInfo-dynamicRangeType?: photoAccessHelper.DynamicRangeType--><!--Device-BaseItemInfo-dynamicRangeType?: photoAccessHelper.DynamicRangeType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## height

```TypeScript
height?: number
```

Height. if the itemType is CAMERA, it will be null

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-height?: number--><!--Device-BaseItemInfo-height?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeType

```TypeScript
mimeType?: string
```

MimeType. if the itemType is CAMERA, it will be null

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-mimeType?: string--><!--Device-BaseItemInfo-mimeType?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoBadgeState

```TypeScript
movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType
```

MovingPhotoBadgeState. Badge state of moving photo.

**Type:** photoAccessHelper.MovingPhotoBadgeStateType

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-BaseItemInfo-movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType--><!--Device-BaseItemInfo-movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## orientation

```TypeScript
orientation?: number
```

Orientation. Image/Video orientation information.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-BaseItemInfo-orientation?: number--><!--Device-BaseItemInfo-orientation?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoSubType

```TypeScript
photoSubType?: photoAccessHelper.PhotoSubtype
```

PhotoSubtype. Asset subtype, non-special type images default to DEFAULT(0).

**Type:** photoAccessHelper.PhotoSubtype

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-BaseItemInfo-photoSubType?: photoAccessHelper.PhotoSubtype--><!--Device-BaseItemInfo-photoSubType?: photoAccessHelper.PhotoSubtype-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## size

```TypeScript
size?: number
```

Size. if the itemType is CAMERA, it will be null

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-size?: number--><!--Device-BaseItemInfo-size?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uri

```TypeScript
uri?: string
```

Uri. if the itemType is CAMERA, it will be null

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-uri?: string--><!--Device-BaseItemInfo-uri?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## videoMode

```TypeScript
videoMode?: photoAccessHelper.VideoMode
```

VideoMode. Mode of video.

**Type:** photoAccessHelper.VideoMode

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-BaseItemInfo-videoMode?: photoAccessHelper.VideoMode--><!--Device-BaseItemInfo-videoMode?: photoAccessHelper.VideoMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## width

```TypeScript
width?: number
```

Width. if the itemType is CAMERA, it will be null

**Type:** number

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseItemInfo-width?: number--><!--Device-BaseItemInfo-width?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

