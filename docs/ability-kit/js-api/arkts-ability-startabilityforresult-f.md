# startAbilityForResult

## Modules to Import

```TypeScript
import { featureAbility } from '@ohos.ability.featureAbility';
```

## startAbilityForResult

```TypeScript
function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void
```

Starts an ability and returns the execution result when the ability is destroyed.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | StartAbilityParameter | Yes | Indicates the ability to start. |
| callback | AsyncCallback&lt;AbilityResult&gt; | Yes | Returns the result of starting Ability in the form of callback. |

**Example**

```TypeScript
import { featureAbility, wantConstant } from '@kit.AbilityKit';

featureAbility.startAbilityForResult(
  {
    want:
    {
      action: 'ohos.want.action.home',
      entities: ['entity.system.home'],
      type: 'MIMETYPE',
      flags: wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION,
      deviceId: '',
      bundleName: 'com.example.myapplication',
      /* In the FA model, abilityName consists of package and ability names. */
      abilityName: 'com.example.myapplication.secondAbility',
      uri: ''
    },
  },
  (error, data) => {
    if (error && error.code !== 0) {
      console.error(`startAbilityForResult fail, error: ${JSON.stringify(error)}`);
    } else {
      console.info(`startAbilityForResult success, data: ${JSON.stringify(data)}`);
    }
  }
);

```


## startAbilityForResult

```TypeScript
function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>
```

Starts an ability and returns the execution result when the ability is destroyed.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | StartAbilityParameter | Yes | Indicates the ability to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult&gt; | Returns the {@link AbilityResult}. |

**Example**

```TypeScript
import { featureAbility, wantConstant } from '@kit.AbilityKit';

featureAbility.startAbilityForResult(
  {
    want:
    {
      action: 'ohos.want.action.home',
      entities: ['entity.system.home'],
      type: 'MIMETYPE',
      flags: wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION,
      deviceId: '',
      bundleName: 'com.example.myapplication',
      /* In the FA model, abilityName consists of package and ability names. */
      abilityName: 'com.example.myapplication.secondAbility',
      uri: '',
      parameters:
      {
        mykey0: 1111,
        mykey1: [1, 2, 3],
        mykey2: '[1, 2, 3]',
        mykey3: 'xxxxxxxxxxxxxxxxxxxxxx',
        mykey4: [1, 15],
        mykey5: [false, true, false],
        mykey6: ['aaaaaa', 'bbbbb', 'ccccccccccc'],
        mykey7: true,
      },
    },
  },
).then((data) => {
  console.info(`startAbilityForResult data: ${JSON.stringify(data)}`);
});

```

