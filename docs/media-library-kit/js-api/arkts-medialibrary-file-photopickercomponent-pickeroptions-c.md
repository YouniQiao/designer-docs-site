# PickerOptions

PickerOptions Object

**Inheritance/Implementation:** PickerOptions extends [photoAccessHelper.BaseSelectOptions](arkts-medialibrary-photoaccesshelper-baseselectoptions-c.md)

**Since:** 12

<!--Device-unnamed-export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions--><!--Device-unnamed-export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions-End-->

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

<!--Device-PickerOptions-appAlbumFilters?: Array<string>--><!--Device-PickerOptions-appAlbumFilters?: Array<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## backgroundColor

```TypeScript
backgroundColor?: string
```

Support set backgroundColor

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-backgroundColor?: string--><!--Device-PickerOptions-backgroundColor?: string-End-->

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

<!--Device-PickerOptions-backgroundOpacity?: number--><!--Device-PickerOptions-backgroundOpacity?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## badgeConfig

```TypeScript
badgeConfig?: BadgeConfig
```

Support to config special badge display.The picker component supports only one type of badge

**Type:** BadgeConfig

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-PickerOptions-badgeConfig?: BadgeConfig--><!--Device-PickerOptions-badgeConfig?: BadgeConfig-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkBoxColor

```TypeScript
checkBoxColor?: string
```

Support set checkBox color

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-checkBoxColor?: string--><!--Device-PickerOptions-checkBoxColor?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## checkboxTextColor

```TypeScript
checkboxTextColor?: string
```

Support to set checkbox text color

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-checkboxTextColor?: string--><!--Device-PickerOptions-checkboxTextColor?: string-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## contextRecoveryInfo

```TypeScript
contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo
```

Context recovery information for restoring the last selection session.

**Type:** photoAccessHelper.ContextRecoveryInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-PickerOptions-contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo--><!--Device-PickerOptions-contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo-End-->

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

<!--Device-PickerOptions-edgeEffect?: EdgeEffect--><!--Device-PickerOptions-edgeEffect?: EdgeEffect-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridEndOffset

```TypeScript
gridEndOffset?: number
```

Support to set offset between last grid item and the bottom of grid

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PickerOptions-gridEndOffset?: number--><!--Device-PickerOptions-gridEndOffset?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridMargin

```TypeScript
gridMargin?: Margin
```

Support set gridMargin

**Type:** Margin

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-PickerOptions-gridMargin?: Margin--><!--Device-PickerOptions-gridMargin?: Margin-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridStartOffset

```TypeScript
gridStartOffset?: number
```

Support to set offset between first grid item and the top of grid

**Type:** number

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PickerOptions-gridStartOffset?: number--><!--Device-PickerOptions-gridStartOffset?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isRepeatSelectSupported

```TypeScript
isRepeatSelectSupported?: boolean
```

Support repeat select

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-isRepeatSelectSupported?: boolean--><!--Device-PickerOptions-isRepeatSelectSupported?: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## isSlidingSelectionSupported

```TypeScript
isSlidingSelectionSupported?: boolean
```

Support to set sliding selection

**Type:** boolean

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-PickerOptions-isSlidingSelectionSupported?: boolean--><!--Device-PickerOptions-isSlidingSelectionSupported?: boolean-End-->

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

<!--Device-PickerOptions-isSlidingSupported?: boolean--><!--Device-PickerOptions-isSlidingSupported?: boolean-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxPhotoSelectNumber

```TypeScript
maxPhotoSelectNumber?: number
```

Support to set max photo select number

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-maxPhotoSelectNumber?: number--><!--Device-PickerOptions-maxPhotoSelectNumber?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxSelectedReminderMode

```TypeScript
maxSelectedReminderMode?: ReminderMode
```

Support to set max select number remind mode.

**Type:** ReminderMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-maxSelectedReminderMode?: ReminderMode--><!--Device-PickerOptions-maxSelectedReminderMode?: ReminderMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## maxVideoSelectNumber

```TypeScript
maxVideoSelectNumber?: number
```

Support to set max video select number

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-maxVideoSelectNumber?: number--><!--Device-PickerOptions-maxVideoSelectNumber?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## orientation

```TypeScript
orientation?: PickerOrientation
```

Support to set display orientation

**Type:** PickerOrientation

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-orientation?: PickerOrientation--><!--Device-PickerOptions-orientation?: PickerOrientation-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserBackgroundColorMode

```TypeScript
photoBrowserBackgroundColorMode?: PickerColorMode
```

Support to set photo browser background color mode

**Type:** PickerColorMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-photoBrowserBackgroundColorMode?: PickerColorMode--><!--Device-PickerOptions-photoBrowserBackgroundColorMode?: PickerColorMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserCheckboxPosition

```TypeScript
photoBrowserCheckboxPosition?: [number, number]
```

Support to set photo browser checkbox position

**Type:** [number, number]

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-PickerOptions-photoBrowserCheckboxPosition?: [number, number]--><!--Device-PickerOptions-photoBrowserCheckboxPosition?: [number, number]-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoBrowserMargin

```TypeScript
photoBrowserMargin?: Margin
```

Support set photoBrowserMargin

**Type:** Margin

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-PickerOptions-photoBrowserMargin?: Margin--><!--Device-PickerOptions-photoBrowserMargin?: Margin-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## pickerIndex

```TypeScript
pickerIndex?: number
```

Support to set a serial number to distinguish different picker components. Default value is -1.

**Type:** number

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-PickerOptions-pickerIndex?: number--><!--Device-PickerOptions-pickerIndex?: number-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## preselectedInfos

```TypeScript
preselectedInfos?: Array<PreselectedInfo>
```

Support automatically selecting the user-selected image/video on the PhotoPickerComponent at the specified picker index.

**Type:** Array&lt;PreselectedInfo&gt;

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-PickerOptions-preselectedInfos?: Array<PreselectedInfo>--><!--Device-PickerOptions-preselectedInfos?: Array<PreselectedInfo>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## selectMode

```TypeScript
selectMode?: SelectMode
```

Support to set select mode

**Type:** SelectMode

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-PickerOptions-selectMode?: SelectMode--><!--Device-PickerOptions-selectMode?: SelectMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## singleLineConfig

```TypeScript
singleLineConfig?: SingleLineConfig
```

Single-line display mode for the PhotoPickerComponent.

**Type:** SingleLineConfig

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PickerOptions-singleLineConfig?: SingleLineConfig--><!--Device-PickerOptions-singleLineConfig?: SingleLineConfig-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## uiComponentColorMode

```TypeScript
uiComponentColorMode?: PickerColorMode
```

Support to set UIComponent color mode.

**Type:** PickerColorMode

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-PickerOptions-uiComponentColorMode?: PickerColorMode--><!--Device-PickerOptions-uiComponentColorMode?: PickerColorMode-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

