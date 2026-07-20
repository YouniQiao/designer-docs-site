# queryPrintJobById (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## queryPrintJobById

```TypeScript
function queryPrintJobById(jobId: string, callback: AsyncCallback<PrintJob>): void
```

Queries a print job by ID. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function queryPrintJobById(jobId: string, callback: AsyncCallback<PrintJob>): void--><!--Device-print-function queryPrintJobById(jobId: string, callback: AsyncCallback<PrintJob>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | ID of the print job. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<PrintJob> | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = '1';
print.queryPrintJobById(jobId, (err: BusinessError, printJob : print.PrintJob) => {
    if (err) {
        console.error('queryPrintJobById failed, because : ' + JSON.stringify(err));
    } else {
        console.info('queryPrintJobById success, data : ' + JSON.stringify(printJob));
    }
})

```


## queryPrintJobById

```TypeScript
function queryPrintJobById(jobId: string): Promise<PrintJob>
```

Queries a print job by ID. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function queryPrintJobById(jobId: string): Promise<PrintJob>--><!--Device-print-function queryPrintJobById(jobId: string): Promise<PrintJob>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | ID of the print job. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PrintJob> | Promise used to return the queried print job. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = '1';
print.queryPrintJobById(jobId).then((printJob : print.PrintJob) => {
    console.info('queryPrintJobById data : ' + JSON.stringify(printJob));
}).catch((error: BusinessError) => {
    console.error('queryPrintJobById error : ' + JSON.stringify(error));
})

```

