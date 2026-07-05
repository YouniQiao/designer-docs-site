# getFormIdsByFormLocation

## getFormIdsByFormLocation

```TypeScript
function getFormIdsByFormLocation(location: formInfo.FormLocation): Promise<Array<string>>
```

Obtains the list of widget IDs at a specified location on the device. This API uses a promise to return the result.

**起始版本：** 24

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| location | formInfo.FormLocation | 是 | Widget location. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the obtained widget ID list. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permissions denied. |
| 202 | The application is not a system application. |
| 16500050 | IPC connection error. |
| 16501016 | The location of the widget is invalid. |

**示例：**

```TypeScript
import { formHost, formInfo } from '@kit.FormKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  formHost.getFormIdsByFormLocation(formInfo.FormLocation.DESKTOP).then((formIds: Array<string>) => {
    console.info('formHost getFormIdsByFormLocation success.');
  }).catch((error: BusinessError) => {
    console.error(`error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${error.code}, message: ${error.message}`);
}

```

