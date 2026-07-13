# CheckBoxGroupConfiguration

You must customize this class to implement the ContentModifier interface. For details, see
[contentModifier](CheckboxGroupAttribute#contentModifier).

**Inheritance/Implementation:** CheckBoxGroupConfiguration extends [CommonConfiguration<CheckBoxGroupConfiguration>](CommonConfiguration<CheckBoxGroupConfiguration>)

**Since:** 21

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name: string
```

Name of the check box group.

**Type:** string

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## status

```TypeScript
status: SelectStatus
```

Selected status of the check box group.

**Type:** SelectStatus

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerChange

```TypeScript
triggerChange: Callback<boolean>
```

Triggers a change in the selection state of the check box group. The value true indicates that the selected status
changes from partially selected or unselected to fully selected, and the value false indicates that the selected
status changes from fully selected or partially selected to unselected.

**Type:** Callback<boolean>

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

