param env string

param location_short string = 'aue'
param location string = resourceGroup().location

var product = 'rca'

var storageAccount_01_name = 'st${product}${env}${location_short}1'

resource storageAccount_01 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: storageAccount_01_name
  location: location
  sku: {
    name: 'Standard_GRS'
  }
  kind: 'StorageV2'
  properties: {
    dnsEndpointType: 'Standard'
    defaultToOAuthAuthentication: false
    publicNetworkAccess: 'Enabled'
    allowCrossTenantReplication: false
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    largeFileSharesState: 'Enabled'
    networkAcls: {
      bypass: 'AzureServices'
      virtualNetworkRules: []
      ipRules: []
      defaultAction: 'Allow'
    }
    supportsHttpsTrafficOnly: true
    encryption: {
      requireInfrastructureEncryption: false
      services: {
        file: {
          keyType: 'Account'
          enabled: true
        }
        blob: {
          keyType: 'Account'
          enabled: true
        }
      }
      keySource: 'Microsoft.Storage'
    }
    accessTier: 'Hot'
  }

  resource tableService 'tableServices' = {
    name: 'default'

    resource table 'tables' = {
      name: 'rcatable'
    }
  }
}
