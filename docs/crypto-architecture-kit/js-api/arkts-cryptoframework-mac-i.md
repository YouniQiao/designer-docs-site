# Mac

Mac类，调用Mac方法进行消息认证码（Message Authentication Code）计算。调用前，需要通过 [createMac]cryptoFramework.createMac(algName: string)构造Mac实例。

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.Mac

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## doFinal

```TypeScript
doFinal(callback: AsyncCallback<DataBlob>): void
```

完成MAC计算并获取MAC计算结果。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataBlob> | Yes | 回调函数。当MAC计算成功时，err为undefined，data为获取到的Mac计算结果；否则为  错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**Example**

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

完成MAC计算并获取MAC计算结果。使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob> | Promise对象，返回MAC计算结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

**Example**

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

通过同步方式完成MAC计算并获取MAC计算结果。 <br><br>**说明：** <br>建议优先使用异步API{@link doFinal}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。 因此建议在子线程中调用同步API，以避免阻塞主线程。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 返回MAC计算结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17620002 | 获取Native对象失败或参数转换失败。 |
| 17630001 | 密码操作错误。 |

**Example**

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
getMacLength(): int
```

获取Mac消息认证码的长度（字节数）。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回Mac计算结果的字节长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17630001 | 密码操作错误。 |

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

使用对称密钥初始化Mac计算。使用callback异步回调。init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选， update可选。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | SymKey | Yes | 对称密钥。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当HMAC初始化成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## init

```TypeScript
init(key: SymKey): Promise<void>
```

使用对称密钥初始化Mac计算。使用Promise异步回调。init、update、doFinal为三段式接口，需要成组使用。其中init和doFinal必选， update可选。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | SymKey | Yes | 对称密钥。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## initSync

```TypeScript
initSync(key: SymKey): void
```

使用对称密钥初始化Mac计算，通过同步方式获取结果。initSync、updateSync、doFinalSync为三段式接口，需要成组使用。其中initSync和 doFinalSync必选，updateSync可选。 <br><br>**说明：** <br>建议优先使用异步API{@link init}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。 因此建议在子线程中调用同步API，以避免阻塞主线程。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | SymKey | Yes | 对称密钥。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## update

```TypeScript
update(input: DataBlob, callback: AsyncCallback<void>): void
```

传入消息进行Mac更新消息认证码状态。使用callback异步回调。 > **说明：** > > HMAC算法多次调用update更新的代码示例详见[消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | 传入的消息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当HMAC更新成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## update

```TypeScript
update(input: DataBlob): Promise<void>
```

传入消息进行Mac更新消息认证码状态。使用Promise异步回调。 > **说明：** > > HMAC算法多次调用update更新的代码示例详见[消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | 传入的消息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## updateSync

```TypeScript
updateSync(input: DataBlob): void
```

传入消息进行Mac更新消息认证码状态，通过同步方式获取结果。 > **说明：** > > HMAC算法多次调用updateSync更新的代码示例详见 > [消息认证码计算](docroot://security/CryptoArchitectureKit/crypto-compute-hmac.md#分段hmac)。 <br><br>**说明：** <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。 因此建议在子线程中调用同步API，以避免阻塞主线程。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | 传入的消息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 非法入参。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数验证失败。 |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

## algName

```TypeScript
readonly algName: string
```

代表指定的摘要算法名。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.Mac

