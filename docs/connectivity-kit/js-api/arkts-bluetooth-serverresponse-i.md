# ServerResponse

Describes the parameters of a response send by the server to a specified read or write request.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { bluetooth } from '@kit.ConnectivityKit';
```

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for reading or writing operation

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse.offset

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the write request

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse.transId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## value

```TypeScript
value: ArrayBuffer
```

Indicates the value to be sent

**Type:** ArrayBuffer

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse.value

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client to which to send the response

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse.deviceId

**System capability:** SystemCapability.Communication.Bluetooth.Core

## status

```TypeScript
status: number
```

Indicates the status of the read or write request, set this parameter to '0' in normal cases

**Type:** number

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.ServerResponse.status

**System capability:** SystemCapability.Communication.Bluetooth.Core

