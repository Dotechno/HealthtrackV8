// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from 'react';
import {
  Box,
  BreadcrumbGroup,
  Button,
  ButtonDropdown,
  ColumnLayout,
  Container,
  Header,
  ProgressBar,
  StatusIndicator,
  SpaceBetween,
  Table,
  ButtonDropdownProps,
} from '@cloudscape-design/components';
import { useAsyncData } from './commons/use-async-data';
import DataProvider from './commons/data-provider';
import { TableEmptyState, InfoLink } from './commons/common-components';
import { ORIGINS_COLUMN_DEFINITIONS, BEHAVIORS_COLUMN_DEFINITIONS, TAGS_COLUMN_DEFINITIONS } from './details-config';
// import { resourceDetailBreadcrumbs } from './commons/breadcrumbs';
import CopyText from './commons/copy-text';
import { baseTableAriaLabels, getHeaderCounterText } from './i18n-strings';


export const DEMO_DISTRIBUTION = {
  id: 'SLCCSMWOHOFUY0',
  domainName: 'abcdef01234567890.cloudfront.net',
  arn: 'arn:aws:cloudfront::abcdef01234567890.cloudfront.net/SLCCSMWOHOFUY0',
  priceClass: 'Use only US, Canada, Europe, and Asia',
  sslCertificate: 'Default CloudFront SSL certificate',
  logging: 'Off',
};

export const Breadcrumbs = () => (
  <BreadcrumbGroup items={[]} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />
);

export const PageHeader = ({ buttons }:any) => {
  return (
    <Header
      variant="h1"
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          {buttons.map((button: { items: readonly ButtonDropdownProps.ItemOrGroup[]; href: any; disabled: any; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; }, key: React.Key | null | undefined) =>
            !button.items ? (
              <Button href={button.href || ''} disabled={button.disabled || false} key={key}>
                {button.text}
              </Button>
            ) : (
              <ButtonDropdown items={button.items} key={key}>
                {button.text}
              </ButtonDropdown>
            )
          )}
        </SpaceBetween>
      }
    >
      {DEMO_DISTRIBUTION.id}
    </Header>
  );
};

export const GeneralConfig = () => (
  <Container header={<Header variant="h2">General configuration</Header>}>
    <ColumnLayout columns={4} variant="text-grid">
      <div>
        <Box variant="awsui-key-label">Engine</Box>
        <div>Oracle Enterprise Edition 12.1.0.2.v7</div>
      </div>
      <div>
        <Box variant="awsui-key-label">DB instance class</Box>
        <div>db.t2.large</div>
      </div>
      <div>
        <Box variant="awsui-key-label">DB instance status</Box>
        <StatusIndicator type="success">Available</StatusIndicator>
      </div>
      <div>
        <Box variant="awsui-key-label">Pending maintenance</Box>
        <div>None</div>
      </div>
    </ColumnLayout>
  </Container>
);

export const SettingsDetails = ({ distribution = DEMO_DISTRIBUTION, isInProgress }:any) => (
  <ColumnLayout columns={4} variant="text-grid">
    <SpaceBetween size="l">
      <div>
        <Box variant="awsui-key-label">Distribution ID</Box>
        <div>{distribution.id}</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Domain name</Box>
        <div>{distribution.domainName}</div>
      </div>
      <div>
        <Box variant="awsui-key-label">ARN</Box>
        <CopyText
          copyText={`arn:aws:cloudfront::${distribution.domainName}/${distribution.id}`}
          copyButtonLabel="Copy ARN"
          successText="ARN copied"
          errorText="ARN failed to copy"
        />
      </div>
    </SpaceBetween>

    <SpaceBetween size="l">
      {distribution.state ? (
        <StatusIndicator type={distribution.state === 'Deactivated' ? 'error' : 'success'}>
          {distribution.state}
        </StatusIndicator>
      ) : (
        <ProgressBar
          value={27}
          label="Status"
          description={isInProgress ? 'Update in progress' : undefined}
          variant="key-value"
          resultText="Available"
          status={isInProgress ? 'in-progress' : 'success'}
        />
      )}

      <div>
        <Box variant="awsui-key-label">Price class</Box>
        <div>{distribution.priceClass}</div>
      </div>
      <div>
        <Box variant="awsui-key-label">CNAMEs</Box>
        <div>-</div>
      </div>
    </SpaceBetween>
    <SpaceBetween size="l">
      <div>
        <Box variant="awsui-key-label">SSL certificate</Box>
        <div>{distribution.sslCertificate}</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Custom SSL client support</Box>
        <div>-</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Logging</Box>
        <div>{distribution.logging}</div>
      </div>
    </SpaceBetween>
    <SpaceBetween size="l">
      <div>
        <Box variant="awsui-key-label">IPv6</Box>
        <div>Off</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Default root object</Box>
        <div>-</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Comment</Box>
        <div>To verify</div>
      </div>
    </SpaceBetween>
  </ColumnLayout>
);

export const EmptyTable = (props: { title: string; columnDefinitions: ({ id: string; header: string; cell: (item: { key: any; }) => any; width: number; } | { id: string; header: string; cell: (item: { value: any; }) => any; width?: undefined; })[]; }) => {
  const resourceType = props.title || 'Tag';
  const colDefs = props.columnDefinitions || TAGS_COLUMN_DEFINITIONS;
  return (
    <Table
      empty={<TableEmptyState resourceName={resourceType} />}
      columnDefinitions={colDefs as any}
      items={[]}
      header={
        <Header
          actions={
            <SpaceBetween size="xs" direction="horizontal">
              <Button disabled={true}>Edit</Button>
              <Button disabled={true}>Delete</Button>
              <Button>Create {resourceType.toLowerCase()}</Button>
            </SpaceBetween>
          }
        >{`${resourceType}s`}</Header>
      }
    />
  );
};

const originsSelectionLabels = {
  ...baseTableAriaLabels,
  itemSelectionLabel: (data: any, row: { name: any; }) => `select ${row.name}`,
  selectionGroupLabel: 'Origins selection',
};

export function OriginsTable() {
  const [origins, originsLoading] = useAsyncData(() => new DataProvider().getData('origins'));
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const isOnlyOneSelected = selectedItems.length === 1;
  const atLeastOneSelected = selectedItems.length > 0;

  return (
    <Table
      columnDefinitions={ORIGINS_COLUMN_DEFINITIONS as any}
      loading={originsLoading as any}
      loadingText="Loading origins"
      items={origins as any}
      ariaLabels={originsSelectionLabels}
      selectionType="single"
      selectedItems={selectedItems}
      onSelectionChange={event => setSelectedItems(event.detail.selectedItems)}
      header={
        <Header
          counter={getHeaderCounterText(origins as any, selectedItems)}
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button disabled={!isOnlyOneSelected}>Edit</Button>
              <Button disabled={!atLeastOneSelected}>Delete</Button>
              <Button>Create origin</Button>
            </SpaceBetween>
          }
        >
          Origins
        </Header>
      }
    />
  );
}

const behaviorsSelectionLabels = {
  ...baseTableAriaLabels,
  itemSelectionLabel: (data: any, row: { pathPattern: any; origin: any; }) => `select path ${row.pathPattern} from origin ${row.origin}`,
  selectionGroupLabel: 'Behaviors selection',
};

export function BehaviorsTable() {
  const [behaviors, behaviorsLoading] = useAsyncData(() => new DataProvider().getData('behaviors'));
  const [selectedItems, setSelectedItems] = useState([]);
  const isOnlyOneSelected = selectedItems.length === 1;
  const atLeastOneSelected = selectedItems.length > 0;

  return (
    <Table
      columnDefinitions={BEHAVIORS_COLUMN_DEFINITIONS as any}
      items={behaviors as any}
      loading={behaviorsLoading  as any}
      loadingText="Loading behaviors"
      ariaLabels={behaviorsSelectionLabels}
      selectionType="single"
      selectedItems={selectedItems}
      
      header={
        <Header
          counter={getHeaderCounterText(behaviors as any, selectedItems)}
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button disabled={!isOnlyOneSelected}>Edit</Button>
              <Button disabled={!atLeastOneSelected}>Delete</Button>
              <Button>Create behavior</Button>
            </SpaceBetween>
          }
        >
          Cache behavior settings
        </Header>
      }
    />
  );
}
