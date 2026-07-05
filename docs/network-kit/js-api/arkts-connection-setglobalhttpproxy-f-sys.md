# setGlobalHttpProxy

## setGlobalHttpProxy

```TypeScript
function setGlobalHttpProxy(httpProxy: HttpProxy, callback: AsyncCallback<void>): void
```

Set a network independent global {@link HttpProxy} proxy settings.

**Since:** 10

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| httpProxy | HttpProxy | Yes | Indicates the global proxy settings. For details, see {@link HttpProxy}. |
| callback | AsyncCallback&lt;void> | Yes | the callback of setGlobalHttpProxy. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 202 | Non-system applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let exclusionStr = "192.168,baidu.com";
let exclusionArray = exclusionStr.split(',');
let httpProxy: connection.HttpProxy = {
    host: "192.168.xx.xxx",
    port: 8080,
    exclusionList: exclusionArray
}
connection.setGlobalHttpProxy(httpProxy, (err: BusinessError) => {
    if (err) {
        console.error(`setGlobalHttpProxy failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`setGlobalHttpProxy success.`);
});

```

## setGlobalHttpProxy

```TypeScript
function setGlobalHttpProxy(httpProxy: HttpProxy): Promise<void>
```

Set a network independent global {@link HttpProxy} proxy settings.

**Since:** 10

**Required permissions:** 

 ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| httpProxy | HttpProxy | Yes | Indicates the global proxy settings. For details, see {@link HttpProxy}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 202 | Non-system applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let exclusionStr = "192.168,baidu.com";
let exclusionArray = exclusionStr.split(',');
connection.setGlobalHttpProxy({
  host: "192.168.xx.xxx",
  port: 8080,
  exclusionList: exclusionArray
} as connection.HttpProxy).then(() => {
  console.info("success");
}).catch((error: BusinessError) => {
  console.error(JSON.stringify(error));
});

```

