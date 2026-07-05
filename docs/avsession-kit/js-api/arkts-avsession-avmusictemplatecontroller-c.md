# AVMusicTemplateController

The definition of the AVMusicTemplateController.

**Since:** 23

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## Modules to Import

```TypeScript
import { avMusicTemplate } from '@ohos.multimedia.avMusicTemplate';
```

## clearSearchHistory

```TypeScript
clearSearchHistory(): Promise<OperResult>
```

Clear search history.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy the controller.

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
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |

## downloadMediaEntity

```TypeScript
downloadMediaEntity(controlType: DownloadControlType, mediaEntity: MediaEntity): Promise<OperResult>
```

Download media entity.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlType | DownloadControlType | Yes | control type |
| mediaEntity | MediaEntity | Yes | media entity |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## executeAction

```TypeScript
executeAction(actionType: string, params: string): Promise<string>
```

Execute action.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | string | Yes | action type |
| params | string | Yes | params |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## favoriteMediaEntity

```TypeScript
favoriteMediaEntity(actionType: MediaFavoriteType, mediaEntity: MediaEntity): Promise<OperResult>
```

Favorite media entity.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | MediaFavoriteType | Yes | action type |
| mediaEntity | MediaEntity | Yes | media entity |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## handleMemberPurchase

```TypeScript
handleMemberPurchase(info: MemberPurchaseInfo): Promise<DialogInfo>
```

Handle member purchase.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | MemberPurchaseInfo | Yes | info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogInfo&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## login

```TypeScript
login(controlType: LoginType, id?: string): Promise<QrCodeInfo[]>
```

Login.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controlType | LoginType | Yes | control type |
| id | string | No | id |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;QrCodeInfo[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## offCurrentSingleChange

```TypeScript
offCurrentSingleChange(callback?: Callback<Single>): void
```

Unregister report current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Single&gt; | No | The callback used to handle ('reportCurrentSingle') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offCustomElementsChange

```TypeScript
offCustomElementsChange(callback?: ReportCustomElementsChangeEvent): void
```

Unregister report custom elements change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportCustomElementsChangeEvent | No | The callbackused to handle ('reportCustomElementsChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDialogCommandChange

```TypeScript
offDialogCommandChange(callback?: ReportDialogCommandEvent): void
```

Unregister report dialog command callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportDialogCommandEvent | No | The callback used to handle ('reportDialogCommand') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offDownloadMediaEntityStatusChange

```TypeScript
offDownloadMediaEntityStatusChange(callback?: Callback<MediaEntity>): void
```

Unregister report download media entity status callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity&gt; | No | The callbackused to handle ('reportDownloadMediaEntityStatus') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offExtensionAbilityChange

```TypeScript
offExtensionAbilityChange(callback?: ReportExecuteAbilityEvent): void
```

Unregister report extension ability callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportExecuteAbilityEvent | No | The callback used to handle ('setExtensionAbility') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offMediaEntitiesChange

```TypeScript
offMediaEntitiesChange(callback?: Callback<MediaEntity[]>): void
```

Unregister report media entities change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity[]&gt; | No | The callback used to handle ('reportMediaEntitiesChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offPlaylistChange

```TypeScript
offPlaylistChange(callback?: Callback<PageMediaEntity>): void
```

Unregister report playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PageMediaEntity&gt; | No | The callback used to handle ('reportPlaylist') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offReportExecuteAction

```TypeScript
offReportExecuteAction(callback?: ReportExecuteActionEvent): void
```

Unregister report execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportExecuteActionEvent | No | The callback used to handle ('reportExecuteAction') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offSettingsChange

```TypeScript
offSettingsChange(callback?: Callback<SettingItem[]>): void
```

Unregister report settings callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SettingItem[]&gt; | No | The callback used to handle ('reportSettings') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offTabContentChange

```TypeScript
offTabContentChange(callback?: ReportTabContentEvent): void
```

Unregister report tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportTabContentEvent | No | The callback used to handle ('reportTabContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## offUserInfoChange

```TypeScript
offUserInfoChange(callback?: Callback<UserInfo>): void
```

Unregister report user info callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;UserInfo&gt; | No | The callback used to handle ('reportUserInfo') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onCurrentSingleChange

```TypeScript
onCurrentSingleChange(callback: Callback<Single>): void
```

Register report current single callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Single&gt; | Yes | The callback used to handle ('reportCurrentSingle') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onCustomElementsChange

```TypeScript
onCustomElementsChange(callback: ReportCustomElementsChangeEvent): void
```

Register report custom elements change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportCustomElementsChangeEvent | Yes | The callbackused to handle ('reportCustomElementsChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDialogCommandChange

```TypeScript
onDialogCommandChange(callback: ReportDialogCommandEvent): void
```

Register report dialog command callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportDialogCommandEvent | Yes | The callback used to handle ('reportDialogCommand') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onDownloadMediaEntityStatusChange

```TypeScript
onDownloadMediaEntityStatusChange(callback: Callback<MediaEntity>): void
```

Register report download media entity status callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity&gt; | Yes | The callbackused to handle ('reportDownloadMediaEntityStatus') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onExtensionAbilityChange

```TypeScript
onExtensionAbilityChange(callback: ReportExecuteAbilityEvent): void
```

Register report extension ability callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportExecuteAbilityEvent | Yes | The callback used to handle ('setExtensionAbility') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onMediaEntitiesChange

```TypeScript
onMediaEntitiesChange(callback: Callback<MediaEntity[]>): void
```

Register report media entities change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MediaEntity[]&gt; | Yes | The callback used to handle ('reportMediaEntitiesChange') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onPlaylistChange

```TypeScript
onPlaylistChange(callback: Callback<PageMediaEntity>): void
```

Register report playlist callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PageMediaEntity&gt; | Yes | The callback used to handle ('reportPlaylist') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onReportExecuteAction

```TypeScript
onReportExecuteAction(callback: ReportExecuteActionEvent): void
```

Register report execute action callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportExecuteActionEvent | Yes | The callback used to handle ('reportExecuteAction') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onSettingsChange

```TypeScript
onSettingsChange(callback: Callback<SettingItem[]>): void
```

Register report settings callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SettingItem[]&gt; | Yes | The callback used to handle ('reportSettings') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onTabContentChange

```TypeScript
onTabContentChange(callback: ReportTabContentEvent): void
```

Register report tab content callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReportTabContentEvent | Yes | The callback used to handle ('reportTabContent') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## onUserInfoChange

```TypeScript
onUserInfoChange(callback: Callback<UserInfo>): void
```

Register report user info callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;UserInfo&gt; | Yes | The callback used to handle ('reportUserInfo') event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |
| 35000012 | AVMusicTemplate error. |

## playForSearch

```TypeScript
playForSearch(command: SearchPlayInfoType, args: SearchPlayInfo): Promise<OperResult>
```

Play for search.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| command | SearchPlayInfoType | Yes | command |
| args | SearchPlayInfo | Yes | args |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## playMediaEntity

```TypeScript
playMediaEntity(mediaEntity: MediaEntity): Promise<void>
```

Play media entity.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mediaEntity | MediaEntity | Yes | media entity |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryCompilation

```TypeScript
queryCompilation(compilationId: string, pageIndex: number): Promise<PageMediaEntity>
```

Query compilation.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compilationId | string | Yes | compilation id |
| pageIndex | number | Yes | page index |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryCompilationByKeyword

```TypeScript
queryCompilationByKeyword(keyword: string): Promise<Compilation[]>
```

Query compilation by keyword.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyword | string | Yes | keyword |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Compilation[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryCurrentSingle

```TypeScript
queryCurrentSingle(): Promise<Single>
```

Query current single.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Single&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryCustomContent

```TypeScript
queryCustomContent(queryType: CustomType[]): Promise<CustomElement>
```

Query custom content.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| queryType | CustomType[] | Yes | query type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CustomElement&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryHotWords

```TypeScript
queryHotWords(): Promise<string[]>
```

Query hot words.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryMainTabs

```TypeScript
queryMainTabs(): Promise<MediaTab[]>
```

Query main tabs.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MediaTab[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryMediaEntity

```TypeScript
queryMediaEntity(params: QueryMediaEntityParam): Promise<PageMediaEntity>
```

Query media entity.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | QueryMediaEntityParam | Yes | query params |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryMediaEntityByKeyword

```TypeScript
queryMediaEntityByKeyword(keyword: string, searchType: EntityType, pageIndex: number): Promise<PageMediaEntity>
```

Query media entity by keyword.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyword | string | Yes | keyword |
| searchType | EntityType | Yes | search type |
| pageIndex | number | Yes | page index |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryMediaTabContent

```TypeScript
queryMediaTabContent(tabId: string): Promise<MediaTabContent>
```

Query media tab content.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tabId | string | Yes | tab id |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MediaTabContent&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryMemberPurchase

```TypeScript
queryMemberPurchase(memberPurchaseType: MemberPurchaseType): Promise<MemberPurchaseInfo[]>
```

Query member purchase.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| memberPurchaseType | MemberPurchaseType | Yes | memberPurchase type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MemberPurchaseInfo[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryPlaylist

```TypeScript
queryPlaylist(pageIndex: number, sort: Sort): Promise<PageMediaEntity>
```

Query playlist.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageIndex | number | Yes | page index |
| sort | Sort | Yes | sort type |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PageMediaEntity&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## queryRecommendMediaEntityList

```TypeScript
queryRecommendMediaEntityList(): Promise<MediaEntity[]>
```

Query recommend media entity list.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MediaEntity[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## querySearchHistory

```TypeScript
querySearchHistory(): Promise<string[]>
```

Query search history.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## reportProblemAndAdvice

```TypeScript
reportProblemAndAdvice(advice: string): Promise<OperResult>
```

Report problem and advice.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advice | string | Yes | advice |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;OperResult&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## requestDialogInfo

```TypeScript
requestDialogInfo(actionType: DialogActionType, actionInfo?: DialogActionInfo): Promise<DialogInfo>
```

Request dialog info.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actionType | DialogActionType | Yes | action type |
| actionInfo | DialogActionInfo | No | action info |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DialogInfo&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## updateSettings

```TypeScript
updateSettings(settingItem: SettingItem): Promise<SettingItem>
```

Report settings change.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| settingItem | SettingItem | Yes | setting item |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SettingItem&gt; | Promise for the result |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | capability not supported. |
| [35000003](../errorcode-avmusictemplate.md#35000003-template-listener-not-registered) | Template listener not registered. |
| [35000005](../errorcode-avmusictemplate.md#35000005-audio-template-does-not-exist) | AVMusicTemplate does not exist. |
| [35000006](../errorcode-avmusictemplate.md#35000006-template-controller-does-not-exist) | AVMusicTemplateController does not exist. |

## isDestroy

```TypeScript
isDestroy: boolean
```

Mark the controller is or not destroy.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

## sessionId

```TypeScript
sessionId: string
```

Unique id of the AVMusicTemplateController.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Multimedia.AVSession.AVMusicTemplate

