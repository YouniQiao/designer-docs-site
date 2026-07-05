# setFormNextRefreshTime

## setFormNextRefreshTime

```TypeScript
function setFormNextRefreshTime(formId: string, minute: number, callback: AsyncCallback<void>): void
```

Sets the next refresh time for a widget. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| minute | number | 是 | Time for the next refresh. The value must be greater than or equal to 5, in minutes. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider } from '@kit.FormKit';
// 使用时需要用已经存在formId
let formId: string = '12400633174999288';
formProvider.setFormNextRefreshTime(formId, 5, (error: BusinessError) => {
  if (error.code) {
    console.error(`formProvider setFormNextRefreshTime, errorCode: ${error.code}, errorMessage: ${error.message}`);
  }
});

```

## setFormNextRefreshTime

```TypeScript
function setFormNextRefreshTime(formId: string, minute: number): Promise<void>
```

Sets the next refresh time for a widget. This API uses a promise to return the result.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formProvider:formProvider#setFormNextRefreshTime

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |
| minute | number | 是 | Time for the next refresh. The value must be greater than or equal to 5, in minutes. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider } from '@kit.FormKit';
// 使用时需要用已经存在formId
let formId: string = '12400633174999288';
formProvider.setFormNextRefreshTime(formId, 5).then(() => {
  console.info('formProvider setFormNextRefreshTime success');
}).catch((error: BusinessError) => {
  console.error(`formProvider setFormNextRefreshTime, errorCode: ${error.code}, errorMessage: ${error.message}`);
});

```

