# Md

Md类，调用Md方法进行消息摘要（Message Digest）计算。调用前，需要通过[createMd]cryptoFramework.createMd构造Md实例。

**Since:** 9

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## digest

```TypeScript
digest(callback: AsyncCallback<DataBlob>): void
```

返回Md的计算结果。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;DataBlob> | Yes | 回调函数。当摘要计算成功时，err为undefined，data为获取到的摘要结果；否则为  错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

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

生成消息摘要。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob> | Promise对象，返回摘要计算结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17620001 | 内存操作失败。 |
| 17630001 | 密码操作错误。 |

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


<div class="container">
    <text class="TestTitle">Crypto test</text>
    <input class="btn" @click="MdTest">Md asynchronous test</input>
</div>


.container {
  width: 100%;
  height: 2000px;
  align-items: center;
  background-color: #fffefcfc;
  flex-direction: column;
  display: flex;
}

.TestTitle {
  width: 300px;
  height: 80px;
  text-align: center;
  background-color: white;
  color: #fff61515;
  font-size: 15fp;
}

.btn {
  width: 90%;
  height: 80px;
  text-align: center;
  background-color: #fff17f04;
  margin-top: 3px;
  color: white;
  font-size: 20fp;
}


import cryptoFramework from '@ohos.security.cryptoFramework';

function StringToUint8Array(str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    return new Uint8Array(arr);
}

let plainText = "123456";

function mdTest() {
    let inData = StringToUint8Array(plainText);
    let md = cryptoFramework.createMd('SHA256');
    console.info("createMd " + typeof md);

    md.update({data: inData}, function (finishErr) {
        if (finishErr) {
            console.error("Digest update failed. Code:" + finishErr.code + " : " + finishErr.message);
        } else {
            console.info("Digest update successfully.");
        }
    })

    md.digest(function (finishErr, digestOutput){
        if (finishErr) {
            console.error("Digest failed. Code:" + finishErr.code + " : " + finishErr.message);
        } else {
            console.info("Digest successfully:" + digestOutput);
        }
    })
}

export default {
    data: {
        result: ''
    },
    MdTest() {
        mdTest();
    }
};

```

## digestSync

```TypeScript
digestSync(): DataBlob
```

生成消息摘要，通过同步方式返回摘要计算结果。 <br><br>**说明：** <br>建议优先使用异步API{@link digest}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。 因此建议在子线程中调用同步API，以避免阻塞主线程。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 生成的消息摘要。 |

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

function mdBySync() {
  let md = cryptoFramework.createMd('SHA256');
  md.updateSync({ data: new Uint8Array(buffer.from('mdTestMessage', 'utf-8').buffer) });
  let mdOutput = md.digestSync();
  console.info('[Sync]: MD result: ' + mdOutput.data);
  console.info('[Sync]: MD len: ' + md.getMdLength());
}


<div class="container">
    <text class="TestTitle">Crypto test</text>
    <input class="btn" @click="MdTestSync">Md synchronous test</input>
</div>


.container {
  width: 100%;
  height: 2000px;
  align-items: center;
  background-color: #fffefcfc;
  flex-direction: column;
  display: flex;
}

.TestTitle {
  width: 300px;
  height: 80px;
  text-align: center;
  background-color: white;
  color: #fff61515;
  font-size: 15fp;
}

.btn {
  width: 90%;
  height: 80px;
  text-align: center;
  background-color: #fff17f04;
  margin-top: 3px;
  color: white;
  font-size: 20fp;
}


import cryptoFramework from '@ohos.security.cryptoFramework';

function StringToUint8Array(str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    return new Uint8Array(arr);
}

function mdTestSync() {
    let mdAlgName = 'SHA256';
    let message = 'mdTestMessage';
    let md = cryptoFramework.createMd(mdAlgName);
    md.updateSync({ data: StringToUint8Array(message) });
    let mdResult = md.digestSync();
    console.info('Digest successfully. result:' + mdResult.data);
    let mdLen = md.getMdLength();
    console.info("Digest successfully. md len: " + mdLen);
}

export default {
    data: {
        result: ''
    },
    MdTestSync() {
        mdTestSync();
    }
};

```

## getMdLength

```TypeScript
getMdLength(): int
```

获取消息摘要的字节长度，单位为字节。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Return value:**

| Type | Description |
| --- | --- |
| int | 消息摘要长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17630001 | 密码操作错误。 |

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

传入消息进行Md更新摘要状态。使用callback异步回调。update和digest为两段式接口，需要成组使用。其中digest必选，update可选。 > **说明：** > > Md算法多次调用update更新的代码示例详见开发指导 > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| input | DataBlob | Yes | 传入的消息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当摘要更新成功，err为undefined，否则为错误对象。 |

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

传入消息进行Md更新摘要状态。使用Promise异步回调。update和digest为两段式接口，需要成组使用。其中digest必选，update可选。 > **说明：** > > Md算法多次调用update更新的代码示例详见开发指导 > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

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

传入消息进行Md更新摘要状态，通过同步方式更新。updateSync和digestSync为两段式接口，需要成组使用。其中digestSync必选， updateSync可选。 > **说明：** > > Md算法多次调用updateSync更新的代码示例详见开发指导 > [分段摘要算法](docroot://security/CryptoArchitectureKit/crypto-generate-message-digest.md#分段摘要算法)。 <br><br>**说明：** <br>建议优先使用异步API{@link update}。同步API可能因系统繁忙、高负载等原因耗时较长而阻塞主线程。 因此建议在子线程中调用同步API，以避免阻塞主线程。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

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

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.CryptoFramework.MessageDigest

