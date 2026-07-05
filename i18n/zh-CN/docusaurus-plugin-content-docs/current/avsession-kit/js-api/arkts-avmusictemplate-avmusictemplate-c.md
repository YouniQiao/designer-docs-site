# AVMusicTemplate

AVMusicTemplate interface

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the AVMusicTemplate instance.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function destroy  can not work correctly due to limited device capabilities. |

## offClearSearchHistory

```TypeScript
offClearSearchHistory(callback?: ClearSearchHistoryEvent): void
```

Unregister clear search history callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offClearSearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDownloadMediaEntity

```TypeScript
offDownloadMediaEntity(callback?: DownloadMediaEntityEvent): void
```

Unregister download media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offDownloadMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offExecuteAction

```TypeScript
offExecuteAction(callback?: ExecuteActionEvent): void
```

Unregister execute action callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offFavoriteMediaEntity

```TypeScript
offFavoriteMediaEntity(callback?: FavoriteMediaEntityEvent): void
```

Unregister favorite media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offFavoriteMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offHandleMemberPurchase

```TypeScript
offHandleMemberPurchase(callback?: HandleMemberPurchaseEvent): void
```

Unregister handle member purchase callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offHandleMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offLogin

```TypeScript
offLogin(callback?: LoginEvent): void
```

Unregister login callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | LoginEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offLogin  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayForSearch

```TypeScript
offPlayForSearch(callback?: PlayForSearchEvent): void
```

Unregister play for search callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offPlayForSearch  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlayMediaEntity

```TypeScript
offPlayMediaEntity(callback?: PlayMediaEntityEvent): void
```

Unregister play media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offPlayMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offProblemAndAdvice

```TypeScript
offProblemAndAdvice(callback?: ProblemAndAdviceEvent): void
```

Unregister problem and advice callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offProblemAndAdvice  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilation

```TypeScript
offQueryCompilation(callback?: QueryCompilationEvent): void
```

Unregister query compilation callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryCompilation  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCompilationByKeyword

```TypeScript
offQueryCompilationByKeyword(callback?: QueryCompilationByKeywordEvent): void
```

Unregister query compilation by keyword callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryCompilationByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCurrentSingle

```TypeScript
offQueryCurrentSingle(callback?: QueryCurrentSingleEvent): void
```

Unregister query current single callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryCurrentSingle  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryCustomContent

```TypeScript
offQueryCustomContent(callback?: QueryCustomContentEvent): void
```

Unregister query custom content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryCustomContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryHotWords

```TypeScript
offQueryHotWords(callback?: QueryHotWordsEvent): void
```

Unregister query hot words callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryHotWords  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMainTabs

```TypeScript
offQueryMainTabs(callback?: QueryMainTabsEvent): void
```

Unregister query main tabs callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryMainTabs  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntity

```TypeScript
offQueryMediaEntity(callback?: QueryMediaEntityEvent): void
```

Unregister query media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaEntityByKeyword

```TypeScript
offQueryMediaEntityByKeyword(callback?: QueryMediaEntityByKeywordEvent): void
```

Unregister query media entity by keyword callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaEntityByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMediaTabContent

```TypeScript
offQueryMediaTabContent(callback?: QueryMediaTabContentEvent): void
```

Unregister query media tab content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryMediaTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryMemberPurchase

```TypeScript
offQueryMemberPurchase(callback?: QueryMemberPurchaseEvent): void
```

Unregister query member purchase callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryPlaylist

```TypeScript
offQueryPlaylist(callback?: QueryPlaylistEvent): void
```

Unregister query playlist callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQueryRecommendMediaEntityList

```TypeScript
offQueryRecommendMediaEntityList(callback?: QueryRecommendMediaEntityListEvent): void
```

Unregister query recommend media entity list callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQueryRecommendMediaEntityList  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offQuerySearchHistory

```TypeScript
offQuerySearchHistory(callback?: QuerySearchHistoryEvent): void
```

Unregister query search history callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offQuerySearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offRequestDialogInfo

```TypeScript
offRequestDialogInfo(callback?: RequestDialogInfoEvent): void
```

Unregister request dialog info callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offRequestDialogInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## offSettingsChange

```TypeScript
offSettingsChange(callback?: SettingsChangeEvent): void
```

Unregister settings change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function offSettingsChange  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onClearSearchHistory

```TypeScript
onClearSearchHistory(callback: ClearSearchHistoryEvent): void
```

Register clear search history callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ClearSearchHistoryEvent | 是 | The callback used to handle ('clearSearchHistory') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onClearSearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDownloadMediaEntity

```TypeScript
onDownloadMediaEntity(callback: DownloadMediaEntityEvent): void
```

Register download media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | DownloadMediaEntityEvent | 是 | The callback used to handle ('downloadMediaEntity') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onDownloadMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onExecuteAction

```TypeScript
onExecuteAction(callback: ExecuteActionEvent): void
```

Register execute action callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ExecuteActionEvent | 是 | The callback used to handle ('executeAction') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onFavoriteMediaEntity

```TypeScript
onFavoriteMediaEntity(callback: FavoriteMediaEntityEvent): void
```

Register favorite media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | FavoriteMediaEntityEvent | 是 | The callback used to handle ('favoriteMediaEntity') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onFavoriteMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onHandleMemberPurchase

```TypeScript
onHandleMemberPurchase(callback: HandleMemberPurchaseEvent): void
```

Register handle member purchase callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | HandleMemberPurchaseEvent | 是 | The callback used to handle ('handleMemberPurchase') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onHandleMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onLogin

```TypeScript
onLogin(callback: LoginEvent): void
```

Register login callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | LoginEvent | 是 | The callback used to handle ('login') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onLogin  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayForSearch

```TypeScript
onPlayForSearch(callback: PlayForSearchEvent): void
```

Register play for search callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | PlayForSearchEvent | 是 | The callback used to handle ('playForSearch') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onPlayForSearch  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlayMediaEntity

```TypeScript
onPlayMediaEntity(callback: PlayMediaEntityEvent): void
```

Register play media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | PlayMediaEntityEvent | 是 | The callback used to handle ('playMediaEntity') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onPlayMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onProblemAndAdvice

```TypeScript
onProblemAndAdvice(callback: ProblemAndAdviceEvent): void
```

Register problem and advice callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ProblemAndAdviceEvent | 是 | The callback used to handle ('problemAndAdvice') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onProblemAndAdvice  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilation

```TypeScript
onQueryCompilation(callback: QueryCompilationEvent): void
```

Register query compilation callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCompilationEvent | 是 | The callback used to handle ('queryCompilation') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryCompilation  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCompilationByKeyword

```TypeScript
onQueryCompilationByKeyword(callback: QueryCompilationByKeywordEvent): void
```

Register query compilation by keyword callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCompilationByKeywordEvent | 是 | The callback used to handle ('queryCompilationByKeyword') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryCompilationByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCurrentSingle

```TypeScript
onQueryCurrentSingle(callback: QueryCurrentSingleEvent): void
```

Register query current single callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCurrentSingleEvent | 是 | The callback used to handle ('queryCurrentSingle') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryCurrentSingle  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryCustomContent

```TypeScript
onQueryCustomContent(callback: QueryCustomContentEvent): void
```

Register query custom content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryCustomContentEvent | 是 | The callback used to handle ('queryCustomContent') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryCustomContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryHotWords

```TypeScript
onQueryHotWords(callback: QueryHotWordsEvent): void
```

Register query hot words callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryHotWordsEvent | 是 | The callback used to handle ('queryHotWords') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryHotWords  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMainTabs

```TypeScript
onQueryMainTabs(callback: QueryMainTabsEvent): void
```

Register query main tabs callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMainTabsEvent | 是 | The callback used to handle ('queryMainTabs') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryMainTabs  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntity

```TypeScript
onQueryMediaEntity(callback: QueryMediaEntityEvent): void
```

Register query media entity callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaEntityEvent | 是 | The callback used to handle ('queryMediaEntity') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaEntity  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaEntityByKeyword

```TypeScript
onQueryMediaEntityByKeyword(callback: QueryMediaEntityByKeywordEvent): void
```

Register query media entity by keyword callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaEntityByKeywordEvent | 是 | The callback used to handle ('queryMediaEntityByKeyword') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaEntityByKeyword  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMediaTabContent

```TypeScript
onQueryMediaTabContent(callback: QueryMediaTabContentEvent): void
```

Register query media tab content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMediaTabContentEvent | 是 | The callback used to handle ('queryMediaTabContent') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryMediaTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryMemberPurchase

```TypeScript
onQueryMemberPurchase(callback: QueryMemberPurchaseEvent): void
```

Register query member purchase callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryMemberPurchaseEvent | 是 | The callback used to handle ('queryMemberPurchase') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryMemberPurchase  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryPlaylist

```TypeScript
onQueryPlaylist(callback: QueryPlaylistEvent): void
```

Register query playlist callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryPlaylistEvent | 是 | The callback used to handle ('queryPlaylist') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQueryRecommendMediaEntityList

```TypeScript
onQueryRecommendMediaEntityList(callback: QueryRecommendMediaEntityListEvent): void
```

Register query recommend media entity list callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QueryRecommendMediaEntityListEvent | 是 | The callback used to  handle ('queryRecommendMediaEntityList') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQueryRecommendMediaEntityList  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onQuerySearchHistory

```TypeScript
onQuerySearchHistory(callback: QuerySearchHistoryEvent): void
```

Register query search history callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | QuerySearchHistoryEvent | 是 | The callback used to handle ('querySearchHistory') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onQuerySearchHistory  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onRequestDialogInfo

```TypeScript
onRequestDialogInfo(callback: RequestDialogInfoEvent): void
```

Register request dialog info callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | RequestDialogInfoEvent | 是 | The callback used to handle ('requestDialogInfo') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onRequestDialogInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## onSettingsChange

```TypeScript
onSettingsChange(callback: SettingsChangeEvent): void
```

Register settings change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | SettingsChangeEvent | 是 | The callback used to handle ('settingsChange') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function onSettingsChange  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000012 | AVMusicTemplate error. |

## reportExecuteAction

```TypeScript
reportExecuteAction(actionType: string, params: string): Promise<void>
```

Report execute action information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | string | 是 | action type |
| params | string | 是 | params value |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function reportExecuteAction  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setCurrentSingle

```TypeScript
setCurrentSingle(single: Single): Promise<void>
```

Report current single song to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| single | Single | 是 | single information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | ActionType | 是 | action type |
| customType | CustomType | 是 | custom type |
| customElement | CustomElement | 是 | custom element |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setCustomElements  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDialogCommand

```TypeScript
setDialogCommand(type: DialogControlType, dialogInfo: DialogInfo): Promise<void>
```

Report dialog command to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | DialogControlType | 是 | dialog control type |
| dialogInfo | DialogInfo | 是 | dialog information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setDialogCommand  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setDownloadMediaEntityStatus

```TypeScript
setDownloadMediaEntityStatus(single: MediaEntity): Promise<void>
```

Report single download status information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| single | MediaEntity | 是 | single information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setDownloadMediaEntityStatus  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setExtensionAbility

```TypeScript
setExtensionAbility(want: WantAgent): Promise<void>
```

Report execute extension ability to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | WantAgent | 是 | ability info |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setMediaEntities

```TypeScript
setMediaEntities(entities: MediaEntity[]): Promise<void>
```

Report media resource change information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| entities | MediaEntity[] | 是 | media resource information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setMediaEntities  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setPlaylist

```TypeScript
setPlaylist(playlist: PageMediaEntity): Promise<void>
```

Report play list information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| playlist | PageMediaEntity | 是 | play list information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setPlaylist  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setSettings

```TypeScript
setSettings(settingItems: SettingItem[]): Promise<void>
```

Report settings information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| settingItems | SettingItem[] | 是 | setting items |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setSettings  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setTabContent

```TypeScript
setTabContent(tabId: string, tabContent: MediaTabContent): Promise<void>
```

Report tab page content information to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabId | string | 是 | tab page id |
| tabContent | MediaTabContent | 是 | tab page content |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setTabContent  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## setUserInfo

```TypeScript
setUserInfo(userInfo: UserInfo): Promise<void>
```

Report user infomation to MediaUI.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userInfo | UserInfo | 是 | user information |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function setUserInfo  can not work correctly due to limited device capabilities. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000011 | The data write error, data is invalid. |

## startTemplate

```TypeScript
startTemplate(): Promise<OperResult>
```

Start media center template interface.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | (OperResult) returned through promise |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |

## sessionTag

```TypeScript
sessionTag: string
```

AVMusicTemplate tag.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sessionId

```TypeScript
sessionId: string
```

Unique AVMusicTemplate descriptor.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

