# @ohos.app.ability.ConfigurationConstant

The ConfigurationConstant module provides preset enumerated values related to
[Configuration](arkts-ability-configuration-i.md) operations.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityBase

## Modules to Import

```TypeScript
import { ConfigurationConstant } from '@kit.AbilityKit';
```

## Summary

### Enums

| Name | Description |
| --- | --- |
| [ColorMode](arkts-ability-colormode-e.md) | Enumerates the dark/light color modes, which are used in the[Configuration.colorMode](arkts-ability-configuration-i.md) field. You can use these predefinedenumerated values to set or obtain the dark/light color mode of the system or application. |
| [Direction](arkts-ability-direction-e.md) | Enumerates the screen directions, which are used in the[Configuration.direction](arkts-ability-configuration-i.md) field. You can use these predefinedenumerated values to set or obtain the screen direction of the system or application. |
| [ScreenDensity](arkts-ability-screendensity-e.md) | Enumerates the pixel densities of the screen, which are used in the[Configuration.screenDensity](arkts-ability-configuration-i.md) field. You can use thesepredefined enumerated values to set or obtain the pixel density of the screen.The font size is positively correlated with the screen pixel density. By monitoring changes in the screen pixeldensity, you can detect adjustments in the font size. Typically, for the same physical size, the higher the screenpixel density, the larger the font display effect. |

