# OobData

Out Of Band data used in Bluetooth device pairing.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## deviceRole

```TypeScript
deviceRole?: DeviceRole
```

The role of the remote Bluetooth device.

**类型：** DeviceRole

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## confirmationHash

```TypeScript
confirmationHash: Uint8Array
```

Confirmation data in OOB pairing, with a size of 16 octets.

**类型：** Uint8Array

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## randomizerHash

```TypeScript
randomizerHash?: Uint8Array
```

Randomizer data in OOB pairing, with a size of 16 octets.

**类型：** Uint8Array

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## deviceName

```TypeScript
deviceName?: string
```

The name of the remote Bluetooth device.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

## deviceId

```TypeScript
deviceId: BluetoothAddress
```

The address of remote Bluetooth device.

**类型：** BluetoothAddress

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

