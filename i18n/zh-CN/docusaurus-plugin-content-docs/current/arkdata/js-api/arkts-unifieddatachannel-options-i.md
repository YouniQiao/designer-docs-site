# Options

Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**, and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the specific API.

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## visibility

```TypeScript
visibility?: Visibility
```

Data visibility level. This parameter is effective only when specified during data writing. If unspecified, the default value **Visibility.ALL** is used.

**类型：** Visibility

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## key

```TypeScript
key?: string
```

Unique identifier of the data object in the UDMF, which can be obtained from the value returned by [insertData]unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>). The key consists of **udmf:/**, **intention**, **bundleName**, and **groupId** with a (/) in between, for example , **udmf://DataHub/com.ohos.test/0123456789**. **udmf:/** is fixed, **DataHub** is an enum of **intention**, **com.ohos.test** is the bundle name, and **0123456789** is a group ID randomly generated.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## intention

```TypeScript
intention?: Intention
```

Type of the data channel related to the data operation.

**类型：** Intention

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

