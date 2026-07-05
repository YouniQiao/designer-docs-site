# Options

Defines the data operation performed by the UDMF. It includes three optional parameters: **intention**, **key**, and **visibility**. The three parameters can be left unspecified. For details, see the parameter description of the specific API.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## visibility

```TypeScript
visibility?: Visibility
```

Data visibility level. This parameter is effective only when specified during data writing. If unspecified, the default value **Visibility.ALL** is used.

**Type:** Visibility

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## key

```TypeScript
key?: string
```

Unique identifier of the data object in the UDMF, which can be obtained from the value returned by [insertData]unifiedDataChannel.insertData(options: Options, data: UnifiedData, callback: AsyncCallback<string>). The key consists of **udmf:/**, **intention**, **bundleName**, and **groupId** with a (/) in between, for example , **udmf://DataHub/com.ohos.test/0123456789**. **udmf:/** is fixed, **DataHub** is an enum of **intention**, **com.ohos.test** is the bundle name, and **0123456789** is a group ID randomly generated.

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## intention

```TypeScript
intention?: Intention
```

Type of the data channel related to the data operation.

**Type:** Intention

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

