# BondStateParam

Describes the class of a bluetooth device.

**Since:** 10

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { connection } from '@kit.ConnectivityKit';
```

## cause

```TypeScript
cause: UnbondCause
```

Cause of unbond.

**Type:** UnbondCause

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## state

```TypeScript
state: BondState
```

Profile connection state of the device.

**Type:** BondState

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## causeMessage

```TypeScript
causeMessage?: string
```

Cause message of unbond.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

## deviceId

```TypeScript
deviceId: string
```

Address of a Bluetooth device.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.Bluetooth.Core

