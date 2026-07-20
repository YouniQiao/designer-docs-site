# isKeyExist

## Modules to Import

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
```

## isKeyExist

```TypeScript
function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void
```

Checks whether a key exists. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** isKeyItemExist(keyAlias:

<!--Device-huks-function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void--><!--Device-huks-function isKeyExist(keyAlias: string, options: HuksOptions, callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Alias of the key to check. |
| options | [HuksOptions](arkts-universalkeystore-huks-huksoptions-i.md) | Yes | Options for checking the key. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | Callback used to return the result. The value **true** means the key exists; the value **false** means the opposite. |

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

<!--Device-huks-function isKeyExist(keyAlias: string, options: HuksOptions): Promise<boolean>--><!--Device-huks-function isKeyExist(keyAlias: string, options: HuksOptions): Promise<boolean>-End-->

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | Alias of the key to check. |
| options | [HuksOptions](arkts-universalkeystore-huks-huksoptions-i.md) | Yes | Options for checking the key. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the result. The value **true** means the key exists; the value **false** means the opposite. |

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

