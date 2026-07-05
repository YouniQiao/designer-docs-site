# CharacteristicWriteRequest

Describes the parameters of the of the Gatt client's characteristic write request.

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest

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

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#isPrepared

**System capability:** SystemCapability.Communication.Bluetooth.Core

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for writing characteristic value

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#offset

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the write request

**Type:** number

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#transId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a CharacteristicWriteRequest instance

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#characteristicUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## value

```TypeScript
value: ArrayBuffer
```

Indicates the value to be written

**Type:** ArrayBuffer

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#value

**System capability:** SystemCapability.Communication.Bluetooth.Core

## needRsp

```TypeScript
needRsp: boolean
```

Whether the remote client need a response

**Type:** boolean

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#needRsp

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client that initiates the write request

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#deviceId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the service to which the characteristic belongs

**Type:** string

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.bluetooth.ble/ble.CharacteristicWriteRequest#serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

