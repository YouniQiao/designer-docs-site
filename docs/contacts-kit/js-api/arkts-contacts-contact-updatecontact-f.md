# updateContact

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

<a id="updatecontact"></a>
## updateContact

```TypeScript
function updateContact(contact: Contact, callback: AsyncCallback<void>): void
```

Updates a contact. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [updateContact(context:](arkts-contacts-contact-updatecontact-f.md#updatecontact-1)

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(contact: Contact, callback: AsyncCallback<void>): void--><!--Device-contact-function updateContact(contact: Contact, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, the ID of the updated contact is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id, // Select the contact ID.
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});

```


<a id="updatecontact-1"></a>
## updateContact

```TypeScript
function updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>): void
```

Updates a contact. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>): void--><!--Device-contact-function updateContact(context: Context, contact: Contact, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, the ID of the updated contact is returned. If the operation fails, an error code is returned. |

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

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;

  contact.updateContact(context, {
    id: data[0].id, // Select the contact ID.
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});

```


<a id="updatecontact-2"></a>
## updateContact

```TypeScript
function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void
```

Updates a contact. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [updateContact(context:](arkts-contacts-contact-updatecontact-f.md#updatecontact-1)

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void--><!--Device-contact-function updateContact(contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, the ID of the updated contact is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';


// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  contact.updateContact({
    id: data[0].id, // Select the contact ID.
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});

```


<a id="updatecontact-3"></a>
## updateContact

```TypeScript
function updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void
```

Updates a contact. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void--><!--Device-contact-function updateContact(context: Context, contact: Contact, attrs: ContactAttributes, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Indicates the callback for getting the result of the call. If the operation is successful, the ID of the updated contact is returned. If the operation fails, an error code is returned. |

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

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  // Obtain the context within the component.
  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
  contact.updateContact(context, {
    id: data[0].id, // Select the contact ID.
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to update Contact. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeeded in updating Contact.');
  });
});

```


<a id="updatecontact-4"></a>
## updateContact

```TypeScript
function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>
```

Updates a contact. (The contact attribute list can be imported.) This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [updateContact(context:](arkts-contacts-contact-updatecontact-f.md#updatecontact-1)

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>--><!--Device-contact-function updateContact(contact: Contact, attrs?: ContactAttributes): Promise<void>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Select a contact via selectContacts.
contact.selectContacts().then((data) => {
  let promise = contact.updateContact({
    id: data[0].id, // Select the contact ID.
    name: {
      fullName: 'xxx'
    },
    phoneNumbers: [{
      phoneNumber: '138xxxxxxxx'
    }]
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then(() => {
    console.info('Succeeded in updating Contact.');
  });
});

```


<a id="updatecontact-5"></a>
## updateContact

```TypeScript
function updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise<void>
```

Updates a contact. (The contact attribute list can be imported.) This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.WRITE_CONTACTS

<!--Device-contact-function updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise<void>--><!--Device-contact-function updateContact(context: Context, contact: Contact, attrs?: ContactAttributes): Promise<void>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| contact | [Contact](arkts-contacts-contact-contact-c.md) | Yes | Indicates the contact information. The ID is mandatory and can be obtained through [selectContacts](arkts-contacts-contact-selectcontacts-f.md#selectcontacts-1). |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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

  // Select a contact via selectContacts.
  contact.selectContacts().then((data) => {
    // Obtain the context within the component.
    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
    let promise = contact.updateContact(context, {
      id: data[0].id, // Select the contact ID.
      name: {
        fullName: 'xxx'
      },
      phoneNumbers: [{
        phoneNumber: '138xxxxxxxx'
      }]
    }, {
      attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
    });
    promise.then(() => {
      console.info('Succeeded in updating Contact.');
    });
  });

```

