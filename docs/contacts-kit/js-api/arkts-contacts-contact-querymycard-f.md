# queryMyCard

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## queryMyCard

```TypeScript
function queryMyCard(callback: AsyncCallback<Contact>): void
```

Queries my card. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryMyCard(context:

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(callback: AsyncCallback<Contact>): void--><!--Device-contact-function queryMyCard(callback: AsyncCallback<Contact>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Contact> | Yes | Indicates the callback for getting the result of the call. If the operation is successful,information about my card is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Callback used to query my card.
contact.queryMyCard((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});

```


## queryMyCard

```TypeScript
function queryMyCard(context: Context, callback: AsyncCallback<Contact>): void
```

Queries my card. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(context: Context, callback: AsyncCallback<Contact>): void--><!--Device-contact-function queryMyCard(context: Context, callback: AsyncCallback<Contact>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Contact> | Yes | Indicates the callback for getting the result of the call. If the operation is successful,information about my card is returned. If the operation fails, an error code is returned. |

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
  contact.queryMyCard(context, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });

```


## queryMyCard

```TypeScript
function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

Queries my card. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryMyCard(context:

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void--><!--Device-contact-function queryMyCard(attrs: ContactAttributes, callback: AsyncCallback<Contact>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Contact> | Yes | Indicates the callback for getting the result of the call. If the operation is successful,information about my card is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

// Import the contact attribute list to query my card.
contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
}, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});

```


## queryMyCard

```TypeScript
function queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void
```

Queries my card. (The contact attribute list can be imported.) This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void--><!--Device-contact-function queryMyCard(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Contact>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | Yes | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Contact> | Yes | Indicates the callback for getting the result of the call. If the operation is successful,information about my card is returned. If the operation fails, an error code is returned. |

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
  contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  }, (err: BusinessError, data) => {
    if (err) {
      console.error(`Failed to query My Card. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });

```


## queryMyCard

```TypeScript
function queryMyCard(attrs?: ContactAttributes): Promise<Contact>
```

Queries my card. (The contact attribute list can be imported.) This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryMyCard(context:

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(attrs?: ContactAttributes): Promise<Contact>--><!--Device-contact-function queryMyCard(attrs?: ContactAttributes): Promise<Contact>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Contact> | Promise used to return the result, which is a contact in my card. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

// Callback used to import the contact attribute list to query my card.
let promise = contact.queryMyCard({
  attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
});
promise.then((data) => {
  console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
});

```


## queryMyCard

```TypeScript
function queryMyCard(context: Context, attrs?: ContactAttributes): Promise<Contact>
```

Queries my card. (The contact attribute list can be imported.) This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryMyCard(context: Context, attrs?: ContactAttributes): Promise<Contact>--><!--Device-contact-function queryMyCard(context: Context, attrs?: ContactAttributes): Promise<Contact>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| attrs | [ContactAttributes](arkts-contacts-contact-contactattributes-c.md) | No | List of contact attributes. If this parameter is empty, all attribute fields (including the name, phone number, and email address) of the contact are queried. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Contact> | Promise used to return the result, which is a contact in my card. |

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
  let promise = contact.queryMyCard(context, {
    attributes: [contact.Attribute.ATTR_NAME, contact.Attribute.ATTR_PHONE]
  });
  promise.then((data) => {
    console.info(`Succeeded in querying My Card. data->${JSON.stringify(data)}`);
  });

```

