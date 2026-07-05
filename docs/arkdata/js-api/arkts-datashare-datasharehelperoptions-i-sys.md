# DataShareHelperOptions

Represents the optional parameters of [DataShareHelper]dataShare.DataShareHelperOptions.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## isProxy

```TypeScript
isProxy?: boolean
```

Whether the [DataShareHelper]dataShare.DataShareHelperOptions is in proxy mode. The default value is **false**. If the value is **true**, the [DataShareHelper]dataShare.DataShareHelperOptions to be created is in proxy mode, and all operations will not open the data provider application unless the database does not exist. If the database does not exist, [createDataShareHelper]dataShare.createDataShareHelper(context: Context, uri: string, options: DataShareHelperOptions, callback: AsyncCallback<DataShareHelper>) will start the data provider to create a database.

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## waitTime

```TypeScript
waitTime?: int
```

Waiting time for starting the data provider process, in seconds. The default value is **2**.

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

