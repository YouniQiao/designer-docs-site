# HidDeviceQos

Represents the Quality of Service (QoS) settings for a bluetooth hid device application.

**Since:** 23

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## serviceType

```TypeScript
serviceType?: ServiceType
```

L2CAP service type, default = SERVICE_BEST_EFFORT.

**Type:** ServiceType

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## delayVariation

```TypeScript
delayVariation?: int
```

L2CAP delay variation, default = -1.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## tokenRate

```TypeScript
tokenRate?: int
```

L2CAP tokenRate, means transmission rate, default = 0.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## latency

```TypeScript
latency?: int
```

L2CAP latency, default = -1.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## tokenBucketSize

```TypeScript
tokenBucketSize?: int
```

L2CAP token bucket size, default = 0.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## peakBandwidth

```TypeScript
peakBandwidth?: int
```

L2CAP peak bandwidth, default = 0.

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

