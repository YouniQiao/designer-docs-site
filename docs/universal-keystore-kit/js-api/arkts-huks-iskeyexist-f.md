# isKeyExist

## isKeyExist

```TypeScript
function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void
```

判断密钥是否存在。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.isKeyItemExist<sup>9+</sup>]huks.isKeyItemExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.isKeyItemExist(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 所需查找的密钥的别名。 |
| options | HuksOptions | Yes | 用于查询时指定密钥的属性TAG。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。false代表密钥不存在，true代表密钥存在。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
huks.isKeyExist(keyAlias, emptyOptions, (err, data) => {
});

```

## isKeyExist

```TypeScript
function isKeyExist(keyAlias: string, options: HuksOptions): Promise<boolean>
```

判断密钥是否存在。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.isKeyItemExist<sup>9+</sup>]huks.isKeyItemExist(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.isKeyItemExist(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 所需查找的密钥的别名。 |
| options | HuksOptions | Yes | 用于查询时指定密钥的属性TAG。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。false代表密钥不存在，true代表密钥存在。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let result = huks.isKeyExist(keyAlias, emptyOptions);

```

