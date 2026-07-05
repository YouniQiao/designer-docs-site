# USBDriverInfo

USB设备驱动详细信息，继承自[DriverInfo]deviceManager.DriverInfo。

**继承实现关系：** USBDriverInfo继承自：DriverInfo。

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { deviceManager } from '@kit.DriverDevelopmentKit';
```

## productIdList

```TypeScript
productIdList: Array<int>
```

驱动支持的USB设备product ID列表。

**类型：** Array<int>

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

## vendorIdList

```TypeScript
vendorIdList: Array<int>
```

驱动支持的USB设备vendor ID列表。

**类型：** Array<int>

**起始版本：** 12

**系统能力：** SystemCapability.Driver.ExternalDevice

**系统接口：** 此接口为系统接口。

