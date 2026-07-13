# DeviceNodeInfo (System API)

Represents the device node information, including the networkId, device name, device type, nearby status
and udid.

**Since:** 26.1.0

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { conversation } from '@kit.DistributedServiceKit';
```

## deviceName

```TypeScript
deviceName: string
```

Name of the device.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## deviceTypeId

```TypeScript
deviceTypeId: number
```

Device type identifier. This numeric value represents the category of the device (e.g., phone, tablet, TV,
wearable, etc.).

**Type:** number

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## nearby

```TypeScript
nearby: boolean
```

Indicates whether the device is nearby.

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## networkId

```TypeScript
networkId: string
```

NetworkId of the device. This ID uniquely identifies a device within the distributed network and is used
for device addressing when sending messages.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

## udid

```TypeScript
udid: string
```

UDID of the device. This ID uniquely identifies a device and is used for device addressing when sending
messages.

**Type:** string

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

