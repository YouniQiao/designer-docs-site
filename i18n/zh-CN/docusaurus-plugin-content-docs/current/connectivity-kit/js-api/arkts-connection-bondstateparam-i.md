# BondStateParam

Describes the class of a bluetooth device.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## cause

```TypeScript
cause: UnbondCause
```

Cause of unbond.

**类型：** UnbondCause

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## state

```TypeScript
state: BondState
```

Profile connection state of the device.

**类型：** BondState

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## causeMessage

```TypeScript
causeMessage?: string
```

Cause message of unbond.

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Address of a Bluetooth device.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

