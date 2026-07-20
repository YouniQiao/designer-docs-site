# Kdf

Defines the key derivation function class. Before using APIs of this class, you need to create an instance of this class by using **createKdf(algName: string): Kdf**.

**Since:** 11

<!--Device-cryptoFramework-interface Kdf--><!--Device-cryptoFramework-interface Kdf-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Kdf
- API version 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## generateSecret

```TypeScript
generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void
```

Generates a key based on the specified key derivation parameters. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Kdf-generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void--><!--Device-Kdf-generateSecret(params: KdfSpec, callback: AsyncCallback<DataBlob>): void-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Kdf
- API version 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [KdfSpec](arkts-cryptoarchitecture-cryptoframework-kdfspec-i.md) | Yes | Parameters of the key derivation function. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DataBlob> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the derived key obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Invalid key length in the params;<br>2. Invalid info length in the params;<br>3. Invalid keySize in the params.<br>**Applicable version:** 22 and later |

**Example**

PBKDF2

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let spec: cryptoFramework.PBKDF2Spec = {
  algName: 'PBKDF2',
  password: '123456',
  salt: new Uint8Array(16),
  iterations: 10000,
  keySize: 32
};
let kdf = cryptoFramework.createKdf('PBKDF2|SHA256');
kdf.generateSecret(spec, (err, secret) => {
  if (err) {
    console.error(`key derivation failed, errCode: ${err.code}, errMsg: ${err.message}`);
    return;
  }
  console.info('key derivation output = ' + secret.data);
});

```

HKDF

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let spec: cryptoFramework.HKDFSpec = {
  algName: 'HKDF',
  key: '123456',
  salt: new Uint8Array(16),
  info: new Uint8Array(16),
  keySize: 32
};
let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');
kdf.generateSecret(spec, (err, secret) => {
  if (err) {
    console.error(`key derivation failed, errCode: ${err.code}, errMsg: ${err.message}`);
    return;
  }
  console.info('key derivation output = ' + secret.data);
});

```

## generateSecret

```TypeScript
generateSecret(params: KdfSpec): Promise<DataBlob>
```

Generates a key based on the specified key derivation parameters. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Kdf-generateSecret(params: KdfSpec): Promise<DataBlob>--><!--Device-Kdf-generateSecret(params: KdfSpec): Promise<DataBlob>-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Kdf
- API version 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [KdfSpec](arkts-cryptoarchitecture-cryptoframework-kdfspec-i.md) | Yes | Parameters of the key derivation function. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DataBlob> | Promise used to return the derived key. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Invalid key length in the params;<br>2. Invalid info length in the params;<br>3. Invalid keySize in the params.<br>**Applicable version:** 22 and later |

**Example**

PBKDF2

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let spec: cryptoFramework.PBKDF2Spec = {
  algName: 'PBKDF2',
  password: '123456',
  salt: new Uint8Array(16),
  iterations: 10000,
  keySize: 32
};
let kdf = cryptoFramework.createKdf('PBKDF2|SHA256');
let kdfPromise = kdf.generateSecret(spec);
kdfPromise.then(secret => {
  console.info('key derivation output = ' + secret.data);
}).catch((error: BusinessError) => {
  console.error(`key derivation failed: errCode: ${error.code}, errMsg: ${error.message}`);
});

```

HKDF

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let spec: cryptoFramework.HKDFSpec = {
  algName: 'HKDF',
  key: '123456',
  salt: new Uint8Array(16),
  info: new Uint8Array(16),
  keySize: 32
};
let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');
let kdfPromise = kdf.generateSecret(spec);
kdfPromise.then(secret => {
  console.info('key derivation output = ' + secret.data);
}).catch((error: BusinessError) => {
  console.error(`key derivation failed: errCode: ${error.code}, errMsg: ${error.message}`);
});

```

## generateSecretSync

```TypeScript
generateSecretSync(params: KdfSpec): DataBlob
```

Generates a key based on the specified key derivation parameters. This API returns the result synchronously.

<br><br>**NOTE**<br>It is recommended to prioritize the use of asynchronous API, {@link generateSecret}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Kdf-generateSecretSync(params: KdfSpec): DataBlob--><!--Device-Kdf-generateSecretSync(params: KdfSpec): DataBlob-End-->

**System capability:** SystemCapability.Security.CryptoFramework.Kdf

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [KdfSpec](arkts-cryptoarchitecture-cryptoframework-kdfspec-i.md) | Yes | Parameters of the key derivation function. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | The derived key. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Invalid key length in the params;<br>2. Invalid info length in the params;<br>3. Invalid keySize in the params.<br>**Applicable version:** 22 and later |

**Example**

PBKDF2

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let spec: cryptoFramework.PBKDF2Spec = {
  algName: 'PBKDF2',
  password: '123456',
  salt: new Uint8Array(16),
  iterations: 10000,
  keySize: 32
};
let kdf = cryptoFramework.createKdf('PBKDF2|SHA256');
let secret = kdf.generateSecretSync(spec);
console.info('[Sync]key derivation output = ' + secret.data);

```

HKDF

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let spec: cryptoFramework.HKDFSpec = {
  algName: 'HKDF',
  key: '123456',
  salt: new Uint8Array(16),
  info: new Uint8Array(16),
  keySize: 32
};
let kdf = cryptoFramework.createKdf('HKDF|SHA256|EXTRACT_AND_EXPAND');
let secret = kdf.generateSecretSync(spec);
console.info('[Sync]key derivation output = ' + secret.data);

```

## algName

```TypeScript
readonly algName: string
```

Indicates the algorithm name of the key derivation function.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Kdf-readonly algName: string--><!--Device-Kdf-readonly algName: string-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Kdf
- API version 11: SystemCapability.Security.CryptoFramework

