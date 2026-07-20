# getWant

## Modules to Import

```TypeScript
import { featureAbility } from '@kit.AbilityKit';
```

## getWant

```TypeScript
function getWant(callback: AsyncCallback<Want>): void
```

Obtains the Want corresponding to the ability to start. This API uses an asynchronous callback to return the result.

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-featureAbility-function getWant(callback: AsyncCallback<Want>): void--><!--Device-featureAbility-function getWant(callback: AsyncCallback<Want>): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Want> | Yes | Callback used to return the Want. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.getWant((error, data) => {
  if (error && error.code !== 0) {
    console.error(`getWant fail, error: ${JSON.stringify(error)}`);
  } else {
    console.info(`getWant success, data: ${JSON.stringify(data)}`);
  }
});

```


## getWant

```TypeScript
function getWant(): Promise<Want>
```

Obtains the Want corresponding to the ability to start. This API uses a promise to return the result.

**Since:** 6

**Model restriction:** This API can be used only in the FA model.

<!--Device-featureAbility-function getWant(): Promise<Want>--><!--Device-featureAbility-function getWant(): Promise<Want>-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Want> | Promise used to return the Want. |

**Example**

```TypeScript
import { featureAbility } from '@kit.AbilityKit';

featureAbility.getWant().then((data) => {
  console.info(`getWant data: ${JSON.stringify(data)}`);
});

```

