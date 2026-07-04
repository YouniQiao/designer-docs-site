# createHidDeviceProfile

## Modules to Import

```TypeScript
import { hid } from '@ohos.bluetooth.hid';
```

## createHidDeviceProfile

```TypeScript
function createHidDeviceProfile(): HidDeviceProfile
```

Creates the instance of HID device profile.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| HidDeviceProfile | Returns the instance of HID device profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
try {
    let hidDeviceProfile = hid.createHidDeviceProfile();
    console.info('hidDevice success');
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

