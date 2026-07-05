# DescriptorReadReq

Describes the parameters of the Gatt client's descriptor read request.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for reading characteristic value

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.offset

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the read request

**类型：** number

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.transId

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of the characteristic to which the descriptor belongs

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.characteristicUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## descriptorUuid

```TypeScript
descriptorUuid: string
```

The UUID of a DescriptorReadReq instance

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.descriptorUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client that initiates the read request

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.deviceId

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the service to which the descriptor belongs

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.DescriptorReadRequest.serviceUuid

**系统能力：** SystemCapability.Communication.Bluetooth.Core

