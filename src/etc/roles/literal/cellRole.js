/**
 * @flow
 */
const cellRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  prohibitedProps: [],
  props: {
    'aria-colindex': null,
    'aria-colindextext': null,
    'aria-colspan': null,
    'aria-rowindex': null,
    'aria-rowindextext': null,
    'aria-rowspan': null,
  },
  relatedConcepts: [
    {
      concept: {
        constraints: [
          'ancestor table element has table role',
        ],
        name: 'td',
      },
      module: 'HTML',
    },
  ],
  requireContextRole: [
    'row',
  ],
  requiredContextRole: [
    'row',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default cellRole;