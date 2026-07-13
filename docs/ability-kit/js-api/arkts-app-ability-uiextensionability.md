# @ohos.app.ability.UIExtensionAbility

## Modules to Import

```TypeScript
import { UIExtensionAbility } from '@kit.AbilityKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [UIExtensionAbility](arkts-ability-uiextensionability-c.md) | UIExtensionAbility is an ExtensionAbility component with a User Interface (UI). It inherits from[ExtensionAbility](arkts-ability-extensionability-c.md) and provides basic lifecyclecapabilities such as component creation, destruction, and foreground/background switching. Unlike the UIAbility, theUIExtensionAbility does not appear as a separate mission in the mission view. The foreground/background state andvisibility of the UIExtensionAbility follow those of its host window.You cannot directly inherit from the UIExtensionAbility. However, you can choose other components that inherit fromUIExtensionAbility based on specific service scenarios. For example, when handling data shared from otherapplications, you can use the[ShareExtensionAbility](arkts-ability-shareextensionability-c.md); when providingwidget editing functionality, you can use the[FormEditExtensionAbility](../../apis-form-kit/arkts-apis/arkts-form-formeditextensionability-c.md).For details about the inheritance relationship of each ability, see[Inheritance Relationship](../../../../reference/apis-ability-kit/js-apis-app-ability-ability.md#ability-inheritance-relationship). |

