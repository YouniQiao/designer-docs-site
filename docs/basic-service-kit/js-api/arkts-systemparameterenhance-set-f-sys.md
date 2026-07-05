# set

## set

```TypeScript
function set(key: string, value: string, callback: AsyncCallback<void>): void
```

设置系统参数Key对应的值，使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| value | string | Yes | 待设置的系统参数值。最大长度96字节（包括结束符）。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700102 | Invalid system parameter value. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

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

## set

```TypeScript
function set(key: string, value: string): Promise<void>
```

设置系统参数Key对应的值，使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| value | string | Yes | 待设置的系统参数值。最大长度96字节（包括结束符）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise示例，用于异步获取结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700102 | Invalid system parameter value. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

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

