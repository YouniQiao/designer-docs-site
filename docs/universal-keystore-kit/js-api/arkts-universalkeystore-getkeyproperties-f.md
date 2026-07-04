# getKeyProperties

## Modules to Import

```TypeScript
import { huks } from '@ohos.security.huks';
```

## getKeyProperties

```TypeScript
function getKeyProperties(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void
```

Obtains key properties. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getKeyItemProperties(

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Key alias, which must be the same as the alias used when the key was generated. |
| options | HuksOptions | Yes | Empty object (leave this parameter empty). |
| callback | AsyncCallback&lt;HuksResult&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the obtained **HuksResult**. Otherwise, **err** is an error object. |

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

Obtains key properties. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** getKeyItemProperties(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Key alias, which must be the same as the alias used when the key was generated. |
| options | HuksOptions | Yes | Empty object (leave this parameter empty). |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksResult&gt; | Promise that returns **HuksResult**. **properties** of **HuksResult** returns thekey parameters. |

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

