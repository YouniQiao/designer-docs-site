# disconnectPrinter (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

<a id="disconnectprinter"></a>
## disconnectPrinter

```TypeScript
function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void
```

Disconnects from the specified printer. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void--><!--Device-print-function disconnectPrinter(printerId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | Printer ID. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

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

let printerId: string = 'printerId_32';
print.disconnectPrinter(printerId, (err: BusinessError) => {
    if (err) {
        console.error('failed to disconnect Printer because : ' + JSON.stringify(err));
    } else {
        console.info('start disconnect Printer success');
    }
})

```


<a id="disconnectprinter-1"></a>
## disconnectPrinter

```TypeScript
function disconnectPrinter(printerId: string): Promise<void>
```

Disconnects from the specified printer. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

<!--Device-print-function disconnectPrinter(printerId: string): Promise<void>--><!--Device-print-function disconnectPrinter(printerId: string): Promise<void>-End-->

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | Printer ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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

let printerId: string = 'printerId_32';
print.disconnectPrinter(printerId).then(() => {
    console.info('start disconnect Printer success');
}).catch((error: BusinessError) => {
    console.error('failed to disconnect Printer because : ' + JSON.stringify(error));
})

```

