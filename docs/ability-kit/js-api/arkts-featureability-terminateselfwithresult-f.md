# terminateSelfWithResult

## terminateSelfWithResult

```TypeScript
function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void
```

停止当前的Ability。使用callback异步回调。如果该Ability是通过调用 [startAbilityForResult]featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>) 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用 [startAbilityForResult]featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>) 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | 表示停止Ability之后返回的结果。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止当前Ability成功，err为undefined，否则为错误对象。 |

**Example**

```TypeScript
import { featureAbility, wantConstant } from '@kit.AbilityKit';

featureAbility.terminateSelfWithResult(
  {
    resultCode: 1,
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
      parameters: {
        mykey0: 2222,
        mykey1: [1, 2, 3],
        mykey2: '[1, 2, 3]',
        mykey3: 'ssssssssssssssssssssssssss',
        mykey4: [1, 15],
        mykey5: [false, true, false],
        mykey6: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],
        mykey7: true,
      }
    },
  },
  (error) => {
    console.error(`error: ${JSON.stringify(error)}`);
  }
);

```

## terminateSelfWithResult

```TypeScript
function terminateSelfWithResult(parameter: AbilityResult): Promise<void>
```

停止当前的Ability。使用Promise异步回调。如果该Ability是通过调用 [startAbilityForResult]featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>) 接口被拉起的，调用terminateSelfWithResult接口时会将结果返回给调用者，如果该Ability不是通过调用 [startAbilityForResult]featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>) 接口被拉起的，调用terminateSelfWithResult接口时不会有结果返回给调用者。

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | 表示停止Ability之后返回的结果。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Example**

```TypeScript
import { featureAbility, wantConstant } from '@kit.AbilityKit';

featureAbility.terminateSelfWithResult(
  {
    resultCode: 1,
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
      uri:'',
      parameters: {
        mykey0: 2222,
        mykey1: [1, 2, 3],
        mykey2: '[1, 2, 3]',
        mykey3: 'ssssssssssssssssssssssssss',
        mykey4: [1, 15],
        mykey5: [false, true, false],
        mykey6: ['qqqqq', 'wwwwww', 'aaaaaaaaaaaaaaaaa'],
        mykey7: true,
      }
    },
  }
).then(() => {
  console.info('==========================>terminateSelfWithResult=======================>');
});

```

