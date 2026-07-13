# startDiscoverPrinter (System API)

## Modules to Import

```TypeScript
import { print } from '@kit.BasicServicesKit';
```

## startDiscoverPrinter

```TypeScript
function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void
```

Discovers printers by specifying the extension list. The discovered printers contain the specified print extension
abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses an
asynchronous callback to return the result.

**Since:** 20

**Required permissions:** 
- API version 20+: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
- API version 10 - 19: ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extensionList | Array&lt;string&gt; | Yes | List of[PrintExtensionAbilities](arkts-basicservices-printextensionability-c.md) to be loaded.The list members are the bundle names of the applications with print extension abilities. An empty listindicates that all extension abilities are loaded. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback to be invoked when a printer is discovered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application<br>**Applicable version:** 10 - 19 |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Load all print extension abilities.
let extensionList: string[] = [];
// Specify the bundle name of your applications to load required print extension abilities during printer discovery.
// let extensionList: string[] = ['com.myapplication.test'];
print.startDiscoverPrinter(extensionList, (err: BusinessError) => {
    if (err) {
        console.error('failed to start Discover Printer because : ' + JSON.stringify(err));
    } else {
        console.info('start Discover Printer success');
    }
})

```


## startDiscoverPrinter

```TypeScript
function startDiscoverPrinter(extensionList: Array<string>): Promise<void>
```

Discovers printers by specifying the extension list. The discovered printers contain the specified print extension
abilities. If an empty extension list is specified, all extension abilities are loaded. This API uses a promise to
return the result.

**Since:** 20

**Required permissions:** 
- API version 20+: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT
- API version 10 - 19: ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extensionList | Array&lt;string&gt; | Yes | List of[PrintExtensionAbilities](arkts-basicservices-printextensionability-c.md) to be loaded.The list members are the bundle names of the applications with print extension abilities. An empty listindicates that all extension abilities are loaded. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | the application does not have permission to call this function. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | not system application<br>**Applicable version:** 10 - 19 |

**Example**

```TypeScript
import { print } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Load all print extension abilities.
let extensionList: string[] = [];
// Specify the bundle name of your applications to load required print extension abilities during printer discovery.
// let extensionList: string[] = ['com.myapplication.test'];
print.startDiscoverPrinter(extensionList).then(() => {
    console.info('start Discovery success');
}).catch((error: BusinessError) => {
    console.error('failed to start Discovery because : ' + JSON.stringify(error));
})

```

