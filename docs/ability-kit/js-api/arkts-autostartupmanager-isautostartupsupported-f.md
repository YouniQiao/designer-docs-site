# isAutoStartupSupported

## isAutoStartupSupported

```TypeScript
function isAutoStartupSupported(): boolean
```

检查当前设备是否支持开机自启动。 > **说明：** > > 建议在调用[autoStartupManager.getAutoStartupStatusForSelf]autoStartupManager.getAutoStartupStatusForSelf 之前，先调 > 用该接口检查设备能力。如果返回false，则表明当前设备不支持开机自启动。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前设备是否支持开机自启动。true：支持，false：不支持。 |

