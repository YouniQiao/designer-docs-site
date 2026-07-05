# PersistentStorage

PersistentStorage具体UI使用说明，详见[PersistentStorage(持久化存储UI状态)](docroot://ui/state-management/arkts-persiststorage.md) > **说明：** > 从API version 12开始，PersistentStorage支持null、undefined。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(appStorage: AppStorage, storage: Storage)
```

构造函数参数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appStorage | AppStorage | Yes | 应用存储。 |
| storage | Storage | Yes | 存储。 |

## DeleteProp

```TypeScript
static DeleteProp(key: string): void
```

[PersistProp](arkts-persistentstorage-c.md#PersistProp)的逆向操作。将key对应的属性从 [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)中删除，后续 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作，对PersistentStorage不会再有影响。

**Since:** 7

**Deprecated since:** 10

**Substitute:** PersistentStorage#deleteProp

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | PersistentStorage中的属性名。 |

## deleteProp

```TypeScript
static deleteProp(key: string): void
```

[persistProp](arkts-persistentstorage-c.md#persistProp)的逆向操作。将key对应的属性从PersistentStorage中删除，后续 [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作，对 [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)不会再有影响。该操作会将对应的key从持久化文件中删除，如果希望再次持久化，可以再 次调用[persistProp](arkts-persistentstorage-c.md#persistProp)接口。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | PersistentStorage中的属性名。 |

## Keys

```TypeScript
static Keys(): Array<string>
```

返回所有持久化属性的属性名的数组。

**Since:** 7

**Deprecated since:** 10

**Substitute:** PersistentStorage#keys

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回所有持久化属性的属性名的数组。 |

## keys

```TypeScript
static keys(): Array<string>
```

返回所有持久化属性的属性名的数组。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回所有持久化属性的属性名的数组。 |

## PersistProp

```TypeScript
static PersistProp<T>(key: string, defaultValue: T): void
```

将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。 确定属性的类型和值的顺序如下： 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。 3. 如果AppStorage也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。

**Since:** 7

**Deprecated since:** 10

**Substitute:** PersistentStorage#persistProp

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 属性名。 |
| defaultValue | T | Yes | 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。不允许为null或undefined。 |

## persistProp

```TypeScript
static persistProp<T>(key: string, defaultValue: T): void
```

将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。 确定属性的类型和值的顺序如下： 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。 3. 如果AppStorage中也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 属性名。 |
| defaultValue | T | Yes | 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。从API version 12开始允许为null或undefined。 |

## PersistProps

```TypeScript
static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void
```

行为和[PersistProp](arkts-persistentstorage-c.md#PersistProp)类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。

**Since:** 7

**Deprecated since:** 10

**Substitute:** PersistentStorage#PersistProps

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| properties | {
      key: string;
      defaultValue: any;
    }[] | Yes |  |

## persistProps

```TypeScript
static persistProps(props: PersistPropsOptions[]): void
```

行为和[persistProp](arkts-persistentstorage-c.md#persistProp)类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | PersistPropsOptions[] | Yes | 持久化数组。 |

