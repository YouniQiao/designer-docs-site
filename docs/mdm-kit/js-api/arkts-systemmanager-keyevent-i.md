# KeyEvent

按键事件。 [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-enterpriseadminextensionability-c.md#onKeyEvent) 按键事件回调触发时，传递当前按键事件信息。

**Since:** 23

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## keyCode

```TypeScript
keyCode: KeyCode
```

按键编码。

**Type:** KeyCode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## actionTime

```TypeScript
actionTime: number
```

按键动作发生时间，系统开机后微秒级时间戳。当按键长按时后续按键事件该参数不发生改变，应用可以通过该时间来判断该事件是否属于长按事件，以执行长按事件逻辑处理。 取值范围为全体整数。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyAction

```TypeScript
keyAction: KeyAction
```

按键动作。

**Type:** KeyAction

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyItems

```TypeScript
keyItems: Array<KeyItem>
```

其他按键信息，当前按键事件发生时，其他正在被按下的按键信息。

**Type:** Array<KeyItem>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

