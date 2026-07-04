# RemoteDevice

Remote device operation methods.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## getAcbState

```TypeScript
getAcbState(): AcbState
```

Gets the ACB connection state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| AcbState | Returns the ACB connection state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getConnectionState

```TypeScript
getConnectionState(): ConnectionState
```

Gets the profile connection state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| ConnectionState | Returns the connection state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getDeviceClass

```TypeScript
getDeviceClass(): DeviceClass
```

Gets the type of the NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| DeviceClass | Indicates the type of the NearLink device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getDeviceInformation

```TypeScript
getDeviceInformation(): DeviceInformation
```

Obtains the remote device information.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| DeviceInformation | Returns the remote device information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getDeviceName

```TypeScript
getDeviceName(): string
```

Gets the name of the NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

## getPairingState

```TypeScript
getPairingState(): PairingState
```

Gets the pairing state.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| PairingState | Returns the pairing state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## startPairing

```TypeScript
startPairing(): Promise<void>
```

Initiate pairing to remote NearLink device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

