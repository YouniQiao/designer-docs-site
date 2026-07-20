# RemoteDevice

Remote device operation methods.

**Since:** 26.0.0

<!--Device-remoteDevice-interface RemoteDevice--><!--Device-remoteDevice-interface RemoteDevice-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { remoteDevice } from '@kit.ConnectivityKit';
```

## cancelDevicePairing

```TypeScript
cancelDevicePairing(): Promise<void>
```

Cancel an in-progress pairing request.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-cancelDevicePairing(): Promise<void>--><!--Device-RemoteDevice-cancelDevicePairing(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## connect

```TypeScript
connect(): Promise<void>
```

Connect all allowed profiles.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-connect(): Promise<void>--><!--Device-RemoteDevice-connect(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the result of connecting to profiles as a Promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## disconnect

```TypeScript
disconnect(): Promise<void>
```

Disconnect all connected profiles.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-disconnect(): Promise<void>--><!--Device-RemoteDevice-disconnect(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the result of connecting to profiles as a Promise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getDeviceAlias

```TypeScript
getDeviceAlias(): string
```

Gets the alias of a remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getDeviceAlias(): string--><!--Device-RemoteDevice-getDeviceAlias(): string-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the alias of a remote device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getDeviceModel

```TypeScript
getDeviceModel(): DeviceModel
```

Obtains the model information of a remote device.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getDeviceModel(): DeviceModel--><!--Device-RemoteDevice-getDeviceModel(): DeviceModel-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [DeviceModel](arkts-connectivity-remotedevice-devicemodel-i-sys.md) | Returns the remote device's model information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## getRssiValue

```TypeScript
getRssiValue(): Promise<number>
```

Gets the RSSI value of a remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-getRssiValue(): Promise<int>--><!--Device-RemoteDevice-getRssiValue(): Promise<int>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Returns promise object of RSSI value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## removePairedDevice

```TypeScript
removePairedDevice(): Promise<void>
```

Remove a paired remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-removePairedDevice(): Promise<void>--><!--Device-RemoteDevice-removePairedDevice(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## setConnectionInterval

```TypeScript
setConnectionInterval(interval: ConnectionInterval): void
```

Sets the connection interval with a remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-setConnectionInterval(interval: ConnectionInterval): void--><!--Device-RemoteDevice-setConnectionInterval(interval: ConnectionInterval): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interval | [ConnectionInterval](arkts-connectivity-remotedevice-connectioninterval-t-sys.md) | Yes | The connection interval to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## setDeviceAlias

```TypeScript
setDeviceAlias(alias: string): void
```

Sets the alias of a remote device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-setDeviceAlias(alias: string): void--><!--Device-RemoteDevice-setDeviceAlias(alias: string): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alias | string | Yes | The alias of a remote device<br>The maximum length is 64 and cannot be empty. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100046 | String exceeds maximum length. |
| 36100099 | Operation failed. |

## setPairingConfirmation

```TypeScript
setPairingConfirmation(accept: boolean): void
```

Set the confirmation to a pairing request.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-setPairingConfirmation(accept: boolean): void--><!--Device-RemoteDevice-setPairingConfirmation(accept: boolean): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| accept | boolean | Yes | Set this parameter to true if the pairing request is accepted.Otherwise, set it to false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## setPairingPasscode

```TypeScript
setPairingPasscode(passcode: string): Promise<void>
```

Set the passcode during pairing if the pairing type is passcode

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-setPairingPasscode(passcode: string): Promise<void>--><!--Device-RemoteDevice-setPairingPasscode(passcode: string): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| passcode | string | Yes | The passcode entered by the user. It must be a 6-digit number<br>The length must be 6, Six digits within 10. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise object is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100045 | Passcode must be a 6-digit number. |
| 36100099 | Operation failed. |

## startCrediblePairing

```TypeScript
startCrediblePairing(): Promise<void>
```

Starts pairing with a credible remote NearLink device.This interface does not trigger a dialog box and does not require user authorization.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-RemoteDevice-startCrediblePairing(): Promise<void>--><!--Device-RemoteDevice-startCrediblePairing(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

