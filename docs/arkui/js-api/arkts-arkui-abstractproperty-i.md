# AbstractProperty

Provides a reference to properties stored in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).

**Since:** 12

<!--Device-unnamed-declare interface AbstractProperty<T>--><!--Device-unnamed-declare interface AbstractProperty<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="get"></a>
## get

```TypeScript
get(): T
```

Reads data of the referenced property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AbstractProperty-get(): T--><!--Device-AbstractProperty-get(): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| T | Data of the referenced property in AppStorage or LocalStorage. |

<a id="info"></a>
## info

```TypeScript
info(): string
```

Reads the property name of the referenced property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AbstractProperty-info(): string--><!--Device-AbstractProperty-info(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Property name of the referenced property in AppStorage or LocalStorage. |

<a id="set"></a>
## set

```TypeScript
set(newValue: T): void
```

Updates the data of the referenced property in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The value of **newValue** must be of the **T** type and can be **null** or **undefined**.

> **NOTE**

> Since API version 12, AppStorage and LocalStorage support the Map, Set, Date types, as well as **null**,  
> **undefined**, and union types.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AbstractProperty-set(newValue: T): void--><!--Device-AbstractProperty-set(newValue: T): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| newValue | T | Yes | New data to update. The value can be **null** or **undefined**. |

