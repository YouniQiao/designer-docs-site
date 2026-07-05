# addPrinterToCups

## addPrinterToCups

```TypeScript
function addPrinterToCups(printerUri: string, printerName: string, printerMake: string): Promise<boolean>
```

添加打印机到cups，使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerUri | string | Yes | 表示打印机uri。 |
| printerName | string | Yes | 表示打印机名称。 |
| printerMake | string | Yes | 表示打印机型号。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回true表示添加打印机到cups成功；返回false表示添加打印机到cups失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100003 | Add a printer to cups failed. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerUri : string = "testPrinterUri";
let printerName : string = "testPrinterName";
let printerMake : string = "testPrinterMake";

print.addPrinterToCups(printerUri, printerName, printerMake).then((result: boolean) => {
    console.info('addPrinterToCups success' + JSON.stringify(result));
}).catch((error: BusinessError) => {
    console.error('addPrinterToCups error : ' + JSON.stringify(error));
})

```

