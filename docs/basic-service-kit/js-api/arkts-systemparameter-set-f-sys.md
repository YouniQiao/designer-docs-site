# set

## set

```TypeScript
function set(key: string, value: string, callback: AsyncCallback<void>): void
```

设置系统参数Key对应的值，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.systemParameterEnhance.set

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。 |
| value | string | Yes | 待设置的系统参数值。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

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

设置系统参数Key对应的值，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.systemParameterEnhance.set

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。 |
| value | string | Yes | 待设置的系统参数值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise示例，用于异步获取结果。 |

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

