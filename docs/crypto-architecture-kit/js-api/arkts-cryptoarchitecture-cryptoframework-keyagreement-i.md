# KeyAgreement

Provides APIs for key agreement operations. Before using any API of the **KeyAgreement** class, you must create a **KeyAgreement** instance by using [createKeyAgreement(algName: string): KeyAgreement](arkts-cryptoarchitecture-cryptoframework-createkeyagreement-f.md#createkeyagreement-1).

**Since:** 9

<!--Device-cryptoFramework-interface KeyAgreement--><!--Device-cryptoFramework-interface KeyAgreement-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.KeyAgreement
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## generateSecret

```TypeScript
generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void
```

Generates a shared secret based on the given private key and public key. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-KeyAgreement-generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void--><!--Device-KeyAgreement-generateSecret(priKey: PriKey, pubKey: PubKey, callback: AsyncCallback<DataBlob>): void-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.KeyAgreement
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | [PriKey](arkts-cryptoarchitecture-cryptoframework-prikey-i.md) | Yes | Private key used for key agreement. |
| pubKey | [PubKey](arkts-cryptoarchitecture-cryptoframework-pubkey-i.md) | Yes | Public key used for key agreement. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DataBlob> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the shared secret obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## generateSecret

```TypeScript
generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>
```

Generates a shared secret based on the given private key and public key. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-KeyAgreement-generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>--><!--Device-KeyAgreement-generateSecret(priKey: PriKey, pubKey: PubKey): Promise<DataBlob>-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.KeyAgreement
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | [PriKey](arkts-cryptoarchitecture-cryptoframework-prikey-i.md) | Yes | Private key used for key agreement. |
| pubKey | [PubKey](arkts-cryptoarchitecture-cryptoframework-pubkey-i.md) | Yes | Public key used for key agreement. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DataBlob> | Promise used to return the shared secret of key agreement. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## generateSecretSync

```TypeScript
generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob
```

Generates a shared secret based on the given private key and public key. This API returns the shared secret generated synchronously.

<br><br>**NOTE**<br>It is recommended to prioritize the use of asynchronous API, {@link generateSecret}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-KeyAgreement-generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob--><!--Device-KeyAgreement-generateSecretSync(priKey: PriKey, pubKey: PubKey): DataBlob-End-->

**System capability:** SystemCapability.Security.CryptoFramework.KeyAgreement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | [PriKey](arkts-cryptoarchitecture-cryptoframework-prikey-i.md) | Yes | Private key used for key agreement. |
| pubKey | [PubKey](arkts-cryptoarchitecture-cryptoframework-pubkey-i.md) | Yes | Public key used for key agreement. |

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | Returns the shared secret generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateSecret() {
  let eccGen = cryptoFramework.createAsyKeyGenerator('ECC256');
  let globalKeyPair = await eccGen.generateKeyPair();
  let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');
  keyAgreement.generateSecret(globalKeyPair.priKey, globalKeyPair.pubKey, (err, secret) => {
    if (err) {
      console.error(`keyAgreement failed, errCode: ${err.code}, errMsg: ${err.message}`);
      return;
    }
    console.info('keyAgreement output = ' + secret.data);
  });
}

```

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

async function testGenerateSecret() {
  let eccGen = cryptoFramework.createAsyKeyGenerator('ECC256');
  let globalKeyPair = await eccGen.generateKeyPair();
  let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');
  let keyAgreementPromise = keyAgreement.generateSecret(globalKeyPair.priKey, globalKeyPair.pubKey);
  keyAgreementPromise.then(secret => {
    console.info('keyAgreement output = ' + secret.data);
  }).catch((error: BusinessError) => {
    console.error(`keyAgreement failed: errCode: ${error.code}, errMsg: ${error.message}`);
  });
}

```

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

async function testGenerateSecretSync() {
  let eccGen = cryptoFramework.createAsyKeyGenerator('ECC256');
  let globalKeyPair = await eccGen.generateKeyPair();
  let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');
  let secret = keyAgreement.generateSecretSync(globalKeyPair.priKey, globalKeyPair.pubKey);
  console.info('[Sync]keyAgreement output = ' + secret.data);
}

```

## algName

```TypeScript
readonly algName: string
```

Indicates the algorithm name.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-KeyAgreement-readonly algName: string--><!--Device-KeyAgreement-readonly algName: string-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.KeyAgreement
- API version 9 to 11: SystemCapability.Security.CryptoFramework

