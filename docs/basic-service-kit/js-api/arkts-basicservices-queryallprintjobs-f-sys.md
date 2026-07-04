# queryAllPrintJobs (System API)

## Modules to Import

```TypeScript
import { print } from '@ohos.print';
```

## queryAllPrintJobs

```TypeScript
function queryAllPrintJobs(callback: AsyncCallback<void>): void
```

Queries all print jobs. This API uses an asynchronous callback to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [null]

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |


## queryAllPrintJobs

```TypeScript
function queryAllPrintJobs(): Promise<void>
```

Queries all print jobs. This API uses a promise to return the result.

**Since:** 10

**Deprecated since:** 11

**Substitutes:** [null]

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |

