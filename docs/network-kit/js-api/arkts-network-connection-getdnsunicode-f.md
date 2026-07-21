# getDnsUnicode

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="getdnsunicode"></a>
## getDnsUnicode

```TypeScript
function getDnsUnicode(host: string, flag?: ConversionProcess): string
```

Convert a string from ASCII Compatible Encoding (ACE) to Unicode, as defined by the ToUnicode operation of RFC 3490.

**Since:** 23

<!--Device-connection-function getDnsUnicode(host: string, flag?: ConversionProcess): string--><!--Device-connection-function getDnsUnicode(host: string, flag?: ConversionProcess): string-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| host | string | Yes | Indicates the domain name of the ASCII type. |
| flag | [ConversionProcess](arkts-network-connection-conversionprocess-e.md) | No | Indicates process flag, can be 0 or any logical OR of possible flags.can be ALLOW_UNASSIGNED \| USE_STD3_ASCII_RULES to set all flag. |

**Return value:**

| Type | Description |
| --- | --- |
| string | - Return the converted string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';

let result = connection.getDnsUnicode("www.xn--fsq092h.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // Expected result: www.example.com
let result = connection.getDnsUnicode("www.example.com", connection.ConversionProcess.NO_CONFIGURATION);
console.info(result);  // Expected result: www.example.com

```

