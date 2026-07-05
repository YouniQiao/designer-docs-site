# setSync

## setSync

```TypeScript
function setSync(key: string, value: string): void
```

设置系统参数Key对应的值。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| value | string | Yes | 待设置的系统参数值。最大长度96字节（包括结束符）。 |

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
    systemParameterEnhance.setSync("test.parameter.key", "default");
} catch(e) {
    console.error("set unexpected error: " + e);
}

```

