# createCdsmClient

## Modules to Import

```TypeScript
import { cdsm } from '@kit.ConnectivityKit';
```

<a id="createcdsmclient"></a>
## createCdsmClient

```TypeScript
function createCdsmClient(address: string): CdsmClient
```

Creates a CDSM client instance.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-cdsm-function createCdsmClient(address: string): CdsmClient--><!--Device-cdsm-function createCdsmClient(address: string): CdsmClient-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | Indicates the address of CDSM server.<br>The length must be 17. Value constraint: The value consists of hexadecimal digits and colons (:),for example, 11:22:33:AA:BB:FF. |

**Return value:**

| Type | Description |
| --- | --- |
| [CdsmClient](arkts-connectivity-cdsm-cdsmclient-i.md) | Returns a CDSM client instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100050 | Coordinated Devices Set Management not supported. |
| 36100099 | Operation failed. |

