# reloadAllForms

## reloadAllForms

```TypeScript
function reloadAllForms(context: UIAbilityContext): Promise<int>
```

Reloads all widgets. Invoked in the main process of the application, this API notifies the FormExtension process to perform batch updates of all widgets added to the current application. It can only be called within a [UIAbility]@ohos.app.ability.UIAbility and uses a promise to return the result.

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | UIAbilityContext | 是 | [UIAbility]@ohos.app.ability.UIAbility context, which is used for  verification. |

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
  formProvider.reloadAllForms(context).then((reloadNum: number) => {
    console.info(`reloadAllForms success, reload number: ${reloadNum}`);
  }).catch((error: BusinessError) => {
    console.error(`promise error, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`catch error, code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`);
}

```

