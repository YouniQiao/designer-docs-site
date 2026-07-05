# LiveFormExtensionAbility

Interactive widget extension class. It provides APIs for the widget provider to receive notifications about widget creation and destruction.

**继承实现关系：** LiveFormExtensionAbility继承自：ExtensionAbility。

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

## 导入模块

```TypeScript
import { LiveFormInfo } from '@kit.FormKit';
```

## onLiveFormCreate

```TypeScript
onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession): void
```

Called after the UI content of **LiveFormExtensionAbility** is created.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| liveFormInfo | LiveFormInfo | 是 | Interactive widget information, including the widget ID. |
| session | UIExtensionContentSession | 是 | UI information. |

**示例：**

```TypeScript
import { UIExtensionContentSession } from '@kit.AbilityKit';
import { LiveFormExtensionAbility, LiveFormInfo } from '@kit.FormKit';

const TAG: string = '[testTag] LiveFormExtAbility';

export default class LiveFormExtAbility extends LiveFormExtensionAbility {
  onLiveFormCreate(liveFormInfo: LiveFormInfo, session: UIExtensionContentSession) {
    console.info(TAG, `onLiveFormCreate, formId: ${liveFormInfo.formId}`);
  }
}

```

## onLiveFormDestroy

```TypeScript
onLiveFormDestroy(liveFormInfo: LiveFormInfo): void
```

Called to clear resources when this **LiveFormExtensionAbility** is destroyed.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| liveFormInfo | LiveFormInfo | 是 | Interactive widget information, including the widget ID. |

**示例：**

```TypeScript
import { LiveFormExtensionAbility, LiveFormInfo } from '@kit.FormKit';

const TAG: string = '[testTag] LiveFormExtAbility';

export default class LiveFormExtAbility extends LiveFormExtensionAbility {
  onLiveFormDestroy(liveFormInfo: LiveFormInfo) {
    console.info(TAG, `onLiveFormDestroy, liveFormInfo: ${liveFormInfo.formId}`);
  }
}

```

## liveFormContext

```TypeScript
liveFormContext: LiveFormExtensionContext
```

Context of the **LiveFormExtensionAbility**. This context is inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext.

**类型：** LiveFormExtensionContext

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

## context

```TypeScript
context: LiveFormExtensionContext
```

Context of the **LiveFormExtensionAbility**. This context is inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext.

**类型：** LiveFormExtensionContext

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.Form

