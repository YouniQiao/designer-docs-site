# Asset

Represent the asset (such as a document, image, or video). **Asset** inherits from [lang.ISendable](../../apis-arkts/arkts-apis/arkts-lang-isendable-i.md#ISendable) and is used to implement cross-thread transfer of asset data. The asset data does not support **Datashare** APIs. Use [sendableRelationalStore.toSendableAsset]sendableRelationalStore.toSendableAsset to create an **Asset** instance.

**Inheritance:** Assetextends: lang.ISendable.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## Modules to Import

```TypeScript
import { sendableRelationalStore } from '@kit.ArkData';
```

## path

```TypeScript
path: string
```

Application sandbox path of the asset.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## modifyTime

```TypeScript
modifyTime: string
```

Time when the asset was last modified.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## size

```TypeScript
size: string
```

Size of the asset.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## createTime

```TypeScript
createTime: string
```

Time when the asset was created.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## name

```TypeScript
name: string
```

Asset name.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## uri

```TypeScript
uri: string
```

Asset URI, which is an absolute path in the system.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

## status

```TypeScript
status?: number
```

Asset status. For details, see [relationalStore.AssetStatus](arkts-relationalstore-assetstatus-e.md#AssetStatus). The default value is **relationalStore.AssetStatus.ASSET_NORMAL**.

**Type:** number

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

