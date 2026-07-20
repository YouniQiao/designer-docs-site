# queryPrintJobList (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## queryPrintJobList

```TypeScript
function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void
```

Queries all print jobs. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void--><!--Device-print-function queryPrintJobList(callback: AsyncCallback<Array<PrintJob>>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<Array<PrintJob>> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

print.queryPrintJobList((err: BusinessError, printJobs : print.PrintJob[]) => {
    if (err) {
        console.error('queryPrintJobList failed, because : ' + JSON.stringify(err));
    } else {
        console.info('queryPrintJobList success, data : ' + JSON.stringify(printJobs));
    }
})

```


## queryPrintJobList

```TypeScript
function queryPrintJobList(): Promise<Array<PrintJob>>
```

Queries all print jobs. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function queryPrintJobList(): Promise<Array<PrintJob>>--><!--Device-print-function queryPrintJobList(): Promise<Array<PrintJob>>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<PrintJob>> | Promise used to return a list of all print jobs. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

print.queryPrintJobList().then((printJobs : print.PrintJob[]) => {
    console.info('queryPrintJobList success, data : ' + JSON.stringify(printJobs));
}).catch((error: BusinessError) => {
    console.error('queryPrintJobList failed, error : ' + JSON.stringify(error));
})

```

