# set (System API)

## Modules to Import

```TypeScript
import { systemParameter } from '@kit.BasicServicesKit';
```

## set

```TypeScript
function set(key: string, value: string, callback: AsyncCallback<void>): void
```

Sets a value for the specified key. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** set

<!--Device-systemParameter-function set(key: string, value: string, callback: AsyncCallback<void>): void--><!--Device-systemParameter-function set(key: string, value: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Target key. |
| value | string | Yes | Value to set. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
    systemParameter.set("test.parameter.key", "testValue",  (err: BusinessError, data: void) =>{
    if (err == undefined) {
        console.info("set test.parameter.key value success :" + data)
    } else {
        console.error("set test.parameter.key value err:" + err.code)
    }});
} catch(e) {
    console.error("set unexpected error: " + e);
}

```


## set

```TypeScript
function set(key: string, value: string): Promise<void>
```

Sets a value for the specified key. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** set

<!--Device-systemParameter-function set(key: string, value: string): Promise<void>--><!--Device-systemParameter-function set(key: string, value: string): Promise<void>-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Target key. |
| value | string | Yes | Value to set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise used to return the execution result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
    let p: Promise<void> = systemParameter.set("test.parameter.key", "testValue");
    p.then((value: void) => {
        console.info("set test.parameter.key success: " + value);
    }).catch((err: BusinessError) => {
        console.error(" set test.parameter.key error: " + err.code);
    });
} catch(e) {
    console.error("set unexpected error: " + e);
}

```

