# set (System API)

## Modules to Import

```TypeScript
import { systemParameterEnhance } from '@kit.BasicServicesKit';
```

<a id="set"></a>
## set

```TypeScript
function set(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets a value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-systemParameterEnhance-function set(key: string, value: string, callback: AsyncCallback<void>): void--><!--Device-systemParameterEnhance-function set(key: string, value: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Target key. The value can contain a maximum of 128 bytes. Only letters, digits,periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed. |
| value | string | Yes | Value to set. The value can contain a maximum of 96 bytes (including the end character). |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.incorrect parameter types; 3.parameter verification failed. |
| [14700102](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700102-invalid-system-parameter-value) | Invalid system parameter value. |
| [14700103](../../apis-basic-services-kit/errorcode-device-info.md#14700103-operation-permission-denied) | The operation on the system permission is denied. |
| [14700104](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700104-internal-system-error-including-out-of-memory-and-deadlock) | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    systemParameterEnhance.set("test.parameter.key", "testValue", (err: BusinessError, data: void) => {
    if (err == undefined) {
        console.info("set test.parameter.key value success :" + data)
    } else {
        console.error("set test.parameter.key value err:" + err.code)
    }});
} catch(e) {
    console.error("set unexpected error: " + e);
}

```


<a id="set-1"></a>
## set

```TypeScript
function set(key: string, value: string): Promise<void>
```

Sets a value of the specified key. This API uses a promise to return the result.

**Since:** 9

<!--Device-systemParameterEnhance-function set(key: string, value: string): Promise<void>--><!--Device-systemParameterEnhance-function set(key: string, value: string): Promise<void>-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Target key. The value can contain a maximum of 128 bytes. Only letters, digits,periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed. |
| value | string | Yes | Value to set. The value can contain a maximum of 96 bytes (including the end character). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the execution result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.incorrect parameter types; 3.parameter verification failed. |
| [14700102](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700102-invalid-system-parameter-value) | Invalid system parameter value. |
| [14700103](../../apis-basic-services-kit/errorcode-device-info.md#14700103-operation-permission-denied) | The operation on the system permission is denied. |
| [14700104](../../apis-basic-services-kit/errorcode-system-parameterV9.md#14700104-internal-system-error-including-out-of-memory-and-deadlock) | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
    let p: Promise<void>  = systemParameterEnhance.set("test.parameter.key", "testValue");
    p.then((value: void) => {
        console.info("set test.parameter.key success: " + value);
    }).catch((err: BusinessError) => {
        console.error(" set test.parameter.key error: " + err.code);
    });
} catch(e) {
    console.error("set unexpected error: " + e);
}

```

