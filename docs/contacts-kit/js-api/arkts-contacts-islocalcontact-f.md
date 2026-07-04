# isLocalContact

## Modules to Import

```TypeScript
import { contact } from '@ohos.contact';
```

## isLocalContact

```TypeScript
function isLocalContact(id: number, callback: AsyncCallback<boolean>): void
```

Checks whether the ID of this contact is in the local address book. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** isLocalContact(context:

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Contact ID. Each contact corresponds to one ID. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, aBoolean value is returned. The value **true** indicates that the contact ID is in the local phonebook, and thevalue **false** indicates the opposite. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Check whether the contact whose ID is 1 is in the local address book.
contact.isLocalContact(1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});

```


## isLocalContact

```TypeScript
function isLocalContact(context: Context, id: number, callback: AsyncCallback<boolean>): void
```

Checks whether the ID of this contact is in the local address book. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| id | number | Yes | Contact ID. Each contact corresponds to one ID. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, aBoolean value is returned. The value **true** indicates that the contact ID is in the local phonebook, and thevalue **false** indicates the opposite. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.isLocalContact(context, 1, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to isLocalContact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});

```


## isLocalContact

```TypeScript
function isLocalContact(id: number): Promise<boolean>
```

Checks whether the ID of this contact is in the local address book. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** isLocalContact(context:

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | Contact ID. Each contact corresponds to one ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the contact IDis in the local phonebook, and the value **false** indicates the opposite. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Check whether the contact whose ID is 1 is in the local address book.
let promise = contact.isLocalContact(1);
promise.then((data) => {
  console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
});

```


## isLocalContact

```TypeScript
function isLocalContact(context: Context, id: number): Promise<boolean>
```

Checks whether the ID of this contact is in the local address book. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| id | number | Yes | Contact ID. Each contact corresponds to one ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Promise used to return the result. The value **true** indicates that the contact IDis in the local phonebook, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.Mandatory parameters are left unspecified. 2.Parameter verification failed. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.isLocalContact(context, 1);
  promise.then((data) => {
    console.info(`Succeeded in isLocalContact. data->${JSON.stringify(data)}`);
  });

```

