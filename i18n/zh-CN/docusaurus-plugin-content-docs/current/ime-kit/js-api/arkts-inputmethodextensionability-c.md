# InputMethodExtensionAbility

The **InputMethodExtensionAbility** module provides APIs for developing input methods and managing the lifecycle of input method extensions. > **NOTE** > > - The APIs of this module can be used only in the stage model.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { InputMethodExtensionAbility } from '@kit.IMEKit';
```

## onCreate

```TypeScript
onCreate(want: Want): void
```

Called when the **InputMethodExtensionAbility** is started to implement initialization.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information related to the InputMethodExtensionAbility, including the ability name and  bundle name. |

**示例：**

```TypeScript
import { InputMethodExtensionAbility, InputMethodAbility, KeyboardDelegate, PanelInfo, PanelType, PanelFlag } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

class InputMethodExt extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info(`onCreate, want: ${want.abilityName}`);

    // 获取输入法能力对象
    let ability: InputMethodAbility = inputMethodEngine.getInputMethodAbility();

    // 获取键盘代理对象
    let keyboardDelegate: KeyboardDelegate = inputMethodEngine.getKeyboardDelegate();

    // 创建面板
    let panelInfo: PanelInfo = {
      type: PanelType.SOFT_KEYBOARD,
      flag: PanelFlag.FLG_FIXED
    };
    ability.createPanel(this.context, panelInfo, (err, panel) => {
      if (err) {
        console.error(`Failed to create panel: ${err.code}`);
        return;
      }
      console.info('Succeeded in creating panel.');
    });

    // 订阅输入法绑定事件
    ability.on('inputStart', (kbController, inputClient) => {
      console.info('Input method bound to client.');
    });
  }
}

```

## onDestroy

```TypeScript
onDestroy(): void
```

Called when this **InputMethodExtensionAbility** is destroyed to clear resources.

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

**示例：**

```TypeScript
import { InputMethodExtensionAbility } from '@kit.IMEKit';

class InputMethodExt extends InputMethodExtensionAbility {
  onDestroy(): void {
    // 销毁面板、取消事件订阅等清理工作
    console.info('onDestroy');
  }
}

```

## context

```TypeScript
context: InputMethodExtensionContext
```

Context of the **InputMethodExtension**, which is inherited from **ExtensionContext**.

**类型：** InputMethodExtensionContext

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

