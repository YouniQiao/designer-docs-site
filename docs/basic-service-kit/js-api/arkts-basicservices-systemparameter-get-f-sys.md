# get (System API)

## Modules to Import

```TypeScript
import { systemParameter } from '@kit.BasicServicesKit';
```

## get

```TypeScript
function get(key: string, callback: AsyncCallback<string>): void
```

Obtains a value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** get

<!--Device-systemParameter-function get(key: string, callback: AsyncCallback<string>): void--><!--Device-systemParameter-function get(key: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
    systemParameter.get("const.ohos.apiversion", (err: BusinessError, data: string) => {
    if (err == undefined) {
        console.info("get test.parameter.key value success:" + data)
    } else {
        console.error(" get test.parameter.key value err:" + err.code)
    }});
} catch(e) {
    console.error("get unexpected error: " + e);
}

```


## get

```TypeScript
function get(key: string, def: string, callback: AsyncCallback<string>): void
```

Obtains a value of the specified key. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** get

<!--Device-systemParameter-function get(key: string, def: string, callback: AsyncCallback<string>): void--><!--Device-systemParameter-function get(key: string, def: string, callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. |
| def | string | Yes | Default value. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<string> | Yes | Callback used to return the result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
    systemParameter.get("const.ohos.apiversion", "default", (err: BusinessError, data: string) => {
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


## get

```TypeScript
function get(key: string, def?: string): Promise<string>
```

Obtains a value of the specified key. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** get

<!--Device-systemParameter-function get(key: string, def?: string): Promise<string>--><!--Device-systemParameter-function get(key: string, def?: string): Promise<string>-End-->

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Key to be queried. |
| def | string | No | Default value of the system parameter.<br> It works only when the system parameter does not exist.<br> The value can be **undefined** or any custom value. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | Promise used to return the execution result. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';

try {
    let p: Promise<string> = systemParameter.get("const.ohos.apiversion");
    p.then((value: string) => {
        console.info("get test.parameter.key success: " + value);
    }).catch((err: BusinessError) => {
        console.error("get test.parameter.key error: " + err.code);
    });
} catch(e) {
    console.error("get unexpected error: " + e);
}

```

