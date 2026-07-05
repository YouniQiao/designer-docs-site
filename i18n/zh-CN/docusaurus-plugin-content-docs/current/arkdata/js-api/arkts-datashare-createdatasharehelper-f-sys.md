# createDataShareHelper

## createDataShareHelper

```TypeScript
function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void
```

Creates a **DataShareHelper** instance. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the application. |
| uri | string | 是 | URI of the server application to connect. |
| callback | AsyncCallback&lt;DataShareHelper> | 是 | Callback used to return the result. If the operation is  successful, err is undefined and data is the DataShareHelper instance created. Otherwise,  err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 19] |
| 401 | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 15700010 | The DataShareHelper fails to be initialized. |

**示例：**

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
          console.error(`Failed to create DataShareHelper. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info("createDataShareHelper succeed, data : " + data);
        dataShareHelper = data;
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`Failed to create DataShareHelper. Code: ${code}, message: ${message}`);
    };
  }
}

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

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the application context. |
| uri | string | 是 | Indicates the path of the file to open. |
| options | DataShareHelperOptions | 是 | Indicates the optional config. |
| callback | AsyncCallback&lt;DataShareHelper> | 是 | {DataShareHelper}: The dataShareHelper for consumer. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 19] |
| 401 | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 15700010 | The DataShareHelper fails to be initialized. |

**示例：**

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
          console.error(`Failed to create DataShareHelper. Code: ${err.code}, message: ${err.message}`);
          return;
        }
        console.info("createDataShareHelper succeed, data : " + data);
        dataShareHelper = data;
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`Failed to create DataShareHelper. Code: ${code}, message: ${message}`);
    };
  }
}

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

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Context of the application. |
| uri | string | 是 | URI of the server application to connect. |
| options | DataShareHelperOptions | 否 | Optional configuration of the DataShareHelper instance. It  specifies whether [DataShareHelper]dataShare.DataShareHelperOptions is in proxy mode and the waiting  time for starting the data provider process in non-silent access mode.If this parameter is not set,  [DataShareHelper]dataShare.DataShareHelperOptions is not in proxy mode and the waiting time for  starting the data provider process in non-silent access mode is 2 seconds.If the URI starts with  datashareproxy, the isProxy parameter in options must be set. Otherwise, DataShareHelper will  fail to be created and an error will be returned. [since 10] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DataShareHelper> | Promise used to return the DataShareHelper instance created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 19] |
| 401 | Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 15700010 | The DataShareHelper fails to be initialized. |

**示例：**

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
        console.error(`Failed to create DataShareHelper. Code: ${err.code}, message: ${err.message}`);
      });
    } catch (err) {
      let code = (err as BusinessError).code;
      let message = (err as BusinessError).message;
      console.error(`Failed to create DataShareHelper. Code: ${code}, message: ${message}`);
    };
  }
}

```

