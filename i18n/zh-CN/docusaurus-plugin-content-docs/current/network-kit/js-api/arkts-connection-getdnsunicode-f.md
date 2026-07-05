# getDnsUnicode

## getDnsUnicode

```TypeScript
function getDnsUnicode(host: string, flag?: ConversionProcess): string
```

Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| host | string | 是 | Indicates the domain name of the ASCII type. |
| flag | ConversionProcess | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | - Return the converted string. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**示例：**

```TypeScript
import { connection } from '@kit.NetworkKit';

let result = connection.getDnsUnicode("www.xn--fsq092h.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // 预期结果：www.示例.com
let result = connection.getDnsUnicode("www.example.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // 预期结果：www.example.com

```

