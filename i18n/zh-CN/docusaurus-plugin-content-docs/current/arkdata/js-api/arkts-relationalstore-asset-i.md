# Asset

Represents the asset (such as a document, image, or video).

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## 导入模块

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

## path

```TypeScript
path: string
```

Path of an asset in the application sandbox.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## modifyTime

```TypeScript
modifyTime: string
```

Time when an asset is last modified.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## size

```TypeScript
size: string
```

Asset size. In the device-cloud sync mechanism, this field is one of the key bases for determining whether an asset is changed. Ensure that the storage format and value logic are consistent across the end-to-end link. It is recommended that all system nodes use the standard processing format (unit: byte; value: a non-negative integer) to avoid sync exceptions or misjudgment caused by format differences.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## createTime

```TypeScript
createTime: string
```

Time when an asset is created.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## name

```TypeScript
name: string
```

Asset name.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## uri

```TypeScript
uri: string
```

Asset URI, which is an absolute path in the system.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

## status

```TypeScript
status?: AssetStatus
```

Asset status. Default value: **ASSET_NORMAL**.

**类型：** AssetStatus

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

