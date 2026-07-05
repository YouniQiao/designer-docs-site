# loadTrainModelFromFd

## loadTrainModelFromFd

```TypeScript
function loadTrainModelFromFd(
    model: int,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from file description

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | int | Yes | model file description |
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
| 1000012 | Failed to create native training model from file descriptor (fd). Possible  causes: 1. The model file or file descriptor (fd) is incorrect; 2. The training configuration is  incorrect. [staticonly] |

**Example**

```TypeScript
import { fileIo } from '@kit.CoreFileKit';

let modelFile = '/path/to/xxx.ms';
let file = fileIo.openSync(modelFile, fileIo.OpenMode.READ_ONLY);
mindSporeLite.loadTrainModelFromFd(file.fd).then((mindSporeLiteModel: mindSporeLite.Model) => {
  console.info(`Succeeded in loading train model. Train mode: ${mindSporeLiteModel.trainMode}`);
}).catch((error: Error) => {
  console.error(`Failed to load train model from file descriptor. Model file: ${modelFile}, File descriptor: ${file.fd}, Error: ${error.message}`);
});

```

