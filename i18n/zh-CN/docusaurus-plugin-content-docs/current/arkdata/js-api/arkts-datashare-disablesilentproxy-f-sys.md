# disableSilentProxy

## disableSilentProxy

```TypeScript
function disableSilentProxy(context: Context, uri?: string): Promise<void>
```

Disables silent access. This API uses a promise to return the result. Observe the following when using this API: - The data provider calls this API to disable silent access. - Whether silent access is disabled is determined based on the return value of this API and the **isSilentProxyEnable** field in the [data_share_config.json](docroot://database/share-data-by-datashareextensionability-sys.md) file together. - If silent access is disabled for a URI using this API, the setting takes effect when the related **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the **data_share_config.json** file is used to determine whether to disable silent access.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the application. |
| uri | string | 否 | URI of the data, for which silent access is to be disabled.Global setting: If uri  is undefined or null or is not specified, all the previous settings will be cleared and silent access  will be disabled globally for the data provider.URI-specific setting: If a URI is specified, silent access  to the specified URI will be disabled.When datashareHelper APIs are called, the URI-specific setting is  preferentially applied. If no match is found, the global setting is applied.URI format:  datashare:///{bundleName}/{moduleName}/{storeName}/{tableName} |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 19] |
| 401 | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 15700011 | The URI does not exist. |

**示例：**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    let uri = "datashare:///com.acts.datasharetest/entry/DB00/TBL00?Proxy=true";
    let context = this.context;
    dataShare.disableSilentProxy(context, uri).then(() => {
      console.info("disableSilentProxy succeed");
    }).catch((err: BusinessError) => {
      console.error(`Failed to disable silent proxy. Code: ${err.code}, message: ${err.message}`);
    });
  }
}


```

