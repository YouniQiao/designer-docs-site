# UpdatablePickerConfigs

UpdatablePickerConfigs

**Since:** 22

<!--Device-unnamed-export declare class UpdatablePickerConfigs--><!--Device-unnamed-export declare class UpdatablePickerConfigs-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## appAlbumFilters

```TypeScript
appAlbumFilters?: Array<string>
```

Only display album contents corresponding to the specified applications.Use the bundle name to identify the application.

**Type:** Array&lt;string&gt;

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UpdatablePickerConfigs-appAlbumFilters?: Array<string>--><!--Device-UpdatablePickerConfigs-appAlbumFilters?: Array<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## autoPlayScenes

```TypeScript
autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>
```

Moving photo playback mode. Supports up to two modes.

**Type:** Array&lt;photoAccessHelper.AutoPlayScene&gt;

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UpdatablePickerConfigs-autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>--><!--Device-UpdatablePickerConfigs-autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundColor

```TypeScript
backgroundColor?: string
```

The background color of the picker.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-backgroundColor?: string--><!--Device-UpdatablePickerConfigs-backgroundColor?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundOpacity

```TypeScript
backgroundOpacity?: number
```

Support setting background opacity.

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-UpdatablePickerConfigs-backgroundOpacity?: number--><!--Device-UpdatablePickerConfigs-backgroundOpacity?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkBoxColor

```TypeScript
checkBoxColor?: string
```

The checkbox color of the picker.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-checkBoxColor?: string--><!--Device-UpdatablePickerConfigs-checkBoxColor?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkboxTextColor

```TypeScript
checkboxTextColor?: string
```

The checkbox text color of the picker.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-checkboxTextColor?: string--><!--Device-UpdatablePickerConfigs-checkboxTextColor?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## edgeEffect

```TypeScript
edgeEffect?: EdgeEffect
```

Grid edge slide effect.

**Type:** EdgeEffect

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UpdatablePickerConfigs-edgeEffect?: EdgeEffect--><!--Device-UpdatablePickerConfigs-edgeEffect?: EdgeEffect-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridMargin

```TypeScript
gridMargin?: Margin
```

Support set gridMargin

**Type:** Margin

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-UpdatablePickerConfigs-gridMargin?: Margin--><!--Device-UpdatablePickerConfigs-gridMargin?: Margin-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isRepeatSelectSupported

```TypeScript
isRepeatSelectSupported?: boolean
```

Support repeat select.

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-isRepeatSelectSupported?: boolean--><!--Device-UpdatablePickerConfigs-isRepeatSelectSupported?: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSlidingSupported

```TypeScript
isSlidingSupported?: boolean
```

Support setting grid sliding.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-UpdatablePickerConfigs-isSlidingSupported?: boolean--><!--Device-UpdatablePickerConfigs-isSlidingSupported?: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxPhotoSelectNumber

```TypeScript
maxPhotoSelectNumber?: number
```

Maximum number of photos for a single selection.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-maxPhotoSelectNumber?: number--><!--Device-UpdatablePickerConfigs-maxPhotoSelectNumber?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectNumber

```TypeScript
maxSelectNumber?: number
```

Maximum number of assets for a single selection.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-maxSelectNumber?: number--><!--Device-UpdatablePickerConfigs-maxSelectNumber?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxVideoSelectNumber

```TypeScript
maxVideoSelectNumber?: number
```

Maximum number of videos for a single selection.

**Type:** number

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-maxVideoSelectNumber?: number--><!--Device-UpdatablePickerConfigs-maxVideoSelectNumber?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeType

```TypeScript
mimeType?: photoAccessHelper.PhotoViewMIMETypes
```

The type of the file in the recent photo window.

**Type:** photoAccessHelper.PhotoViewMIMETypes

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-mimeType?: photoAccessHelper.PhotoViewMIMETypes--><!--Device-UpdatablePickerConfigs-mimeType?: photoAccessHelper.PhotoViewMIMETypes-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## mimeTypeFilter

```TypeScript
mimeTypeFilter?: photoAccessHelper.MimeTypeFilter
```

Media file filtering configuration.

**Type:** photoAccessHelper.MimeTypeFilter

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-mimeTypeFilter?: photoAccessHelper.MimeTypeFilter--><!--Device-UpdatablePickerConfigs-mimeTypeFilter?: photoAccessHelper.MimeTypeFilter-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserBackgroundColorMode

```TypeScript
photoBrowserBackgroundColorMode?: PickerColorMode
```

Support to set photo browser background color mode.

**Type:** PickerColorMode

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-photoBrowserBackgroundColorMode?: PickerColorMode--><!--Device-UpdatablePickerConfigs-photoBrowserBackgroundColorMode?: PickerColorMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserMargin

```TypeScript
photoBrowserMargin?: Margin
```

Support set photoBrowserMargin

**Type:** Margin

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-UpdatablePickerConfigs-photoBrowserMargin?: Margin--><!--Device-UpdatablePickerConfigs-photoBrowserMargin?: Margin-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedUris

```TypeScript
preselectedUris?: Array<string>
```

The uri for the preselected files.

**Type:** Array&lt;string&gt;

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-preselectedUris?: Array<string>--><!--Device-UpdatablePickerConfigs-preselectedUris?: Array<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## selectMode

```TypeScript
selectMode?: SelectMode
```

Select mode of the picker.

**Type:** SelectMode

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-selectMode?: SelectMode--><!--Device-UpdatablePickerConfigs-selectMode?: SelectMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## singleSelectionMode

```TypeScript
singleSelectionMode?: photoAccessHelper.SingleSelectionMode
```

The mode of single selection.

**Type:** photoAccessHelper.SingleSelectionMode

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-singleSelectionMode?: photoAccessHelper.SingleSelectionMode--><!--Device-UpdatablePickerConfigs-singleSelectionMode?: photoAccessHelper.SingleSelectionMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uiComponentColorMode

```TypeScript
uiComponentColorMode?: PickerColorMode
```

Support to set UIComponent color mode.

**Type:** PickerColorMode

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UpdatablePickerConfigs-uiComponentColorMode?: PickerColorMode--><!--Device-UpdatablePickerConfigs-uiComponentColorMode?: PickerColorMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

