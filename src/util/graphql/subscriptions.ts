/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onCreateClient(filter: $filter, owner: $owner) {
      id
      user
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onUpdateClient(filter: $filter, owner: $owner) {
      id
      user
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onDeleteClient(filter: $filter, owner: $owner) {
      id
      user
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
