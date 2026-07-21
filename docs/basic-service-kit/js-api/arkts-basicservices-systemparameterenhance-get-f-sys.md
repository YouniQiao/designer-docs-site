# get (System API)

## Modules to Import

```TypeScript
import { systemParameterEnhance } from '@kit.BasicServicesKit';
```

<a id="get"></a>
## get

```TypeScript
function get(key: string, callback: AsyncCallback<string>): void
```

Obtains a value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-systemParameterEnhance-function get(key: string, callback: AsyncCallback<string>): void--><!--Device-systemParameterEnhance-function get(key: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.incorrect parameter types; 3.parameter verification failed. |
| [14700101](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700101-failure-to-query-the-system-parameter) | System parameter not found. |
| [14700103](../../apis-basic-services-kit/errorcode-device-info.md#14700103-operation-permission-denied) | The operation on the system permission is denied. |
| [14700104](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700104-internal-system-error-including-out-of-memory-and-deadlock) | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    systemParameterEnhance.get("const.ohos.apiversion", (err: BusinessError, data: string) => {
    if (err == undefined) {
        console.info("get test.parameter.key value success:" + data)
    } else {
        console.error(" get test.parameter.key value err:" + err.code)
    }});
} catch(e) {
    console.error("get unexpected error: " + e);
}

```


<a id="get-1"></a>
## get

```TypeScript
function get(key: string, def: string, callback: AsyncCallback<string>): void
```

Obtains a value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-systemParameterEnhance-function get(key: string, def: string, callback: AsyncCallback<string>): void--><!--Device-systemParameterEnhance-function get(key: string, def: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed. |
| def | string | Yes | Default value. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.incorrect parameter types; 3.parameter verification failed. |
| [14700101](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700101-failure-to-query-the-system-parameter) | System parameter not found. |
| [14700103](../../apis-basic-services-kit/errorcode-device-info.md#14700103-operation-permission-denied) | The operation on the system permission is denied. |
| [14700104](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700104-internal-system-error-including-out-of-memory-and-deadlock) | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    systemParameterEnhance.get("const.ohos.apiversion", "default", (err: BusinessError, data: string) => {
        if (err == undefined) {
            console.info("get test.parameter.key value success:" + data)
        } else {
            console.error(" get test.parameter.key value err:" + err.code)
        }
    });
} catch(e) {
    console.error("get unexpected error:" + e)
}

```


<a id="get-2"></a>
## get

```TypeScript
function get(key: string, def?: string): Promise<string>
```

Obtains a value of the specified key. This API uses a promise to return the result.

**Since:** 9

<!--Device-systemParameterEnhance-function get(key: string, def?: string): Promise<string>--><!--Device-systemParameterEnhance-function get(key: string, def?: string): Promise<string>-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed. |
| def | string | No | Default value of the system parameter.<br> It works only when the system parameter does not exist.<br> The value can be **undefined** or any custom value. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.incorrect parameter types; 3.parameter verification failed. |
| [14700101](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700101-failure-to-query-the-system-parameter) | System parameter not found. |
| [14700103](../../apis-basic-services-kit/errorcode-device-info.md#14700103-operation-permission-denied) | The operation on the system permission is denied. |
| [14700104](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700104-internal-system-error-including-out-of-memory-and-deadlock) | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let p: Promise<string> = systemParameterEnhance.get("const.ohos.apiversion");
    p.then((value: string) => {
        console.info("get test.parameter.key success: " + value);
    }).catch((err: BusinessError) => {
        console.error("get test.parameter.key error: " + err.code);
    });
} catch(e) {
    console.error("get unexpected error: " + e);
}

```

