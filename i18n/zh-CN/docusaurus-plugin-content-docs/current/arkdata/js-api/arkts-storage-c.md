# Storage

**起始版本：** 3

**废弃版本：** 6

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core.Lite

## clear

```TypeScript
static clear(options?: ClearStorageOptions): void
```

Clears the stored content.

**起始版本：** 3

**废弃版本：** 6

**替代接口：** ohos.preferences.preferences.clear

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ClearStorageOptions | 否 | Indicates the target options. |

## delete

```TypeScript
static delete(options: DeleteStorageOptions): void
```

Deletes the stored content.

**起始版本：** 3

**废弃版本：** 6

**替代接口：** ohos.preferences.preferences.delete

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | DeleteStorageOptions | 是 | Indicates the target options. |

## get

```TypeScript
static get(options: GetStorageOptions): void
```

Reads the stored content.

**起始版本：** 3

**废弃版本：** 6

**替代接口：** ohos.preferences.preferences.get

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | GetStorageOptions | 是 | Indicates the target options. |

## set

```TypeScript
static set(options: SetStorageOptions): void
```

Modifies the stored content.

**起始版本：** 3

**废弃版本：** 6

**模型约束：** 此接口仅可在FA模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core.Lite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | SetStorageOptions | 是 | Indicates the target options. |

