# KnowledgeContent

Knowledge Content class, used for geting related entity.

**Since:** 23

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getRelatedEntity

```TypeScript
static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>
```

Get Related Entities, Smart Label

**Since:** 23

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| topic | string | Yes | Searching topic string. |
| context | ContextMap | Yes | Context Map indicates topic filed. |
| option | Options | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Entity[]> | Returns Array of Related Entities |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by nonsystem application |
| 13900020 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.  @static |

## getSearchSuggestion

```TypeScript
static getSearchSuggestion( searchSuggestionTypes: Array<SearchSuggestionType>): Promise<Array<SearchSuggestionResult>>
```

Get Search Suggestion.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.READ_IMAGEVIDEO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| searchSuggestionTypes | Array&lt;SearchSuggestionType> | Yes | Array of search suggestion types  The maximum length is 7 and cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SearchSuggestionResult>> | Result of searching for recommended words |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by nonsystem application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The searchSuggestionTypes list is empty.  2. The searchSuggestionTypes error. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

