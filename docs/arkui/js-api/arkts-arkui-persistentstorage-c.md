# PersistentStorage

For details about how to use PersistentStorage on the UI, see
[PersistentStorage: Persisting Application State](../../../../ui/state-management/arkts-persiststorage.md).

> **NOTE**

> Since API version 12, PersistentStorage supports **null** and **undefined**.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DeleteProp

```TypeScript
static DeleteProp(key: string): void
```

Performs the reverse operation of [PersistProp](arkts-arkui-persistentstorage-c.md#persistprop-1). Specifically, this API
deletes the property corresponding to the specified key from
[PersistentStorage](../../../../ui/state-management/arkts-persiststorage.md). Subsequent operations on
[AppStorage](../../../../ui/state-management/arkts-appstorage.md) do not affect data in PersistentStorage.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [deleteProp](arkts-arkui-persistentstorage-c.md#deleteprop-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Property name in PersistentStorage. |

## Keys

```TypeScript
static Keys(): Array<string>
```

Returns an array of all persisted property names.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [keys](arkts-arkui-persistentstorage-c.md#keys-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Returns an array of all persisted property names. |

## PersistProp

```TypeScript
static PersistProp<T>(key: string, defaultValue: T): void
```

Persists the property corresponding to **key** from [AppStorage](../../../../ui/state-management/arkts-appstorage.md)
to a file. This API is usually called before access to AppStorage.

The order for determining the type and value of a property is as follows:

1. If the property with the specified key is found in the
[PersistentStorage](../../../../ui/state-management/arkts-persiststorage.md) file, the corresponding property is
created in AppStorage and initialized with the value found in PersistentStorage.

2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
the property. If the property is found, it is persisted.

3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
**defaultValue**, and persisted.

According to the preceding initialization process, if the property exists in AppStorage, its value will be used,
overriding the value in the PersistentStorage file. Because AppStorage stores data in the memory, the property
value becomes nonpersistent.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [persistProp](arkts-arkui-persistentstorage-c.md#persistprop-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Property name. |
| defaultValue | T | Yes | Default value used for initialization if the specified **key** is not found inPersistentStorage and AppStorage. The value cannot be **null** or **undefined**. |

## PersistProps

```TypeScript
static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void
```

Persists multiple properties. This API is similar to [PersistProp](arkts-arkui-persistentstorage-c.md#persistprop-1), but allows
multiple properties to be persisted at once, making it suitable for initializing during application startup.

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [PersistProps](arkts-arkui-persistentstorage-c.md#persistprops-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| properties | {      key: string;      defaultValue: any;    }[] | Yes |  |

## deleteProp

```TypeScript
static deleteProp(key: string): void
```

Performs the reverse operation of [persistProp](arkts-arkui-persistentstorage-c.md#persistprop-1). Specifically, this API
deletes the property corresponding to the specified **key** from
[PersistentStorage](../../../../ui/state-management/arkts-persiststorage.md). Subsequent operations on
[AppStorage](../../../../ui/state-management/arkts-appstorage.md) do not affect data in PersistentStorage. This
operation removes the corresponding key from the persistence file. To persist the property again, you can call the
[persistProp](arkts-arkui-persistentstorage-c.md#persistprop-1) API.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Property name in PersistentStorage. |

## keys

```TypeScript
static keys(): Array<string>
```

Returns an array of all persisted property names.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string&gt; | Returns an array of all persisted property names. |

## persistProp

```TypeScript
static persistProp<T>(key: string, defaultValue: T): void
```

Persists the property corresponding to **key** from [AppStorage](../../../../ui/state-management/arkts-appstorage.md)
to a file. This API is usually called before access to AppStorage.

The order for determining the type and value of a property is as follows:

1. If the property with the specified key is found in the
[PersistentStorage](../../../../ui/state-management/arkts-persiststorage.md) file, the corresponding property is
created in AppStorage and initialized with the value found in PersistentStorage.

2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
the property. If the property is found, it is persisted.

3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
**defaultValue**, and persisted.

According to the preceding initialization process, if the property exists in AppStorage, its value will be used,
overriding the value in the PersistentStorage file. Because AppStorage stores data in the memory, the property
value becomes nonpersistent.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | Property name. |
| defaultValue | T | Yes | Default value used for initialization if the specified **key** is not found inPersistentStorage and AppStorage. Since API version 12, the value can be **null** or **undefined**. |

## persistProps

```TypeScript
static persistProps(props: PersistPropsOptions[]): void
```

Persists multiple properties. This API is similar to [persistProp](arkts-arkui-persistentstorage-c.md#persistprop-1), but allows
multiple properties to be persisted at once, making it suitable for initializing during application startup.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| props | PersistPropsOptions[] | Yes | Array of properties to persist. |

