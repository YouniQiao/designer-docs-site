# updatePrintJobState (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## updatePrintJobState

```TypeScript
function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState,
    callback: AsyncCallback<void>): void
```

Updates the print job state. This API uses an asynchronous callback to return the result.

**Since:** 24

**Required permissions:** 
- API version 24+: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT
- API version 10 - 23: ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState,
    callback: AsyncCallback<void>): void--><!--Device-print-function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState,
    callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | ID of the print job. |
| state | [PrintJobState](arkts-basicservices-print-printjobstate-e.md) | Yes | Print job state. |
| subState | [PrintJobSubState](arkts-basicservices-print-printjobsubstate-e.md) | Yes | Substate of the print job. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback to be invoked when the print job state is updated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | The application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application<br>**Applicable version:** 10 - 23 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = 'jobId';
let state : print.PrintJobState = print.PrintJobState.PRINT_JOB_PREPARE;
let subState : print.PrintJobSubState = print.PrintJobSubState.PRINT_JOB_COMPLETED_SUCCESS;
print.updatePrintJobState(jobId, state, subState, (err: BusinessError) => {
    if (err) {
        console.error('updatePrintJobState failed, because : ' + JSON.stringify(err));
    } else {
        console.info('updatePrintJobState success');
    }
})

```


## updatePrintJobState

```TypeScript
function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<void>
```

Updates the print job state. This API uses a promise to return the result.

**Since:** 24

**Required permissions:** 
- API version 24+: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.ENTERPRISE_MANAGE_PRINT
- API version 10 - 23: ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<void>--><!--Device-print-function updatePrintJobState(jobId: string, state: PrintJobState, subState: PrintJobSubState): Promise<void>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobId | string | Yes | ID of the print job. |
| state | [PrintJobState](arkts-basicservices-print-printjobstate-e.md) | Yes | Print job state. |
| subState | [PrintJobSubState](arkts-basicservices-print-printjobsubstate-e.md) | Yes | Substate of the print job. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application<br>**Applicable version:** 10 - 23 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobId : string = 'jobId';
let state : print.PrintJobState = print.PrintJobState.PRINT_JOB_PREPARE;
let subState : print.PrintJobSubState = print.PrintJobSubState.PRINT_JOB_COMPLETED_SUCCESS;
print.updatePrintJobState(jobId, state, subState).then(() => {
    console.info('update print job state success');
}).catch((error: BusinessError) => {
    console.error('update print job state error : ' + JSON.stringify(error));
})

```

