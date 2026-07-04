# addContact

## Modules to Import

```TypeScript
import { contact } from '@ohos.contact';
```

## addContact

```TypeScript
function addContact(contact: Contact, callback: AsyncCallback<number>): void
```

Adds a contact. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** addContact(context:

**Required permissions:** ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | Contact | Yes | Indicates the contact information. |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, theID of the added contact is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
contact.addContact(context, {
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});

```


## addContact

```TypeScript
function addContact(context: Context, contact: Contact, callback: AsyncCallback<number>): void
```

Adds a contact. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_CONTACTS

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| contact | Contact | Yes | Indicates the contact information. |
| callback | AsyncCallback&lt;number&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, theID of the added contact is returned. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
  import { BusinessError } from '@kit.BasicServicesKit';
  import { common } from '@kit.AbilityKit';
  import { contact } from '@kit.ContactsKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to add Contact. Code:${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });

```


## addContact

```TypeScript
function addContact(contact: Contact): Promise<number>
```

Adds a contact. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** addContact(context:

**Required permissions:** ohos.permission.WRITE_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | Contact | Yes | Indicates the contact information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result, which is the ID of the added contact. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Promise used to return the added data.
let promise = contact.addContact({
  name: {
    fullName: 'xxx'
  },
  phoneNumbers: [{
    phoneNumber: '138xxxxxxxx'
  }]
});
// Promise used to return resolve if the execution is successful.
promise.then((data) => {
  console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
});

```


## addContact

```TypeScript
function addContact(context: Context, contact: Contact): Promise<number>
```

Adds a contact. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_CONTACTS

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| contact | Contact | Yes | Indicates the contact information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result, which is the ID of the added contact. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
  import { contact } from '@kit.ContactsKit';
  import { common } from '@kit.AbilityKit';

  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  let promise = contact.addContact(context, {
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  });
  promise.then((data) => {
    console.info(`Succeeded in adding Contact. data: ${JSON.stringify(data)}`);
  });

```

