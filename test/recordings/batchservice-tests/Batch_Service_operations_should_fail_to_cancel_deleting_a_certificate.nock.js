// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .post('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)/canceldelete?api-version=2019-08-01.10.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"CertificateBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified certificate has been marked for deletion and is being deleted.\\nRequestId:c956c979-727a-421d-9f91-b1d4555d19c9\\nTime:2019-08-05T19:44:00.2807743Z\"\r\n  }\r\n}", { 'content-length': '382',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c956c979-727a-421d-9f91-b1d4555d19c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:44:00 GMT',
  connection: 'close' });
 return result; }]];