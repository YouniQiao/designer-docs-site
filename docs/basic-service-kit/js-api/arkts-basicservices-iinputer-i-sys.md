# IInputer (System API)

Provides callbacks for credential inputers.

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## onGetData

```TypeScript
onGetData: (authSubType: AuthSubType, callback: IInputData, options: GetInputDataOptions) => void
```

Called to notify the caller that data is obtained.

**Type:** (authSubType: AuthSubType, callback: IInputData, options: GetInputDataOptions) => void

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

