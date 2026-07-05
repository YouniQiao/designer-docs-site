# DescriptorWriteRequest

Describes the parameters of the Gatt client's characteristic write request.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## isPrep

```TypeScript
isPrep: boolean
```

Whether this request should be pending for later operation

**Type:** boolean

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#isPrepared

**System capability:** SystemCapability.Communication.Bluetooth.Core

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for writing characteristic value

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#offset

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the write request

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#transId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of the characteristic to which the descriptor belongs

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#characteristicUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## descriptorUuid

```TypeScript
descriptorUuid: string
```

The UUID of a DescriptorWriteRequest instance

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#descriptorUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## value

```TypeScript
value: ArrayBuffer
```

Indicates the value to be written

**Type:** ArrayBuffer

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#value

**System capability:** SystemCapability.Communication.Bluetooth.Core

## needRsp

```TypeScript
needRsp: boolean
```

Whether the remote client need a response

**Type:** boolean

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#needRsp

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client that initiates the write request

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#deviceId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the service to which the descriptor belongs

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.DescriptorWriteRequest#serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

