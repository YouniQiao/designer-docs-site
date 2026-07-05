# getDnsUnicode

## getDnsUnicode

```TypeScript
function getDnsUnicode(host: string, flag?: ConversionProcess): string
```

Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490.

**Since:** 23

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the domain name of the ASCII type. |
| flag | ConversionProcess | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | - Return the converted string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let result = connection.getDnsUnicode("www.xn--fsq092h.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // Expected result: www.example.com
let result = connection.getDnsUnicode("www.example.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // Expected result: www.example.com

```

