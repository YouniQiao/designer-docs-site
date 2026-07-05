# query

## query

```TypeScript
function query(id: string, callback: AsyncCallback<TaskInfo>): void
```

Queries specified task details. Creates a group based on GroupConfig

**起始版本：** 10

**需要权限：** 

 ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER

**系统能力：** SystemCapability.Request.FileTransferAgent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | the task id. |
| callback | AsyncCallback&lt;TaskInfo> | 是 | callback function with a `TaskInfo` argument for informations of the  current task. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

## query

```TypeScript
function query(id: string): Promise<TaskInfo>
```

Queries specified task details.

**起始版本：** 10

**需要权限：** 

 ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER

**系统能力：** SystemCapability.Request.FileTransferAgent

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | the task id. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;TaskInfo> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

