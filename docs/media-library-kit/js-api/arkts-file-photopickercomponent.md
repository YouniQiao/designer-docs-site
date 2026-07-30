# @ohos.file.PhotoPickerComponent

## Modules to Import

```TypeScript
import { MaxCountType, PreselectedInfo, BaseItemInfo, ItemInfo, AnimatorParams, SelectMode, PhotoBrowserUIElement, ItemType, PinchGridSwitchedCallback, SingleLineConfig, ClickResult, ClickType, UpdatablePickerConfigs, DataType, VideoPlayerState, ItemDisplayRatio, ScrollStopAtStartCallback, ScrollStopAtEndCallback, PickerOrientation, videoPlayStateChangedCallback, PhotoBrowserChangeStartCallback, MovingPhotoBadgeStateChangedCallback, ErrorCallback, PickerOptions, ItemsDeletedCallback, PhotoBrowserRange, SaveMode, MaxSelected, PickerController, PickerError, PhotoPickerComponent, ExceedMaxSelectedCallback, ReminderMode, ItemClickedNotifyCallback, PickerColorMode, BadgeConfig, BadgeType, PhotoBrowserInfo, CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AnimatorParams](arkts-medialibrary-file-photopickercomponent-animatorparams-c.md) | AnimatorParams |
| [BadgeConfig](arkts-medialibrary-file-photopickercomponent-badgeconfig-c.md) | BadgeConfig |
| [BaseItemInfo](arkts-medialibrary-file-photopickercomponent-baseiteminfo-c.md) | BaseItemInfo |
| [ClickResult](arkts-medialibrary-file-photopickercomponent-clickresult-c.md) | ClickResult |
| [CompletedResult](arkts-medialibrary-file-photopickercomponent-completedresult-c.md) | CompletedResult |
| [ItemInfo](arkts-medialibrary-file-photopickercomponent-iteminfo-c.md) | ItemInfo |
| [MaxSelected](arkts-medialibrary-file-photopickercomponent-maxselected-c.md) | MaxSelected |
| [PhotoBrowserInfo](arkts-medialibrary-file-photopickercomponent-photobrowserinfo-c.md) | PhotoBrowserInfo |
| [PickerController](arkts-medialibrary-file-photopickercomponent-pickercontroller-c.md) | The class for PickerController |
| [PickerError](arkts-medialibrary-file-photopickercomponent-pickererror-c.md) | PickerError |
| [PickerOptions](arkts-medialibrary-file-photopickercomponent-pickeroptions-c.md) | PickerOptions Object |
| [PreselectedInfo](arkts-medialibrary-file-photopickercomponent-preselectedinfo-c.md) | PreselectedInfo |
| [SingleLineConfig](arkts-medialibrary-file-photopickercomponent-singlelineconfig-c.md) | Single-line display mode. |
| [UpdatablePickerConfigs](arkts-medialibrary-file-photopickercomponent-updatablepickerconfigs-c.md) | UpdatablePickerConfigs |

### Structs

| Name | Description |
| --- | --- |
| [PhotoPickerComponent](arkts-medialibrary-file-photopickercomponent-photopickercomponent-s.md) | Declare struct PhotoPickerComponent |

### Enums

| Name | Description |
| --- | --- |
| [BadgeType](arkts-medialibrary-file-photopickercomponent-badgetype-e.md) | BadgeType. |
| [ClickType](arkts-medialibrary-file-photopickercomponent-clicktype-e.md) | ClickType. include SELECTED and DESELECTED |
| [DataType](arkts-medialibrary-file-photopickercomponent-datatype-e.md) | DataType represents the type of the data set to picker component |
| [ItemDisplayRatio](arkts-medialibrary-file-photopickercomponent-itemdisplayratio-e.md) | Enumerates the aspect ratios of the grid item display, including 1:1 and the original image's aspect ratio. |
| [ItemType](arkts-medialibrary-file-photopickercomponent-itemtype-e.md) | ItemType. include CAMERA and THUMBNAIL |
| [MaxCountType](arkts-medialibrary-file-photopickercomponent-maxcounttype-e.md) | MaxCountType. include TOTAL_MAX_COUNT, PHOTO_MAX_COUNT and VIDEO_MAX_COUNT |
| [PhotoBrowserRange](arkts-medialibrary-file-photopickercomponent-photobrowserrange-e.md) | PhotoBrowserRange. include ALL and SELECTED_ONLY |
| [PhotoBrowserUIElement](arkts-medialibrary-file-photopickercomponent-photobrowseruielement-e.md) | PhotoBrowserUIElement. include CHECKBOX and BACK_BUTTON |
| [PickerColorMode](arkts-medialibrary-file-photopickercomponent-pickercolormode-e.md) | PickerColorMode. include AUTO, LIGHT and DARK |
| [PickerOrientation](arkts-medialibrary-file-photopickercomponent-pickerorientation-e.md) | PickerOrientation. include VERTICAL and HORIZONTAL |
| [ReminderMode](arkts-medialibrary-file-photopickercomponent-remindermode-e.md) | ReminderMode, include NONE, TOAST and MASK |
| [SaveMode](arkts-medialibrary-file-photopickercomponent-savemode-e.md) | Enumeration type of save mode. |
| [SelectMode](arkts-medialibrary-file-photopickercomponent-selectmode-e.md) | SelectMode. include SINGLE_SELECT and MULTI_SELECT |
| [VideoPlayerState](arkts-medialibrary-file-photopickercomponent-videoplayerstate-e.md) | VideoPlayerState. include PLAYING, PAUSED, STOPPED, SEEK_START and SEEK_FINISH |

### Types

| Name | Description |
| --- | --- |
| [CurrentAlbumDeletedCallback](arkts-medialibrary-currentalbumdeletedcallback-t.md) | The callback of onCurrentAlbumDeleted event |
| [ErrorCallback](arkts-medialibrary-errorcallback-t.md) | The callback of onError event |
| [ExceedMaxSelectedCallback](arkts-medialibrary-exceedmaxselectedcallback-t.md) | The callback of onExceedMaxSelected event |
| [ItemClickedNotifyCallback](arkts-medialibrary-itemclickednotifycallback-t.md) | The callback of onItemClickedNotify event |
| [ItemsDeletedCallback](arkts-medialibrary-itemsdeletedcallback-t.md) | The callback of onSelectedItemsDeleted event |
| [MovingPhotoBadgeStateChangedCallback](arkts-medialibrary-movingphotobadgestatechangedcallback-t.md) | The callback of onMovingPhotoBadgeStateChanged event |
| [PhotoBrowserChangeStartCallback](arkts-medialibrary-photobrowserchangestartcallback-t.md) | The callback of onPhotoBrowserChangeStart event |
| [PhotoBrowserZoomCallback](arkts-medialibrary-photobrowserzoomcallback-t.md) | The callback of onPhotoBrowserZoom event |
| [PinchGridSwitchedCallback](arkts-medialibrary-pinchgridswitchedcallback-t.md) | The callback of onPinchGridSwitched event |
| [ScrollStopAtEndCallback](arkts-medialibrary-scrollstopatendcallback-t.md) | The callback of onScrollStopAtEnd event |
| [ScrollStopAtStartCallback](arkts-medialibrary-scrollstopatstartcallback-t.md) | The callback of onScrollStopAtStart event |
| [videoPlayStateChangedCallback](arkts-medialibrary-videoplaystatechangedcallback-t.md) | The callback of onVideoPlayStateChanged event |

