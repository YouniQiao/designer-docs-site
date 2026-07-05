# DeviceBasicInfo

分布式设备基本信息。

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## Modules to Import

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
```

## deviceType

```TypeScript
deviceType: string
```

[设备类型]distributedDeviceManager.DeviceManager.getDeviceType。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## networkId

```TypeScript
networkId?: string
```

设备网络标识。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## deviceName

```TypeScript
deviceName: string
```

设备名称。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## deviceId

```TypeScript
deviceId: string
```

设备标识符。实际值为udid-hash与appid和盐值基于sha256方式进行混淆后的值。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.DistributedHardware.DeviceManager

