// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { createRef, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AppLayout,
  Button,
  Container,
  ContentLayout,
  Header,
  Pagination,
  SpaceBetween,
  Table,
  Tabs,
  TextFilter,
} from '@cloudscape-design/components';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { useAsyncData } from '../components/detailed-patient-util';
import DataProvider from '../components/detailed-patient-util';
import {
  INSTANCE_DROPDOWN_ITEMS,
  LOGS_COLUMN_DEFINITIONS,
  INVALIDATIONS_COLUMN_DEFINITIONS,
} from '../components/details-config';
import {
  BehaviorsTable,
  Breadcrumbs,
  EmptyTable,
  GeneralConfig,
  OriginsTable,
  PageHeader,
  SettingsDetails,
  TagsTable,
} from '../components/common-components';
import { Navigation, TableEmptyState, TableNoMatchState, InfoLink, Notifications } from '../components/commons/common-components';
import {
  appLayoutAriaLabels,
  getHeaderCounterText,
  getTextFilterCounterText,
  paginationAriaLabels,
} from 'src/components/i18n-strings';
import ToolsContent from '../components/commons/tools-content';
import { logsTableAriaLabels } from '../components/commons/details-hub'
import '../../styles/base.scss';


const [toolsIndex, SetToolsIndex] = useState<number>(0);
const [toolsOpen, SetToolsOpen] = useState<boolean>(false);
const appLayout = useRef();
const Details = ({ loadHelpPanelContent }: any) => (
  <Container
    header={
      <Header
        variant="h2"
        info={<InfoLink onFollow={() => loadHelpPanelContent(1)} ariaLabel={'Information about details.'} />}
        actions={<Button>Edit</Button>}

      >
        Details
      </Header>
    }
  >
    <SettingsDetails isInProgress={true} />
  </Container>
);

function LogsTable() {
  const [logs, logsLoading] = useAsyncData(() => new DataProvider().getData('logs'));
  const [selectedItems, setSelectedItems] = useState([]);
  const isOnlyOneSelected = selectedItems.length === 1;
  const atLeastOneSelected = selectedItems.length > 0;
  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(logs as any, {
    filtering: {
      empty: <TableEmptyState resourceName="Log" />,
      noMatch: <TableNoMatchState onClearFilter={() => actions.setFiltering('')} />,
    },
    pagination: { pageSize: 10 },
  });

  return (
    <Table
      className="logs-table"
      {...collectionProps}
      loading={logsLoading as any}
      loadingText="Loading logs"
      columnDefinitions={LOGS_COLUMN_DEFINITIONS}
      items={items}
      ariaLabels={logsTableAriaLabels as any}
      selectionType="multi"
      selectedItems={selectedItems}
      onSelectionChange={evt => setSelectedItems(evt.detail.selectedItems as any)}
      header={
        <Header
          counter={getHeaderCounterText(logs as any, selectedItems)}
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button disabled={!isOnlyOneSelected}>View</Button>
              <Button disabled={!atLeastOneSelected}>Watch</Button>
              <Button disabled={!atLeastOneSelected}>Download</Button>
            </SpaceBetween>
          }
        >
          Logs
        </Header>
      }
      filter={
        <TextFilter
          {...filterProps}
          filteringAriaLabel="Find logs"
          filteringPlaceholder="Find logs"
          filteringClearAriaLabel="Clear"
          countText={getTextFilterCounterText(filteredItemsCount as any)}
        />
      }
      pagination={<Pagination {...paginationProps} ariaLabels={paginationAriaLabels} />}
    />
  );
}

function DetailsView() {
  const loadHelpPanelContent = (index: any) => {

    SetToolsIndex(index);
    SetToolsOpen(true);
    // this.appLayout.current?.focusToolsClose();
  }

  const render = () => {
    const tabs = [
      {
        label: 'Details',
        id: 'details',
        content: <Details loadHelpPanelContent={loadHelpPanelContent.bind(DetailsView)} />,
      },
      {
        label: 'Logs',
        id: 'logs',
        content: <LogsTable />,
      },
      {
        label: 'Origins',
        id: 'origins',
        content: <OriginsTable />,
      },
      {
        label: 'Behaviors',
        id: 'behaviors',
        content: <BehaviorsTable />,
      },
      {
        label: 'Invalidations',
        id: 'invalidations',
        content: <EmptyTable title="Invalidation" columnDefinitions={INVALIDATIONS_COLUMN_DEFINITIONS} />,
      },
      {
        label: 'Tags',
        id: 'tags',
        content: <TagsTable loadHelpPanelContent={loadHelpPanelContent.bind(DetailsView)} />,
      },
    ];

    return (
      <AppLayout
        ref={appLayout as any}
        content={
          <ContentLayout
            header={
              <PageHeader
                buttons={[{ text: 'Actions', items: INSTANCE_DROPDOWN_ITEMS }, { text: 'Edit' }, { text: 'Delete' }]}
              />
            }
          >
            <SpaceBetween size="l">
              <GeneralConfig />
              <Tabs tabs={tabs} ariaLabel="Resource details" />
            </SpaceBetween>
          </ContentLayout>
        }
        headerSelector="#header"
        breadcrumbs={<Breadcrumbs />}
        navigation={<Navigation activeHref="#/distributions" />}
        tools={ToolsContent[toolsIndex]}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => (SetToolsOpen(detail.open))}
        ariaLabels={appLayoutAriaLabels}
        notifications={<Notifications />}
      />
    );
  }
}

export default DetailsView;