# deleteKey

## deleteKey

```TypeScript
function deleteKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void
```

删除密钥。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.deleteKeyItem<sup>9+</sup>]huks.deleteKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.deleteKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应为生成key时传入的别名。 |
| options | HuksOptions | Yes | 用于删除时指定密钥的属性TAG。 |
| callback | AsyncCallback&lt;HuksResult> | Yes | 回调函数。当删除密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
huks.deleteKey(keyAlias, emptyOptions, (err, data) => {
});

```

## deleteKey

```TypeScript
function deleteKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>
```

删除密钥。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.deleteKeyItem<sup>9+</sup>]huks.deleteKeyItem(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.deleteKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应为生成key时传入的别名。 |
| options | HuksOptions | Yes | 用于删除时指定密钥的属性TAG。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksResult> | Promise对象，返回HuksResult。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from "@kit.BasicServicesKit"

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let result = huks.deleteKey(keyAlias, emptyOptions).then((data) => {
  console.info('delete key success');
}).catch((err: BusinessError) => {
  console.error("Failed to delete the key. Error code: " + err.code + " Error message: " + err.message);
});

```

