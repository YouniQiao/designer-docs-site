# KnowledgeContent (System API)

Knowledge Content class, used for geting related entity.

**Since:** 23

<!--Device-photoAccessHelper-class KnowledgeContent--><!--Device-photoAccessHelper-class KnowledgeContent-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

<a id="getrelatedentity"></a>
## getRelatedEntity

```TypeScript
static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>
```

Get Related Entities, Smart Label

**Since:** 23

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the stage model.

<!--Device-KnowledgeContent-static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>--><!--Device-KnowledgeContent-static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| topic | string | Yes | Searching topic string. |
| context | [ContextMap](arkts-medialibrary-photoaccesshelper-contextmap-i-sys.md) | Yes | Context Map indicates topic filed. |
| option | [Options](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-zlib-options-i.md) | No | Options for getRelatedEntity. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entity[]&gt; | Returns Array of Related Entities |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by nonsystem application |
| 13900020 | Parameter error. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.<br>Possible causes:<br>1. Database corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

<a id="getsearchsuggestion"></a>
## getSearchSuggestion

```TypeScript
static getSearchSuggestion( searchSuggestionTypes: Array<SearchSuggestionType>): Promise<Array<SearchSuggestionResult>>
```

Get Search Suggestion.

**Since:** 26.0.0

**Required permissions:** ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the stage model.

<!--Device-KnowledgeContent-static getSearchSuggestion( searchSuggestionTypes: Array<SearchSuggestionType>): Promise<Array<SearchSuggestionResult>>--><!--Device-KnowledgeContent-static getSearchSuggestion( searchSuggestionTypes: Array<SearchSuggestionType>): Promise<Array<SearchSuggestionResult>>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchSuggestionTypes | Array&lt;SearchSuggestionType&gt; | Yes | Array of search suggestion types<br>The maximum length is 7 and cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SearchSuggestionResult&gt;&gt; | Result of searching for recommended words |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called by nonsystem application |
| [23800151](../errorcode-medialibrary.md#23800151-failed-to-verify-scene-parameters) | Scenario parameters fail to pass the verification.Possible causes:<br>1. The searchSuggestionTypes list is empty.<br>2. The searchSuggestionTypes error. |
| [23800301](../errorcode-medialibrary.md#23800301-system-internal-error) | Internal system error. It is recommended to retry and check the logs.<br>Possible causes:<br>1. Database corrupted;<br>2. The file system is abnormal;<br>3. The IPC request timed out. |

