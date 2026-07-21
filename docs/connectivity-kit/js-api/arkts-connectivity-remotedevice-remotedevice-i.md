# RemoteDevice

Remote device operation methods.

**Since:** 26.0.0

<!--Device-remoteDevice-interface RemoteDevice--><!--Device-remoteDevice-interface RemoteDevice-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

<a id="getacbstate"></a>
## getAcbState

```TypeScript
getAcbState(): AcbState
```

Gets the ACB connection state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getAcbState(): AcbState--><!--Device-RemoteDevice-getAcbState(): AcbState-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [AcbState](arkts-connectivity-nearlinkconstant-acbstate-e.md) | Returns the ACB connection state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getconnectionstate"></a>
## getConnectionState

```TypeScript
getConnectionState(): ConnectionState
```

Gets the profile connection state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getConnectionState(): ConnectionState--><!--Device-RemoteDevice-getConnectionState(): ConnectionState-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [ConnectionState](arkts-connectivity-remotedevice-connectionstate-t.md) | Returns the connection state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getdeviceclass"></a>
## getDeviceClass

```TypeScript
getDeviceClass(): DeviceClass
```

Gets the type of the NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getDeviceClass(): DeviceClass--><!--Device-RemoteDevice-getDeviceClass(): DeviceClass-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [DeviceClass](arkts-connectivity-connection-deviceclass-i.md) | Indicates the type of the NearLink device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getdeviceinformation"></a>
## getDeviceInformation

```TypeScript
getDeviceInformation(): DeviceInformation
```

Obtains the remote device information.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getDeviceInformation(): DeviceInformation--><!--Device-RemoteDevice-getDeviceInformation(): DeviceInformation-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [DeviceInformation](arkts-connectivity-remotedevice-deviceinformation-i.md) | Returns the remote device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getdevicename"></a>
## getDeviceName

```TypeScript
getDeviceName(): string
```

Gets the name of the NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getDeviceName(): string--><!--Device-RemoteDevice-getDeviceName(): string-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the device name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getpairingstate"></a>
## getPairingState

```TypeScript
getPairingState(): PairingState
```

Gets the pairing state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getPairingState(): PairingState--><!--Device-RemoteDevice-getPairingState(): PairingState-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| [PairingState](arkts-connectivity-remotedevice-pairingstate-t.md) | Returns the pairing state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="startpairing"></a>
## startPairing

```TypeScript
startPairing(): Promise<void>
```

Initiate pairing to remote NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-startPairing(): Promise<void>--><!--Device-RemoteDevice-startPairing(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

