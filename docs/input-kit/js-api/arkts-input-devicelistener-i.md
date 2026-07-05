# DeviceListener

Provides hot swap information about an input device.

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## Modules to Import

```TypeScript
import { inputDevice } from '@ohos.multimodalInput.inputDevice';
```

## deviceId

```TypeScript
deviceId: number
```

Unique ID of the input device. If a physical device is repeatedly reinstalled or restarted, its ID may change.

**Type:** number

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

## type

```TypeScript
type: ChangedType
```

Device change type, which indicates whether an input device is inserted or removed.

**Type:** ChangedType

**Since:** 9

**System capability:** SystemCapability.MultimodalInput.Input.InputDevice

