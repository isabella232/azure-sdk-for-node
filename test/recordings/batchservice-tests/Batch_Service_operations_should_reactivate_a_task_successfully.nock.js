// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2019-08-01.10.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Mon, 05 Aug 2019 19:40:01 GMT',
  etag: '0x8D719DCB51DF5FB',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '26938eee-1ea5-42fc-a061-b15ed4ce7a2a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:40:01 GMT',
  connection: 'close' });
 return result; }]];