# exportKeyItem

## Modules to Import

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
```

## exportKeyItem

```TypeScript
function exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>): void
```

Exports a key. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.Huks.Core
- API version 9 to 11: SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Key alias, which must be the same as the alias used when the key was generated. |
| options | HuksOptions | Yes | Property of the key to be exported. If[HuksAuthStorageLevel](arkts-universalkeystore-huksauthstoragelevel-e.md) is used to specify the security level of the key to beexported,<br>this parameter can be left empty. If the API version is 12 or later, the default value **CE** ispassed in. If the API version is earlier than 12, the default value **DE** is passed in. |
| callback | AsyncCallback&lt;HuksReturnResult&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**, and **data** is the obtained **HuksReturnResult**. Otherwise, **err** isan error object. **outData** in **HuksReturnResult** returns the public key exported from HUKS. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | api is not supported |
| [12000001](../errorcode-huks.md#12000001-feature-not-supported) | algorithm mode is not supported |
| [12000002](../errorcode-huks.md#12000002-missing-key-algorithm-parameter) | algorithm param is missing<br>**Applicable version:** 9 - 11 |
| [12000003](../errorcode-huks.md#12000003-invalid-key-algorithm-parameter) | algorithm param is invalid<br>**Applicable version:** 9 - 11 |
| [12000004](../errorcode-huks.md#12000004-file-error) | operating file failed |
| [12000005](../errorcode-huks.md#12000005-ipc-error) | IPC communication failed |
| [12000006](../errorcode-huks.md#12000006-algorithm-library-operation-failed) | error occurred in crypto engine |
| [12000011](../errorcode-huks.md#12000011-the-entity-does-not-exist) | queried entity does not exist |
| [12000012](../errorcode-huks.md#12000012-external-error) | Device environment or input parameter abnormal |
| [12000014](../errorcode-huks.md#12000014-insufficient-memory) | memory is insufficient |
| [12000018](../errorcode-huks.md#12000018-invalid-input-parameter) | the group id specified by the access group tag is invalid<br>**Applicable version:** 23 and later |
| [12000020](../errorcode-huks.md#12000020-dependent-module-error) | the provider operation failed<br>**Applicable version:** 26.0.0 and later |
| [12000024](../errorcode-huks.md#12000024-device-or-resource-busy) | the provider or UKey is busy<br>**Applicable version:** 26.0.0 and later |
| [12000026](../errorcode-huks.md#12000026-secure-element-fault) | the secure element is not available<br>**Applicable version:** 26.0.0 and later |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.exportKeyItem(keyAlias, emptyOptions, (error, data) => {
  if (error) {
    console.error(`callback: exportKeyItem failed`);
  } else {
    console.info(`callback: exportKeyItem success, data = ${JSON.stringify(data)}`);
  }
});

```


## exportKeyItem

```TypeScript
function exportKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>
```

Exports a key. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Key alias, which must be the same as the alias used when the key was generated. |
| options | HuksOptions | Yes | Empty object (leave this parameter empty). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult&gt; | Promise that returns the operation result. If the operation is successful,**outData** in **HuksReturnResult** is the exported public key. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | api is not supported |
| [12000001](../errorcode-huks.md#12000001-feature-not-supported) | algorithm mode is not supported |
| [12000002](../errorcode-huks.md#12000002-missing-key-algorithm-parameter) | algorithm param is missing<br>**Applicable version:** 9 - 11 |
| [12000003](../errorcode-huks.md#12000003-invalid-key-algorithm-parameter) | algorithm param is invalid<br>**Applicable version:** 9 - 11 |
| [12000004](../errorcode-huks.md#12000004-file-error) | operating file failed |
| [12000005](../errorcode-huks.md#12000005-ipc-error) | IPC communication failed |
| [12000006](../errorcode-huks.md#12000006-algorithm-library-operation-failed) | error occurred in crypto engine |
| [12000011](../errorcode-huks.md#12000011-the-entity-does-not-exist) | queried entity does not exist |
| [12000012](../errorcode-huks.md#12000012-external-error) | Device environment or input parameter abnormal |
| [12000014](../errorcode-huks.md#12000014-insufficient-memory) | memory is insufficient |
| [12000018](../errorcode-huks.md#12000018-invalid-input-parameter) | the group id specified by the access group tag is invalid<br>**Applicable version:** 23 and later |
| [12000020](../errorcode-huks.md#12000020-dependent-module-error) | the provider operation failed<br>**Applicable version:** 26.0.0 and later |
| [12000024](../errorcode-huks.md#12000024-device-or-resource-busy) | the provider or UKey is busy<br>**Applicable version:** 26.0.0 and later |
| [12000026](../errorcode-huks.md#12000026-secure-element-fault) | the secure element is not available<br>**Applicable version:** 26.0.0 and later |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};

huks.exportKeyItem(keyAlias, emptyOptions)
  .then((data) => {
    console.info(`promise: exportKeyItem success, data = ${JSON.stringify(data)}`);
  });

```

