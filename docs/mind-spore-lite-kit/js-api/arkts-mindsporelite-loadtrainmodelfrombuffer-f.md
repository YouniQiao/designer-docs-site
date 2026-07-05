# loadTrainModelFromBuffer

## loadTrainModelFromBuffer

```TypeScript
function loadTrainModelFromBuffer(
    model: ArrayBuffer,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from buffer

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | ArrayBuffer | Yes | model buffer |
| trainCfg | TrainCfg | No |  |
| context | Context | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Model> | the promise of the built model |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000010 | Invalid model buffer in training. Possible causes: 1. The model buffer size is  incorrect; 2. The model buffer is null. [staticonly] |
| 1000011 | Failed to create native training model from buffer. Possible causes: 1. The  model buffer is incorrect; 2. The training configuration is incorrect. [staticonly] |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { UIContext } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let modelFile = 'xxx.ms';
let globalContext = new UIContext().getHostContext() as common.UIAbilityContext;
globalContext.getApplicationContext()
  .resourceManager
  .getRawFileContent(modelFile)
  .then((buffer: Uint8Array) => {
    let modelBuffer = buffer.buffer;
    mindSporeLite.loadTrainModelFromBuffer(modelBuffer).then((mindSporeLiteModel: mindSporeLite.Model) => {
      console.info(`Succeeded in loading train model. Train mode: ${mindSporeLiteModel.trainMode}`);
    }).catch((error: Error) => {
      console.error(`Failed to load train model from buffer. Model file: ${modelFile}, Buffer size: ${modelBuffer.byteLength}, Error: ${error.message}`);
    });
  })
  .catch((error: BusinessError) => {
    console.error(`Failed to read model file from resources. File name: ${modelFile}, Error code: ${error.code}, Error message: ${error.message}`);
  });

```

