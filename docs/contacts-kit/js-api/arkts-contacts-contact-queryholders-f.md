# queryHolders

## Modules to Import

```TypeScript
import { contact } from '@kit.ContactsKit';
```

## queryHolders

```TypeScript
function queryHolders(callback: AsyncCallback<Array<Holder>>): void
```

Queries all applications that have created contacts. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryHolders(context:

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryHolders(callback: AsyncCallback<Array<Holder>>): void--><!--Device-contact-function queryHolders(callback: AsyncCallback<Array<Holder>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<Holder>> | Yes | Indicates the callback for getting the result of the call. If the operation is successful, an array of the queried applications is returned. If the operation fails, an error code is returned. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';

contact.queryHolders((err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```


## queryHolders

```TypeScript
function queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void
```

Queries all applications that have created contacts. This API uses an asynchronous callback to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void--><!--Device-contact-function queryHolders(context: Context, callback: AsyncCallback<Array<Holder>>): void-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<Holder>> | Yes | Indicates the callback for getting the result of the call. If the operation is successful, an array of the queried applications is returned. If the operation fails, an error code is returned. |

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
contact.queryHolders(context, (err: BusinessError, data) => {
  if (err) {
    console.error(`Failed to query Holders. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```


## queryHolders

```TypeScript
function queryHolders(): Promise<Array<Holder>>
```

Queries all applications that have created contacts. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** queryHolders(context:

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryHolders(): Promise<Array<Holder>>--><!--Device-contact-function queryHolders(): Promise<Array<Holder>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<Holder>> | Promise used to return the result, which is an array of queried applications. |

**Example**

```TypeScript
import { contact } from '@kit.ContactsKit';

let promise = contact.queryHolders();
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```


## queryHolders

```TypeScript
function queryHolders(context: Context): Promise<Array<Holder>>
```

Queries all applications that have created contacts. This API uses a promise to return the result.

**Since:** 10

**Required permissions:** ohos.permission.READ_CONTACTS

<!--Device-contact-function queryHolders(context: Context): Promise<Array<Holder>>--><!--Device-contact-function queryHolders(context: Context): Promise<Array<Holder>>-End-->

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<Holder>> | Promise used to return the result, which is an array of queried applications. |

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
let promise = contact.queryHolders(context);
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

