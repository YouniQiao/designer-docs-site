# removeRight

## removeRight

```TypeScript
function removeRight(deviceName: string): boolean
```

移除软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | 设备名称，来自[usbManager.getDevices]usbManager.getDevices()获取的设备列表USBDevice的name。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回权限移除结果。返回true表示权限移除成功；返回false则表示权限移除失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:   1.Mandatory parameters are left unspecified.   2.Incorrect parameter types. |
| 801 | Capability not supported. [since 18] |

**Example**

```TypeScript
function removeRight(): boolean {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return false;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  if (usbManager.removeRight(device.name)) {
    console.info(`Succeed in removing right`);
    return true;
  }
  return false;
}

```

