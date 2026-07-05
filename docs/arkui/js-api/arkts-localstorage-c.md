# LocalStorage

LocalStorage具体UI使用说明，详见[LocalStorage(页面级UI状态存储)](docroot://ui/state-management/arkts-localstorage.md)

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## clear

```TypeScript
clear(): boolean
```

删除[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所有的属性。删除所有属性的前提是已经没有任何订阅者。如果有订阅者，clear不会生效并返回 false。如果没有订阅者则删除成功并返回true。 订阅者的含义参考[delete](arkts-localstorage-c.md#delete)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果LocalStorage中的属性已经没有任何订阅者，则删除成功，并返回true。否则返回false。 |

## constructor

```TypeScript
constructor(initializingProperties?: Object)
```

创建一个新的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。使用Object.keys(initializingProperties)返回 的属性和其数值，初始化LocalStorage实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| initializingProperties | Object | No |  |

## delete

```TypeScript
delete(propName: string): boolean
```

在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中删除propName对应的属性。在LocalStorage中删除属性的前提是该属性已经没有订 阅者，如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。 属性的订阅者为： 1. [@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink)、[@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)装饰的变量。 2. 通过[link](arkts-localstorage-c.md#link)、[prop](arkts-localstorage-c.md#prop)、[setAndLink](arkts-localstorage-c.md#setAndLink)、[setAndProp](arkts-localstorage-c.md#setAndProp)接口返回的[SubscribedAbstractProperty](arkts-subscribedabstractproperty-c-sys.md#SubscribedAbstractProperty)的实例。 如果想要删除这些订阅者，可以通过以下方式： 1. 删除@LocalStorageLink、@LocalStorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。 2. 对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用[aboutToBeDeleted](arkts-subscribedabstractproperty-c-sys.md#aboutToBeDeleted)接口。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果LocalStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。 |

## get

```TypeScript
get<T>(propName: string): T | undefined
```

获取propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中对应的属性值。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Value of the property corresponding to propName in LocalStorage, or undefined if  it does not exist. |

## GetShared

```TypeScript
static GetShared(): LocalStorage
```

获取当前stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。

**Since:** 9

**Deprecated since:** 10

**Substitute:** LocalStorage#getShared

**Model restriction:** This API can be used only in the Stage model.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LocalStorage | 返回LocalStorage实例。 |

## getShared

```TypeScript
static getShared(): LocalStorage
```

获取当前stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。 > **说明：** > 从API version 12开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getSharedLocalStorage](@link getSharedLocalStorage) > 来明确UI的执行上下文。

**Since:** 10

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#getSharedLocalStorage

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LocalStorage | 返回LocalStorage实例。 |

## has

```TypeScript
has(propName: string): boolean
```

判断propName对应的属性是否在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果propName对应的属性在LocalStorage中存在，则返回true。不存在则返回false。 |

## keys

```TypeScript
keys(): IterableIterator<string>
```

返回[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所有的属性名。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| IterableIterator&lt;string> | LocalStorage中所有的属性名。 |

## link

```TypeScript
link<T>(propName: string): SubscribedAbstractProperty<T>
```

如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例中存在，则返回与LocalStorage中propName对应属 性的双向绑定数据。 双向绑定数据的修改会被同步回LocalStorage中，LocalStorage会将变化同步到所有绑定该propName的数据和Component中。 如果LocalStorage中不存在propName，则返回undefined。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | SubscribedAbstractProperty 的实例，与LocalStorage中propName对应属性的双向绑定的数据，如果  LocalStorage中不存在对应的propName，则返回undefined。 |

## prop

```TypeScript
prop<S>(propName: string): SubscribedAbstractProperty<S>
```

如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回与LocalStorage中propName对应属性的 单向绑定数据。如果LocalStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回LocalStorage中。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;S> | SubscribedAbstractProperty 的实例，和LocalStorage中propName对应属性的单向绑定的数据。如果  LocalStorage中不存在对应的propName，则返回undefined。 |

## ref

```TypeScript
public ref<T>(propName: string): AbstractProperty<T> | undefined
```

如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回LocalStorage中propName对应属性的引 用。否则，返回undefined。 与[link](arkts-localstorage-c.md#link)的功能基本一致，但不需要手动释放返回的 [AbstractProperty<T>](@link AbstractProperty)类型的变量。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T> | A reference to the property in LocalStorage, or undefined if the  property does not exist. |

## set

```TypeScript
set<T>(propName: string, newValue: T): boolean
```

在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中设置propName对应属性的值。如果newValue的值和propName对应属性的值相 同，即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。 > **说明：** > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |
| newValue | T | Yes | 属性值，从API version 12开始可以为undefined或者null。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果LocalStorage中不存在propName对应的属性，返回false。设置成功返回true。 |

## setAndLink

```TypeScript
setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>
```

与[link](arkts-localstorage-c.md#link)接口类似，如果给定的propName在 [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用 defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其双向绑定数据。 > **说明：** > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version  12开始defaultValue可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;T> | SubscribedAbstractProperty 的实例，与LocalStorage中propName对应属性的双向绑定的数据。 |

## setAndProp

```TypeScript
setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>
```

与[prop](arkts-localstorage-c.md#prop)接口类似。如果propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md) 中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其单向绑定数据。 > **说明：** > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |
| defaultValue | S | Yes | 当propName在LocalStorage中不存在，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version 1  2开始defaultValue可以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| SubscribedAbstractProperty&lt;S> | SubscribedAbstractProperty 的实例，和LocalStorage中propName对应属性的单向绑定的数据。 |

## setAndRef

```TypeScript
public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>
```

与[ref](arkts-appstorage-c.md#ref)接口类似，如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中 存在，则返回LocalStorage中propName对应属性的引用。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，并返回其引用。 与[setAndLink](arkts-localstorage-c.md#setAndLink)的功能基本一致，但不需要手动释放返回的 [AbstractProperty<T>](@link AbstractProperty)类型的变量。 > **说明：** > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |
| defaultValue | T | Yes | 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，defaultValue可  以为null或undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| AbstractProperty&lt;T> | AbstractProperty 的实例，为LocalStorage中propName对应属性的引用。 |

## setOrCreate

```TypeScript
setOrCreate<T>(propName: string, newValue: T): boolean
```

如果propName已经在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，并且newValue和propName对应属性的值不同，则设置 propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。 如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个LocalStorage的键值对，如果想创建多个LocalStorage键值对，可以多次调用此方法。 > **说明：** > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、 > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、 > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及 > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | LocalStorage中的属性名。 |
| newValue | T | Yes | 属性值，从API version 12开始可以为undefined或者null。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果LocalStorage中存在propName，则更新其值为newValue，返回true。  如果LocalStorage中不存在propName，则创建propName，并初  始化其值为newValue，返回true。 |

## size

```TypeScript
size(): number
```

返回[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中的属性数量。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | LocalStorage中属性的数量。 |

