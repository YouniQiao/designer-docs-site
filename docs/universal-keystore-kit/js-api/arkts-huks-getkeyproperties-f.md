# getKeyProperties

## getKeyProperties

```TypeScript
function getKeyProperties(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void
```

获取密钥属性。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.getKeyItemProperties<sup>9+</sup>]huks.getKeyItemProperties( keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult> ) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.getKeyItemProperties(

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |
| callback | AsyncCallback&lt;HuksResult> | Yes | 回调函数。当获取密钥属性成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
huks.getKeyProperties(keyAlias, emptyOptions, (err, data) => {
});

```

## getKeyProperties

```TypeScript
function getKeyProperties(keyAlias: string, options: HuksOptions): Promise<HuksResult>
```

获取密钥属性。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.getKeyItemProperties<sup>9+</sup>]huks.getKeyItemProperties(keyAlias: string, options: HuksOptions) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.getKeyItemProperties(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksResult> | Promise对象，返回HuksResult。HuksResult的properties返回密钥参数。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let result = huks.getKeyProperties(keyAlias, emptyOptions);

```

