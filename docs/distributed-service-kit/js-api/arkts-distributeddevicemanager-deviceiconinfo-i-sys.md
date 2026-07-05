# DeviceIconInfo

设备图标信息。

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { distributedDeviceManager } from '@kit.DistributedServiceKit';
```

## specName

```TypeScript
specName: string
```

图片规格名称。取值范围： - lg：大图，尺寸为1016064px。 - sm：小图，尺寸为65536px。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## productId

```TypeScript
productId: string
```

设备所属产品ID。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## icon

```TypeScript
icon: ArrayBuffer
```

图标。

**Type:** ArrayBuffer

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## subProductId

```TypeScript
subProductId?: string
```

设备所属产品子ID。默认为空。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## internalModel

```TypeScript
internalModel?: string
```

设备所属产品的内部型号。默认为空。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## imageType

```TypeScript
imageType: string
```

图片类型。固定值为"ID"，表示产品实物图。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

## url

```TypeScript
url: string
```

URL。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.DistributedHardware.DeviceManager

**System API:** This is a system API.

