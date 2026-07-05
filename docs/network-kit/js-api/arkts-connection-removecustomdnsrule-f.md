# removeCustomDnsRule

## removeCustomDnsRule

```TypeScript
function removeCustomDnsRule(host: string, callback: AsyncCallback<void>): void
```

Remove the custom DNS rule of the {@link host} for current application.

**Since:** 15

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |
| callback | AsyncCallback&lt;void> | Yes | Returns the callback of removeCustomDnsRule. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.removeCustomDnsRule("xxxx", (error: BusinessError, data: void) => {
  if (error) {
    console.error(`Failed to remove custom dns rule. Code:${error.code}, message:${error.message}`);
    return;
  }
  console.info("Succeeded to get data: " + JSON.stringify(data));
})

```

## removeCustomDnsRule

```TypeScript
function removeCustomDnsRule(host: string): Promise<void>
```

Remove the custom DNS rule of the {@link host} for current application.

**Since:** 15

**Required permissions:** 

 ohos.permission.INTERNET

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the host name or the domain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

connection.removeCustomDnsRule("xxxx").then(() => {
    console.info("success");
}).catch((error: BusinessError) => {
    console.error(JSON.stringify(error));
})

```

