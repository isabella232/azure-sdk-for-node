// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest?api-version=2020-03-01.11.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#jobs/@Element\",\"id\":\"HelloWorldJobNodeSDKTest\",\"url\":\"https://test4.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest\",\"eTag\":\"0x8D7CD3D476E0A2C\",\"lastModified\":\"2020-03-21T02:12:17.1307564Z\",\"creationTime\":\"2020-03-21T02:12:16.2128928Z\",\"state\":\"active\",\"stateTransitionTime\":\"2020-03-21T02:12:16.2398962Z\",\"priority\":500,\"usesTaskDependencies\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n  },\"poolInfo\":{\r\n    \"poolId\":\"nodesdktestpool1\"\r\n  },\"executionInfo\":{\r\n    \"startTime\":\"2020-03-21T02:12:16.2398962Z\",\"poolId\":\"nodesdktestpool1\"\r\n  },\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Sat, 21 Mar 2020 02:12:17 GMT',
  etag: '0x8D7CD3D476E0A2C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '038ad12b-1837-440f-a7bc-1903a6df0fbc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:16:10 GMT',
  connection: 'close' });
 return result; }]];