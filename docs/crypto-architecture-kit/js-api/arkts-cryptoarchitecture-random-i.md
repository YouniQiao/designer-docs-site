# Random

Provides APIs for random number operations. Before using any API of the **Random** class, you must create a **Random** instance by using [createRandom](arkts-cryptoarchitecture-createrandom-f.md#createrandom-1).

**Since:** 9

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## enableHardwareEntropy

```TypeScript
enableHardwareEntropy(): void
```

Enables the hardware entropy source.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.Security.CryptoFramework.Rand

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rand = cryptoFramework.createRandom();
rand.enableHardwareEntropy();
rand.generateRandom(12, (err, randData) => {
  if (err) {
    console.error(`[Callback] generate random failed, errCode: ${err.code}, errMsg: ${err.message}`);
  } else {
    console.info('[Callback]: generate random result: ' + randData.data);
    try {
      rand.setSeed(randData);
    } catch (error) {
      let e: BusinessError = error as BusinessError;
      console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
    }
  }
});

```

## generateRandom

```TypeScript
generateRandom(len: number, callback: AsyncCallback<DataBlob>): void
```

Generates a random number of the specified length. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| len | number | Yes | Length of the random number to generate, in bytes. The value range is [1, INT_MAX]. |
| callback | AsyncCallback&lt;DataBlob&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the random number obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let rand = cryptoFramework.createRandom();
rand.generateRandom(12, (err, randData) => {
  if (err) {
    console.error(`[Callback] generate random failed, errCode: ${err.code}, errMsg: ${err.message}`);
  } else {
    console.info('[Callback]: generate random result: ' + randData.data);
  }
});

```

## generateRandom

```TypeScript
generateRandom(len: number): Promise<DataBlob>
```

Generates a random number of the specified length. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| len | number | Yes | Length of the random number to generate, in bytes. The value range is [1, INT_MAX]. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob&gt; | Promise used to return the random number generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rand = cryptoFramework.createRandom();
let promiseGenerateRand = rand.generateRandom(12);
promiseGenerateRand.then(randData => {
  console.info('[Promise]: rand result: ' + randData.data);
}).catch((error: BusinessError) => {
  console.error(`[Promise] failed: errCode: ${error.code}, errMsg: ${error.message}`);
});

```

## generateRandomSync

```TypeScript
generateRandomSync(len: number): DataBlob
```

Generates a random number of the specified length. This API returns the result synchronously. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link generateRandom}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 10 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| len | number | Yes | Length of the random number to generate, in bytes. The value range is [1, INT_MAX]. |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Returns the generated random number. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rand = cryptoFramework.createRandom();
try {
  let randData = rand.generateRandomSync(12);
  if (randData != null) {
    console.info('[Sync]: rand result: ' + randData.data);
  } else {
    console.error('[Sync]: get rand result: fail.');
  }
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

## setSeed

```TypeScript
setSeed(seed: DataBlob): void
```

Sets a seed.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| seed | DataBlob | Yes | Seed to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

let rand = cryptoFramework.createRandom();
rand.generateRandom(12, (err, randData) => {
  if (err) {
    console.error(`[Callback] generate random failed, errCode: ${err.code}, errMsg: ${err.message}`);
  } else {
    console.info('[Callback]: generate random result: ' + randData.data);
    try {
      rand.setSeed(randData);
    } catch (error) {
      let e: BusinessError = error as BusinessError;
      console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
    }
  }
});

```

## algName

```TypeScript
readonly algName: string
```

Indicates the random generation algorithm name. Currently, only CTR_DRBG is supported.

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 10 to 11: SystemCapability.Security.CryptoFramework

