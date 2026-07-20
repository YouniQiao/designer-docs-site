# getAddedPrinters

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## getAddedPrinters

```TypeScript
function getAddedPrinters(): Promise<Array<string>>
```

Obtains the list of printers added to the system. This API uses a promise to return the result.

**Since:** 18

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

<!--Device-print-function getAddedPrinters(): Promise<Array<string>>--><!--Device-print-function getAddedPrinters(): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<string>> | Promise used to return a list of all added printers. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |

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

