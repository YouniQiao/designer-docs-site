# GattSetting

Describes the setting for Gatt Connection.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@ohos.bluetooth.ble';
```

## autoConnect

```TypeScript
autoConnect?: boolean
```

Indicates whether to automatically connect to the remote device, default is {@code false}

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## transport

```TypeScript
transport?: BluetoothTransport
```

Transport of the connection, default is {@code TRANSPORT_LE}

**Type:** BluetoothTransport

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Communication.Bluetooth.Core

