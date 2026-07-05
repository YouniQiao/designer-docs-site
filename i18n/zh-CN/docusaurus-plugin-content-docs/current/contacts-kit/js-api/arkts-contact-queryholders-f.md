# queryHolders

## queryHolders

```TypeScript
function queryHolders(callback: AsyncCallback<Array<Holder>>): void
```

查询所有创建联系人的应用信息类。使用callback异步回调。

**起始版本：** 7

**废弃版本：** 10

**替代接口：** contact.queryHolders(context:

**需要权限：** 

 ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Applications.ContactsData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Holder>> | 是 | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。 |

**示例：**

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

查询所有创建联系人的应用信息类。使用callback异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Applications.ContactsData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context。 |
| callback | AsyncCallback&lt;Array&lt;Holder>> | 是 | 回调函数。成功返回查询到的创建联系人应用信息的对象数组；失败返回具体的错误码信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { contact } from '@kit.ContactsKit';
import { common } from '@kit.AbilityKit';

// 请在组件内获取context。
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

查询所有创建联系人的应用信息类。使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 10

**替代接口：** contact.queryHolders(context:

**需要权限：** 

 ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Applications.ContactsData

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Holder>> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

**示例：**

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

查询所有创建联系人的应用信息类。使用Promise异步回调。

**起始版本：** 10

**需要权限：** 

 ohos.permission.READ_CONTACTS

**系统能力：** SystemCapability.Applications.ContactsData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Holder>> | Promise对象。返回查询到的创建联系人应用信息的对象数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: Mandatory parameters are left unspecified. |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryHolders(context);
promise.then((data) => {
  console.info(`Succeeded in querying Holders. data->${JSON.stringify(data)}`);
});

```

