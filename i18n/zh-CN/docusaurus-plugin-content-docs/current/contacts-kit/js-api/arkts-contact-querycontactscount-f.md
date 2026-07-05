# queryContactsCount

## queryContactsCount

```TypeScript
function queryContactsCount(context: Context): Promise<int>
```

查询所有联系人的数量。使用Promise异步回调。

**起始版本：** 22

**需要权限：** 

 ohos.permission.READ_CONTACTS

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.ContactsData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | 应用上下文Context。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise对象。返回查询到的联系人数量。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 16700001 | General error. |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { contact } from '@kit.ContactsKit';

// 请在组件内获取context。
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let promise = contact.queryContactsCount(context);
promise.then((data) => {
  console.info(`Succeeded in querying ContactsCount. data->${JSON.stringify(data)}`);
});

```

