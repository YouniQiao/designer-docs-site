# queryContacts

## queryContacts

```TypeScript
function queryContacts(callback: AsyncCallback<Array<Contact>>): void
```

查询所有联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContacts(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

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

## queryContacts

```TypeScript
function queryContacts(context: Context, callback: AsyncCallback<Array<Contact>>): void
```

查询所有联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

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

## queryContacts

```TypeScript
function queryContacts(holder: Holder, callback: AsyncCallback<Array<Contact>>): void
```

根据holder查询所有联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContacts(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

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

## queryContacts

```TypeScript
function queryContacts(context: Context, holder: Holder, callback: AsyncCallback<Array<Contact>>): void
```

根据holder查询所有联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

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

## queryContacts

```TypeScript
function queryContacts(attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

根据attrs查询所有联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContacts(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

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

## queryContacts

```TypeScript
function queryContacts(context: Context, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

根据attrs查询所有联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

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

## queryContacts

```TypeScript
function queryContacts(holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

根据holder和attrs查询所有联系人。使用callback异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContacts(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

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

## queryContacts

```TypeScript
function queryContacts(context: Context, holder: Holder, attrs: ContactAttributes, callback: AsyncCallback<Array<Contact>>): void
```

根据holder和attrs查询所有联系人。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| holder | Holder | Yes | 创建联系人的应用信息类，如果传入参数为空则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | Yes | 联系人的属性列表，如果为空，则查询联系人的所有属性字段（包括姓名、电话、邮箱等）。 |
| callback | AsyncCallback&lt;Array&lt;Contact>> | Yes | 回调函数。成功返回查询到的联系人对象数组；失败返回具体的错误码信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

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

## queryContacts

```TypeScript
function queryContacts(holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

根据holder和attrs查询所有联系人。使用Promise异步回调。

**Since:** 7

**Deprecated since:** 10

**Substitute:** contact.queryContacts(context:

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| holder | Holder | No | 创建联系人的应用信息类，不传该参数，则默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | No | 联系人的属性列表，不传默认查询所有联系人属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact>> | Promise对象。返回查询到的联系人数组对象。 |

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

## queryContacts

```TypeScript
function queryContacts(context: Context, holder?: Holder, attrs?: ContactAttributes): Promise<Array<Contact>>
```

根据holder和attrs查询所有联系人。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.READ_CONTACTS

**System capability:** SystemCapability.Applications.ContactsData

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 应用上下文Context。 |
| holder | Holder | No | 创建联系人的应用信息类，如果为空，默认使用系统联系人应用查询。 |
| attrs | ContactAttributes | No | 联系人的属性列表，不传该参数默认查询所有联系人属性。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Contact>> | Promise对象。返回查询到的联系人数组对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**Example**

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

