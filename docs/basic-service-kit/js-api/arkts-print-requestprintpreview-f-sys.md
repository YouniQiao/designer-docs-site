# requestPrintPreview

## requestPrintPreview

```TypeScript
function requestPrintPreview(jobInfo: PrintJob, callback: Callback<int>): void
```

请求预览打印数据，使用callback回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobInfo | PrintJob | Yes | 打印任务信息。 |
| callback | Callback&lt;int> | Yes | 请求预览打印数据之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';

let jobInfo : print.PrintJob = {
    fdList : [44,45],
    jobId : 'jobId_12',
    printerId : 'printerId_32',
    jobState : PRINT_JOB_COMPLETED,
    jobSubstate : print.PrintJobSubState.PRINT_JOB_COMPLETED_SUCCESS,
    copyNumber : 1,
    pageRange : {},
    isSequential : false,
    pageSize : {id : '', name : '', width : 10, height : 20},
    isLandscape : false,
    colorMode : COLOR_MODE_COLOR,
    duplexMode : DUPLEX_MODE_NONE,
    margin : undefined,
    preview : undefined,
    options : undefined
};
print.requestPrintPreview(jobInfo, (num : number) => {
    console.info('requestPrintPreview success, num : ' + JSON.stringify(num));

})

```

## requestPrintPreview

```TypeScript
function requestPrintPreview(jobInfo: PrintJob): Promise<int>
```

请求预览打印数据，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| jobInfo | PrintJob | Yes | 打印任务信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回预览结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let jobInfo : print.PrintJob = {
    fdList : [44,45],
    jobId : 'jobId_12',
    printerId : 'printerId_32',
    jobState : PRINT_JOB_COMPLETED,
    jobSubstate : print.PrintJobSubState.PRINT_JOB_COMPLETED_SUCCESS,
    copyNumber : 1,
    pageRange : {},
    isSequential : false,
    pageSize : {id : '', name : '', width : 10, height : 20},
    isLandscape : false,
    colorMode : COLOR_MODE_COLOR,
    duplexMode : DUPLEX_MODE_NONE,
    margin : undefined,
    preview : undefined,
    options : undefined
};
print.requestPrintPreview(jobInfo).then((num: number) => {
    console.info('requestPrintPreview success, num : ' + JSON.stringify(num));
}).catch((error: BusinessError) => {
    console.error('requestPrintPreview failed, because : ' + JSON.stringify(error));
})

```

