# Asset

Represents asset (such as a file, image, or video) information.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## 导入模块

```TypeScript
import { commonType } from '@kit.ArkData';
```

## path

```TypeScript
path: string
```

Application sandbox path of the asset.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## modifyTime

```TypeScript
modifyTime: string
```

Time when the asset was last modified.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## size

```TypeScript
size: string
```

Size of the asset. If this field changes, the asset is considered to have changed.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## createTime

```TypeScript
createTime: string
```

Time when the asset was created.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## name

```TypeScript
name: string
```

Asset name.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## uri

```TypeScript
uri: string
```

Asset URI, which is an absolute path in the system.

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

## status

```TypeScript
status?: AssetStatus
```

Asset status. The default value is ASSET_NORMAL.

**类型：** AssetStatus

**起始版本：** 11

**系统能力：** SystemCapability.DistributedDataManager.CommonType

