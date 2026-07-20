# KeyEvent

Enumerates key events. When the [EnterpriseAdminExtensionAbility.onKeyEvent](arkts-mdm-enterprise-enterpriseadminextensionability-enterpriseadminextensionability-c.md#onkeyevent-1)key event callback is triggered, the current key event information is transferred.

**Since:** 23

<!--Device-systemManager-interface KeyEvent--><!--Device-systemManager-interface KeyEvent-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## actionTime

```TypeScript
actionTime: number
```

Time when the key action occurs. The value is a microsecond-level timestamp after the system is powered on. For long-press key events, this parameter remains unchanged in subsequent key events. Apps can use this timestamp to determine whether the event is a long-press event and execute the corresponding long-press event logic accordingly.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-KeyEvent-actionTime: number--><!--Device-KeyEvent-actionTime: number-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyAction

```TypeScript
keyAction: KeyAction
```

Key action.

**Type:** KeyAction

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-KeyEvent-keyAction: KeyAction--><!--Device-KeyEvent-keyAction: KeyAction-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyCode

```TypeScript
keyCode: KeyCode
```

Key code.

**Type:** KeyCode

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-KeyEvent-keyCode: KeyCode--><!--Device-KeyEvent-keyCode: KeyCode-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyItems

```TypeScript
keyItems: Array<KeyItem>
```

Information about other keys that are being pressed when the current key event occurs.

**Type:** Array<KeyItem>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-KeyEvent-keyItems: Array<KeyItem>--><!--Device-KeyEvent-keyItems: Array<KeyItem>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

