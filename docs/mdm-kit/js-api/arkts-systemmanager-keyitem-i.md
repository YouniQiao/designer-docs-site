# KeyItem

其他按键信息。当前[KeyCode]systemManager.KeyCode事件发生时，其他已被按下的按键信息。

**Since:** 23

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## downTime

```TypeScript
downTime: number
```

按键动作发生时间，系统开机后微秒级时间戳。导航按键不支持组合扩展，发生时间显示为0。 取值范围为全体整数。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## keyCode

```TypeScript
keyCode: KeyCode
```

按键编码。

**Type:** KeyCode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## pressed

```TypeScript
pressed: boolean
```

按键动作。按键是否被按下。true：按下；false：抬起

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

