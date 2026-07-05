# AccessibilityOptions

Defines the struct of AccessibilityOptions.

**Since:** 14

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityPreferred

```TypeScript
accessibilityPreferred?: boolean
```

accessibilityPreferred - Should accessibilityText be prioritized when concatenating child component strings.

**Type:** boolean

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## actionControllerId

```TypeScript
actionControllerId?: string
```

actionControllerId - the first component of a specific id found within the composition defined by accessibility group will take over part of the accessibility action of the composition

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## actionControllerRoleType

```TypeScript
actionControllerRoleType?: AccessibilityRoleType
```

actionControllerRoleType - the first component of a specific type found within the composition defined by accessibility group will take over part of the accessibility action of the composition

**Type:** AccessibilityRoleType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stateControllerId

```TypeScript
stateControllerId?: string
```

stateControllerId - the first component of a specific id found within the composition defined by accessibility group will take over the state attributes and announcement of the composition

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stateControllerRoleType

```TypeScript
stateControllerRoleType?: AccessibilityRoleType
```

stateControllerRoleType - the first component of a specific type found within the composition defined by accessibility group will take over the state attributes and announcement of the composition

**Type:** AccessibilityRoleType

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

