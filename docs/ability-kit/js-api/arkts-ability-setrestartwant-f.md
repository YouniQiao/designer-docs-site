# setRestartWant

## Modules to Import

```TypeScript
import { appRecovery } from '@ohos.app.ability.appRecovery';
```

## setRestartWant

```TypeScript
function setRestartWant(want: Want): void
```

Sets an ability that will be recovered. The ability must be a UIAbility in the current bundle.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want of the target ability. You can set the **bundleName** and **abilityName** fields in**Want** to specify the ability. |

**Example**

```TypeScript
import { appRecovery, Want } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  build() {
    Button("Start to Recover Ability")
      .fontSize(40)
      .fontWeight(FontWeight.Bold)
      .onClick(()=> {
        // set restart want
        let want: Want = {
          bundleName: "ohos.samples.recovery",
          abilityName: "RecoveryAbility"
        };

        appRecovery.setRestartWant(want);
      })
  }
}

```

