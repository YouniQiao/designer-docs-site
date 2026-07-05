# @ohos.driver.deviceManager

本模块主要提供管理外部设备的相关功能，包括查询设备列表、绑定设备和解除绑定设备。

**起始版本：** 10

**系统能力：** SystemCapability.Driver.ExternalDevice

## 导入模块

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [bindDevice](arkts-devicemanager-binddevice-f.md#bindDevice-1) | 根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices()]{@link deviceManager.queryDevices}获取设备信息以及device。 |
| [bindDevice](arkts-devicemanager-binddevice-f.md#bindDevice-2) | 根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息以及device。 |
| [bindDeviceDriver](arkts-devicemanager-binddevicedriver-f.md#bindDeviceDriver-1) | 根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices()]{@link deviceManager.queryDevices}获取设备信息以及device。 |
| [bindDeviceDriver](arkts-devicemanager-binddevicedriver-f.md#bindDeviceDriver-2) | 根据queryDevices()返回的设备信息绑定设备。 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息以及device。 |
| [bindDriverWithDeviceId](arkts-devicemanager-binddriverwithdeviceid-f.md#bindDriverWithDeviceId-1) | 根据queryDevices()返回的设备信息绑定设备。使用Promise异步回调。 需要调用[deviceManager.queryDevices]{@link deviceManager.queryDevices}获取设备信息列表。 |
| <!--DelRow-->[queryDeviceInfo](arkts-devicemanager-querydeviceinfo-f-sys.md#queryDeviceInfo-1) | 查询扩展外设详细信息列表。如果没有设备接入，那么将会返回一个空的列表。 |
| [queryDevices](arkts-devicemanager-querydevices-f.md#queryDevices-1) | 获取接入主设备的外部设备列表。如果没有设备接入，那么将会返回一个空的列表。 |
| <!--DelRow-->[queryDriverInfo](arkts-devicemanager-querydriverinfo-f-sys.md#queryDriverInfo-1) | 查询扩展外设驱动详细信息列表。如果没有设备接入，那么将会返回一个空的列表。 |
| [unbindDevice](arkts-devicemanager-unbinddevice-f.md#unbindDevice-1) | 解除设备绑定。 |
| [unbindDevice](arkts-devicemanager-unbinddevice-f.md#unbindDevice-2) | 解除设备绑定。 |
| [unbindDriverWithDeviceId](arkts-devicemanager-unbinddriverwithdeviceid-f.md#unbindDriverWithDeviceId-1) | 解除设备绑定。使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [Device](arkts-devicemanager-device-i.md) | 外设信息。 |
| <!--DelRow-->[DeviceInfo](arkts-devicemanager-deviceinfo-i-sys.md) | 设备详细信息。 |
| <!--DelRow-->[DriverInfo](arkts-devicemanager-driverinfo-i-sys.md) | 驱动详细信息。 |
| [RemoteDeviceDriver](arkts-devicemanager-remotedevicedriver-i.md) | 远程设备驱动。 |
| [USBDevice](arkts-devicemanager-usbdevice-i.md) | USB设备信息，继承自[Device]{@link deviceManager.queryDevices}。 |
| <!--DelRow-->[USBDeviceInfo](arkts-devicemanager-usbdeviceinfo-i-sys.md) | USB设备详细信息，继承自[DeviceInfo]{@link deviceManager.DeviceInfo}。 |
| <!--DelRow-->[USBDriverInfo](arkts-devicemanager-usbdriverinfo-i-sys.md) | USB设备驱动详细信息，继承自[DriverInfo]{@link deviceManager.DriverInfo}。 |
| <!--DelRow-->[USBInterfaceDesc](arkts-devicemanager-usbinterfacedesc-i-sys.md) | USB设备接口描述符。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BusType](arkts-devicemanager-bustype-e.md) | 设备总线类型。 |

