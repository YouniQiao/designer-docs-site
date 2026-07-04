# GetEuiccProfileInfoListResult (System API)

Result of all eUICC profile information.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@ohos.telephony.esim';
```

## isRemovable

```TypeScript
isRemovable: boolean
```

Gets whether the eUICC can be removed.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profiles

```TypeScript
profiles: Array<EuiccProfile>
```

Gets the profile list (only upon success).

**Type:** Array<EuiccProfile>

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## responseResult

```TypeScript
responseResult: ResultCode
```

Gets the result of the operation.

**Type:** ResultCode

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

