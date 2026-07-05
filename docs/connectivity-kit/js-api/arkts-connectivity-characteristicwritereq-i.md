# CharacteristicWriteReq

Describes the parameters of the of the Gatt client's characteristic write request.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** CharacteristicWriteRequest

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@ohos.bluetooth';
```

## characteristicUuid

```TypeScript
characteristicUuid: string
```

The UUID of a CharacteristicWriteReq instance

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** characteristicUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client that initiates the write request

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** deviceId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## isPrep

```TypeScript
isPrep: boolean
```

Whether this request should be pending for later operation

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitutes:** isPrep

**System capability:** SystemCapability.Communication.Bluetooth.Core

## needRsp

```TypeScript
needRsp: boolean
```

Whether the remote client need a response

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitutes:** needRsp

**System capability:** SystemCapability.Communication.Bluetooth.Core

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for writing characteristic value

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitutes:** offset

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuid

```TypeScript
serviceUuid: string
```

The UUID of the service to which the characteristic belongs

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** serviceUuid

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the write request

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitutes:** transId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## value

```TypeScript
value: ArrayBuffer
```

Indicates the value to be written

**Type:** ArrayBuffer

**Since:** 7

**Deprecated since:** 9

**Substitutes:** value

**System capability:** SystemCapability.Communication.Bluetooth.Core

