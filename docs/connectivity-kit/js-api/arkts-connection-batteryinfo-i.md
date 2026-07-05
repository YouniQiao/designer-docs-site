# BatteryInfo

Describes the contents of the battery information.

**Since:** 12

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## leftEarChargeState

```TypeScript
leftEarChargeState: DeviceChargeState
```

The charge state of the left ear.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## boxChargeState

```TypeScript
boxChargeState: DeviceChargeState
```

The charge state of the box.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## leftEarBatteryLevel

```TypeScript
leftEarBatteryLevel: int
```

Electricity value of the left ear. {@code -1} means no power information.

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## boxBatteryLevel

```TypeScript
boxBatteryLevel: int
```

Electricity value of the box. {@code -1} means no power information.

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## rightEarBatteryLevel

```TypeScript
rightEarBatteryLevel: int
```

Electricity value of the right ear. {@code -1} means no power information.

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Identify of the discovery device.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## rightEarChargeState

```TypeScript
rightEarChargeState: DeviceChargeState
```

The charge state of the right ear.

**Type:** DeviceChargeState

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## batteryLevel

```TypeScript
batteryLevel: int
```

Electricity value of the general device. {@code -1} means no power information.

**Type:** int

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

