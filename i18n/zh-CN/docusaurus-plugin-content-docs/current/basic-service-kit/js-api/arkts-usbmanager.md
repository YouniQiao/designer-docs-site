# @ohos.usbManager

本模块主要提供管理USB设备的相关功能，包括主设备上查询USB设备列表、批量数据传输、控制命令传输、权限控制等；从设备上端口管理、功能切换及查询等。 > **使用说明** > > 凡是参数类型为[usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe}的接口,都需要执行如下操作： > **在使用接口前：** > 1. 调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备列表。 > 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}获取请求权限。 > 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}得到[usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe}作为参数。 > **在使用接口后：** > 调用[usbManager.closePipe]{@link usbManager.closePipe(USBDevicePipe: pipe)}关闭设备消息控制通道。

**起始版本：** 9

**系统能力：** SystemCapability.USB.USBManager

## 导入模块

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[addAccessoryRight](arkts-usbmanager-addaccessoryright-f-sys.md#addAccessoryRight-1) | 为应用程序添加访问USB配requestAccessoryRight件权限。 [usbManager.]{(@link usbManager.requestAccessoryRight)}会触发弹窗请求用户授权；addAccessoryRight不会触发弹窗，而是直接添加应用程序访问设备的权限。 |
| <!--DelRow-->[addDeviceAccessRight](arkts-usbmanager-adddeviceaccessright-f-sys.md#addDeviceAccessRight-1) | 添加软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。 [usbManager.requestRight]{(@link usbManager.requestRight)}会触发弹框请求用户授权；addDeviceAccessRight不会触发弹框，而是直接添加软件包访问设备的权限。 |
| [bulkTransfer](arkts-usbmanager-bulktransfer-f.md#bulkTransfer-1) | 批量传输。使用Promise异步回调。 > **说明：** > > 单次批量传输的传输数据总量（包括pipe、endpoint、buffer、timeout）请控制在200KB以下，数据总量过大会导致传输失败返回-1。 > > 在调用接口前需要通过 > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)} > claim通信接口。 |
| [cancelAccessoryRight](arkts-usbmanager-cancelaccessoryright-f.md#cancelAccessoryRight-1) | 取消当前应用程序访问USB配件的权限。 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到 [USBAccessory]{@link usbManager.USBAccessory}作为参数。 |
| [claimInterface](arkts-usbmanager-claiminterface-f.md#claimInterface-1) | 声明对USB设备某个接口的控制权。 > **说明：** > > 在USB编程中，claim interface是一个常见操作，指的是应用程序请求操作系统将某个USB接口从内核驱动中释放并交由用户空间程序控制。<br> > > 下面用到的claim通信接口都表示claim interface操作。 |
| [closeAccessory](arkts-usbmanager-closeaccessory-f.md#closeAccessory-1) | 关闭配件文件描述符。 需要调用[usbManager.openAccessory]{@link usbManager.openAccessory(accessory: USBAccessory)}获取配件列表，得到 [USBAccessoryHandle]{@link usbManager.USBAccessoryHandle}作为参数。 |
| [closePipe](arkts-usbmanager-closepipe-f.md#closePipe-1) | 关闭设备消息控制通道。 1. 需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备列表； 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}获取设备请求权限； 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}得到devicepipe作为参数。 |
| [connectDevice](arkts-usbmanager-connectdevice-f.md#connectDevice-1) | 根据getDevices()返回的设备信息打开USB设备。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。 1. 需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息以及device; 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}请求使用该设备的权限。 |
| [controlTransfer](arkts-usbmanager-controltransfer-f.md#controlTransfer-1) | 控制传输。使用Promise异步回调。 |
| [getAccessoryList](arkts-usbmanager-getaccessorylist-f.md#getAccessoryList-1) | 获取当前已接入主机的USB配件列表。 |
| <!--DelRow-->[getCurrentFunctions](arkts-usbmanager-getcurrentfunctions-f-sys.md#getCurrentFunctions-1) | 在设备模式下，获取当前的USB功能列表的数字组合掩码。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。 |
| <!--DelRow-->[getDeviceFunctions](arkts-usbmanager-getdevicefunctions-f-sys.md#getDeviceFunctions-1) | 在设备模式下，获取当前的USB功能列表的数字组合掩码。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。 |
| <!--DelRow-->[getDeviceFunctions](arkts-usbmanager-getdevicefunctions-f-sys.md#getDeviceFunctions-2) | Obtains the numeric mask combination for the current USB function list in Device mode. |
| [getDevices](arkts-usbmanager-getdevices-f.md#getDevices-1) | 获取接入主设备的USB设备列表。 > **说明：** > > 三方应用没有权限获取serial字段读取设备序列号，需要通过 > [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}申请权限后，自行发起控制传输获取。 |
| [getFileDescriptor](arkts-usbmanager-getfiledescriptor-f.md#getFileDescriptor-1) | 获取文件描述符。 |
| <!--DelRow-->[getFunctionsFromString](arkts-usbmanager-getfunctionsfromstring-f-sys.md#getFunctionsFromString-1) | 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。 |
| <!--DelRow-->[getPortList](arkts-usbmanager-getportlist-f-sys.md#getPortList-1) | 获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。 |
| <!--DelRow-->[getPortSupportModes](arkts-usbmanager-getportsupportmodes-f-sys.md#getPortSupportModes-1) | 获取指定的端口支持的模式列表的组合掩码。 |
| <!--DelRow-->[getPorts](arkts-usbmanager-getports-f-sys.md#getPorts-1) | 获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。 |
| [getRawDescriptor](arkts-usbmanager-getrawdescriptor-f.md#getRawDescriptor-1) | 获取原始的USB描述符。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。 |
| <!--DelRow-->[getStringFromFunctions](arkts-usbmanager-getstringfromfunctions-f-sys.md#getStringFromFunctions-1) | 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。 |
| <!--DelRow-->[getStringFromFunctions](arkts-usbmanager-getstringfromfunctions-f-sys.md#getStringFromFunctions-2) | Converts the numeric mask combination of a given USB function list to a string descriptor. |
| <!--DelRow-->[getSupportedModes](arkts-usbmanager-getsupportedmodes-f-sys.md#getSupportedModes-1) | 获取指定的端口支持的模式列表的组合掩码。 |
| [hasAccessoryRight](arkts-usbmanager-hasaccessoryright-f.md#hasAccessoryRight-1) | 检查应用程序是否有权访问USB配件。 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到 [USBAccessory]{@link usbManager.USBAccessory}作为参数。 |
| [hasRight](arkts-usbmanager-hasright-f.md#hasRight-1) | 判断是否有权访问该设备。 如果“使用者”（如各种App或系统）有权访问设备则返回true；无权访问设备则返回false。 |
| [openAccessory](arkts-usbmanager-openaccessory-f.md#openAccessory-1) | 获取配件句柄并打开配件文件描述符。之后可以通过CoreFileKit提供的read/write接口和配件进行通信。 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到 [USBAccessory]{@link usbManager.USBAccessory}作为参数。 |
| [releaseInterface](arkts-usbmanager-releaseinterface-f.md#releaseInterface-1) | 释放claim过的通信接口。 > **说明：** > > 在调用该接口前需要通过 > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)} > claim通信接口。 |
| [removeRight](arkts-usbmanager-removeright-f.md#removeRight-1) | 移除软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。 |
| [requestAccessoryRight](arkts-usbmanager-requestaccessoryright-f.md#requestAccessoryRight-1) | 为指定应用程序申请访问USB配件的访问权限。使用Promise异步回调。 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到 [USBAccessory]{@link usbManager.USBAccessory}作为参数。 |
| [requestRight](arkts-usbmanager-requestright-f.md#requestRight-1) | 请求软件包的临时权限以访问设备。使用Promise异步回调。系统应用默认拥有访问设备权限，无需调用此接口申请。 |
| [resetUsbDevice](arkts-usbmanager-resetusbdevice-f.md#resetUsbDevice-1) | 重置USB外设。 > **说明：** > > 本接口调用后会重置此前设置的配置和替换接口，请在调用之前确认相关业务已结束。 |
| [setConfiguration](arkts-usbmanager-setconfiguration-f.md#setConfiguration-1) | 设置设备配置。 |
| <!--DelRow-->[setCurrentFunctions](arkts-usbmanager-setcurrentfunctions-f-sys.md#setCurrentFunctions-1) | 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。 |
| <!--DelRow-->[setDeviceFunctions](arkts-usbmanager-setdevicefunctions-f-sys.md#setDeviceFunctions-1) | 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。 |
| <!--DelRow-->[setDeviceFunctions](arkts-usbmanager-setdevicefunctions-f-sys.md#setDeviceFunctions-2) | Sets the current USB function list in Device mode. |
| [setInterface](arkts-usbmanager-setinterface-f.md#setInterface-1) | 设置设备接口。 > **说明：** > > 一个USB接口可能存在多重选择模式，支持动态切换。使用的场景：数据传输时，通过该接口可重新设置端点，使端点与传输类型匹配。 > > 在调用该接口前需要通过 > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)} > claim通信接口。 |
| <!--DelRow-->[setPortRoleTypes](arkts-usbmanager-setportroletypes-f-sys.md#setPortRoleTypes-1) | 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。 |
| <!--DelRow-->[setPortRoles](arkts-usbmanager-setportroles-f-sys.md#setPortRoles-1) | 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。 |
| [usbCancelTransfer](arkts-usbmanager-usbcanceltransfer-f.md#usbCancelTransfer-1) | 取消异步传输请求。 > **说明：** > > 该接口的主要作用是主动取消尚未完成的USB数据传输请求（如usbSubmitTransfer提交的传输）。<br> > > 在调用该接口前需要通过 > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)} > claim通信接口。 |
| [usbControlTransfer](arkts-usbmanager-usbcontroltransfer-f.md#usbControlTransfer-1) | 控制传输。使用Promise异步回调。 |
| <!--DelRow-->[usbFunctionsFromString](arkts-usbmanager-usbfunctionsfromstring-f-sys.md#usbFunctionsFromString-1) | 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。 |
| <!--DelRow-->[usbFunctionsToString](arkts-usbmanager-usbfunctionstostring-f-sys.md#usbFunctionsToString-1) | 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。 |
| [usbSubmitTransfer](arkts-usbmanager-usbsubmittransfer-f.md#usbSubmitTransfer-1) | 提交异步传输请求。 > **说明：** > > 本接口为异步接口，调用后立刻返回，实际读写操作的结果以回调的方式返回。 > > 在调用该接口前需要通过 > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)} > claim通信接口。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [SubmitTransferCallback](arkts-usbmanager-submittransfercallback-i.md) | Usb异步传输回调。 |
| [USBAccessory](arkts-usbmanager-usbaccessory-i.md) | USB配件信息。 |
| [USBAccessoryHandle](arkts-usbmanager-usbaccessoryhandle-i.md) | USB配件句柄。 |
| [USBConfiguration](arkts-usbmanager-usbconfiguration-i.md) | USB配置，一个[USBDevice]{@link usbManager.USBDevice}中可以含有多个配置。 |
| [USBControlParams](arkts-usbmanager-usbcontrolparams-i.md) | 控制传输参数。 |
| [UsbDataTransferParams](arkts-usbmanager-usbdatatransferparams-i.md) | 作为通用USB数据传输接口，客户端需要填充这个对象中的参数，用以发起传输请求。 |
| [USBDevice](arkts-usbmanager-usbdevice-i.md) | USB设备信息。 |
| [USBDevicePipe](arkts-usbmanager-usbdevicepipe-i.md) | USB设备消息传输通道，用于确定设备。 |
| [USBDeviceRequestParams](arkts-usbmanager-usbdevicerequestparams-i.md) | 控制传输参数。 |
| [USBEndpoint](arkts-usbmanager-usbendpoint-i.md) | 通过USB发送和接收数据的端口。通过[USBInterface]{@link usbManager.USBInterface}获取。 > **说明：** > > 主机控制器按照Endpoint类型调度。 > > 协议层打包时依赖type决定传输特性。 |
| [USBInterface](arkts-usbmanager-usbinterface-i.md) | 一个[USBConfiguration]{@link usbManager.USBConfiguration}中可以含有多个USBInterface，每个USBInterface提供一个功能。 |
| [UsbIsoPacketDescriptor](arkts-usbmanager-usbisopacketdescriptor-i.md) | 实时传输模式回调返回的分包信息。 |
| <!--DelRow-->[USBPort](arkts-usbmanager-usbport-i-sys.md) | USB设备端口。 |
| <!--DelRow-->[USBPortStatus](arkts-usbmanager-usbportstatus-i-sys.md) | USB设备端口角色信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DataRoleType](arkts-usbmanager-dataroletype-e-sys.md) | Enumerates data role types. |
| <!--DelRow-->[FunctionType](arkts-usbmanager-functiontype-e-sys.md) | Enumerates USB device function types. |
| <!--DelRow-->[PortModeType](arkts-usbmanager-portmodetype-e-sys.md) | Enumerates USB port mode types. |
| <!--DelRow-->[PowerRoleType](arkts-usbmanager-powerroletype-e-sys.md) | Enumerates power role types. |
| [USBControlRequestType](arkts-usbmanager-usbcontrolrequesttype-e.md) | Enumerates control request types. |
| [UsbEndpointTransferType](arkts-usbmanager-usbendpointtransfertype-e.md) | Enumerates USB transfer types. |
| [USBRequestDirection](arkts-usbmanager-usbrequestdirection-e.md) | Enumerates request directions. |
| [USBRequestTargetType](arkts-usbmanager-usbrequesttargettype-e.md) | Enumerates request target types. |
| [UsbTransferFlags](arkts-usbmanager-usbtransferflags-e.md) | Enumerates USB transfer flags. |
| [UsbTransferStatus](arkts-usbmanager-usbtransferstatus-e.md) | Enumerates the status code returned after data processing is complete. |

