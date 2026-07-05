# PanProfile

Manager pan host profile.

**Inheritance:** PanProfileextends: BaseProfile.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { pan } from '@kit.ConnectivityKit';
```

## connect

```TypeScript
connect(deviceId: string): void
```

Initiate the PAN connection with the remote device.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported.  Only can be called on phone, tablet, and 2in1 devices.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Remote Device profile not supported. |
| 2900099 | Operation failed. |

## disconnect

```TypeScript
disconnect(deviceId: string): void
```

Disconnect the PAN connection with the remote device.

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceId | string | Yes | Indicates device ID. For example, "11:22:33:AA:BB:FF". |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let panProfile: pan.PanProfile = pan.createPanProfile();
    panProfile.disconnect('XX:XX:XX:XX:XX:XX');
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## isPanSupported

```TypeScript
isPanSupported(): boolean
```

Determine whether the local device supports PAN.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the local device supports PAN; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2900099 | Operation failed. |

## isTetheringOn

```TypeScript
isTetheringOn(): boolean
```

Obtains the tethering enable or disable.

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns the value {@code true} is tethering is on, returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. [since 10 - 24] |
| 801 | Capability not supported.  Only can be called on phone, tablet, and 2in1 devices.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let panProfile: pan.PanProfile = pan.createPanProfile();
    panProfile.isTetheringOn();
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

## setTethering

```TypeScript
setTethering(enable: boolean): void
```

Enable bluetooth tethering.

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Specifies whether to enable tethering. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 401 | Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Profile not supported. |
| 2900099 | Operation failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
    let panProfile: pan.PanProfile = pan.createPanProfile();
    panProfile.setTethering(false);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

