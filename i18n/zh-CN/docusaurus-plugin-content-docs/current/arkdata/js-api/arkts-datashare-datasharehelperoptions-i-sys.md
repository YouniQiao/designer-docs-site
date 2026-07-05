# DataShareHelperOptions

Represents the optional parameters of [DataShareHelper]dataShare.DataShareHelperOptions.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## isProxy

```TypeScript
isProxy?: boolean
```

Whether the [DataShareHelper]dataShare.DataShareHelperOptions is in proxy mode. The default value is **false**. If the value is **true**, the [DataShareHelper]dataShare.DataShareHelperOptions to be created is in proxy mode, and all operations will not open the data provider application unless the database does not exist. If the database does not exist, [createDataShareHelper]dataShare.createDataShareHelper(context: Context, uri: string, options: DataShareHelperOptions, callback: AsyncCallback<DataShareHelper>) will start the data provider to create a database.

**类型：** boolean

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## waitTime

```TypeScript
waitTime?: int
```

Waiting time for starting the data provider process, in seconds. The default value is **2**.

**类型：** int

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

