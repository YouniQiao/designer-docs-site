# authPrintJob

## authPrintJob

```TypeScript
function authPrintJob(jobId: string, userName: string, password: string): Promise<boolean>
```

验证打印作业。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | 打印作业ID。  要打印的作业ID。 |
| userName | string | Yes | 用户名。  用户名。 |
| password | string | Yes | 用户密码。  用户密码。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100006 | Can not find the print job. |

