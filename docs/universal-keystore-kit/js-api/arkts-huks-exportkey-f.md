# exportKey

## exportKey

```TypeScript
function exportKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void
```

导出密钥，使用Callback方式回调异步返回的结果。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.exportKeyItem<sup>9+</sup>]huks.exportKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksReturnResult>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.exportKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |
| callback | AsyncCallback&lt;HuksResult> | Yes | 回调函数。当导出密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。HuksResult的  outData返回从密钥中导出的公钥。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
huks.exportKey(keyAlias, emptyOptions, (err, data) => {
});

```

## exportKey

```TypeScript
function exportKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>
```

导出密钥。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.exportKeyItem<sup>9+</sup>]huks.exportKeyItem(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.exportKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| options | HuksOptions | Yes | 空对象（此处传空即可）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksResult> | Promise对象，返回HuksResult。HuksResult的outData返回从HUKS中导出的公钥。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Set options to emptyOptions. */
let keyAlias = 'keyAlias';
let emptyOptions: huks.HuksOptions = {
  properties: []
};
let result = huks.exportKey(keyAlias, emptyOptions);

```

