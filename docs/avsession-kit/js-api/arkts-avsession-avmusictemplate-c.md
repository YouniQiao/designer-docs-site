# AVMusicTemplate

AVMusicTemplate interface

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the AVMusicTemplate instance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function destroycan not work correctly due to limited device capabilities. |

## offClearSearchHistory

```TypeScript
offClearSearchHistory(callback?: ClearSearchHistoryEvent): void
```

Unregister clear search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | No | The callback used to handle ('clearSearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offClearSearchHistorycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDownloadMediaEntity

```TypeScript
offDownloadMediaEntity(callback?: DownloadMediaEntityEvent): void
```

Unregister download media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | No | The callback used to handle ('downloadMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offDownloadMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offExecuteAction

```TypeScript
offExecuteAction(callback?: ExecuteActionEvent): void
```

Unregister execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | No | The callback used to handle ('executeAction') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offExecuteActioncan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offFavoriteMediaEntity

```TypeScript
offFavoriteMediaEntity(callback?: FavoriteMediaEntityEvent): void
```

Unregister favorite media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | No | The callback used to handle ('favoriteMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offFavoriteMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offHandleMemberPurchase

```TypeScript
offHandleMemberPurchase(callback?: HandleMemberPurchaseEvent): void
```

Unregister handle member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | No | The callback used to handle ('handleMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offHandleMemberPurchasecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offLogin

```TypeScript
offLogin(callback?: LoginEvent): void
```

Unregister login callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | LoginEvent | No | The callback used to handle ('login') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offLogincan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayForSearch

```TypeScript
offPlayForSearch(callback?: PlayForSearchEvent): void
```

Unregister play for search callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | No | The callback used to handle ('playForSearch') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offPlayForSearchcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayMediaEntity

```TypeScript
offPlayMediaEntity(callback?: PlayMediaEntityEvent): void
```

Unregister play media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | No | The callback used to handle ('playMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offPlayMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offProblemAndAdvice

```TypeScript
offProblemAndAdvice(callback?: ProblemAndAdviceEvent): void
```

Unregister problem and advice callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | No | The callback used to handle ('problemAndAdvice') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offProblemAndAdvicecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilation

```TypeScript
offQueryCompilation(callback?: QueryCompilationEvent): void
```

Unregister query compilation callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | No | The callback used to handle ('queryCompilation') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryCompilationcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilationByKeyword

```TypeScript
offQueryCompilationByKeyword(callback?: QueryCompilationByKeywordEvent): void
```

Unregister query compilation by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | No | The callback used tohandle ('queryCompilationByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryCompilationByKeywordcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCurrentSingle

```TypeScript
offQueryCurrentSingle(callback?: QueryCurrentSingleEvent): void
```

Unregister query current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | No | The callback used to handle ('queryCurrentSingle') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryCurrentSinglecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCustomContent

```TypeScript
offQueryCustomContent(callback?: QueryCustomContentEvent): void
```

Unregister query custom content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | No | The callback used to handle ('queryCustomContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryCustomContentcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryHotWords

```TypeScript
offQueryHotWords(callback?: QueryHotWordsEvent): void
```

Unregister query hot words callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | No | The callback used to handle ('queryHotWords') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryHotWordscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMainTabs

```TypeScript
offQueryMainTabs(callback?: QueryMainTabsEvent): void
```

Unregister query main tabs callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | No | The callback used to handle ('queryMainTabs') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryMainTabscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntity

```TypeScript
offQueryMediaEntity(callback?: QueryMediaEntityEvent): void
```

Unregister query media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | No | The callback used to handle ('queryMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntityByKeyword

```TypeScript
offQueryMediaEntityByKeyword(callback?: QueryMediaEntityByKeywordEvent): void
```

Unregister query media entity by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | No | The callback used tohandle ('queryMediaEntityByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryMediaEntityByKeywordcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaTabContent

```TypeScript
offQueryMediaTabContent(callback?: QueryMediaTabContentEvent): void
```

Unregister query media tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | No | The callback used to handle ('queryMediaTabContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryMediaTabContentcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMemberPurchase

```TypeScript
offQueryMemberPurchase(callback?: QueryMemberPurchaseEvent): void
```

Unregister query member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | No | The callback used to handle ('queryMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryMemberPurchasecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryPlaylist

```TypeScript
offQueryPlaylist(callback?: QueryPlaylistEvent): void
```

Unregister query playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | No | The callback used to handle ('queryPlaylist') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryPlaylistcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryRecommendMediaEntityList

```TypeScript
offQueryRecommendMediaEntityList(callback?: QueryRecommendMediaEntityListEvent): void
```

Unregister query recommend media entity list callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | No | The callback used to handle ('queryRecommendMediaEntityList') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQueryRecommendMediaEntityListcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQuerySearchHistory

```TypeScript
offQuerySearchHistory(callback?: QuerySearchHistoryEvent): void
```

Unregister query search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | No | The callback used to handle ('querySearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offQuerySearchHistorycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offRequestDialogInfo

```TypeScript
offRequestDialogInfo(callback?: RequestDialogInfoEvent): void
```

Unregister request dialog info callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | No | The callback used to handle ('requestDialogInfo') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offRequestDialogInfocan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offSettingsChange

```TypeScript
offSettingsChange(callback?: SettingsChangeEvent): void
```

Unregister settings change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | No | The callback used to handle ('settingsChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function offSettingsChangecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onClearSearchHistory

```TypeScript
onClearSearchHistory(callback: ClearSearchHistoryEvent): void
```

Register clear search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | Yes | The callback used to handle ('clearSearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onClearSearchHistorycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDownloadMediaEntity

```TypeScript
onDownloadMediaEntity(callback: DownloadMediaEntityEvent): void
```

Register download media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | Yes | The callback used to handle ('downloadMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onDownloadMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onExecuteAction

```TypeScript
onExecuteAction(callback: ExecuteActionEvent): void
```

Register execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | Yes | The callback used to handle ('executeAction') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onExecuteActioncan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onFavoriteMediaEntity

```TypeScript
onFavoriteMediaEntity(callback: FavoriteMediaEntityEvent): void
```

Register favorite media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | Yes | The callback used to handle ('favoriteMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onFavoriteMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onHandleMemberPurchase

```TypeScript
onHandleMemberPurchase(callback: HandleMemberPurchaseEvent): void
```

Register handle member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | Yes | The callback used to handle ('handleMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onHandleMemberPurchasecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onLogin

```TypeScript
onLogin(callback: LoginEvent): void
```

Register login callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | LoginEvent | Yes | The callback used to handle ('login') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onLogincan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayForSearch

```TypeScript
onPlayForSearch(callback: PlayForSearchEvent): void
```

Register play for search callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | Yes | The callback used to handle ('playForSearch') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onPlayForSearchcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayMediaEntity

```TypeScript
onPlayMediaEntity(callback: PlayMediaEntityEvent): void
```

Register play media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | Yes | The callback used to handle ('playMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onPlayMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onProblemAndAdvice

```TypeScript
onProblemAndAdvice(callback: ProblemAndAdviceEvent): void
```

Register problem and advice callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | Yes | The callback used to handle ('problemAndAdvice') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onProblemAndAdvicecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilation

```TypeScript
onQueryCompilation(callback: QueryCompilationEvent): void
```

Register query compilation callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | Yes | The callback used to handle ('queryCompilation') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryCompilationcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilationByKeyword

```TypeScript
onQueryCompilationByKeyword(callback: QueryCompilationByKeywordEvent): void
```

Register query compilation by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | Yes | The callback used to handle ('queryCompilationByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryCompilationByKeywordcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCurrentSingle

```TypeScript
onQueryCurrentSingle(callback: QueryCurrentSingleEvent): void
```

Register query current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | Yes | The callback used to handle ('queryCurrentSingle') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryCurrentSinglecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCustomContent

```TypeScript
onQueryCustomContent(callback: QueryCustomContentEvent): void
```

Register query custom content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | Yes | The callback used to handle ('queryCustomContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryCustomContentcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryHotWords

```TypeScript
onQueryHotWords(callback: QueryHotWordsEvent): void
```

Register query hot words callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | Yes | The callback used to handle ('queryHotWords') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryHotWordscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMainTabs

```TypeScript
onQueryMainTabs(callback: QueryMainTabsEvent): void
```

Register query main tabs callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | Yes | The callback used to handle ('queryMainTabs') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryMainTabscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntity

```TypeScript
onQueryMediaEntity(callback: QueryMediaEntityEvent): void
```

Register query media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | Yes | The callback used to handle ('queryMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryMediaEntitycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntityByKeyword

```TypeScript
onQueryMediaEntityByKeyword(callback: QueryMediaEntityByKeywordEvent): void
```

Register query media entity by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | Yes | The callback used to handle ('queryMediaEntityByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryMediaEntityByKeywordcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaTabContent

```TypeScript
onQueryMediaTabContent(callback: QueryMediaTabContentEvent): void
```

Register query media tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | Yes | The callback used to handle ('queryMediaTabContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryMediaTabContentcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMemberPurchase

```TypeScript
onQueryMemberPurchase(callback: QueryMemberPurchaseEvent): void
```

Register query member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | Yes | The callback used to handle ('queryMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryMemberPurchasecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryPlaylist

```TypeScript
onQueryPlaylist(callback: QueryPlaylistEvent): void
```

Register query playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | Yes | The callback used to handle ('queryPlaylist') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryPlaylistcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryRecommendMediaEntityList

```TypeScript
onQueryRecommendMediaEntityList(callback: QueryRecommendMediaEntityListEvent): void
```

Register query recommend media entity list callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | Yes | The callback used tohandle ('queryRecommendMediaEntityList') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQueryRecommendMediaEntityListcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQuerySearchHistory

```TypeScript
onQuerySearchHistory(callback: QuerySearchHistoryEvent): void
```

Register query search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | Yes | The callback used to handle ('querySearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onQuerySearchHistorycan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onRequestDialogInfo

```TypeScript
onRequestDialogInfo(callback: RequestDialogInfoEvent): void
```

Register request dialog info callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | Yes | The callback used to handle ('requestDialogInfo') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onRequestDialogInfocan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onSettingsChange

```TypeScript
onSettingsChange(callback: SettingsChangeEvent): void
```

Register settings change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | Yes | The callback used to handle ('settingsChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function onSettingsChangecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## reportExecuteAction

```TypeScript
reportExecuteAction(actionType: string, params: string): Promise<void>
```

Report execute action information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | string | Yes | action type |
| params | string | Yes | params value |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function reportExecuteActioncan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setCurrentSingle

```TypeScript
setCurrentSingle(single: Single): Promise<void>
```

Report current single song to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| single | Single | Yes | single information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setCurrentSinglecan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setCustomElements

```TypeScript
setCustomElements(actionType: ActionType, customType: CustomType,
      customElement: CustomElement): Promise<void>
```

Report custom elements change information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | ActionType | Yes | action type |
| customType | CustomType | Yes | custom type |
| customElement | CustomElement | Yes | custom element |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setCustomElementscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDialogCommand

```TypeScript
setDialogCommand(type: DialogControlType, dialogInfo: DialogInfo): Promise<void>
```

Report dialog command to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DialogControlType | Yes | dialog control type |
| dialogInfo | DialogInfo | Yes | dialog information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setDialogCommandcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDownloadMediaEntityStatus

```TypeScript
setDownloadMediaEntityStatus(single: MediaEntity): Promise<void>
```

Report single download status information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| single | MediaEntity | Yes | single information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setDownloadMediaEntityStatuscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setExtensionAbility

```TypeScript
setExtensionAbility(want: WantAgent): Promise<void>
```

Report execute extension ability to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | WantAgent | Yes | ability info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setMediaEntities

```TypeScript
setMediaEntities(entities: MediaEntity[]): Promise<void>
```

Report media resource change information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entities | MediaEntity[] | Yes | media resource information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setMediaEntitiescan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setPlaylist

```TypeScript
setPlaylist(playlist: PageMediaEntity): Promise<void>
```

Report play list information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playlist | PageMediaEntity | Yes | play list information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setPlaylistcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setSettings

```TypeScript
setSettings(settingItems: SettingItem[]): Promise<void>
```

Report settings information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settingItems | SettingItem[] | Yes | setting items |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setSettingscan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setTabContent

```TypeScript
setTabContent(tabId: string, tabContent: MediaTabContent): Promise<void>
```

Report tab page content information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tabId | string | Yes | tab page id |
| tabContent | MediaTabContent | Yes | tab page content |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setTabContentcan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setUserInfo

```TypeScript
setUserInfo(userInfo: UserInfo): Promise<void>
```

Report user infomation to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userInfo | UserInfo | Yes | user information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.function setUserInfocan not work correctly due to limited device capabilities. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## startTemplate

```TypeScript
startTemplate(): Promise<OperResult>
```

Start media center template interface.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | (OperResult) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |

## sessionId

```TypeScript
sessionId: string
```

Unique AVMusicTemplate descriptor.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sessionTag

```TypeScript
sessionTag: string
```

AVMusicTemplate tag.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

