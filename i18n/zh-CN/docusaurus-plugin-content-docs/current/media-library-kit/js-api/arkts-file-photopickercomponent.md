# @ohos.file.PhotoPickerComponent

## 导入模块

```TypeScript
import { MaxCountType,PreselectedInfo,BaseItemInfo,ItemInfo,AnimatorParams,SelectMode,PhotoBrowserUIElement,ItemType,PinchGridSwitchedCallback,SingleLineConfig,ClickResult,ClickType,UpdatablePickerConfigs,DataType,VideoPlayerState,ItemDisplayRatio,ScrollStopAtStartCallback,ScrollStopAtEndCallback,PickerOrientation,videoPlayStateChangedCallback,PhotoBrowserChangeStartCallback,MovingPhotoBadgeStateChangedCallback,ErrorCallback,PickerOptions,ItemsDeletedCallback,PhotoBrowserRange,SaveMode,MaxSelected,PickerController,PickerError,PhotoPickerComponent,ExceedMaxSelectedCallback,ReminderMode,ItemClickedNotifyCallback,PickerColorMode,BadgeConfig,BadgeType,PhotoBrowserInfo,CurrentAlbumDeletedCallback } from '@kit.MediaLibraryKit';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [AnimatorParams](arkts-animatorparams-c.md) | AnimatorParams |
| [BadgeConfig](arkts-badgeconfig-c.md) | BadgeConfig |
| [BaseItemInfo](arkts-baseiteminfo-c.md) | BaseItemInfo |
| [ClickResult](arkts-clickresult-c.md) | ClickResult |
| [CompletedResult](arkts-completedresult-c.md) | CompletedResult |
| [ItemInfo](arkts-iteminfo-c.md) | ItemInfo |
| [MaxSelected](arkts-maxselected-c.md) | MaxSelected |
| [PhotoBrowserInfo](arkts-photobrowserinfo-c.md) | PhotoBrowserInfo |
| [PickerController](arkts-pickercontroller-c.md) | The class for PickerController |
| [PickerError](arkts-pickererror-c.md) | PickerError |
| [PickerOptions](arkts-pickeroptions-c.md) | PickerOptions Object |
| [PreselectedInfo](arkts-preselectedinfo-c.md) | PreselectedInfo |
| [SingleLineConfig](arkts-singlelineconfig-c.md) | Single-line display mode. |
| [UpdatablePickerConfigs](arkts-updatablepickerconfigs-c.md) | UpdatablePickerConfigs |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BadgeType](arkts-badgetype-e.md) | BadgeType. |
| [ClickType](arkts-clicktype-e.md) | ClickType. include SELECTED and DESELECTED |
| [DataType](arkts-datatype-e.md) | DataType represents the type of the data set to picker component |
| [ItemDisplayRatio](arkts-itemdisplayratio-e.md) | Enumerates the aspect ratios of the grid item display, including 1:1 and the original image's aspect ratio. |
| [ItemType](arkts-itemtype-e.md) | ItemType. include CAMERA and THUMBNAIL |
| [MaxCountType](arkts-maxcounttype-e.md) | MaxCountType. include TOTAL_MAX_COUNT, PHOTO_MAX_COUNT and VIDEO_MAX_COUNT |
| [PhotoBrowserRange](arkts-photobrowserrange-e.md) | PhotoBrowserRange. include ALL and SELECTED_ONLY |
| [PhotoBrowserUIElement](arkts-photobrowseruielement-e.md) | PhotoBrowserUIElement. include CHECKBOX and BACK_BUTTON |
| [PickerColorMode](arkts-pickercolormode-e.md) | PickerColorMode. include AUTO, LIGHT and DARK |
| [PickerOrientation](arkts-pickerorientation-e.md) | PickerOrientation. include VERTICAL and HORIZONTAL |
| [ReminderMode](arkts-remindermode-e.md) | ReminderMode, include NONE, TOAST and MASK |
| [SaveMode](arkts-savemode-e.md) | Enumeration type of save mode. |
| [SelectMode](arkts-selectmode-e.md) | SelectMode. include SINGLE_SELECT and MULTI_SELECT |
| [VideoPlayerState](arkts-videoplayerstate-e.md) | VideoPlayerState. include PLAYING, PAUSED, STOPPED, SEEK_START and SEEK_FINISH |

### 类型

| 名称 | 描述 |
| --- | --- |
| [CurrentAlbumDeletedCallback](arkts-currentalbumdeletedcallback-t.md) | The callback of onCurrentAlbumDeleted event |
| [ErrorCallback](arkts-errorcallback-t.md) | The callback of onError event |
| [ExceedMaxSelectedCallback](arkts-exceedmaxselectedcallback-t.md) | The callback of onExceedMaxSelected event |
| [ItemClickedNotifyCallback](arkts-itemclickednotifycallback-t.md) | The callback of onItemClickedNotify event |
| [ItemsDeletedCallback](arkts-itemsdeletedcallback-t.md) | The callback of onSelectedItemsDeleted event |
| [MovingPhotoBadgeStateChangedCallback](arkts-movingphotobadgestatechangedcallback-t.md) | The callback of onMovingPhotoBadgeStateChanged event |
| [PhotoBrowserChangeStartCallback](arkts-photobrowserchangestartcallback-t.md) | The callback of onPhotoBrowserChangeStart event |
| [PhotoBrowserZoomCallback](arkts-photobrowserzoomcallback-t.md) | The callback of onPhotoBrowserZoom event |
| [PinchGridSwitchedCallback](arkts-pinchgridswitchedcallback-t.md) | The callback of onPinchGridSwitched event |
| [ScrollStopAtEndCallback](arkts-scrollstopatendcallback-t.md) | The callback of onScrollStopAtEnd event |
| [ScrollStopAtStartCallback](arkts-scrollstopatstartcallback-t.md) | The callback of onScrollStopAtStart event |
| [videoPlayStateChangedCallback](arkts-videoplaystatechangedcallback-t.md) | The callback of onVideoPlayStateChanged event |

