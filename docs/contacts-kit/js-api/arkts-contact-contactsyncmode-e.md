# ContactSyncMode

```TypeScript
enum ContactSyncMode
```

同步模式的类型。

**Since:** 26.0.0

**System capability:** SystemCapability.Applications.ContactsData

## MODE_INCREMENTAL

```TypeScript
MODE_INCREMENTAL = 1
```

表示将在数据库中插入或更新云端和本地之间不同的联系人。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

## MODE_CLOUD_BASED

```TypeScript
MODE_CLOUD_BASED = 2
```

表示所有本地联系人将被云联系人替换。 当使用云覆盖本地模式进行批量同步时，在第一次批量同步期间会删除所有本地联系人（第三方联系人除外）。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Applications.ContactsData

