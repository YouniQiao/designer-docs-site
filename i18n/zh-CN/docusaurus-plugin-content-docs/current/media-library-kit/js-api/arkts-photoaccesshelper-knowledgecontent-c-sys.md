# KnowledgeContent

Knowledge Content class, used for geting related entity.

**起始版本：** 23

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## getRelatedEntity

```TypeScript
static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>
```

Get Related Entities, Smart Label

**起始版本：** 23

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| topic | string | 是 | Searching topic string. |
| context | ContextMap | 是 | Context Map indicates topic filed. |
| option | Options | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Entity[]> | Returns Array of Related Entities |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.READ_IMAGEVIDEO

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| searchSuggestionTypes | Array&lt;SearchSuggestionType> | 是 | Array of search suggestion types  The maximum length is 7 and cannot be empty. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SearchSuggestionResult>> | Result of searching for recommended words |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 202 | Called by nonsystem application |
| 23800151 | Scenario parameters fail to pass the verification.Possible causes:  1. The searchSuggestionTypes list is empty.  2. The searchSuggestionTypes error. |
| 23800301 | Internal system error. It is recommended to retry and check the logs.  Possible causes:  1. Database corrupted;  2. The file system is abnormal;  3. The IPC request timed out. |

