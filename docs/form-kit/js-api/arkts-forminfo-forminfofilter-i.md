# FormInfoFilter

The optional options used as filters to ask getFormsInfo to return formInfos from only forms that match the options.

**Since:** 9

**System capability:** SystemCapability.Ability.Form

## Modules to Import

```TypeScript
import { formInfo } from '@kit.FormKit';
```

## supportedDimensions

```TypeScript
supportedDimensions?: Array<int>
```

optional supportedDimensions that used to ask getFormsInfo to return form infos with the same supportedDimensions. The minimum length is 1, refer to {@link formInfo.FormDimension}.

**Type:** Array<int>

**Since:** 12

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## supportedShapes

```TypeScript
supportedShapes?: Array<int>
```

optional supportedShapes that used to ask getFormsInfo to return form infos with the same supportedShapes. The minimum length is 1, Refer to {@link formInfo.FormShape}.

**Type:** Array<int>

**Since:** 12

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName?: string
```

optional moduleName that used to ask getFormsInfo to return form infos with the same moduleName.

**Type:** string

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.Form

## bundleName

```TypeScript
bundleName?: string
```

optional bundleName that used to ask getFormsInfo to return form infos with the same bundleName.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

