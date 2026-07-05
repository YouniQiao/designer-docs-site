# resetUsbDevice

## resetUsbDevice

```TypeScript
function resetUsbDevice(pipe: USBDevicePipe): boolean
```

重置USB外设。 > **说明：** > > 本接口调用后会重置此前设置的配置和替换接口，请在调用之前确认相关业务已结束。

**Since:** 20

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]usbManager.connectDevice(device: USBDevice)获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true表示重置设备成功，false表示重置设备失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported. |
| 14400001 | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| 14400004 | Service exception. Possible causes: 1. No accessory is plugged in. |
| 14400008 | No such device(it may have been disconnected) |
| 14400010 | Other USB error. Possible causes:   1.Unrecognized discard error code. |
| 14400013 | The USBDevicePipe validity check failed. Possible causes:   1.The input parameters fail the validation check.   2.The call chain used to obtain the input parameters is not reasonable. |

**Example**

```TypeScript
function resetUsbDevice() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.error(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  try {
    let ret: boolean = usbManager.resetUsbDevice(devicepipe);
    console.info(`resetUsbDevice  = ${ret}`);
  } catch (err) {
    console.error(`resetUsbDevice failed: ` + err);
  }
}

```

