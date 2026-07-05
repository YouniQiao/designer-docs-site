# Md

Provides APIs for message digest operations. Before using any API of the **Md** class, you must create an **Md** instance by using [createMd](arkts-cryptoarchitecture-createmd-f.md#createmd-1).

**Since:** 9

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## digest

```TypeScript
digest(callback: AsyncCallback<DataBlob>): void
```

Generates a message digest. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataBlob&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the message digest obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

function mdByCallback() {
  let md = cryptoFramework.createMd('SHA256');
  md.update({ data: new Uint8Array(buffer.from('mdTestMessage', 'utf-8').buffer) }, (err) => {
    md.digest((err, digestOutput) => {
      console.info('[Callback]: MD result: ' + digestOutput.data);
      console.info('[Callback]: MD len: ' + md.getMdLength());
    });
  });
}

```

## digest

```TypeScript
digest(): Promise<DataBlob>
```

Generates a message digest. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob&gt; | Promise used to return the message digest generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer } from '@kit.ArkTS';

async function mdByPromise() {
  let md = cryptoFramework.createMd('SHA256');
  await md.update({ data: new Uint8Array(buffer.from('mdTestMessage', 'utf-8').buffer) });
  let mdOutput = await md.digest();
  console.info('[Promise]: MD result: ' + mdOutput.data);
  console.info('[Promise]: MD len: ' + md.getMdLength());
}

```

## digestSync

```TypeScript
digestSync(): DataBlob
```

Generates a message digest. This API returns the result synchronously. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link digest}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Message digest generated. |

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
import { buffer } from '@kit.ArkTS';

async function mdBySync() {
  let md = cryptoFramework.createMd('SHA256');
  md.updateSync({ data: new Uint8Array(buffer.from('mdTestMessage', 'utf-8').buffer) });
  let mdOutput = md.digestSync();
  console.info('[Sync]: MD result: ' + mdOutput.data);
  console.info('[Sync]: MD len: ' + md.getMdLength());
}

```

## getMdLength

```TypeScript
getMdLength(): number
```

Obtains the message digest length, in bytes.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Return value:**

| Type | Description |
| --- | --- |
| number | Message digest length obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function getLength() {
  let md = cryptoFramework.createMd('SHA256');
  console.info('[Promise]: MD len: ' + md.getMdLength());
}

```

## update

```TypeScript
update(input: DataBlob, callback: AsyncCallback<void>): void
```

Updates the message digest status. This API uses an asynchronous callback to return the result. **update** must be used with **digest** together. **digest** is mandatory, and **update** is optional. > **NOTE** > > For details about the code for calling **update** multiple times in a message digest operation, see > [Generating an MD by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment) > .

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | Data to pass in. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

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

Updates the message digest status. This API uses a promise to return the result. **update** must be used with **digest** together. **digest** is mandatory, and **update** is optional. > **NOTE** > > For details about the code for calling **update** multiple times in a message digest operation, see > [Generating an MD by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment) > .

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | Data to pass in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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

Updates the message digest status. This API returns the result synchronously. **updateSync** must be used with **digestSync** together. **digestSync** is mandatory, and **updateSync** is optional. > **NOTE** > > For details about the code for calling **updateSync** multiple times in a message digest operation, see > [Generating an MD by Passing In Data by Segment](../../../../security/CryptoArchitectureKit/crypto-generate-message-digest.md#generating-an-md-by-passing-in-data-by-segment) > . <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | Data to pass in. |

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

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.MessageDigest
- API version 9 to 11: SystemCapability.Security.CryptoFramework

