# push

## push

```TypeScript
function push(param: PushParameters, callback: AsyncCallback<void>): void
```

Plugin component push method.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | PushParameters | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

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

