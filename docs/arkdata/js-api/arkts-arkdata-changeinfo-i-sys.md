# ChangeInfo (System API)

Represents the data change information, including the data change type, URI of the data changed, and changed data
content.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## type

```TypeScript
type: ChangeType
```

Data change type.

**Type:** ChangeType

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## uri

```TypeScript
uri: string
```

URI of the data changed.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## values

```TypeScript
values: Array<ValuesBucket>
```

Changed data.

**Type:** Array<ValuesBucket>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

