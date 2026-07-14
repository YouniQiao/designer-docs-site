# AutoFillTriggerType (System API)

This module specifies how the autofill service is triggered, based on different user gestures.

**Since:** 26.0.0

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## AUTO_REQUEST

```TypeScript
AUTO_REQUEST = 0
```

Automatically triggers the autofill service when a [TextInput](@internal/component/ets/text_input) component gains focus.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## MANUAL_REQUEST

```TypeScript
MANUAL_REQUEST = 1
```

Manually triggers the autofill service by long-pressing any input component to bring up a secondary menu and selecting autofill.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

## PASTE_REQUEST

```TypeScript
PASTE_REQUEST = 2
```

Triggers the autofill service via paste by long-pressing a username or password in the password vault to select secure copy, long-pressing any input component to bring up a secondary menu, and selecting paste.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**System API:** This is a system API.

