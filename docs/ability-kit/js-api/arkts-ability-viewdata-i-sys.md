# ViewData (System API)

The module defines the view data used for auto-fill.

**Since:** 26.0.0

<!--Device-unnamed-export default interface ViewData--><!--Device-unnamed-export default interface ViewData-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## abilityName

```TypeScript
abilityName: string
```

Ability name.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-ViewData-abilityName: string--><!--Device-ViewData-abilityName: string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle name.The value cannot exceed 512 characters.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ViewData-bundleName: string--><!--Device-ViewData-bundleName: string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## isOtherAccount

```TypeScript
isOtherAccount: boolean
```

Whether to display other account information saved in the password box for the user to select. **true** to display,**false** otherwise.

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-ViewData-isOtherAccount: boolean--><!--Device-ViewData-isOtherAccount: boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## isUserSelected

```TypeScript
isUserSelected: boolean
```

Whether the content to be filled is selected by the user. **true** if the content is selected by the user, and **false** otherwise.

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-ViewData-isUserSelected: boolean--><!--Device-ViewData-isUserSelected: boolean-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## moduleName

```TypeScript
moduleName: string
```

Module name.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

<!--Device-ViewData-moduleName: string--><!--Device-ViewData-moduleName: string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## pageNodeInfos

```TypeScript
pageNodeInfos: Array<PageNodeInfo>
```

Page node information.

**Type:** Array&lt;PageNodeInfo&gt;

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ViewData-pageNodeInfos: Array<PageNodeInfo>--><!--Device-ViewData-pageNodeInfos: Array<PageNodeInfo>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## pageRect

```TypeScript
pageRect: AutoFillRect
```

Coordinates, width, and height of the page.

**Type:** AutoFillRect

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ViewData-pageRect: AutoFillRect--><!--Device-ViewData-pageRect: AutoFillRect-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## pageUrl

```TypeScript
pageUrl: string
```

URL of the page.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ViewData-pageUrl: string--><!--Device-ViewData-pageUrl: string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

