# on

## Modules to Import

```TypeScript
import { PluginComponentTemplate } from '@ohos.pluginComponent';
```

## on

```TypeScript
function on(eventType: string, callback: OnPushEventCallback | OnRequestEventCallback): void
```

Plugin component event listener.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventType | string | Yes |  |
| callback | OnPushEventCallback \| OnRequestEventCallback | Yes |  |

**Example**

```TypeScript
import { pluginComponentManager, PluginComponentTemplate } from '@kit.ArkUI';
import { Want } from '@kit.AbilityKit';

function onPushListener(source:Want, template:PluginComponentTemplate, data:pluginComponentManager.KVObject, extraData:pluginComponentManager.KVObject) {
  console.info("onPushListener template.source=" + template.source);
  console.info("onPushListener source=" + JSON.stringify(source));
  console.info("onPushListener template=" + JSON.stringify(template));
  console.info("onPushListener data=" + JSON.stringify(data));
  console.info("onPushListener extraData=" + JSON.stringify(extraData));
}
function onRequestListener(source:Want, name:string, data:pluginComponentManager.KVObject) {
  console.info("onRequestListener");
  console.info("onRequestListener source=" + JSON.stringify(source));
  console.info("onRequestListener name=" + name);
  console.info("onRequestListener data=" + JSON.stringify(data));
  let RtnData:Record<string,string|pluginComponentManager.KVObject> = { 'template': "ets/pages/plugin.js", 'data': data };
  return RtnData;
}
pluginComponentManager.on("push", onPushListener);
pluginComponentManager.on("request", onRequestListener);

```

