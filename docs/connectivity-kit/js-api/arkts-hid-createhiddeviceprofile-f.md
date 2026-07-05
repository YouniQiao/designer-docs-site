# createHidDeviceProfile

## createHidDeviceProfile

```TypeScript
function createHidDeviceProfile(): HidDeviceProfile
```

Creates the instance of HID device profile.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| HidDeviceProfile | Returns the instance of HID device profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |

**Example**

```TypeScript
try {
    let hidDeviceProfile = hid.createHidDeviceProfile();
    console.info('hidDevice success');
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

