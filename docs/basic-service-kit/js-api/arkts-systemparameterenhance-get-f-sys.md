# get

## get

```TypeScript
function get(key: string, callback: AsyncCallback<string>): void
```

获取系统参数Key对应的值，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待查询的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700101 | System parameter not found. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

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

## get

```TypeScript
function get(key: string, def: string, callback: AsyncCallback<string>): void
```

获取系统参数Key对应的值，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待查询的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| def | string | Yes | 默认值。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700101 | System parameter not found. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

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

## get

```TypeScript
function get(key: string, def?: string): Promise<string>
```

获取系统参数Key对应的值，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待查询的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| def | string | No | def为所要获取的系统参数的默认值； def为可选参数，仅当系统参数不存在时生效； def可以传undefined或自定义的任意值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise示例，用于异步获取结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700101 | System parameter not found. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

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

