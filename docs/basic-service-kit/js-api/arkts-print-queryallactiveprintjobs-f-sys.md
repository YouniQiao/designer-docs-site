# queryAllActivePrintJobs

## queryAllActivePrintJobs

```TypeScript
function queryAllActivePrintJobs(): Promise<PrintJob[]>
```

查询所有活跃中的打印任务，使用Promise进行异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PrintJob[]> | Promise used to return a list of all active print jobs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |

