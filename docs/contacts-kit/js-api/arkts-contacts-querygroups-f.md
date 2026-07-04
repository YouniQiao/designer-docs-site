# queryGroups

## Modules to Import

```TypeScript
import { contact } from '@ohos.contact';
```

## queryGroups

```TypeScript
function queryGroups(callback: AsyncCallback<Array<Group>>): void
```

Queries all groups of a contact. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryGroups(context:

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Group&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation issuccessful, an array of queried groups is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups.. data->${JSON.stringify(data)}`);
});

```


## queryGroups

```TypeScript
function queryGroups(context: Context, callback: AsyncCallback<Array<Group>>): void
```

Queries all groups of a contact. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| callback | AsyncCallback&lt;Array&lt;Group&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation issuccessful, an array of queried groups is returned. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```


## queryGroups

```TypeScript
function queryGroups(holder: Holder, callback: AsyncCallback<Array<Group>>): void
```

Queries all groups of a contact based on the specified holder. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryGroups(context:

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | Yes | Application that creates the contacts.If the passed parameter is empty, the systemcontact application is used by default. |
| callback | AsyncCallback&lt;Array&lt;Group&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation issuccessful, an array of queried groups is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryGroups({
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```


## queryGroups

```TypeScript
function queryGroups(context: Context, holder: Holder, callback: AsyncCallback<Array<Group>>): void
```

Queries all groups of a contact based on the specified holder. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| holder | Holder | Yes | Application that creates the contacts.If the passed parameter is empty, the systemcontact application is used by default. |
| callback | AsyncCallback&lt;Array&lt;Group&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation issuccessful, an array of queried groups is returned. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.queryGroups(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Groups. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```


## queryGroups

```TypeScript
function queryGroups(holder?: Holder): Promise<Array<Group>>
```

Queries all groups of a contact based on the specified holder. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryGroups(context:

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | No | Application information for a contact. If this parameter is not specified, the systemcontact application is used by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Group&gt;&gt; | Promise used to return the result, which is an array of groups. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryGroups({
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```


## queryGroups

```TypeScript
function queryGroups(context: Context, holder?: Holder): Promise<Array<Group>>
```

Queries all groups of a contact based on the specified holder. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| holder | Holder | No | Application information for a contact. If this parameter is not specified, the systemcontact application is used by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Group&gt;&gt; | Promise used to return the result, which is an array of groups. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryGroups(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
});
promise.then((data) => {
  console.info(`Succeeded in querying Groups. data->${JSON.stringify(data)}`);
});

```

