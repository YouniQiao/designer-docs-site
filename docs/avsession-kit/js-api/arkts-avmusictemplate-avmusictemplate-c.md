# AVMusicTemplate

AVMusicTemplate interface

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the AVMusicTemplate instance.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function destroy  can not work correctly due to limited device capabilities. |

## offClearSearchHistory

```TypeScript
offClearSearchHistory(callback?: ClearSearchHistoryEvent): void
```

Unregister clear search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offClearSearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDownloadMediaEntity

```TypeScript
offDownloadMediaEntity(callback?: DownloadMediaEntityEvent): void
```

Unregister download media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offDownloadMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offExecuteAction

```TypeScript
offExecuteAction(callback?: ExecuteActionEvent): void
```

Unregister execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offFavoriteMediaEntity

```TypeScript
offFavoriteMediaEntity(callback?: FavoriteMediaEntityEvent): void
```

Unregister favorite media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offFavoriteMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offHandleMemberPurchase

```TypeScript
offHandleMemberPurchase(callback?: HandleMemberPurchaseEvent): void
```

Unregister handle member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offHandleMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offLogin

```TypeScript
offLogin(callback?: LoginEvent): void
```

Unregister login callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | LoginEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offLogin  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayForSearch

```TypeScript
offPlayForSearch(callback?: PlayForSearchEvent): void
```

Unregister play for search callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offPlayForSearch  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayMediaEntity

```TypeScript
offPlayMediaEntity(callback?: PlayMediaEntityEvent): void
```

Unregister play media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offPlayMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offProblemAndAdvice

```TypeScript
offProblemAndAdvice(callback?: ProblemAndAdviceEvent): void
```

Unregister problem and advice callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offProblemAndAdvice  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilation

```TypeScript
offQueryCompilation(callback?: QueryCompilationEvent): void
```

Unregister query compilation callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryCompilation  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilationByKeyword

```TypeScript
offQueryCompilationByKeyword(callback?: QueryCompilationByKeywordEvent): void
```

Unregister query compilation by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryCompilationByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCurrentSingle

```TypeScript
offQueryCurrentSingle(callback?: QueryCurrentSingleEvent): void
```

Unregister query current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryCurrentSingle  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCustomContent

```TypeScript
offQueryCustomContent(callback?: QueryCustomContentEvent): void
```

Unregister query custom content callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryCustomContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryHotWords

```TypeScript
offQueryHotWords(callback?: QueryHotWordsEvent): void
```

Unregister query hot words callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryHotWords  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMainTabs

```TypeScript
offQueryMainTabs(callback?: QueryMainTabsEvent): void
```

Unregister query main tabs callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryMainTabs  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntity

```TypeScript
offQueryMediaEntity(callback?: QueryMediaEntityEvent): void
```

Unregister query media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntityByKeyword

```TypeScript
offQueryMediaEntityByKeyword(callback?: QueryMediaEntityByKeywordEvent): void
```

Unregister query media entity by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaEntityByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaTabContent

```TypeScript
offQueryMediaTabContent(callback?: QueryMediaTabContentEvent): void
```

Unregister query media tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMemberPurchase

```TypeScript
offQueryMemberPurchase(callback?: QueryMemberPurchaseEvent): void
```

Unregister query member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryPlaylist

```TypeScript
offQueryPlaylist(callback?: QueryPlaylistEvent): void
```

Unregister query playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryRecommendMediaEntityList

```TypeScript
offQueryRecommendMediaEntityList(callback?: QueryRecommendMediaEntityListEvent): void
```

Unregister query recommend media entity list callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQueryRecommendMediaEntityList  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQuerySearchHistory

```TypeScript
offQuerySearchHistory(callback?: QuerySearchHistoryEvent): void
```

Unregister query search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offQuerySearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offRequestDialogInfo

```TypeScript
offRequestDialogInfo(callback?: RequestDialogInfoEvent): void
```

Unregister request dialog info callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offRequestDialogInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offSettingsChange

```TypeScript
offSettingsChange(callback?: SettingsChangeEvent): void
```

Unregister settings change callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function offSettingsChange  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onClearSearchHistory

```TypeScript
onClearSearchHistory(callback: ClearSearchHistoryEvent): void
```

Register clear search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | Yes | The callback used to handle ('clearSearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onClearSearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDownloadMediaEntity

```TypeScript
onDownloadMediaEntity(callback: DownloadMediaEntityEvent): void
```

Register download media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | Yes | The callback used to handle ('downloadMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onDownloadMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onExecuteAction

```TypeScript
onExecuteAction(callback: ExecuteActionEvent): void
```

Register execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | Yes | The callback used to handle ('executeAction') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onFavoriteMediaEntity

```TypeScript
onFavoriteMediaEntity(callback: FavoriteMediaEntityEvent): void
```

Register favorite media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | Yes | The callback used to handle ('favoriteMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onFavoriteMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onHandleMemberPurchase

```TypeScript
onHandleMemberPurchase(callback: HandleMemberPurchaseEvent): void
```

Register handle member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | Yes | The callback used to handle ('handleMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onHandleMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onLogin

```TypeScript
onLogin(callback: LoginEvent): void
```

Register login callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | LoginEvent | Yes | The callback used to handle ('login') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onLogin  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayForSearch

```TypeScript
onPlayForSearch(callback: PlayForSearchEvent): void
```

Register play for search callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | Yes | The callback used to handle ('playForSearch') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onPlayForSearch  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayMediaEntity

```TypeScript
onPlayMediaEntity(callback: PlayMediaEntityEvent): void
```

Register play media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | Yes | The callback used to handle ('playMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onPlayMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onProblemAndAdvice

```TypeScript
onProblemAndAdvice(callback: ProblemAndAdviceEvent): void
```

Register problem and advice callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | Yes | The callback used to handle ('problemAndAdvice') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onProblemAndAdvice  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilation

```TypeScript
onQueryCompilation(callback: QueryCompilationEvent): void
```

Register query compilation callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | Yes | The callback used to handle ('queryCompilation') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryCompilation  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilationByKeyword

```TypeScript
onQueryCompilationByKeyword(callback: QueryCompilationByKeywordEvent): void
```

Register query compilation by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | Yes | The callback used to handle ('queryCompilationByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryCompilationByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCurrentSingle

```TypeScript
onQueryCurrentSingle(callback: QueryCurrentSingleEvent): void
```

Register query current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | Yes | The callback used to handle ('queryCurrentSingle') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryCurrentSingle  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCustomContent

```TypeScript
onQueryCustomContent(callback: QueryCustomContentEvent): void
```

Register query custom content callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | Yes | The callback used to handle ('queryCustomContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryCustomContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryHotWords

```TypeScript
onQueryHotWords(callback: QueryHotWordsEvent): void
```

Register query hot words callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | Yes | The callback used to handle ('queryHotWords') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryHotWords  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMainTabs

```TypeScript
onQueryMainTabs(callback: QueryMainTabsEvent): void
```

Register query main tabs callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | Yes | The callback used to handle ('queryMainTabs') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryMainTabs  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntity

```TypeScript
onQueryMediaEntity(callback: QueryMediaEntityEvent): void
```

Register query media entity callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | Yes | The callback used to handle ('queryMediaEntity') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntityByKeyword

```TypeScript
onQueryMediaEntityByKeyword(callback: QueryMediaEntityByKeywordEvent): void
```

Register query media entity by keyword callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | Yes | The callback used to handle ('queryMediaEntityByKeyword') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaEntityByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaTabContent

```TypeScript
onQueryMediaTabContent(callback: QueryMediaTabContentEvent): void
```

Register query media tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | Yes | The callback used to handle ('queryMediaTabContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMemberPurchase

```TypeScript
onQueryMemberPurchase(callback: QueryMemberPurchaseEvent): void
```

Register query member purchase callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | Yes | The callback used to handle ('queryMemberPurchase') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryPlaylist

```TypeScript
onQueryPlaylist(callback: QueryPlaylistEvent): void
```

Register query playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | Yes | The callback used to handle ('queryPlaylist') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryRecommendMediaEntityList

```TypeScript
onQueryRecommendMediaEntityList(callback: QueryRecommendMediaEntityListEvent): void
```

Register query recommend media entity list callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | Yes | The callback used to  handle ('queryRecommendMediaEntityList') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQueryRecommendMediaEntityList  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQuerySearchHistory

```TypeScript
onQuerySearchHistory(callback: QuerySearchHistoryEvent): void
```

Register query search history callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | Yes | The callback used to handle ('querySearchHistory') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onQuerySearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onRequestDialogInfo

```TypeScript
onRequestDialogInfo(callback: RequestDialogInfoEvent): void
```

Register request dialog info callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | Yes | The callback used to handle ('requestDialogInfo') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onRequestDialogInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onSettingsChange

```TypeScript
onSettingsChange(callback: SettingsChangeEvent): void
```

Register settings change callback.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | Yes | The callback used to handle ('settingsChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function onSettingsChange  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## reportExecuteAction

```TypeScript
reportExecuteAction(actionType: string, params: string): Promise<void>
```

Report execute action information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | string | Yes | action type |
| params | string | Yes | params value |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function reportExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setCurrentSingle

```TypeScript
setCurrentSingle(single: Single): Promise<void>
```

Report current single song to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| single | Single | Yes | single information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setCurrentSingle  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setCustomElements

```TypeScript
setCustomElements(actionType: ActionType, customType: CustomType,
      customElement: CustomElement): Promise<void>
```

Report custom elements change information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

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
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setCustomElements  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDialogCommand

```TypeScript
setDialogCommand(type: DialogControlType, dialogInfo: DialogInfo): Promise<void>
```

Report dialog command to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | DialogControlType | Yes | dialog control type |
| dialogInfo | DialogInfo | Yes | dialog information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setDialogCommand  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDownloadMediaEntityStatus

```TypeScript
setDownloadMediaEntityStatus(single: MediaEntity): Promise<void>
```

Report single download status information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| single | MediaEntity | Yes | single information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setDownloadMediaEntityStatus  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setExtensionAbility

```TypeScript
setExtensionAbility(want: WantAgent): Promise<void>
```

Report execute extension ability to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | WantAgent | Yes | ability info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | capability not supported. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setMediaEntities

```TypeScript
setMediaEntities(entities: MediaEntity[]): Promise<void>
```

Report media resource change information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| entities | MediaEntity[] | Yes | media resource information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setMediaEntities  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setPlaylist

```TypeScript
setPlaylist(playlist: PageMediaEntity): Promise<void>
```

Report play list information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| playlist | PageMediaEntity | Yes | play list information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setSettings

```TypeScript
setSettings(settingItems: SettingItem[]): Promise<void>
```

Report settings information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settingItems | SettingItem[] | Yes | setting items |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setSettings  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setTabContent

```TypeScript
setTabContent(tabId: string, tabContent: MediaTabContent): Promise<void>
```

Report tab page content information to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tabId | string | Yes | tab page id |
| tabContent | MediaTabContent | Yes | tab page content |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setUserInfo

```TypeScript
setUserInfo(userInfo: UserInfo): Promise<void>
```

Report user infomation to MediaUI.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userInfo | UserInfo | Yes | user information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported.function setUserInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## startTemplate

```TypeScript
startTemplate(): Promise<OperResult>
```

Start media center template interface.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult> | (OperResult) returned through promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | capability not supported. |

## sessionTag

```TypeScript
sessionTag: string
```

AVMusicTemplate tag.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sessionId

```TypeScript
sessionId: string
```

Unique AVMusicTemplate descriptor.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

