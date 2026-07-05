# DownloadProfileResult (System API)

Result of the given downloadable Profile.

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { eSIM } from '@ohos.telephony.esim';
```

## cardId

```TypeScript
cardId: number
```

Gets the card Id. This value comes from EuiccService and is used when resolving solvable errors.

**Type:** number

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

## solvableErrors

```TypeScript
solvableErrors: SolvableErrors
```

Gets the solvable errors.

**Type:** SolvableErrors

**Since:** 18

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

