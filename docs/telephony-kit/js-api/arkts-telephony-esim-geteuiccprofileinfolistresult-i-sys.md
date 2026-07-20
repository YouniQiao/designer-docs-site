# GetEuiccProfileInfoListResult (System API)

Result of all eUICC profile information.

**Since:** 18

<!--Device-eSIM-export interface GetEuiccProfileInfoListResult--><!--Device-eSIM-export interface GetEuiccProfileInfoListResult-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## isRemovable

```TypeScript
isRemovable: boolean
```

Gets whether the eUICC can be removed.

**Type:** boolean

**Since:** 18

<!--Device-GetEuiccProfileInfoListResult-isRemovable: boolean--><!--Device-GetEuiccProfileInfoListResult-isRemovable: boolean-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## profiles

```TypeScript
profiles: Array<EuiccProfile>
```

Gets the profile list (only upon success).

**Type:** Array<EuiccProfile>

**Since:** 18

<!--Device-GetEuiccProfileInfoListResult-profiles: Array<EuiccProfile>--><!--Device-GetEuiccProfileInfoListResult-profiles: Array<EuiccProfile>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## responseResult

```TypeScript
responseResult: ResultCode
```

Gets the result of the operation.

**Type:** ResultCode

**Since:** 18

<!--Device-GetEuiccProfileInfoListResult-responseResult: ResultCode--><!--Device-GetEuiccProfileInfoListResult-responseResult: ResultCode-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

