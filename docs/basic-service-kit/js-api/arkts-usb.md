# @ohos.usb

本模块主要提供管理USB设备的相关功能，包括查询USB设备列表、批量数据传输、控制命令传输、权限控制等。 > **说明：** > > 本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。 > 从API version 9开始，该接口不再维护，推荐使用新接口[@ohos.usbManager]{@link @ohos.usbManager:usbManager}。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.usbManager:usbManager

**System capability:** SystemCapability.USB.USBManager

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bulkTransfer](arkts-usb-bulktransfer-f.md#bulkTransfer-1) | 批量传输。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息列表以及endpoint；再调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限； 然后调用[usb.connectDevice]{@link usb.connectDevice}接口得到返回数据devicepipe之后，再次获取接口 [usb.claimInterface]{@link usb.claimInterface}；再调用usb.bulkTransfer接口。 |
| [claimInterface](arkts-usb-claiminterface-f.md#claimInterface-1) | 注册通信接口。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及interfaces；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调 用[usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。 |
| [closePipe](arkts-usb-closepipe-f.md#closePipe-1) | 关闭设备消息控制通道。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用 [usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数。 |
| [connectDevice](arkts-usb-connectdevice-f.md#connectDevice-1) | 打开USB设备。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及device，再调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限。 |
| [controlTransfer](arkts-usb-controltransfer-f.md#controlTransfer-1) | 控制传输。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用 [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。 |
| <!--DelRow-->[getCurrentFunctions](arkts-usb-getcurrentfunctions-f-sys.md#getCurrentFunctions-1) | 在设备模式下，获取当前的USB功能列表的数字组合掩码。 |
| [getDevices](arkts-usb-getdevices-f.md#getDevices-1) | 获取USB设备列表。 |
| [getFileDescriptor](arkts-usb-getfiledescriptor-f.md#getFileDescriptor-1) | 获取文件描述符。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用 [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。 |
| <!--DelRow-->[getPorts](arkts-usb-getports-f-sys.md#getPorts-1) | 获取所有物理USB端口描述信息。 |
| [getRawDescriptor](arkts-usb-getrawdescriptor-f.md#getRawDescriptor-1) | 获取原始的USB描述符。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用 [usb.connectDevice]{@link usb.connectDevice}接口得到devicepipe作为参数。 |
| <!--DelRow-->[getSupportedModes](arkts-usb-getsupportedmodes-f-sys.md#getSupportedModes-1) | 获取指定的端口支持的模式列表的组合掩码。 |
| [hasRight](arkts-usb-hasright-f.md#hasRight-1) | 判断是否有权访问该设备。 |
| [releaseInterface](arkts-usb-releaseinterface-f.md#releaseInterface-1) | 释放注册过的通信接口。 需要调用[usb.claimInterface]{@link usb.claimInterface}先获取接口，才能使用此方法释放接口。 |
| [requestRight](arkts-usb-requestright-f.md#requestRight-1) | 请求软件包的临时权限以访问设备。使用Promise异步回调。系统应用默认拥有访问设备权限，无需调用此接口申请。 |
| [setConfiguration](arkts-usb-setconfiguration-f.md#setConfiguration-1) | 设置设备配置。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备信息以及config；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调用 [usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数。 |
| <!--DelRow-->[setCurrentFunctions](arkts-usb-setcurrentfunctions-f-sys.md#setCurrentFunctions-1) | 在设备模式下，设置当前的USB功能列表。 |
| [setInterface](arkts-usb-setinterface-f.md#setInterface-1) | 设置设备接口。 需要调用[usb.getDevices]{@link usb.getDevices}获取设备列表以及interfaces；调用[usb.requestRight]{@link usb.requestRight}获取设备请求权限；调 用[usb.connectDevice]{@link usb.connectDevice}得到devicepipe作为参数；调用[usb.claimInterface]{@link usb.claimInterface}注册通信接 口。 |
| <!--DelRow-->[setPortRoles](arkts-usb-setportroles-f-sys.md#setPortRoles-1) | 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。 |
| <!--DelRow-->[usbFunctionsFromString](arkts-usb-usbfunctionsfromstring-f-sys.md#usbFunctionsFromString-1) | 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。 |
| <!--DelRow-->[usbFunctionsToString](arkts-usb-usbfunctionstostring-f-sys.md#usbFunctionsToString-1) | 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。 |

### Interfaces

| Name | Description |
| --- | --- |
| [USBConfig](arkts-usb-usbconfig-i.md) | USB配置，一个[USBDevice]{@link usb.USBDevice}中可以含有多个配置。 |
| [USBControlParams](arkts-usb-usbcontrolparams-i.md) | 控制传输参数。 |
| [USBDevice](arkts-usb-usbdevice-i.md) | USB设备信息。 |
| [USBDevicePipe](arkts-usb-usbdevicepipe-i.md) | USB设备消息传输通道，用于确定设备。 |
| [USBEndpoint](arkts-usb-usbendpoint-i.md) | 通过USB发送和接收数据的端口。通过[USBInterface]{@link usb.USBInterface}获取。 |
| [USBInterface](arkts-usb-usbinterface-i.md) | 一个[USBConfig]{@link usb.USBConfig}中可以含有多个USBInterface，每个USBInterface提供一个功能。 |
| <!--DelRow-->[USBPort](arkts-usb-usbport-i-sys.md) | USB设备端口。 |
| <!--DelRow-->[USBPortStatus](arkts-usb-usbportstatus-i-sys.md) | USB设备端口角色信息。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DataRoleType](arkts-usb-dataroletype-e-sys.md) | 数据角色类型。 |
| <!--DelRow-->[FunctionType](arkts-usb-functiontype-e-sys.md) | USB设备侧功能。 |
| <!--DelRow-->[PortModeType](arkts-usb-portmodetype-e-sys.md) | USB端口模式类型。 |
| <!--DelRow-->[PowerRoleType](arkts-usb-powerroletype-e-sys.md) | 电源角色类型。 |
| [USBControlRequestType](arkts-usb-usbcontrolrequesttype-e.md) | 控制请求类型。 |
| [USBRequestDirection](arkts-usb-usbrequestdirection-e.md) | 请求方向。 |
| [USBRequestTargetType](arkts-usb-usbrequesttargettype-e.md) | 请求目标类型。 |

