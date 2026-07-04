# selectContact

## Modules to Import

```TypeScript
import { contact } from '@ohos.contact';
```

## selectContact

```TypeScript
function selectContact(callback: AsyncCallback<Array<Contact>>): void
```

Selects a contact. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** selectContacts(callback:

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation issuccessful, an array of selected contacts is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Open the UI to select a contact.
contact.selectContact((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to select Contact. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});

```


## selectContact

```TypeScript
function selectContact(): Promise<Array<Contact>>
```

Selects a contact. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [selectContacts()](arkts-contacts-selectcontacts-f.md#selectcontacts-2)

**System capability:** SystemCapability.Applications.Contacts

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact&gt;&gt; | Promise used to return the result, which is an array of selected contacts. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Open the UI to select a contact.
let promise = contact.selectContact();
promise.then((data) => {
  console.info(`Succeeded in selecting Contact. data->${JSON.stringify(data)}`);
});

```

