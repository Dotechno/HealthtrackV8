// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Link } from '@cloudscape-design/components';

export const ORIGINS_COLUMN_DEFINITIONS = [
  {
    id: 'name',
    header: 'Name and path',
    cell: (item: { name: any; }) => item.name,
  },
  {
    id: 'id',
    header: 'Origin ID',
    cell: (item: { id: any; }) => item.id,
  },
  {
    id: 'type',
    header: 'Origin type',
    cell: (item: { type: any; }) => item.type,
  },
  {
    id: 'accessIdentity',
    header: 'Origin access ID',
    cell: (item: { accessIdentity: any; }) => item.accessIdentity,
  },
];

export const BEHAVIORS_COLUMN_DEFINITIONS = [
  {
    id: 'precedence',
    header: 'Precedence',
    cell: (item: { precedence: any; }) => item.precedence,
  },
  {
    id: 'pathPattern',
    header: 'Path pattern',
    cell: (item: { pathPattern: any; }) => item.pathPattern,
  },
  {
    id: 'origin',
    header: 'Origin',
    cell: (item: { origin: any; }) => item.origin,
  },
  {
    id: 'viewerProtocolPolicy',
    header: 'Viewer protocol policy',
    cell: (item: { viewerProtocolPolicy: any; }) => item.viewerProtocolPolicy,
  },
  {
    id: 'forwardedQueryStrings',
    header: 'Forwarded query strings',
    cell: (item: { forwardedQueryStrings: any; }) => item.forwardedQueryStrings,
  },
];

export const LOGS_COLUMN_DEFINITIONS = [
  {
    id: 'name',
    header: 'Name',
    cell: (item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => <Link href="#">{item.name}</Link>,
  },
  {
    id: 'lastWritten',
    header: 'Last written',
    cell: (item: { lastWritten: any; }) => item.lastWritten,
  },
  {
    id: 'size',
    header: 'Size',
    cell: (item: { size: any; }) => item.size,
  },
];

export const INSTANCE_DROPDOWN_ITEMS = [
  {
    text: 'Take snapshot',
    id: 'snapshot',
  },
  {
    text: 'Reboot',
    id: 'reboot',
  },
  {
    text: 'Stop',
    id: 'stop',
  },
];

export const INVALIDATIONS_COLUMN_DEFINITIONS = [
  {
    id: 'id',
    header: 'Invalidation ID',
  },
  {
    id: 'status',
    header: 'Status',
  },
  {
    id: 'date',
    header: 'Date',
  },
];

export const TAGS_COLUMN_DEFINITIONS = [
  {
    id: 'key',
    header: 'Key',
    cell: (item: { key: any; }) => item.key,
    width: 300,
  },
  {
    id: 'value',
    header: 'Value',
    cell: (item: { value: any; }) => item.value || '-',
  },
];
