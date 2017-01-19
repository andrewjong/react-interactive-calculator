/**
 * Parse to array of phrases
 * @flow
 */

// A list of dentifiers containing the keywords and values associated with them.
// We will ignore anything that is not a keyword.
export const identifiers = {
  NUMBERS: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  BASIC_OPERATIONS: ['+', '-', '*', '/', '^'],
  GROUPINGS: ['{', '[', '(']
};

type ASTNode = {
  Root: {}
};

export default function AST(phrases: string): ASTNode {
  // Ex. split 'one plus two' into ['one', 'plus', 'two']
  const tokens = phrases.split(' ').filter(e => e !== '');

  // Categorize:
  //
  // Check if the phraseArray has invalid words
  // Does a phrase not exist in ReservedWords?
  // If a phrase cannot be categorized, throw error

  return {
    Root: {}
  };
}
