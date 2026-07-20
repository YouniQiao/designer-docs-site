# @ohos.data.dataShare

The **DataShare** module allows an application to manage its own data and share data with other applications on the same device.

**Since:** 20

<!--Device-unnamed-declare namespace dataShare--><!--Device-unnamed-declare namespace dataShare-End-->

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createDataProxyHandle](arkts-arkdata-datashare-createdataproxyhandle-f.md#createdataproxyhandle-1) | Creates a **DataProxyHandle** instance. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createDataShareHelper](arkts-arkdata-datashare-createdatasharehelper-f-sys.md#createdatasharehelper-1) | Creates a **DataShareHelper** instance. This API uses an asynchronous callback to return the result. |
| [createDataShareHelper](arkts-arkdata-datashare-createdatasharehelper-f-sys.md#createdatasharehelper-2) | Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses an asynchronous callback to return the result. |
| [createDataShareHelper](arkts-arkdata-datashare-createdatasharehelper-f-sys.md#createdatasharehelper-3) | Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses a promise to return the result. |
| [disableSilentProxy](arkts-arkdata-datashare-disablesilentproxy-f-sys.md#disablesilentproxy-1) | Disables silent access. This API uses a promise to return the result.Observe the following when using this API:- The data provider calls this API to disable silent access. - Whether silent access is disabled is determined based on the return value of this API and the **isSilentProxyEnable** field in the [data_share_config.json](../../../../database/share-data-by-datashareextensionability-sys.md) file together. - If silent access is disabled for a URI using this API, the setting takes effect when the related **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the **data_share_config.json** file is used to determine whether to disable silent access. |
| [enableSilentProxy](arkts-arkdata-datashare-enablesilentproxy-f-sys.md#enablesilentproxy-1) | Enables silent access. This API uses a promise to return the result.Observe the following when using this API:- The data provider calls this API to enable silent access. - Whether silent access is enabled is determined based on the return value of this API and the **isSilentProxyEnable** field in the [data_share_config.json](../../../../database/share-data-by-datashareextensionability-sys.md) file together. - If silent access is enabled for a URI using this API, the setting takes effect when the related **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the **data_share_config.json** file is used to determine whether to enable silent access. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [DataProxyChangeInfo](arkts-arkdata-datashare-dataproxychangeinfo-i.md) | Defines a struct for notifying subscribers of the shared configuration changes, including data change type, URI,and content. |
| [DataProxyConfig](arkts-arkdata-datashare-dataproxyconfig-i.md) | Defines a struct for the data proxy configuration. |
| [DataProxyGetResult](arkts-arkdata-datashare-dataproxygetresult-i.md) | Defines a struct for obtaining the batch operation result of shared configuration. |
| [DataProxyHandle](arkts-arkdata-datashare-dataproxyhandle-i.md) | Defines the data proxy handle, which can be used to access or manage shared configuration information. Before calling an API provided by **DataProxyHandle**, you must create a **DataProxyHandle** instance using [createDataProxyHandle](arkts-arkdata-datashare-createdataproxyhandle-f.md#createdataproxyhandle-1). |
| [DataProxyResult](arkts-arkdata-datashare-dataproxyresult-i.md) | Defines a struct for the batch operation result of shared configuration. |
| [ProxyData](arkts-arkdata-datashare-proxydata-i.md) | Defines a struct for shared configurations. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ChangeInfo](arkts-arkdata-datashare-changeinfo-i-sys.md) | Represents the data change information, including the data change type, URI of the data changed, and changed data content. |
| [DataShareHelper](arkts-arkdata-datashare-datasharehelper-i-sys.md) | Provides a **DataShareHelper** instance to access or manage data on the server. Before calling an API provided by **DataShareHelper**, you must create a **DataShareHelper** instance using [createDataShareHelper](arkts-arkdata-datashare-createdatasharehelper-f-sys.md#createdatasharehelper-1). |
| [DataShareHelperOptions](arkts-arkdata-datashare-datasharehelperoptions-i-sys.md) | Represents the optional parameters of [DataShareHelper](arkts-arkdata-datashare-datasharehelperoptions-i-sys.md). |
| [OperationResult](arkts-arkdata-datashare-operationresult-i-sys.md) | Defines the result of the operation for subscribing to or unsubscribing from the data changes or published data. |
| [PublishedDataChangeNode](arkts-arkdata-datashare-publisheddatachangenode-i-sys.md) | Defines the subscription/unsubscription result of the changes in the published data. |
| [PublishedItem](arkts-arkdata-datashare-publisheditem-i-sys.md) | Defines the data to publish. |
| [RdbDataChangeNode](arkts-arkdata-datashare-rdbdatachangenode-i-sys.md) | Represents the RDB data change result. The data returned by the callback is not larger than 10 MB in size. |
| [Template](arkts-arkdata-datashare-template-i-sys.md) | Defines the struct of the template used in a subscription. |
| [TemplateId](arkts-arkdata-datashare-templateid-i-sys.md) | Defines the **TemplateId** struct. **TemplateId** is generated by [**addTemplate**](arkts-arkdata-datashare-datasharehelper-i-sys.md#addtemplate-1) to identify a template. |
| [UpdateOperation](arkts-arkdata-datashare-updateoperation-i-sys.md) | Represents the batch update operation information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [DataProxyErrorCode](arkts-arkdata-datashare-dataproxyerrorcode-e.md) | Enumerates the status code returned by the batch operations of shared configuration. |
| [DataProxyMaxValueLength](arkts-arkdata-datashare-dataproxymaxvaluelength-e.md) | The maximum length of {@link ProxyData#value}, {@link DataProxyChangeInfo#value}, {@link DataProxyGetResult#value}. |
| [DataProxyType](arkts-arkdata-datashare-dataproxytype-e.md) | Enumerates the data proxy types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ChangeType](arkts-arkdata-datashare-changetype-e-sys.md) | Enumerates the data change types. |
| [SubscriptionType](arkts-arkdata-datashare-subscriptiontype-e-sys.md) | Enumerates the data subscription types. |
<!--DelEnd-->

