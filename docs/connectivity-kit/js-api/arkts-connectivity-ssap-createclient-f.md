# createClient

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

## createClient

```TypeScript
function createClient(address: string): Client
```

Creates a SSAP client instance.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-ssap-function createClient(address: string): Client--><!--Device-ssap-function createClient(address: string): Client-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | Indicates the device address of a server<br>The length must be 17, The value consists of hexadecimal digits and colons (:),for example, 11:22:33:AA:BB:FF. |

**Return value:**

| Type | Description |
| --- | --- |
| [Client](arkts-connectivity-ssap-client-i.md) | Returns a SSAP client instance {@code Client}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100099 | Operation failed. |

