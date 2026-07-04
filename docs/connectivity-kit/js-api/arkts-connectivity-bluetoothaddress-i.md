# BluetoothAddress

Describe the type of Bluetooth address.

**Since:** 21

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { common } from '@ohos.bluetooth.common';
```

## address

```TypeScript
address: string
```

The string of the Bluetooth address.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Communication.Bluetooth.Core

## addressType

```TypeScript
addressType: BluetoothAddressType
```

The type of the Bluetooth address.

**Type:** BluetoothAddressType

**Since:** 21

**System capability:** SystemCapability.Communication.Bluetooth.Core

## rawAddressType

```TypeScript
rawAddressType?: BluetoothRawAddressType
```

Address type defined by the Bluetooth Core Specification. It is used only when the {@link BluetoothAddress#addressType} is {@link BluetoothAddressType#REAL}.

**Type:** BluetoothRawAddressType

**Since:** 23

**System capability:** SystemCapability.Communication.Bluetooth.Core

