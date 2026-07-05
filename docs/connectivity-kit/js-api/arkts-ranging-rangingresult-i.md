# RangingResult

Describes the contents of the ranging results.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## rssi

```TypeScript
rssi: int
```

Received signal strength.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## distance

```TypeScript
distance: RangingMeasurement
```

The distance measured by the ranging output.

**Type:** RangingMeasurement

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## angle

```TypeScript
angle: RangingMeasurement
```

Azimuth angle output from ranging.

**Type:** RangingMeasurement

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## deviceId

```TypeScript
deviceId: string
```

Address of the ranging device.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

