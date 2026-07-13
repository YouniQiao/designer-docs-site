# NetworkSelectionModeOptions (System API)

Obtains the network selection mode option.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## networkInformation

```TypeScript
networkInformation: NetworkInformation
```

Indicates the network information.

**Type:** NetworkInformation

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## resumeSelection

```TypeScript
resumeSelection: boolean
```

Indicates whether to continue selecting the network selection mode.

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## selectMode

```TypeScript
selectMode: NetworkSelectionMode
```

Indicates the network search mode of the SIM card.

**Type:** NetworkSelectionMode

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

## slotId

```TypeScript
slotId: number
```

Indicates the card slot index number, ranging from 0 to
the maximum card slot index number supported by the device.

**Type:** number

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

