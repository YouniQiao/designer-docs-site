# AutoFillTriggerType

```TypeScript
export enum AutoFillTriggerType
```

自动填充服务的拉起类型，通过用户手势操作来选择不同的自动填充服务拉起方式。

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## AUTO_REQUEST

```TypeScript
AUTO_REQUEST = 0
```

自动拉起自动填充服务，可通过[TextInput]@internal/component/ets/text_input控件获焦后自动拉起。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## MANUAL_REQUEST

```TypeScript
MANUAL_REQUEST = 1
```

手动拉起自动填充服务，可通过长按任意输入控件弹出二级菜单，选择自动填充，拉起自动填充服务。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## PASTE_REQUEST

```TypeScript
PASTE_REQUEST = 2
```

粘贴拉起自动填充服务，可通过在密码保险箱内长按用户名或密码选择安全复制后，再长按任意输入控件弹出二级菜单，选择粘贴，拉起自动填充服务。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

