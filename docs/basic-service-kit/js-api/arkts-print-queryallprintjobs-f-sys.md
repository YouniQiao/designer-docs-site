# queryAllPrintJobs

## queryAllPrintJobs

```TypeScript
function queryAllPrintJobs(callback: AsyncCallback<void>): void
```

查询所有打印任务，使用callback异步回调。

**Since:** 10

**Deprecated since:** 11

**Substitute:** null

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 异步查询所有打印任务之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |

## queryAllPrintJobs

```TypeScript
function queryAllPrintJobs(): Promise<void>
```

查询所有打印任务，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 11

**Substitute:** null

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |

