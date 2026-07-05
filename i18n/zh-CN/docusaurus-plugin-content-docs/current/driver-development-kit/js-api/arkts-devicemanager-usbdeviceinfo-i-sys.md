# USBDeviceInfo

USB设备详细信息，继承自[DeviceInfo]deviceManager.DeviceInfo。

**继承实现关系：** USBDeviceInfo继承自：DeviceInfo。

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## productId

```TypeScript
productId: int
```

USB设备Product ID。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

## interfaceDescList

```TypeScript
interfaceDescList: Array<Readonly<USBInterfaceDesc>>
```

USB设备接口描述符列表。

**类型：** Array<Readonly<USBInterfaceDesc>>

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

## vendorId

```TypeScript
vendorId: int
```

USB设备Vendor ID。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

