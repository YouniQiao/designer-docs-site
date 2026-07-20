# createRemoteDevice

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

## createRemoteDevice

```TypeScript
function createRemoteDevice(address: string): RemoteDevice
```

Creates a remote device instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-remoteDevice-function createRemoteDevice(address: string): RemoteDevice--><!--Device-remoteDevice-function createRemoteDevice(address: string): RemoteDevice-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | Indicates the device address.<br>The length must be 17, The value consists of hexadecimal digits and colons (:),for example, 11:22:33:AA:BB:FF. |

**Return value:**

| Type | Description |
| --- | --- |
| [RemoteDevice](arkts-connectivity-remotedevice-remotedevice-i.md) | Returns a near link remote device instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100041 | Invalid address. |

