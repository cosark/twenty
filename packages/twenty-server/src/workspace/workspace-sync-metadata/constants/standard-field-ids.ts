/**
 * /!\ DO NOT EDIT THE IDS OF THIS FILE /!\
 * This file contains static ids for standard objects.
 * These ids are used to identify standard objects in the database and compare them even when renamed.
 * For readability keys can be edited but the values should not be changed.
 */

export const activityTargetStandardFieldIds = {
  activity: '20202020-c7fc-4d02-88c8-edbd6e7a22fc',
  person: '20202020-be11-44ff-b7ea-21b9ac955340',
  company: '20202020-cf30-47e2-94d6-084a96b93a64',
  opportunity: '20202020-80d4-4510-9afc-b1c7242b0606',
  custom: '20202020-402d-4a7f-b541-2815edd7abc7',
};

export const activityStandardFieldIds = {
  title: '20202020-a1b2-4c3d-88e8-edf6e7a8b9fc',
  body: '20202020-c2b3-4d4e-88f9-edg7h8i9j0kc',
  type: '20202020-d3c4-4e5f-89g0-feh1i2j3k4ld',
  reminderAt: '20202020-e4d5-5f6g-9a1b-gfi2j3k4l5me',
  dueAt: '20202020-f5e6-6g7h-0b2c-hgj3k4l5m6nf',
  completedAt: '20202020-g6f7-7h8i-1c3d-ihk4l5m6n7og',
  activityTargets: '20202020-h7g8-8i9j-2d4e-jil5m6n7o8pq',
  attachments: '20202020-i8h9-9j0a-3e5f-kjm6n7o8p9qr',
  comments: '20202020-j9i0-0a1b-4f6g-lkn7o8p9q0rs',
  author: '20202020-k0j1-1b2c-5g7h-mlo8p9q1r2st',
  assignee: '20202020-l1k2-2c3d-6h8i-nmp9q0r1s2tu',
};

export const apiKeyStandardFieldIds = {
  name: '20202020-a1c3-4e5f-88g9-edh6i7j8k9lm',
  expiresAt: '20202020-b2d4-5f6g-99h0-fei1j2k3l4mn',
  revokedAt: '20202020-c3e5-6g7h-0a1b-gfj2k3l4m5no',
};

export const attachmentStandardFieldIds = {
  name: '20202020-d4f6-7h8j-91k2-lm3n4o5p6q7r',
  fullPath: '20202020-e5g7-8i9k-02l3-mn4p5q6r7s8t',
  type: '20202020-f6h8-9j0l-13m4-on5p6q7r8s9u',
  author: '20202020-g7i9-0k1m-24n5-po6q7r8s9t0v',
  activity: '20202020-h8j0-1l2n-35o6-qp7r8s9t1u2w',
  person: '20202020-i9k1-2m3o-46p7-qr8s9t0u3v4x',
  company: '20202020-j0l2-3n4p-57q8-rs9t1u4v5w6y',
  opportunity: '20202020-k1m3-4o5q-68r9-st0u2v5w6x7z',
};

export const baseObjectStandardFieldIds = {
  id: '20202020-l2m4-5n6o-78p9-qrst0u1v2w3x',
  createdAt: '20202020-m3n5-6o7p-89q0-rstu1v2w3x4y',
  updatedAt: '20202020-n4o6-7p8q-90r1-stuv2w3x4y5z',
};

export const blocklistStandardFieldIds = {
  handle: '20202020-o5p7-8q9r-01s2-tuv3w4x5y6z7',
  workspaceMember: '20202020-p6q8-9r0s-12t3-uvw4x5y6z7a8',
};

export const calendarChannelStandardFieldIds = {
  connectedAccount: '20202020-q7r9-0s1t-23u4-vwx5y6z7a8b9',
  handle: '20202020-r8s0-1t2u-34v5-wxy6z7a8b9c0',
  visibility: '20202020-s9t1-2u3v-45w6-xyz7a8b9c0d1',
  isContactAutoCreationEnabled: '20202020-t0u2-3v4w-56x7-yza8b9c0d1e2',
  isSyncEnabled: '20202020-u1v3-4w5x-67y8-zab9c0d1e2f3',
  syncCursor: '20202020-v2w4-5x6y-78z9-abc0d1e2f3g4',
};

export const calendarEventAttendeeStandardFieldIds = {
  calendarEvent: '20202020-w3x5-6y7z-89a0-bcd1e2f3g4h5',
  handle: '20202020-x4y6-7z8a-90b1-cde2f3g4h5i6',
  displayName: '20202020-y5z7-8a9b-01c2-def3g4h5i6j7',
  isOrganizer: '20202020-z6a8-9b0c-12d3-efg4h5i6j7k8',
  responseStatus: '20202020-a7b9-0c1d-23e4-fgh5i6j7k8l9',
  person: '20202020-b8c0-1d2e-34f5-ghi6j7k8l9m0',
  workspaceMember: '20202020-c9d1-2e3f-45g6-hij7k8l9m0n1',
};

export const calendarEventStandardFieldIds = {
  title: '20202020-d0e1-2f3g-4h5i-6j7k8l9m0n1o',
  isCanceled: '20202020-e1f2-3g4h-5i6j-7k8l9m0n2p',
  isFullDay: '20202020-f2g3-4h5i-6j7k-8l9m0n1o2p3',
  startsAt: '20202020-g3h4-5i6j-7k8l-9m0n1o2p3q4',
  endsAt: '20202020-h4i5-6j7k-8l9m-0n1o2p3q4r5',
  externalCreatedAt: '20202020-i5j6-7k8l-9m0n-1o2p3q4r5s6',
  externalUpdatedAt: '20202020-j6k7-8l9m-0n1o-2p3q4r5s6t7',
  description: '20202020-k7l8-9m0n-1o2p-3q4r5s6t7u8',
  location: '20202020-l8m9-0n1o-2p3q-4r5s6t7u8v9',
  iCalUID: '20202020-m9n0-1o2p-3q4r-5s6t7u8v9w0',
  conferenceSolution: '20202020-n0o1-2p3q-4r5s-6t7u8v9w0x1',
  conferenceUri: '20202020-o1p2-3q4r-5s6t-7u8v9w0x1y2',
  recurringEventExternalId: '20202020-p2q3-4r5s-6t7u-8v9w0x1y2z3',
  eventAttendees: '20202020-q3r4-5s6t-7u8v-9w0x1y2z3a4',
};

export const commentStandardFieldIds = {
  body: '20202020-r2s3-4t5u-6v7w-8x9y0z1a2b3c',
  author: '20202020-s3t4-5u6v-7w8x-9y0z1a2b3c4d',
  activity: '20202020-t4u5-6v7w-8x9y-0z1a2b3c4d5e',
};

export const companyStandardFieldIds = {
  name: '20202020-u2v3-4w5x-6y7z-8a9b0c1d2e3f',
  domainName: '20202020-v3w4-5x6y-7z8a-9b0c1d2e3g4h',
  address: '20202020-w4x5-6y7z-8a9b-0c1d2e3f4g5h',
  employees: '20202020-x5y6-7z8a-9b0c-1d2e3f4g5h6i',
  linkedinLink: '20202020-y6z7-8a9b-0c1d-2e3f4g5h6i7j',
  xLink: '20202020-z7a8-9b0c-1d2e-3f4g5h6i7j8k',
  annualRecurringRevenue: '20202020-a8b9-0c1d-2e3f-4g5h6i7j8k9l',
  idealCustomerProfile: '20202020-b9c0-1d2e-3f4g-5h6i7j8k9l0m',
  position: '20202020-c0d1-2e3f-4g5h-6i7j8k9l0m1n',
  people: '20202020-d1e2-3f4g-5h6i-7j8k9l0m1n2o',
  accountOwner: '20202020-e2f3-4g5h-6i7j-8k9l0m1n2o3p',
  activityTargets: '20202020-f3g4-5h6i-7j8k-9l0m1n2o3p4q',
  opportunities: '20202020-g4h5-6i7j-8k9l-0m1n2o3p4q5r',
  favorites: '20202020-h5i6-7j8k-9l0m-1n2o3p4q5r6s',
  attachments: '20202020-i6j7-8k9l-0m1n-2o3p4q5r6s7t',
};

export const connectedAccountStandardFieldIds = {
  handle: '20202020-j7k8-9l0m-1n2o-3p4q5r6s7t8u',
  provider: '20202020-k8l9-0m1n-2o3p-4q5r6s7t8u9v',
  accessToken: '20202020-l9m0-1n2o-3p4q-5r6s7t8u9v0w',
  refreshToken: '20202020-m0n1-2o3p-4q5r-6s7t8u9v0w1x',
  accountOwner: '20202020-n1o2-3p4q-5r6s-7t8u9v0w1x2y',
  lastSyncHistoryId: '20202020-o2p3-4q5r-6s7t-8u9v0w1x2y3z',
  messageChannels: '20202020-p3q4-5r6s-7t8u-9v0w1x2y3z4a',
  calendarChannels: '20202020-q4r5-6s7t-8u9v-0w1x2y3z4a5b',
};

export const favoriteStandardFieldIds = {
  position: '20202020-j7k8-9l0m-1n2o-3p4q5r6s7t8u',
  workspaceMember: '20202020-k8l9-0m1n-2o3p-4q5r6s7t8u9v',
  person: '20202020-l9m0-1n2o-3p4q-5r6s7t8u9v0w',
  company: '20202020-m0n1-2o3p-4q5r-6s7t8u9v0w1x',
  opportunity: '20202020-n1o2-3p4q-5r6s-7t8u9v0w1x2y',
  custom: '20202020-o2p3-4q5r-6s7t-8u9v0w1x2y3z',
};

export const messageChannelMessageAssociationStandardFieldIds = {
  messageChannel: '20202020-p2q3-4r5s-6t7u-8v9w0x1y2z3a',
  message: '20202020-q3r4-5s6t-7u8v-9w0x1y2z3a4b5',
  messageExternalId: '20202020-r4s5-6t7u-8v9w-0x1y2z3a4b5c6',
  messageThread: '20202020-s5t6-7u8v-9w0x-1y2z3a4b5c6d7',
  messageThreadExternalId: '20202020-t6u7-8v9w-0x1y-2z3a4b5c6d7e8',
};

export const messageChannelStandardFieldIds = {
  visibility: '20202020-u7v8-9w0x-1y2z-3a4b5c6d7e8f9',
  handle: '20202020-v8w9-0x1y-2z3a-4b5c6d7e8f9g0',
  connectedAccount: '20202020-w9x0-1y2z-3a4b-5c6d7e8f9g0h1',
  type: '20202020-x0y1-2z3a-4b5c-6d7e8f9g0h1i2',
  isContactAutoCreationEnabled: '20202020-y1z2-3a4b-5c6d-7e8f9g0h1i2j3',
  messageChannelMessageAssociations: '20202020-z2a3-4b5c-6d7e-8f9g0h1i2j3k4',
};

export const messageParticipantStandardFieldIds = {
  message: '20202020-a3b4-5c6d-7e8f-9g0h1i2j3k4l5',
  role: '20202020-b4c5-6d7e-8f9g-0h1i2j3k4l5m6n',
  handle: '20202020-c5d6-7e8f-9g0h-1i2j3k4l5m6n7o',
  displayName: '20202020-d6e7-8f9g-0h1i-2j3k4l5m6n7o8',
  person: '20202020-e7f8-9g0h-1i2j-3k4l5m6n7o8p9',
  workspaceMember: '20202020-f8g9-0h1i-2j3k-4l5m6n7o8p9q',
};

export const messageThreadStandardFieldIds = {
  messages: '20202020-g9h0-1i2j-3k4l-5m6n7o8p9q0r1',
  messageChannelMessageAssociations: '20202020-h0i1-2j3k-4l5m-6n7o8p9q0r1s2t3',
};

export const messageStandardFieldIds = {
  headerMessageId: '20202020-i1j2-3k4l-5m6n-7o8p9q0r1s2',
  messageThread: '20202020-j2k3-4l5m-6n7o-8p9q0r1s2t3u',
  direction: '20202020-k3l4-5m6n-7o8p-9q0r1s2t3u4v',
  subject: '20202020-l4m5-6n7o-8p9q-0r1s2t3u4v5w',
  text: '20202020-m5n6-7o8p-9q0r-1s2t3u4v5w6x',
  receivedAt: '20202020-n6o7-8p9q-0r1s-2t3u4v5w6x7y',
  messageParticipants: '20202020-o7p8-9q0r-1s2t-3u4v5w6x7y8z',
  messageChannelMessageAssociations: '20202020-p8q9-0r1s-2t3u-4v5w6x7y8z9a',
};

export const opportunityStandardFieldIds = {
  name: '20202020-q8r9-0s1t-2u3v-4w5x6y7z8a9b0',
  amount: '20202020-r9s0-1t2u-3v4w-5x6y7z8a9b0c1',
  closeDate: '20202020-s0t1-2u3v-4w5x-6y7z8a9b0c1d2',
  probability: '20202020-t1u2-3v4w-5x6y-7z8a9b0c1d2e3',
  stage: '20202020-u2v3-4w5x-6y7z-8a9b0c1d2e3f4',
  position: '20202020-v3w4-5x6y-7z8a-9b0c1d2e3f4g5',
  pipelineStep: '20202020-w4x5-6y7z-8a9b-0c1d2e3f4g5h6',
  pointOfContact: '20202020-x5y6-7z8a-9b0c-1d2e3f4g5h6i7',
  company: '20202020-y6z7-8a9b-0c1d-2e3f4g5h6i7j8',
  favorites: '20202020-z7a8-9b0c-1d2e-3f4g5h6i7j8k9',
  activityTargets: '20202020-a8b9-0c1d-2e3f-4g5h6i7j8k9l0',
  attachments: '20202020-b9c0-1d2e-3f4g-5h6i7j8k9l0m1',
};

export const personStandardFieldIds = {
  name: '20202020-q9r0-1s2t-3u4v-5w6x7y8z9a0b',
  email: '20202020-r0s1-2t3u-4v5w-6x7y8z9a0b1c',
  linkedinLink: '20202020-s1t2-3u4v-5w6x-7y8z9a0b1c2d',
  xLink: '20202020-t2u3-4v5w-6x7y-8z9a0b1c2d3e',
  jobTitle: '20202020-u3v4-5w6x-7y8z-9a0b1c2d3e4f',
  phone: '20202020-v4w5-6x7y-8z9a-0b1c2d3e4f5g',
  city: '20202020-w5x6-7y8z-9a0b-1c2d3e4f5g6h',
  avatarUrl: '20202020-x6y7-8z9a-0b1c-2d3e4f5g6h7i',
  position: '20202020-y7z8-9a0b-1c2d-3e4f5g6h7i8j',
  company: '20202020-z8a9-0b1c-2d3e-4f5g6h7i8j9k',
  pointOfContactForOpportunities: '20202020-a9b0-1c2d-3e4f-5g6h7i8j9k0l',
  activityTargets: '20202020-b0c1-2d3e-4f5g-6h7i8j9k0l1m',
  favorites: '20202020-c1d2-3e4f-5g6h-7i8j9k0l1m2n',
  attachments: '20202020-d2e3-4f5g-6h7i-8j9k0l1m2n3o',
  messageParticipants: '20202020-e3f4-5g6h-7i8j-9k0l1m2n3o4p',
  calendarEventAttendees: '20202020-f4g5-6h7i-8j9k-0l1m2n3o4p5q',
};

export const pipelineStepStandardFieldIds = {
  name: '20202020-g5h6-7i8j-9k0l-1m2n3o4p5q6r',
  color: '20202020-h6i7-8j9k-0l1m-2n3o4p5q6r7s',
  position: '20202020-i7j8-9k0l-1m2n-3o4p5q6r7s8t',
  opportunities: '20202020-j8k9-0l1m-2n3o-4p5q6r7s8t9u',
};

export const viewFieldStandardFieldIds = {
  fieldMetadataId: '20202020-k9l0-1m2n-3o4p-5q6r7s8t9u0v',
  isVisible: '20202020-l0m1-2n3o-4p5q-6r7s8t9u0v1w',
  size: '20202020-m1n2-3o4p-5q6r-7s8t9u0v1w2x',
  position: '20202020-n2o3-4p5q-6r7s-8t9u0v1w2x3y',
  view: '20202020-o3p4-5q6r-7s8t-9u0v1w2x3y4z',
};

export const viewFilterStandardFieldIds = {
  fieldMetadataId: '20202020-p4q5-6r7s-8t9u-0v1w2x3y4z5',
  operand: '20202020-q5r6-7s8t-9u0v-1w2x3y4z5a6b',
  value: '20202020-r6s7-8t9u-0v1w-2x3y4z5a6b7c',
  displayValue: '20202020-s7t8-9u0v-1w2x-3y4z5a6b7c8d',
  view: '20202020-t8u9-0v1w-2x3y-4z5a6b7c8d9e',
};

export const viewSortStandardFieldIds = {
  fieldMetadataId: '20202020-u4v5-6w7x-8y9z-0a1b2c3d4e5f',
  direction: '20202020-v5w6-7x8y-9z0a-1b2c3d4e5f6g',
  view: '20202020-w6x7-8y9z-0a1b-2c3d4e5f6g7h',
};

export const viewStandardFieldIds = {
  name: '20202020-x7y8-9z0a-1b2c-3d4e5f6g7h8i',
  objectMetadataId: '20202020-y8z9-0a1b-2c3d-4e5f6g7h8i9j',
  type: '20202020-z9a0-1b2c-3d4e-5f6g7h8i9j0k',
  isCompact: '20202020-a9b0-1c2d-3e4f-5g6h7i8j9k0l',
  viewFields: '20202020-b0c1-2d3e-4f5g-6h7i8j9k0l1m',
  viewFilters: '20202020-c1d2-3e4f-5g6h-7i8j9k0l1m2n',
  viewSorts: '20202020-d2e3-4f5g-6h7i-8j9k0l1m2n3o',
};

export const webhookStandardFieldIds = {
  targetUrl: '20202020-u5v6-7w8x-9y0z-a1b2c3d4e5f6g',
  operation: '20202020-v6w7-8x9y-0z1a-2b3c4d5e6f7h',
};

export const workspaceMemberStandardFieldIds = {
  name: '20202020-w7x8-9y0z-a1b2-3c4d5e6f7g8h9',
  colorScheme: '20202020-x8y9-0z1a-b2c3-4d5e6f7g8h9i',
  locale: '20202020-y9z0-1a2b-c3d4-5e6f7g8h9i0j',
  avatarUrl: '20202020-z0a1-2b3c-d4e5-6f7g8h9i0j1k',
  userEmail: '20202020-a1b2-3c4d-e5f6-7g8h9i0j1k2l',
  userId: '20202020-b2c3-4d5e-f6g7-8h9i0j1k2l3m',
  authoredActivities: '20202020-c3d4-5e6f-g7h8-9i0j1k2l3m4n',
  assignedActivities: '20202020-d4e5-6f7g-h8i9-0j1k2l3m4n5o',
  favorites: '20202020-e5f6-7g8h-i9j0-k1l2m3n4o5p6',
  accountOwnerForCompanies: '20202020-f6g7-8h9i-j0k1-l2m3n4o5p6q7',
  authoredAttachments: '20202020-g7h8-9i0j-k1l2-m3n4o5p6q7r8',
  authoredComments: '20202020-h8i9-0j1k-l2m3-n4o5p6q7r8s9',
  connectedAccounts: '20202020-i9j0-1k2l-m3n4-o5p6q7r8s9t0',
  messageParticipants: '20202020-j0k1-2l3m-n4o5-p6q7r8s9t0u1',
  blocklist: '20202020-k1l2-3m4n-o5p6-q7r8s9t0u1v2',
  calendarEventAttendees: '20202020-l2m3-4n5o-p6q7-r8s9t0u1v2w3',
};

export const customObjectStandardFieldIds = {
  name: '20202020-z9a0-1b2c-3d4e-5f6g7h8i9j0k1',
  position: '20202020-a0b1-2c3d-4e5f-6g7h8i9j0k1l2',
  activityTargets: '20202020-b1c2-3d4e-5f6g-7h8i9j0k1l2m3',
  favorites: '20202020-c2d3-4e5f-6g7h-8i9j0k1l2m3n4',
  attachments: '20202020-d3e4-5f6g-7h8i-9j0k1l2m3n4o5',
};
