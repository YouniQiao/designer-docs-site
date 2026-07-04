# NavDestinationSwitchInfo

Provides the information about page switching of the **Navigation** component.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiObserver } from '@ohos.arkui.observer';
```

## context

```TypeScript
context: UIAbilityContext | UIContext
```

Context information corresponding to **Navigation** component that triggers page switching.

**Type:** UIAbilityContext | UIContext

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## from

```TypeScript
from: NavDestinationInfo | NavBar
```

Source page for page switching.

**Type:** NavDestinationInfo | NavBar

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## operation

```TypeScript
operation: NavigationOperation
```

Page switching operation type.

**Type:** NavigationOperation

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## to

```TypeScript
to: NavDestinationInfo | NavBar
```

Destination page for page switching.

**Type:** NavDestinationInfo | NavBar

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

