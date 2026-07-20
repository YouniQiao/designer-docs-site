# CompletedResult

CompletedResult

**Since:** 26.0.0

<!--Device-unnamed-export declare class CompletedResult--><!--Device-unnamed-export declare class CompletedResult-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## contextRecoveryInfo

```TypeScript
contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo
```

Contextual information about the PhotoPicker's exit state.

**Type:** photoAccessHelper.ContextRecoveryInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CompletedResult-contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo--><!--Device-CompletedResult-contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## movingPhotoBadgeStates

```TypeScript
movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>
```

M​oving photo badge states for the selected media files in the gallery.When isMovingPhotoBadgeShown is true, movingPhotoBadgeStates contains the moving photo states;otherwise, it is empty.

**Type:** Array<photoAccessHelper.MovingPhotoBadgeStateType>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CompletedResult-movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>--><!--Device-CompletedResult-movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## photoUris

```TypeScript
photoUris: Array<string>
```

URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization. For details about how to use the media file URI, see Using a Media File URI.

**Type:** Array<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CompletedResult-photoUris: Array<string>--><!--Device-CompletedResult-photoUris: Array<string>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

