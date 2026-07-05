# updateExtensionInfo (System API)

## Modules to Import

```TypeScript
import { print } from '@ohos.print';
```

## updateExtensionInfo

```TypeScript
function updateExtensionInfo(info: string, callback: AsyncCallback<void>): void
```

Updates the printer extension information. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | string | Yes | New printer extension information. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. |

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

let info : string = 'WIFI_INACTIVE';
print.updateExtensionInfo(info, (err: BusinessError) => {
    if (err) {
        console.error('updateExtensionInfo failed, because : ' + JSON.stringify(err));
    } else {
        console.info('updateExtensionInfo success');
    }
})

```


## updateExtensionInfo

```TypeScript
function updateExtensionInfo(info: string): Promise<void>
```

Updates the printer extension information. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | string | Yes | New printer extension information. |

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

let info : string = 'WIFI_INACTIVE';
print.updateExtensionInfo(info).then(() => {
    console.info('update print job state success');
}).catch((error: BusinessError) => {
    console.error('update print job state error : ' + JSON.stringify(error));
})

```

