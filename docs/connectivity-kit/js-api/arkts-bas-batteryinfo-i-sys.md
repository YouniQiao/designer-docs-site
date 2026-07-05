# BatteryInfo

Describe the contents of the battery information.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { bas } from '@kit.ConnectivityKit';
```

## deviceId

```TypeScript
deviceId: BluetoothAddress
```

Identify of the discovery device.

**Type:** BluetoothAddress

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

## batteryLevel

```TypeScript
batteryLevel: int
```

battery value of the device. {@code -1} means no power information.

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

**System API:** This is a system API.

