---
last_update:
  date: 2026-07-04
---

# hasRight

## hasRight

```TypeScript
function hasRight(deviceName: string): boolean
```

判断是否有权访问该设备。 如果“使用者”（如各种App或系统）有权访问设备则返回true；无权访问设备则返回false。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceName | string | 是 | 设备名称，来自[usbManager.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1)获取的设备列表USBDevice的name。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true表示有访问设备的权限，false表示没有访问设备的权限。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported.<br>**适用版本：** 18 |

**示例：**

```TypeScript
function hasRight(): boolean {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return false;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let right: boolean = usbManager.hasRight(device.name);
  console.info(`${right}`);
  return right;
}

```

