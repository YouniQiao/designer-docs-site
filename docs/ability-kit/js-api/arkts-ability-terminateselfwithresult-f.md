# terminateSelfWithResult

## Modules to Import

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
```

## terminateSelfWithResult

```TypeScript
function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void
```

Terminates this ability. This API uses an asynchronous callback to return the result. If the ability is started by
calling
[startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1)
, the result is returned to the caller when **terminateSelfWithResult** is called. Otherwise, no result is returned
to the caller when **terminateSelfWithResult** is called.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | Result returned after the ability is terminated. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**; otherwise, **err** is an error object. |

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

Terminates this ability. This API uses a promise to return the result. If the ability is started by calling
[startAbilityForResult](arkts-ability-startabilityforresult-f.md#startabilityforresult-1)
, the result is returned to the caller when **terminateSelfWithResult** is called. Otherwise, no result is returned
to the caller when **terminateSelfWithResult** is called.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | AbilityResult | Yes | Result returned after the ability is terminated. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

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

