# @ohos.driver.deviceManager

The **deviceManager** module provides APIs for managing peripheral devices, including querying the peripheral device
list and binding or unbinding a peripheral device.

**Since:** 10

**System capability:** SystemCapability.Driver.ExternalDevice

## Modules to Import

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bindDevice](arkts-driverdevelopment-binddevice-f.md#binddevice-1) | Binds a peripheral device based on the device information returned by **queryDevices()**.You need to use [deviceManager.queryDevices()](arkts-driverdevelopment-querydevices-f.md#querydevices-1) to obtain the peripheral deviceinformation and device. |
| [bindDevice](arkts-driverdevelopment-binddevice-f.md#binddevice-2) | Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promiseto return the result.You need to use [deviceManager.queryDevices](arkts-driverdevelopment-querydevices-f.md#querydevices-1) to obtain the peripheral deviceinformation and device. |
| [bindDeviceDriver](arkts-driverdevelopment-binddevicedriver-f.md#binddevicedriver-1) | Binds a peripheral device based on the device information returned by **queryDevices()**.You need to use [deviceManager.queryDevices()](arkts-driverdevelopment-querydevices-f.md#querydevices-1) to obtain the peripheral deviceinformation and device. |
| [bindDeviceDriver](arkts-driverdevelopment-binddevicedriver-f.md#binddevicedriver-2) | Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promiseto return the result.You need to use [deviceManager.queryDevices](arkts-driverdevelopment-querydevices-f.md#querydevices-1) to obtain the peripheral deviceinformation and device. |
| [bindDriverWithDeviceId](arkts-driverdevelopment-binddriverwithdeviceid-f.md#binddriverwithdeviceid-1) | Binds a peripheral device based on the device information returned by **queryDevices()**. This API uses a promiseto return the result.You need to use [deviceManager.queryDevices](arkts-driverdevelopment-querydevices-f.md#querydevices-1) to obtain the peripheral devicelist. |
| [queryDevices](arkts-driverdevelopment-querydevices-f.md#querydevices-1) | Queries the list of peripheral devices. If the device has no peripheral device connected, an empty list isreturned. |
| [unbindDevice](arkts-driverdevelopment-unbinddevice-f.md#unbinddevice-1) | Unbinds a peripheral device. |
| [unbindDevice](arkts-driverdevelopment-unbinddevice-f.md#unbinddevice-2) | Unbinds a peripheral device. This API uses a promise to return the result. |
| [unbindDriverWithDeviceId](arkts-driverdevelopment-unbinddriverwithdeviceid-f.md#unbinddriverwithdeviceid-1) | Unbinds a peripheral device. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [queryDeviceInfo](arkts-driverdevelopment-querydeviceinfo-f-sys.md#querydeviceinfo-1) | Obtains the list of detailed information about peripherals. If the device has no peripheral device connected, anempty list is returned. |
| [queryDriverInfo](arkts-driverdevelopment-querydriverinfo-f-sys.md#querydriverinfo-1) | Obtains the list of detailed information about peripheral drivers. If the device has no peripheral deviceconnected, an empty list is returned. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [Device](arkts-driverdevelopment-device-i.md) | Represents the peripheral device information. |
| [RemoteDeviceDriver](arkts-driverdevelopment-remotedevicedriver-i.md) | Represents information about a remote device driver. |
| [USBDevice](arkts-driverdevelopment-usbdevice-i.md) | USB device information, which is inherited from [Device](arkts-driverdevelopment-querydevices-f.md#querydevices-1). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [DeviceInfo](arkts-driverdevelopment-deviceinfo-i-sys.md) | Defines the detailed information about a device. |
| [DriverInfo](arkts-driverdevelopment-driverinfo-i-sys.md) | Defines detailed information about a driver. |
| [USBDeviceInfo](arkts-driverdevelopment-usbdeviceinfo-i-sys.md) | Defines detailed information about the USB device. It is inherited from[DeviceInfo](arkts-driverdevelopment-deviceinfo-i-sys.md). |
| [USBDriverInfo](arkts-driverdevelopment-usbdriverinfo-i-sys.md) | Defines detailed information about the USB device driver. It is inherited from[DriverInfo](arkts-driverdevelopment-driverinfo-i-sys.md). |
| [USBInterfaceDesc](arkts-driverdevelopment-usbinterfacedesc-i-sys.md) | Defines the interface descriptor of a USB device. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BusType](arkts-driverdevelopment-bustype-e.md) | Enumerates the device bus types. |

