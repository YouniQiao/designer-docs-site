# ServerResponse

Describes the parameters of a response send by the server to a specified read or write request.

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { bluetoothManager } from '@kit.ConnectivityKit';
```

## offset

```TypeScript
offset: number
```

Indicates the byte offset of the start position for reading or writing operation

**类型：** number

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse#offset

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## transId

```TypeScript
transId: number
```

The Id of the write request

**类型：** number

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse#transId

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## value

```TypeScript
value: ArrayBuffer
```

Indicates the value to be sent

**类型：** ArrayBuffer

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse#value

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Indicates the address of the client to which to send the response

**类型：** string

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse#deviceId

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## status

```TypeScript
status: number
```

Indicates the status of the read or write request, set this parameter to '0' in normal cases

**类型：** number

**起始版本：** 9

**废弃版本：** 10

**替代接口：** ohos.bluetooth.ble/ble.ServerResponse#status

**系统能力：** SystemCapability.Communication.Bluetooth.Core

