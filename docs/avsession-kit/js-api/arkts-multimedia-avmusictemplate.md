# @ohos.multimedia.avMusicTemplate

This module provides the capability to media enhancement

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAVMusicTemplate](arkts-avmusictemplate-createavmusictemplate-f.md#createAVMusicTemplate-1) | Create an AVMusicTemplate instance. |
| <!--DelRow-->[createAVMusicTemplateController](arkts-avmusictemplate-createavmusictemplatecontroller-f-sys.md#createAVMusicTemplateController-1) | Create AVMusicTemplate controller instance. |
| <!--DelRow-->[getAllAVMusicTemplateDescriptors](arkts-avmusictemplate-getallavmusictemplatedescriptors-f-sys.md#getAllAVMusicTemplateDescriptors-1) | Get all AVMusicTemplate descriptors. |
| <!--DelRow-->[offAVMusicTemplateCreate](arkts-avmusictemplate-offavmusictemplatecreate-f-sys.md#offAVMusicTemplateCreate-1) | UnRegister session create event |
| <!--DelRow-->[offAVMusicTemplateDestroy](arkts-avmusictemplate-offavmusictemplatedestroy-f-sys.md#offAVMusicTemplateDestroy-1) | UnRegister session destroy event |
| <!--DelRow-->[onAVMusicTemplateCreate](arkts-avmusictemplate-onavmusictemplatecreate-f-sys.md#onAVMusicTemplateCreate-1) | Register session create event |
| <!--DelRow-->[onAVMusicTemplateDestroy](arkts-avmusictemplate-onavmusictemplatedestroy-f-sys.md#onAVMusicTemplateDestroy-1) | Register session destroy event |

### Classes

| Name | Description |
| --- | --- |
| [AVMusicTemplate](arkts-avmusictemplate-avmusictemplate-c.md) | AVMusicTemplate interface |
| [AVMusicTemplateController](arkts-avmusictemplate-avmusictemplatecontroller-c.md) | The definition of the AVMusicTemplateController. |

### Interfaces

| Name | Description |
| --- | --- |
| [Album](arkts-avmusictemplate-album-i.md) | The definition of Album. |
| <!--DelRow-->[AVMusicTemplateDescriptor](arkts-avmusictemplate-avmusictemplatedescriptor-i-sys.md) | Description of the AVMusicTemplate. |
| [Banner](arkts-avmusictemplate-banner-i.md) | The definition of Banner. |
| [Compilation](arkts-avmusictemplate-compilation-i.md) | The definition of compilation. |
| [CustomElement](arkts-avmusictemplate-customelement-i.md) | Custom elements of mine page. |
| [DialogActionInfo](arkts-avmusictemplate-dialogactioninfo-i.md) | The definition of dialog action result. |
| [DialogButtonInfo](arkts-avmusictemplate-dialogbuttoninfo-i.md) | The definition of dialog button information. |
| [DialogInfo](arkts-avmusictemplate-dialoginfo-i.md) | The definition of dialog information. |
| [EpisodeRange](arkts-avmusictemplate-episoderange-i.md) | The definition of EpisodeRange. |
| [FavoriteData](arkts-avmusictemplate-favoritedata-i.md) | The definition of Favorite/Subscribe. |
| [MediaElement](arkts-avmusictemplate-mediaelement-i.md) | The definition of Singer/Radio/Banner. |
| [MediaEntity](arkts-avmusictemplate-mediaentity-i.md) | The definition of MediaEntity. |
| [MediaTab](arkts-avmusictemplate-mediatab-i.md) | The definition of the tab page. |
| [MediaTabContent](arkts-avmusictemplate-mediatabcontent-i.md) | The definition of the tab page content. |
| [MemberPurchaseInfo](arkts-avmusictemplate-memberpurchaseinfo-i.md) | The definition of member purchase information. |
| [OperResult](arkts-avmusictemplate-operresult-i.md) | The definition of the operate result. |
| [PageMediaEntity](arkts-avmusictemplate-pagemediaentity-i.md) | The definition of pagination object. |
| [PlayInfo](arkts-avmusictemplate-playinfo-i.md) | The definition of play information. |
| [QrCodeInfo](arkts-avmusictemplate-qrcodeinfo-i.md) | The definition of QR code Information. |
| [QueryMediaEntityParam](arkts-avmusictemplate-querymediaentityparam-i.md) | The definition of QueryMediaEntityParam. |
| [Ranking](arkts-avmusictemplate-ranking-i.md) | The definition of Ranking. |
| [SearchPlayInfo](arkts-avmusictemplate-searchplayinfo-i.md) | The definition of SearchPlayInfo. |
| [SearchPlayMusicInfo](arkts-avmusictemplate-searchplaymusicinfo-i.md) | The definition of SearchPlayMusicInfo. |
| [SearchPlayMusicItem](arkts-avmusictemplate-searchplaymusicitem-i.md) | The definition of SearchPlayMusicItem. |
| [SearchPlayVideoInfo](arkts-avmusictemplate-searchplayvideoinfo-i.md) | The definition of SearchPlayVideoInfo. |
| [SettingContent](arkts-avmusictemplate-settingcontent-i.md) | The definition of setting content |
| [SettingItem](arkts-avmusictemplate-settingitem-i.md) | The definition of setting Information. |
| [Single](arkts-avmusictemplate-single-i.md) | The definition of Single song. |
| [UserInfo](arkts-avmusictemplate-userinfo-i.md) | The definition of User information. |

### Types

| Name | Description |
| --- | --- |
| [ActionType](arkts-avmusictemplate-actiontype-t.md) | Action type add & remove. |
| [ClearSearchHistoryEvent](arkts-avmusictemplate-clearsearchhistoryevent-t.md) | The clear search history event. |
| [CustomType](arkts-avmusictemplate-customtype-t.md) | Custom tab type USER_INFO & TAB, COMPILATION, SETTINGS. |
| [DialogActionType](arkts-avmusictemplate-dialogactiontype-t.md) | Dialog action type open & close, refresh. |
| [DialogControlType](arkts-avmusictemplate-dialogcontroltype-t.md) | Dialog control type open & close, refresh, toast. |
| [DownloadControlType](arkts-avmusictemplate-downloadcontroltype-t.md) | Download control type startDownload & deleteDownload, resumeDownload, pauseDownload. |
| [DownloadMediaEntityEvent](arkts-avmusictemplate-downloadmediaentityevent-t.md) | The download media entity event. |
| [ExecuteActionEvent](arkts-avmusictemplate-executeactionevent-t.md) | The execute action event. |
| [FavoriteMediaEntityEvent](arkts-avmusictemplate-favoritemediaentityevent-t.md) | The favorite media entity event. |
| [HandleMemberPurchaseEvent](arkts-avmusictemplate-handlememberpurchaseevent-t.md) | The handle member purchase event. |
| [LoginEvent](arkts-avmusictemplate-loginevent-t.md) | The login event. |
| [LoginType](arkts-avmusictemplate-logintype-t.md) | Login type queryLoginInfo & refreshLoginInfo, logout. |
| [MediaFavoriteType](arkts-avmusictemplate-mediafavoritetype-t.md) | Media favorite type addFavorite & removeFavorite. |
| [NoParamAsyncCallback](arkts-avmusictemplate-noparamasynccallback-t.md) | Defines the basic callback. |
| [PlayForSearchEvent](arkts-avmusictemplate-playforsearchevent-t.md) | The play for search event. |
| [PlayMediaEntityEvent](arkts-avmusictemplate-playmediaentityevent-t.md) | The play media entity event. |
| [ProblemAndAdviceEvent](arkts-avmusictemplate-problemandadviceevent-t.md) | The problem and advice event. |
| [QueryCompilationByKeywordEvent](arkts-avmusictemplate-querycompilationbykeywordevent-t.md) | The query compilation by keyword event. |
| [QueryCompilationEvent](arkts-avmusictemplate-querycompilationevent-t.md) | The query compilation event. |
| [QueryCurrentSingleEvent](arkts-avmusictemplate-querycurrentsingleevent-t.md) | The query current single event. |
| [QueryCustomContentEvent](arkts-avmusictemplate-querycustomcontentevent-t.md) | The query custom content event. |
| [QueryHotWordsEvent](arkts-avmusictemplate-queryhotwordsevent-t.md) | The query hot words event. |
| [QueryMainTabsEvent](arkts-avmusictemplate-querymaintabsevent-t.md) | The query main tabs event. |
| [QueryMediaEntityByKeywordEvent](arkts-avmusictemplate-querymediaentitybykeywordevent-t.md) | The query media entity by keyword event. |
| [QueryMediaEntityEvent](arkts-avmusictemplate-querymediaentityevent-t.md) | The query media entity event. |
| [QueryMediaTabContentEvent](arkts-avmusictemplate-querymediatabcontentevent-t.md) | The query media tab content event. |
| [QueryMemberPurchaseEvent](arkts-avmusictemplate-querymemberpurchaseevent-t.md) | The query member purchase event. |
| [QueryPlaylistEvent](arkts-avmusictemplate-queryplaylistevent-t.md) | The query play list event. |
| [QueryRecommendMediaEntityListEvent](arkts-avmusictemplate-queryrecommendmediaentitylistevent-t.md) | The query recommend media entity list event. |
| [QuerySearchHistoryEvent](arkts-avmusictemplate-querysearchhistoryevent-t.md) | The query search history event. |
| [ReportCustomElementsChangeEvent](arkts-avmusictemplate-reportcustomelementschangeevent-t.md) | The report custom elements change event. |
| [ReportDialogCommandEvent](arkts-avmusictemplate-reportdialogcommandevent-t.md) | The report dialog command event. |
| [ReportExecuteAbilityEvent](arkts-avmusictemplate-reportexecuteabilityevent-t.md) | The report extension ability event. |
| [ReportExecuteActionEvent](arkts-avmusictemplate-reportexecuteactionevent-t.md) | The report execute action event. |
| [ReportTabContentEvent](arkts-avmusictemplate-reporttabcontentevent-t.md) | The report tab content event. |
| [RequestDialogInfoEvent](arkts-avmusictemplate-requestdialoginfoevent-t.md) | The request dialog info event. |
| [SettingsChangeEvent](arkts-avmusictemplate-settingschangeevent-t.md) | The settings change event. |

### Enums

| Name | Description |
| --- | --- |
| [AVMusicTemplateErrorCode](arkts-avmusictemplate-avmusictemplateerrorcode-e.md) | Enumeration ErrorCode types, returns in BusinessError.code. |
| [AVMusicTemplateType](arkts-avmusictemplate-avmusictemplatetype-e.md) | Enumeration of AVMusicTemplate type. |
| [ButtonType](arkts-avmusictemplate-buttontype-e.md) | Enumeration of button type. |
| [DialogType](arkts-avmusictemplate-dialogtype-e.md) | Enumeration of dialog type. |
| [DownloadStatus](arkts-avmusictemplate-downloadstatus-e.md) | Enumeration of DownloadStatus. |
| [EntityType](arkts-avmusictemplate-entitytype-e.md) | Enumeration of media resource type. |
| [MemberPurchaseType](arkts-avmusictemplate-memberpurchasetype-e.md) | Enumeration of MemberPurchaseType. |
| [PlaybackState](arkts-avmusictemplate-playbackstate-e.md) | Enumeration of play state. |
| [SearchPlayInfoType](arkts-avmusictemplate-searchplayinfotype-e.md) | Enumeration of SearchPlayInfoType. |
| [SettingType](arkts-avmusictemplate-settingtype-e.md) | Enumeration of setting type. |
| [Sort](arkts-avmusictemplate-sort-e.md) | Enumeration of Sort type. |

