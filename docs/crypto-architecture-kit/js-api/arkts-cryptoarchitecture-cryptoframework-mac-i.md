# Mac

Provides APIs for message authentication code (MAC) operations. Before using any API of the **Mac** class, you must create a **Mac** instance by using [createMac](arkts-cryptoarchitecture-cryptoframework-createmac-f.md#createmac-1).

**Since:** 9

<!--Device-cryptoFramework-interface Mac--><!--Device-cryptoFramework-interface Mac-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## doFinal

```TypeScript
doFinal(callback: AsyncCallback<DataBlob>): void
```

Finishes the MAC computation and obtains the MAC computation result. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-doFinal(callback: AsyncCallback<DataBlob>): void--><!--Device-Mac-doFinal(callback: AsyncCallback<DataBlob>): void-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<DataBlob> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**, and **data** is the MAC computation result obtained. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

For more HMAC operation examples, see [Generating an HMAC by Passing In Data by Segment](../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment).

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

function hmacByCallback() {
  let mac = cryptoFramework.createMac('SHA256');
  let keyBlob: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer) };
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES128');
  symKeyGenerator.convertKey(keyBlob, (err, symKey) => {
    mac.init(symKey, (err) => {
      mac.update({ data: new Uint8Array(buffer.from('hmacTestMessage', 'utf-8').buffer) }, (err) => {
        mac.doFinal((err, output) => {
          console.info('[Callback]: HMAC result: ' + output.data);
          console.info('[Callback]: MAC len: ' + mac.getMacLength());
        });
      });
    });
  });
}

```

## doFinal

```TypeScript
doFinal(): Promise<DataBlob>
```

Finishes the MAC computation and obtains the MAC computation result. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-doFinal(): Promise<DataBlob>--><!--Device-Mac-doFinal(): Promise<DataBlob>-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DataBlob> | Promise used to return the MAC computation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

For more HMAC operation examples, see [Generating an HMAC by Passing In Data by Segment](../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment).

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

async function hmacByPromise() {
  let mac = cryptoFramework.createMac('SHA256');
  let keyBlob: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer) };
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES128');
  let symKey = await symKeyGenerator.convertKey(keyBlob);
  await mac.init(symKey);
  await mac.update({ data: new Uint8Array(buffer.from('hmacTestMessage', 'utf-8').buffer) });
  let macOutput = await mac.doFinal();
  console.info('[Promise]: HMAC result: ' + macOutput.data);
  console.info('[Promise]: MAC len: ' + mac.getMacLength());
}

```

## doFinalSync

```TypeScript
doFinalSync(): DataBlob
```

Finishes the MAC computation. This API returns the result synchronously.

<br><br>**NOTE**<br>It is recommended to prioritize the use of asynchronous API, {@link doFinal}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-doFinalSync(): DataBlob--><!--Device-Mac-doFinalSync(): DataBlob-End-->

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | MAC computation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

For more HMAC operation examples, see [Generating an HMAC by Passing In Data by Segment](../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment).

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

function hmacBySync() {
  let mac = cryptoFramework.createMac('SHA256');
  let keyBlob: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from('12345678abcdefgh', 'utf-8').buffer) };
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES128');
  let symKey = symKeyGenerator.convertKeySync(keyBlob);
  mac.initSync(symKey);
  mac.updateSync({ data: new Uint8Array(buffer.from('hmacTestMessage', 'utf-8').buffer) });
  let macOutput = mac.doFinalSync();
  console.info('[Sync]: HMAC result: ' + macOutput.data);
  console.info('[Sync]: MAC len: ' + mac.getMacLength());
}

```

## getMacLength

```TypeScript
getMacLength(): number
```

Obtains the MAC length, in bytes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-getMacLength(): int--><!--Device-Mac-getMacLength(): int-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Return value:**

| Type | Description |
| --- | --- |
| number | MAC length obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

function testGetMacLength() {
  let mac = cryptoFramework.createMac('SHA256');
  console.info('Mac algName is: ' + mac.algName);
  let keyData = new Uint8Array([83, 217, 231, 76, 28, 113, 23, 219, 250, 71, 209, 210, 205, 97, 32, 159]);
  let keyBlob: cryptoFramework.DataBlob = { data: keyData };
  let symKeyGenerator = cryptoFramework.createSymKeyGenerator('AES128');
  let promiseConvertKey = symKeyGenerator.convertKey(keyBlob);
  promiseConvertKey.then(symKey => {
    let promiseMacInit = mac.init(symKey);
    return promiseMacInit;
  })
    .then(() => {
      let blob: cryptoFramework.DataBlob = { data: new Uint8Array([83]) };
      let promiseMacUpdate = mac.update(blob);
      return promiseMacUpdate;
    })
    .then(() => {
      let promiseMacDoFinal = mac.doFinal();
      return promiseMacDoFinal;
    })
    .then(macOutput => {
      console.info('[Promise]: HMAC result: ' + macOutput.data);
      let macLen = mac.getMacLength();
      console.info('MAC len: ' + macLen);
    })
    .catch((error: BusinessError) => {
      console.error(`[Promise] failed: errCode: ${error.code}, errMsg: ${error.message}`);
    });
}

```

## init

```TypeScript
init(key: SymKey, callback: AsyncCallback<void>): void
```

Initializes the MAC computation using a symmetric key. This API uses an asynchronous callback to return the result. **init**, **update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and **update** is optional.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-init(key: SymKey, callback: AsyncCallback<void>): void--><!--Device-Mac-init(key: SymKey, callback: AsyncCallback<void>): void-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [SymKey](arkts-cryptoarchitecture-cryptoframework-symkey-i.md) | Yes | Symmetric key obtained. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## init

```TypeScript
init(key: SymKey): Promise<void>
```

Initializes the MAC computation using a symmetric key. This API uses a promise to return the result. **init**,**update**, and **doFinal** must be used together. **init** and **doFinal** are mandatory, and **update** is optional.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-init(key: SymKey): Promise<void>--><!--Device-Mac-init(key: SymKey): Promise<void>-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [SymKey](arkts-cryptoarchitecture-cryptoframework-symkey-i.md) | Yes | Symmetric key obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## initSync

```TypeScript
initSync(key: SymKey): void
```

Initializes the MAC computation using a symmetric key. This API returns the result synchronously. **initSync**,**updateSync**, and **doFinalSync** must be used together. **initSync** and **doFinalSync** are mandatory, and **updateSync** is optional.

<br><br>**NOTE**<br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-initSync(key: SymKey): void--><!--Device-Mac-initSync(key: SymKey): void-End-->

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [SymKey](arkts-cryptoarchitecture-cryptoframework-symkey-i.md) | Yes | Symmetric key obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## update

```TypeScript
update(input: DataBlob, callback: AsyncCallback<void>): void
```

Updates the MAC status. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> For details about the sample code for calling **update** multiple times in an HMAC operation, see  
> [Generating an HMAC by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)  
> .

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-update(input: DataBlob, callback: AsyncCallback<void>): void--><!--Device-Mac-update(input: DataBlob, callback: AsyncCallback<void>): void-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | Yes | Data to pass in. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## update

```TypeScript
update(input: DataBlob): Promise<void>
```

Updates the MAC status. This API uses a promise to return the result.

> **NOTE**  
>  
> For details about the sample code for calling **update** multiple times in an HMAC operation, see  
> [Generating an HMAC by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)  
> .

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-update(input: DataBlob): Promise<void>--><!--Device-Mac-update(input: DataBlob): Promise<void>-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | Yes | Data to pass in. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## updateSync

```TypeScript
updateSync(input: DataBlob): void
```

Updates the MAC status. This API returns the result synchronously.

> **NOTE**  
>  
> For details about the sample code for calling **updateSync** multiple times in an HMAC operation, see  
> [Generating an HMAC by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-compute-hmac.md#generating-an-hmac-by-passing-in-data-by-segment)  
> .

<br><br>**NOTE**<br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore,it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-updateSync(input: DataBlob): void--><!--Device-Mac-updateSync(input: DataBlob): void-End-->

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | [DataBlob](../../apis-device-certificate-kit/arkts-apis/arkts-devicecertificate-cert-datablob-i.md) | Yes | Data to pass in. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## algName

```TypeScript
readonly algName: string
```

Indicates the algorithm name.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-Mac-readonly algName: string--><!--Device-Mac-readonly algName: string-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Mac
- API version 9 to 11: SystemCapability.Security.CryptoFramework

