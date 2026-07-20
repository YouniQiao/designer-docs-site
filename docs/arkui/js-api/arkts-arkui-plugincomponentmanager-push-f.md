# push

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@kit.ArkUI';
```

## push

```TypeScript
function push(param: PushParameters, callback: AsyncCallback<void>): void
```

Plugin component push method.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-pluginComponentManager-function push(param: PushParameters, callback: AsyncCallback<void>): void--><!--Device-pluginComponentManager-function push(param: PushParameters, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [PushParameters](arkts-arkui-plugincomponentmanager-pushparameters-i.md) | Yes |  |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes |  |

**Example**

```TypeScript
import { pluginComponentManager } from '@kit.ArkUI';

pluginComponentManager.push(
  {
    want: {
      bundleName: "com.example.provider",
      abilityName: "com.example.provider.MainAbility",
    },
    name: "plugintemplate",
    data: {
      "key_1": "plugin component test",
      "key_2": 34234,
    },
    extraData: {
      "extra_str": "this is push event",
    },
    jsonPath: "",
  },
  (err) => {
    console.info("push_callback: push ok!");
  }
)

```

