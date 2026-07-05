# reloadForms

## reloadForms

```TypeScript
function reloadForms(context: UIAbilityContext, moduleName: string, abilityName: string, formName: string): Promise<int>
```

Reloads widgets. For widgets with the same **moduleName**, **abilityName**, and **formName** of the current application, each widget has a different widget ID after being added to the home screen for multiple times. Widget providers can use this API to batch update widgets that have different IDs but share the same **moduleName**, **abilityName**, and **formName**. Invoked in the main process of the application, this API notifies the FormExtension process to perform batch updates. It can only be called within a [UIAbility]@ohos.app.ability.UIAbility and uses a promise to return the result.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | UIAbilityContext | 是 | [UIAbility]@ohos.app.ability.UIAbility context, which is used for  verification. |
| moduleName | string | 是 | Module name of the widget. |
| abilityName | string | 是 | Ability name of the widget. |
| formName | string | 是 | Name of the widget configured in  [form_config.json](docroot://form/arkts-ui-widget-configuration.md#fields-in-configuration-file). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the number of widgets requested for update. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16501000 | An internal functional error occurred. |

**示例：**

```TypeScript
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { formProvider } from '@kit.FormKit';

try {
  // 请在组件内获取context，确保this.getUIContext().getHostContext()返回结果为UIAbilityContext。
  let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
  // 请开发者替换为实际请求更新的卡片信息
  let moduleName: string = 'entry';
  let abilityName: string = 'EntryFormAbility';
  let formName: string = 'formName';
  formProvider.reloadForms(context, moduleName, abilityName, formName).then((reloadNum: number) => {
    console.info(`reloadForms success, reload number: ${reloadNum}`);
  }).catch((error: BusinessError) => {
    console.error(`promise error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

