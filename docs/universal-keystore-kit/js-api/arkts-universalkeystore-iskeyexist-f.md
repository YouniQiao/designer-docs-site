# isKeyExist

## Modules to Import

```TypeScript
import { huks } from '@ohos.security.huks';
```

## isKeyExist

```TypeScript
function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void
```

Checks whether a key exists. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isKeyItemExist(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Alias of the key to check. |
| options | HuksOptions | Yes | Options for checking the key. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Callback used to return the result. The value **true** means the keyexists; the value **false** means the opposite. |

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

Checks whether a key exists. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isKeyItemExist(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Alias of the key to check. |
| options | HuksOptions | Yes | Options for checking the key. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** means the key exists; the value**false** means the opposite. |

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

