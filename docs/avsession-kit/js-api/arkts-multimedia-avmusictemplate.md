# @ohos.multimedia.avMusicTemplate

This module provides the capability to media enhancement

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAVMusicTemplate](arkts-avsession-createavmusictemplate-f.md#createavmusictemplate-1) | Create an AVMusicTemplate instance. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createAVMusicTemplateController](arkts-avsession-createavmusictemplatecontroller-f-sys.md#createavmusictemplatecontroller-1) | Create AVMusicTemplate controller instance. |
| [getAllAVMusicTemplateDescriptors](arkts-avsession-getallavmusictemplatedescriptors-f-sys.md#getallavmusictemplatedescriptors-1) | Get all AVMusicTemplate descriptors. |
| [offAVMusicTemplateCreate](arkts-avsession-offavmusictemplatecreate-f-sys.md#offavmusictemplatecreate-1) | UnRegister session create event |
| [offAVMusicTemplateDestroy](arkts-avsession-offavmusictemplatedestroy-f-sys.md#offavmusictemplatedestroy-1) | UnRegister session destroy event |
| [onAVMusicTemplateCreate](arkts-avsession-onavmusictemplatecreate-f-sys.md#onavmusictemplatecreate-1) | Register session create event |
| [onAVMusicTemplateDestroy](arkts-avsession-onavmusictemplatedestroy-f-sys.md#onavmusictemplatedestroy-1) | Register session destroy event |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [AVMusicTemplate](arkts-avsession-avmusictemplate-c.md) | AVMusicTemplate interface |
| [AVMusicTemplateController](arkts-avsession-avmusictemplatecontroller-c.md) | The definition of the AVMusicTemplateController. |

### Interfaces

| Name | Description |
| --- | --- |
| [Album](arkts-avsession-album-i.md) | The definition of Album. |
| [Banner](arkts-avsession-banner-i.md) | The definition of Banner. |
| [Compilation](arkts-avsession-compilation-i.md) | The definition of compilation. |
| [CustomElement](arkts-avsession-customelement-i.md) | Custom elements of mine page. |
| [DialogActionInfo](arkts-avsession-dialogactioninfo-i.md) | The definition of dialog action result. |
| [DialogButtonInfo](arkts-avsession-dialogbuttoninfo-i.md) | The definition of dialog button information. |
| [DialogInfo](arkts-avsession-dialoginfo-i.md) | The definition of dialog information. |
| [EpisodeRange](arkts-avsession-episoderange-i.md) | The definition of EpisodeRange. |
| [FavoriteData](arkts-avsession-favoritedata-i.md) | The definition of Favorite/Subscribe. |
| [MediaElement](arkts-avsession-mediaelement-i.md) | The definition of Singer/Radio/Banner. |
| [MediaEntity](arkts-avsession-mediaentity-i.md) | The definition of MediaEntity. |
| [MediaTab](arkts-avsession-mediatab-i.md) | The definition of the tab page. |
| [MediaTabContent](arkts-avsession-mediatabcontent-i.md) | The definition of the tab page content. |
| [MemberPurchaseInfo](arkts-avsession-memberpurchaseinfo-i.md) | The definition of member purchase information. |
| [OperResult](arkts-avsession-operresult-i.md) | The definition of the operate result. |
| [PageMediaEntity](arkts-avsession-pagemediaentity-i.md) | The definition of pagination object. |
| [PlayInfo](arkts-avsession-playinfo-i.md) | The definition of play information. |
| [QrCodeInfo](arkts-avsession-qrcodeinfo-i.md) | The definition of QR code Information. |
| [QueryMediaEntityParam](arkts-avsession-querymediaentityparam-i.md) | The definition of QueryMediaEntityParam. |
| [Ranking](arkts-avsession-ranking-i.md) | The definition of Ranking. |
| [SearchPlayInfo](arkts-avsession-searchplayinfo-i.md) | The definition of SearchPlayInfo. |
| [SearchPlayMusicInfo](arkts-avsession-searchplaymusicinfo-i.md) | The definition of SearchPlayMusicInfo. |
| [SearchPlayMusicItem](arkts-avsession-searchplaymusicitem-i.md) | The definition of SearchPlayMusicItem. |
| [SearchPlayVideoInfo](arkts-avsession-searchplayvideoinfo-i.md) | The definition of SearchPlayVideoInfo. |
| [SettingContent](arkts-avsession-settingcontent-i.md) | The definition of setting content |
| [SettingItem](arkts-avsession-settingitem-i.md) | The definition of setting Information. |
| [Single](arkts-avsession-single-i.md) | The definition of Single song. |
| [UserInfo](arkts-avsession-userinfo-i.md) | The definition of User information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AVMusicTemplateDescriptor](arkts-avsession-avmusictemplatedescriptor-i-sys.md) | Description of the AVMusicTemplate. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AVMusicTemplateErrorCode](arkts-avsession-avmusictemplateerrorcode-e.md) | Enumeration ErrorCode types, returns in BusinessError.code. |
| [AVMusicTemplateType](arkts-avsession-avmusictemplatetype-e.md) | Enumeration of AVMusicTemplate type. |
| [ButtonType](arkts-avsession-buttontype-e.md) | Enumeration of button type. |
| [DialogType](arkts-avsession-dialogtype-e.md) | Enumeration of dialog type. |
| [DownloadStatus](arkts-avsession-downloadstatus-e.md) | Enumeration of DownloadStatus. |
| [EntityType](arkts-avsession-entitytype-e.md) | Enumeration of media resource type. |
| [MemberPurchaseType](arkts-avsession-memberpurchasetype-e.md) | Enumeration of MemberPurchaseType. |
| [PlaybackState](arkts-avsession-playbackstate-e.md) | Enumeration of play state. |
| [SearchPlayInfoType](arkts-avsession-searchplayinfotype-e.md) | Enumeration of SearchPlayInfoType. |
| [SettingType](arkts-avsession-settingtype-e.md) | Enumeration of setting type. |
| [Sort](arkts-avsession-sort-e.md) | Enumeration of Sort type. |

### Types

| Name | Description |
| --- | --- |
| [ActionType](arkts-avsession-actiontype-t.md) | Action type add & remove. |
| [ClearSearchHistoryEvent](arkts-avsession-clearsearchhistoryevent-t.md) | The clear search history event. |
| [CustomType](arkts-avsession-customtype-t.md) | Custom tab type USER_INFO & TAB, COMPILATION, SETTINGS. |
| [DialogActionType](arkts-avsession-dialogactiontype-t.md) | Dialog action type open & close, refresh. |
| [DialogControlType](arkts-avsession-dialogcontroltype-t.md) | Dialog control type open & close, refresh, toast. |
| [DownloadControlType](arkts-avsession-downloadcontroltype-t.md) | Download control type startDownload & deleteDownload, resumeDownload, pauseDownload. |
| [DownloadMediaEntityEvent](arkts-avsession-downloadmediaentityevent-t.md) | The download media entity event. |
| [ExecuteActionEvent](arkts-avsession-executeactionevent-t.md) | The execute action event. |
| [FavoriteMediaEntityEvent](arkts-avsession-favoritemediaentityevent-t.md) | The favorite media entity event. |
| [HandleMemberPurchaseEvent](arkts-avsession-handlememberpurchaseevent-t.md) | The handle member purchase event. |
| [LoginEvent](arkts-avsession-loginevent-t.md) | The login event. |
| [LoginType](arkts-avsession-logintype-t.md) | Login type queryLoginInfo & refreshLoginInfo, logout. |
| [MediaFavoriteType](arkts-avsession-mediafavoritetype-t.md) | Media favorite type addFavorite & removeFavorite. |
| [NoParamAsyncCallback](arkts-avsession-noparamasynccallback-t.md) | Defines the basic callback. |
| [PlayForSearchEvent](arkts-avsession-playforsearchevent-t.md) | The play for search event. |
| [PlayMediaEntityEvent](arkts-avsession-playmediaentityevent-t.md) | The play media entity event. |
| [ProblemAndAdviceEvent](arkts-avsession-problemandadviceevent-t.md) | The problem and advice event. |
| [QueryCompilationByKeywordEvent](arkts-avsession-querycompilationbykeywordevent-t.md) | The query compilation by keyword event. |
| [QueryCompilationEvent](arkts-avsession-querycompilationevent-t.md) | The query compilation event. |
| [QueryCurrentSingleEvent](arkts-avsession-querycurrentsingleevent-t.md) | The query current single event. |
| [QueryCustomContentEvent](arkts-avsession-querycustomcontentevent-t.md) | The query custom content event. |
| [QueryHotWordsEvent](arkts-avsession-queryhotwordsevent-t.md) | The query hot words event. |
| [QueryMainTabsEvent](arkts-avsession-querymaintabsevent-t.md) | The query main tabs event. |
| [QueryMediaEntityByKeywordEvent](arkts-avsession-querymediaentitybykeywordevent-t.md) | The query media entity by keyword event. |
| [QueryMediaEntityEvent](arkts-avsession-querymediaentityevent-t.md) | The query media entity event. |
| [QueryMediaTabContentEvent](arkts-avsession-querymediatabcontentevent-t.md) | The query media tab content event. |
| [QueryMemberPurchaseEvent](arkts-avsession-querymemberpurchaseevent-t.md) | The query member purchase event. |
| [QueryPlaylistEvent](arkts-avsession-queryplaylistevent-t.md) | The query play list event. |
| [QueryRecommendMediaEntityListEvent](arkts-avsession-queryrecommendmediaentitylistevent-t.md) | The query recommend media entity list event. |
| [QuerySearchHistoryEvent](arkts-avsession-querysearchhistoryevent-t.md) | The query search history event. |
| [ReportCustomElementsChangeEvent](arkts-avsession-reportcustomelementschangeevent-t.md) | The report custom elements change event. |
| [ReportDialogCommandEvent](arkts-avsession-reportdialogcommandevent-t.md) | The report dialog command event. |
| [ReportExecuteAbilityEvent](arkts-avsession-reportexecuteabilityevent-t.md) | The report extension ability event. |
| [ReportExecuteActionEvent](arkts-avsession-reportexecuteactionevent-t.md) | The report execute action event. |
| [ReportTabContentEvent](arkts-avsession-reporttabcontentevent-t.md) | The report tab content event. |
| [RequestDialogInfoEvent](arkts-avsession-requestdialoginfoevent-t.md) | The request dialog info event. |
| [SettingsChangeEvent](arkts-avsession-settingschangeevent-t.md) | The settings change event. |

