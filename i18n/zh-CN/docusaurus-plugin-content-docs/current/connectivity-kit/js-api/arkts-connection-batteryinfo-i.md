# BatteryInfo

Describes the contents of the battery information.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## leftEarChargeState

```TypeScript
leftEarChargeState: DeviceChargeState
```

The charge state of the left ear.

**类型：** DeviceChargeState

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## boxChargeState

```TypeScript
boxChargeState: DeviceChargeState
```

The charge state of the box.

**类型：** DeviceChargeState

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## leftEarBatteryLevel

```TypeScript
leftEarBatteryLevel: int
```

Electricity value of the left ear. {@code -1} means no power information.

**类型：** int

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## boxBatteryLevel

```TypeScript
boxBatteryLevel: int
```

Electricity value of the box. {@code -1} means no power information.

**类型：** int

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## rightEarBatteryLevel

```TypeScript
rightEarBatteryLevel: int
```

Electricity value of the right ear. {@code -1} means no power information.

**类型：** int

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Identify of the discovery device.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## rightEarChargeState

```TypeScript
rightEarChargeState: DeviceChargeState
```

The charge state of the right ear.

**类型：** DeviceChargeState

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## batteryLevel

```TypeScript
batteryLevel: int
```

Electricity value of the general device. {@code -1} means no power information.

**类型：** int

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

