# PairingStateParam

配对状态参数。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## reason

```TypeScript
reason: PairingReason
```

配对状态原因。

**Type:** PairingReason

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## address

```TypeScript
address: string
```

设备地址。 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## reasonMsg

```TypeScript
reasonMsg?: string
```

原因消息。此字段仅用于日志信息，不应该用于逻辑处理。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## preState

```TypeScript
preState: PairingState
```

上一个配对状态。

**Type:** PairingState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## state

```TypeScript
state: PairingState
```

当前配对状态。

**Type:** PairingState

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

