# selectContact

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

<a id="selectcontact"></a>
## selectContact

```TypeScript
function selectContact(callback: AsyncCallback<Array<Contact>>): void
```

Selects a contact. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [selectContacts(callback:](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1)

<!--Device-contact-function selectContact(callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function selectContact(callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.Contacts

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, an array of selected contacts is returned. If the operation fails, an error code is returned. |

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


<a id="selectcontact-1"></a>
## selectContact

```TypeScript
function selectContact(): Promise<Array<Contact>>
```

Selects a contact. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [selectContacts()](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1)

<!--Device-contact-function selectContact(): Promise<Array<Contact>>--><!--Device-contact-function selectContact(): Promise<Array<Contact>>-End-->

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

