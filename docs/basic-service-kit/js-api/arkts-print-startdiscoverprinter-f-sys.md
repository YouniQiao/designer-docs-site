# startDiscoverPrinter

## startDiscoverPrinter

```TypeScript
function startDiscoverPrinter(extensionList: Array<string>, callback: AsyncCallback<void>): void
```

通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力。使用callback异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extensionList | Array&lt;string> | Yes | 要加载的  [打印扩展能力](arkts-printextensionability-c.md#PrintExtensionAbility)列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。 |
| callback | AsyncCallback&lt;void> | Yes | 异步开始发现打印机之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

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

通过指定“打印扩展能力列表”来发现打印机，发现的打印机具备包含指定的打印扩展能力。如果指定空的打印扩展能力列表，则表示加载所有扩展能力，使用Promise异步回调。

**Since:** 10

**Required permissions:** 

- API version10  to  19: ohos.permission.MANAGE_PRINT_JOB

- API version20 and later: ohos.permission.MANAGE_PRINT_JOB or ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extensionList | Array&lt;string> | Yes | 要加载的  [打印扩展能力](arkts-printextensionability-c.md#PrintExtensionAbility)列表，列表成员为打印扩展能力的包名，空列表表示加载所有扩展能力。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application [since 10 - 19] |

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

