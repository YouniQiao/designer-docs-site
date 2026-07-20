# request

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@kit.ArkUI';
```

## request

```TypeScript
function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void
```

Plugin component request method.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-pluginComponentManager-function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void--><!--Device-pluginComponentManager-function request(param: RequestParameters, callback: AsyncCallback<RequestCallbackParameters>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [RequestParameters](arkts-arkui-plugincomponentmanager-requestparameters-i.md) | Yes |  |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<RequestCallbackParameters> | Yes |  |

**Example**

```TypeScript
import { pluginComponentManager } from '@kit.ArkUI';

pluginComponentManager.request(
  {
    want: {
      bundleName: "com.example.provider",
      abilityName: "com.example.provider.MainAbility",
    },
    name: "plugintemplate",
    data: {
      "key_1": "plugin component test",
      "key_2": 1111111,
    },
    jsonPath: "",
  },
  (err, data) => {
    console.info("request_callback: componentTemplate.ability=" + data.componentTemplate.ability);
    console.info("request_callback: componentTemplate.source=" + data.componentTemplate.source);
    console.info("request_callback: data=" + JSON.stringify(data.data));
    console.info("request_callback: extraData=" + JSON.stringify(data.extraData));
  }
)

```

