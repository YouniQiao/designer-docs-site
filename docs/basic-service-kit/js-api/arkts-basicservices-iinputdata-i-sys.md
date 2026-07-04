# IInputData (System API)

Provides callbacks for PIN operations.

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## onSetData

```TypeScript
onSetData(authSubType: AuthSubType, data: Uint8Array): void
```

Called to notify the caller the data is set.

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| authSubType | AuthSubType | Yes | Credential subtype. |
| data | Uint8Array | Yes | Data (credential) to set. The data is used for authentication andoperations for adding and modifying credentials. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameter types. |
| [12300002](../../apis-basic-services-kit/errorcode-account.md#12300002-invalid-parameter) | Invalid pinSubType. |

**Example**

```TypeScript
let password: Uint8Array = new Uint8Array([0, 0, 0, 0, 0, 0]);
let passwordNumber: Uint8Array = new Uint8Array([1, 2, 3, 4]);
let inputer: osAccount.IInputer = {
  onGetData: (authSubType: osAccount.AuthSubType, callback: osAccount.IInputData) => {
      if (authSubType == osAccount.AuthSubType.PIN_NUMBER) {
        callback.onSetData(authSubType, passwordNumber);
      } else {
        callback.onSetData(authSubType, password);
      }
  }
};

```

