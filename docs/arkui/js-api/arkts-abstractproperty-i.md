# AbstractProperty

AbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中属性的引用。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## get

```TypeScript
get(): T
```

读取[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| T | AppStorage/LocalStorage中所引用属性的数据。 |

## info

```TypeScript
info(): string
```

读取[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的属性名。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | AppStorage/LocalStorage中所引用属性的属性名。 |

## set

```TypeScript
set(newValue: T): void
```

更新[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/ [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的数据，newValue必须是T类型，可以为null或undefined。 > **说明：** > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | 要更新的数据，可以为null或undefined。 |

