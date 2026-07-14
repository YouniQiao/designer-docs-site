# LocalStorage

For details about how to use LocalStorage on the UI, see [LocalStorage: UI State Storage](../../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## GetShared

```TypeScript
static GetShared(): LocalStorage
```

Obtains the [LocalStorage](../../../../ui/state-management/arkts-localstorage.md) instance shared across the current stage.

**Since:** 9

**Deprecated since:** 10

**Substitutes:** [getShared](arkts-arkui-localstorage-c.md#getshared-1)

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LocalStorage | **LocalStorage** instance. |

## clear

```TypeScript
clear(): boolean
```

Deletes all properties from [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). The deletion is only successful if none of the properties in LocalStorage have any subscribers. If there are subscribers, this API does not take effect and **false** is returned. If there are no subscribers, the deletion is successful and **true** is returned. For details about the subscriber, see [delete](arkts-arkui-localstorage-c.md#delete-1).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

## constructor

```TypeScript
constructor(initializingProperties?: Object)
```

Creates a [LocalStorage](../../../../ui/state-management/arkts-localstorage.md) instance and initializes it using the properties and values returned by **Object.keys(initializingProperties)**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| initializingProperties | Object | No | Properties and values used to initialize the **LocalStorage**instance. **initializingProperties** cannot be set to **undefined**. The default value is an empty object,meaning no properties are added to LocalStorage during initialization. |

## delete

```TypeScript
delete(propName: string): boolean
```

Deletes the property corresponding to **propName** from [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). The deletion is only successful if the property has no subscribers. If there is a subscriber, the deletion fails and **false** is returned. If there are no subscribers, the deletion is successful and **true** is returned. The property subscribers include the following: 1. Variables decorated by [\@LocalStorageLink](../../../../ui/state-management/arkts-localstorage.md#localstoragelink) or [\@LocalStorageProp](../../../../ui/state-management/arkts-localstorage.md#localstorageprop) 2. Instances of [SubscribedAbstractProperty](arkts-arkui-subscribedabstractproperty-c.md) returned by [link](arkts-arkui-localstorage-c.md#link-1), [prop](arkts-arkui-localstorage-c.md#prop-1), [setAndLink](arkts-arkui-localstorage-c.md#setandlink-1), or [setAndProp](arkts-arkui-localstorage-c.md#setandprop-1) To delete these subscribers: 1. Remove the custom component containing \@LocalStorageLink or \@LocalStorageProp. For details, see [Custom Component Deletion](../../../../ui/state-management/arkts-page-custom-components-lifecycle.md#custom-component-deletion). 2. Call the [aboutToBeDeleted](arkts-arkui-subscribedabstractproperty-c.md#abouttobedeleted-1) API on instances of **SubscribedAbstractProperty** returned by **link**, **prop**, **setAndLink**, or **setAndProp**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** if the operation fails. |

## get

```TypeScript
get<T>(propName: string): T | undefined
```

Obtains the value of the property corresponding to **propName** from [LocalStorage](../../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Value of the property corresponding to **propName** in LocalStorage, or **undefined** ifit does not exist. |

## getShared

```TypeScript
static getShared(): LocalStorage
```

Obtains the [LocalStorage](../../../../ui/state-management/arkts-localstorage.md) instance shared across the current stage. > **NOTE** > Since API version 12, you can use the > [getSharedLocalStorage](@link getSharedLocalStorage) > API in [UIContext](../arkts-apis/arkts-arkui-uicontext.md) to specify the UI execution context.

**Since:** 10

**Deprecated since:** 18

**Substitutes:** getSharedLocalStorage

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LocalStorage | **LocalStorage** instance. |

## has

```TypeScript
has(propName: string): boolean
```

Checks whether the property corresponding to **propName** exists in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the property exists in LocalStorage; returns **false** otherwise. |

## keys

```TypeScript
keys(): IterableIterator<string>
```

Obtains all property names in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string&gt; | All property names in LocalStorage. |

## link

```TypeScript
link<T>(propName: string): SubscribedAbstractProperty<T>
```

Establishes a two-way data binding with the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage, this API returns the two-way bound data for the property. Any update of the data is synchronized back to LocalStorage, which then synchronizes the update to all data and components bound to the property. If the given property does not exist in LocalStorage, **undefined** is returned.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T&gt; | Returns the **SubscribedAbstractProperty&lt;T&gt;** instance if the givenproperty exists in LocalStorage; returns **undefined** otherwise. |

## prop

```TypeScript
prop<S>(propName: string): SubscribedAbstractProperty<S>
```

Establishes a one-way data binding with the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage, this API returns the one-way bound data for the property. If the given property does not exist in LocalStorage, **undefined** is returned. Updates of the one-way bound data are not synchronized back to LocalStorage.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;S&gt; | Instance of **SubscribedAbstractProperty&lt;S&gt;** and one-way bound data ofthe given property in LocalStorage. If the given property does not exist in LocalStorage, **undefined** isreturned. |

## ref

```TypeScript
public ref<T>(propName: string): AbstractProperty<T> | undefined
```

Returns a reference to the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the provided **propName** does not exist, this API returns **undefined**. This API is similar to [link](arkts-arkui-localstorage-c.md#link-1) but does not require manually releasing the returned variable of the [AbstractProperty](arkts-arkui-abstractproperty-i.md) type.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T&gt; | A reference to the property in LocalStorage, or **undefined** if theproperty does not exist. |

## set

```TypeScript
set<T>(propName: string, newValue: T): boolean
```

Sets the value of the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the value of **newValue** is the same as the current value of the property, no assignment is performed, and the state variable does not instruct the UI to update the value of the property. > **NOTE** > Since API version 12, LocalStorage supports > [Map](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type), > [Set](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type), > [Date](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**, > **undefined**, and [union](../../../../ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage) > types.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |
| newValue | T | Yes | Property value. Since API version 12, the value can be **null** or **undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **false** if the property corresponding to **propName** does not exist inLocalStorage. Returns **true** if the operation is successful. |

## setAndLink

```TypeScript
setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
```

Similar to the [link](arkts-arkui-localstorage-c.md#link-1) API, establishes a two-way data binding with the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage, this API returns the two-way bound data for the property. If the given property does not exist, this API creates and initializes the property in LocalStorage using **defaultValue** and returns its two-way bound data. > **NOTE** > Since API version 12, LocalStorage supports > [Map](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type), > [Set](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type), > [Date](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**, > **undefined**, and [union](../../../../ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage) > types.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |
| defaultValue | T | Yes | Default value used to initialize the property corresponding to **propName** inLocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or**undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T&gt; | Instance of **SubscribedAbstractProperty&lt;T&gt;** and two-way bound data ofthe given property in LocalStorage. |

## setAndProp

```TypeScript
setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>
```

Similar to the [prop](arkts-arkui-localstorage-c.md#prop-1) API, establishes a one-way data binding with the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage, this API returns the one-way bound data for the property. If the given property does not exist, this API creates and initializes the property in LocalStorage using **defaultValue** and returns its one-way bound data. > **NOTE** > Since API version 12, LocalStorage supports > [Map](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type), > [Set](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type), > [Date](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**, > **undefined**, and [union](../../../../ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage) > types.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |
| defaultValue | S | Yes | Default value used to initialize the property corresponding to **propName** inLocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or**undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;S&gt; | Instance of **SubscribedAbstractProperty&lt;S&gt;** and one-way bound data ofthe given property in LocalStorage. |

## setAndRef

```TypeScript
public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>
```

Similar to the [ref](arkts-arkui-appstorage-c.md#ref-1) API, returns a reference to the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). If the given property does not exist, this API creates and initializes the property in LocalStorage using **defaultValue** and returns its reference. This API is similar to [setAndLink](arkts-arkui-localstorage-c.md#setandlink-1) but does not require manually releasing the returned variable of the [AbstractProperty](arkts-arkui-abstractproperty-i.md) type. > **NOTE** > Since API version 12, LocalStorage supports > [Map](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type), > [Set](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type), > [Date](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**, > **undefined**, and [union](../../../../ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage) > types.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |
| defaultValue | T | Yes | Default value used to initialize the property corresponding to **propName** inLocalStorage if **propName** does not exist. The value can be **null** or **undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T&gt; | Instance of **AbstractProperty&lt;T&gt;**, which is a reference to the property inLocalStorage corresponding to **propName**. |

## setOrCreate

```TypeScript
setOrCreate<T>(propName: string, newValue: T): boolean
```

Sets the value of the property corresponding to **propName** in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md) to a new value, if the property exists and the new value is different from the current value. If the new value is the same as the current value of the property, no assignment is performed, and the state variable does not instruct the UI to update the value of the property. If the property does not exist, this API creates it with the value of **newValue**. This **setOrCreate** API can create only one LocalStorage key-value pair each time. To create multiple key-value pairs, call this API multiple times. > **NOTE** > Since API version 12, LocalStorage supports > [Map](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type), > [Set](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type), > [Date](../../../../ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**, > **undefined**, and [union](../../../../ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage) > types.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name in LocalStorage. |
| newValue | T | Yes | Property value. Since API version 12, the value can be **null** or **undefined**. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the property corresponding to **propName** exists and its value is updatedto the value of **newValue**,<br>or if **propName** is created with the value of **newValue**. |

## size

```TypeScript
size(): number
```

Obtains the number of properties in [LocalStorage](../../../../ui/state-management/arkts-localstorage.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of properties in LocalStorage. |

