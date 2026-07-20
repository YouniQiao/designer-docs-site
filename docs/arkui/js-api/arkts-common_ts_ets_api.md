# common_ts_ets_api (System API)

## Summary

### Classes

| Name | Description |
| --- | --- |
| [AppStorage](arkts-arkui-common-ts-ets-api-appstorage-c.md) | For details about how to use AppStorage, see [AppStorage: Storing Application-wide UI State](../../../../ui/state-management/arkts-appstorage.md). |
| [Environment](arkts-arkui-common-ts-ets-api-environment-c.md) | For details about how to use environment parameters, see [Environment: Device Environment Query](../../../../ui/state-management/arkts-environment.md). |
| [LocalStorage](arkts-arkui-common-ts-ets-api-localstorage-c.md) | For details about how to use LocalStorage on the UI, see [LocalStorage: UI State Storage](../../../../ui/state-management/arkts-localstorage.md). |
| [PersistentStorage](arkts-arkui-common-ts-ets-api-persistentstorage-c.md) | For details about how to use PersistentStorage on the UI, see [PersistentStorage: Persisting Application State](../../../../ui/state-management/arkts-persiststorage.md). |
| [SubscribedAbstractProperty](arkts-arkui-common-ts-ets-api-subscribedabstractproperty-c.md) | Represents a synchronized property from [AppStorage](../../../../ui/state-management/arkts-appstorage.md) or [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [Environment](arkts-arkui-common-ts-ets-api-environment-c-sys.md) | For details about how to use environment parameters, see [Environment: Device Environment Query](../../../../ui/state-management/arkts-environment.md). |
| [PersistentStorage](arkts-arkui-common-ts-ets-api-persistentstorage-c-sys.md) | For details about how to use PersistentStorage on the UI, see [PersistentStorage: Persisting Application State](../../../../ui/state-management/arkts-persiststorage.md). |
| [SubscribaleAbstract](arkts-arkui-common-ts-ets-api-subscribaleabstract-c-sys.md) | Defines the Subscribale base class. |
| [SubscribedAbstractProperty](arkts-arkui-common-ts-ets-api-subscribedabstractproperty-c-sys.md) | Represents a synchronized property from [AppStorage](../../../../ui/state-management/arkts-appstorage.md) or [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). |
| [SyncedPropertyOneWay](arkts-arkui-common-ts-ets-api-syncedpropertyoneway-c-sys.md) | Inherits from [SubscribedAbstractProperty&lt;T&gt;](arkts-arkui-common-ts-ets-api-subscribedabstractproperty-c-sys.md). Represents a property with one-way synchronization. |
| [SyncedPropertyTwoWay](arkts-arkui-common-ts-ets-api-syncedpropertytwoway-c-sys.md) | Inherits from [SubscribedAbstractProperty&lt;T&gt;](arkts-arkui-common-ts-ets-api-subscribedabstractproperty-c-sys.md). Represents a property with two-way synchronization. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AbstractProperty](arkts-arkui-common-ts-ets-api-abstractproperty-i.md) | Provides a reference to properties stored in [AppStorage](../../../../ui/state-management/arkts-appstorage.md) or [LocalStorage](../../../../ui/state-management/arkts-localstorage.md). |
| [EnvPropsOptions](arkts-arkui-common-ts-ets-api-envpropsoptions-i.md) | Defines a key-value pair object used to specify environment variable names and their default values, passed as a parameter to [envProps](arkts-arkui-common-ts-ets-api-environment-c.md#envprops-1). |
| [PersistPropsOptions](arkts-arkui-common-ts-ets-api-persistpropsoptions-i.md) | Defines a key-value pair object used to specify persistent properties and their default values, passed as a parameter to [persistProps](arkts-arkui-common-ts-ets-api-persistentstorage-c.md#persistprops-1). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [IPropertySubscriber](arkts-arkui-common-ts-ets-api-ipropertysubscriber-i-sys.md) | Provides an interface for attribute subscribers. |
| [ISinglePropertyChangeSubscriber](arkts-arkui-common-ts-ets-api-isinglepropertychangesubscriber-i-sys.md) | Inherits from [IPropertySubscriber](arkts-arkui-common-ts-ets-api-ipropertysubscriber-i-sys.md). Represents a subscriber that subscribes to changes in a property value. |
<!--DelEnd-->

