# queryContactsByEmail

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

<a id="querycontactsbyemail"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContactsByEmail(context:](arkts-contacts-contact-querycontactsbyemail-f.md#querycontactsbyemail-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(email: string, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| email | string | Yes | Email address of the contact. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-1"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(context: Context, email: string, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| email | string | Yes | Email address of the contact. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

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
contact.queryContactsByEmail(context, 'xxx@email.com', (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-2"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContactsByEmail(context:](arkts-contacts-contact-querycontactsbyemail-f.md#querycontactsbyemail-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(email: string, holder: Holder, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-3"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(context: Context, email: string, holder: Holder,
    callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email and holder. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder: Holder,
    callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder: Holder,
    callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

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
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-4"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContactsByEmail(context:](arkts-contacts-contact-querycontactsbyemail-f.md#querycontactsbyemail-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(email: string, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| email | string | Yes | Email address of the contact. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-5"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes,
    callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes,
    callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(context: Context, email: string, attrs: ContactAttributes,
    callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| email | string | Yes | Email address of the contact. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

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
contact.queryContactsByEmail(context, 'xxx@email.com', {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-6"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContactsByEmail(context:](arkts-contacts-contact-querycontactsbyemail-f.md#querycontactsbyemail-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-7"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries a contact based on the specified email, holder, and attributes. This API uses an asynchronous callback to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

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
contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts By Email. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-8"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

Queries a contact based on the specified email, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContactsByEmail(context:](arkts-contacts-contact-querycontactsbyemail-f.md#querycontactsbyemail-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>--><!--Device-contact-function queryContactsByEmail(email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | No | Application information for a contact. If this parameter is not specified, it is not used for contact filtering by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | Contact attribute list. If this parameter is not specified, all contact attributes are queried by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact&gt;&gt; | Promise used to return the result, which is an array of queried contacts. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryContactsByEmail('xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```


<a id="querycontactsbyemail-9"></a>
## queryContactsByEmail

```TypeScript
function queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

Queries a contact based on the specified email, holder, and attributes. This API uses a promise to return the result. The return result of this API includes only the **id**, **key**, and **Emails** attributes. If you want to query all information about a contact, you are advised to call [queryContact](arkts-contacts-contact-querycontact-f.md#querycontact-1)to query the contact based on the specified key.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>--><!--Device-contact-function queryContactsByEmail(context: Context, email: string, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| email | string | Yes | Email address of the contact. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | No | Application information for a contact. If this parameter is not specified, it is not used for contact filtering by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | Contact attribute list. If this parameter is not specified, all contact attributes are queried by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact&gt;&gt; | Promise used to return the result, which is an array of queried contacts. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsByEmail(context, 'xxx@email.com', {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_EMAIL, contact.Attribute.ATTR_NAME]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts By Email. data->${JSON.stringify(data)}`);
});

```

