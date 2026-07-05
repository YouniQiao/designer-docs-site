# createHidDeviceProfile

## createHidDeviceProfile

```TypeScript
function createHidDeviceProfile(): HidDeviceProfile
```

Creates the instance of HID device profile.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| HidDeviceProfile | Returns the instance of HID device profile. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

**示例：**

```TypeScript
try {
    let hidDeviceProfile = hid.createHidDeviceProfile();
    console.info('hidDevice success');
} catch (err) {
    console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
}

```

