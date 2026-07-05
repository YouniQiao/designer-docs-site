# Template

Defines the struct of the template used in a subscription.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## scheduler

```TypeScript
scheduler: string
```

Template scheduler SQL, which is embedded with a custom function. Currently, the **remindTimer** function is embedded. The **remindTimer** triggers a subscription-based update in specified scenarios. The scheduler SQL statement is triggered when: 1. The subscribed data is modified. 2. The first subscription is added to the corresponding database.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## predicates

```TypeScript
predicates: Record<string, string>
```

Predicates to use. When [**on**]dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>) is called, the predicates are used to generate data. This parameter applies only to RDB data storage.

**类型：** Record<string, string>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## update

```TypeScript
update?: string
```

Update SQL statement of a specified template. The default value is an empty string. When [on]dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>) is called, the **update** parameter is used to update data. This parameter applies only to RDB data storage.

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

