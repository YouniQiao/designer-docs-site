# @ohos.data.dataShare

The **DataShare** module allows an application to manage its own data and share data with other applications on the same device.

**起始版本：** 9

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createDataProxyHandle](arkts-datashare-createdataproxyhandle-f.md#createDataProxyHandle-1) | Creates a **DataProxyHandle** instance. This API uses a promise to return the result. |
| <!--DelRow-->[createDataShareHelper](arkts-datashare-createdatasharehelper-f-sys.md#createDataShareHelper-1) | Creates a **DataShareHelper** instance. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[createDataShareHelper](arkts-datashare-createdatasharehelper-f-sys.md#createDataShareHelper-2) | Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses an asynchronous callback to return the result. |
| <!--DelRow-->[createDataShareHelper](arkts-datashare-createdatasharehelper-f-sys.md#createDataShareHelper-3) | Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses a promise to return the result. |
| <!--DelRow-->[disableSilentProxy](arkts-datashare-disablesilentproxy-f-sys.md#disableSilentProxy-1) | Disables silent access. This API uses a promise to return the result. Observe the following when using this API: - The data provider calls this API to disable silent access. - Whether silent access is disabled is determined based on the return value of this API and the **isSilentProxyEnable** field in the [data_share_config.json](docroot://database/share-data-by-datashareextensionability-sys.md) file together. - If silent access is disabled for a URI using this API, the setting takes effect when the related **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the **data_share_config.json** file is used to determine whether to disable silent access. |
| <!--DelRow-->[enableSilentProxy](arkts-datashare-enablesilentproxy-f-sys.md#enableSilentProxy-1) | Enables silent access. This API uses a promise to return the result. Observe the following when using this API: - The data provider calls this API to enable silent access. - Whether silent access is enabled is determined based on the return value of this API and the **isSilentProxyEnable** field in the [data_share_config.json](docroot://database/share-data-by-datashareextensionability-sys.md) file together. - If silent access is enabled for a URI using this API, the setting takes effect when the related **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the **data_share_config.json** file is used to determine whether to enable silent access. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ChangeInfo](arkts-datashare-changeinfo-i-sys.md) | Represents the data change information, including the data change type, URI of the data changed, and changed data content. |
| [DataProxyChangeInfo](arkts-datashare-dataproxychangeinfo-i.md) | Defines a struct for notifying subscribers of the shared configuration changes, including data change type, URI, and content. |
| [DataProxyConfig](arkts-datashare-dataproxyconfig-i.md) | Defines a struct for the data proxy configuration. |
| [DataProxyGetResult](arkts-datashare-dataproxygetresult-i.md) | Defines a struct for obtaining the batch operation result of shared configuration. |
| [DataProxyHandle](arkts-datashare-dataproxyhandle-i.md) | Defines the data proxy handle, which can be used to access or manage shared configuration information. Before calling an API provided by **DataProxyHandle**, you must create a **DataProxyHandle** instance using [createDataProxyHandle]{@link dataShare.createDataProxyHandle}. |
| [DataProxyResult](arkts-datashare-dataproxyresult-i.md) | Defines a struct for the batch operation result of shared configuration. |
| <!--DelRow-->[DataShareHelper](arkts-datashare-datasharehelper-i-sys.md) | Provides a **DataShareHelper** instance to access or manage data on the server. Before calling an API provided by **DataShareHelper**, you must create a **DataShareHelper** instance using [createDataShareHelper]{@link dataShare.createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>)} . |
| <!--DelRow-->[DataShareHelperOptions](arkts-datashare-datasharehelperoptions-i-sys.md) | Represents the optional parameters of [DataShareHelper]{@link dataShare.DataShareHelperOptions}. |
| <!--DelRow-->[OperationResult](arkts-datashare-operationresult-i-sys.md) | Defines the result of the operation for subscribing to or unsubscribing from the data changes or published data. |
| [ProxyData](arkts-datashare-proxydata-i.md) | Defines a struct for shared configurations. |
| <!--DelRow-->[PublishedDataChangeNode](arkts-datashare-publisheddatachangenode-i-sys.md) | Defines the subscription/unsubscription result of the changes in the published data. |
| <!--DelRow-->[PublishedItem](arkts-datashare-publisheditem-i-sys.md) | Defines the data to publish. |
| <!--DelRow-->[RdbDataChangeNode](arkts-datashare-rdbdatachangenode-i-sys.md) | Represents the RDB data change result. The data returned by the callback is not larger than 10 MB in size. |
| <!--DelRow-->[Template](arkts-datashare-template-i-sys.md) | Defines the struct of the template used in a subscription. |
| <!--DelRow-->[TemplateId](arkts-datashare-templateid-i-sys.md) | Defines the **TemplateId** struct. **TemplateId** is generated by [**addTemplate**]{@link dataShare.DataShareHelper.addTemplate} to identify a template. |
| <!--DelRow-->[UpdateOperation](arkts-datashare-updateoperation-i-sys.md) | Represents the batch update operation information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ChangeType](arkts-datashare-changetype-e-sys.md) | Enumerates the data change types. |
| [DataProxyErrorCode](arkts-datashare-dataproxyerrorcode-e.md) | Enumerates the status code returned by the batch operations of shared configuration. |
| [DataProxyMaxValueLength](arkts-datashare-dataproxymaxvaluelength-e.md) | The maximum length of {@link ProxyData#value}, {@link DataProxyChangeInfo#value}, {@link DataProxyGetResult#value}. |
| [DataProxyType](arkts-datashare-dataproxytype-e.md) | Enumerates the data proxy types. |
| <!--DelRow-->[SubscriptionType](arkts-datashare-subscriptiontype-e-sys.md) | Enumerates the data subscription types. |

