# GraphQlRealTimeRacing 

## Lab3 notes

Create your own GeoFence for upload to AWS Location Service - https://geojson.io/

Inline Geofence Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "BatchEvaluate",
            "Effect": "Allow",
            "Action": [
                "geo:BatchEvaluateGeofences"
                ],
            "Resource": "arn:aws:geo:us-east-1:<ID>:geofence-collection/MonzaCircuit"
        }
    ]
}
```

Add AWS SDK location service client
```bash
yarn add @aws-sdk/client-location
```

Update amplify/backend/api/schema.graphql
```graphql
type LocationEvent
  @model
  @auth(
    rules: [
      { allow: private, provider: iam, operations: [read, create] }
      { allow: private }
    ]
  ) {
  id: ID!
  type: String
  geofenceId: String
  deviceId: String
  sampleTime: String
  longitude: Float
  latitude: Float
}
```

Add new Amplify Lambda function

```bash
amplify add function
```
> Lambda function
> updateLocation
> NodeJS
> Hello World
> Yes
> Yes
> api
> Query, Mutation
> No
> No
> No

Then update amplify/backend/function/updateLocation/src/index.js with new content

And push to Cloud
```bash
amplify push --yes
```

After adding the new target to the EventBridge update the dependencies & code
```bash
yarn add react-use
yarn add -D @types/zen-observable
```

Finally, add further updates to the src/pages/Map.tsx

## Lab5 notes

After manually adding custom AWS resources to add to the `Amplify` current env `staging` run following

```bash
amplify env checkout staging
amplify status
amplify push --yes
```

Status checks local state for Amplify

Finally, Push will deploy the resources
