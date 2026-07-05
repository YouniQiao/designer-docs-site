# createDataShareHelper (System API)

## Modules to Import

```TypeScript
import { dataShare } from '@ohos.data.dataShare';
```

## createDataShareHelper

```TypeScript
function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void
```

Creates a **DataShareHelper** instance. This API uses an asynchronous callback to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the application. |
| uri | string | Yes | URI of the server application to connect. |
| callback | AsyncCallback&lt;DataShareHelper&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the **DataShareHelper** instance created. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 19 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types. |
| [15700010](../errorcode-datashare.md#15700010-failed-to-create-a-datasharehelper) | The DataShareHelper fails to be initialized. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    let uri = "datashare:///com.samples.datasharetest.DataShare";
    let dataShareHelper: dataShare.DataShareHelper | undefined = undefined;
    let context = this.context;
    try {
      dataShare.createDataShareHelper(context, uri, (err:BusinessError, data:dataShare.DataShareHelper) => {
        if (err !== undefined) {
          console.error(`createDataShareHelper error: code: ${err.code}, message: ${err.message} `);
          return;
        }
        console.info("createDataShareHelper succeed, data : " + data);
        dataShareHelper = data;
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`createDataShareHelper error: code: ${code}, message: ${message} `);
    };
  };
};

```


## createDataShareHelper

```TypeScript
function createDataShareHelper(
    context: Context,
    uri: string,
    options: DataShareHelperOptions,
    callback: AsyncCallback<DataShareHelper>
  ): void
```

Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the application context. |
| uri | string | Yes | Indicates the path of the file to open. |
| options | DataShareHelperOptions | Yes | Indicates the optional config. |
| callback | AsyncCallback&lt;DataShareHelper&gt; | Yes | {DataShareHelper}: The dataShareHelper for consumer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 19 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types. |
| [15700010](../errorcode-datashare.md#15700010-failed-to-create-a-datasharehelper) | The DataShareHelper fails to be initialized. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    let uri = "datashareproxy://com.samples.datasharetest.DataShare";
    let dataShareHelper: dataShare.DataShareHelper | undefined = undefined;
    let context = this.context;
    try {
      dataShare.createDataShareHelper(context, uri, {isProxy : true}, (err:BusinessError, data:dataShare.DataShareHelper) => {
        if (err !== undefined) {
          console.error(`createDataShareHelper error: code: ${err.code}, message: ${err.message} `);
          return;
        }
        console.info("createDataShareHelper succeed, data : " + data);
        dataShareHelper = data;
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`createDataShareHelper error: code: ${code}, message: ${message} `);
    };
  };
};

```


## createDataShareHelper

```TypeScript
function createDataShareHelper(
    context: Context,
    uri: string,
    options?: DataShareHelperOptions
  ): Promise<DataShareHelper>
```

Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in proxy mode. This API uses a promise to return the result.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.DataShare.Consumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the application. |
| uri | string | Yes | URI of the server application to connect. |
| options | DataShareHelperOptions | No | Optional configuration of the **DataShareHelper** instance. Itspecifies whether [DataShareHelper](arkts-arkdata-datasharehelperoptions-i-sys.md#datasharehelperoptions) is in proxy mode and the waitingtime for starting the data provider process in non-silent access mode.If this parameter is not set,[DataShareHelper](arkts-arkdata-datasharehelperoptions-i-sys.md#datasharehelperoptions) is not in proxy mode and the waiting time forstarting the data provider process in non-silent access mode is 2 seconds.If the URI starts with**datashareproxy**, the **isProxy** parameter in **options** must be set. Otherwise, **DataShareHelper** willfail to be created and an error will be returned.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataShareHelper&gt; | Promise used to return the **DataShareHelper** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a systemAPI.<br>**Applicable version:** 19 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameters types. |
| [15700010](../errorcode-datashare.md#15700010-failed-to-create-a-datasharehelper) | The DataShareHelper fails to be initialized. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    let uri = "datashareproxy://com.samples.datasharetest.DataShare";
    let dataShareHelper: dataShare.DataShareHelper | undefined = undefined;
    let context = this.context;
    try {
      dataShare.createDataShareHelper(context, uri, {isProxy : true}).then((data: dataShare.DataShareHelper) => {
        console.info("createDataShareHelper succeed, data : " + data);
        dataShareHelper = data;
      }).catch((err: BusinessError) => {
        console.error(`createDataShareHelper error: code: ${err.code}, message: ${err.message} `);
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`createDataShareHelper error: code: ${code}, message: ${message} `);
    };
  };
};

```

