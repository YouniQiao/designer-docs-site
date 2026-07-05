# BluetoothAddress

Describe the type of Bluetooth address.

**起始版本：** 21

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { common } from '@kit.ConnectivityKit';
```

## address

```TypeScript
address: string
```

The string of the Bluetooth address.

**类型：** string

**起始版本：** 21

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## addressType

```TypeScript
addressType: BluetoothAddressType
```

The type of the Bluetooth address.

**类型：** BluetoothAddressType

**起始版本：** 21

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## rawAddressType

```TypeScript
rawAddressType?: BluetoothRawAddressType
```

Address type defined by the Bluetooth Core Specification. It is used only when the {@link BluetoothAddress#addressType} is {@link BluetoothAddressType#REAL}.

**类型：** BluetoothRawAddressType

**起始版本：** 23

**系统能力：** SystemCapability.Communication.Bluetooth.Core

