# queryContacts

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

<a id="querycontacts"></a>
## queryContacts

```TypeScript
function queryContacts(callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContacts(context:](arkts-contacts-contact-querycontacts-f.md#querycontacts-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Asynchronous callback used to query contacts.
contact.queryContacts((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-1"></a>
## queryContacts

```TypeScript
function queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
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
contact.queryContacts(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-2"></a>
## queryContacts

```TypeScript
function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified holder. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContacts(context:](arkts-contacts-contact-querycontacts-f.md#querycontacts-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Asynchronous callback used to query contacts.
contact.queryContacts({
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-3"></a>
## queryContacts

```TypeScript
function queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified holder. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
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
contact.queryContacts(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-4"></a>
## queryContacts

```TypeScript
function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified attributes. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContacts(context:](arkts-contacts-contact-querycontacts-f.md#querycontacts-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Asynchronous callback used to query contacts.
contact.queryContacts({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-5"></a>
## queryContacts

```TypeScript
function queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified attributes. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
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
contact.queryContacts(context, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-6"></a>
## queryContacts

```TypeScript
function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified holder and attributes. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContacts(context:](arkts-contacts-contact-querycontacts-f.md#querycontacts-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | Yes | Application that creates the contacts.If the passed parameter is empty, the system contact application is used by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;Contact&gt;&gt; | Yes | Indicates the callback for getting the result of the call.Returns the contact list which user select; returns empty contact list if user not select. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Asynchronous callback used to query contacts.
contact.queryContacts({
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-7"></a>
## queryContacts

```TypeScript
function queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

Queries all contacts based on the specified holder and attributes. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void--><!--Device-contact-function queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
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
contact.queryContacts(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Contacts. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
});

```


<a id="querycontacts-8"></a>
## queryContacts

```TypeScript
function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

Queries all contacts based on the specified holder and attributes. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [queryContacts(context:](arkts-contacts-contact-querycontacts-f.md#querycontacts-1)

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>--><!--Device-contact-function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | No | Application information for a contact. If this parameter is not specified, the system contact application is used by default. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | Contact attribute list. If this parameter is not specified, all contact attributes are queried by default. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact&gt;&gt; | Promise used to return the result, which is an array of queried contacts. |

**Example**

```TypeScript
  import { contact } from '@kit.ContactsKit';

  // Query all contacts based on the specified holder and attributes.
  let promise = contact.queryContacts({
    holderId: 1,
    bundleName: '',
    displayName: ''
  }, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying Contacts. data->${JSON.stringify(data)}`);
  });

```


<a id="querycontacts-9"></a>
## queryContacts

```TypeScript
function queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

Queries all contacts based on the specified holder and attributes. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>--><!--Device-contact-function queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| holder | [Holder](arkts-contacts-contact-holder-c.md) | No | Application information for a contact. If this parameter is not specified, the system contact application is used by default. |
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
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// Obtain the context within the component.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContacts(context, {
  holderId: 1,
  bundleName: '',
  displayName: ''
}, {
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying Contacts. data: ${JSON.stringify(data)}`);
});

```

