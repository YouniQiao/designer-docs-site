# getAddedPrinters

## getAddedPrinters

```TypeScript
function getAddedPrinters(): Promise<Array<string>>
```

获取系统中已添加的打印机列表，使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象，返回包含所有已添加打印机的打印机ID的列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

print.getAddedPrinters().then((printers: string[]) => {
    console.info('getAddedPrinters success ' + JSON.stringify(printers));
    // ...
}).catch((error: BusinessError) => {
    console.error('failed to getAddedPrinters because ' + JSON.stringify(error));
})

```

