# @ohos.arkui.StateManagement

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppStorageV2](arkts-arkui-arkui-statemanagement-appstoragev2-c.md) | For details about how to use AppStorageV2, see [AppStorageV2: Storing Application-wide UI State](../../../../ui/state-management/arkts-new-appstoragev2.md). |
| [Binding](arkts-arkui-arkui-statemanagement-binding-c.md) | Represents the generic class for read-only data binding, which can bind data of any type. |
| [ConnectOptions](arkts-arkui-arkui-statemanagement-connectoptions-c.md) | Defines the parameter type for **globalConnect**. |
| [ConnectOptionsCollections](arkts-arkui-arkui-statemanagement-connectoptionscollections-c.md) | Defines the parameter type for the [globalConnect](PersistenceV2.globalConnect&lt;T extends CollectionType&lt;S&gt;, S extends object&gt;( type: ConnectOptionsCollections&lt;T, S&gt; \| ConnectOptions&lt;T&gt; ))API. **ConnectOptionsCollections** is inherited from [ConnectOptions\&lt;T\&gt;](arkts-arkui-arkui-statemanagement-connectoptions-c.md). You can use the **ConnectOptionsCollections** input parameter to persist container data (such as **Array\&lt;S&gt;**).The following shows the examples of **StorageDefaultCreator\&lt;T&gt;** and **StorageDefaultCreator\&lt;S&gt;**: |
| [MutableBinding](arkts-arkui-arkui-statemanagement-mutablebinding-c.md) | Represents a generic class for mutable data binding, which allows the read and write operations on the bound value and provides complete **get** and **set** accessors. |
| [PersistenceV2](arkts-arkui-arkui-statemanagement-persistencev2-c.md) | Inherits from [AppStorageV2](arkts-arkui-arkui-statemanagement-appstoragev2-c.md). For details, see [PersistenceV2: Persisting Application State](../../../../ui/state-management/arkts-new-persistencev2.md). |
| [UIUtils](arkts-arkui-arkui-statemanagement-uiutils-c.md) | Provides APIs for handling data transformations related to state management. |

### Interfaces

| Name | Description |
| --- | --- |
| [CustomComponentContext](arkts-arkui-arkui-statemanagement-customcomponentcontext-i.md) | The **CustomComponentContext** class provides access to component-level services, including the reuse pool. You can obtain an instance through [UIUtils.getCustomComponentContext](arkts-arkui-arkui-statemanagement-uiutils-c.md#getcustomcomponentcontext-1). |
| [CustomComponentLifecycle](arkts-arkui-arkui-statemanagement-customcomponentlifecycle-i.md) | **CustomComponentLifecycle** monitors the lifecycle changes of a custom component. |
| [CustomComponentLifecycleObserver](arkts-arkui-arkui-statemanagement-customcomponentlifecycleobserver-i.md) | Observes lifecycle status changes of a custom component,and triggers the lifecycle callback in the listener when detecting lifecycle status changes. |
| [DecoratorInfo](arkts-arkui-arkui-statemanagement-decoratorinfo-i.md) | Defines the decorator and component information associated with the observable object. |
| [ElementInfo](arkts-arkui-arkui-statemanagement-elementinfo-i.md) | Defines information about the components associated with the observable object, including system components and custom components. |
| [IReusableInfo](arkts-arkui-arkui-statemanagement-ireusableinfo-i.md) | The **IReusableInfo** API provides information about the current number and maximum number of reusable components managed by the reuse pool. |
| [IReusePool](arkts-arkui-arkui-statemanagement-ireusepool-i.md) | The **IReusePool** API provides the features related to the global reuse pool of a custom component. |
| [MonitorOptions](arkts-arkui-arkui-statemanagement-monitoroptions-i.md) | Defines the optional parameters for [addMonitor](arkts-arkui-arkui-statemanagement-uiutils-c.md#addmonitor-1), which are used to configure the callback type and whether to enable the wildcard capability. |
| [ObservedResult](arkts-arkui-arkui-statemanagement-observedresult-i.md) | Provides the result of whether the object can be observed. |
| [TypeConstructor](arkts-arkui-arkui-statemanagement-typeconstructor-i.md) | Represents a class constructor. |
| [TypeConstructorWithArgs](arkts-arkui-arkui-statemanagement-typeconstructorwithargs-i.md) | Represents a class constructor that accepts arbitrary arguments. |

### Enums

| Name | Description |
| --- | --- |
| [CustomComponentLifecycleState](arkts-arkui-arkui-statemanagement-customcomponentlifecyclestate-e.md) | Current lifecycle status of a custom component. |

### Types

| Name | Description |
| --- | --- |
| [CollectionType](arkts-arkui-collectiontype-t.md) | Defines the types of persistent collection data supported by **globalConnect** using the generic type of the input parameter of **globalConnect**. |
| [GetterCallback](arkts-arkui-gettercallback-t.md) | Defines a callback used to obtain a value. |
| [MonitorCallback](arkts-arkui-monitorcallback-t.md) | Listener callback function of the [IMonitor](../arkts-components/arkts-arkui-common-imonitor-i.md) type. |
| [PersistenceErrorCallback](arkts-arkui-persistenceerrorcallback-t.md) | Defines a callback used to return the cause of the persistence failure. |
| [ReusableComponentConstructor](arkts-arkui-reusablecomponentconstructor-t.md) | Function for initializing the reusable custom component. |
| [SetterCallback](arkts-arkui-settercallback-t.md) | Defines a callback used to set a value. |
| [StorageDefaultCreator](arkts-arkui-storagedefaultcreator-t.md) | Obtains the default constructor. |
| [TaskCallback](arkts-arkui-taskcallback-t.md) | Defines a synchronous callback. |
| [TypeDecorator](arkts-arkui-typedecorator-t.md) | Defines the attribute decorator, which is used to decorate attributes of the custom class in a nested class. |

