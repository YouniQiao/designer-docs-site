# addPrinter

## addPrinter

```TypeScript
function addPrinter(printerName: string, uri: string, ppdName?: string, options?: string): Promise<boolean>
```

添加打印机到系统中，使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINTER_DRIVER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerName | string | Yes | 表示打印机名称。 |
| uri | string | Yes | 表示打印机的URI。 |
| ppdName | string | No |  |
| options | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象，返回添加打印机成功与否的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 13100003 | Add the printer to system failed. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

let printerName : string = 'printerName';
let uri : string = 'uri';
let ppdName : string = 'ppdName';
print.addPrinter(printerName, uri, ppdName).then(() => {
    console.info('add printer success');
}).catch((error: BusinessError) => {
    console.error('add printer error : ' + JSON.stringify(error));
})

```

