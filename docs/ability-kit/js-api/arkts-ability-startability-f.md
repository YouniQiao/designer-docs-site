---
last_update:
  date: 2026-07-04
---

# startAbility

## Modules to Import

```TypeScript
import { particleAbility } from '@ohos.ability.particleAbility';
```

## startAbility

```TypeScript
function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<void>): void
```

Service ability uses this method to start a specific ability.

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parameter | StartAbilityParameter | Yes | Indicates the ability to start. |
| callback | AsyncCallback&lt;void&gt; | Yes | Returns the result of starting Ability in the form of callback. |

**Example**

```TypeScript
import { particleAbility, wantConstant } from '@kit.AbilityKit';

particleAbility.startAbility(
  {
    want:
    {
      action: 'ohos.want.action.home',
      entities: ['entity.system.home'],
      type: 'MIMETYPE',
      flags: wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION,
      deviceId: '',
      bundleName: 'com.example.Data',
      abilityName: 'com.example.Data.EntryAbility',
      uri: ''
    },
  },
  (error, data) => {
    if (error && error.code !== 0) {
      console.error(`startAbility fail, error: ${JSON.stringify(error)}`);
    } else {
      console.info(`startAbility success, data: ${JSON.stringify(data)}`);
    }
  },
);

```


## startAbility

```TypeScript
function startAbility(parameter: StartAbilityParameter): Promise<void>
```

Service ability uses this method to start a specific ability.

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
| Promise&lt;void&gt; | the promise returned by the function. |

**Example**

```TypeScript
import { particleAbility, wantConstant } from '@kit.AbilityKit';

particleAbility.startAbility(
  {
    want:
    {
      action: 'ohos.want.action.home',
      entities: ['entity.system.home'],
      type: 'MIMETYPE',
      flags: wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION,
      deviceId: '',
      bundleName: 'com.example.Data',
      abilityName: 'com.example.Data.EntryAbility',
      uri: ''
    },
  },
).then(() => {
  console.info('particleAbility startAbility');
});

```

