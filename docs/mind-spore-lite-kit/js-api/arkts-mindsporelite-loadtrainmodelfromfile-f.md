# loadTrainModelFromFile

## loadTrainModelFromFile

```TypeScript
function loadTrainModelFromFile(
    model: string,
    trainCfg?: TrainCfg,
    context?: Context): Promise<Model>
```

Load train model from file

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | string | Yes | model file path |
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
| 1000008 | Invalid model path in training. Possible causes: 1. The model path is null; 2.  The model path does not exist. [staticonly] |
| 1000009 | Failed to create native training model from path. Possible causes: 1. The model  file is incorrect; 2. The training configuration is incorrect. [staticonly] |

**Example**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadTrainModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load train model from file. Model file: ${modelFile}, Error: ${error.message}`);
});

```

