# AVMusicTemplateController

The definition of the AVMusicTemplateController.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## 导入模块

```TypeScript
import { avMusicTemplate } from '@kit.AVSessionKit';
```

## clearSearchHistory

```TypeScript
clearSearchHistory(): Promise<OperResult>
```

Clear search history.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the controller.

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
| 801 | capability not supported. |

## downloadMediaEntity

```TypeScript
downloadMediaEntity(controlType: DownloadControlType, mediaEntity: MediaEntity): Promise<OperResult>
```

Download media entity.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controlType | DownloadControlType | 是 | control type |
| mediaEntity | MediaEntity | 是 | media entity |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## executeAction

```TypeScript
executeAction(actionType: string, params: string): Promise<string>
```

Execute action.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | string | 是 | action type |
| params | string | 是 | params |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## favoriteMediaEntity

```TypeScript
favoriteMediaEntity(actionType: MediaFavoriteType, mediaEntity: MediaEntity): Promise<OperResult>
```

Favorite media entity.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | MediaFavoriteType | 是 | action type |
| mediaEntity | MediaEntity | 是 | media entity |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## handleMemberPurchase

```TypeScript
handleMemberPurchase(info: MemberPurchaseInfo): Promise<DialogInfo>
```

Handle member purchase.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| info | MemberPurchaseInfo | 是 | info |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DialogInfo> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## login

```TypeScript
login(controlType: LoginType, id?: string): Promise<QrCodeInfo[]>
```

Login.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controlType | LoginType | 是 | control type |
| id | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;QrCodeInfo[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## offCurrentSingleChange

```TypeScript
offCurrentSingleChange(callback?: Callback<Single>): void
```

Unregister report current single callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Single> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offCustomElementsChange

```TypeScript
offCustomElementsChange(callback?: ReportCustomElementsChangeEvent): void
```

Unregister report custom elements change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportCustomElementsChangeEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDialogCommandChange

```TypeScript
offDialogCommandChange(callback?: ReportDialogCommandEvent): void
```

Unregister report dialog command callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportDialogCommandEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDownloadMediaEntityStatusChange

```TypeScript
offDownloadMediaEntityStatusChange(callback?: Callback<MediaEntity>): void
```

Unregister report download media entity status callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offExtensionAbilityChange

```TypeScript
offExtensionAbilityChange(callback?: ReportExecuteAbilityEvent): void
```

Unregister report extension ability callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportExecuteAbilityEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offMediaEntitiesChange

```TypeScript
offMediaEntitiesChange(callback?: Callback<MediaEntity[]>): void
```

Unregister report media entities change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity[]> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlaylistChange

```TypeScript
offPlaylistChange(callback?: Callback<PageMediaEntity>): void
```

Unregister report playlist callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;PageMediaEntity> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offReportExecuteAction

```TypeScript
offReportExecuteAction(callback?: ReportExecuteActionEvent): void
```

Unregister report execute action callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportExecuteActionEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offSettingsChange

```TypeScript
offSettingsChange(callback?: Callback<SettingItem[]>): void
```

Unregister report settings callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SettingItem[]> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offTabContentChange

```TypeScript
offTabContentChange(callback?: ReportTabContentEvent): void
```

Unregister report tab content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportTabContentEvent | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offUserInfoChange

```TypeScript
offUserInfoChange(callback?: Callback<UserInfo>): void
```

Unregister report user info callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;UserInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onCurrentSingleChange

```TypeScript
onCurrentSingleChange(callback: Callback<Single>): void
```

Register report current single callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;Single> | 是 | The callback used to handle ('reportCurrentSingle') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onCustomElementsChange

```TypeScript
onCustomElementsChange(callback: ReportCustomElementsChangeEvent): void
```

Register report custom elements change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportCustomElementsChangeEvent | 是 | The callback  used to handle ('reportCustomElementsChange') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDialogCommandChange

```TypeScript
onDialogCommandChange(callback: ReportDialogCommandEvent): void
```

Register report dialog command callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportDialogCommandEvent | 是 | The callback used to handle ('reportDialogCommand') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDownloadMediaEntityStatusChange

```TypeScript
onDownloadMediaEntityStatusChange(callback: Callback<MediaEntity>): void
```

Register report download media entity status callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity> | 是 | The callback  used to handle ('reportDownloadMediaEntityStatus') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onExtensionAbilityChange

```TypeScript
onExtensionAbilityChange(callback: ReportExecuteAbilityEvent): void
```

Register report extension ability callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportExecuteAbilityEvent | 是 | The callback used to handle ('setExtensionAbility') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onMediaEntitiesChange

```TypeScript
onMediaEntitiesChange(callback: Callback<MediaEntity[]>): void
```

Register report media entities change callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity[]> | 是 | The callback used to handle ('reportMediaEntitiesChange') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlaylistChange

```TypeScript
onPlaylistChange(callback: Callback<PageMediaEntity>): void
```

Register report playlist callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;PageMediaEntity> | 是 | The callback used to handle ('reportPlaylist') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onReportExecuteAction

```TypeScript
onReportExecuteAction(callback: ReportExecuteActionEvent): void
```

Register report execute action callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportExecuteActionEvent | 是 | The callback used to handle ('reportExecuteAction') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onSettingsChange

```TypeScript
onSettingsChange(callback: Callback<SettingItem[]>): void
```

Register report settings callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SettingItem[]> | 是 | The callback used to handle ('reportSettings') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onTabContentChange

```TypeScript
onTabContentChange(callback: ReportTabContentEvent): void
```

Register report tab content callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | ReportTabContentEvent | 是 | The callback used to handle ('reportTabContent') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onUserInfoChange

```TypeScript
onUserInfoChange(callback: Callback<UserInfo>): void
```

Register report user info callback.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;UserInfo> | 是 | The callback used to handle ('reportUserInfo') event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000006 | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## playForSearch

```TypeScript
playForSearch(command: SearchPlayInfoType, args: SearchPlayInfo): Promise<OperResult>
```

Play for search.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| command | SearchPlayInfoType | 是 | command |
| args | SearchPlayInfo | 是 | args |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## playMediaEntity

```TypeScript
playMediaEntity(mediaEntity: MediaEntity): Promise<void>
```

Play media entity.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mediaEntity | MediaEntity | 是 | media entity |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryCompilation

```TypeScript
queryCompilation(compilationId: string, pageIndex: int): Promise<PageMediaEntity>
```

Query compilation.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| compilationId | string | 是 | compilation id |
| pageIndex | int | 是 | page index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryCompilationByKeyword

```TypeScript
queryCompilationByKeyword(keyword: string): Promise<Compilation[]>
```

Query compilation by keyword.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyword | string | 是 | keyword |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Compilation[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryCurrentSingle

```TypeScript
queryCurrentSingle(): Promise<Single>
```

Query current single.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Single> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryCustomContent

```TypeScript
queryCustomContent(queryType: CustomType[]): Promise<CustomElement>
```

Query custom content.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| queryType | CustomType[] | 是 | query type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;CustomElement> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryHotWords

```TypeScript
queryHotWords(): Promise<string[]>
```

Query hot words.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryMainTabs

```TypeScript
queryMainTabs(): Promise<MediaTab[]>
```

Query main tabs.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MediaTab[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryMediaEntity

```TypeScript
queryMediaEntity(params: QueryMediaEntityParam): Promise<PageMediaEntity>
```

Query media entity.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | QueryMediaEntityParam | 是 | query params |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryMediaEntityByKeyword

```TypeScript
queryMediaEntityByKeyword(keyword: string, searchType: EntityType, pageIndex: int): Promise<PageMediaEntity>
```

Query media entity by keyword.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyword | string | 是 | keyword |
| searchType | EntityType | 是 | search type |
| pageIndex | int | 是 | page index |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryMediaTabContent

```TypeScript
queryMediaTabContent(tabId: string): Promise<MediaTabContent>
```

Query media tab content.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabId | string | 是 | tab id |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MediaTabContent> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryMemberPurchase

```TypeScript
queryMemberPurchase(memberPurchaseType: MemberPurchaseType): Promise<MemberPurchaseInfo[]>
```

Query member purchase.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| memberPurchaseType | MemberPurchaseType | 是 | memberPurchase type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MemberPurchaseInfo[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryPlaylist

```TypeScript
queryPlaylist(pageIndex: int, sort: Sort): Promise<PageMediaEntity>
```

Query playlist.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pageIndex | int | 是 | page index |
| sort | Sort | 是 | sort type |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PageMediaEntity> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## queryRecommendMediaEntityList

```TypeScript
queryRecommendMediaEntityList(): Promise<MediaEntity[]>
```

Query recommend media entity list.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MediaEntity[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## querySearchHistory

```TypeScript
querySearchHistory(): Promise<string[]>
```

Query search history.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string[]> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## reportProblemAndAdvice

```TypeScript
reportProblemAndAdvice(advice: string): Promise<OperResult>
```

Report problem and advice.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| advice | string | 是 | advice |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## requestDialogInfo

```TypeScript
requestDialogInfo(actionType: DialogActionType, actionInfo?: DialogActionInfo): Promise<DialogInfo>
```

Request dialog info.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| actionType | DialogActionType | 是 | action type |
| actionInfo | DialogActionInfo | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DialogInfo> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## updateSettings

```TypeScript
updateSettings(settingItem: SettingItem): Promise<SettingItem>
```

Report settings change.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| settingItem | SettingItem | 是 | setting item |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SettingItem> | Promise for the result |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | capability not supported. |
| 35000003 | Template listener not registered. |
| 35000005 | AVMusicTemplate does not exist. |
| 35000006 | AVMusicTemplateController does not exist. |

## isDestroy

```TypeScript
isDestroy: boolean
```

Mark the controller is or not destroy.

**类型：** boolean

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sessionId

```TypeScript
sessionId: string
```

Unique id of the AVMusicTemplateController.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

