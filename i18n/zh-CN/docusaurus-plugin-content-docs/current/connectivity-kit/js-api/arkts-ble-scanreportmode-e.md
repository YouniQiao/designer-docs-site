# ScanReportMode

```TypeScript
enum ScanReportMode
```

Report mode used during scan.

**起始版本：** 15

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## NORMAL

```TypeScript
NORMAL = 1
```

In normal mode, the advertisement packet is reported immediately after being scanned.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## BATCH

```TypeScript
BATCH = 2
```

Enables delayed sending of advertising packets in batch mode by the interval specified by {@link ScanOptions#interval}.

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## FENCE_SENSITIVITY_LOW

```TypeScript
FENCE_SENSITIVITY_LOW = 10
```

In low sensitivity fence mode, the advertisement packets are reported only when they are received for the first time and lost for the last time. The reception sensitivity is low.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## FENCE_SENSITIVITY_HIGH

```TypeScript
FENCE_SENSITIVITY_HIGH = 11
```

In high sensitivity fence mode, the advertisement packets are reported only when they are received for the first time and lost for the last time. The reception sensitivity is high.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

