# setRestartWant

## setRestartWant

```TypeScript
function setRestartWant(want: Want): void
```

设置下次恢复主动拉起场景下的Ability。该Ability必须为当前包下的UIAbility。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 通过设置Want中"bundleName"和"abilityName"字段来指定恢复重启的Ability。 |

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

