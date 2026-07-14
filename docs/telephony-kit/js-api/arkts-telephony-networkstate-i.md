# NetworkState

Describes the network registration state.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## cfgTech

```TypeScript
cfgTech: RadioTechnology
```

Obtains the radio Access technology after config conversion.

**Type:** RadioTechnology

**Since:** 8

**System capability:** SystemCapability.Telephony.CoreService

## isCaActive

```TypeScript
isCaActive: boolean
```

Obtains the status of CA. Returns {@code true} if CA is actived; returns {@code false} otherwise.

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## isEmergency

```TypeScript
isEmergency: boolean
```

Checks whether this device is allowed to make emergency calls only. Returns {@code true} if this device is allowed to make emergency calls only; returns {@code false} otherwise.

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## isRoaming

```TypeScript
isRoaming: boolean
```

Checks whether the device is roaming.

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## longOperatorName

```TypeScript
longOperatorName: string
```

Obtains the operator name in the long alphanumeric format of the registered network. Returns the operator name in the long alphanumeric format as a string; returns an empty string if no operator name is obtained.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## nsaState

```TypeScript
nsaState: NsaState
```

Obtains the NSA network registration status of the device. Returns the NSA network registration status {@code NsaState}.

**Type:** NsaState

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## plmnNumeric

```TypeScript
plmnNumeric: string
```

Obtains the PLMN code of the registered network. Returns the PLMN code as a string; returns an empty string if no operator name is obtained.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## regState

```TypeScript
regState: RegState
```

Obtains the network registration status of the device.

**Type:** RegState

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## shortOperatorName

```TypeScript
shortOperatorName: string
```

Obtains the operator name in the short alphanumeric format of the registered network. Returns the operator name in the short alphanumeric format as a string; returns an empty string if no operator name is obtained.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

