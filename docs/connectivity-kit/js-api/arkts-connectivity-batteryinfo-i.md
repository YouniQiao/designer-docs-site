# BatteryInfo

Describes the contents of the battery information.

**Since:** 12

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { connection } from '@ohos.bluetooth.connection';
```

## batteryLevel

```TypeScript
batteryLevel: number
```

Electricity value of the general device. {@code -1} means no power information.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## boxBatteryLevel

```TypeScript
boxBatteryLevel: number
```

Electricity value of the box. {@code -1} means no power information.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## boxChargeState

```TypeScript
boxChargeState: DeviceChargeState
```

The charge state of the box.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## leftEarBatteryLevel

```TypeScript
leftEarBatteryLevel: number
```

Electricity value of the left ear. {@code -1} means no power information.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## leftEarChargeState

```TypeScript
leftEarChargeState: DeviceChargeState
```

The charge state of the left ear.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## rightEarBatteryLevel

```TypeScript
rightEarBatteryLevel: number
```

Electricity value of the right ear. {@code -1} means no power information.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## rightEarChargeState

```TypeScript
rightEarChargeState: DeviceChargeState
```

The charge state of the right ear.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

