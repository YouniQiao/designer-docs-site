# loadTrainModelFromBuffer

## loadTrainModelFromBuffer

```TypeScript
function loadTrainModelFromBuffer(
    model: ArrayBuffer,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from buffer

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| model | ArrayBuffer | 是 | model buffer |
| trainCfg | TrainCfg | 否 |  |
| context | Context | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Model> | the promise of the built model |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. The  device information is incorrect. [staticonly] |
| 1000010 | Invalid model buffer in training. Possible causes: 1. The model buffer size is  incorrect; 2. The model buffer is null. [staticonly] |
| 1000011 | Failed to create native training model from buffer. Possible causes: 1. The  model buffer is incorrect; 2. The training configuration is incorrect. [staticonly] |

**示例：**

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

